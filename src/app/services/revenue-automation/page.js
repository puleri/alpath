import NavigationBar from "../../components/NavigationBar";

const problemPoints = [
  "Leads come in, but nothing happens next",
  "Follow-up is inconsistent or manual",
  "Sales processes are unclear or fragmented",
  "You don’t know where revenue is leaking",
];

const systemFlow = [
  {
    title: "Traffic",
    description: "Bring qualified visitors in from ads, search, and referrals.",
    example: "Example: campaign traffic from Google Ads and SEO pages.",
  },
  {
    title: "Capture",
    description: "Convert interest into structured lead data with clear capture points.",
    example: "Example: high-intent forms on service landing pages.",
  },
  {
    title: "Qualification",
    description: "Score and segment leads based on fit, intent, and urgency.",
    example: "Example: routing high-intent submissions to priority pipeline stages.",
  },
  {
    title: "Routing",
    description: "Direct each lead to the right owner, queue, or workflow automatically.",
    example: "Example: enterprise leads go to sales, small projects enter nurture.",
  },
  {
    title: "Follow-up",
    description: "Trigger immediate and persistent follow-up so no lead is ignored.",
    example: "Example: email + SMS sequence starts within minutes of submission.",
  },
  {
    title: "Conversion",
    description: "Move qualified prospects into booked calls, proposals, and closed deals.",
    example: "Example: auto-booking links and stage updates in CRM.",
  },
];

const modules = [
  {
    id: "lead-capture",
    title: "Lead Capture Systems",
    description:
      "Forms, landing pages, and gated content built around buyer intent and conversion quality.",
    why: "Why it matters: Better capture quality means stronger opportunities downstream.",
  },
  {
    id: "qualification-routing",
    title: "Qualification & Routing",
    description:
      "Rules-based routing that sends each lead to the right person at the right time.",
    why: "Why it matters: Speed and relevance directly improve close rates.",
  },
  {
    id: "automated-followup",
    title: "Automated Follow-Up",
    description:
      "Trigger-based email and SMS workflows that keep momentum without manual effort.",
    why: "Why it matters: Consistent follow-up recovers opportunities that would otherwise go cold.",
  },
  {
    id: "crm-pipeline",
    title: "CRM & Pipeline Integration",
    description:
      "Centralized tracking with stage visibility so sales and operations share one source of truth.",
    why: "Why it matters: Visibility reduces bottlenecks and improves forecasting confidence.",
  },
  {
    id: "conversion-layer",
    title: "Conversion Layer",
    description:
      "Booking flows, funnel optimization, and closing support systems that remove friction.",
    why: "Why it matters: Small conversion improvements compound into meaningful revenue growth.",
  },
];

const outcomes = [
  "Increased lead-to-close rate",
  "Faster response times",
  "More consistent pipeline",
  "Reduced operational overhead",
];

const deepDiveLinks = [
  { title: "Lead Capture Systems", href: "/docs/lead-capture-systems" },
  { title: "Lead Routing Logic", href: "/docs/lead-routing-logic" },
  { title: "Follow-Up Automation", href: "/docs/follow-up-automation" },
  { title: "CRM Integration", href: "/docs/crm-integration" },
];

const faqItems = [
  {
    question: "Do I need a CRM already?",
    answer:
      "Not necessarily. We can work with your current stack or help define the right CRM setup as part of the system design.",
  },
  {
    question: "Can this integrate with my current tools?",
    answer:
      "Yes. We design around your environment first and only recommend changes where they create clear leverage.",
  },
  {
    question: "How long does this take?",
    answer:
      "Most projects start with an audit and design phase, then move into phased implementation based on complexity.",
  },
  {
    question: "Is this custom or templated?",
    answer:
      "The architecture is customized to your sales process, team structure, and goals. Reusable patterns are applied where useful.",
  },
];

export default function RevenueAutomationPage() {
  return (
    <>
      <NavigationBar />
      <main className="revenue-automation-page">
        <div className="revenue-automation-layout">
          <aside className="revenue-sticky-rail" aria-label="Page navigation and actions">
            <a className="primary-button" href="#conversion">
              → Design My Revenue System
            </a>
            <nav>
              <a href="#problem">Problem</a>
              <a href="#overview">System Overview</a>
              <a href="#breakdown">Breakdown</a>
              <a href="#outcomes">Outcomes</a>
              <a href="#faq">FAQ</a>
            </nav>
          </aside>

          <div className="revenue-automation-content">
            <section className="revenue-hero" id="top">
              <div className="revenue-hero-copy">
                <p className="revenue-eyebrow">Revenue Automation</p>
                <h1>Turn interest into predictable revenue</h1>
                <p>
                  We design systems that capture, qualify, and convert leads
                  automatically—so opportunities don’t slip through the cracks.
                </p>
                <div className="revenue-hero-actions">
                  <a className="primary-button" href="#conversion">
                    → Design My Revenue System
                  </a>
                  <a className="secondary-button" href="/docs">
                    → Explore the System
                  </a>
                </div>
              </div>
              <div className="revenue-hero-visual" aria-hidden="true">
                <img
                  src="/placeholders/revenue-system-heading.png"
                  alt="Revenue automation system flow diagram"
                />
              </div>
            </section>

            <section className="revenue-section" id="problem">
              <h2>System friction is killing qualified demand</h2>
              <div className="revenue-problem-grid">
                {problemPoints.map((point) => (
                  <article key={point} className="revenue-problem-card">
                    <p>{point}</p>
                  </article>
                ))}
              </div>
              <p className="revenue-closing-line">
                Most businesses don’t have a lead problem—they have a system
                problem.
              </p>
            </section>

            <section className="revenue-section" id="overview">
              <h2>What we build</h2>
              <div className="revenue-flow-grid">
                {systemFlow.map((step) => (
                  <article key={step.title} className="revenue-flow-step">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    <small>{step.example}</small>
                  </article>
                ))}
              </div>
            </section>

            <section className="revenue-section" id="breakdown">
              <h2>System breakdown</h2>
              <div className="revenue-module-stack">
                {modules.map((module) => (
                  <article key={module.id} id={module.id} className="revenue-module-card">
                    <h3>{module.title}</h3>
                    <p>{module.description}</p>
                    <p className="revenue-why-line">{module.why}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="revenue-section" id="before-after">
              <h2>Before vs after</h2>
              <div className="revenue-compare-grid">
                <article>
                  <h3>Before</h3>
                  <ul>
                    <li>Manual follow-ups</li>
                    <li>Missed opportunities</li>
                    <li>Disconnected tools</li>
                    <li>Unclear pipeline</li>
                  </ul>
                </article>
                <article>
                  <h3>After</h3>
                  <ul>
                    <li>Automated lead handling</li>
                    <li>Consistent follow-up</li>
                    <li>Connected systems</li>
                    <li>Clear path to revenue</li>
                  </ul>
                </article>
              </div>
            </section>

            <section className="revenue-section" id="outcomes">
              <h2>Outcomes</h2>
              <div className="revenue-outcome-grid">
                {outcomes.map((outcome) => (
                  <article key={outcome} className="revenue-outcome-card">
                    <p>{outcome}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="revenue-section" id="bigger-system">
              <h2>How this fits into the bigger system</h2>
              <div className="revenue-fit-grid">
                <article>
                  <h3>1. Web Consulting</h3>
                  <p>Ensures foundation.</p>
                </article>
                <article>
                  <h3>2. Revenue Automation</h3>
                  <p>Drives growth.</p>
                </article>
                <article>
                  <h3>3. Business Intelligence</h3>
                  <p>Enables decisions.</p>
                </article>
              </div>
              <a className="services-cta-link" href="/services#business-intelligence">
                → See how this connects to Business Intelligence
              </a>
            </section>

            <section className="revenue-section" id="example-flow">
              <h2>Example flow</h2>
              <ol className="revenue-example-list">
                <li>User submits form</li>
                <li>System qualifies lead</li>
                <li>Lead is routed to the correct owner</li>
                <li>Automated follow-up begins</li>
                <li>Meeting is booked</li>
                <li>Pipeline updates automatically</li>
              </ol>
            </section>

            <section className="revenue-section" id="docs-links">
              <h2>Deep dives</h2>
              <div className="revenue-doc-grid">
                {deepDiveLinks.map((link) => (
                  <a key={link.title} href={link.href} className="revenue-doc-card">
                    <h3>{link.title}</h3>
                    <p>Read technical breakdown</p>
                  </a>
                ))}
              </div>
            </section>

            <section className="revenue-conversion" id="conversion">
              <h2>Build a system that works while you don’t</h2>
              <p>
                We’ll map your current process, identify gaps, and design a
                system that drives consistent revenue.
              </p>
              <div className="revenue-hero-actions">
                <a className="primary-button" href="/contact">
                  → Design My Revenue System
                </a>
                <a className="secondary-button" href="/services#start-with-audit">
                  → Start with an Audit
                </a>
              </div>
            </section>

            <section className="revenue-section" id="faq">
              <h2>FAQ</h2>
              <div className="revenue-faq-list">
                {faqItems.map((item) => (
                  <details key={item.question}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
