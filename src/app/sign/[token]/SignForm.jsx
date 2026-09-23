'use client';

import { useActionState } from 'react';
import { signDemo } from './actions';
import styles from '../../admin/agreements/agreements.module.css';

export default function SignForm({
  token,
  name,
  documentHash,
  consent,
  signed,
}) {
  const [state, action, pending] = useActionState(signDemo, {});
  return (
    <section className={styles.card}>
      <h2>{signed ? 'Demo signing complete' : 'Sign this demo'}</h2>
      {!signed && (
        <form action={action} className={styles.form}>
          <input type="hidden" name="token" value={token} />
          <input type="hidden" name="documentHash" value={documentHash} />
          <p>
            Confirm the name below. If your details need changing, contact
            Alpath before signing.
          </p>
          <p className={styles.signature}>{name}</p>
          <label className={styles.checkbox}>
            <input type="checkbox" name="consent" value="yes" required />
            {consent}
          </label>
          <button type="submit" disabled={pending}>
            {pending ? 'Recording signature…' : 'Sign demo agreement'}
          </button>
        </form>
      )}
      {state.error && (
        <p role="alert" className={styles.error}>
          {state.error}
        </p>
      )}
      {state.message && <p role="status">{state.message}</p>}
      {signed && (
        <>
          <p>
            Your signature and signing date are saved. This was a test and does
            not create a binding agreement.
          </p>
          <a className={styles.button} href={`/api/sign/${token}/pdf`}>
            Download completed demo PDF
          </a>
        </>
      )}
    </section>
  );
}
