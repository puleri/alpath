'use client';

import { useActionState, useState } from 'react';
import { updateWorkflow } from './actions';
import styles from './agreements.module.css';

export default function WorkflowControls({
  id,
  revision,
  status,
  signed,
  signerName,
  documentHash,
  consent,
  hasPdf,
}) {
  const [state, action, pending] = useActionState(updateWorkflow, {});
  const [copyMessage, setCopyMessage] = useState('');
  return (
    <section className={styles.card}>
      <h2>Next step</h2>
      <form action={action} className={styles.form}>
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="revision" value={revision} />
        <input type="hidden" name="documentHash" value={documentHash || ''} />
        {status === 'draft' && (
          <>
            <p>
              Save any changes above first. Finalizing freezes the saved terms
              and signer details.
            </p>
            <button name="intent" value="finalize" disabled={pending}>
              Finalize saved draft
            </button>
          </>
        )}
        {status === 'finalized' && !signed && (
          <>
            <p>
              Your typed signature:{' '}
              <strong className={styles.signature}>{signerName}</strong>
            </p>
            <label className={styles.checkbox}>
              <input type="checkbox" name="consent" value="yes" required />
              {consent}
            </label>
            <button name="intent" value="sign" disabled={pending}>
              Sign demo as Alpath
            </button>
          </>
        )}
        {['finalized', 'completed'].includes(status) && signed && (
          <>
            <p>
              Create a private link for the test client. Copy it into your own
              email, or open it in a private window to test. Creating another
              link revokes the previous one.
            </p>
            <div className={styles.actions}>
              <button name="intent" value="link" disabled={pending}>
                Create client link
              </button>
              <button name="intent" value="revoke" disabled={pending}>
                Revoke client link
              </button>
            </div>
          </>
        )}
        {status === 'completed' && !hasPdf && (
          <button name="intent" value="pdf" disabled={pending}>
            Generate / retry completed PDF
          </button>
        )}
      </form>
      {['draft', 'finalized'].includes(status) && (
        <details className={styles.void}>
          <summary>Void this demo</summary>
          <form action={action} className={styles.form}>
            <input type="hidden" name="id" value={id} />
            <input type="hidden" name="intent" value="void" />
            <label className={styles.checkbox}>
              <input type="checkbox" name="confirmVoid" value="yes" required />
              Void this demo and disable its signing link. This cannot be
              undone.
            </label>
            <button disabled={pending}>Void demo</button>
          </form>
        </details>
      )}
      {state.error && (
        <p role="alert" className={styles.error}>
          {state.error}
        </p>
      )}
      {state.message && <p role="status">{state.message}</p>}
      {state.link && (
        <div className={styles.linkBox}>
          <a href={state.link} target="_blank" rel="noreferrer">
            Open private demo signing link ↗
          </a>
          <button
            type="button"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(
                  new URL(state.link, window.location.origin).href,
                );
                setCopyMessage('Link copied.');
              } catch {
                setCopyMessage('Copy the link using your browser’s link menu.');
              }
            }}
          >
            Copy signing link
          </button>
          <p role="status">{copyMessage}</p>
        </div>
      )}
    </section>
  );
}
