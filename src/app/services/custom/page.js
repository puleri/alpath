import CallToAction from "../../components/CallToAction";

const useCases = [
  {
    title: "Specialized Web Applications",
    detail:
      "Internal tools, client portals, dashboards, and workflow systems designed around your operation.",
  },
  {
    title: "Custom Websites",
    detail:
      "Marketing sites and conversion experiences built from scratch to match your brand, goals, and technical requirements.",
  },
  {
    title: "MVP for Inventors",
    detail:
      "If you have an idea, we help you shape the technical scope, ship an MVP, and validate with real users.",
  },
  {
    title: "Full Product Engineering",
    detail:
      "From roadmap to launch, we can build your entire product with production-ready architecture.",
  },
];

const processSteps = [
  "Clarify the idea and define scope around measurable outcomes",
  "Design the architecture and user experience for version one",
  "Build iteratively with milestone reviews and rapid feedback",
  "Launch with support, analytics, and a path to scale",
];

export default function CustomServicesPage() {
  return (
    <main className="custom-services-page">
      <section className="custom-hero container">
        <div className="custom-hero-copy">
          <p className="custom-eyebrow">Custom Service</p>
          <h1>From idea to engineered product, built for your exact use case</h1>
          <p>
            Custom solutions can be specialized web applications, websites, or
            full software products. If you are an inventor with an idea and need
            an engineer to execute an MVP or the entire project, this is built
            for you.
          </p>
          <div className="custom-hero-actions">
            <a className="primary-button" href="/contact">
              → Start a Custom Build
            </a>
            <a className="secondary-button" href="#custom-funnel">
              → See Delivery Path
            </a>
          </div>
        </div>

        <div className="custom-hero-graphic" aria-hidden="true">
          <div className="custom-graphic-card">
            <div className="custom-graphic-node custom-node-idea">Idea</div>
            <div className="custom-graphic-arrow">→</div>
            <div className="custom-graphic-node custom-node-mvp">MVP</div>
            <div className="custom-graphic-arrow">→</div>
            <div className="custom-graphic-node custom-node-launch">Launch</div>
          </div>
        </div>
      </section>

      <section className="custom-section container">
        <h2>What we can build</h2>
        <div className="custom-use-case-grid">
          {useCases.map((item) => (
            <article key={item.title} className="custom-use-case-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="custom-section container" id="custom-funnel">
        <h2>A clear path from concept to conversion</h2>
        <p>
          Every engagement is designed to move your idea forward in practical
          steps and funnel toward launch outcomes.
        </p>
        <ol className="custom-process-list">
          {processSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="custom-section container">
        <h2>Who this is for</h2>
        <ul className="custom-fit-list">
          <li>Founders and inventors with a strong concept but no engineering team</li>
          <li>Businesses that need software tailored to unique internal workflows</li>
          <li>Teams that need to move quickly from vision to a working product</li>
        </ul>
      </section>

      <CallToAction variant="customBottom" />
    </main>
  );
}
