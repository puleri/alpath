import 'server-only';
import { hash } from './model.mjs';
import { agreementStore } from './store';
import { renderAgreementPdf } from './pdf-render.mjs';
export { renderAgreementPdf };

export async function savePdf(filePath, bytes) {
  const { error } = await agreementStore()
    .storage.from('agreement-documents')
    .upload(filePath, bytes, { contentType: 'application/pdf', upsert: false });
  if (error && String(error.statusCode) !== '409' && error.status !== 409)
    throw new Error(
      'PDF storage is unavailable. Your saved signatures are safe; retry the PDF download.',
    );
}

export async function completedPdf(version) {
  const db = agreementStore();
  if (version.status !== 'completed') return renderAgreementPdf(version);
  if (!version.completed_document_path) {
    const bytes = await renderAgreementPdf(version);
    const filePath = `${version.id}/completed.pdf`;
    await savePdf(filePath, bytes);
    // Read the winning upload in case simultaneous requests generated a PDF.
    const { data, error } = await db.storage
      .from('agreement-documents')
      .download(filePath);
    if (error)
      throw new Error('Unable to retrieve the completed PDF. Try again.');
    const stored = Buffer.from(await data.arrayBuffer());
    const { error: updateError } = await db
      .from('agreement_versions')
      .update({
        completed_document_path: filePath,
        completed_sha256: hash(stored),
      })
      .eq('id', version.id)
      .is('completed_document_path', null);
    if (updateError)
      throw new Error('Unable to record the completed PDF. Try again.');
    return stored;
  }
  const { data, error } = await db.storage
    .from('agreement-documents')
    .download(version.completed_document_path);
  if (error)
    throw new Error('Unable to retrieve the completed PDF. Try again.');
  const bytes = Buffer.from(await data.arrayBuffer());
  if (hash(bytes) !== version.completed_sha256)
    throw new Error('PDF integrity check failed.');
  return bytes;
}
