# Agreement backend setup

The admin email is `matt@alpathengineering.com`. Admin authorization checks a
verified Supabase user on the server, not a browser-supplied email or metadata.
There is no public signup UI. Signing and agreement editing are not enabled yet.

## Setup

1. Use Node.js 22 or newer locally and on Vercel (the Supabase SDK requires a
   native WebSocket implementation).
2. Set `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, and
   `SUPABASE_SECRET_KEY` in `.env.local` and Vercel. Never expose the secret with a
   `NEXT_PUBLIC_` prefix.
3. In Supabase Authentication > Users, add `matt@alpathengineering.com` with a
   strong password and mark the email confirmed. Keep the password private.
   Disable public signups for this admin-only project.
4. Apply `supabase/migrations/202609220001_agreement_foundation.sql` through the
   Supabase SQL Editor or the CLI migration workflow. The app's API secret cannot
   execute schema migrations; that requires database or management access.
5. Deploy and open `/admin/login`. The dashboard currently confirms admin access.

## Access and storage

Agreement tables deny all browser access, including authenticated accounts.
Future server endpoints must authorize each request before using a secret-key
client. The `agreement-documents` bucket is private and has no client policies.
The signing history is application data, separate from short-lived provider logs.

This migration is only the foundation: immutable document versions, atomic signing,
token expiry/revocation, final PDFs, and signing-event integrity must be implemented
before enabling client signatures. Keep independent exports of PDFs and records;
the Free plan has no automatic database backups and may pause for low activity.

## Verification

- Anonymous `/admin` visits redirect to `/admin/login`.
- Incorrect credentials cannot open the dashboard.
- Only the confirmed admin email passes authorization, even if another user exists.
- Sign out removes access; admin responses are private and not indexed.
- After migration, anonymous and ordinary authenticated API requests cannot read
  agreement rows or download private PDFs.
