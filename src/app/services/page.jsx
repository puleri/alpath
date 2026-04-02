import NavigationBar from "../components/NavigationBar";

const serviceLayers = [
  {
    title: "Foundation",
    detail: "Is your digital presence working?",
  },
  {
    title: "Flow",
    detail: "Are leads turning into revenue?",
  },
  {
    title: "Visibility",
    detail: "Do you know what’s actually happening?",
  },
];

const services = [
  {
    number: "1",
    id: "web-consulting",
    title: "Web Consulting",
    kicker: "Diagnose and strengthen your foundation",
    intro:
      "Your website should be more than a brochure—it should be a high-performing system.",
    points: [
      "Structure and clarity",
      "Conversion paths",
      "Performance and speed",
      "Content hierarchy",
      "User experience",
    ],
    outcome: "A site that is clear, fast, and built to convert.",
    when: [
      "Your site looks good but underperforms",
      "You’re unsure where users drop off",
      "You’re preparing for growth but lack confidence in your foundation",
    ],
    cta: "Get a System Audit",
    href: "#start-with-audit",
  },
  {
    number: "2",
    id: "revenue-automation",
    title: "Revenue Automation",
    kicker: "Turn traffic into consistent revenue",
    intro:
      "Once your foundation is strong, we build the system that actually drives revenue.",
    points: [
      "Lead capture systems",
      "Qualification and routing logic",
      "Automated follow-up flows",
      "CRM and pipeline integrations",
      "Conversion-focused funnels",
    ],
    outcome:
      "A system that captures, nurtures, and converts leads—automatically.",
    when: [
      "Leads are inconsistent or lost",
      "Follow-up is manual or unreliable",
      "Your funnel feels fragmented",
    ],
    cta: "Design My Revenue System",
    href: "/services/revenue-automation",
  },
  {
    number: "3",
    id: "business-intelligence",
    title: "Business Intelligence",
    kicker: "Gain clarity and control at the executive level",
    intro:
      "Most businesses operate without real visibility into performance.",
    points: [
      "Clear, actionable metrics",
      "Unified data across tools",
      "Executive dashboards",
      "Reporting systems tied to outcomes",
    ],
    outcome:
      "You understand what’s working, what isn’t, and where to act.",
    when: [
      "You rely on guesswork or scattered data",
      "Reporting is manual or unclear",
      "You want to scale with confidence",
    ],
    cta: "Build Executive Dashboard",
    href: "#start-with-audit",
  },
];

export default function ServicesPage() {
  return (
    <>
      <NavigationBar />
      <main className="services-page">
        <section className="services-hero container">
          <div className="services-eyebrow-wrap">
            <p className="services-eyebrow">Services Hub</p>
          </div>
          <h1>Systems that turn your digital presence into a revenue engine</h1>
          <p className="services-subheadline">
            We design and build integrated systems that attract, convert, and
            inform—so your business doesn’t just exist online, it performs.
          </p>
        </section>

        <section className="services-section container">
          <h2>Overview</h2>
          <p>
            Most businesses don’t have a website problem—they have a system
            problem.
          </p>
          <ul>
            <li>Leads aren’t captured effectively</li>
            <li>Opportunities aren’t followed up on</li>
            <li>Decisions are made without clear data</li>
          </ul>
          <p>
            We solve this by building connected systems, not isolated solutions.
          </p>
        </section>

        <section className="services-section container">
          <h2>Our Approach</h2>
          <p>We work across three layers of your business:</p>
          <div className="services-layer-grid">
            {serviceLayers.map((layer) => (
              <article key={layer.title} className="services-layer-card">
                <h3>{layer.title}</h3>
                <p>{layer.detail}</p>
              </article>
            ))}
          </div>
          <p>Each service builds on the last.</p>
        </section>

        <section className="services-cards container" aria-label="Core services">
          {services.map((service) => (
            <article key={service.title} id={service.id} className="service-card">
              <p className="service-number">{service.number}. {service.title}</p>
              <h3>{service.kicker}</h3>
              <p>{service.intro}</p>

              <h4>We analyze and improve:</h4>
              <ul>
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <h4>Outcome:</h4>
              <p>{service.outcome}</p>

              <h4>When you need this:</h4>
              <ul>
                {service.when.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <a className="services-cta-link" href={service.href}>
                → {service.cta}
              </a>
            </article>
          ))}
        </section>

        <section className="services-section container">
          <h2>How It Fits Together</h2>
          <p>These are not separate services—they are a connected system:</p>
          <ul>
            <li>A strong foundation enables effective automation</li>
            <li>Automation generates data</li>
            <li>Data enables better decisions and growth</li>
          </ul>
          <p>
            You can enter at any point, but the full system is where the real
            leverage happens.
          </p>
        </section>

        <section className="services-section container" id="start-with-audit">
          <h2>Not Sure Where to Start?</h2>
          <p>Most clients begin with a system audit to identify:</p>
          <ul>
            <li>What’s working</li>
            <li>What’s broken</li>
            <li>What will drive the most impact</li>
          </ul>
          <p>From there, we map the right path forward.</p>
        </section>

        <section className="services-final-cta container">
          <h2>Understand your system. Then improve it.</h2>
          <div className="services-final-links">
            <a className="primary-button" href="#start-with-audit">
              → Start with an Audit
            </a>
            <a className="secondary-button" href="/docs">
              → Explore Our Approach in Docs
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
