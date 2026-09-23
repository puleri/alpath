import test from 'node:test';
import assert from 'node:assert/strict';
import { randomBytes } from 'node:crypto';
import { issueLink, redeemLink, validSession } from '../src/lib/ach/tokens.mjs';

const key = randomBytes(32).toString('base64url');
const now = 100000;

test('valid link and separate code grant a 15-minute session', () => {
  const link = issueLink(24, key, now);
  const session = redeemLink(link.token, link.code.toUpperCase(), key, now);
  assert.equal(session.maxAge, 900);
  assert.equal(validSession(session.token, key, now + 899), true);
  assert.equal(validSession(session.token, key, now + 900), false);
  assert.equal(validSession(link.token, key, now), false);
  assert.equal(redeemLink(session.token, link.code, key, now), null);
});

test('expired, tampered, incorrect-code and rotated-key links fail closed', () => {
  const link = issueLink(1, key, now);
  assert.equal(redeemLink(link.token, link.code, key, now + 3600), null);
  assert.equal(redeemLink(`${link.token}x`, link.code, key, now), null);
  assert.equal(redeemLink(link.token, '0'.repeat(32), key, now), null);
  assert.equal(
    redeemLink(link.token, link.code, randomBytes(32).toString('hex'), now),
    null,
  );
  for (const input of [null, '', 'a.b', 'x'.repeat(3000)])
    assert.equal(redeemLink(input, link.code, key, now), null);
});

test('session never outlives the invitation and code belongs to its own link', () => {
  const a = issueLink(1, key, now);
  const b = issueLink(1, key, now);
  assert.equal(redeemLink(a.token, b.code, key, now), null);
  const session = redeemLink(a.token, a.code, key, now + 3590);
  assert.equal(session.maxAge, 10);
  assert.equal(validSession(session.token, key, now + 3600), false);
});

test('placeholder configuration and unsupported durations cannot issue links', () => {
  assert.throws(() =>
    issueLink(24, 'REPLACE_WITH_A_RANDOM_32_BYTE_SECRET_BEFORE_SHARING'),
  );
  assert.throws(() => issueLink(72, key));
});
