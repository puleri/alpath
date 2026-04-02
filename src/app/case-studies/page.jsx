import { caseStudies } from "@/lib/caseStudies";

export const metadata = {
  title: "Case Studies | Alpath Engineering",
  description:
    "See how system-first engagements improved revenue operations, conversion performance, and leadership visibility.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <main className="case-studies-page container">
        <header className="case-studies-hero">
          <p className="case-studies-eyebrow">Case Studies</p>
          <h1>System builds with measurable outcomes</h1>
          <p>
            These case studies show before → after performance and tie each
            result directly to the systems we implemented.
          </p>
        </header>

        <section className="case-studies-grid" aria-label="Case studies list">
          {caseStudies.map((study) => (
            <article key={study.slug} className="case-study-card">
              <p className="case-study-industry">{study.industry}</p>
              <h2>{study.title}</h2>
              <p>{study.summary}</p>

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

              <a href={`/case-studies/${study.slug}`} className="services-cta-link">
                → View full case study
              </a>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
