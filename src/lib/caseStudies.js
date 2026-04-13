export const caseStudies = [
  {
    slug: "wordpress-to-nextjs-migration",
    title: "WordPress to Next.js Conversion Lift",
    industry: "Professional Services",
    summary:
      "Migrated a legacy WordPress site to Next.js while preserving the trusted visual experience, improving web performance and lead conversion.",
    problem:
      "The company had strong brand trust in its existing website design, but the WordPress stack created performance bottlenecks, inconsistent UX behavior, and lower-than-target lead conversion rates.",
    systemApplied: [
      "Full front-end migration from WordPress templates to a componentized Next.js architecture",
      "Performance optimization across Core Web Vitals, asset loading, and page rendering",
      "Preservation of brand-recognizable layout patterns and user navigation flows",
      "Lead funnel instrumentation and conversion tracking across landing pages and forms",
    ],
    beforeState: [
      "Slow page loads and unstable performance scores on key pages",
      "Lead form conversion below growth target",
      "Marketing and engineering teams constrained by WordPress template limitations",
    ],
    afterState: [
      "Higher web performance scores across key user journeys",
      "Improved lead conversion rate from the same traffic base",
      "Faster release workflow with reusable Next.js components",
    ],
    outcomes: [
      "Modernized stack without forcing users to relearn a new interface",
      "More qualified leads generated from existing acquisition channels",
      "Improved technical foundation for ongoing SEO and campaign iteration",
    ],
  },
  {
    slug: "cybersecurity-saas-sales-visibility",
    title: "Cybersecurity SaaS Sales Visibility System",
    industry: "Cybersecurity SaaS",
    summary:
      "Built an executive sales intelligence layer that organized Salesforce data through Snowflake APIs to identify top-performing regions and sellers.",
    problem:
      "A private cybersecurity SaaS company had fragmented sales reporting and limited executive visibility into which regions and salespeople were driving the most reliable pipeline and revenue outcomes.",
    systemApplied: [
      "Data pipeline that consolidated Salesforce records into Snowflake-aligned reporting models",
      "Dashboard architecture for regional and rep-level pipeline performance",
      "Standardized KPI definitions for stage velocity, win rates, and contribution by territory",
      "Executive-ready views to support planning, coaching, and resource allocation decisions",
    ],
    beforeState: [
      "Disjointed pipeline reporting across teams",
      "Limited confidence in regional and rep performance comparisons",
      "Leadership reviews delayed by manual report preparation",
    ],
    afterState: [
      "Single source of truth for pipeline and sales performance",
      "Clear visibility into high-performing regions and top salespeople",
      "Faster executive decision-making with always-current dashboards",
    ],
    outcomes: [
      "Improved sales pipeline optimization across territory planning",
      "Sharper coaching focus on behaviors tied to top performers",
      "Stronger executive alignment around pipeline health and forecasting",
    ],
  },
  {
    slug: "startup-codebase-audit-crisis",
    title: "Startup Codebase Audit During Critical Outage",
    industry: "Venture-Backed Technology",
    summary:
      "Performed a rapid codebase audit for a startup whose product failed during a crucial valuation window, helping stabilize delivery and reduce operational risk.",
    problem:
      "A fast-moving startup experienced a product outage at a critical valuation moment. The team needed immediate technical diagnosis, root-cause clarity, and a prioritized recovery path under high pressure.",
    systemApplied: [
      "Emergency codebase audit focused on architecture risk, reliability gaps, and failure points",
      "Incident reconstruction to identify likely root causes and sequence of technical breakdowns",
      "Prioritized remediation roadmap for stabilization, test coverage, and deployment confidence",
      "Engineering process recommendations for release governance in high-velocity environments",
    ],
    beforeState: [
      "Unclear source of production instability",
      "High deployment risk with limited safety checks",
      "Executive and investor confidence impacted by outage timing",
    ],
    afterState: [
      "Documented risk profile and actionable reliability plan",
      "Critical issues triaged into short-term and medium-term remediation tracks",
      "Improved engineering confidence in release and incident response workflows",
    ],
    outcomes: [
      "Stabilization plan aligned to business-critical timelines",
      "Reduced repeat-incident risk through targeted code and process changes",
      "Clear technical narrative for leadership during a high-stakes period",
    ],
  },
];

export function getCaseStudyBySlug(slug) {
  return caseStudies.find((study) => study.slug === slug);
}
