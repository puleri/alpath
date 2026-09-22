-- Foundation only. Signing transitions and document freezing are added before
-- enabling signing. Clients have no direct access to these tables or files.
begin;

create table public.agreements (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  created_by uuid not null references auth.users(id),
  created_at timestamptz not null default now()
);

create table public.agreement_versions (
  id uuid primary key default gen_random_uuid(),
  agreement_id uuid not null references public.agreements(id),
  version integer not null check (version > 0),
  content jsonb not null,
  status text not null default 'draft' check (status in ('draft', 'finalized', 'completed', 'voided')),
  document_path text,
  document_sha256 text,
  created_at timestamptz not null default now(),
  unique (agreement_id, version)
);

create table public.agreement_signers (
  id uuid primary key default gen_random_uuid(),
  version_id uuid not null references public.agreement_versions(id),
  role text not null check (role in ('alpath', 'client')),
  name text not null,
  email text not null,
  title text not null default '',
  unique (version_id, role)
);

create table public.agreement_signing_events (
  id uuid primary key default gen_random_uuid(),
  version_id uuid not null references public.agreement_versions(id),
  signer_id uuid references public.agreement_signers(id),
  event_type text not null,
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.agreements enable row level security;
alter table public.agreement_versions enable row level security;
alter table public.agreement_signers enable row level security;
alter table public.agreement_signing_events enable row level security;

revoke all on public.agreements, public.agreement_versions,
  public.agreement_signers, public.agreement_signing_events from anon, authenticated;

-- Application server access only. Every privileged request must independently
-- verify either the admin identity or the agreement-specific signing token.
grant all on public.agreements, public.agreement_versions,
  public.agreement_signers, public.agreement_signing_events to service_role;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('agreement-documents', 'agreement-documents', false, 52428800, array['application/pdf'])
on conflict (id) do nothing;

commit;
