'use server';

import { revalidatePath } from 'next/cache';
import { getByToken, getAgreement, rpc } from '../../../lib/agreements/store';
import { hash, CONSENT } from '../../../lib/agreements/model.mjs';
import { completedPdf } from '../../../lib/agreements/pdf';

export async function signDemo(previous, form) {
  const token = form.get('token');
  let version;
  try {
    version = await getByToken(token);
    if (!version)
      throw new Error(
        'This link is invalid, expired, or revoked. Ask Alpath for a new link.',
      );
    if (
      form.get('consent') !== 'yes' ||
      form.get('documentHash') !== version.document_sha256
    )
      throw new Error('Review the agreement and accept the signing statement.');
    const signer = version.signers.find((s) => s.role === 'client');
    await rpc('sign_demo_agreement', {
      p_id: version.id,
      p_role: 'client',
      p_token_hash: hash(token),
      p_signature: signer.name,
      p_consent: CONSENT,
      p_document_hash: version.document_sha256,
    });
  } catch (error) {
    return { error: error.message };
  }
  let message = 'Your demo signature is saved. Both parties have signed.';
  try {
    await completedPdf(await getAgreement(version.id));
  } catch {
    message +=
      ' The PDF could not be generated yet. Use Download completed demo PDF to retry; you do not need to sign again.';
  }
  revalidatePath(`/sign/${token}`);
  revalidatePath(`/admin/agreements/${version.id}`);
  revalidatePath('/admin');
  return { message };
}
