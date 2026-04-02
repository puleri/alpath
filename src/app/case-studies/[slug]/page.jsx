import { notFound } from "next/navigation";
import NavigationBar from "../../components/NavigationBar";
import { caseStudies, getCaseStudyBySlug } from "@/lib/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    return { title: "Case Study Not Found | Alpath Engineering" };
  }

  return {
    title: `${study.title} | Case Study | Alpath Engineering`,
    description: study.summary,
  };
}

export default function CaseStudyDetailPage({ params }) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <NavigationBar />
      <main className="case-study-detail-page container">
        <header className="case-study-detail-hero">
          <p className="case-studies-eyebrow">{study.industry}</p>
          <h1>{study.title}</h1>
          <p>{study.summary}</p>
        </header>

        <section className="case-study-detail-section">
          <h2>Problem</h2>
          <p>{study.problem}</p>
        </section>

        <section className="case-study-detail-section">
          <h2>System applied</h2>
          <ul>
            {study.systemApplied.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="case-study-detail-section">
          <h2>Outcome</h2>
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
        </section>
      </main>
    </>
  );
}
