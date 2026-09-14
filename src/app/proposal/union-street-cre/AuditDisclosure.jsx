'use client';

import { useId, useState } from 'react';
import styles from './page.module.css';

export default function AuditDisclosure({
  item,
  index,
  initiallyOpen = false,
}) {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const panelId = useId();

  return (
    <article
      className={`${styles.auditItem}${isOpen ? ` ${styles.auditItemOpen}` : ''}`}
    >
      <button
        className={styles.auditSummary}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className={styles.auditNumber}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <span>{item.name}</span>
        <span className={styles.auditTier}>{item.tier}</span>
        <span className={styles.expand} aria-hidden="true">
          +
        </span>
      </button>
      <div
        className={styles.auditPanel}
        id={panelId}
        aria-hidden={!isOpen}
        inert={!isOpen ? true : undefined}
      >
        <div className={styles.auditPanelInner}>
          <div className={styles.auditBody}>
            <div>
              <p className={styles.eyebrow}>Existing content</p>
              <p>{item.found}</p>
              <a
                href={`https://www.unionstreetcre.com${item.path}`}
                target="_blank"
                rel="noreferrer"
              >
                Review current page ↗
              </a>
            </div>
            <div>
              <p className={styles.eyebrow}>Rebuild recommendation</p>
              <p>{item.action}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
