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
      "Custom web-scraper bot built by Alpath's principal engineer and founder to crawl the full site",
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
      "Exact 1:1 Next.js transition preserved the client's site experience",
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
        "How Bellevue's premier architecture firm moved from WordPress to Next.js",
      heroSummary:
        'Lockhart Suver needed a true 1:1 migration from WordPress to Next.js. When WordPress could not batch export the code and media cleanly, Alpath built a custom crawler to recover the site asset by asset, then rebuilt the experience on a faster client-owned stack.',
      heroTags: [
        'Architecture Firm',
        'Legacy to Modern SEO',
        '1:1 Migration',
        'Custom Scraper',
      ],
      heroImage: {
        src: '/photos/portfolio/lockhart-suver/seattle-architecture.png',
        alt: 'Modern Bellevue architecture project with an angular roofline and glass entry',
      },
      overview: {
        title:
          'A precise migration for a firm whose digital presence already had equity',
        body: "Lockhart Suver is Bellevue's premier architecture firm, so the goal was not to reinvent the site for the sake of change. The project preserved the existing experience, recovered the media WordPress would not export cleanly, and moved the firm to a faster Next.js foundation they could truly own.",
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
            "Alpath's principal engineer and founder built a custom web-scraper bot to crawl the full WordPress site and download every media asset individually. Take that, WordPress.",
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
    slug: 'greater-seattle-window-cleaning-lead-generation',
    title: 'Greater Seattle Window Cleaning Company Lead Generation Website',
    industry: 'Local Service Business',
    summary:
      'Rebuilt a Greater Seattle service-business website around local search demand, clearer service pages, and a simpler estimate path that helped generate 300+ leads in the first year.',
    problem:
      'As a new business with a  real demand in its market, they needed a website to turn that demand into qualified conversations. Visitors needed to understand the services quickly, trust the company, and find a clear path to request an estimate.',
    systemApplied: [
      'Local-service website strategy focused on high-intent search behavior',
      'Simplified booking and estimate flow to reduce friction from landing page to inquiry',
      'Service-page structure shaped around residential, commercial, and recurring cleaning needs',
      'Clear call-to-action placement across the pages customers use before they book',
      'Conversion-focused content hierarchy for faster scanning on mobile and desktop',
    ],
    beforeState: [
      'Low lead volume despite local demand for window cleaning services',
      'Service information and calls to action were not organized around booking behavior',
      'Visitors had too much friction between researching the service and requesting an estimate',
    ],
    afterState: [
      'Clearer service pages made it easier for local customers to understand and act',
      'Simplified estimate path gave visitors a direct route from search intent to inquiry',
      'More than 300 leads generated within the first year',
    ],
    outcomes: [
      'Generated 300+ leads in the first year from a clearer web and conversion foundation',
      'Made the site feel more useful for customers comparing local service providers',
      'Improved the path from organic search or referral traffic to booked conversations',
      'Gave the business a practical website system that supports ongoing local demand',
    ],
    detailPage: {
      heroTitle:
        'How a Greater Seattle Window Cleaning Company turned local search demand into 300+ leads',
      heroSummary:
        'Greater Seattle Window Cleaning Company needed a website that worked like a real front door for the business. We simplified the service story, clarified the path to an estimate, and shaped the site around how local customers decide who to call.',
      heroTags: [
        'Local Service Business',
        'Web Design',
        'Local SEO',
        'Conversion Optimization',
      ],
      heroImage: {
        src: '/photos/portfolio/lennon-wc/seattle-window-cleaning.png',
        alt: 'Window cleaner washing exterior glass on a brick building',
      },
      overview: {
        title:
          'A clearer website for a service business customers already needed',
        body: 'The market demand was there. The opportunity was to make a Greater Seattle Window Cleaning Company easier to find, easier to understand, and easier to contact. The engagement focused on turning local intent into real estimate requests without overcomplicating the customer journey.',
        points: [
          'Make window cleaning services easier to evaluate before a call',
          'Reduce friction between service-page visits and estimate requests',
          'Create a practical foundation for more consistent local leads',
        ],
      },
      ctaVariant: 'rebrandReadiness',
      keyMetrics: [
        {
          label: 'First-year leads',
          value: '300+',
          icon: '/icons/line-chart.png',
        },
        {
          label: 'Booking path',
          value: 'Simplified',
          icon: '/icons/upgrade.svg',
        },
        {
          label: 'Service pages',
          value: 'Optimized',
          icon: '/icons/web.png',
        },
      ],
      challenge:
        'Local service customers often arrive with a narrow question: can this company do the work, can I trust them, and how do I get a quote? The old experience did not answer those questions quickly enough, which made real demand harder to capture.',
      implementationPhases: [
        {
          title: 'Phase 1: Local search and service-path planning',
          description:
            'Mapped the services customers were searching for, clarified the page structure, and identified the fastest route from landing page to estimate request.',
        },
        {
          title: 'Phase 2: Service-page and CTA rebuild',
          description:
            'Reworked the core website experience around clear service descriptions, trust-building copy, and repeated calls to action where customers naturally make decisions.',
        },
        {
          title: 'Phase 3: Conversion cleanup and launch',
          description:
            'Simplified the inquiry path, tightened mobile scanning, and launched the site with a clearer foundation for local SEO and ongoing lead generation.',
        },
      ],
      techStack: [
        'Service-business website strategy',
        'Local SEO page structure',
        'Conversion-focused copy',
        'Estimate-request flow',
        'Responsive web design',
      ],
    },
  },
  {
    slug: 'distinctive-glass-affordable-website-content-updates',
    title: 'Distinctive Glass Content Updates Under $1,000',
    industry: 'Glass Fabrication & Installation',
    summary:
      'When Distinctive Glass no longer had its former web developer available, Alpath onboarded the existing website and completed minor but crucial content updates for under $1,000.',
    problem:
      'Distinctive Glass had a functioning website but no longer had the developer who previously supported it. A small set of important content changes still needed to be made, and the company needed a practical partner who could step in without turning the work into an unnecessary rebuild or oversized engagement.',
    systemApplied: [
      'Fast onboarding to understand the existing website and the requested changes',
      'Focused content-update scope built around the most important outstanding items',
      'Direct implementation without expanding the engagement into a redesign',
      'Quality review across the updated content before completion',
      'Straightforward handoff with a new website partner available for future needs',
    ],
    beforeState: [
      'The company no longer had its former web developer available',
      'Minor but crucial website content changes remained outstanding',
      'The work needed to stay proportional to a small maintenance scope',
    ],
    afterState: [
      'Alpath was onboarded as a new website partner',
      'The priority content updates were completed without a rebuild',
      'The full engagement was delivered for under $1,000',
    ],
    outcomes: [
      'Restored access to dependable website support after the previous developer was no longer available',
      'Completed the important content changes the business needed without expanding the project scope',
      'Kept the total investment below $1,000',
      'Created a practical path for future website updates as new needs arise',
    ],
    detailPage: {
      heroTitle:
        'How Distinctive Glass completed crucial website updates for under $1,000',
      heroSummary:
        'Distinctive Glass did not need a new website. It needed a reliable developer to take over, understand the existing site, and complete a focused list of important content changes at a sensible price.',
      heroTags: [
        'Glass Company',
        'Website Support',
        'Content Updates',
        'Under $1K',
      ],
      heroImage: {
        src: '/photos/portfolio/distinctive-glass.png',
        alt: 'Gloved hand guiding glass during shop fabrication',
      },
      overview: {
        title: 'A small website engagement with an important job to do',
        body: 'Not every website project needs to become a redesign. Distinctive Glass already had a working site, but the departure of its former developer left the company without someone to handle a set of small, necessary content changes. Alpath stepped in, learned the existing setup, and kept the engagement focused on what the business actually needed.',
        points: [
          'Take over support without disrupting the existing website',
          'Complete the highest-priority content changes first',
          'Keep the scope and price appropriate for a small project',
        ],
      },
      ctaVariant: 'smallWebsiteUpdates',
      keyMetrics: [
        {
          label: 'Total project cost',
          value: 'Under $1K',
          icon: '/icons/verification.png',
        },
        {
          label: 'Project scope',
          value: 'Focused updates',
          icon: '/icons/file.png',
        },
        {
          label: 'Website continuity',
          value: 'Support restored',
          icon: '/icons/web.png',
        },
      ],
      challenge:
        'The website itself was not the problem. The gap was support. With the former developer no longer available, small content changes could not move forward. Distinctive Glass needed someone who could onboard quickly, work within the existing site, and keep the cost aligned with the limited scope.',
      implementationPhases: [
        {
          title: 'Phase 1: Existing-site onboarding',
          description:
            'Reviewed the current website and the requested changes so the work could continue without altering the broader site experience.',
        },
        {
          title: 'Phase 2: Priority content updates',
          description:
            'Turned the outstanding requests into a focused punch list and implemented the minor but crucial content updates without adding unnecessary scope.',
        },
        {
          title: 'Phase 3: Review and handoff',
          description:
            'Checked the updated content, confirmed the requested work was complete, and left Distinctive Glass with a dependable partner for future website needs.',
        },
      ],
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
