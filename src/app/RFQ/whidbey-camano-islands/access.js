import 'server-only';

import { createHash, timingSafeEqual } from 'node:crypto';

export const PROPOSAL_ACCESS_COOKIE = 'alpath_whidbey_camano_access';
export const PROPOSAL_ACCESS_MAX_AGE = 60 * 60 * 24 * 90;

const PROPOSAL_PASSWORD =
  process.env.WHIDBEY_CAMANO_PROPOSAL_PASSWORD || 'honeymoonbay';

const digest = (value) => createHash('sha256').update(String(value)).digest();

const accessToken = createHash('sha256')
  .update(`alpath-whidbey-camano:${PROPOSAL_PASSWORD}`)
  .digest('hex');

export function isProposalPasswordValid(password) {
  return timingSafeEqual(digest(password), digest(PROPOSAL_PASSWORD));
}

export function getProposalAccessToken() {
  return accessToken;
}

export function isProposalAccessCookieValid(value) {
  if (!value) {
    return false;
  }

  return timingSafeEqual(digest(value), digest(accessToken));
}
