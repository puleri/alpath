'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function ProposalPasswordGate() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (!unlocked) return;
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const timer = window.setTimeout(
      () => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        router.refresh();
      },
      reducedMotion ? 0 : 360,
    );
    return () => window.clearTimeout(timer);
  }, [unlocked, router]);

  async function unlock(event) {
    event.preventDefault();
    setBusy(true);
    setError('');
    try {
      const response = await fetch('/proposal/union-street-cre/unlock', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (!response.ok) {
        setError('That password didn’t match. Please try again.');
        setBusy(false);
        return;
      }
      setUnlocked(true);
    } catch {
      setError('We couldn’t connect. Please try again.');
      setBusy(false);
    }
  }

  return (
    <main
      className={`${styles.page} ${styles.passwordGate} ${unlocked ? styles.passwordGateLeaving : ''}`}
      aria-busy={busy}
    >
      {unlocked && (
        <p className={styles.unlockStatus} role="status">
          You’re in. Opening our next steps…
        </p>
      )}
      <section className={styles.passwordPanel} aria-labelledby="access-title">
        <img
          className={styles.unionStreetLogoGate}
          src="/union-street/logo.avif"
          alt="Union Street CRE"
        />
        <p className={styles.eyebrow}>A follow-up for Union Street CRE</p>
        <h1 id="access-title">
          Private proposal
          <br />
          follow up
        </h1>
        <p>
          I’ve put our website rebuild options and next steps here. Enter the
          password I shared to take a look.
        </p>
        <form onSubmit={unlock} aria-busy={busy}>
          <label htmlFor="proposal-password">Password</label>
          <input
            id="proposal-password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            maxLength={128}
            value={password}
            disabled={busy}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? 'password-error' : undefined}
            onChange={(event) => {
              setPassword(event.target.value);
              setError('');
            }}
          />
          <p id="password-error" role="alert">
            {error}
          </p>
          <button className={styles.button} disabled={busy} type="submit">
            {busy ? 'Opening…' : 'View our next steps'}{' '}
            <span aria-hidden="true">↗</span>
          </button>
        </form>
      </section>
    </main>
  );
}
