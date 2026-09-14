'use client';

import { useEffect, useId, useRef, useState } from 'react';
import styles from './page.module.css';

const email = 'matt@alpathengineering.com';

export default function CopyEmailButton() {
  const [message, setMessage] = useState('');
  const timer = useRef(null);
  const tooltipId = useId();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function copyEmail() {
    window.clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(email);
      setMessage('Copied to clipboard');
    } catch {
      setMessage('Couldn’t copy. Please select and copy the email.');
    }
    timer.current = window.setTimeout(() => setMessage(''), 3000);
  }

  return (
    <span className={styles.copyEmailWrap}>
      <button
        className={`${styles.button} ${styles.copyEmailButton}`}
        type="button"
        onClick={copyEmail}
        onKeyDown={(event) => {
          if (event.key === 'Escape') setMessage('');
        }}
        aria-label={`Copy ${email} to clipboard`}
        aria-describedby={message ? tooltipId : undefined}
      >
        {email}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <rect x="8" y="8" width="12" height="12" rx="1" />
          <path d="M16 8V4H4v12h4" />
        </svg>
      </button>
      <span
        className={styles.copyEmailTooltip}
        id={tooltipId}
        role="status"
        aria-live="polite"
        data-visible={Boolean(message)}
      >
        {message}
      </span>
    </span>
  );
}
