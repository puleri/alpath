export const revenueDashboardData = {
  lastUpdated: "Today, 09:42 AM",
  revenueReality: [
    {
      title: "Net revenue (simulated)",
      value: 4280000,
      change: "+6.2% vs last cycle",
      note: "Sandbox signals only",
    },
    {
      title: "Pipeline coverage",
      value: "3.4x",
      change: "Target 3.0x",
      note: "Simulated benchmark",
    },
    {
      title: "Cash conversion",
      value: "62%",
      change: "Stable",
      note: "Modelled on test events",
    },
    {
      title: "At-risk revenue",
      value: 620000,
      change: "-4% QoQ",
      note: "No funds moved",
    },
  ],
  flowStages: [
    {
      stage: "Leads",
      count: 1240,
      value: 820000,
      avgTime: "2 days",
      conversion: "58%",
    },
    {
      stage: "Qualified Deals",
      count: 720,
      value: 1560000,
      avgTime: "5 days",
      conversion: "44%",
    },
    {
      stage: "Proposals Sent",
      count: 316,
      value: 2140000,
      avgTime: "6 days",
      conversion: "37%",
    },
    {
      stage: "Contracts Signed",
      count: 118,
      value: 1680000,
      avgTime: "9 days",
      conversion: "28%",
    },
    {
      stage: "Invoiced",
      count: 96,
      value: 1320000,
      avgTime: "4 days",
      conversion: "81%",
    },
    {
      stage: "Paid",
      count: 82,
      value: 1040000,
      avgTime: "12 days",
      conversion: "85%",
    },
  ],
  systemHealth: [
    {
      label: "CRM ingestion",
      status: "Stable",
      detail: "Simulated sync: 99.2%",
    },
    {
      label: "Payments events",
      status: "Monitoring",
      detail: "Sandbox latency +4m",
    },
    {
      label: "Accounting ledger",
      status: "Healthy",
      detail: "Test postings only",
    },
  ],
  guardrails: [
    "No payout automation enabled",
    "Synthetic payer identities only",
    "Approval queue locked in test mode",
  ],
  checklist: [
    { label: "Deal desk coverage", status: "Complete" },
    { label: "Invoice accuracy sweep", status: "In progress" },
    { label: "Collections follow-up", status: "Scheduled" },
  ],
  leakageRisks: [
    {
      title: "Discount drift on renewals",
      detail: "6 accounts exceeded guardrail",
    },
    {
      title: "Delayed invoicing",
      detail: "11 proposals awaiting review",
    },
    {
      title: "Usage under-reporting",
      detail: "Telemetry gap in sandbox feed",
    },
  ],
  efficiencyMetrics: [
    {
      label: "Avg sales cycle",
      value: "32 days",
      detail: "Simulated targets: 30 days",
    },
    {
      label: "Revenue per rep",
      value: "$420k",
      detail: "Sandbox benchmark",
    },
    {
      label: "Automation leverage",
      value: "71%",
      detail: "Test-only workflows",
    },
  ],
  eventLog: [
    {
      timestamp: "09:31 AM",
      summary: "Sandbox invoice batch validated (12 invoices).",
    },
    {
      timestamp: "09:18 AM",
      summary: "CRM sync completed for 84 opportunities.",
    },
    {
      timestamp: "08:59 AM",
      summary: "Payments gateway replayed 6 test settlements.",
    },
    {
      timestamp: "08:41 AM",
      summary: "Guardrail alert: proposal discount >20% (test).",
    },
  ],
};
