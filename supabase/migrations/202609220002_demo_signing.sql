begin;

alter table public.agreements add column is_demo boolean not null default false;
alter table public.agreement_versions
  add column revision integer not null default 1,
  add column snapshot text,
  add column finalized_at timestamptz,
  add column completed_document_path text,
  add column completed_sha256 text;
alter table public.agreement_signers
  add column token_hash text unique,
  add column token_expires_at timestamptz,
  add column signature text,
  add column consent text,
  add column signed_at timestamptz;

create function public.guard_agreement_version() returns trigger language plpgsql as $$
begin
  if old.status <> 'draft' and (
    new.content is distinct from old.content or new.snapshot is distinct from old.snapshot
    or new.document_sha256 is distinct from old.document_sha256
    or new.document_path is distinct from old.document_path
    or new.agreement_id <> old.agreement_id or new.version <> old.version
    or new.finalized_at is distinct from old.finalized_at
  ) then raise exception 'Finalized agreement is immutable'; end if;
  if old.status <> new.status and not (
    (old.status = 'draft' and new.status in ('finalized','voided')) or
    (old.status = 'finalized' and new.status in ('completed','voided'))
  ) then raise exception 'Invalid agreement transition'; end if;
  if old.completed_document_path is not null and (
    new.completed_document_path is distinct from old.completed_document_path or
    new.completed_sha256 is distinct from old.completed_sha256
  ) then raise exception 'Completed PDF is immutable'; end if;
  return new;
end $$;
create trigger immutable_agreement_version before update on public.agreement_versions
for each row execute function public.guard_agreement_version();

create function public.guard_agreement_signer() returns trigger language plpgsql as $$
begin
  if new.version_id <> old.version_id or new.role <> old.role then
    raise exception 'Signer assignment is immutable'; end if;
  if exists(select 1 from public.agreement_versions where id=old.version_id and status <> 'draft')
    and (new.name <> old.name or new.email <> old.email or new.title <> old.title)
    then raise exception 'Finalized signer is immutable'; end if;
  if old.signed_at is not null and (new.signature is distinct from old.signature
    or new.signed_at is distinct from old.signed_at or new.consent is distinct from old.consent)
    then raise exception 'Signature is immutable'; end if;
  return new;
end $$;
create trigger immutable_agreement_signer before update on public.agreement_signers
for each row execute function public.guard_agreement_signer();

create function public.guard_signing_event() returns trigger language plpgsql as $$
begin raise exception 'Signing events are append-only'; end $$;
create trigger immutable_signing_event before update or delete on public.agreement_signing_events
for each row execute function public.guard_signing_event();

create function public.create_demo_agreement(p_actor uuid, p_content jsonb) returns uuid
language plpgsql set search_path = public as $$
declare a uuid; v uuid; r text;
begin
  if p_content->>'demo' is distinct from 'true' then raise exception 'Demo required'; end if;
  insert into agreements(title,created_by,is_demo) values(p_content->>'title',p_actor,true) returning id into a;
  insert into agreement_versions(agreement_id,version,content) values(a,1,p_content) returning id into v;
  foreach r in array array['alpath','client'] loop
    insert into agreement_signers(version_id,role,name,email,title)
    values(v,r,p_content->r->>'name',p_content->r->>'email',p_content->r->>'title');
  end loop;
  insert into agreement_signing_events(version_id,event_type) values(v,'draft_created');
  return v;
end $$;

create function public.save_demo_draft(p_id uuid,p_revision integer,p_content jsonb) returns void
language plpgsql set search_path = public as $$
declare v agreement_versions; r text;
begin
  select * into v from agreement_versions where id=p_id for update;
  if not found or v.status <> 'draft' or v.revision <> p_revision or
    not exists(select 1 from agreements where id=v.agreement_id and is_demo) or
    p_content->>'demo' is distinct from 'true' then raise exception 'Draft changed; reload before saving'; end if;
  update agreement_versions set content=p_content,revision=revision+1 where id=p_id;
  update agreements set title=p_content->>'title' where id=v.agreement_id;
  foreach r in array array['alpath','client'] loop
    update agreement_signers set name=p_content->r->>'name',email=p_content->r->>'email',title=p_content->r->>'title'
    where version_id=p_id and role=r;
  end loop;
end $$;

create function public.finalize_demo_agreement(p_id uuid,p_revision integer,p_snapshot text,p_path text) returns void
language plpgsql set search_path = public as $$
declare v agreement_versions; h text;
begin
  select * into v from agreement_versions where id=p_id for update;
  if not found or v.status <> 'draft' or v.revision <> p_revision or v.content <> p_snapshot::jsonb or
    not exists(select 1 from agreements where id=v.agreement_id and is_demo)
    then raise exception 'Draft changed; reload before finalizing'; end if;
  h := encode(sha256(convert_to(p_snapshot,'UTF8')),'hex');
  update agreement_versions set status='finalized',snapshot=p_snapshot,document_sha256=h,
    document_path=p_path,finalized_at=now() where id=p_id;
  insert into agreement_signing_events(version_id,event_type,details)
    values(p_id,'finalized',jsonb_build_object('document_sha256',h));
end $$;

create function public.issue_demo_link(p_id uuid,p_hash text) returns void
language plpgsql set search_path = public as $$
declare v agreement_versions;
begin
  select * into v from agreement_versions where id=p_id for update;
  if not found or v.status not in ('finalized','completed') or
    not exists(select 1 from agreement_signers where version_id=p_id and role='alpath' and signed_at is not null)
    then raise exception 'Sign as Alpath before creating a link'; end if;
  update agreement_signers set token_hash=p_hash,token_expires_at=now()+interval '14 days'
    where version_id=p_id and role='client';
  insert into agreement_signing_events(version_id,event_type) values(p_id,case when p_hash is null then 'link_revoked' else 'link_issued' end);
end $$;

create function public.sign_demo_agreement(p_id uuid,p_role text,p_token_hash text,p_signature text,p_consent text,p_document_hash text)
returns void language plpgsql set search_path = public as $$
declare v agreement_versions; s agreement_signers;
begin
  select * into v from agreement_versions where id=p_id for update;
  if not found or v.status not in ('finalized','completed') or v.document_sha256 <> p_document_hash or
    not exists(select 1 from agreements where id=v.agreement_id and is_demo)
    then raise exception 'Agreement is not available for signing'; end if;
  select * into s from agreement_signers where version_id=p_id and role=p_role for update;
  if not found or p_signature is distinct from s.name or length(p_consent)<20
    then raise exception 'Confirm the signer name and consent'; end if;
  if p_role='client' and (p_token_hash is null or s.token_hash is distinct from p_token_hash or
    s.token_expires_at <= now() or not exists(select 1 from agreement_signers where version_id=p_id and role='alpath' and signed_at is not null))
    then raise exception 'Signing link is invalid or expired'; end if;
  if s.signed_at is not null then return; end if;
  update agreement_signers set signature=p_signature,consent=p_consent,signed_at=now() where id=s.id;
  insert into agreement_signing_events(version_id,signer_id,event_type,details)
    values(p_id,s.id,'signed',jsonb_build_object('role',p_role,'name',s.name,'email',s.email,'consent',p_consent,'document_sha256',p_document_hash));
  if not exists(select 1 from agreement_signers where version_id=p_id and signed_at is null) then
    update agreement_versions set status='completed' where id=p_id;
    insert into agreement_signing_events(version_id,event_type) values(p_id,'completed');
  end if;
end $$;

create function public.void_demo_agreement(p_id uuid) returns void language plpgsql set search_path = public as $$
begin
  perform 1 from agreement_versions where id=p_id and status in ('draft','finalized') for update;
  if not found then raise exception 'Only unfinished agreements can be voided'; end if;
  update agreement_versions set status='voided' where id=p_id;
  update agreement_signers set token_hash=null,token_expires_at=null where version_id=p_id;
  insert into agreement_signing_events(version_id,event_type) values(p_id,'voided');
end $$;

-- RPCs are callable only by the server, which verifies admin identity or the
-- high-entropy signer token. Never grant these to browser roles.
revoke all on function public.create_demo_agreement(uuid,jsonb), public.save_demo_draft(uuid,integer,jsonb),
  public.finalize_demo_agreement(uuid,integer,text,text),public.issue_demo_link(uuid,text),
  public.sign_demo_agreement(uuid,text,text,text,text,text),public.void_demo_agreement(uuid)
  from public,anon,authenticated;
grant execute on function public.create_demo_agreement(uuid,jsonb), public.save_demo_draft(uuid,integer,jsonb),
  public.finalize_demo_agreement(uuid,integer,text,text),public.issue_demo_link(uuid,text),
  public.sign_demo_agreement(uuid,text,text,text,text,text),public.void_demo_agreement(uuid) to service_role;
commit;
