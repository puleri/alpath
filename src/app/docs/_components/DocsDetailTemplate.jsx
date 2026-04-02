import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";

export default function DocsDetailTemplate({ doc, sectionTitle, docLinks }) {
  return (
    <>
      <NavigationBar />
      <main className="docs-page docs-detail-page">
        <section className="docs-block container docs-detail-hero">
          <p className="docs-eyebrow">{doc.eyebrow}</p>
          <h1>{doc.title}</h1>
          <p className="docs-subheadline">{doc.intro}</p>
        </section>

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
            <article key={section.heading} className="docs-detail-section-card">
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
      </main>
      <Footer />
    </>
  );
}
