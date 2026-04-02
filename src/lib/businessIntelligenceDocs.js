export const businessIntelligenceDocLinks = [
  { label: "Overview", href: "/docs/business-intelligence" },
  { label: "Metrics That Matter", href: "/docs/business-intelligence/metrics-that-matter" },
  { label: "Dashboard Architecture", href: "/docs/business-intelligence/dashboard-architecture" },
  { label: "Data Pipelines", href: "/docs/business-intelligence/data-pipelines" },
  { label: "Reporting Systems", href: "/docs/business-intelligence/reporting-systems" },
];

export const businessIntelligenceDocs = {
  overview: {
    eyebrow: "Business Intelligence Docs",
    title: "Turn operational data into confident business decisions",
    intro:
      "Business intelligence gives leadership, marketing, sales, and operations a shared source of truth so strategic decisions are based on trends, not guesswork.",
    highlights: [
      "Align teams on the KPIs that directly drive growth and margin.",
      "Reduce decision latency with trustworthy dashboards and alerts.",
      "Build reporting systems that scale with data volume and complexity.",
    ],
    sections: [
      {
        heading: "What this documentation covers",
        body: "This collection explains how to define metrics, model data, design dashboards, and operationalize reporting across your organization.",
        bullets: [
          "KPI frameworks tied to pipeline, revenue, and retention",
          "Dashboard architecture for executive and functional visibility",
          "Data pipeline standards for reliability and freshness",
          "Reporting workflows that support weekly and quarterly decisions",
        ],
      },
      {
        heading: "How to use it",
        body: "Start with metrics-that-matter to define north-star and supporting indicators, then implement dashboard architecture, data pipelines, and reporting systems in sequence.",
      },
    ],
  },
  metricsThatMatter: {
    eyebrow: "Business Intelligence Docs",
    title: "Metrics That Matter",
    intro:
      "Strong BI begins with precise definitions: each metric should map to a decision owner, refresh cadence, and action threshold.",
    highlights: [
      "Prioritize leading indicators before lagging outcomes.",
      "Standardize metric definitions to prevent cross-team confusion.",
      "Connect every KPI to a specific business decision.",
    ],
    sections: [
      {
        heading: "Metric design framework",
        body: "Choose a small hierarchy of core metrics, supporting diagnostics, and guardrails so teams can focus on what changes behavior.",
        bullets: [
          "North-star KPI: one signal of long-term value creation",
          "Functional KPIs: acquisition, conversion, activation, retention",
          "Guardrail KPIs: quality, cost, and risk constraints",
          "Thresholds and ownership: who responds and how quickly",
        ],
      },
      {
        heading: "AEO-ready measurement language",
        body: "Use clear business wording and explicit formulas so teams, stakeholders, and AI assistants can interpret metric intent without ambiguity.",
      },
    ],
  },
  dashboardArchitecture: {
    eyebrow: "Business Intelligence Docs",
    title: "Dashboard Architecture",
    intro:
      "Dashboard architecture determines whether insights are immediately actionable or buried in visual noise.",
    highlights: [
      "Design role-based views for executives, managers, and operators.",
      "Expose trends, targets, and variance in one decision flow.",
      "Support self-serve exploration without compromising governance.",
    ],
    sections: [
      {
        heading: "Information hierarchy",
        body: "Each dashboard should move from headline health to diagnostic detail so users can see what changed, why, and what to do next.",
        bullets: [
          "Top layer: business status versus plan and prior period",
          "Middle layer: segment breakdown by channel, product, and region",
          "Lower layer: root-cause drilldowns and anomaly context",
          "Action layer: owners, alerts, and links to execution systems",
        ],
      },
      {
        heading: "Governed flexibility",
        body: "Provide reusable semantic models and filtered views so teams can answer ad hoc questions quickly while preserving metric consistency.",
      },
    ],
  },
  dataPipelines: {
    eyebrow: "Business Intelligence Docs",
    title: "Data Pipelines",
    intro:
      "Data pipelines are the backbone of BI: when ingestion, transformation, and validation are reliable, dashboards become trusted operating tools.",
    highlights: [
      "Improve data freshness without sacrificing quality controls.",
      "Monitor pipeline health with proactive failure alerts.",
      "Document lineage to speed up debugging and change management.",
    ],
    sections: [
      {
        heading: "Pipeline architecture",
        body: "Structure pipelines with explicit contracts between source systems, transformation layers, and consumption models.",
        bullets: [
          "Ingestion standards for CRM, product, finance, and marketing data",
          "Transformation layers that separate raw, modeled, and marts",
          "Automated tests for schema drift, null spikes, and duplicate keys",
          "Observability for run time, freshness, volume, and failure rates",
        ],
      },
      {
        heading: "Reliability outcomes",
        body: "Reliable pipelines reduce reporting fire drills, increase trust in decision meetings, and create a stable platform for forecasting and AI analysis.",
      },
    ],
  },
  reportingSystems: {
    eyebrow: "Business Intelligence Docs",
    title: "Reporting Systems",
    intro:
      "Reporting systems turn dashboards and metrics into repeatable operating rhythms that drive accountability.",
    highlights: [
      "Create weekly, monthly, and quarterly reporting cadences.",
      "Standardize narrative reporting with KPI context and decisions.",
      "Track action items so insights lead to execution.",
    ],
    sections: [
      {
        heading: "Operating cadence design",
        body: "Reporting should be built around decision cycles, not just data exports, so each meeting produces clear next actions.",
        bullets: [
          "Weekly performance reviews focused on trend changes",
          "Monthly business reviews tied to forecast accuracy and plan",
          "Quarterly strategy reviews connected to resource allocation",
          "Decision logs that capture assumptions, owners, and deadlines",
        ],
      },
      {
        heading: "AEO and executive communication",
        body: "Pair structured metrics with concise narrative summaries so leaders and AI assistants can retrieve high-signal business context quickly.",
      },
    ],
  },
};
