export const revenueAutomationDocLinks = [
  { label: "Overview", href: "/docs/revenue-automation" },
  { label: "Lead Capture Systems", href: "/docs/revenue-automation/lead-capture-systems" },
  { label: "Lead Routing Logic", href: "/docs/revenue-automation/lead-routing-logic" },
  { label: "Follow-Up Automation", href: "/docs/revenue-automation/follow-up-automation" },
  { label: "CRM Integration", href: "/docs/revenue-automation/crm-integration" },
];

export const revenueAutomationDocs = {
  overview: {
    eyebrow: "Revenue Automation Docs",
    title: "Build a dependable lead-to-revenue engine",
    intro:
      "Revenue automation connects lead capture, qualification, routing, and follow-up so opportunities move faster without manual bottlenecks.",
    highlights: [
      "Capture high-intent leads consistently across channels.",
      "Route opportunities instantly to the right owner or workflow.",
      "Automate follow-up sequences while preserving personalization.",
    ],
    sections: [
      {
        heading: "What this documentation covers",
        body: "This collection maps the core components of a practical automation system from first touch through CRM handoff.",
        bullets: [
          "Lead capture architecture and form strategy",
          "Routing rules based on fit, urgency, and ownership",
          "Follow-up orchestration for speed-to-lead",
          "CRM integration patterns for clean lifecycle visibility",
        ],
      },
      {
        heading: "How to use it",
        body: "Start with lead capture, then progress through routing, follow-up, and CRM integration to design an end-to-end operating system.",
      },
    ],
  },
  leadCaptureSystems: {
    eyebrow: "Revenue Automation Docs",
    title: "Lead Capture Systems",
    intro:
      "Lead capture systems convert attention into qualified pipeline by structuring intake points around intent and readiness.",
    highlights: [
      "Improve lead quality with context-specific forms and offers.",
      "Reduce drop-off by minimizing friction in submission flows.",
      "Standardize capture fields for cleaner downstream automation.",
    ],
    sections: [
      {
        heading: "Capture foundations",
        body: "Capture should be intentionally designed around user context, not copied across every page.",
        bullets: [
          "Match form length to offer value and buyer intent",
          "Use progressive profiling where repeat engagement exists",
          "Track source metadata for attribution and routing",
          "Validate required fields to protect CRM data quality",
        ],
      },
      {
        heading: "Operational outcome",
        body: "A strong capture system produces complete, high-signal records that can be routed and followed up automatically without manual cleanup.",
      },
    ],
  },
  leadRoutingLogic: {
    eyebrow: "Revenue Automation Docs",
    title: "Lead Routing Logic",
    intro:
      "Routing logic ensures every lead reaches the correct person or sequence fast enough to maintain buying momentum.",
    highlights: [
      "Shorten response time with deterministic assignment rules.",
      "Balance workload fairly across teams and territories.",
      "Escalate high-value opportunities immediately.",
    ],
    sections: [
      {
        heading: "Routing framework",
        body: "Rules should combine business fit, operational constraints, and timing expectations.",
        bullets: [
          "Route by company size, segment, or service interest",
          "Apply territory and account ownership precedence",
          "Use fallback queues for unowned or ambiguous records",
          "Trigger alerts when SLA thresholds are at risk",
        ],
      },
      {
        heading: "Governance",
        body: "Document routing logic and exception handling so teams can adapt quickly as headcount, regions, and offerings evolve.",
      },
    ],
  },
  followUpAutomation: {
    eyebrow: "Revenue Automation Docs",
    title: "Follow-Up Automation",
    intro:
      "Follow-up automation keeps opportunities warm by delivering timely, stage-aware communication between first contact and conversion.",
    highlights: [
      "Protect speed-to-lead with instant first-response workflows.",
      "Maintain relevance through stage-based message sequences.",
      "Blend automation with human handoff at key moments.",
    ],
    sections: [
      {
        heading: "Sequence design",
        body: "Effective follow-up balances persistence, personalization, and clear next steps.",
        bullets: [
          "Define channel cadence across email, SMS, and task creation",
          "Personalize by source, intent, and segment attributes",
          "Stop or branch sequences on engagement signals",
          "Create handoff triggers for sales-ready behaviors",
        ],
      },
      {
        heading: "Measurement",
        body: "Track response latency, meeting-booked rates, and progression velocity to refine messaging and cadence over time.",
      },
    ],
  },
  crmIntegration: {
    eyebrow: "Revenue Automation Docs",
    title: "CRM Integration",
    intro:
      "CRM integration connects your automation stack to a single source of truth so teams can act on accurate lifecycle data.",
    highlights: [
      "Keep records synchronized across forms, enrichment tools, and CRM.",
      "Prevent duplicate or orphaned lead records.",
      "Enable reliable reporting for pipeline and revenue decisions.",
    ],
    sections: [
      {
        heading: "Integration principles",
        body: "A resilient integration design prioritizes field mapping clarity, ownership rules, and recovery paths.",
        bullets: [
          "Define canonical fields and transformation rules",
          "Set deduplication logic before automated record creation",
          "Log sync failures and retries for observability",
          "Version workflow changes to avoid silent regressions",
        ],
      },
      {
        heading: "Business impact",
        body: "When CRM integration is reliable, teams spend less time fixing data and more time moving qualified opportunities to close.",
      },
    ],
  },
};
