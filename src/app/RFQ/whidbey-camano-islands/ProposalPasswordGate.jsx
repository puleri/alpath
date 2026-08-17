'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

const UNLOCK_ENDPOINT = '/RFQ/whidbey-camano-islands/unlock';

export default function ProposalPasswordGate() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [phase, setPhase] = useState('idle');

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const submitPassword = async (event) => {
    event.preventDefault();

    if (!password) {
      setError('Enter the proposal password to continue.');
      return;
    }

    setError('');
    setPhase('checking');

    try {
      const response = await fetch(UNLOCK_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        setError(
          payload?.message || 'That password did not match. Please try again.',
        );
        setPhase('idle');
        return;
      }

      setPhase('unlocking');
      window.setTimeout(() => {
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
        window.scrollTo(0, 0);
        router.refresh();
      }, 560);
    } catch {
      setError('We could not unlock the proposal. Please try again.');
      setPhase('idle');
    }
  };

  const isBusy = phase !== 'idle';

  return (
    <main
      className={`${styles.passwordGate}${
        phase === 'unlocking' ? ` ${styles.passwordGateUnlocking}` : ''
      }`}
    >
      <section
        className={styles.passwordGatePanel}
        aria-labelledby="proposal-access-heading"
      >
        <div className={styles.passwordGateBrand}>
          <img src="/alpath/sign.svg" alt="" />
          <p>
            <strong>Alpath</strong> Engineering
          </p>
        </div>

        <p className={styles.passwordGateEyebrow}>Private proposal</p>
        <h1 id="proposal-access-heading">Whidbey &amp; Camano Islands</h1>
        <p className={styles.passwordGateIntro}>
          Enter the proposal password to continue.
        </p>

        <form
          className={styles.passwordForm}
          aria-busy={isBusy}
          onSubmit={submitPassword}
        >
          <label htmlFor="proposal-password">Proposal password</label>
          <div className={styles.passwordControl}>
            <input
              autoComplete="current-password"
              disabled={isBusy}
              id="proposal-password"
              name="password"
              onChange={(event) => {
                setPassword(event.target.value);
                if (error) setError('');
              }}
              type="password"
              value={password}
            />
            <button disabled={isBusy} type="submit">
              {isBusy ? 'Unlocking...' : 'Unlock proposal'}
            </button>
          </div>
          <p className={styles.passwordError} role="alert">
            {error}
          </p>
        </form>

        <p className={styles.passwordGateNote}>
          Please reach to matt@alpathengineering.com if you need a new password.
        </p>
      </section>
    </main>
  );
}
