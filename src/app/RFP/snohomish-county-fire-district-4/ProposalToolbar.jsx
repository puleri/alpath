'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function ProposalToolbar() {
  const [status, setStatus] = useState('');

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setStatus('Link copied');
      window.setTimeout(() => setStatus(''), 1800);
    } catch {
      setStatus('Copy unavailable');
    }
  };

  return (
    <div className={styles.toolbar}>
      <button type="button" onClick={() => window.print()}>
        Print / save PDF
      </button>
      <button type="button" onClick={copyLink}>
        {status === 'Link copied' ? 'Copied' : 'Copy link'}
      </button>
      <p aria-live="polite" className={styles.toolbarStatus}>
        {status}
      </p>
    </div>
  );
}
