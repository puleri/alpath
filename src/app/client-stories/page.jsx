const stories = [
  {
    title: "VHS",
    clientType: "Web Services Company",
    problem:
      "Website existed but failed to clearly communicate value or convert visitors.",
    systemApplied: "Web Consulting (structure, messaging, conversion flow)",
    changes: [
      "Clear service positioning",
      "Improved navigation and content hierarchy",
      "Stronger CTAs",
    ],
    outcome:
      "Increase in qualified inbound leads and clearer client understanding of services.",
    quote: "Before, people visited the site. Now, they reach out.",
  },
  {
    title: "Lennon Window Cleaning",
    clientType: "Local Service Business",
    problem: "Low lead volume despite demand in the market.",
    systemApplied: "Web Consulting + Conversion Optimization",
    changes: [
      "Simplified booking flow",
      "Optimized service pages",
      "Clear call-to-action placement",
    ],
    outcome: "300+ leads generated within the first year.",
    quote: "The website finally works for us—it brings in business.",
  },
  {
    title: "Pro3 Accounting",
    clientType: "Accounting Firm",
    problem:
      "Online presence lacked clarity and failed to differentiate services.",
    systemApplied: "Web Consulting + Content Structuring",
    changes: [
      "Clear service breakdown",
      "Improved messaging for target clients",
      "Structured content for trust and authority",
    ],
    outcome: "More aligned inbound inquiries from ideal clients.",
    quote: "We’re now attracting the right kind of clients.",
  },
  {
    title: "Tech Start-Up Founder",
    clientType: "Startup Founder",
    problem:
      "Product required ongoing maintenance and stability to support growth.",
    systemApplied: "Engineering Support + System Stabilization",
    changes: [
      "Improved reliability",
      "Faster iteration cycles",
      "Reduced technical overhead",
    ],
    outcome: "Product stability improved, enabling focus on growth.",
    quote:
      "I could finally focus on building the business instead of fixing issues.",
  },
  {
    title: "Business Owner",
    clientType: "Service-Based Business",
    problem: "Leads were inconsistent and follow-up was manual.",
    systemApplied: "Revenue Automation",
    changes: [
      "Automated lead capture and routing",
      "Follow-up sequences implemented",
      "CRM integration",
    ],
    outcome: "Consistent pipeline with reduced manual effort.",
    quote: "Leads don’t fall through the cracks anymore.",
  },
  {
    title: "Architect Firm Owner",
    clientType: "Architecture Firm",
    problem:
      "Outdated site, difficult to manage content, poor performance.",
    systemApplied: "Web Migration + System Rebuild (Next.js + structured content)",
    changes: [
      "Modern, fast site",
      "Structured portfolio system",
      "Improved content management",
    ],
    outcome:
      "High-performance site aligned with brand and easier to maintain.",
    quote: "The new site finally reflects the quality of our work.",
  },
];

const recurringProblems = [
  "Website isn’t converting",
  "Leads are inconsistent",
  "Systems are disconnected",
  "Too much manual work",
  "Lack of clarity on performance",
];

function StoryCard({ story }) {
  return (
    <article className="client-story-card">
      <header>
        <p className="client-story-type">{story.clientType}</p>
        <h3>{story.title}</h3>
      </header>
      <p>
        <strong>Problem:</strong> {story.problem}
      </p>
      <p>
        <strong>System Applied:</strong> {story.systemApplied}
      </p>

      <div>
        <p className="client-story-what-changed-title">
          <strong>What Changed:</strong>
        </p>
        <ul>
          {story.changes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <p className="client-story-outcome">
        <strong>Outcome:</strong> {story.outcome}
      </p>
      <blockquote>&ldquo;{story.quote}&rdquo;</blockquote>
    </article>
  );
}

function ClientStoriesHero() {
  return (
    <section className="client-stories-hero container">
      <div className="client-stories-hero-copy">
        <p className="case-studies-eyebrow">Client Stories</p>
        <h1>Real systems. Real outcomes.</h1>
        <p>
          See how businesses like yours improved performance, captured more
          revenue, and gained clarity through better systems.
        </p>
      </div>

      <div className="client-stories-hero-visual" aria-hidden="true">
        <div className="hero-system-before">
          <p>Before</p>
          <span>Website</span>
          <span>Email</span>
          <span>Spreadsheet</span>
          <span>CRM</span>
          <small>Fragmented · Manual</small>
        </div>
        <div className="hero-system-arrow">→</div>
        <div className="hero-system-after">
          <p>After</p>
          <ol>
            <li>Traffic</li>
            <li>Capture</li>
            <li>Routing</li>
            <li>Follow-up</li>
            <li>Dashboard</li>
          </ol>
          <small>Connected · Automated</small>
        </div>
      </div>
    </section>
  );
}

function ClientStoriesIntro() {
  return (
    <section className="client-stories-intro container">
      <p>
        These aren&apos;t surface-level improvements. Each engagement focused on
        identifying system gaps and building solutions that create measurable
        impact.
      </p>
      <p>
        Different businesses. Same principle:{" "}
        <strong>Fix the system, improve the outcome.</strong>
      </p>
    </section>
  );
}

function PatternRecognition() {
  return (
    <section className="client-stories-pattern container">
      <h2>Different businesses. Same underlying problems.</h2>
      <ul>
        {recurringProblems.map((item) => (
          <li key={item}>
            <span aria-hidden="true">☐</span>
            {item}
          </li>
        ))}
      </ul>
      <p>If this sounds familiar, there&apos;s a system behind it.</p>
    </section>
  );
}

function ClientStoriesCTA() {
  return (
    <section className="client-stories-cta container">
      <h2>Let&apos;s build your system next</h2>
      <p>
        We&apos;ll break down your current setup, identify gaps, and design a
        system that drives results.
      </p>
      <div className="client-stories-cta-links">
        <a className="primary-button" href="/contact">
          → Start with an Audit
        </a>
        <a className="secondary-button" href="/contact">
          → Talk Through Your System
        </a>
      </div>
    </section>
  );
}

export const metadata = {
  title: "Client Stories | Alpath Engineering",
  description:
    "Structured client stories showing the system, the changes made, and the measurable outcomes achieved.",
};

export default function ClientStoriesPage() {
  return (
    <main className="client-stories-page">
      <ClientStoriesHero />
      <ClientStoriesIntro />

      <section className="client-stories-list container" aria-label="Client stories">
        {stories.map((story) => (
          <StoryCard key={story.title} story={story} />
        ))}
      </section>

      <PatternRecognition />
      <ClientStoriesCTA />
    </main>
  );
}
