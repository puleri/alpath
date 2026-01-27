// Simulated demo data for local development and UI previews.

const now = Date.now();
const minutes = (value: number) => value * 60 * 1000;
const hours = (value: number) => minutes(value * 60);
const days = (value: number) => hours(value * 24);

export const demoData = {
  meta: {
    label: "Simulated data",
  },
  topKpis: {
    bookedRevenue: { label: "Booked Revenue (Simulated)", value: 2840000 },
    collectedCash: { label: "Collected Cash (Simulated)", value: 1925000 },
    pipelineWeighted: { label: "Pipeline Weighted (Simulated)", value: 3560000 },
    forecastVsTarget: { label: "Forecast vs Target (Simulated)", value: 0.93 },
  },
  stages: [
    {
      label: "Qualification",
      count: 42,
      value: 780000,
      avgDaysInStage: 6,
      conversionRate: 0.48,
    },
    {
      label: "Proposal",
      count: 28,
      value: 1120000,
      avgDaysInStage: 9,
      conversionRate: 0.36,
    },
    {
      label: "Negotiation",
      count: 14,
      value: 890000,
      avgDaysInStage: 12,
      conversionRate: 0.57,
    },
    {
      label: "Closed Won",
      count: 10,
      value: 520000,
      avgDaysInStage: 4,
      conversionRate: 1,
    },
  ],
  risks: [
    {
      label: "Pending approvals",
      count: 6,
      thresholdLabel: "> 48h",
      context: "Simulated approvals waiting on finance sign-off.",
    },
    {
      label: "Overdue invoices",
      count: 11,
      thresholdLabel: "> 14d",
      context: "Simulated customers past due with no payment plan.",
    },
    {
      label: "Stalled negotiations",
      count: 4,
      thresholdLabel: "> 21d",
      context: "Simulated deals inactive after last proposal.",
    },
  ],
  efficiency: {
    revenuePerEmployee: 145000,
    dealsClosedPerRep: 7.4,
    avgLeadToCashDays: 38,
    adminTouches: {
      before: 9,
      after: 3,
    },
  },
  systemHealth: {
    lastSuccessfulSyncs: {
      crmToPayments: new Date(now - minutes(32)).toISOString(),
      paymentsToAccounting: new Date(now - hours(2)).toISOString(),
    },
    automationRules: "Enforced",
    mode: "Test Mode",
    dataFreshness: new Date(now - minutes(15)).toISOString(),
  },
  eventLog: [
    {
      timestamp: new Date(now - minutes(15)).toISOString(),
      title: "Simulated pipeline refresh",
      detail: "Simulated data pull updated KPIs and stage metrics.",
    },
    {
      timestamp: new Date(now - hours(2)).toISOString(),
      title: "Cash collection sync",
      detail: "Simulated payments synced to accounting ledger.",
    },
    {
      timestamp: new Date(now - days(1)).toISOString(),
      title: "Automation health check",
      detail: "Simulated audit confirmed rule enforcement.",
    },
  ],
};
