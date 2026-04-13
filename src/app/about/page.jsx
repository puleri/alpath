
export const metadata = {
  title: "About | Alpath Engineering",
  description:
    "Learn about Alpath Engineering's system-builder approach to web performance, revenue operations, and business intelligence.",
};

const principles = [
  {
    title: "Systems over isolated fixes",
    description:
      "Point solutions create local wins and global friction. We design connected operating systems so every improvement compounds.",
  },
  {
    title: "Decisions tied to operating data",
    description:
      "We prioritize instrumentation and reporting early so teams can validate what works and quickly correct what does not.",
  },
  {
    title: "Execution built for handoff",
    description:
      "Every engagement is documented, structured, and transferred so teams can run the system confidently without dependency.",
  },
];

export default function AboutPage() {
  return (
    <>
      <main className="about-page container">
        <header className="about-hero">
          <p className="case-studies-eyebrow">About</p>
          <h1>Principal system builder for revenue-focused operations</h1>
          <p>
            Alpath Engineering partners with growth teams to design the systems
            behind reliable performance: acquisition flow, conversion logic,
            and executive visibility.
          </p>
        </header>

        <section className="about-section">
          <h2>How this approach is different</h2>
          <p>
            Many firms deliver websites, automations, or dashboards as separate
            projects. We build across all three so your organization runs as one
            coordinated system, not a collection of tools.
          </p>
          <ul>
            <li>
              Strategy is tied to operating constraints, not abstract best
              practices.
            </li>
            <li>
              Delivery is measured by business outcomes, not just project
              completion.
            </li>
            <li>
              Architecture is designed for long-term maintainability and team
              ownership.
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Philosophy</h2>
          <div className="about-principles-grid">
            {principles.map((principle) => (
              <article className="about-principle-card" key={principle.title}>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
