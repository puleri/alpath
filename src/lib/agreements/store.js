import 'server-only';
import { createClient } from '@supabase/supabase-js';
import { hash, validId, validToken } from './model.mjs';

export function agreementStore() {
  if (!process.env.SUPABASE_SECRET_KEY)
    throw new Error('Agreement storage is not configured.');
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SECRET_KEY,
    {
      auth: { persistSession: false, autoRefreshToken: false },
    },
  );
}

export async function rpc(name, args) {
  const { data, error } = await agreementStore().rpc(name, args);
  if (error)
    throw new Error(
      'The agreement could not be updated. Refresh the page and try again. If this continues, check that the latest database migration has been applied.',
    );
  return data;
}

export async function getAgreement(id) {
  if (!validId(id)) return null;
  const db = agreementStore();
  const { data: version, error } = await db
    .from('agreement_versions')
    .select('*')
    .eq('id', id)
    .maybeSingle();
  if (error)
    throw new Error('Agreement storage is unavailable. Please try again.');
  if (!version) return null;
  const { data: agreement, error: ae } = await db
    .from('agreements')
    .select('id,is_demo')
    .eq('id', version.agreement_id)
    .single();
  if (ae || !agreement?.is_demo) return null;
  const [{ data: signers, error: se }, { data: events, error: ee }] =
    await Promise.all([
      db
        .from('agreement_signers')
        .select(
          'id,role,name,email,title,signature,consent,signed_at,token_expires_at',
        )
        .eq('version_id', id)
        .order('role'),
      db
        .from('agreement_signing_events')
        .select('id,event_type,details,created_at,signer_id')
        .eq('version_id', id)
        .order('created_at')
        .order('id'),
    ]);
  if (se || ee || signers.length !== 2)
    throw new Error('Unable to load the signing record.');
  if (version.snapshot && hash(version.snapshot) !== version.document_sha256)
    throw new Error(
      'Document integrity check failed. Contact the administrator.',
    );
  return {
    ...version,
    signers,
    events,
    content: version.snapshot ? JSON.parse(version.snapshot) : version.content,
  };
}

export async function getByToken(token) {
  if (!validToken(token)) return null;
  const { data, error } = await agreementStore()
    .from('agreement_signers')
    .select('version_id,token_expires_at')
    .eq('role', 'client')
    .eq('token_hash', hash(token))
    .maybeSingle();
  if (error)
    throw new Error('Signing is temporarily unavailable. Please try again.');
  if (
    !data ||
    !data.token_expires_at ||
    Date.parse(data.token_expires_at) <= Date.now()
  )
    return null;
  const version = await getAgreement(data.version_id);
  return version && ['finalized', 'completed'].includes(version.status)
    ? version
    : null;
}
