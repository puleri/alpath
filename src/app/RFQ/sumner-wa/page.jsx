import { cookies } from 'next/headers';
import { isProposalAccessCookieValid, PROPOSAL_ACCESS_COOKIE } from './access';
import ProposalPasswordGate from './ProposalPasswordGate';
import ProposalDownloadMenu from '../whidbey-camano-islands/ProposalDownloadMenu';
import ProposalScrollReset from '../whidbey-camano-islands/ProposalScrollReset';
import styles from '../whidbey-camano-islands/page.module.css';
import sumnerStyles from './page.module.css';
import SumnerPrintProposal from './SumnerPrintProposal';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'City of Sumner Website RFQ Response | Alpath Engineering',
  description:
    'Alpath Engineering’s statement of qualifications for the City of Sumner’s new, accessible municipal website.',
  alternates: {
    canonical: '/RFQ/sumner-wa',
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-image-preview': 'none',
      'max-snippet': 0,
      'max-video-preview': 0,
    },
  },
  openGraph: {
    title: 'An accessible digital front door for the City of Sumner',
    description:
      'Alpath Engineering’s qualifications for accessible service design, CMS implementation, content migration, security, training, and post-launch support.',
    url: '/RFQ/sumner-wa',
    type: 'article',
  },
};

const capabilities = [
  {
    title: 'Website planning & accessibility',
    body: 'Learn what residents and staff need · Organize services clearly · Design for phones, keyboards, screen readers, and different levels of vision',
  },
  {
    title: 'Content management & training',
    body: 'Choose and configure the right content management system · Give staff safe editing tools · Move content · Document the system · Train the team',
  },
  {
    title: 'Website development & connections',
    body: 'Build pages, search, and online forms · Connect outside services · Measure use · Test the website · Manage launch',
  },
  {
    title: 'Security & dependable operation',
    body: 'Limit staff access by role · Keep software updated · Monitor performance · Maintain backups · Plan for recovery',
  },
];

const work = [
  {
    name: 'Lockhart Suver',
    status: '2026 - Ongoing',
    url: 'https://www.lockhartsuver.com/',
    displayUrl: 'lockhartsuver.com',
    phone: '206-659-8490',
    phoneHref: '+12066598490',
    metric: '74 → 96',
    metricLabel: 'Google accessibility score',
    body: "Alpath moved a large WordPress website to a modern platform without changing the experience its users already knew. During the move, Matt improved the site's Google accessibility score from 74 to 96 and built a tool to recover the full image library when the old system could not export it cleanly.",
    involvement:
      'Matt handled all Alpath work for this project. He planned the move, built the new site and recovery tool, tested the work, managed launch, improved accessibility, and continues to support the website.',
    designerInvolvement:
      'Anthony was not involved in this reference project. Alpath only recently brought him into a separate project that remains in progress.',
  },
  {
    name: 'Lennon Window Cleaning',
    status: '2023 - Ongoing',
    url: 'https://lennonwc.com/',
    displayUrl: 'lennonwc.com',
    phone: '(425) 328-8827',
    phoneHref: '+14253288827',
    metric: '300+',
    metricLabel: 'Leads in year one',
    body: 'Alpath rebuilt this Greater Seattle service website so customers could understand the services, find the right information on any device, and request an estimate with fewer steps.',
    involvement:
      'Matt handled all Alpath work for this project. He planned the site, organized the information, designed and built the pages, set up measurement, managed launch, and continues to improve the experience.',
    designerInvolvement:
      'Anthony was not involved in this reference project. Alpath only recently brought him into a separate project that remains in progress.',
  },
  {
    name: 'Distinctive Glass',
    status: '2025 - Ongoing',
    url: 'https://www.distinctiveglass.com/',
    displayUrl: 'distinctiveglass.com',
    phone: '206-659-8490',
    phoneHref: '+12066598490',
    metric: 'Continuity',
    metricLabel: 'Dependable website support',
    body: 'When the previous developer was no longer available, Alpath learned the existing website, documented how it worked, completed the urgent updates, and gave the client a dependable path for future changes without forcing an unnecessary rebuild.',
    involvement:
      'Matt handled all Alpath work for this project. He learned the existing system, diagnosed problems, completed updates, reviewed each release with the client, and provides ongoing support.',
    designerInvolvement:
      'Anthony was not involved in this reference project. Alpath only recently brought him into a separate project that remains in progress.',
  },
];

const standards = [
  {
    title: 'WCAG 2.1 AA',
    body: 'Use the City’s required accessibility standard to guide page design, content, forms, interactions, testing, and launch approval.',
  },
  {
    title: 'ADA Title II',
    body: 'Treat equal access as a requirement throughout the project, rather than checking it only after the website is built.',
  },
  {
    title: 'Section 508',
    body: 'Connect the applicable requirements to page templates, staff guidance, testing, and a clear record of any fixes.',
  },
  {
    title: 'Washington OCIO',
    body: 'Include Washington State accessibility policies in the project checklist and verify them before major approvals.',
  },
];

const testing = [
  {
    title: 'Automated checks',
    body: 'Run repeatable scans while the site is being built and before launch to catch code, structure, labeling, and color-contrast problems.',
  },
  {
    title: 'Keyboard & visual checks',
    body: 'Make sure people can move through the site without a mouse, see where they are, zoom the page, use it on different screens, and recover from errors.',
  },
  {
    title: 'Screen-reader checks',
    body: 'Test navigation, headings, forms, tables, messages, and common resident tasks with screen-reading software.',
  },
  {
    title: 'Content & document checks',
    body: 'Review headings, links, image descriptions, reading order, page templates, and important downloadable documents.',
  },
];

const cms = [
  {
    title: 'Choose the right platform',
    body: 'Compare options based on accessibility, security, ease of editing, connections to City services, long-term support, ownership, and total cost.',
  },
  {
    title: 'Organize City information',
    body: 'Create clear, reusable page types for departments, services, news, meetings, documents, alerts, contacts, facilities, and common questions.',
  },
  {
    title: 'Make publishing safer',
    body: 'Give each staff member the right level of access, provide dependable page layouts, define review responsibilities, and make accessible choices easier.',
  },
  {
    title: 'Move content & prepare staff',
    body: 'Decide what to keep, rewrite, or archive; move content in manageable groups; preserve old links; train staff; and provide clear instructions.',
  },
];

const phases = [
  {
    title: 'Learn what is needed',
    body: 'Weeks 1-4 · Meet with City staff, review the current website and its use, identify accessibility and technical problems, and agree on priorities and risks.',
  },
  {
    title: 'Organize services clearly',
    body: 'Weeks 5-8 · Group information around the tasks residents need to complete, then plan navigation, search, page types, and connections to other City services.',
  },
  {
    title: 'Design & test the experience',
    body: 'Weeks 9-14 · Create an accessible visual direction and working page examples, gather feedback, and agree on what must be true before the design is approved.',
  },
  {
    title: 'Build the website',
    body: 'Weeks 15-26 · Configure the content management system, build page layouts and forms, connect outside services, set staff access, and improve speed and reliability.',
  },
  {
    title: 'Move content & verify the work',
    body: 'Weeks 27-38 · Move content, preserve old links, involve staff in review, complete automated and hands-on accessibility checks, test security and capacity, and train editors.',
  },
  {
    title: 'Launch & support staff',
    body: 'Weeks 39-52 · Launch in a controlled way, resolve issues quickly, provide documentation, review the live website, plan improvements, and discuss ongoing maintenance options.',
  },
];

const deliveryControls = [
  {
    title: 'Keep the schedule visible',
    body: 'Use clear milestones, owners, and weekly updates. Raise delays early when a decision, City input, or outside provider affects the schedule.',
  },
  {
    title: 'Control costs before work changes',
    body: 'Prioritize the work, write down assumptions, explain the cost and schedule effect of a requested change before approval, and consider long-term operating costs.',
  },
  {
    title: 'Agree on quality before launch',
    body: 'Define what “done” means, review accessibility and content, test common browsers and devices, document the work, and prepare launch and recovery checklists.',
  },
];

const security = [
  {
    title: 'Reliable hosting',
    body: 'Use a secure, monitored hosting setup with backups, recovery steps, speed targets, and availability appropriate for important City information and services.',
  },
  {
    title: 'Safe staff access',
    body: 'Give staff only the access they need, protect administrator accounts, remove access when roles change, and use multifactor sign-in where supported.',
  },
  {
    title: 'Software updates',
    body: 'Assign responsibility for updates, review third-party software regularly, test changes before release, respond to security concerns, and keep a current software list.',
  },
  {
    title: 'Forms & resident information',
    body: 'Collect only what is needed, protect information while it is sent, define how long it is kept, limit spam and abuse, and review every outside service carefully.',
  },
];

const assurances = [
  {
    title: 'Named team continuity',
    body: 'Matt Puleri is the proposed project lead and Anthony Damico is the named graphic design contractor. Neither will be replaced without the City’s prior approval.',
  },
  {
    title: 'Contractor transparency',
    body: 'Anthony was recently brought on for a separate project that remains in progress and is available for related graphic design work. Any additional specialist would be disclosed before assignment.',
  },
  {
    title: 'Documentation ownership',
    body: 'The City receives the agreed project records, page and content guidance, operating instructions, design files, and website materials included in the final scope.',
  },
];

const references = [
  {
    name: 'Brad Kulkin',
    organization: 'Secure Back Office',
    role: 'Consultant',
    email: 'brad@securebackoffice.com',
    phone: '206-659-8490',
    phoneHref: '+12066598490',
  },
  {
    name: 'Michael Neese',
    organization: 'Pro3 Accounting',
    role: 'Operator',
    email: 'michael@pro3accounting.com',
    phone: '319-594-8979',
    phoneHref: '+13195948979',
  },
  {
    name: 'Supo Techagumthorn',
    organization: 'Washington Small Business Development Center',
    role: 'Certified Business Advisor',
    email: 'supo@wsu.edu',
    phone: '425-331-9775',
    phoneHref: '+14253319775',
  },
];

function NumberedHeading({ number, eyebrow, title, id }) {
  return (
    <header className={styles.sectionHeading}>
      <div>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 id={id}>{title}</h2>
      </div>
      <span aria-hidden="true">{number}</span>
    </header>
  );
}

function DetailGrid({ items, columns = 3 }) {
  return (
    <div className={styles.detailGrid} style={{ '--detail-columns': columns }}>
      {items.map((item, index) => (
        <article key={item.title}>
          <p className={styles.itemNumber} aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </p>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}

function SumnerWordmark() {
  return (
    <div
      className={`${styles.whidbeyPartner} ${sumnerStyles.sumnerPartner}`}
      aria-label="City of Sumner, Washington"
    >
      <span className={sumnerStyles.cityMark} aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className={sumnerStyles.cityName}>
        <small>City of</small>
        <strong>Sumner</strong>
        <small>Washington</small>
      </span>
    </div>
  );
}

export default async function SumnerRfqPage() {
  const cookieStore = await cookies();
  const accessCookie = cookieStore.get(PROPOSAL_ACCESS_COOKIE)?.value;

  if (!isProposalAccessCookieValid(accessCookie)) {
    return <ProposalPasswordGate />;
  }

  return (
    <main className={`${styles.page} ${sumnerStyles.sumnerPage}`}>
      <div className={sumnerStyles.screenProposal}>
        <ProposalScrollReset />

        <header className={`${styles.container} ${styles.hero}`}>
          <div className={styles.heroTopline}>
            <p>Statement of qualifications · Accessible City website</p>
            <div className={styles.heroActions}>
              <span className={styles.proposalStatus}>
                Private response · August 2026
              </span>
              <ProposalDownloadMenu
                buttonLabel="Share"
                downloadName="Alpath RFQ Response - City of Sumner.pdf"
                pdfLabel="Download PDF"
                pdfPath="/RFQ/alpath-rfq-response-sumner-wa.pdf?v=20260831-4"
              />
            </div>
          </div>

          <div
            className={styles.partnershipLockup}
            aria-label="Alpath Engineering in partnership with the City of Sumner"
          >
            <div className={styles.alpathPartner}>
              <img src="/alpath/sign.svg" alt="" />
              <p>
                <strong>Alpath</strong> Engineering
              </p>
            </div>
            <span className={styles.partnershipMark} aria-hidden="true">
              ×
            </span>
            <SumnerWordmark />
          </div>

          <div className={styles.heroContext}>
            <p>
              Prepared for
              <strong>City of Sumner · Communications Department</strong>
            </p>
            <p>
              Submitted by
              <strong>Alpath Engineering</strong>
            </p>
          </div>

          <div className={`${styles.heroClosing} ${sumnerStyles.heroClosing}`}>
            <h1>
              A practical, accessible digital front door for the people who
              live, work, visit, and do business in Sumner.
            </h1>
            <dl className={styles.heroMeta}>
              <div>
                <dt>Project lead</dt>
                <dd>Matt Puleri</dd>
              </div>
              <div>
                <dt>Term</dt>
                <dd>One year</dd>
              </div>
              <div>
                <dt>Scope</dt>
                <dd>Design · Build · Migrate · Train</dd>
              </div>
            </dl>
          </div>
        </header>

        <nav className={styles.index} aria-label="Statement sections">
          <div className={styles.container}>
            <p className={styles.eyebrow}>Response index</p>
            <ol>
              <li>
                <a href="#interest">
                  <span>01</span> Interest
                </a>
              </li>
              <li>
                <a href="#team">
                  <span>02</span> Firm &amp; team
                </a>
              </li>
              <li>
                <a href="#experience">
                  <span>03</span> Experience
                </a>
              </li>
              <li>
                <a href="#accessibility">
                  <span>04</span> Accessibility
                </a>
              </li>
              <li>
                <a href="#delivery">
                  <span>05</span> Delivery
                </a>
              </li>
              <li>
                <a href="#assurances">
                  <span>06</span> Assurances
                </a>
              </li>
            </ol>
          </div>
        </nav>

        <section
          className={`${styles.container} ${styles.letter}`}
          aria-labelledby="interest"
        >
          <NumberedHeading
            number="01"
            eyebrow="Letter of interest"
            title="A website that works for residents, and for the staff who maintain it."
            id="interest"
          />
          <div className={styles.readingLayout}>
            <p className={styles.salutation}>
              Dear Carmen Palmer and members of the City of Sumner Evaluation
              Committee,
            </p>
            <div className={styles.prose}>
              <p>
                Thank you for considering Alpath Engineering's qualifications
                for the design, development, and launch of a new, accessible
                City website.
              </p>
              <p>
                Alpath is qualified to plan, design, build, move, test, and
                support content-rich websites. Our reference projects show that
                we can simplify complicated information, migrate code without
                losing content, improve performance, and remain accountable
                after launch.
              </p>
              <p>
                We would build accessibility into the page layouts and editing
                tools staff use every day, so employees do not have to memorize
                every web standard before publishing useful information.
                Automated checks would catch common problems, hands-on testing
                would confirm that important tasks actually work, and training
                would help City staff protect that quality over time.
              </p>
              <p>
                We would welcome the opportunity to give Sumner a website that
                is easier for residents to use and easier for staff to maintain.
              </p>
              <p className={styles.signature}>
                Sincerely,
                <strong>Matt Puleri</strong>
                <span>Operator · Alpath Engineering</span>
              </p>
            </div>
          </div>
        </section>

        <section className={styles.summary} aria-labelledby="summary-heading">
          <div className={styles.container}>
            <p className={styles.eyebrow}>Executive summary</p>
            <div className={styles.summaryGrid}>
              <h2 id="summary-heading">
                Qualified to build it. Focused on making it useful.
              </h2>
              <div className={styles.prose}>
                <p>
                  <strong>
                    The goalposts move regularly where technology is
                    concerned.{' '}
                  </strong>
                  Matt has over 16k industry hours designing, building,
                  migrating, and supporting websites that people rely on. His
                  websites currently serve over 100k people each month. Anthony
                  Damico adds experienced graphic-design support when the
                  project calls for it.
                </p>
                <p>
                  <strong>How will that help Sumner?</strong> Residents will
                  have clearer paths to services and public information. Staff
                  will have page layouts and editing tools that make accessible
                  publishing easier. The City will have a secure, dependable
                  website, useful documentation, trained staff, and a partner
                  who remains responsible after launch.
                </p>
                <p>
                  We propose a one-year project that begins by listening to the
                  people who use and maintain the current website. We would then
                  organize the information, recommend the right content
                  management system, design and build the site, move the
                  content, test the work, train staff, launch carefully, and
                  provide post-launch support. The platform would be chosen
                  after discovery rather than assumed in advance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${styles.container} ${styles.section}`}
          aria-labelledby="team"
        >
          <NumberedHeading
            number="02"
            eyebrow="Firm & proposed team"
            title="Experience you can trace to the people doing the work."
            id="team"
          />
          <div className={styles.sectionIntro}>
            <p>
              Alpath Engineering is a Pacific Northwest digital consultancy that
              plans, designs, builds, improves, and supports websites. We bring
              website strategy, visual design, development, accessibility,
              measurement, and ongoing support together in one small team.
            </p>
            <p>
              For Sumner, that means fewer handoffs and direct access to the
              people responsible for the work. A question about content,
              accessibility, design, or technology can be resolved by the same
              team that will carry the decision through.
            </p>
          </div>
          <DetailGrid items={capabilities} columns={4} />

          <div className={sumnerStyles.teamGrid}>
            <article className={sumnerStyles.teamMember}>
              <figure className={sumnerStyles.memberPortrait}>
                <img
                  src="/people/matt/matt-on-grey.png"
                  alt="Matt Puleri, Operator at Alpath Engineering"
                />
                <figcaption>Proposed project lead</figcaption>
              </figure>
              <div className={sumnerStyles.memberCopy}>
                <p className={styles.eyebrow}>Key team member · 01 of 02</p>
                <h2>Matt Puleri</h2>
                <p className={sumnerStyles.role}>Operator · Project Lead</p>
                <p>
                  Matt would lead conversations with City staff, organize the
                  website and its services, recommend the content management
                  system, guide the design, build and test the site, oversee the
                  content move, train staff, manage launch, and provide support
                  afterward.
                </p>
                <p>
                  He has direct experience building accessible websites,
                  improving speed and reliability, moving sites between
                  platforms, solving problems in existing systems, and
                  supporting clients after the initial project is complete.
                </p>
              </div>
            </article>

            <article className={sumnerStyles.teamMember}>
              <figure
                className={`${sumnerStyles.memberPortrait} ${sumnerStyles.anthonyPortrait}`}
              >
                <img
                  src="/people/anthony/anthony-damico.jpg"
                  alt="Anthony Damico, senior digital designer"
                />
                <figcaption>Available graphic design contractor</figcaption>
              </figure>
              <div className={sumnerStyles.memberCopy}>
                <p className={styles.eyebrow}>Key team member · 02 of 02</p>
                <h2>Anthony Damico</h2>
                <p className={sumnerStyles.role}>
                  Senior Digital Designer · Contractor
                </p>
                <p>
                  Anthony is available as a contractor for related graphic
                  design work. He would support approved needs such as visual
                  assets, illustration, page graphics, or other design work that
                  benefits from a dedicated designer.
                </p>
                <p>
                  Anthony was recently brought on by Alpath for a separate
                  project that is still in progress. He did not participate in
                  any of the three reference projects included in this response.
                </p>
                <p>
                  He has served as Senior Digital Designer at 500 Degrees Studio
                  since 2019, following two years as a Junior Designer at Ibel
                  Agency. His experience includes web design and development,
                  branding, advertising and campaign design, motion graphics,
                  environmental and experiential design, packaging, and
                  illustration.
                </p>
                <p className={sumnerStyles.memberSkills}>
                  Graphic design · Animation · Figma · Marketing
                </p>
                <a
                  className={sumnerStyles.resumeLink}
                  href="/resumes/Anthony-Damico_Resume_Aug2026.pdf"
                  rel="noreferrer"
                  target="_blank"
                >
                  View Anthony's resume <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          </div>

          <aside
            className={`${styles.aiClarity} ${sumnerStyles.assuranceCallout}`}
          >
            <div>
              <p className={styles.eyebrow}>Team assurance</p>
            </div>
            <h3>Continuity is part of the commitment.</h3>
            <ul>
              <li>Matt Puleri remains the named project lead.</li>
              <li>
                Anthony Damico recently joined a separate project that remains
                in progress and is available for related graphic design work.
              </li>
              <li>
                Neither named team member, nor any later approved specialist,
                will be replaced without prior approval from the City.
              </li>
            </ul>
          </aside>
        </section>

        <section className={styles.approach} aria-labelledby="experience">
          <div className={styles.container}>
            <NumberedHeading
              number="03"
              eyebrow="Relevant experience"
              title="Three projects show how we solve similar website problems."
              id="experience"
            />
            <div className={styles.sectionIntro}>
              <p>
                These projects were undertaken within the past five years. They
                show that Alpath can move a large website safely, make
                information easier to find, improve performance, learn an
                unfamiliar system, communicate clearly, and continue supporting
                the client after launch.
              </p>
              <p>
                Matt Puleri handled all Alpath work for each reference project
                below. Anthony Damico had no involvement in these engagements;
                he was only recently brought on for a separate project that is
                still in progress. That distinction is stated within every
                project entry.
              </p>
            </div>

            <div className={styles.workGrid}>
              {work.map((project, index) => (
                <article key={project.name}>
                  <div className={styles.workTopline}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <span>{project.status}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <a
                    className={styles.workUrl}
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.displayUrl}
                  </a>
                  <p>{project.body}</p>
                  <p className={styles.metric}>
                    <strong>{project.metric}</strong>
                    <span>{project.metricLabel}</span>
                  </p>
                  <p className={styles.workTags}>
                    <strong>Matt Puleri</strong>
                    <br />
                    {project.involvement}
                    <br />
                    <br />
                    <strong>Anthony Damico</strong>
                    <br />
                    {project.designerInvolvement}
                  </p>
                  <a
                    className={sumnerStyles.projectPhone}
                    href={`tel:${project.phoneHref}`}
                  >
                    {project.phone}
                  </a>
                </article>
              ))}
            </div>

            <aside className={styles.tourismExperience}>
              <p className={styles.eyebrow}>How this helps Sumner</p>
              <p>
                These are private-sector projects, not municipal websites, and
                we do not present them otherwise. They are relevant because
                Sumner needs the same core abilities: organize a large amount of
                information, move it without losing important content, help
                people reach the right next step, give staff a maintainable
                system, and provide dependable support. We would apply those
                abilities while following the City's accessibility, security,
                public-records, and approval requirements from the beginning.
              </p>
            </aside>
          </div>
        </section>

        <section
          className={`${styles.container} ${styles.prioritySection}`}
          aria-labelledby="accessibility"
        >
          <NumberedHeading
            number="04"
            eyebrow="Accessibility & CMS"
            title="Make accessible publishing the normal way of working."
            id="accessibility"
          />
          <div className={styles.sectionIntro}>
            <p>
              Alpath would turn each required accessibility standard into a
              clear project checklist. That checklist would connect the rules to
              page designs, staff editing guidance, testing, fixes, and launch
              approval.
            </p>
            <p>
              Accessibility depends on both the website and the content added
              later. We would give staff reliable page layouts, clear
              instructions, and a practical review process so the site can
              remain accessible after launch.
            </p>
          </div>

          <DetailGrid items={standards} columns={4} />

          <div className={styles.subsectionHeading}>
            <p className={styles.eyebrow}>Audit & remediation</p>
            <h2>Software finds patterns. People confirm the experience.</h2>
          </div>
          <DetailGrid items={testing} columns={4} />

          <aside
            className={`${styles.aiClarity} ${sumnerStyles.acceptanceCallout}`}
          >
            <div>
              <p className={styles.eyebrow}>Acceptance rule</p>
            </div>
            <h3>A passing scan is not enough to approve launch.</h3>
            <ul>
              <li>Representative tasks are completed using only a keyboard.</li>
              <li>Core templates and forms receive screen-reader review.</li>
              <li>
                Each problem has a clear priority, owner, proof, and follow-up
                check.
              </li>
              <li>
                Any unresolved issue is documented with its effect on users and
                a plan to fix it.
              </li>
            </ul>
          </aside>

          <div className={styles.subsectionHeading}>
            <p className={styles.eyebrow}>Maintainable CMS</p>
            <h2>
              Help staff publish confidently without memorizing web standards.
            </h2>
          </div>
          <DetailGrid items={cms} columns={4} />
        </section>

        <section className={styles.measurement} aria-labelledby="delivery">
          <div className={styles.container}>
            <NumberedHeading
              number="05"
              eyebrow="Delivery approach"
              title="A one-year plan with clear progress and responsibilities."
              id="delivery"
            />
            <div className={styles.sectionIntro}>
              <p>
                The schedule below is a starting point. We would confirm it with
                City staff after the first phase, then use simple milestones,
                named owners, and regular reviews so everyone can see what is
                finished, what is next, and what needs a decision.
              </p>
              <p>
                Content migration and training would begin before the website is
                complete. Staff would use the real editing tools early, allowing
                questions and accessibility improvements to be addressed while
                changes are easier and less expensive.
              </p>
            </div>
            <DetailGrid items={phases} />

            <div className={styles.subsectionHeading}>
              <p className={styles.eyebrow}>Project controls</p>
              <h2>Quality, schedule, and cost stay visible.</h2>
            </div>
            <DetailGrid items={deliveryControls} />

            <div className={styles.subsectionHeading}>
              <p className={styles.eyebrow}>Public-sector security</p>
              <h2>
                Keep the website secure, available, and practical to maintain.
              </h2>
            </div>
            <DetailGrid items={security} columns={4} />

            <div className={styles.innovation}>
              <div>
                <p className={styles.eyebrow}>Communication & documentation</p>
                <h3>A clear record of what changed, why, and who owns it.</h3>
              </div>
              <div>
                <p>
                  City staff would receive short, useful updates that explain
                  what was completed, what decisions are needed, what risks
                  could affect the schedule or cost, and what comes next. We
                  would also provide accessibility results, training materials,
                  operating instructions, and a prioritized list of post-launch
                  improvements. Routine questions would generally receive a
                  response within one business day. Website outages, security
                  concerns, and major service failures would receive priority
                  attention as soon as practicable.
                </p>
                <ul>
                  <li>Weekly progress updates while work is active</li>
                  <li>Reviews at each major stage before moving forward</li>
                  <li>
                    A shared list of issues, risks, decisions, and
                    responsibilities
                  </li>
                  <li>
                    Recorded training and written instructions staff can update
                  </li>
                  <li>
                    Written launch, recovery, and post-launch support steps
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.retainer} aria-labelledby="assurances">
          <div className={styles.container}>
            <NumberedHeading
              number="06"
              eyebrow="Assurances & response alignment"
              title="The commitments behind the qualifications."
              id="assurances"
            />
            <div className={styles.retainerIntro}>
              <p>
                We understand the City expects the project to last one year and
                may choose to develop a maintenance plan afterward.
              </p>
              <p>
                Because this is a qualifications request, this response does not
                assume a fee. Scope and commercial terms would be agreed during
                contract negotiations.
              </p>
              <dl>
                <dt>Proposed team</dt>
                <dd>2 named members</dd>
              </dl>
            </div>
            <DetailGrid items={assurances} />

            <div className={styles.assumptions}>
              <div>
                <p className={styles.eyebrow}>RFQ alignment</p>
                <h3>The requested information is included.</h3>
              </div>
              <ul>
                <li>Introductory letter stating Alpath’s interest.</li>
                <li>Resume-style profiles for both proposed team members.</li>
                <li>Three recent projects of comparable digital complexity.</li>
                <li>
                  Work history for each team member whose resume is included,
                  with a clear note when a person was not involved.
                </li>
                <li>
                  Professional references with direct contact information.
                </li>
                <li>Explicit team-replacement and subconsultant assurance.</li>
                <li>
                  Accessibility, CMS, security, schedule, cost-control,
                  documentation, training, and post-launch approach.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          className={`${styles.container} ${styles.why}`}
          aria-labelledby="why-heading"
        >
          <p className={styles.eyebrow}>Why Alpath</p>
          <div className={styles.whyGrid}>
            <h2 id="why-heading">Practical help for Sumner</h2>
            <div className={styles.prose}>
              <p>
                Alpath is qualified because Matt has personally taken websites
                from planning through launch and ongoing support. The reference
                projects show he can organize complex content, move a site
                safely, improve how people complete tasks, solve problems in
                systems he did not build, and remain accountable after launch.
              </p>
              <p>
                That breadth helps Sumner because decisions do not disappear
                between specialists. The same project lead can connect a
                resident need, an accessibility concern, a staff workflow, and
                the technical work required to solve them. Anthony adds focused
                graphic-design support when it is useful.
              </p>
              <p>
                Every Alpath client is a repeat client. We see that as evidence
                that clients value both the work and the working relationship.
                Our goal would be to earn the City’s trust throughout the first
                year and leave Sumner with a website and team that are stronger
                at the end of the engagement.
              </p>
            </div>
          </div>
          <aside className={sumnerStyles.competitionNote}>
            <div>
              <h3>Finally,</h3>
            </div>
            <div className={sumnerStyles.competitionNoteCopy}>
              <p>
                You are comparing several responses to the same challenge and
                likely have the great problem of picking between excellent
                options. As mentioned before, it is a badge of honor we wear at
                Alpath that{' '}
                <strong>all of our clients all repeat-clients.</strong> Gaining
                your trust would mean that we have the chance to earn your
                business again over the next year. We are confident we could do
                so.
              </p>
              <p>Thank you</p>
            </div>
          </aside>
        </section>

        <section
          className={styles.references}
          aria-labelledby="references-heading"
          id="references"
        >
          <div className={styles.container}>
            <div className={styles.subsectionHeading}>
              <p className={styles.eyebrow}>Professional references</p>
              <h2 id="references-heading">People who know our work.</h2>
            </div>
            <div className={styles.referenceGrid}>
              {references.map((reference, index) => (
                <article key={reference.email}>
                  <p className={styles.itemNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3>{reference.name}</h3>
                  <p>
                    {reference.organization}
                    <br />
                    {reference.role}
                  </p>
                  <a href={`mailto:${reference.email}`}>{reference.email}</a>
                  <a href={`tel:${reference.phoneHref}`}>{reference.phone}</a>
                </article>
              ))}
            </div>
            <div className={styles.closingNote}>
              <img src="/alpath/sign.svg" alt="" />
              <p>Thank you for your consideration.</p>
              <span>Alpath Engineering · August 2026</span>
            </div>
          </div>
        </section>
      </div>

      <SumnerPrintProposal
        work={work}
        standards={standards}
        testing={testing}
        cms={cms}
        phases={phases}
        deliveryControls={deliveryControls}
        security={security}
        references={references}
      />
    </main>
  );
}
