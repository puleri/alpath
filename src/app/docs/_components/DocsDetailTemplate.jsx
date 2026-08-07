function DetailSectionHeader({
  kicker,
  title,
  inverted = false,
  showMark = false,
}) {
  return (
    <header
      className={`docs-detail-section-heading${inverted ? ' is-inverted' : ''}`}
    >
      <div>
        <p className="docs-detail-kicker">{kicker}</p>
        <h2>{title}</h2>
      </div>
      {showMark ? <img src="/alpath/sign.svg" alt="" /> : null}
    </header>
  );
}

function DocsLinkPanel({ title, links, className = '' }) {
  return (
    <section
      className={`docs-block container docs-detail-link-panel ${className}`}
    >
      <div className="docs-detail-link-panel-heading">
        <p className="docs-detail-kicker">Continue exploring</p>
        <h2>{title}</h2>
      </div>
      <div className="docs-detail-link-list">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            <span>{link.label}</span>
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function DocsActionPanel({ cta }) {
  return (
    <section className="docs-block container docs-detail-action">
      <img className="docs-detail-action-mark" src="/alpath/sign.svg" alt="" />
      <div>
        <p className="docs-detail-kicker">Put the system to work</p>
        <h2>{cta.heading || 'Next Step'}</h2>
      </div>
      <a href={cta.href}>
        <span>{cta.label}</span>
        <span aria-hidden="true">→</span>
      </a>
    </section>
  );
}

function DeepDiveContent({ doc }) {
  return (
    <>
      {doc.problemFraming ? (
        <section className="docs-block container docs-detail-problem">
          <DetailSectionHeader kicker="Diagnose" title="Problem Framing" />
          <div className="docs-detail-problem-layout">
            {doc.problemFraming.points?.length ? (
              <ol className="docs-detail-ruled-list">
                {doc.problemFraming.points.map((point, index) => (
                  <li key={point}>
                    <span aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p>{point}</p>
                  </li>
                ))}
              </ol>
            ) : null}
            {doc.problemFraming.insight ? (
              <aside className="docs-detail-insight">
                <p className="docs-detail-kicker">Core insight</p>
                <p>{doc.problemFraming.insight}</p>
              </aside>
            ) : null}
          </div>
        </section>
      ) : null}

      {doc.systemOverview?.length ? (
        <section className="docs-block container docs-detail-system">
          <DetailSectionHeader kicker="Architecture" title="System Overview" />
          <ol
            className="docs-detail-system-flow"
            aria-label="System steps in order"
          >
            {doc.systemOverview.map((step, index) => (
              <li key={step}>
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p>{step}</p>
                {index < doc.systemOverview.length - 1 ? (
                  <span className="docs-detail-system-arrow" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {doc.components?.length ? (
        <section className="docs-block docs-detail-components">
          <div className="container">
            <DetailSectionHeader
              kicker="System anatomy"
              title="Key Components"
              inverted
              showMark
            />
            <div className="docs-detail-component-grid">
              {doc.components.map((component, index) => (
                <article
                  key={component.title}
                  className="docs-detail-component"
                >
                  <p className="docs-detail-component-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3>{component.title}</h3>
                  {component.points?.length ? (
                    <ul>
                      {component.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : null}
                  {component.why ? (
                    <p className="docs-detail-component-why">
                      <strong>Why it matters</strong>
                      <span>{component.why}</span>
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {doc.exampleFlow?.length ? (
        <section className="docs-block container docs-detail-example">
          <DetailSectionHeader kicker="In practice" title="Example Flow" />
          <ol className="docs-detail-example-list">
            {doc.exampleFlow.map((step, index) => (
              <li key={step}>
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {doc.relatedSystems?.length ? (
        <DocsLinkPanel title="Related Systems" links={doc.relatedSystems} />
      ) : null}

      {doc.cta ? <DocsActionPanel cta={doc.cta} /> : null}
    </>
  );
}

function GuideContent({ doc, sectionTitle, docLinks }) {
  return (
    <>
      <section className="docs-block container docs-detail-outcomes">
        <DetailSectionHeader
          kicker="What you will learn"
          title="Key Outcomes"
        />
        <div className="docs-detail-outcome-grid">
          {doc.highlights.map((highlight, index) => (
            <article key={highlight} className="docs-detail-outcome">
              <p className="docs-detail-outcome-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </p>
              <p>{highlight}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="docs-block docs-detail-guide-sections">
        <div className="container">
          <DetailSectionHeader
            kicker="The framework"
            title="Build from clarity."
            inverted
            showMark
          />
          <div className="docs-detail-guide-grid">
            {doc.sections.map((section, index) => (
              <article
                key={section.heading}
                className="docs-detail-guide-section"
              >
                <p className="docs-detail-guide-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <DocsLinkPanel
        title={sectionTitle}
        links={docLinks}
        className="docs-detail-library-panel"
      />
    </>
  );
}

export default function DocsDetailTemplate({ doc, sectionTitle, docLinks }) {
  const hasDeepDiveContent =
    doc.problemFraming ||
    doc.systemOverview?.length ||
    doc.components?.length ||
    doc.exampleFlow?.length ||
    doc.relatedSystems?.length ||
    doc.cta;

  return (
    <main className="docs-page docs-detail-page">
      <section className="docs-block container docs-detail-hero">
        <p className="docs-eyebrow">{doc.eyebrow}</p>
        <h1>{doc.title}</h1>
        <p className="docs-subheadline">{doc.intro}</p>
      </section>

      <div className="docs-detail-content">
        {hasDeepDiveContent ? (
          <DeepDiveContent doc={doc} />
        ) : (
          <GuideContent
            doc={doc}
            sectionTitle={sectionTitle}
            docLinks={docLinks}
          />
        )}
      </div>
    </main>
  );
}
