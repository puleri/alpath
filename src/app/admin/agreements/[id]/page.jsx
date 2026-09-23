import { notFound } from 'next/navigation';
import { requireAdmin } from '../../../../lib/supabase/server';
import { getAgreement } from '../../../../lib/agreements/store';
import { CONSENT } from '../../../../lib/agreements/model.mjs';
import DraftForm from '../DraftForm';
import WorkflowControls from '../WorkflowControls';
import AgreementDocument from '../AgreementDocument';
import styles from '../agreements.module.css';

export default async function AgreementAdmin({ params }) {
  await requireAdmin();
  const { id } = await params;
  const agreement = await getAgreement(id);
  if (!agreement) notFound();
  const alpath = agreement.signers.find((s) => s.role === 'alpath');
  return (
    <>
      <a href="/admin">← Agreements</a>
      <h1>Demo agreement</h1>
      <p className={styles.banner}>
        This demo is separate from the client’s active agreement.
      </p>
      {agreement.status === 'draft' && (
        <section className={styles.card}>
          <h2>Edit draft</h2>
          <DraftForm
            key={agreement.revision}
            id={id}
            revision={agreement.revision}
            content={agreement.content}
          />
        </section>
      )}
      <WorkflowControls
        id={id}
        revision={agreement.revision}
        status={agreement.status}
        signed={!!alpath.signed_at}
        signerName={alpath.name}
        documentHash={agreement.document_sha256}
        consent={CONSENT}
        hasPdf={!!agreement.completed_document_path}
      />
      {['finalized', 'completed'].includes(agreement.status) && (
        <a className={styles.button} href={`/api/agreements/${id}/pdf`}>
          {agreement.status === 'completed'
            ? 'Download completed demo PDF'
            : 'Download current demo PDF'}
        </a>
      )}
      <AgreementDocument agreement={agreement} />
      <section className={styles.card}>
        <h2>Signing history</h2>
        <ul className={styles.audit}>
          {agreement.events.map((e) => (
            <li key={e.id}>
              {new Date(e.created_at).toISOString()} —{' '}
              {e.event_type.replaceAll('_', ' ')}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
