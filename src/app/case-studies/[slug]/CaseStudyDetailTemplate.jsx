import CallToAction from '../../components/CallToAction';

function fadeStyle(delay = 0) {
  return { '--case-study-delay': `${delay}ms` };
}

function BorderLines() {
  return (
    <span className="case-study-border-lines" aria-hidden="true">
      <span className="case-study-border-line case-study-border-line-top" />
      <span className="case-study-border-line case-study-border-line-right" />
      <span className="case-study-border-line case-study-border-line-bottom" />
      <span className="case-study-border-line case-study-border-line-left" />
    </span>
  );
}

function Section({ title, children, delay = 0 }) {
  return (
    <section
      className="case-study-detail-section case-study-fade-in case-study-drawn-surface"
      style={fadeStyle(delay)}
    >
      <BorderLines />
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function CaseStudyDetailTemplate({ study }) {
  const detail = study.detailPage;
  const hasHeroImage = Boolean(detail?.heroImage);

  return (
    <>
      <main
        className={`case-study-detail-page container${
          hasHeroImage ? ' case-study-detail-page-featured' : ''
        }`}
      >
        <header
          className={`case-study-detail-hero case-study-fade-in${
            hasHeroImage ? ' case-study-detail-hero-with-image' : ''
          }`}
          style={fadeStyle()}
        >
          <div className="case-study-detail-hero-copy">
            <p className="case-studies-eyebrow">{study.industry}</p>
            <h1>{detail?.heroTitle || study.title}</h1>
            <p>{detail?.heroSummary || study.summary}</p>

            {detail?.heroTags?.length ? (
              <ul className="case-study-hero-tags" aria-label="Project tags">
                {detail.heroTags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            ) : null}
          </div>

          {detail?.heroImage ? (
            <figure className="case-study-detail-hero-image">
              <img src={detail.heroImage.src} alt={detail.heroImage.alt} />
            </figure>
          ) : null}
        </header>

        {detail?.overview ? (
          <section
            className="case-study-overview-section case-study-fade-in case-study-drawn-surface"
            aria-labelledby="case-study-overview-title"
            style={fadeStyle(80)}
          >
            <BorderLines />
            <div>
              <p className="case-studies-eyebrow">Overview</p>
              <h2 id="case-study-overview-title">{detail.overview.title}</h2>
              <p>{detail.overview.body}</p>
            </div>
            {detail.overview.points?.length ? (
              <ul>
                {detail.overview.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ) : null}

        {detail?.keyMetrics?.length ? (
          <section
            className="case-study-metrics-grid case-study-fade-in"
            aria-label="Key outcomes"
            style={fadeStyle(160)}
          >
            {detail.keyMetrics.map((metric, index) => (
              <article
                key={metric.label}
                className="case-study-metric-card case-study-drawn-surface"
                style={{ '--metric-delay': `${index * 220}ms` }}
              >
                <BorderLines />
                {metric.icon ? (
                  <span className="case-study-metric-icon" aria-hidden="true">
                    <img src={metric.icon} alt="" />
                  </span>
                ) : null}
                <p className="case-study-metric-value">{metric.value}</p>
                <p className="case-study-metric-label">{metric.label}</p>
              </article>
            ))}
          </section>
        ) : null}

        <Section title="Challenge" delay={240}>
          <p>{detail?.challenge || study.problem}</p>
        </Section>

        <Section title="System applied" delay={320}>
          <ul>
            {study.systemApplied.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        {detail?.implementationPhases?.length ? (
          <Section title="Implementation plan" delay={400}>
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

        <Section title="Outcome" delay={480}>
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
          <Section title="Tech stack" delay={560}>
            <ul className="case-study-tag-list">
              {detail.techStack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>
        ) : null}
      </main>

      {detail?.ctaVariant ? (
        <CallToAction variant={detail.ctaVariant} />
      ) : detail?.nextStep ? (
        <section className="case-study-detail-cta">
          <h2>Need this outcome in your business?</h2>
          <p>{detail.nextStep}</p>
          <a className="primary-button" href="/contact">
            → Start with a systems audit
          </a>
        </section>
      ) : null}
    </>
  );
}
