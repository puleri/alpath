import { randomBytes } from 'node:crypto';
import { NextResponse } from 'next/server';
import { achConfig } from '../../lib/ach/config';
import { redeemLink, validSession } from '../../lib/ach/tokens.mjs';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
const COOKIE =
  process.env.NODE_ENV === 'production'
    ? '__Secure-ach_session'
    : 'ach_session';
const PATH = '/payment-details';
const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        char
      ],
  );

function headers(nonce) {
  return {
    'Cache-Control': 'private, no-store, max-age=0, must-revalidate',
    'CDN-Cache-Control': 'no-store',
    'Vercel-CDN-Cache-Control': 'no-store',
    'Referrer-Policy': 'no-referrer',
    'X-Robots-Tag': 'noindex, nofollow, noarchive, nosnippet',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Content-Security-Policy': `default-src 'none'; script-src 'nonce-${nonce}'; style-src 'nonce-${nonce}'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'`,
  };
}

function html(content, nonce, script = '', status = 200) {
  return new NextResponse(
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Private payment details | Alpath Engineering</title><style nonce="${nonce}">
    *{box-sizing:border-box}body{margin:0;background:#edf2f0;color:#18352e;font:18px/1.6 system-ui,sans-serif}main{max-width:680px;margin:8vh auto;padding:36px;background:white;border-radius:16px}h1{line-height:1.2}label,input,button{display:block}input{width:100%;padding:12px;margin:8px 0 20px;font:inherit}button{padding:12px 22px;background:#18352e;color:white;border:0;border-radius:6px;font:inherit;cursor:pointer}dt{font-size:14px;color:#52675f;margin-top:18px}dd{margin:0;overflow-wrap:anywhere;font-weight:600}.notice{padding:14px;background:#fff2cb}a{color:inherit}@media(max-width:700px){main{margin:20px;padding:24px}}
    </style></head><body><main><p>Alpath Engineering</p>${content}</main>${script ? `<script nonce="${nonce}">${script}</script>` : ''}</body></html>`,
    {
      status,
      headers: {
        ...headers(nonce),
        'Content-Type': 'text/html; charset=utf-8',
      },
    },
  );
}

function gate(nonce, { token = '', error = '' } = {}) {
  return html(
    `<h1>Private payment details</h1><p>Enter the access code shared with you separately to view ACH instructions.</p>
    ${error ? `<p class="notice" role="alert">${escape(error)}</p>` : ''}
    <form method="post" action="${PATH}" autocomplete="off">
    <input type="hidden" name="token" id="token" value="${escape(token)}">
    <label for="code">Access code</label><input name="code" id="code" type="password" required maxlength="100" autocomplete="off" spellcheck="false">
    <button type="submit">View payment details</button></form>
    <p id="help">Your link must still be valid. Contact Alpath if you need a new link or code.</p>
    <noscript><p>Enable JavaScript to open your private link.</p></noscript>`,
    nonce,
    `const token = location.hash.slice(1); if (token) { document.getElementById('token').value = token; history.replaceState(null, '', '${PATH}'); }`,
  );
}

export async function GET(request) {
  const nonce = randomBytes(18).toString('base64');
  const { ready, key, demo, fields } = achConfig();
  if (!ready)
    return html(
      '<h1>Payment details unavailable</h1><p>Please contact Alpath Engineering for payment instructions.</p>',
      nonce,
      '',
      503,
    );
  if (!validSession(request.cookies.get(COOKIE)?.value, key))
    return gate(nonce);
  return html(
    `<h1>ACH payment instructions</h1>
    ${demo ? '<p class="notice"><strong>Demo — do not send funds.</strong> These are sample banking details.</p>' : ''}
    <p>Confirm these instructions with Alpath using a phone number you already know before your first payment.</p>
    <dl>${Object.entries(fields)
      .map(
        ([label, value]) =>
          `<dt>${escape(label)}</dt><dd>${escape(value)}</dd>`,
      )
      .join('')}</dl>
    <p>This viewing session lasts up to 15 minutes. Keep these details private.</p>
    <form method="post" action="${PATH}"><input type="hidden" name="intent" value="lock"><button>Lock payment details</button></form>`,
    nonce,
    // Clear an already-open page when its session expires; expiration cannot revoke screenshots or copies.
    `if (location.hash) { location.replace('${PATH}'); } const timer = setTimeout(() => location.reload(), 60000); window.addEventListener('pageshow', e => { if (e.persisted) location.reload(); });`,
  );
}

export async function POST(request) {
  const nonce = randomBytes(18).toString('base64');
  if (request.headers.get('origin') !== new URL(request.url).origin)
    return html(
      '<h1>Unable to open payment details</h1><p>Reopen your original link and try again.</p>',
      nonce,
      '',
      403,
    );
  const { ready, key } = achConfig();
  if (!ready)
    return html('<h1>Payment details unavailable</h1>', nonce, '', 503);
  // Bound request bodies without retaining or logging submitted credentials.
  const reader = request.body?.getReader();
  let body = '';
  if (reader) {
    const decoder = new TextDecoder();
    let bytes = 0;
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > 8192) {
        await reader.cancel();
        return html('<h1>Invalid request</h1>', nonce, '', 413);
      }
      body += decoder.decode(value, { stream: true });
    }
    body += decoder.decode();
  }
  const form = new URLSearchParams(body);
  const lock = form.get('intent') === 'lock';
  const session = lock
    ? null
    : redeemLink(form.get('token'), form.get('code'), key);
  if (!lock && !session)
    return gate(nonce, {
      token: (form.get('token') || '').slice(0, 2048),
      error:
        'The link or access code is invalid, or the link has expired. Try again or request a new link.',
    });
  const response = new NextResponse(null, {
    status: 303,
    headers: { ...headers(nonce), Location: PATH },
  });
  response.cookies.set(COOKIE, session?.token || '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: PATH,
    maxAge: session?.maxAge || 0,
  });
  return response;
}
