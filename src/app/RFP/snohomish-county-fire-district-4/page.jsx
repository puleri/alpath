import { cookies } from 'next/headers';
import ProposalScrollReset from '../../RFQ/whidbey-camano-islands/ProposalScrollReset';
import { isProposalAccessCookieValid, PROPOSAL_ACCESS_COOKIE } from './access';
import ProposalPasswordGate from './ProposalPasswordGate';
import ProposalToolbar from './ProposalToolbar';
import styles from './page.module.css';

export const dynamic = 'force-dynamic';

export const metadata = {
  title:
    'Snohomish County Fire District #4 Coordinated Services RFP | Alpath Engineering',
  description:
    'Alpath Engineering’s proposed connected digital system for records management, public records, and website coordinated services.',
  alternates: {
    canonical: '/RFP/snohomish-county-fire-district-4',
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
  },
  openGraph: {
    title: 'A connected digital system for Snohomish County Fire District #4',
    description:
      'Records management, public records, and website coordinated services—designed as one coherent digital ecosystem.',
    url: '/RFP/snohomish-county-fire-district-4',
    type: 'article',
  },
};

const proposalSections = [
  ['01', 'top', 'Cover'],
  ['02', 'one-system', 'One system'],
  ['03', 'understanding', 'District context'],
  ['04', 'ecosystem', 'Ecosystem'],
  ['05', 'public-experience', 'Public experience'],
  ['06', 'burn-service', 'Signature service'],
  ['07', 'records', 'Records'],
  ['08', 'assurance', 'Assurance'],
  ['09', 'implementation', 'Implementation'],
  ['10', 'staff', 'District staff'],
  ['11', 'why-alpath', 'Why Alpath'],
  ['12', 'work', 'Relevant work'],
  ['13', 'accountability', 'Accountability'],
  ['14', 'ownership', 'Ownership'],
  ['15', 'investment', 'Investment'],
  ['16', 'close', 'Closing'],
];

const districtNeeds = [
  {
    title: 'Urgent publishing',
    body: 'Staff need to post time-sensitive information quickly, with clear controls and dependable presentation across devices.',
    icon: 'alert',
  },
  {
    title: 'Simple public access',
    body: 'Residents should be able to reach records, permits, restrictions, meetings, and community services without learning the District’s structure.',
    icon: 'people',
  },
  {
    title: 'Coordinated information',
    body: 'Content and records may live across multiple locations or processes. The opportunity is to clarify sources, ownership, and handoffs.',
    icon: 'layers',
  },
  {
    title: 'Sustainable operations',
    body: 'Nontechnical staff need practical publishing tools, while the District needs accessibility, auditability, security, and long-term maintainability.',
    icon: 'shield',
  },
];

const publicTasks = [
  ['flame', 'Is burning allowed at my address?'],
  ['file', 'Request a public record'],
  ['permit', 'Apply for a permit'],
  ['alert', 'Find emergency or burn-ban information'],
  ['pin', 'Find my station'],
  ['calendar', 'View Board meetings and documents'],
  ['people', 'Access community programs'],
  ['message', 'Contact the District'],
];

const assuranceItems = [
  {
    label: 'Inclusive access',
    title: 'WCAG-aligned experiences',
    body: 'Accessible templates, content patterns, forms, documents, keyboard interaction, and assistive-technology testing.',
    icon: 'accessibility',
  },
  {
    label: 'Identity & permissions',
    title: 'The right access for each role',
    body: 'Secure authentication, role-based access, least privilege, and documented onboarding and offboarding practices.',
    icon: 'key',
  },
  {
    label: 'Data protection',
    title: 'Protected through its lifecycle',
    body: 'Encryption in transit and at rest where supported, controlled environments, backups, recovery planning, and data ownership.',
    icon: 'shield',
  },
  {
    label: 'Operational evidence',
    title: 'Visible, testable, accountable',
    body: 'Audit logging, monitoring, release records, recovery checks, and clear responsibility for incidents and maintenance.',
    icon: 'pulse',
  },
];

const phases = [
  {
    number: '01',
    title: 'Discovery & system mapping',
    body: 'Confirm users, content, workflows, records responsibilities, systems, constraints, and success measures.',
    gate: 'District confirms current-state map and priorities.',
  },
  {
    number: '02',
    title: 'UX + technical architecture',
    body: 'Define service journeys, information structure, governance, platform criteria, integration boundaries, and security approach.',
    gate: 'District approves experience and architecture direction.',
  },
  {
    number: '03',
    title: 'Prototype & validation',
    body: 'Test representative public and staff workflows before committing to full implementation.',
    gate: 'Stakeholders validate priority workflows and acceptance criteria.',
  },
  {
    number: '04',
    title: 'Build / configure / integrate',
    body: 'Implement approved website, CMS, workflow, permissions, data connections, and operational tooling.',
    gate: 'District reviews working increments at defined milestones.',
  },
  {
    number: '05',
    title: 'Migration & testing',
    body: 'Prepare and move approved content and records; test accessibility, security, performance, workflows, and recovery.',
    gate: 'Owners sign off on migrated content and launch readiness.',
  },
  {
    number: '06',
    title: 'Training & launch',
    body: 'Train staff by role, complete launch runbooks, release in a controlled sequence, and monitor real-world use.',
    gate: 'District authorizes production launch.',
  },
  {
    number: '07',
    title: 'Stabilization & support',
    body: 'Resolve launch findings, review measures, transfer knowledge, and prioritize ongoing improvements.',
    gate: 'District accepts transition and support plan.',
  },
];

const relevantWork = [
  {
    number: '01',
    name: 'Lockhart Suver',
    url: 'https://www.lockhartsuver.com/',
    problem:
      'A large WordPress site needed to move to a modern platform without losing the experience or content users relied on.',
    role: 'Matt planned and executed the migration, built a recovery tool, tested the work, managed launch, and continues to support the site.',
    solution:
      'A modern site implementation plus a purpose-built tool to recover an image library the prior system could not export cleanly.',
    outcome: 'Google accessibility score improved from 74 to 96.',
    relevance:
      'Content migration, accessibility improvement, custom tooling, platform transition, and accountable support.',
    metric: '74 → 96',
    metricLabel: 'Accessibility score',
  },
  {
    number: '02',
    name: 'Lennon Window Cleaning',
    url: 'https://lennonwc.com/',
    problem:
      'Customers needed a clearer way to understand services and request an estimate from any device.',
    role: 'Matt planned the site, organized information, designed and built the experience, configured measurement, launched it, and continues to improve it.',
    solution:
      'A mobile-ready, task-oriented public experience with shorter paths to relevant information and inquiry.',
    outcome: 'More than 300 leads generated in the first year.',
    relevance:
      'Resident-intent information architecture, conversion paths, analytics, performance, and iterative optimization.',
    metric: '300+',
    metricLabel: 'Leads in year one',
  },
  {
    number: '03',
    name: 'Distinctive Glass',
    url: 'https://www.distinctiveglass.com/',
    problem:
      'An existing website needed urgent changes after its previous developer became unavailable.',
    role: 'Matt learned the inherited system, diagnosed issues, completed updates, reviewed releases with the client, and provides ongoing support.',
    solution:
      'A documented, incremental support path that preserved the working system instead of forcing an unnecessary rebuild.',
    outcome: 'Continuity and a dependable path for future changes.',
    relevance:
      'System stewardship, technical discovery, documentation, maintainability, and long-term operational support.',
    metric: 'Continuity',
    metricLabel: 'Without a forced rebuild',
  },
];

const investmentRows = [
  ['Discovery / architecture', '[TO CONFIRM]', 'Alpath professional services'],
  ['Implementation', '[TO CONFIRM]', 'Alpath professional services'],
  [
    'Platform / software licensing',
    '[TO CONFIRM]',
    'Third-party cost; paid directly or passed through as agreed',
  ],
  [
    'Content & records migration',
    '[TO CONFIRM]',
    'Alpath services; specialist support if approved',
  ],
  ['Training', '[TO CONFIRM]', 'Alpath professional services'],
  [
    'Hosting & ongoing support',
    '[TO CONFIRM]',
    'Recurring services and any third-party infrastructure',
  ],
  ['Optional enhancements', '[TO CONFIRM]', 'Separately scoped and approved'],
];

function Icon({ name }) {
  const paths = {
    accessibility: (
      <>
        <circle cx="12" cy="4.5" r="1.8" />
        <path d="M5 8.2h14M12 8.2v11.3M8.2 20l3.8-6.2 3.8 6.2" />
      </>
    ),
    alert: (
      <>
        <path d="M12 3 2.8 20h18.4L12 3Z" />
        <path d="M12 9v5M12 17.5v.1" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M7 3v4M17 3v4M3 10h18M7 14h3M14 14h3M7 17.5h3" />
      </>
    ),
    file: (
      <>
        <path d="M6 2.8h8l4 4V21H6V2.8Z" />
        <path d="M14 2.8V7h4M9 12h6M9 16h6" />
      </>
    ),
    flame: (
      <path d="M13.4 2.5c.6 4.1-2.3 5.2-2.3 8 0 1.3.9 2.2 2 2.2 1.7 0 2.7-1.5 2.5-3.2 2.5 2 4 4.4 4 7A7.6 7.6 0 0 1 4.4 16c0-3.6 2-6.8 5.7-9.7-.1 3 1.2 3.3 1.7 1.2.5-1.7.3-3.2 1.6-5Z" />
    ),
    key: (
      <>
        <circle cx="8" cy="15" r="4" />
        <path d="m11 12 8-8M16 7l2 2M18 5l2 2" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
    message: <path d="M4 4h16v12H9l-5 4V4Z" />,
    people: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.3" />
        <path d="M3.5 20v-2a5.5 5.5 0 0 1 11 0v2M15 14.5a4.5 4.5 0 0 1 5.5 4.4V20" />
      </>
    ),
    permit: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h4M8 16l2 2 5-5" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    pulse: <path d="M2 13h5l2-6 4 12 3-8 1 2h5" />,
    shield: (
      <>
        <path d="M12 2.5 20 6v6c0 5-3.4 8.3-8 9.5C7.4 20.3 4 17 4 12V6l8-3.5Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className={styles.icon}
      fill="none"
      viewBox="0 0 24 24"
    >
      {paths[name] || paths.layers}
    </svg>
  );
}

function SectionHeading({ number, eyebrow, title, id, children }) {
  return (
    <header className={styles.sectionHeading}>
      <div className={styles.sectionNumber}>{number}</div>
      <div>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 id={id}>{title}</h2>
        {children ? <p className={styles.sectionLead}>{children}</p> : null}
      </div>
    </header>
  );
}

function AlpathMark() {
  return (
    <div className={styles.alpathMark}>
      <img src="/alpath/sign.svg" alt="" />
      <span>
        <strong>Alpath</strong> Engineering
      </span>
    </div>
  );
}

export default async function SnohomishFireDistrictProposalPage() {
  const cookieStore = await cookies();
  const accessCookie = cookieStore.get(PROPOSAL_ACCESS_COOKIE)?.value;

  if (!isProposalAccessCookieValid(accessCookie)) {
    return <ProposalPasswordGate />;
  }

  return (
    <main className={styles.page}>
      <ProposalScrollReset />

      <header className={styles.cover} id="top">
        <div className={styles.coverGrid} aria-hidden="true" />
        <div className={styles.coverTopline}>
          <p>Request for proposal · Coordinated digital services</p>
          <ProposalToolbar />
        </div>

        <div className={styles.coverMarks}>
          <AlpathMark />
          <span className={styles.connectorMark} aria-hidden="true">
            ×
          </span>
          <div
            className={styles.districtMark}
            aria-label="Snohomish County Fire District number 4"
          >
            <span>SCFD</span>
            <strong>4</strong>
          </div>
        </div>

        <div className={styles.coverTitle}>
          <p className={styles.eyebrow}>
            Prepared for Snohomish County Fire District #4
          </p>
          <h1>
            A Connected Digital System for Snohomish County Fire District #4
          </h1>
          <p className={styles.coverSubtitle}>
            Records Management, Public Records &amp; Website Coordinated
            Services
          </p>
        </div>

        <div className={styles.coverBottom}>
          <p>
            A public experience and the systems behind it—designed to work as
            one maintainable digital ecosystem.
          </p>
          <dl>
            <div>
              <dt>Submitted by</dt>
              <dd>Alpath Engineering</dd>
            </div>
            <div>
              <dt>Accountable lead</dt>
              <dd>Matt Puleri</dd>
            </div>
            <div>
              <dt>Proposal status</dt>
              <dd>Working response · [TO CONFIRM]</dd>
            </div>
          </dl>
        </div>
      </header>

      <nav className={styles.proposalIndex} aria-label="Proposal sections">
        <div className={styles.indexInner}>
          <p className={styles.eyebrow}>Proposal map</p>
          <ol>
            {proposalSections.map(([number, id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>
                  <span>{number}</span>
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <section className={styles.section} aria-labelledby="one-system">
        <SectionHeading
          number="02"
          eyebrow="Executive summary"
          id="one-system"
          title="One system, not three projects."
        >
          The website, public-records process, and records environment should be
          designed as connected parts of a single service model—not purchased as
          isolated products and left for staff to reconcile.
        </SectionHeading>

        <div className={styles.systemFlow} aria-label="Proposed system flow">
          <div className={styles.flowNode}>
            <span>01</span>
            <strong>Public</strong>
            <small>Residents · partners · media</small>
          </div>
          <span className={styles.flowArrow} aria-hidden="true">
            →
          </span>
          <div className={styles.flowNode}>
            <span>02</span>
            <strong>Website &amp; digital services</strong>
            <small>Clear entry points and status</small>
          </div>
          <span className={styles.flowArrow} aria-hidden="true">
            →
          </span>
          <div className={`${styles.flowNode} ${styles.flowNodeAccent}`}>
            <span>03</span>
            <strong>Workflow &amp; integration layer</strong>
            <small>Routing · rules · permissions · APIs</small>
          </div>
          <span className={styles.flowArrow} aria-hidden="true">
            →
          </span>
          <div className={styles.flowNode}>
            <span>04</span>
            <strong>Records &amp; District systems</strong>
            <small>Approved sources of truth</small>
          </div>
        </div>

        <div className={styles.thesisGrid}>
          <p className={styles.pullQuote}>
            The website becomes a secure interface into approved District
            services and information—not merely a collection of pages.
          </p>
          <div>
            <p>
              Information can be maintained once and used where it is needed.
              Requests can enter controlled, auditable workflows. Staff can
              communicate quickly without bypassing governance. Residents get a
              simpler front door while the District retains operational control.
            </p>
            <p className={styles.proposalNote}>
              This is a proposed architecture direction. Platforms, data flows,
              integrations, and system boundaries will be confirmed during
              discovery.
            </p>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.washSection}`}
        aria-labelledby="understanding"
      >
        <SectionHeading
          number="03"
          eyebrow="What we understand"
          id="understanding"
          title="Modernize the environment without disrupting the mission."
        >
          The District’s current environment has supported real work. The next
          step is to consolidate the experience around the public and staff who
          depend on it—while preserving what is useful and improving what
          creates friction.
        </SectionHeading>

        <div className={styles.needGrid}>
          {districtNeeds.map((item, index) => (
            <article key={item.title}>
              <div className={styles.iconFrame}>
                <Icon name={item.icon} />
              </div>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.darkSection}`}
        aria-labelledby="ecosystem"
      >
        <SectionHeading
          number="04"
          eyebrow="Proposed digital ecosystem"
          id="ecosystem"
          title="A clear service layer across public information and District operations."
        >
          Each component has a defined role. Connections are deliberate,
          permissions are explicit, and activity can be measured or audited.
        </SectionHeading>

        <div className={styles.ecosystemDiagram}>
          <div className={styles.ecosystemColumn}>
            <p>Experience layer</p>
            <div className={styles.ecosystemCard}>
              <span>Public</span>
              <strong>Website</strong>
              <small>Tasks · content · alerts · services</small>
            </div>
            <div className={styles.ecosystemCard}>
              <span>Staff</span>
              <strong>CMS + staff portal</strong>
              <small>Publish · review · administer</small>
            </div>
          </div>
          <div className={styles.diagramBridge} aria-hidden="true">
            <span>controlled exchange</span>
            <i>→</i>
            <i>←</i>
          </div>
          <div className={styles.ecosystemColumn}>
            <p>Coordination layer</p>
            <div
              className={`${styles.ecosystemCard} ${styles.ecosystemCardAccent}`}
            >
              <span>Service</span>
              <strong>Workflow engine</strong>
              <small>Intake · routing · status · approvals</small>
            </div>
            <div
              className={`${styles.ecosystemCard} ${styles.ecosystemCardAccent}`}
            >
              <span>Connection</span>
              <strong>APIs + integrations</strong>
              <small>Validated data movement</small>
            </div>
          </div>
          <div className={styles.diagramBridge} aria-hidden="true">
            <span>approved access</span>
            <i>→</i>
            <i>←</i>
          </div>
          <div className={styles.ecosystemColumn}>
            <p>Systems of record</p>
            <div className={styles.ecosystemCard}>
              <span>Records</span>
              <strong>Documents + requests</strong>
              <small>Metadata · retention · delivery</small>
            </div>
            <div className={styles.ecosystemCard}>
              <span>District data</span>
              <strong>GIS + administrative systems</strong>
              <small>Sources [TO CONFIRM]</small>
            </div>
          </div>
          <div className={styles.controlPlane}>
            <div>
              <strong>Authentication</strong>
              <span>Identity + role permissions</span>
            </div>
            <div>
              <strong>Notifications</strong>
              <span>Emergency + service updates</span>
            </div>
            <div>
              <strong>Evidence</strong>
              <span>Analytics + audit logs</span>
            </div>
            <div>
              <strong>Resilience</strong>
              <span>Monitoring + recovery</span>
            </div>
          </div>
        </div>
        <p className={styles.diagramCaption}>
          Conceptual architecture · Specific platforms, integrations, data
          sources, and record boundaries are subject to discovery and District
          approval.
        </p>
      </section>

      <section className={styles.section} aria-labelledby="public-experience">
        <SectionHeading
          number="05"
          eyebrow="Public website experience"
          id="public-experience"
          title="Organized around resident intent—not the organization chart."
        >
          The experience should begin with the reason someone arrived. Clear
          language, mobile-first interaction, accessible patterns, fast loading,
          and prominent emergency information help people act with confidence.
        </SectionHeading>

        <div className={styles.taskIntro}>
          <p>Common public intents</p>
          <span>
            Priorities and wording to validate with District stakeholders
          </span>
        </div>
        <div className={styles.taskGrid}>
          {publicTasks.map(([icon, task], index) => (
            <article key={task}>
              <Icon name={icon} />
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{task}</h3>
              <i aria-hidden="true">→</i>
            </article>
          ))}
        </div>

        <div className={styles.experiencePrinciples}>
          <span>Mobile first</span>
          <span>Plain language</span>
          <span>Accessible by default</span>
          <span>Fast on constrained connections</span>
          <span>Emergency-ready publishing</span>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.serviceSection}`}
        aria-labelledby="burn-service"
      >
        <SectionHeading
          number="06"
          eyebrow="A signature digital service"
          id="burn-service"
          title="Turn a complicated question into a clear next action."
        >
          An address-based burn eligibility experience illustrates the
          difference between publishing information and engineering a public
          service.
        </SectionHeading>

        <div className={styles.serviceDemo}>
          <div className={styles.serviceMockup}>
            <div className={styles.mockupBar}>
              <div>
                <i />
                <i />
                <i />
              </div>
              <span>Illustrative service prototype</span>
            </div>
            <div className={styles.mockupBody}>
              <p className={styles.eyebrow}>Burn eligibility</p>
              <h3>Is burning allowed at this address?</h3>
              <label htmlFor="concept-address">Street address</label>
              <div className={styles.conceptInput}>
                <input
                  aria-describedby="concept-note"
                  id="concept-address"
                  placeholder="123 Example Street, Snohomish, WA"
                  readOnly
                  type="text"
                />
                <button disabled type="button">
                  Check address
                </button>
              </div>
              <div className={styles.conceptResult}>
                <span>Proposed result pattern</span>
                <strong>A simple answer</strong>
                <p>
                  Current restriction, jurisdiction, applicable conditions, and
                  the next approved action—shown together.
                </p>
              </div>
              <p className={styles.conceptDisclaimer} id="concept-note">
                Concept only—not a live eligibility determination.
              </p>
            </div>
          </div>

          <div className={styles.serviceJourney}>
            {[
              [
                '1',
                'Enter address',
                'Collect only what is needed to locate the service area.',
              ],
              [
                '2',
                'Identify location',
                'Resolve jurisdiction or geographic context.',
              ],
              [
                '3',
                'Consult approved sources',
                'Evaluate applicable GIS, rules, and current status data.',
              ],
              [
                '4',
                'Return an answer',
                'Explain the result in plain language with provenance and timing.',
              ],
              [
                '5',
                'Offer the next action',
                'Link to an approved permit, restriction, contact, or guidance path.',
              ],
            ].map(([number, title, body]) => (
              <article key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </article>
            ))}
            <p className={styles.proposalNote}>
              Proposed approach subject to discovery. Data sources, rules,
              authoritative ownership, update frequency, and technical
              integrations are not yet finalized.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="records">
        <SectionHeading
          number="07"
          eyebrow="Records + public records"
          id="records"
          title="A request should move through a visible, controlled lifecycle."
        >
          Alpath would help select, configure, and integrate appropriate records
          technologies. We are not proposing a proprietary records-management
          product.
        </SectionHeading>

        <div className={styles.recordsFlow}>
          {[
            ['01', 'Intake', 'Guided request + validation'],
            ['02', 'Route', 'Ownership + due dates'],
            ['03', 'Locate', 'Search + approved sources'],
            ['04', 'Review', 'Permissions + redaction workflow'],
            ['05', 'Deliver', 'Secure release + communication'],
            ['06', 'Retain', 'Status + audit evidence'],
          ].map(([number, title, body], index) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
              {index < 5 ? <i aria-hidden="true">→</i> : null}
            </article>
          ))}
        </div>

        <div className={styles.recordsPriorities}>
          <p>System priorities</p>
          <ul>
            <li>Searchable records</li>
            <li>Standardized metadata</li>
            <li>Controlled permissions</li>
            <li>Audit trails</li>
            <li>Request status tracking</li>
            <li>Fewer manual handoffs</li>
            <li>Clear ownership</li>
            <li>Retention support [TO CONFIRM]</li>
          </ul>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.washSection}`}
        aria-labelledby="assurance"
      >
        <SectionHeading
          number="08"
          eyebrow="Security, accessibility & reliability"
          id="assurance"
          title="Trust is an architectural requirement."
        >
          Controls should be designed into publishing, workflows,
          infrastructure, and ownership from the beginning—then verified
          throughout delivery.
        </SectionHeading>

        <div className={styles.assuranceGrid}>
          {assuranceItems.map((item) => (
            <article key={item.title}>
              <div>
                <Icon name={item.icon} />
                <span>{item.label}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <div className={styles.assuranceBand}>
          <span>Environment separation</span>
          <span>Maintainable architecture</span>
          <span>District data ownership</span>
          <span>Documented backup + recovery</span>
        </div>
        <p className={styles.diagramCaption}>
          Detailed controls, standards, hosting responsibilities, retention
          rules, and acceptance criteria will be aligned to confirmed RFP and
          District requirements.
        </p>
      </section>

      <section
        className={`${styles.section} ${styles.timelineSection}`}
        aria-labelledby="implementation"
      >
        <SectionHeading
          number="09"
          eyebrow="Implementation method"
          id="implementation"
          title="Move forward in phases. Approve direction before cost compounds."
        >
          Working increments and explicit decision gates let leadership,
          administrative staff, operational stakeholders, and IT/security
          stakeholders shape the system before major implementation continues.
        </SectionHeading>

        <div className={styles.timeline}>
          {phases.map((phase) => (
            <article key={phase.number}>
              <div className={styles.timelineMarker}>
                <span>{phase.number}</span>
              </div>
              <div className={styles.timelineCopy}>
                <h3>{phase.title}</h3>
                <p>{phase.body}</p>
              </div>
              <div className={styles.approvalGate}>
                <span>Decision gate</span>
                <p>{phase.gate}</p>
              </div>
            </article>
          ))}
        </div>
        <p className={styles.timelineNote}>
          Schedule, sequencing, review periods, and procurement dependencies are
          <strong> [TO CONFIRM]</strong>.
        </p>
      </section>

      <section
        className={`${styles.section} ${styles.staffSection}`}
        aria-labelledby="staff"
      >
        <SectionHeading
          number="10"
          eyebrow="Designed around District staff"
          id="staff"
          title="Complexity belongs in the system—not in the staff workflow."
        >
          The system should encode good decisions into templates, permissions,
          review states, and guidance so staff can focus on serving the public.
        </SectionHeading>

        <div className={styles.staffLayout}>
          <blockquote>
            <span>Operating principle</span>
            “A staff member should not need to understand the integration layer
            to publish an accurate update.”
          </blockquote>
          <div className={styles.staffWorkflow}>
            {[
              ['Create', 'Start from an approved content or service pattern.'],
              ['Review', 'Route sensitive changes to the right owner.'],
              ['Publish', 'Release across approved channels without re-entry.'],
              ['Measure', 'See use, errors, and improvement opportunities.'],
            ].map(([title, body], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
        <div className={styles.staffSupports}>
          <span>Role-specific permissions</span>
          <span>Editor guardrails</span>
          <span>Plain-language documentation</span>
          <span>Hands-on training</span>
          <span>Maintainable content models</span>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.darkSection}`}
        aria-labelledby="why-alpath"
      >
        <SectionHeading
          number="11"
          eyebrow="Why Alpath Engineering"
          id="why-alpath"
          title="A digital systems partner with an engineering center of gravity."
        >
          Alpath can connect experience design to the architecture, software,
          integration, measurement, and operational decisions required to make a
          public service dependable.
        </SectionHeading>

        <div className={styles.capabilityMap}>
          {[
            [
              'Strategy',
              'Stakeholder alignment',
              'Service + content architecture',
            ],
            ['Experience', 'UX + digital design', 'Accessible public journeys'],
            ['Platform', 'Modern web architecture', 'CMS implementation'],
            ['Engineering', 'Custom applications', 'Integrations + APIs'],
            [
              'Operations',
              'Analytics + optimization',
              'Documentation + support',
            ],
          ].map(([group, first, second], index) => (
            <article key={group}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{group}</h3>
              <p>{first}</p>
              <p>{second}</p>
            </article>
          ))}
        </div>
        <div className={styles.whyStatement}>
          <p>
            <strong>Senior-level direct involvement.</strong> A small specialist
            team means a short path between District stakeholders and the person
            accountable for technical decisions.
          </p>
          <p>
            Alpath does not claim unverified public-sector experience,
            certifications, proprietary records software, or preselected
            platform partnerships. Fit will be demonstrated through the work,
            the proposed method, and confirmed references.
          </p>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="work">
        <SectionHeading
          number="12"
          eyebrow="Relevant work"
          id="work"
          title="Evidence from adjacent problems—connected directly to this one."
        >
          These examples are not presented as Fire District or
          records-management projects. Each demonstrates a specific capability
          relevant to the proposed ecosystem.
        </SectionHeading>

        <div className={styles.caseStudyGrid}>
          {relevantWork.map((project) => (
            <article key={project.name}>
              <div className={styles.caseStudyTopline}>
                <span>{project.number}</span>
                <a href={project.url} rel="noreferrer" target="_blank">
                  Visit site <i aria-hidden="true">↗</i>
                </a>
              </div>
              <h3>{project.name}</h3>
              <dl>
                <div>
                  <dt>Problem</dt>
                  <dd>{project.problem}</dd>
                </div>
                <div>
                  <dt>Alpath’s role</dt>
                  <dd>{project.role}</dd>
                </div>
                <div>
                  <dt>Technical solution</dt>
                  <dd>{project.solution}</dd>
                </div>
                <div>
                  <dt>Outcome</dt>
                  <dd>{project.outcome}</dd>
                </div>
                <div>
                  <dt>Relevance to Fire District #4</dt>
                  <dd>{project.relevance}</dd>
                </div>
              </dl>
              <p className={styles.caseMetric}>
                <strong>{project.metric}</strong>
                <span>{project.metricLabel}</span>
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.accountabilitySection}`}
        aria-labelledby="accountability"
      >
        <SectionHeading
          number="13"
          eyebrow="Team & accountability"
          id="accountability"
          title="One accountable technical lead. Named support only when confirmed."
        >
          Matt Puleri, Founder &amp; Principal Engineer, is the proposed primary
          accountable lead. Supporting roles will be identified before
          assignment and aligned to the final platform and scope.
        </SectionHeading>

        <div className={styles.leadProfile}>
          <figure>
            <img src="/people/matt/matt-on-grey.png" alt="Matt Puleri" />
            <figcaption>Proposed primary accountable lead</figcaption>
          </figure>
          <div>
            <p className={styles.eyebrow}>Founder &amp; Principal Engineer</p>
            <h3>Matt Puleri</h3>
            <p>
              Matt would connect stakeholder decisions, user experience,
              architecture, implementation, quality, and support—keeping
              technical accountability close to District leadership throughout
              delivery.
            </p>
            <p className={styles.leadSkills}>
              Architecture · Engineering · UX · CMS · Integration · Analytics ·
              Delivery
            </p>
          </div>
        </div>

        <div
          className={styles.ownershipTable}
          role="table"
          aria-label="Proposed delivery accountability"
        >
          <div className={styles.tableHeader} role="row">
            <span role="columnheader">Workstream</span>
            <span role="columnheader">Accountable owner</span>
            <span role="columnheader">Delivery support</span>
          </div>
          {[
            [
              'Project management',
              'Matt Puleri',
              'District project lead [TO CONFIRM]',
            ],
            [
              'UX / design',
              'Matt Puleri',
              'Design support [TO CONFIRM if required]',
            ],
            [
              'Technical architecture',
              'Matt Puleri',
              'District IT/security stakeholders [TO CONFIRM]',
            ],
            [
              'Engineering & integration',
              'Matt Puleri',
              'Platform/integration specialists [TO CONFIRM]',
            ],
            [
              'Records/platform implementation',
              'Matt Puleri',
              'Qualified platform specialist [TO CONFIRM]',
            ],
            [
              'QA & accessibility',
              'Matt Puleri',
              'Independent/specialist testing [TO CONFIRM]',
            ],
            [
              'Training & support',
              'Matt Puleri',
              'District content owners [TO CONFIRM]',
            ],
          ].map((row) => (
            <div className={styles.tableRow} role="row" key={row[0]}>
              {row.map((cell) => (
                <span role="cell" key={cell}>
                  {cell}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.ownershipSection}`}
        aria-labelledby="ownership"
      >
        <SectionHeading
          number="14"
          eyebrow="Long-term ownership"
          id="ownership"
          title="The District should remain in control of its digital foundation."
        >
          Technology choices should preserve practical exit paths and make
          future maintenance possible without recreating institutional
          knowledge.
        </SectionHeading>

        <div className={styles.ownershipCards}>
          <article>
            <span>District control</span>
            <h3>Assets that stay with the District</h3>
            <ul>
              <li>Content and approved records</li>
              <li>Domains and account ownership</li>
              <li>Data exports and migration paths</li>
              <li>Design and system documentation</li>
              <li>Access to analytics and operating history</li>
            </ul>
          </article>
          <article>
            <span>Architectural posture</span>
            <h3>Choices that preserve flexibility</h3>
            <ul>
              <li>Open or documented integrations</li>
              <li>Portable content and standard formats</li>
              <li>Maintainable, reviewable implementation</li>
              <li>Explicit third-party dependencies</li>
              <li>No unnecessary vendor lock-in</li>
            </ul>
          </article>
          <article>
            <span>Operational transfer</span>
            <h3>Knowledge that survives launch</h3>
            <ul>
              <li>Role-based staff training</li>
              <li>Publishing and escalation procedures</li>
              <li>Architecture and integration maps</li>
              <li>Release, backup, and recovery guidance</li>
              <li>Prioritized maintenance roadmap</li>
            </ul>
          </article>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="investment">
        <SectionHeading
          number="15"
          eyebrow="Investment"
          id="investment"
          title="Separate professional services from platform costs."
        >
          Pricing remains open until scope, current systems, migration volume,
          procurement constraints, platform requirements, and support
          expectations are confirmed.
        </SectionHeading>

        <div className={styles.investmentSummary}>
          <p>
            <strong>Alpath professional services</strong>
            <span>
              Strategy, design, architecture, implementation, migration,
              training, and support as scoped.
            </span>
          </p>
          <p>
            <strong>Third-party costs</strong>
            <span>
              Platforms, licensing, hosting, specialist products, and external
              services shown separately.
            </span>
          </p>
        </div>
        <div
          className={styles.investmentTable}
          role="table"
          aria-label="Investment structure"
        >
          <div className={styles.tableHeader} role="row">
            <span role="columnheader">Cost category</span>
            <span role="columnheader">Amount</span>
            <span role="columnheader">Cost type</span>
          </div>
          {investmentRows.map((row) => (
            <div className={styles.tableRow} role="row" key={row[0]}>
              {row.map((cell, index) => (
                <span
                  className={index === 1 ? styles.toConfirm : undefined}
                  role="cell"
                  key={cell}
                >
                  {cell}
                </span>
              ))}
            </div>
          ))}
        </div>
        <p className={styles.proposalNote}>
          Any allowances, optional services, taxes, travel, payment schedule,
          and contract assumptions are [TO CONFIRM].
        </p>
      </section>

      <section className={styles.close} id="close">
        <div className={styles.closeTopline}>
          <AlpathMark />
          <span>16 · Closing</span>
        </div>
        <div className={styles.closeTitle}>
          <p className={styles.eyebrow}>The proposed outcome</p>
          <h2>
            One connected system. Easier for staff. Easier for the public.
          </h2>
        </div>
        <div className={styles.outcomes}>
          <article>
            <span>01</span>
            <h3>Better public service</h3>
            <p>
              Clear, accessible paths to trusted information and District
              services.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Lower administrative friction</h3>
            <p>
              Controlled workflows, fewer manual handoffs, and information
              maintained with clear ownership.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>A maintainable foundation</h3>
            <p>
              Documented architecture that can evolve without another wholesale
              rebuild.
            </p>
          </article>
        </div>
        <footer className={styles.closeFooter}>
          <div>
            <p>Alpath Engineering</p>
            <span>Digital systems &amp; experience engineering</span>
          </div>
          <div>
            <a href="mailto:matt@alpathengineering.com">
              matt@alpathengineering.com
            </a>
            <a href="tel:+13604478757">(360) 447-8757</a>
            <a href="https://alpath.engineering">alpath.engineering</a>
          </div>
          <a className={styles.backToTop} href="#top">
            Back to top ↑
          </a>
        </footer>
      </section>
    </main>
  );
}
