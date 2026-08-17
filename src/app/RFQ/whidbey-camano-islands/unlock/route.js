import { NextResponse } from 'next/server';
import {
  getProposalAccessToken,
  isProposalPasswordValid,
  PROPOSAL_ACCESS_COOKIE,
  PROPOSAL_ACCESS_MAX_AGE,
} from '../access';

export async function POST(request) {
  const payload = await request.json().catch(() => null);
  const password =
    typeof payload?.password === 'string' ? payload.password.slice(0, 128) : '';

  if (!isProposalPasswordValid(password)) {
    return NextResponse.json(
      { message: 'That password did not match. Please try again.' },
      {
        status: 401,
        headers: { 'Cache-Control': 'no-store' },
      },
    );
  }

  const response = NextResponse.json(
    { ok: true },
    { headers: { 'Cache-Control': 'no-store' } },
  );

  response.cookies.set({
    name: PROPOSAL_ACCESS_COOKIE,
    value: getProposalAccessToken(),
    httpOnly: true,
    maxAge: PROPOSAL_ACCESS_MAX_AGE,
    path: '/RFQ/whidbey-camano-islands',
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
  });

  return response;
}
