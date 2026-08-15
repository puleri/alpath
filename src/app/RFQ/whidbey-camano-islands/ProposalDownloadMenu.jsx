'use client';

import { useEffect, useId, useRef, useState } from 'react';
import styles from './page.module.css';

const PDF_PATH = '/RFQ/alpath-rfq-response-whidbey-camano.pdf';

export default function ProposalDownloadMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState('Copy link');
  const menuId = useId();
  const menuRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const closeOnOutsideClick = (event) => {
      if (!menuRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('pointerdown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopyStatus('Link copied');
      window.setTimeout(() => setCopyStatus('Copy link'), 1800);
    } catch {
      setCopyStatus('Copy failed');
      window.setTimeout(() => setCopyStatus('Copy link'), 1800);
    }
  };

  return (
    <div className={styles.downloadMenu} ref={menuRef}>
      <button
        aria-controls={menuId}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className={styles.downloadTrigger}
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        Download
        <span aria-hidden="true">{isOpen ? '↑' : '↓'}</span>
      </button>
      {isOpen ? (
        <div className={styles.downloadMenuPanel} id={menuId} role="menu">
          <a
            download="Alpath RFQ Response - Whidbey and Camano Islands.pdf"
            href={PDF_PATH}
            onClick={() => setIsOpen(false)}
            role="menuitem"
          >
            <span>PDF</span>
            <span aria-hidden="true">↓</span>
          </a>
          <button onClick={copyLink} role="menuitem" type="button">
            <span>{copyStatus}</span>
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
