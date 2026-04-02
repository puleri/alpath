export const revenueAutomationDocLinks = [
  { label: 'Overview', href: '/docs/revenue-automation' },
  {
    label: 'Lead Capture Systems',
    href: '/docs/revenue-automation/lead-capture-systems',
  },
  {
    label: 'Lead Routing Logic',
    href: '/docs/revenue-automation/lead-routing-logic',
  },
  {
    label: 'Follow-Up Automation',
    href: '/docs/revenue-automation/follow-up-automation',
  },
  {
    label: 'CRM Integration',
    href: '/docs/revenue-automation/crm-integration',
  },
];

export const revenueAutomationDocs = {
  overview: {
    eyebrow: 'Revenue Automation Docs',
    title: 'Build a dependable lead-to-revenue engine',
    intro:
      'Revenue automation connects lead capture, qualification, routing, and follow-up so opportunities move faster without manual bottlenecks.',
    highlights: [
      'Capture high-intent leads consistently across channels.',
      'Route opportunities instantly to the right owner or workflow.',
      'Automate follow-up sequences while preserving personalization.',
    ],
    sections: [
      {
        heading: 'What this documentation covers',
        body: 'This collection maps the core components of a practical automation system from first touch through CRM handoff.',
        bullets: [
          'Lead capture architecture and form strategy',
          'Routing rules based on fit, urgency, and ownership',
          'Follow-up orchestration for speed-to-lead',
          'CRM integration patterns for clean lifecycle visibility',
        ],
      },
      {
        heading: 'How to use it',
        body: 'Start with lead capture, then progress through routing, follow-up, and CRM integration to design an end-to-end operating system.',
      },
    ],
  },
  leadCaptureSystems: {
    eyebrow: 'Revenue Automation Docs',
    title: 'Lead Capture Systems',
    intro:
      'How we design entry points that turn interest into qualified opportunities.',
    problemFraming: {
      points: [
        'Traffic exists, but conversions are low',
        'Forms are generic or poorly placed',
        'No alignment between intent and capture',
      ],
      insight:
        'Most capture systems fail because they treat all users the same.',
    },
    systemOverview: [
      'User Intent',
      'Entry Point',
      'Form Logic',
      'Data Capture',
      'System Trigger',
    ],
    components: [
      {
        title: 'Entry Points',
        points: ['Landing pages', 'Inline forms', 'CTAs across the site'],
        why: 'Placement drives intent capture.',
      },
      {
        title: 'Form Design',
        points: [
          'Field strategy',
          'Progressive disclosure',
          'Friction vs. qualification balance',
        ],
      },
      {
        title: 'Contextual Capture',
        points: [
          'Different forms for different intents',
          'Dynamic content / routing',
        ],
      },
      {
        title: 'Data Structuring',
        points: [
          'Clean inputs into systems',
          'Standardized fields for downstream use',
        ],
      },
    ],
    exampleFlow: [
      'User lands on service page',
      'Clicks CTA',
      'Form adapts to context',
      'Data captured and tagged',
      'Sent to routing system',
    ],
    relatedSystems: [
      {
        label: 'Lead Routing Logic',
        href: '/docs/revenue-automation/lead-routing-logic',
      },
      {
        label: 'Follow-Up Automation',
        href: '/docs/revenue-automation/follow-up-automation',
      },
    ],
    cta: {
      heading: 'Design My Revenue System',
      label: 'Design My Revenue System',
      href: '/contact',
    },
  },
  leadRoutingLogic: {
    eyebrow: 'Revenue Automation Docs',
    title: 'Lead Routing Logic',
    intro:
      'How leads are directed to the right place, instantly and accurately.',
    problemFraming: {
      points: [
        'Leads sit unassigned',
        'Wrong person handles the lead',
        'Response time is slow',
      ],
      insight: 'Speed and accuracy of routing directly impact conversion.',
    },
    systemOverview: [
      'Lead Data',
      'Qualification Rules',
      'Routing Engine',
      'Owner Assignment',
    ],
    components: [
      {
        title: 'Qualification Rules',
        points: ['Based on form inputs', 'Business logic filters'],
      },
      {
        title: 'Routing Conditions',
        points: ['Geography', 'Service type', 'Lead quality'],
      },
      {
        title: 'Assignment Logic',
        points: ['Round robin', 'Skill-based routing', 'Priority routing'],
      },
      {
        title: 'Fail-safes',
        points: ['Fallback assignments', 'Alerts for unassigned leads'],
      },
    ],
    exampleFlow: [
      'Lead submits form',
      'System evaluates criteria',
      'Assigned to correct owner',
      'Notification triggered',
    ],
    relatedSystems: [
      {
        label: 'Lead Capture Systems',
        href: '/docs/revenue-automation/lead-capture-systems',
      },
      {
        label: 'Follow-Up Automation',
        href: '/docs/revenue-automation/follow-up-automation',
      },
    ],
    cta: {
      heading: 'Design My Revenue System',
      label: 'Design My Revenue System',
      href: '/contact',
    },
  },
  followUpAutomation: {
    eyebrow: 'Revenue Automation Docs',
    title: 'Follow-Up Automation',
    intro:
      'How we ensure every lead is consistently nurtured and moved forward.',
    problemFraming: {
      points: [
        'Leads go cold',
        'Follow-up depends on manual effort',
        'Inconsistent messaging',
      ],
      insight: 'Most revenue is lost in the gap after the first interaction.',
    },
    systemOverview: [
      'Lead Event',
      'Trigger',
      'Workflow',
      'Messaging',
      'Outcome Tracking',
    ],
    components: [
      {
        title: 'Triggers',
        points: ['Form submission', 'Time delays', 'Behavior-based events'],
      },
      {
        title: 'Workflows',
        points: ['Multi-step sequences', 'Conditional paths'],
      },
      {
        title: 'Messaging',
        points: ['Email / SMS', 'Personalization layers'],
      },
      {
        title: 'Timing & Cadence',
        points: ['Immediate response', 'Scheduled follow-ups'],
      },
      {
        title: 'Tracking',
        points: ['Opens, clicks, replies', 'Conversion signals'],
      },
    ],
    exampleFlow: [
      'Lead submits form',
      'Immediate confirmation email',
      'Follow-up sequence begins',
      'Engagement tracked',
      'Lead progresses or exits',
    ],
    relatedSystems: [
      {
        label: 'Lead Routing Logic',
        href: '/docs/revenue-automation/lead-routing-logic',
      },
      {
        label: 'CRM Integration',
        href: '/docs/revenue-automation/crm-integration',
      },
    ],
    cta: {
      heading: 'Design My Revenue System',
      label: 'Design My Revenue System',
      href: '/contact',
    },
  },
  crmIntegration: {
    eyebrow: 'Revenue Automation Docs',
    title: 'CRM Integration',
    intro: 'How all lead data is centralized, structured, and made actionable.',
    problemFraming: {
      points: [
        'Data lives in multiple tools',
        'No single source of truth',
        'Pipeline is unclear',
      ],
      insight: 'Without a central system, everything else breaks down.',
    },
    systemOverview: [
      'Capture + Routing + Automation',
      'CRM',
      'Pipeline Visibility',
      'Reporting',
    ],
    components: [
      {
        title: 'Data Ingestion',
        points: ['Leads from all sources', 'Clean data entry'],
      },
      {
        title: 'Data Structure',
        points: ['Standardized fields', 'Tagging and segmentation'],
      },
      {
        title: 'Pipeline Design',
        points: ['Stages aligned to business process', 'Clear progression'],
      },
      {
        title: 'Integration Layer',
        points: [
          'Sync with tools (forms, automation, etc.)',
          'API/webhook connections',
        ],
      },
      {
        title: 'Visibility',
        points: ['Real-time pipeline view', 'Status tracking'],
      },
    ],
    exampleFlow: [
      'Lead enters system',
      'Routed and tagged',
      'Added to CRM',
      'Moves through pipeline',
      'Status updated in real time',
    ],
    relatedSystems: [
      {
        label: 'Follow-Up Automation',
        href: '/docs/revenue-automation/follow-up-automation',
      },
      { label: 'Business Intelligence', href: '/docs/business-intelligence' },
    ],
    cta: {
      heading: 'Design My Revenue System',
      label: 'Design My Revenue System',
      href: '/contact',
    },
  },
};
