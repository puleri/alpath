export const caseStudies = [
  {
    slug: 'architecture-firm-rebrand-web-system',
    title: 'Lockhart Suver WordPress to Next.js Migration',
    industry: 'Architecture & Built Environment',
    summary:
      'Migrated Lockhart Suver from WordPress to Next.js with a true 1:1 transition, preserving the existing experience while lifting Google Lighthouse performance from 74/100 to 99/100.',
    problem:
      'Lockhart Suver needed an exact 1:1 move off WordPress without losing the site experience, code, or media assets. WordPress did not provide a practical batch export path for the code and media, so a normal migration would have left gaps, missing files, or a rebuilt approximation.',
    systemApplied: [
      '1:1 WordPress-to-Next.js migration that preserved the existing site experience',
      'Custom web-scraper bot built by Alpath\'s principal engineer and founder to crawl the full site',
      'Individual media extraction for every asset WordPress could not batch export cleanly',
      'Next.js rebuild with optimized assets, routing, and page structure',
      'Ownership handoff so Lockhart Suver retained control of its codebase and media library',
    ],
    beforeState: [
      'WordPress kept the site tied to a platform Lockhart Suver did not fully control',
      'No reliable batch export path for code and media created migration risk',
      'Google Lighthouse score sat at 74/100 before the rebuild',
    ],
    afterState: [
      'Exact 1:1 Next.js transition preserved the client\'s site experience',
      'Custom crawler recovered the media library one asset at a time',
      'Google Lighthouse score increased to 99/100, and Lockhart Suver now owns its code and media',
    ],
    outcomes: [
      'Moved Lockhart Suver off WordPress without compromising the familiar website experience',
      'Recovered site media through a custom scraper instead of accepting WordPress export limits',
      'Improved Lighthouse performance from 74/100 to 99/100 on the rebuilt Next.js site',
      'Delivered a client-owned codebase and media library for long-term control',
    ],
    detailPage: {
      heroTitle:
        'How Bellevue\'s premier architecture firm moved from WordPress to Next.js',
      heroSummary:
        'Lockhart Suver needed a true 1:1 migration from WordPress to Next.js. When WordPress could not batch export the code and media cleanly, Alpath built a custom crawler to recover the site asset by asset, then rebuilt the experience on a faster client-owned stack.',
      heroTags: [
        'Bellevue architecture',
        'WordPress to Next.js',
        '1:1 migration',
        'Custom scraper',
      ],
      heroImage: {
        src: '/photos/portfolio/lockhart-suver/seattle-architecture.png',
        alt: 'Modern Bellevue architecture project with an angular roofline and glass entry',
      },
      overview: {
        title: 'A precise migration for a firm whose digital presence already had equity',
        body:
          'Lockhart Suver is Bellevue\'s premier architecture firm, so the goal was not to reinvent the site for the sake of change. The project preserved the existing experience, recovered the media WordPress would not export cleanly, and moved the firm to a faster Next.js foundation they could truly own.',
        points: [
          'Preserve the client-facing site experience without visual drift',
          'Recover code and media from a restrictive WordPress environment',
          'Improve performance while handing ownership back to the client',
        ],
      },
      ctaVariant: 'rebrandReadiness',
      keyMetrics: [
        {
          label: 'Migration fidelity',
          value: '1:1 transition',
          icon: '/icons/web.png',
        },
        {
          label: 'Lighthouse score',
          value: '74 -> 99',
          icon: '/icons/upgrade.svg',
        },
        {
          label: 'Asset recovery',
          value: 'Custom crawler',
          icon: '/icons/verification.png',
        },
      ],
      challenge:
        'The client wanted the site to feel exactly the same after launch, but the underlying WordPress setup made that difficult. There was no clean batch export for the code or media library, so a standard migration would have missed assets, broken content, or forced a visual rebuild the client did not ask for.',
      implementationPhases: [
        {
          title: 'Phase 1: 1:1 migration map',
          description:
            'Audited the WordPress site page by page, mapped the existing experience, and defined the Next.js structure needed to preserve the design and user flow exactly.',
        },
        {
          title: 'Phase 2: Custom scraper and media recovery',
          description:
            'Alpath\'s principal engineer and founder built a custom web-scraper bot to crawl the full WordPress site and download every media asset individually. Take that, WordPress.',
        },
        {
          title: 'Phase 3: Next.js rebuild and performance lift',
          description:
            'Rebuilt the site in Next.js, optimized the recovered media and page delivery, and raised the Google Lighthouse score from 74/100 to 99/100.',
        },
      ],
      techStack: [
        'Next.js',
        'React',
        'Custom web-scraper bot',
        'WordPress migration tooling',
        'Media recovery pipeline',
        'Lighthouse performance optimization',
      ],
    },
  },
  {
    slug: 'wordpress-to-nextjs-migration',
    title: 'WordPress to Next.js Conversion Lift',
    industry: 'Professional Services',
    summary:
      'Migrated a legacy WordPress site to Next.js while preserving the trusted visual experience, improving web performance and lead conversion.',
    problem:
      'The company had strong brand trust in its existing website design, but the WordPress stack created performance bottlenecks, inconsistent UX behavior, and lower-than-target lead conversion rates.',
    systemApplied: [
      'Full front-end migration from WordPress templates to a componentized Next.js architecture',
      'Performance optimization across Core Web Vitals, asset loading, and page rendering',
      'Preservation of brand-recognizable layout patterns and user navigation flows',
      'Lead funnel instrumentation and conversion tracking across landing pages and forms',
    ],
    beforeState: [
      'Slow page loads and unstable performance scores on key pages',
      'Lead form conversion below growth target',
      'Marketing and engineering teams constrained by WordPress template limitations',
    ],
    afterState: [
      'Higher web performance scores across key user journeys',
      'Improved lead conversion rate from the same traffic base',
      'Faster release workflow with reusable Next.js components',
    ],
    outcomes: [
      'Modernized stack without forcing users to relearn a new interface',
      'More qualified leads generated from existing acquisition channels',
      'Improved technical foundation for ongoing SEO and campaign iteration',
    ],
    detailPage: {
      heroTitle:
        'How we migrated a trusted WordPress experience to a high-performance Next.js platform',
      heroSummary:
        'This engagement focused on preserving what customers already trusted while rebuilding the full web experience for speed, maintainability, and stronger conversion performance.',
      keyMetrics: [
        { label: 'Core Web Vitals health', value: 'Significantly improved' },
        { label: 'Lead form conversion', value: 'Above prior baseline' },
        { label: 'Release velocity', value: 'Faster with reusable components' },
      ],
      challenge:
        'The existing WordPress implementation had grown difficult to maintain, and performance issues were increasing bounce risk. The team needed a modern architecture without disrupting familiar buyer journeys or damaging existing search equity.',
      implementationPhases: [
        {
          title: 'Phase 1: Migration architecture',
          description:
            'Mapped legacy templates into a reusable Next.js component system and aligned routes to preserve key indexing and campaign landing behavior.',
        },
        {
          title: 'Phase 2: Performance hardening',
          description:
            'Reduced render and asset bottlenecks through image optimization, component-level loading strategy updates, and tighter page composition patterns.',
        },
        {
          title: 'Phase 3: Conversion instrumentation',
          description:
            'Added event and form tracking throughout the funnel so marketing and leadership could monitor conversion gains with clear attribution.',
        },
      ],
      techStack: [
        'Next.js',
        'React',
        'Componentized design system',
        'Analytics instrumentation',
      ],
      nextStep:
        'If your current site can’t support your growth goals, we can map your existing funnel, migrate your stack, and ship a faster system without sacrificing brand trust.',
    },
  },
  {
    slug: 'cybersecurity-saas-sales-visibility',
    title: 'Cybersecurity SaaS Sales Visibility System',
    industry: 'Cybersecurity SaaS',
    summary:
      'Built an executive sales intelligence layer that organized Salesforce data through Snowflake APIs to identify top-performing regions and sellers.',
    problem:
      'A private cybersecurity SaaS company had fragmented sales reporting and limited executive visibility into which regions and salespeople were driving the most reliable pipeline and revenue outcomes.',
    systemApplied: [
      'Data pipeline that consolidated Salesforce records into Snowflake-aligned reporting models',
      'Dashboard architecture for regional and rep-level pipeline performance',
      'Standardized KPI definitions for stage velocity, win rates, and contribution by territory',
      'Executive-ready views to support planning, coaching, and resource allocation decisions',
    ],
    beforeState: [
      'Disjointed pipeline reporting across teams',
      'Limited confidence in regional and rep performance comparisons',
      'Leadership reviews delayed by manual report preparation',
    ],
    afterState: [
      'Single source of truth for pipeline and sales performance',
      'Clear visibility into high-performing regions and top salespeople',
      'Faster executive decision-making with always-current dashboards',
    ],
    outcomes: [
      'Improved sales pipeline optimization across territory planning',
      'Sharper coaching focus on behaviors tied to top performers',
      'Stronger executive alignment around pipeline health and forecasting',
    ],
  },
  {
    slug: 'startup-codebase-audit-crisis',
    title: 'Startup Codebase Audit During Critical Outage',
    industry: 'Venture-Backed Technology',
    summary:
      'Performed a rapid codebase audit for a startup whose product failed during a crucial valuation window, helping stabilize delivery and reduce operational risk.',
    problem:
      'A fast-moving startup experienced a product outage at a critical valuation moment. The team needed immediate technical diagnosis, root-cause clarity, and a prioritized recovery path under high pressure.',
    systemApplied: [
      'Emergency codebase audit focused on architecture risk, reliability gaps, and failure points',
      'Incident reconstruction to identify likely root causes and sequence of technical breakdowns',
      'Prioritized remediation roadmap for stabilization, test coverage, and deployment confidence',
      'Engineering process recommendations for release governance in high-velocity environments',
    ],
    beforeState: [
      'Unclear source of production instability',
      'High deployment risk with limited safety checks',
      'Executive and investor confidence impacted by outage timing',
    ],
    afterState: [
      'Documented risk profile and actionable reliability plan',
      'Critical issues triaged into short-term and medium-term remediation tracks',
      'Improved engineering confidence in release and incident response workflows',
    ],
    outcomes: [
      'Stabilization plan aligned to business-critical timelines',
      'Reduced repeat-incident risk through targeted code and process changes',
      'Clear technical narrative for leadership during a high-stakes period',
    ],
    detailPage: {
      heroTitle:
        'How we executed a rapid startup codebase audit during a business-critical outage',
      heroSummary:
        'When product stability broke at the worst possible moment, we delivered a focused technical audit and a practical recovery system leadership could execute immediately.',
      keyMetrics: [
        { label: 'Initial triage window', value: '48 hours' },
        { label: 'Recovery roadmap horizon', value: '30-60-90 day plan' },
        {
          label: 'Primary objective',
          value: 'Stabilize releases + rebuild confidence',
        },
      ],
      challenge:
        'The startup faced a production outage during a high-stakes valuation period. Engineering teams were operating under intense pressure with unclear root causes, inconsistent safeguards, and limited confidence in release reliability.',
      implementationPhases: [
        {
          title: 'Phase 1: Incident containment and architecture triage',
          description:
            'Audited critical services, deployment paths, and failure domains to identify the most likely instability vectors and immediate containment actions.',
        },
        {
          title: 'Phase 2: Root-cause map and risk-ranked backlog',
          description:
            'Reconstructed the incident timeline, mapped systemic contributors, and translated findings into a risk-ranked remediation backlog with ownership and sequencing.',
        },
        {
          title: 'Phase 3: Reliability operating model',
          description:
            'Implemented a 30-60-90 day execution plan covering test hardening, release gates, rollback standards, and incident response workflows for sustained stability.',
        },
      ],
      techStack: [
        'Next.js / Node.js application layer',
        'Cloud deployment + CI/CD workflows',
        'Observability and incident diagnostics',
        'Release governance and QA safeguards',
      ],
      nextStep:
        'If your product is carrying unseen reliability risk, we can run a focused audit, isolate your highest-impact failure points, and deliver a practical stabilization plan fast.',
    },
  },
];

export function getCaseStudyBySlug(slug) {
  return caseStudies.find((study) => study.slug === slug);
}
