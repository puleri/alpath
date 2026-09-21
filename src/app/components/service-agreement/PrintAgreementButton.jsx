'use client';

import styles from './service-agreement.module.css';

export default function PrintAgreementButton() {
  return (
    <button
      className={styles.printButton}
      type="button"
      onClick={() => window.print()}
    >
      Print or save as PDF <span aria-hidden="true">↗</span>
    </button>
  );
}
