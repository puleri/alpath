export default function DocsDetailTemplate({ doc, sectionTitle, docLinks }) {
  const hasDeepDiveContent =
    doc.problemFraming ||
    doc.systemOverview?.length ||
    doc.components?.length ||
    doc.exampleFlow?.length ||
    doc.relatedSystems?.length ||
    doc.cta;

  return (
    <>
      <main className="docs-page docs-detail-page">
        <section className="docs-block container docs-detail-hero">
          <p className="docs-eyebrow">{doc.eyebrow}</p>
          <h1>{doc.title}</h1>
          <p className="docs-subheadline">{doc.intro}</p>
        </section>

        {hasDeepDiveContent ? (
          <>
            {doc.problemFraming ? (
              <section className="docs-block container docs-detail-sections">
                <article className="docs-detail-section-card">
                  <h2>Problem Framing</h2>
                  {doc.problemFraming.points?.length ? (
                    <ul>
                      {doc.problemFraming.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : null}
                  {doc.problemFraming.insight ? (
                    <p>
                      <strong>Insight:</strong> {doc.problemFraming.insight}
                    </p>
                  ) : null}
                </article>
              </section>
            ) : null}

            {doc.systemOverview?.length ? (
              <section className="docs-block container">
                <h2>System Overview</h2>
                <div className="docs-flow-shell">
                  {doc.systemOverview.flatMap((step, index) => [
                    <div key={step}>
                      <p className="docs-flow-label">{step}</p>
                    </div>,
                    index < doc.systemOverview.length - 1 ? (
                      <span key={`${step}-arrow`}>→</span>
                    ) : null,
                  ])}
                </div>
              </section>
            ) : null}

            {doc.components?.length ? (
              <section className="docs-block container">
                <h2>Key Components</h2>
                <div className="docs-detail-grid">
                  {doc.components.map((component) => (
                    <article key={component.title} className="docs-detail-card">
                      <h3>{component.title}</h3>
                      {component.points?.length ? (
                        <ul>
                          {component.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      ) : null}
                      {component.why ? (
                        <p>
                          <strong>Why it matters:</strong> {component.why}
                        </p>
                      ) : null}
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            {doc.exampleFlow?.length ? (
              <section className="docs-block container docs-detail-sections">
                <article className="docs-detail-section-card">
                  <h2>Example Flow</h2>
                  <ul>
                    {doc.exampleFlow.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                </article>
              </section>
            ) : null}

            {doc.relatedSystems?.length ? (
              <section className="docs-block container docs-cta-shell">
                <h2>Related Systems</h2>
                <div className="docs-detail-link-list">
                  {doc.relatedSystems.map((system) => (
                    <a key={system.href} href={system.href}>
                      → {system.label}
                    </a>
                  ))}
                </div>
              </section>
            ) : null}

            {doc.cta ? (
              <section className="docs-block container docs-cta-shell">
                <h2>{doc.cta.heading || 'Next Step'}</h2>
                <div className="docs-detail-link-list">
                  <a href={doc.cta.href}>→ {doc.cta.label}</a>
                </div>
              </section>
            ) : null}
          </>
        ) : (
          <>
            <section className="docs-block container">
              <h2>Key Outcomes</h2>
              <div className="docs-detail-grid">
                {doc.highlights.map((highlight) => (
                  <article key={highlight} className="docs-detail-card">
                    <p>{highlight}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="docs-block container docs-detail-sections">
              {doc.sections.map((section) => (
                <article
                  key={section.heading}
                  className="docs-detail-section-card"
                >
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
            </section>

            <section className="docs-block container docs-cta-shell">
              <h2>{sectionTitle}</h2>
              <div className="docs-detail-link-list">
                {docLinks.map((link) => (
                  <a key={link.href} href={link.href}>
                    → {link.label}
                  </a>
                ))}
              </div>
            </section>
          </>
        )}
      </main>
    </>
  );
}
