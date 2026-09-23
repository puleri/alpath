import { getByToken } from '../../../lib/agreements/store';
import { CONSENT } from '../../../lib/agreements/model.mjs';
import AgreementDocument from '../../admin/agreements/AgreementDocument';
import SignForm from './SignForm';
import styles from '../../admin/agreements/agreements.module.css';

export const dynamic = 'force-dynamic';
export const metadata = {
  title: 'Demo agreement signing | Alpath Engineering',
  robots: { index: false, follow: false },
  referrer: 'no-referrer',
};

export default async function SignPage({ params }) {
  const { token } = await params;
  const agreement = await getByToken(token);
  if (!agreement)
    return (
      <main className={styles.shell} style={{ marginTop: 120 }}>
        <section className={styles.card}>
          <h1>Signing link unavailable</h1>
          <p>
            This link is invalid, expired, or revoked. Ask Alpath for a new
            link.
          </p>
        </section>
      </main>
    );
  const client = agreement.signers.find((s) => s.role === 'client');
  return (
    <main className={styles.shell} style={{ marginTop: 120 }}>
      <p className={styles.muted}>Alpath Engineering · Private demo signing</p>
      <p>
        Review the agreement below, then sign at the bottom. Dates are recorded
        automatically in UTC.
      </p>
      <AgreementDocument agreement={agreement} />
      <SignForm
        token={token}
        name={client.name}
        documentHash={agreement.document_sha256}
        consent={CONSENT}
        signed={!!client.signed_at}
      />
    </main>
  );
}
