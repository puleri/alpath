export const caseStudies = [
  {
    slug: "hvac-lead-recovery-system",
    title: "HVAC Lead Recovery System",
    industry: "Home Services",
    summary:
      "Rebuilt lead capture and follow-up so missed calls and form submissions converted into booked jobs instead of dead leads.",
    problem:
      "The company generated demand but relied on manual callbacks and inbox checks. Roughly half of inbound leads did not receive a response within 24 hours.",
    systemApplied: [
      "Lead capture system connecting web forms, call tracking, and chat into one intake pipeline",
      "Qualification and routing logic by service type and zip code",
      "Automated follow-up cadence (SMS + email) with escalation if no rep response",
      "Operations dashboard for response-time and booking-rate visibility",
    ],
    beforeState: [
      "52% first-response within 24 hours",
      "18% lead-to-booking conversion",
      "4.8 day average quote turnaround",
    ],
    afterState: [
      "94% first-response within 24 hours",
      "31% lead-to-booking conversion",
      "1.6 day average quote turnaround",
    ],
    outcomes: [
      "+72% booked jobs over 90 days",
      "$182K additional quarterly revenue attributable to recovered leads",
      "31% reduction in cost per booked job",
    ],
  },
  {
    slug: "saas-demo-to-pipeline-engine",
    title: "SaaS Demo-to-Pipeline Engine",
    industry: "B2B SaaS",
    summary:
      "Aligned marketing and sales handoff so demo requests were triaged, scored, and advanced with consistent follow-up.",
    problem:
      "The team had strong traffic but inconsistent pipeline creation. Demo requests entered multiple tools with no shared qualification framework.",
    systemApplied: [
      "Unified demo intake with mandatory data normalization",
      "Lead scoring model tied to ICP fit + buying intent",
      "CRM workflow automation for stage movement, task creation, and SLA alerts",
      "Executive funnel dashboard for weekly conversion diagnostics",
    ],
    beforeState: [
      "11% demo-to-opportunity conversion",
      "27% of requests unworked after 48 hours",
      "Forecast variance averaging 34%",
    ],
    afterState: [
      "24% demo-to-opportunity conversion",
      "4% of requests unworked after 48 hours",
      "Forecast variance reduced to 12%",
    ],
    outcomes: [
      "2.1x pipeline generated from the same top-of-funnel volume",
      "$1.4M increase in qualified pipeline in one quarter",
      "Sales cycle shortened by 19 days",
    ],
  },
  {
    slug: "multi-location-clinic-visibility-stack",
    title: "Multi-Location Clinic Visibility Stack",
    industry: "Healthcare Services",
    summary:
      "Connected patient acquisition, scheduling, and retention metrics into one operating system for regional leadership.",
    problem:
      "Clinic leaders lacked shared visibility across locations. Reporting was manual, delayed, and difficult to trust for staffing and marketing decisions.",
    systemApplied: [
      "Data pipeline integrating ad platforms, CRM, phone system, and scheduling data",
      "Location-level KPI framework with standardized definitions",
      "Automated weekly performance briefings for operators",
      "Exception alerting for no-show spikes and lead-response failures",
    ],
    beforeState: [
      "Reporting lag of 12-15 days",
      "No-show rate at 22%",
      "Only 3 of 11 locations hitting acquisition targets",
    ],
    afterState: [
      "Reporting lag reduced to next-day",
      "No-show rate reduced to 14%",
      "9 of 11 locations hitting acquisition targets",
    ],
    outcomes: [
      "37% increase in completed appointments",
      "28% improvement in marketing ROI",
      "Leadership planning cycle reduced from monthly to weekly",
    ],
  },
];

export function getCaseStudyBySlug(slug) {
  return caseStudies.find((study) => study.slug === slug);
}
