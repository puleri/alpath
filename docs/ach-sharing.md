# Private ACH sharing

Open `/admin/ach` using the existing admin login. Create a link lasting 1, 24, or
48 hours. Email the link and deliver the generated access code separately by
text or phone. Links and codes are displayed once and are not persisted.

Bank fields live only in server environment variables; Supabase is used for the
existing admin login, not bank details or sharing records. The public ACH route
serves a standalone page without the site's layout, analytics, or external assets.

## Configuration

Local `.env.local` contains placeholders. Keep real bank details out of source,
chat, screenshots, command arguments, and logs. Use fake data for local testing.
Sharing fails closed while any required value starts with `REPLACE_`.

In Vercel project Settings → Environment Variables, add these as Sensitive
variables scoped to Production only, then deploy:

- `ACH_ACCOUNT_NAME` — name on bank account
- `ACH_ACCOUNT_NUMBER` — bank account number (preserve leading zeros)
- `ACH_ROUTING_NUMBER` — nine-digit routing / transit number confirmed for ACH (preserve leading zeros; wire routing numbers may differ)
- `ACH_ACCOUNT_TYPE` — Checking or Savings
- `ACH_BANK_ADDRESS` — optional bank address, displayed when configured
- `ACH_BANK_NAME` — optional bank name, displayed when configured; some clients' payment systems may request it
- `ACH_LINK_SIGNING_KEY` (at least 32 cryptographically random bytes, encoded as base64url or hex)
- `ACH_DEMO_MODE=false` after replacing sample bank details with verified values

Bank name and address may be blank or left as `REPLACE_` placeholders; they will
be omitted from the page and do not block sharing. The four account fields and
signing key are required. Quote environment values containing spaces. Keep actual
account details in environment settings only; do not add them to this document.

Generate the signing key locally using
`node -e "console.log(require('node:crypto').randomBytes(32).toString('base64url'))"`.
Paste it directly into the environment settings. Never use a memorable password
as the key. Use different keys and fake bank data for development/preview.
Do not prefix any ACH variable with `NEXT_PUBLIC_`, place these values in
`next.config.js`, or pull production secrets into local environment files.

For a local demonstration, replace banking placeholders with obviously fake
values, generate a local signing key, and leave `ACH_DEMO_MODE=true`. Restart the
development server after configuration changes.

## Security properties and limits

The signed invitation contains only an expiration, random identifier, and keyed
access-code verifier. The code has 128 bits of randomness; it is intentionally
longer than a numeric PIN because this stateless implementation has no shared
failed-attempt counter. The invitation is carried in the URL fragment so it does
not enter normal HTTP request URLs or referrer headers. Minimal inline JavaScript
removes the fragment and places the token in a form submitted over HTTPS.
Configure any external observability tooling to exclude this page and request
bodies; never enable session replay here.

Successful verification sets a path-scoped Secure/HttpOnly/SameSite=Strict cookie
(Secure is omitted on the local development server). Its signed expiry is the
earlier of 15 minutes or the invitation expiry. Every page request verifies the
session server-side. Responses disable caching and indexing, reject framing, and
use a restrictive CSP. An open page refreshes every minute to enforce expiry in
the normal UI. Recipients can still copy, save, or photograph visible details;
expiration only ends further server access. HTTPS is required in production.

Links remain reusable until expiry. Generating another link does not revoke old
links. There is no per-link revocation, single-use enforcement, or access audit.
Those features require persistent access metadata (bank details can still stay
in Vercel). If either credential is forwarded, anyone with both can view details.

Rotating the signing key invalidates links and sessions on deployments using the
new key. Vercel environment changes require a new deployment and do not change
older deployments: protect or remove old deployments with the old key if doing
an emergency revocation. People able to deploy code can access runtime secrets;
restrict project/deployment permissions and enable MFA for admin accounts.

Verify with `node --test tests/ach.test.mjs`, `npm run build`, and
`node scripts/test-ach-sharing.mjs` (starts a local production server with fake data). Before sending a
real link, confirm that anonymous/invalid/expired requests return no banking
details, the correct code unlocks the page, and the session expires and locks.
