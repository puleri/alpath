// Run after npm run build. Uses generated test credentials and fake bank details only.
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { randomBytes } from 'node:crypto';
import { setTimeout as delay } from 'node:timers/promises';
import { issueLink, redeemLink } from '../src/lib/ach/tokens.mjs';

const key = randomBytes(32).toString('base64url');
const port = 3197;
const origin = `http://localhost:${port}`;
const url = `${origin}/payment-details`;
const marker = 'ACH-TEST-ACCOUNT-NEVER-REAL';
const server = spawn(
  process.execPath,
  ['node_modules/next/dist/bin/next', 'start', '-p', String(port)],
  {
    env: {
      ...process.env,
      NODE_ENV: 'production',
      ACH_BANK_NAME: '',
      ACH_BANK_ADDRESS: '123 Example Street, Seattle, WA 98101',
      ACH_ACCOUNT_NAME: 'Sample Company',
      ACH_ROUTING_NUMBER: '000000000',
      ACH_ACCOUNT_NUMBER: marker,
      ACH_ACCOUNT_TYPE: 'Checking',
      ACH_DEMO_MODE: 'true',
      ACH_LINK_SIGNING_KEY: key,
    },
    stdio: 'ignore',
  },
);
let spawnError;
server.on('error', (error) => {
  spawnError = error;
});

async function post(values, extraHeaders = {}) {
  return fetch(url, {
    method: 'POST',
    redirect: 'manual',
    headers: { Origin: origin, ...extraHeaders },
    body: new URLSearchParams(values),
  });
}

try {
  let ready = false;
  for (let i = 0; i < 80; i++) {
    if (spawnError || server.exitCode !== null)
      throw new Error(
        'Test server could not start; check that port 3197 is free.',
      );
    try {
      ready = (await fetch(url)).status === 200;
    } catch {}
    if (ready) break;
    await delay(250);
  }
  assert.ok(ready, 'test server is ready');
  let response = await fetch(url);
  assert.ok(
    !(await response.text()).includes(marker),
    'anonymous response contains no banking data',
  );
  assert.match(response.headers.get('cache-control'), /no-store/);
  assert.match(
    response.headers.get('content-security-policy'),
    /frame-ancestors 'none'/,
  );
  assert.equal(response.headers.get('referrer-policy'), 'no-referrer');
  const link = issueLink(1, key);
  response = await post({ token: link.token, code: 'wrong' });
  assert.ok(!(await response.text()).includes(marker));
  assert.equal(response.headers.get('set-cookie'), null);
  const expired = issueLink(1, key, Math.floor(Date.now() / 1000) - 3601);
  response = await post({ token: expired.token, code: expired.code });
  assert.equal(response.headers.get('set-cookie'), null);
  response = await post(
    { token: link.token, code: link.code },
    { Origin: 'https://other.example' },
  );
  assert.equal(response.status, 403);
  response = await post({ token: link.token, code: link.code });
  assert.equal(response.status, 303);
  assert.equal(response.headers.get('location'), '/payment-details');
  const cookie = response.headers.get('set-cookie');
  for (const flag of [
    /HttpOnly/i,
    /Secure/i,
    /SameSite=strict/i,
    /Path=\/payment-details/i,
    /Max-Age=900/i,
  ])
    assert.match(cookie, flag);
  response = await fetch(url, { headers: { Cookie: cookie.split(';')[0] } });
  const html = await response.text();
  assert.ok(
    html.includes(marker),
    'authorized response displays the bank fields',
  );
  assert.match(html, /do not send funds/i);
  assert.ok(
    html.includes('123 Example Street, Seattle, WA 98101'),
    'configured bank address is displayed',
  );
  assert.ok(
    !html.includes('<dt>Bank name</dt>'),
    'bank name is optional and omitted when absent',
  );
  assert.ok(
    !html.includes('/_next/'),
    'standalone response does not load app scripts',
  );
  const now = Math.floor(Date.now() / 1000);
  const oldLink = issueLink(24, key, now - 1000);
  const oldSession = redeemLink(oldLink.token, oldLink.code, key, now - 1000);
  response = await fetch(url, {
    headers: { Cookie: `__Secure-ach_session=${oldSession.token}` },
  });
  assert.ok(
    !(await response.text()).includes(marker),
    'expired signed session cannot reveal bank data',
  );
  response = await post({ intent: 'lock' }, { Cookie: cookie.split(';')[0] });
  assert.equal(response.status, 303);
  assert.match(response.headers.get('set-cookie'), /Max-Age=0/i);
  response = await post({ token: 'x'.repeat(9000), code: link.code });
  assert.equal(response.status, 413);
  console.log(
    'ACH HTTP checks passed: anonymous denial, wrong/expired credentials, CSRF, secure session, protected content, expired session, logout, request size.',
  );
} finally {
  server.kill('SIGTERM');
}
