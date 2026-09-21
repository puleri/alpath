import PrintAgreementButton from './PrintAgreementButton';
import styles from './service-agreement.module.css';

export function AgreementSectionTitle({ number, eyebrow, title, children }) {
  return (
    <div className={styles.sectionTitle}>
      <p className={styles.eyebrow}>
        {number} / {eyebrow}
      </p>
      <div>
        <h2>{title}</h2>
        {children && <p className={styles.sectionIntro}>{children}</p>}
      </div>
    </div>
  );
}

// Client content and access control belong to the consuming route.
export default function ServiceAgreementTemplate({
  client,
  contact,
  clientLogo,
  largeClientLogo = false,
  date,
  project,
  engagement,
  investment,
  paymentSummary,
  duration,
  support,
  proposalHref,
  sections,
  children,
  status = 'Draft for review',
}) {
  return (
    <main className={styles.page}>
      <a className={styles.skipLink} href="#agreement-content">
        Skip to agreement
      </a>
      <header className={styles.documentHeader}>
        <a className={`brand ${styles.brand}`} href="/">
          <img
            className="brand-icon-nav"
            src="/alpath/sign.svg"
            alt="Alpath Engineering brand mark"
          />
          <span className="brand-text">
            <span className="alpath-weight">Alpath</span> Engineering
          </span>
        </a>
        <div className={styles.documentActions}>
          <span className={styles.status}>{status}</span>
          <PrintAgreementButton />
        </div>
      </header>
      <div className={styles.documentLayout}>
        <aside className={styles.index}>
          <p className={styles.eyebrow}>In this agreement</p>
          <nav aria-label="Agreement sections">
            {sections.map((section, index) => (
              <a key={section.id} href={`#${section.id}`}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {section.label}
              </a>
            ))}
          </nav>
          {proposalHref && (
            <a className={styles.proposalLink} href={proposalHref}>
              View original proposal ↗
            </a>
          )}
          <p className={styles.indexNote}>
            Prepared for {client}
            <br />
            {date}
          </p>
        </aside>
        <div id="agreement-content" className={styles.document}>
          <header className={styles.cover}>
            <div className={styles.coverTop}>
              <p className={styles.eyebrow}>Client services / {date}</p>
              {clientLogo && (
                <img
                  className={
                    largeClientLogo ? styles.largeClientLogo : undefined
                  }
                  src={clientLogo}
                  alt={client}
                />
              )}
            </div>
            <h1>
              Services agreement<span>.</span>
            </h1>
            <p className={styles.projectName}>{project}</p>
            <div className={styles.parties}>
              <div>
                <p className={styles.eyebrow}>Prepared for</p>
                <strong>{client}</strong>
                <p>{contact}</p>
              </div>
              <div>
                <p className={styles.eyebrow}>Prepared by</p>
                <strong>Alpath Engineering</strong>
                <p>Matt Puleri</p>
              </div>
            </div>
            <dl className={styles.summary}>
              <div>
                <dt>Project fee</dt>
                <dd>{investment}</dd>
                <p>{paymentSummary}</p>
              </div>
              <div>
                <dt>Estimated schedule</dt>
                <dd>{duration}</dd>
                <p>From project kickoff</p>
              </div>
              <div>
                <dt>Included support</dt>
                <dd>{support}</dd>
                <p>{engagement}</p>
              </div>
            </dl>
          </header>
          {children}
          <footer className={styles.documentFooter}>
            <span>Alpath Engineering / {client}</span>
            <span>Services agreement · {status}</span>
          </footer>
        </div>
      </div>
    </main>
  );
}
