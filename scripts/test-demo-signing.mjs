// Explicit opt-in integration test. Creates labeled demo records only.
// Run with Node 22+: node --env-file=.env.local scripts/test-demo-signing.mjs
import assert from 'node:assert/strict';
import { createClient } from '@supabase/supabase-js';
import { randomBytes } from 'node:crypto';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { hash, snapshotOf, CONSENT } from '../src/lib/agreements/model.mjs';
import { renderAgreementPdf } from '../src/lib/agreements/pdf-render.mjs';

const db = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY,
  { auth: { persistSession: false, autoRefreshToken: false } },
);
const template = JSON.parse(
  await readFile(
    new URL('../src/lib/agreements/demo-template.json', import.meta.url),
  ),
);
const { data: users, error: userError } = await db.auth.admin.listUsers();
assert.ifError(userError);
const admin = users.users.find((u) => u.email === 'matt@alpathengineering.com');
assert.ok(admin?.email_confirmed_at);
const content = {
  demo: true,
  title: '[QA] Union Street independent demo',
  body: template.body,
  alpath: {
    name: 'Matt Puleri (Demo)',
    email: admin.email,
    title: 'Test representative',
  },
  client: { name: 'Demo Client', email: admin.email, title: 'Test signer' },
};
async function rpc(name, args, fail = false) {
  const { data, error } = await db.rpc(name, args);
  if (fail) assert.ok(error, `${name} must reject invalid transition`);
  else assert.ifError(error);
  return data;
}
const id = await rpc('create_demo_agreement', {
  p_actor: admin.id,
  p_content: content,
});
await rpc(
  'save_demo_draft',
  { p_id: id, p_revision: 99, p_content: content },
  true,
);
await rpc('save_demo_draft', { p_id: id, p_revision: 1, p_content: content });
const token = randomBytes(32).toString('hex');
await rpc('issue_demo_link', { p_id: id, p_hash: hash(token) }, true);
const snapshot = snapshotOf(content);
const documentHash = hash(snapshot);
const base = {
  id,
  version: 1,
  content,
  status: 'finalized',
  document_sha256: documentHash,
  events: [],
  signers: [],
};
const original = await renderAgreementPdf(base);
assert.ifError(
  (
    await db.storage
      .from('agreement-documents')
      .upload(`${id}/qa-original.pdf`, original, {
        contentType: 'application/pdf',
      })
  ).error,
);
await rpc(
  'finalize_demo_agreement',
  {
    p_id: id,
    p_revision: 1,
    p_snapshot: snapshot,
    p_path: `${id}/qa-original.pdf`,
  },
  true,
);
await rpc('finalize_demo_agreement', {
  p_id: id,
  p_revision: 2,
  p_snapshot: snapshot,
  p_path: `${id}/qa-original.pdf`,
});
await rpc(
  'save_demo_draft',
  { p_id: id, p_revision: 2, p_content: content },
  true,
);
assert.ok(
  (
    await db
      .from('agreement_versions')
      .update({ content: { ...content, body: 'tampered' } })
      .eq('id', id)
  ).error,
);
assert.ok(
  (
    await db
      .from('agreement_signers')
      .update({ name: 'Wrong name' })
      .eq('version_id', id)
  ).error,
);
const args = {
  p_id: id,
  p_role: 'alpath',
  p_token_hash: null,
  p_signature: content.alpath.name,
  p_consent: CONSENT,
  p_document_hash: documentHash,
};
await rpc('sign_demo_agreement', { ...args, p_document_hash: 'wrong' }, true);
await Promise.all([
  rpc('sign_demo_agreement', args),
  rpc('sign_demo_agreement', args),
]);
await rpc('issue_demo_link', { p_id: id, p_hash: hash(token) });
const clientArgs = {
  ...args,
  p_role: 'client',
  p_token_hash: hash(token),
  p_signature: content.client.name,
};
await rpc(
  'sign_demo_agreement',
  { ...clientArgs, p_token_hash: hash('wrong') },
  true,
);
assert.ifError(
  (
    await db
      .from('agreement_signers')
      .update({ token_expires_at: '2020-01-01T00:00:00Z' })
      .eq('version_id', id)
      .eq('role', 'client')
  ).error,
);
await rpc('sign_demo_agreement', clientArgs, true);
await rpc('issue_demo_link', { p_id: id, p_hash: hash(token) });
await Promise.all([
  rpc('sign_demo_agreement', clientArgs),
  rpc('sign_demo_agreement', clientArgs),
]);
const { data: version } = await db
  .from('agreement_versions')
  .select('*')
  .eq('id', id)
  .single();
const { data: signers } = await db
  .from('agreement_signers')
  .select('*')
  .eq('version_id', id);
const { data: events } = await db
  .from('agreement_signing_events')
  .select('*')
  .eq('version_id', id)
  .order('created_at')
  .order('id');
assert.equal(version.status, 'completed');
assert.equal(events.filter((e) => e.event_type === 'signed').length, 2);
assert.equal(events.filter((e) => e.event_type === 'completed').length, 1);
assert.ok(signers.every((s) => s.signed_at && s.signature));
assert.ok(
  (
    await db
      .from('agreement_signers')
      .update({ signature: 'tampered' })
      .eq('version_id', id)
  ).error,
);
assert.ok(
  (
    await db
      .from('agreement_signing_events')
      .update({ event_type: 'tampered' })
      .eq('version_id', id)
  ).error,
);
await rpc('issue_demo_link', { p_id: id, p_hash: null });
await rpc('sign_demo_agreement', clientArgs, true);
await rpc('issue_demo_link', { p_id: id, p_hash: hash(token) });
const bytes = await renderAgreementPdf({ ...version, signers, events });
await mkdir('tmp/pdfs', { recursive: true });
await writeFile('tmp/pdfs/demo-signing-qa.pdf', bytes);
// Private test links stay on disk, outside tool output and git.
await writeFile('/tmp/alpath-demo-qa.json', JSON.stringify({ id, token }), {
  mode: 0o600,
});
const anon = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
);
assert.ok((await anon.rpc('sign_demo_agreement', clientArgs)).error);
assert.ok((await anon.from('agreement_versions').select('id')).error);
assert.ok(
  (
    await anon.storage
      .from('agreement-documents')
      .download(`${id}/qa-original.pdf`)
  ).error,
);
console.log(
  'PASS: draft concurrency, freeze, signer immutability, signing order, document hash, invalid/expired/revoked links, duplicate submissions, audit integrity, public access restrictions, and PDF generation.',
);
console.log('QA demo:', id);
