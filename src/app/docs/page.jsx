export const metadata = {
  title: 'Guides & Framework Documentation | Alpath',
};

const systems = [
  {
    title: 'Brand System',
    description:
      'Clarify how your business should be understood, remembered, and trusted before you ask your website or marketing to carry the whole weight.',
    links: [
      { label: '/docs/brand-system', href: '/docs/brand-system' },
      {
        label: 'Positioning Foundation',
        href: '/docs/brand-system/positioning-foundation',
      },
      {
        label: 'Messaging System',
        href: '/docs/brand-system/messaging-system',
      },
      { label: 'Visual Identity', href: '/docs/brand-system/visual-identity' },
      { label: 'Brand Launch', href: '/docs/brand-system/brand-launch' },
    ],
  },
  {
    title: 'Web Consulting',
    description:
      'Diagnose and strengthen your digital foundation. Understand what’s working, what’s not, and what to fix.',
    links: [
      { label: '/docs/web-consulting', href: '/docs/web-consulting' },
      {
        label: 'Site Audit Framework',
        href: '/docs/web-consulting/site-audit-framework',
      },
      {
        label: 'Conversion Principles',
        href: '/docs/web-consulting/conversion-principles',
      },
      {
        label: 'Performance Architecture',
        href: '/docs/web-consulting/performance-architecture',
      },
      {
        label: 'Content Structure',
        href: '/docs/web-consulting/content-structure',
      },
    ],
  },
  {
    title: 'Revenue Automation',
    description:
      'Design systems that capture, qualify, and convert leads automatically.',
    links: [
      { label: '/docs/revenue-automation', href: '/docs/revenue-automation' },
      {
        label: 'Lead Capture Systems',
        href: '/docs/revenue-automation/lead-capture-systems',
      },
      {
        label: 'Lead Routing Logic',
        href: '/docs/revenue-automation/lead-routing-logic',
      },
      {
        label: 'Follow-Up Automation',
        href: '/docs/revenue-automation/follow-up-automation',
      },
      {
        label: 'CRM Integration',
        href: '/docs/revenue-automation/crm-integration',
      },
    ],
  },
  {
    title: 'Business Intelligence',
    description:
      'Build visibility into your systems so you can make informed decisions.',
    links: [
      {
        label: '/docs/business-intelligence',
        href: '/docs/business-intelligence',
      },
      {
        label: 'Metrics That Matter',
        href: '/docs/business-intelligence/metrics-that-matter',
      },
      {
        label: 'Dashboard Architecture',
        href: '/docs/business-intelligence/dashboard-architecture',
      },
      {
        label: 'Data Pipelines',
        href: '/docs/business-intelligence/data-pipelines',
      },
      {
        label: 'Reporting Systems',
        href: '/docs/business-intelligence/reporting-systems',
      },
    ],
  },
  {
    title: 'AI Search Visibility',
    description:
      'Connect SEO, AEO, GEO, and LLMO so your expertise is easier to find, understand, trust, and cite.',
    links: [
      {
        label: '/docs/ai-search-visibility',
        href: '/docs/ai-search-visibility',
      },
      {
        label: 'Search & AI Foundations',
        href: '/docs/ai-search-visibility/search-ai-foundations',
      },
      {
        label: 'Entity & Schema Clarity',
        href: '/docs/ai-search-visibility/entity-schema-clarity',
      },
      {
        label: 'Answer-Ready Content',
        href: '/docs/ai-search-visibility/answer-ready-content',
      },
      {
        label: 'Visibility Measurement',
        href: '/docs/ai-search-visibility/visibility-measurement',
      },
    ],
  },
];

const usageSteps = [
  {
    title: 'Step 1: Start with your problem',
    description: 'Choose the system that matches where you are.',
  },
  {
    title: 'Step 2: Understand the framework',
    description: 'Review how the system is structured and why.',
  },
  {
    title: 'Step 3: Apply or engage',
    description: 'Use it internally or work with us to implement it.',
  },
];

function DocsHero() {
  return (
    <section className="docs-hero docs-block container">
      <p className="docs-eyebrow">Documentation Hub</p>
      <h1>Systems, not services</h1>
      <p className="docs-subheadline">
        This is how we think, design, and build systems that drive measurable
        business outcomes.
      </p>
      <p className="docs-supporting-text">
        Most digital work focuses on outputs (pages, features, campaigns). We
        focus on systems: how things connect, how they perform, and how they
        scale.
      </p>
    </section>
  );
}

function SystemCardGrid() {
  return (
    <section
      className="docs-block docs-systems-section container"
      aria-labelledby="docs-systems-heading"
    >
      <header className="docs-section-heading">
        <p className="docs-section-kicker">Five connected systems</p>
        <h2 id="docs-systems-heading">Start where the constraint is.</h2>
        <p className="docs-section-intro">
          Each guide gives you a clear way to diagnose the problem, understand
          the system, and decide what to improve next.
        </p>
      </header>
      <div className="docs-card-grid">
        {systems.map((system, systemIndex) => (
          <article key={system.title} className="docs-system-card">
            <div className="docs-system-card-header">
              <span aria-hidden="true">
                {String(systemIndex + 1).padStart(2, '0')}
              </span>
              <img src="/alpath/sign.svg" alt="" />
            </div>
            <div className="docs-system-card-copy">
              <h3>{system.title}</h3>
              <p>{system.description}</p>
            </div>
            <ul className="docs-system-paths">
              {system.links.slice(1).map((link, linkIndex) => (
                <li key={link.href}>
                  <span aria-hidden="true">
                    {systemIndex + 1}.{linkIndex + 1}
                  </span>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
            <a className="docs-system-overview" href={system.links[0].href}>
              System overview <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function DocsLinkList() {
  return (
    <section
      className="docs-block docs-library-section"
      aria-labelledby="docs-library-heading"
    >
      <div className="container">
        <header className="docs-library-heading">
          <div>
            <p className="docs-section-kicker">Reference library</p>
            <h2 id="docs-library-heading">Every path, one place.</h2>
          </div>
          <img src="/alpath/sign.svg" alt="" />
        </header>
        <div className="docs-link-columns">
          {systems.map((system, systemIndex) => (
            <div key={system.title} className="docs-link-column">
              <p className="docs-link-column-index" aria-hidden="true">
                {String(systemIndex + 1).padStart(2, '0')}
              </p>
              <h3>{system.title}</h3>
              <ul>
                {system.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>
                      <span>{link.label}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DocsUsageGuide() {
  return (
    <section
      className="docs-block docs-usage-section container"
      aria-labelledby="docs-usage-heading"
    >
      <header className="docs-section-heading docs-section-heading-split">
        <div>
          <p className="docs-section-kicker">A practical sequence</p>
          <h2 id="docs-usage-heading">How to use these docs.</h2>
        </div>
        <p className="docs-section-intro">
          You do not need to read everything. Follow the system closest to your
          current bottleneck and move from context to action.
        </p>
      </header>
      <div className="docs-usage-grid">
        {usageSteps.map((step, index) => (
          <article key={step.title} className="docs-usage-step">
            <p className="docs-usage-number" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </p>
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
    <section
      className="docs-block docs-flow-section container"
      aria-labelledby="docs-flow-heading"
    >
      <div className="docs-flow-layout">
        <header className="docs-section-heading">
          <p className="docs-section-kicker">Built to compound</p>
          <h2 id="docs-flow-heading">One system strengthens the next.</h2>
          <p className="docs-flow-copy">
            Brand clarity shapes the message, the website carries it, automation
            moves opportunities forward, business intelligence shows what is
            working, and AI search visibility extends your expertise into search
            and generated answers.
          </p>
        </header>
        <div
          className="docs-flow-shell"
          aria-label="Brand flows into web, automation, business intelligence, and AI search visibility"
        >
          <div>
            <span aria-hidden="true">01</span>
            <p className="docs-flow-label">Clarity</p>
            <h3>Brand</h3>
          </div>
          <span aria-hidden="true">→</span>
          <div>
            <span aria-hidden="true">02</span>
            <p className="docs-flow-label">Foundation</p>
            <h3>Web</h3>
          </div>
          <span aria-hidden="true">→</span>
          <div>
            <span aria-hidden="true">03</span>
            <p className="docs-flow-label">Flow</p>
            <h3>Automation</h3>
          </div>
          <span aria-hidden="true">→</span>
          <div>
            <span aria-hidden="true">04</span>
            <p className="docs-flow-label">Visibility</p>
            <h3>Business Intelligence</h3>
          </div>
          <span aria-hidden="true">→</span>
          <div>
            <span aria-hidden="true">05</span>
            <p className="docs-flow-label">Discovery</p>
            <h3>AI Search Visibility</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

function DocsCTA() {
  return (
    <section className="docs-block container docs-cta-shell">
      <img className="docs-cta-mark" src="/alpath/sign.svg" alt="" />
      <div className="docs-cta-copy">
        <p className="docs-section-kicker">Ready to put it to work?</p>
        <h2>Understand your system. Then improve it.</h2>
        <p>
          Start with a focused audit, or bring us the constraint you are trying
          to solve.
        </p>
      </div>
      <div className="docs-cta-links">
        <a className="docs-cta-primary" href="/services/web-services">
          Start with an audit <span aria-hidden="true">→</span>
        </a>
        <a href="/services">
          Talk through your system <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

export default function DocsHubPage() {
  return (
    <>
      <main className="docs-page">
        <DocsHero />
        <div className="docs-hub-content">
          <SystemCardGrid />
          <DocsLinkList />
          <DocsUsageGuide />
          <SystemFlowDiagram />
          <DocsCTA />
        </div>
      </main>
    </>
  );
}
