import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto';

export const SESSION_SECONDS = 15 * 60;
export const LINK_HOURS = [1, 24, 48];

function mac(value, key) {
  if (typeof key !== 'string' || key.length < 43 || key.startsWith('REPLACE_'))
    throw new Error(
      'Configure ACH_LINK_SIGNING_KEY with a random secret first.',
    );
  return createHmac('sha256', key).update(value).digest('base64url');
}

function equal(a, b) {
  return (
    typeof a === 'string' &&
    typeof b === 'string' &&
    a.length === b.length &&
    timingSafeEqual(Buffer.from(a), Buffer.from(b))
  );
}

function sign(payload, key) {
  const body = Buffer.from(JSON.stringify(payload)).toString('base64url');
  return `${body}.${mac(body, key)}`;
}

function verify(token, type, key, now) {
  try {
    if (typeof token !== 'string' || token.length > 2048) return null;
    const parts = token.split('.');
    if (parts.length !== 2 || !equal(mac(parts[0], key), parts[1])) return null;
    const payload = JSON.parse(Buffer.from(parts[0], 'base64url').toString());
    if (
      payload.type !== type ||
      !Number.isSafeInteger(payload.exp) ||
      payload.exp <= now
    )
      return null;
    return payload;
  } catch {
    return null;
  }
}

export function issueLink(hours, key, now = Math.floor(Date.now() / 1000)) {
  if (!LINK_HOURS.includes(hours))
    throw new Error('Choose a valid expiration.');
  const code = randomBytes(16).toString('hex');
  const id = randomBytes(16).toString('hex');
  const exp = now + hours * 3600;
  return {
    token: sign(
      { type: 'ach-link', id, exp, proof: mac(`code:${id}:${code}`, key) },
      key,
    ),
    code: code.match(/.{4}/g).join('-'),
    expiresAt: new Date(exp * 1000).toISOString(),
  };
}

export function redeemLink(
  token,
  code,
  key,
  now = Math.floor(Date.now() / 1000),
) {
  const payload = verify(token, 'ach-link', key, now);
  if (!payload || typeof code !== 'string' || code.length > 100) return null;
  const normalized = code.replace(/[\s-]/g, '').toLowerCase();
  if (
    !/^[a-f0-9]{32}$/.test(normalized) ||
    !equal(payload.proof, mac(`code:${payload.id}:${normalized}`, key))
  )
    return null;
  const exp = Math.min(payload.exp, now + SESSION_SECONDS);
  return { token: sign({ type: 'ach-session', exp }, key), maxAge: exp - now };
}

export function validSession(token, key, now = Math.floor(Date.now() / 1000)) {
  return Boolean(verify(token, 'ach-session', key, now));
}
