import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

const systems = [
  {
    title: "Web Consulting",
    description:
      "Diagnose and strengthen your digital foundation. Understand what’s working, what’s not, and what to fix.",
    links: [
      { label: "/docs/web-consulting", href: "/docs/web-consulting" },
      { label: "Site Audit Framework", href: "/docs/web-consulting/site-audit-framework" },
      { label: "Conversion Principles", href: "/docs/web-consulting/conversion-principles" },
      { label: "Performance Architecture", href: "/docs/web-consulting/performance-architecture" },
      { label: "Content Structure", href: "/docs/web-consulting/content-structure" },
    ],
  },
  {
    title: "Revenue Automation",
    description:
      "Design systems that capture, qualify, and convert leads automatically.",
    links: [
      { label: "/docs/revenue-automation", href: "/docs/revenue-automation" },
      { label: "Lead Capture Systems", href: "/docs/revenue-automation/lead-capture-systems" },
      { label: "Lead Routing Logic", href: "/docs/revenue-automation/lead-routing-logic" },
      { label: "Follow-Up Automation", href: "/docs/revenue-automation/follow-up-automation" },
      { label: "CRM Integration", href: "/docs/revenue-automation/crm-integration" },
    ],
  },
  {
    title: "Business Intelligence",
    description:
      "Build visibility into your systems so you can make informed decisions.",
    links: [
      { label: "/docs/business-intelligence", href: "/docs/business-intelligence" },
      { label: "Metrics That Matter", href: "/docs/business-intelligence/metrics-that-matter" },
      { label: "Dashboard Architecture", href: "/docs/business-intelligence/dashboard-architecture" },
      { label: "Data Pipelines", href: "/docs/business-intelligence/data-pipelines" },
      { label: "Reporting Systems", href: "/docs/business-intelligence/reporting-systems" },
    ],
  },
];

const usageSteps = [
  {
    title: "Step 1 — Start with your problem",
    description: "Choose the system that matches where you are.",
  },
  {
    title: "Step 2 — Understand the framework",
    description: "Review how the system is structured and why.",
  },
  {
    title: "Step 3 — Apply or engage",
    description: "Use it internally or work with us to implement it.",
  },
];

function DocsHero() {
  return (
    <section className="docs-hero docs-block container">
      <p className="docs-eyebrow">Documentation Hub</p>
      <h1>Systems, not services</h1>
      <p className="docs-subheadline">
        This is how we think, design, and build systems that drive measurable business outcomes.
      </p>
      <p className="docs-supporting-text">
        Most digital work focuses on outputs—pages, features, campaigns. We focus on systems:
        how things connect, how they perform, and how they scale.
      </p>
      <p className="docs-supporting-text">
        This documentation outlines the frameworks behind everything we build.
      </p>
    </section>
  );
}

function SystemCardGrid() {
  return (
    <section className="docs-block container">
      <h2>System Entry Points</h2>
      <div className="docs-card-grid">
        {systems.map((system) => (
          <article key={system.title} className="docs-system-card">
            <h3>{system.title}</h3>
            <p>{system.description}</p>
            <ul>
              {system.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>→ {link.label}</a>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function DocsLinkList() {
  return (
    <section className="docs-block container">
      <h2>All Documentation Paths</h2>
      <div className="docs-link-columns">
        {systems.map((system) => (
          <div key={system.title} className="docs-link-column">
            <h3>{system.title}</h3>
            <ul>
              {system.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function DocsUsageGuide() {
  return (
    <section className="docs-block container">
      <h2>How to Use These Docs</h2>
      <div className="docs-usage-grid">
        {usageSteps.map((step) => (
          <article key={step.title} className="docs-usage-step">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SystemFlowDiagram() {
  return (
    <section className="docs-block container">
      <h2>Cross-System Framing</h2>
      <div className="docs-flow-shell" aria-label="Foundation flows into automation and visibility">
        <div>
          <p className="docs-flow-label">Foundation</p>
          <h3>Web</h3>
        </div>
        <span aria-hidden="true">→</span>
        <div>
          <p className="docs-flow-label">Flow</p>
          <h3>Automation</h3>
        </div>
        <span aria-hidden="true">→</span>
        <div>
          <p className="docs-flow-label">Visibility</p>
          <h3>Business Intelligence</h3>
        </div>
      </div>
      <p className="docs-flow-copy">
        Each system builds on the last. You can enter anywhere, but the full system creates the
        most leverage.
      </p>
    </section>
  );
}

function DocsCTA() {
  return (
    <section className="docs-block container docs-cta-shell">
      <h2>Understand your system. Then improve it.</h2>
      <div className="docs-cta-links">
        <a href="/services/web-services">→ Start with an Audit</a>
        <a href="/services">→ Talk Through Your System</a>
      </div>
    </section>
  );
}

export default function DocsHubPage() {
  return (
    <>
      <NavigationBar />
      <main className="docs-page">
        <DocsHero />
        <SystemCardGrid />
        <DocsLinkList />
        <DocsUsageGuide />
        <SystemFlowDiagram />
        <DocsCTA />
      </main>
      <Footer />
    </>
  );
}
