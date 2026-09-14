'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

const UNLOCK_ENDPOINT = '/RFP/snohomish-county-fire-district-4/unlock';

export default function ProposalPasswordGate() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [phase, setPhase] = useState('idle');

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => window.scrollTo(0, 0));
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
        window.scrollTo(0, 0);
        router.refresh();
      }, 480);
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
        className={styles.passwordPanel}
        aria-labelledby="proposal-access-heading"
      >
        <div className={`${styles.alpathMark} ${styles.passwordBrand}`}>
          <img src="/alpath/sign.svg" alt="" />
          <span>
            <strong>Alpath</strong> Engineering
          </span>
        </div>
        <p className={styles.passwordEyebrow}>Private proposal response</p>
        <h1 id="proposal-access-heading">Snohomish County Fire District #4</h1>
        <p className={styles.passwordIntro}>
          Enter the proposal password to review the coordinated digital services
          response.
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
              {isBusy ? 'Unlocking…' : 'Unlock proposal'}
            </button>
          </div>
          <p className={styles.passwordError} role="alert">
            {error}
          </p>
        </form>
        <p className={styles.passwordNote}>
          Contact matt@alpathengineering.com if you need access.
        </p>
      </section>
    </main>
  );
}
