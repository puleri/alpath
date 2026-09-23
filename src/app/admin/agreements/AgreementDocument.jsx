import { DEMO_NOTICE } from '../../../lib/agreements/model.mjs';
import styles from './agreements.module.css';

export default function AgreementDocument({ agreement }) {
  return (
    <article className={styles.document}>
      <p className={styles.banner}>{DEMO_NOTICE}</p>
      <span className={styles.badge}>{agreement.status}</span>
      <h1>{agreement.content.title}</h1>
      <div className={styles.columns}>
        {['alpath', 'client'].map((role) => {
          const s = agreement.signers.find((s) => s.role === role);
          return (
            <div key={role} className={styles.signer}>
              <strong>
                {role === 'alpath' ? 'Alpath signer' : 'Demo client signer'}
              </strong>
              <p>
                {s.name} · {s.title}
              </p>
              <p>{s.email}</p>
              <p>
                {s.signed_at ? (
                  <>
                    <span className={styles.signature}>{s.signature}</span>
                    <br />
                    Signed{' '}
                    {new Date(s.signed_at).toLocaleString('en-US', {
                      timeZone: 'UTC',
                    })}{' '}
                    UTC
                  </>
                ) : (
                  'Awaiting signature'
                )}
              </p>
            </div>
          );
        })}
      </div>
      <h2 style={{ marginTop: 32 }}>Agreement terms</h2>
      <div className={styles.terms}>{agreement.content.body}</div>
      {agreement.document_sha256 && (
        <p className={styles.audit}>
          Frozen document SHA-256: {agreement.document_sha256}
        </p>
      )}
    </article>
  );
}
