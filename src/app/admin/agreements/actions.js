'use server';

import { randomBytes, randomUUID } from 'node:crypto';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { requireAdmin } from '../../../lib/supabase/server';
import {
  contentFromForm,
  snapshotOf,
  hash,
  CONSENT,
  validId,
} from '../../../lib/agreements/model.mjs';
import { getAgreement, rpc } from '../../../lib/agreements/store';
import {
  renderAgreementPdf,
  savePdf,
  completedPdf,
} from '../../../lib/agreements/pdf';

export async function saveDraft(previous, form) {
  const { user } = await requireAdmin();
  let id = form.get('id');
  try {
    const content = contentFromForm(form);
    if (id) {
      if (!validId(id)) throw new Error('Invalid agreement.');
      await rpc('save_demo_draft', {
        p_id: id,
        p_revision: Number(form.get('revision')),
        p_content: content,
      });
    } else {
      id = await rpc('create_demo_agreement', {
        p_actor: user.id,
        p_content: content,
      });
    }
  } catch (error) {
    return { error: error.message };
  }
  revalidatePath('/admin');
  revalidatePath(`/admin/agreements/${id}`);
  redirect(`/admin/agreements/${id}`);
}

export async function updateWorkflow(previous, form) {
  await requireAdmin();
  const id = form.get('id');
  let result;
  try {
    const version = await getAgreement(id);
    if (!version) throw new Error('Agreement not found.');
    switch (form.get('intent')) {
      case 'finalize': {
        if (
          Number(form.get('revision')) !== version.revision ||
          version.status !== 'draft'
        )
          throw new Error('Draft changed. Reload before finalizing.');
        const snapshot = snapshotOf(version.content);
        const documentHash = hash(snapshot);
        const filePath = `${id}/original-${randomUUID()}.pdf`;
        const bytes = await renderAgreementPdf({
          ...version,
          status: 'finalized',
          document_sha256: documentHash,
        });
        await savePdf(filePath, bytes);
        await rpc('finalize_demo_agreement', {
          p_id: id,
          p_revision: version.revision,
          p_snapshot: snapshot,
          p_path: filePath,
        });
        result = {
          message:
            'Demo finalized. Review the frozen agreement below, then sign as Alpath.',
        };
        break;
      }
      case 'sign': {
        if (
          form.get('consent') !== 'yes' ||
          form.get('documentHash') !== version.document_sha256
        )
          throw new Error(
            'Review this agreement and accept the signing statement.',
          );
        const signer = version.signers.find((s) => s.role === 'alpath');
        await rpc('sign_demo_agreement', {
          p_id: id,
          p_role: 'alpath',
          p_token_hash: null,
          p_signature: signer.name,
          p_consent: CONSENT,
          p_document_hash: version.document_sha256,
        });
        result = {
          message:
            'Your demo signature was recorded. Create a client link to test the second signature.',
        };
        break;
      }
      case 'link': {
        const token = randomBytes(32).toString('hex');
        await rpc('issue_demo_link', { p_id: id, p_hash: hash(token) });
        result = {
          message:
            'Private link created. It expires in 14 days and replaces any previous link.',
          link: `/sign/${token}`,
        };
        break;
      }
      case 'revoke':
        await rpc('issue_demo_link', { p_id: id, p_hash: null });
        result = { message: 'Client link revoked.' };
        break;
      case 'void':
        if (form.get('confirmVoid') !== 'yes')
          throw new Error('Confirm that you want to void this demo.');
        await rpc('void_demo_agreement', { p_id: id });
        result = {
          message:
            'Demo voided. Its signing links no longer work. Create a new demo to start again.',
        };
        break;
      case 'pdf':
        await completedPdf(version);
        result = { message: 'Completed PDF is saved and ready to download.' };
        break;
      default:
        throw new Error('Unknown action.');
    }
  } catch (error) {
    return { error: error.message };
  }
  revalidatePath('/admin');
  revalidatePath(`/admin/agreements/${id}`);
  return result;
}
