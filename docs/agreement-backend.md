# Agreement backend setup

The admin email is `matt@alpathengineering.com`. Admin authorization checks a
verified Supabase user on the server, not a browser-supplied email or metadata.
There is no public signup UI. This release enables only clearly labeled, nonbinding
demo agreements; it does not change the active Union Street proposal or agreement.

## Setup

1. Use Node.js 22 or newer locally and on Vercel (the Supabase SDK requires a
   native WebSocket implementation).
2. Set `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, and
   `SUPABASE_SECRET_KEY` in `.env.local` and Vercel. Never expose the secret with a
   `NEXT_PUBLIC_` prefix.
3. In Supabase Authentication > Users, add `matt@alpathengineering.com` with a
   strong password and mark the email confirmed. Keep the password private.
   Disable public signups for this admin-only project.
4. Apply all files in `supabase/migrations` through the
   Supabase SQL Editor or `supabase db push`. The app's API secret cannot
   execute schema migrations; that requires database or management access.
5. Run a local preview or deploy and open `/admin/login`.

## Demo workflow

1. Open `/admin` and choose **Create demo agreement**. The terms are an independent
   static copy in `src/lib/agreements/demo-template.json`, with source hash and copy
   date. It does not import or modify the live agreement route or its shared styles.
2. Enter both signers' names, emails, and titles. The test client defaults to your
   own email; no email is sent. Edit the copied terms and save the draft.
3. Review and **Finalize saved draft**. Save edits before finalizing. This freezes
   the exact terms and signer identities, records their SHA-256 hash, and stores
   an unsigned PDF privately. A stale draft revision cannot overwrite newer edits.
4. Review the frozen copy, accept the demo consent statement, and sign as Alpath.
5. Create a client link. Copy it manually or open it in a private window for testing.
   Tokens contain 256 random bits; only their hashes are stored. Links expire after
   14 days. Issuing a replacement revokes the previous link; revocation is available
   separately. No email verification is claimed.
6. The test client reviews and adopts their prefilled name as a typed signature.
   Database transactions enforce signer order, record UTC dates, and make duplicate
   submissions idempotent. Names, terms, and signatures cannot be edited afterward.
7. A final PDF containing the frozen terms, both signatures, dates, and signing
   record is saved privately. Failed generation can be retried without signing
   again. Later downloads return the same saved bytes, verified by SHA-256.
8. Void an unfinished demo to disable signing; create a fresh demo for revised
   terms. A completed demo remains a completed record.

Private signing URLs are credentials: avoid sharing them publicly or collecting
them in analytics. Signing pages have no-referrer and no-store headers and noindex
metadata. Ordinary browser roles have no database or storage access. All server
actions independently authorize the admin or verify the client token. PDFs use an
embedded static Anaheim font; unsupported characters are rejected before finalizing
rather than silently omitted. This is typed electronic signing, not certificate-based
PDF digital signing. Drawn signatures and production agreements are not enabled.

## Access and storage

Agreement tables deny all browser access, including authenticated accounts.
Future server endpoints must authorize each request before using a secret-key
client. The `agreement-documents` bucket is private and has no client policies.
The signing history is application data, separate from short-lived provider logs.

Keep independent exports of PDFs and records;
the Free plan has no automatic database backups and may pause for low activity.

## Verification

- Anonymous `/admin` visits redirect to `/admin/login`.
- Incorrect credentials cannot open the dashboard.
- Only the confirmed admin email passes authorization, even if another user exists.
- Sign out removes access; admin responses are private and not indexed.
- After migration, anonymous and ordinary authenticated API requests cannot read
  agreement rows or download private PDFs.

Run `node --test tests/agreements.test.mjs` for validation tests and `npm run build`
for the production build. The opt-in integration test
`node --env-file=.env.local scripts/test-demo-signing.mjs` creates labeled QA demo
records in the connected project. It verifies stale edits, frozen terms, signing
order, token expiry/revocation, duplicate signatures, audit integrity, anonymous
access denial, and PDF generation. It writes its PDF to ignored `tmp/pdfs/` and
its private test token to `/tmp/alpath-demo-qa.json`. It never sends invitations.
