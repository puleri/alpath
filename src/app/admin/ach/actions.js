'use server';

import { requireAdmin } from '../../../lib/supabase/server';
import { achConfig } from '../../../lib/ach/config';
import { issueLink } from '../../../lib/ach/tokens.mjs';

export async function createAchLink(previous, form) {
  await requireAdmin();
  const { ready, key } = achConfig();
  if (!ready)
    return {
      error:
        'Add the ACH environment values and a random signing key before creating links.',
    };
  try {
    const result = issueLink(Number(form.get('hours')), key);
    return {
      path: `/payment-details#${result.token}`,
      code: result.code,
      expiresAt: result.expiresAt,
    };
  } catch {
    return {
      error: 'Unable to create link. Check the expiration and configuration.',
    };
  }
}
