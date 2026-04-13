function Section({ title, children }) {
  return (
    <section className="case-study-detail-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function CaseStudyDetailTemplate({ study }) {
  const detail = study.detailPage;

  return (
    <main className="case-study-detail-page container">
      <header className="case-study-detail-hero">
        <p className="case-studies-eyebrow">{study.industry}</p>
        <h1>{detail?.heroTitle || study.title}</h1>
        <p>{detail?.heroSummary || study.summary}</p>
      </header>

      {detail?.keyMetrics?.length ? (
        <section className="case-study-metrics-grid" aria-label="Key outcomes">
          {detail.keyMetrics.map((metric) => (
            <article key={metric.label} className="case-study-metric-card">
              <p className="case-study-metric-value">{metric.value}</p>
              <p className="case-study-metric-label">{metric.label}</p>
            </article>
          ))}
        </section>
      ) : null}

      <Section title="Challenge">
        <p>{detail?.challenge || study.problem}</p>
      </Section>

      <Section title="System applied">
        <ul>
          {study.systemApplied.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      {detail?.implementationPhases?.length ? (
        <Section title="Implementation plan">
          <ol className="case-study-phases-list">
            {detail.implementationPhases.map((phase) => (
              <li key={phase.title}>
                <h3>{phase.title}</h3>
                <p>{phase.description}</p>
              </li>
            ))}
          </ol>
        </Section>
      ) : null}

      <Section title="Outcome">
        <div className="case-study-before-after">
          <div>
            <h3>Before</h3>
            <ul>
              {study.beforeState.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>After</h3>
            <ul>
              {study.afterState.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <h3 className="case-study-results-title">Measured impact</h3>
        <ul>
          {study.outcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      {detail?.techStack?.length ? (
        <Section title="Tech stack">
          <ul className="case-study-tag-list">
            {detail.techStack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>
      ) : null}

      {detail?.nextStep ? (
        <section className="case-study-detail-cta">
          <h2>Need this outcome in your business?</h2>
          <p>{detail.nextStep}</p>
          <a className="primary-button" href="/contact">
            → Start with a systems audit
          </a>
        </section>
      ) : null}
    </main>
  );
}
