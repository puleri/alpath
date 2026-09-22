'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function ProposalPasswordGate({ isAgreement = false }) {
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
          {isAgreement
            ? 'You’re in. Opening the final agreement…'
            : 'You’re in. Opening our next steps…'}
        </p>
      )}
      <section className={styles.passwordPanel} aria-labelledby="access-title">
        {isAgreement ? (
          <div className={styles.gatePartners}>
            <span className={styles.gateAlpath}>
              <img src="/alpath/sign.svg" alt="" />
              <span>
                <strong>Alpath</strong> Engineering
              </span>
            </span>
            <span
              className={styles.gatePartnerCross}
              aria-label="in partnership with"
            >
              ×
            </span>
            <img
              className={styles.gateClientLogo}
              src="/union-street/logo.avif"
              alt="Union Street CRE"
            />
          </div>
        ) : (
          <img
            className={styles.unionStreetLogoGate}
            src="/union-street/logo.avif"
            alt="Union Street CRE"
          />
        )}
        <p className={styles.eyebrow}>
          {isAgreement
            ? 'Prepared for Union Street CRE'
            : 'A follow-up for Union Street CRE'}
        </p>
        <h1 id="access-title">
          {isAgreement ? 'Services agreement' : 'Private proposal'}
          <br />
          {isAgreement ? 'Final agreement' : 'follow up'}
        </h1>
        <p>
          {isAgreement
            ? 'Use the same password as the proposal to review it.'
            : 'I’ve put our website rebuild options and next steps here. Enter the password I shared to take a look.'}
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
            {busy
              ? 'Opening…'
              : isAgreement
                ? 'Review the final agreement'
                : 'View our next steps'}{' '}
            <span aria-hidden="true">↗</span>
          </button>
        </form>
      </section>
    </main>
  );
}
