export const webConsultingDocLinks = [
  { label: "Overview", href: "/docs/web-consulting" },
  { label: "Site Audit Framework", href: "/docs/web-consulting/site-audit-framework" },
  { label: "Conversion Principles", href: "/docs/web-consulting/conversion-principles" },
  { label: "Performance Architecture", href: "/docs/web-consulting/performance-architecture" },
  { label: "Content Structure", href: "/docs/web-consulting/content-structure" },
];

export const webConsultingDocs = {
  overview: {
    eyebrow: "Web Consulting Docs",
    title: "Build a reliable digital foundation before you scale",
    intro:
      "Web consulting aligns your site architecture, conversion flow, and content structure so your website supports growth instead of slowing it down.",
    highlights: [
      "Clarify where your site is leaking trust, speed, or leads.",
      "Create a practical plan that balances technical quality and business outcomes.",
      "Prioritize highest-impact fixes before larger redesigns.",
    ],
    sections: [
      {
        heading: "What this documentation covers",
        body: "This collection breaks down the core frameworks we use to audit and improve websites across UX, performance, and messaging.",
        bullets: [
          "Site audit methodology and scoring",
          "Conversion-focused design heuristics",
          "Performance architecture patterns",
          "Content hierarchy and decision-path clarity",
        ],
      },
      {
        heading: "How to use it",
        body: "Start with the site audit framework, then move through conversion, performance, and content structure to build a complete optimization roadmap.",
      },
    ],
  },
  siteAuditFramework: {
    eyebrow: "Web Consulting Docs",
    title: "Site Audit Framework",
    intro:
      "Use a consistent audit process to evaluate technical quality, user experience, and business effectiveness in one pass.",
    highlights: [
      "Establish a baseline before making design or engineering changes.",
      "Identify blockers across navigation, speed, accessibility, and credibility.",
      "Turn findings into a prioritized implementation plan.",
    ],
    sections: [
      {
        heading: "Audit pillars",
        body: "Every audit is grouped into clear categories so teams can assign ownership and execute confidently.",
        bullets: [
          "Technical health: errors, architecture risks, and maintainability",
          "Performance: Core Web Vitals, render behavior, and page weight",
          "UX clarity: path-to-action friction and navigation quality",
          "Trust signals: proof, authority, and message consistency",
        ],
      },
      {
        heading: "Deliverable",
        body: "The output is a prioritized action log with effort estimates, dependencies, and expected impact on user behavior and conversion.",
      },
    ],
  },
  conversionPrinciples: {
    eyebrow: "Web Consulting Docs",
    title: "Conversion Principles",
    intro:
      "High-converting websites reduce uncertainty and make the next action feel obvious at every stage of the journey.",
    highlights: [
      "Map page intent to visitor awareness level.",
      "Remove friction in forms, CTAs, and decision paths.",
      "Support claims with proof at the right moment.",
    ],
    sections: [
      {
        heading: "Core principles",
        body: "Conversion performance improves when structure and messaging are designed around user questions.",
        bullets: [
          "Clarity over cleverness in headlines and CTAs",
          "One primary action per section",
          "Proof near points of hesitation",
          "Fast feedback loops through testing and analytics",
        ],
      },
      {
        heading: "Implementation rhythm",
        body: "Start with highest-traffic pages, instrument events, then run iterative tests for messaging, layout, and CTA strategy.",
      },
    ],
  },
  performanceArchitecture: {
    eyebrow: "Web Consulting Docs",
    title: "Performance Architecture",
    intro:
      "Performance architecture ensures your site stays fast and stable as content, traffic, and integrations grow.",
    highlights: [
      "Design for speed at the system level, not just page-level patches.",
      "Protect core rendering paths and perceived performance.",
      "Create standards for assets, components, and data loading.",
    ],
    sections: [
      {
        heading: "System constraints",
        body: "Define constraints early so teams can ship quickly without degrading the user experience.",
        bullets: [
          "Performance budgets for scripts, media, and third-party tags",
          "Caching strategy across CDN, API, and browser layers",
          "Component-level rendering standards",
          "Monitoring for regressions in real-user conditions",
        ],
      },
      {
        heading: "Expected outcomes",
        body: "When architecture is disciplined, teams see lower bounce rates, stronger engagement, and more reliable conversion behavior.",
      },
    ],
  },
  contentStructure: {
    eyebrow: "Web Consulting Docs",
    title: "Content Structure",
    intro:
      "Content structure shapes how quickly visitors understand your offer, trust your expertise, and take action.",
    highlights: [
      "Organize pages around decision stages instead of internal org charts.",
      "Use consistent heading hierarchy and narrative flow.",
      "Align SEO intent with conversion intent.",
    ],
    sections: [
      {
        heading: "Framework",
        body: "Each page should guide visitors through context, value, proof, and action without forcing unnecessary cognitive load.",
        bullets: [
          "Problem framing that matches search and pain points",
          "Clear value articulation tied to outcomes",
          "Proof blocks for credibility and risk reduction",
          "Action blocks with clear next steps",
        ],
      },
      {
        heading: "Governance",
        body: "Document page types, voice standards, and update cadences so content remains coherent as your site evolves.",
      },
    ],
  },
};
