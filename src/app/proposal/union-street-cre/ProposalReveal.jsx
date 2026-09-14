'use client';

import { useEffect, useRef } from 'react';
import styles from './page.module.css';

export default function ProposalReveal({ children }) {
  const mainRef = useRef(null);

  useEffect(() => {
    // Move keyboard focus out of the removed password form without changing scroll.
    mainRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <main
      ref={mainRef}
      tabIndex={-1}
      className={`${styles.page} ${styles.proposalReveal}`}
    >
      {children}
    </main>
  );
}
