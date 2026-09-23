'use client';

import styles from './service-agreement.module.css';

export default function PrintAgreementButton() {
  return (
    <span className={styles.printControl}>
      <button
        className={styles.printButton}
        type="button"
        aria-describedby="clean-pdf-hint"
        onClick={() => window.print()}
      >
        Print or save as PDF <span aria-hidden="true">↗</span>
      </button>
      <span className={styles.printHint} id="clean-pdf-hint">
        For a clean PDF, turn off “Headers and footers” in print settings.
      </span>
    </span>
  );
}
