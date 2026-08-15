import Link from 'next/link';
import styles from './page.module.css';
import ProposalDownloadMenu from './ProposalDownloadMenu';

export const metadata = {
  title: 'Whidbey & Camano Islands RFQ Response | Alpath Engineering',
  description:
    'Alpath Engineering’s response for Digital Services Specialist support for Whidbey & Camano Islands Tourism.',
  alternates: {
    canonical: '/RFQ/whidbey-camano-islands',
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
    title: 'A digital foundation for Whidbey & Camano Islands',
    description:
      'Alpath Engineering’s proposal for dependable web stewardship, visitor experience, search visibility, and continuous optimization.',
    url: '/RFQ/whidbey-camano-islands',
    type: 'article',
    images: [
      {
        url: '/RFQ/whidbey-camano-islands-og.png',
        width: 1731,
        height: 909,
        alt: 'A dependable digital foundation for Whidbey and Camano Islands',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A digital foundation for Whidbey & Camano Islands',
    description:
      'Alpath Engineering’s response for dependable web stewardship, search visibility, and continuous optimization.',
    images: ['/RFQ/whidbey-camano-islands-og.png'],
  },
};

const capabilities = [
  {
    title: 'Website engineering',
    body: 'Website development and ongoing management, CMS administration, HTML, CSS, JavaScript, React, Next.js, PHP, integrations, security, deployment, and technical troubleshooting.',
  },
  {
    title: 'Search & visibility',
    body: 'Technical SEO, site architecture, local search, structured data and Schema.org implementation, plus AI Search Visibility including AEO, GEO, and LLMO.',
  },
  {
    title: 'Experience & performance',
    body: 'User experience, accessibility, responsive design, Core Web Vitals, visitor-path analysis, conversion opportunities, and website performance optimization.',
  },
  {
    title: 'Measurement & emerging technology',
    body: 'Google Analytics, Search Console, performance monitoring, reporting, automation, and evaluation of emerging AI and search technologies.',
  },
];

const work = [
  {
    name: 'Lockhart Suver',
    status: 'Completed 2026',
    url: 'https://www.lockhartsuver.com/',
    displayUrl: 'lockhartsuver.com',
    metric: '74 → 99',
    metricLabel: 'Google Lighthouse performance',
    body: 'Alpath migrated the Seattle-based builder from WordPress to a modern Next.js platform while preserving the existing user experience. The work included content and asset migration, custom development, optimization, deployment, testing, and long-term technical ownership.',
    capabilities:
      'Website migration · Performance optimization · Responsive development · Technical troubleshooting · CMS transition · SEO preservation · Deployment',
  },
  {
    name: 'Lennon Window Cleaning',
    status: 'Completed 2023',
    url: 'https://lennonwc.com/',
    displayUrl: 'lennonwc.com',
    metric: '300+',
    metricLabel: 'Leads in year one',
    body: 'Alpath rebuilt the digital presence of a new Greater Seattle service business around local search behavior, simplified navigation, clearer services, and a lower-friction estimate process.',
    capabilities:
      'Local SEO · Web strategy · UX · Conversion optimization · Analytics · Content architecture · Branding',
  },
  {
    name: 'Distinctive Glass',
    status: 'Completed 2025',
    url: 'https://www.distinctiveglass.com/',
    displayUrl: 'distinctiveglass.com',
    metric: 'Backfilling',
    metricLabel: 'Digital stewardship',
    body: 'Alpath stepped into an existing website after the previous developer was no longer available, learned the system, addressed immediate priorities, and became a dependable technical resource.',
    capabilities:
      'Existing-site onboarding · Website maintenance · Troubleshooting · Content updates · Client communication',
  },
];

const stewardship = [
  {
    title: 'Platform health',
    body: 'CMS and plugin management · Security monitoring · Backups and recovery · Broken links and technical errors · Hosting and integrations',
  },
  {
    title: 'Performance & accessibility',
    body: 'Core Web Vitals · Mobile responsiveness · Accessibility · Browser and device testing · Site speed and performance',
  },
  {
    title: 'Development & deployment',
    body: 'Routine development · Feature implementation · Testing · Deployment · Technical troubleshooting',
  },
];

const visitorExperience = [
  {
    title: 'Website flow',
    body: 'Navigation and information architecture · Internal linking · Related-content pathways · Itinerary discovery · Visitor resources',
  },
  {
    title: 'Seasons & events',
    body: 'Landing pages · Calls to action · Event and seasonal experiences · High-intent visitor actions',
  },
  {
    title: 'Usability',
    body: 'Mobile experience · Accessibility · Clear pathways from inspiration to planning and visitor information',
  },
];

const searchDisciplines = [
  {
    title: 'Technical search',
    body: 'Crawlability and indexation · Metadata · Canonicalization · Sitemaps · Redirects · Internal links · Page performance',
  },
  {
    title: 'Local & destination search',
    body: 'Geographic relevance · Destination and activity-based queries · Seasonal search behavior · Event opportunities · Local discovery',
  },
  {
    title: 'Structured information',
    body: 'Schema and structured data for destinations · Events · Attractions · Lodging · Organizations · Articles · FAQs',
  },
  {
    title: 'AI search visibility',
    body: 'Entity clarity · Geographic relationships · Audience relevance · Seasonal availability · Community differentiation · AI discovery monitoring',
  },
];

const measurement = [
  {
    title: 'Search & discovery',
    body: 'Organic search visibility · Search-query performance · AI and referral traffic · Destination discovery',
  },
  {
    title: 'Visitor behavior',
    body: 'Visitor engagement · High-intent actions · Conversion paths · Landing-page behavior',
  },
  {
    title: 'Campaign performance',
    body: 'Email engagement · Referral sources · Campaign landing pages · QR, social, and partner traffic where appropriate',
  },
];

const retainerCoverage = [
  {
    title: 'Website',
    body: 'Management · CMS administration · Development · Performance · Accessibility · Testing · Deployment',
  },
  {
    title: 'Visibility',
    body: 'SEO · AEO/GEO · Structured data · Search Console · AI-search optimization',
  },
  {
    title: 'Measurement',
    body: 'Analytics · Reporting · Campaign tracking · Visitor-path analysis',
  },
  {
    title: 'Support',
    body: 'Technical troubleshooting · Email implementation · Monthly coordination · Emerging-technology evaluation',
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

export default function WhidbeyCamanoRfqPage() {
  return (
    <main className={styles.page}>
      <header className={`${styles.container} ${styles.hero}`}>
        <div className={styles.heroTopline}>
          <p>RFQ response · Digital Services Specialist</p>
          <div className={styles.heroActions}>
            <span className={styles.proposalStatus}>
              Private proposal · August 2026
            </span>
            <ProposalDownloadMenu />
          </div>
        </div>

        <div
          className={styles.partnershipLockup}
          aria-label="Alpath Engineering in partnership with Whidbey and Camano Islands Tourism"
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
          <div className={styles.whidbeyPartner}>
            <img
              src="/RFQ/whidbey-camano-logo.png"
              alt="Whidbey and Camano Islands Tourism"
            />
          </div>
        </div>

        <div className={styles.heroContext}>
          <p>
            Prepared for
            <strong>Whidbey &amp; Camano Islands Tourism Program</strong>
          </p>
          <p>
            Submitted by
            <strong>Alpath Engineering</strong>
          </p>
        </div>

        <div className={styles.heroClosing}>
          <dl className={styles.heroMeta}>
            <div>
              <dt>Operator</dt>
              <dd>Matt Puleri</dd>
            </div>
            <div>
              <dt>Submitted</dt>
              <dd>August 2026</dd>
            </div>
            <div>
              <dt>Engagement</dt>
              <dd>Digital Services Specialist</dd>
            </div>
          </dl>
        </div>
      </header>

      <nav className={styles.index} aria-label="Proposal sections">
        <div className={styles.container}>
          <p className={styles.eyebrow}>Response index</p>
          <ol>
            <li>
              <a href="#interest">
                <span>01</span> Interest
              </a>
            </li>
            <li>
              <a href="#qualifications">
                <span>02</span> Qualifications
              </a>
            </li>
            <li>
              <a href="#approach">
                <span>03</span> Approach
              </a>
            </li>
            <li>
              <a href="#measurement">
                <span>04</span> Measurement
              </a>
            </li>
            <li>
              <a href="#island-county">
                <span>05</span> Island County
              </a>
            </li>
            <li>
              <a href="#retainer">
                <span>06</span> Retainer
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
          title="A technical partner who stays close to the visitor experience."
          id="interest"
        />
        <div className={styles.readingLayout}>
          <p className={styles.salutation}>
            Dear Lee Ann Mozes and the Whidbey &amp; Camano Islands Tourism
            Program,
          </p>
          <div className={styles.prose}>
            <p>
              Alpath Engineering is pleased to submit our qualifications for the
              Digital Services Specialist engagement.
            </p>
            <p>
              What interested us immediately is the breadth of the role: a
              digital partner who can keep the underlying platform healthy while
              continually improving how visitors discover, navigate, and engage
              with the destination.
            </p>
            <p>
              That intersection of{' '}
              <strong>
                web engineering, user experience, AI-search visibility,
                analytics, and emerging technology
              </strong>{' '}
              is where Alpath does its best work.
            </p>
            <p>
              We are a Pacific Northwest digital consultancy specializing in
              high-performance websites, technical modernization, search and
              AI-visibility optimization, analytics, and custom digital systems.
              Our work ranges from ongoing website stewardship to complex
              migrations and development projects, with an emphasis on creating
              digital experiences that are fast, understandable, measurable, and
              maintainable.
            </p>
            <p>
              We would be excited to work alongside the Tourism Program Manager
              and the program&apos;s content, creative, social, and
              public-relations partners to support that goal.
            </p>
            <p className={styles.signature}>
              Sincerely,
              <strong>Matt Puleri</strong>
              <span>Founder &amp; Operator · Alpath Engineering</span>
            </p>
          </div>
        </div>
      </section>

      <section className={styles.summary} aria-labelledby="summary-heading">
        <div className={styles.container}>
          <p className={styles.eyebrow}>Executive summary</p>
          <div className={styles.summaryGrid}>
            <h2 id="summary-heading">
              Dependable today. More useful with every iteration.
            </h2>
            <div className={styles.prose}>
              <p>
                Alpath proposes to serve as Whidbey &amp; Camano Islands
                Tourism&apos;s technical and digital-services partner,
                responsible for the ongoing health, development, performance,
                accessibility, analytics, SEO, AEO/GEO, and technical
                optimization of the Tourism Program&apos;s website and related
                digital systems.
              </p>
              <p>
                Our role would complement the program&apos;s existing content,
                creative, social-media, and public-relations partners. While
                those teams lead storytelling, photography, design, social
                publishing, and PR, Alpath would focus on digital
                implementation: building and maintaining pages, improving
                visitor pathways, supporting campaigns, strengthening
                traditional and AI-search visibility, configuring analytics, and
                ensuring the underlying technology remains dependable.
              </p>
              <p>
                The work centers on four priorities: website and technical
                stewardship, visitor experience and conversion, search and
                digital discovery, and measurement and continuous optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.container} ${styles.section}`}
        aria-labelledby="qualifications"
      >
        <NumberedHeading
          number="02"
          eyebrow="Qualifications & experience"
          title="Engineering depth, connected to the whole digital experience."
          id="qualifications"
        />
        <div className={styles.sectionIntro}>
          <p>
            Alpath combines software engineering expertise with web strategy,
            user experience, search optimization, branding, and digital
            marketing. Rather than treating these as separate disciplines, we
            use them together to improve the health, usefulness, and
            discoverability of digital experiences.
          </p>
          <p>
            Whether a problem requires development or configuration (i.e. a new
            feature, or a small fix to an existing system), we can investigate{' '}
            <em>and</em> implement the solution directly. Technical improvements
            are valuable when they make the visitor experience faster, easier to
            navigate, more discoverable, or more useful.
          </p>
        </div>
        <DetailGrid items={capabilities} columns={4} />

        <aside className={styles.tourismExperience}>
          <p className={styles.eyebrow}>
            Tourism &amp; destination-marketing relevance
          </p>
          <p>
            The three examples in this response are not tourism organizations.
            Their relevance lies in the same digital disciplines this engagement
            requires: local and intent-based search, clear journeys from
            discovery to action, campaign-ready pages, structured information,
            analytics, accessibility, performance, and dependable website
            stewardship. For Whidbey &amp; Camano Islands Tourism, Alpath would
            pair that experience with personal familiarity with Island County
            and close collaboration with the program&apos;s tourism, content,
            creative, social, and public-relations partners.
          </p>
        </aside>

        <div className={`${styles.subsectionHeading} ${styles.workHeading}`}>
          <p className={styles.eyebrow}>Relevant work</p>
          <h2>Proof in performance, discovery, and stewardship.</h2>
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
              <p className={styles.workTags}>{project.capabilities}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.approach} aria-labelledby="approach">
        <div className={styles.container}>
          <NumberedHeading
            number="03"
            eyebrow="Proposed approach"
            title="Clear ownership. Close collaboration."
            id="approach"
          />
          <div className={styles.sectionIntro}>
            <p>
              Alpath would take primary responsibility for the website&apos;s
              development, maintenance, performance, accessibility, analytics,
              SEO, AEO/GEO, and related technical systems.
            </p>
            <p>
              Content, creative, social-media, and public-relations partners
              would continue to lead original content creation, photography,
              graphic production, social publishing, and PR. Alpath would focus
              on implementing that work effectively across the Tourism
              Program&apos;s digital platforms.
            </p>
            <p>
              Website hosting, domain registration, HTTPS certificate health,
              security products, and other program-owned subscriptions would
              remain owned and paid for by the Tourism Program. Alpath would
              coordinate with those providers and administer or troubleshoot the
              technical environment as needed.
            </p>
          </div>

          <div className={styles.responsibilityGrid}>
            <article>
              <p className={styles.eyebrow}>Alpath leads</p>
              <h3>Website &amp; technical stewardship</h3>
              <p>
                Development, CMS administration, maintenance, performance,
                accessibility, security, integrations, testing, deployment,
                hosting coordination, and troubleshooting.
              </p>
              <h3>Search &amp; digital discovery</h3>
              <p>
                Technical SEO, local and destination search, structured data,
                AEO/GEO, AI-search visibility, and search-performance
                monitoring.
              </p>
              <h3>Measurement &amp; optimization</h3>
              <p>
                Analytics, Search Console, Tag Manager, visitor behavior,
                campaign measurement, reporting, and ongoing technical
                recommendations.
              </p>
            </article>
            <article>
              <p className={styles.eyebrow}>Alpath collaborates on</p>
              <h3>Visitor experience &amp; campaign implementation</h3>
              <p>
                Website architecture, navigation, internal linking, landing
                pages, calls to action, campaign implementation, email
                templates, visitor pathways, and conversion opportunities.
              </p>
            </article>
            <article>
              <p className={styles.eyebrow}>Program partners lead</p>
              <h3>Storytelling &amp; outreach</h3>
              <p>
                Original copywriting, photography, videography, primary graphic
                design, organic social-media management, public relations, and
                paid-media strategy unless separately requested.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        className={`${styles.container} ${styles.prioritySection}`}
        aria-labelledby="stewardship-heading"
      >
        <div className={styles.priorityHeader}>
          <span>01</span>
          <div>
            <p className={styles.eyebrow}>Priority one</p>
            <h2 id="stewardship-heading">
              Website &amp; technical stewardship
            </h2>
          </div>
        </div>
        <div className={styles.sectionIntro}>
          <p>
            The first responsibility is ensuring the tourism website remains
            dependable. During onboarding, Alpath would establish a technical
            baseline covering the health of the existing website and its
            supporting systems.
          </p>
          <p>
            Critical issues would be prioritized first, followed by an ongoing
            improvement backlog developed collaboratively with the Tourism
            Program Manager.
          </p>
        </div>
        <DetailGrid items={stewardship} />
      </section>

      <section
        className={`${styles.container} ${styles.prioritySection}`}
        aria-labelledby="visitor-heading"
      >
        <div className={styles.priorityHeader}>
          <span>02</span>
          <div>
            <p className={styles.eyebrow}>Priority two</p>
            <h2 id="visitor-heading">Visitor experience &amp; website flow</h2>
          </div>
        </div>
        <div className={styles.sectionIntro}>
          <p>
            Some visitors know exactly where they want to go. Others may arrive
            after searching for a hike, ferry trip, restaurant, weekend escape,
            event, scenic drive, or family activity without initially knowing
            much about Whidbey or Camano.
          </p>
          <p>
            We would work closely with the content and creative teams rather
            than duplicate their responsibilities. Their expertise creates the
            story; ours helps ensure it is easy to find, experience, and act
            upon online.
          </p>
        </div>
        <div className={styles.journey} aria-label="Visitor journey">
          <span>Discovery</span>
          <i aria-hidden="true">→</i>
          <span>Exploration</span>
          <i aria-hidden="true">→</i>
          <span>Planning</span>
          <i aria-hidden="true">→</i>
          <span>Visiting</span>
        </div>
        <DetailGrid items={visitorExperience} />
      </section>

      <section
        className={`${styles.container} ${styles.prioritySection}`}
        aria-labelledby="search-heading"
      >
        <div className={styles.priorityHeader}>
          <span>03</span>
          <div>
            <p className={styles.eyebrow}>Priority three</p>
            <h2 id="search-heading">Search &amp; digital discovery</h2>
          </div>
        </div>
        <div className={styles.sectionIntro}>
          <p>
            Traditional Google search remains important, but prospective
            visitors increasingly discover destinations through AI-generated
            answers, conversational search, map results, social platforms, and
            other recommendation systems.
          </p>
          <p>
            Alpath would manage traditional SEO and emerging AI discovery as one
            connected discipline.
          </p>
        </div>
        <DetailGrid items={searchDisciplines} columns={4} />
        <aside className={styles.aiClarity}>
          <div className={styles.aiClarityLabel}>
            <p className={styles.eyebrow}>AI search visibility</p>
            <Link
              href="/services/ai-search-visibility"
              className={styles.aiClarityLink}
            >
              This is where Alpath stands apart
              <span className="who-we-are-ai-badge" aria-hidden="true">
                <svg viewBox="0 0 40 40" focusable="false">
                  <path
                    className="who-we-are-ai-star-main"
                    d="M18 5c0 7.18 5.82 13 13 13-7.18 0-13 5.82-13 13 0-7.18-5.82-13-13-13 7.18 0 13-5.82 13-13Z"
                  />
                  <path
                    className="who-we-are-ai-star-small is-one"
                    d="M32 2c0 2.76 2.24 5 5 5-2.76 0-5 2.24-5 5 0-2.76-2.24-5-5-5 2.76 0 5-2.24 5-5Z"
                  />
                  <path
                    className="who-we-are-ai-star-small is-two"
                    d="M7 27c0 1.66 1.34 3 3 3-1.66 0-3 1.34-3 3 0-1.66-1.34-3-3-3 1.66 0 3-1.34 3-3Z"
                  />
                </svg>
              </span>
            </Link>
          </div>
          <h3>Structure important information for people and machines.</h3>
          <ul>
            <li>What Whidbey and Camano Islands offer</li>
            <li>Where experiences are located</li>
            <li>Who particular experiences are appropriate for</li>
            <li>When activities are available</li>
            <li>How destinations relate geographically</li>
            <li>What makes individual communities and attractions distinct</li>
          </ul>
        </aside>
      </section>

      <section className={styles.measurement} aria-labelledby="measurement">
        <div className={styles.container}>
          <div className={styles.priorityHeader}>
            <span>04</span>
            <div>
              <p className={styles.eyebrow}>Priority four</p>
              <h2 id="measurement">
                Measurement, optimization &amp; innovation
              </h2>
            </div>
          </div>
          <div className={styles.sectionIntro}>
            <p>
              During onboarding, we would review the existing measurement stack
              and determine what information is most useful to the Tourism
              Program. Tools may include Google Analytics, Google Search
              Console, Google Tag Manager, Microsoft Clarity, and appropriate
              search- and website-performance monitoring tools.
            </p>
            <p>
              Together with the Tourism Program Manager, we would establish a
              practical set of KPIs based on program priorities.
            </p>
          </div>
          <DetailGrid items={measurement} />
          <div className={styles.reportingQuestions}>
            <p className={styles.eyebrow}>Monthly reporting</p>
            <p>What happened?</p>
            <p>Why do we believe it happened?</p>
            <p>What should we do next?</p>
          </div>
          <div className={styles.innovation}>
            <div>
              <p className={styles.eyebrow}>Emerging technology with purpose</p>
              <h3>Evaluate new tools against practical outcomes.</h3>
            </div>
            <div>
              <p>
                Alpath stays current by reviewing official guidance and release
                notes from search, analytics, CMS, browser, accessibility, and
                security platforms; following changes to standards such as
                Schema.org and WCAG; and testing promising capabilities before
                recommending them. Findings that demonstrate practical value are
                documented and added to the shared improvement backlog.
              </p>
              <p>
                We would look beyond the immediate maintenance backlog and
                identify opportunities presented by AI search, automation,
                analytics, content workflows, CMS improvements, accessibility
                technology, performance tooling, and internal process
                improvements.
              </p>
              <ul>
                <li>Does it improve the visitor experience?</li>
                <li>Does it reduce unnecessary work?</li>
                <li>Can its impact be measured?</li>
                <li>
                  Does it introduce security, privacy, accessibility, or
                  maintenance concerns?
                </li>
                <li>Is it mature enough to justify implementation?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.islandCounty} aria-labelledby="island-county">
        <div className={styles.container}>
          <NumberedHeading
            number="05"
            eyebrow="Familiarity with Island County"
            title="A connection to the islands that is personal, not abstract."
            id="island-county"
          />
          <div className={styles.islandStory}>
            <figure className={styles.islandFigure}>
              <img
                src="/people/matt-family/whidbey-island.png"
                alt="Matt's wife and young son playing with a hose in the yard at Nana and Bapa's house on Whidbey Island"
              />
              <figcaption>
                Matt&apos;s wife and son playing at Nana and Bapa&apos;s house
                on Whidbey.
              </figcaption>
            </figure>
            <div className={styles.islandCopy}>
              <p>
                My wife&apos;s family has lived on Whidbey Island for 30 years.
                They built their home on 10.5 acres of land, and with it a
                community. My wife&apos;s grandparents lived on Camano.
              </p>
              <p>
                Between my wife and me are two distinct experiences of Island
                County: hers as someone who knows the islands as home and mine
                as a visitor who gradually developed a lasting connection to the
                place and its people.
              </p>
              <blockquote>
                I've experienced the best outcome of touring the islands.
                Finding home in them.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.container} ${styles.section}`}
        aria-labelledby="collaboration-heading"
      >
        <div className={styles.collaborationLead}>
          <div
            className={`${styles.subsectionHeading} ${styles.collaborationHeading}`}
          >
            <p className={styles.eyebrow}>Collaboration &amp; communication</p>
            <h2 id="collaboration-heading">
              A small senior team, directly involved.
            </h2>
          </div>
          <figure className={styles.collaborationPortrait}>
            <img
              src="/people/matt/matt-on-grey.png"
              alt="Matt Puleri, founder and principal engineer at Alpath Engineering"
            />
            <figcaption>Matt Puleri</figcaption>
          </figure>
        </div>
        <div className={styles.sectionIntro}>
          <p>
            The people responsible for strategy are directly involved in
            implementation, which minimizes handoffs and makes it easier to move
            between technical questions, marketing questions, and
            implementation.
          </p>
          <p>
            Routine communication would generally receive a response within one
            business day. Urgent website issues affecting availability,
            security, or major visitor functionality would receive priority
            response as soon as practicable.
          </p>
        </div>
        <DetailGrid
          items={[
            {
              title: 'Planning',
              body: 'Monthly planning meetings · Shared prioritization · Ongoing improvement backlog',
            },
            {
              title: 'Collaboration',
              body: 'Regular coordination with the Tourism Program Manager · Collaboration with content, social, creative, and PR partners · Project-specific meetings as needed',
            },
            {
              title: 'Responsiveness',
              body: 'Routine response within one business day · Priority response for issues affecting availability, security, or major visitor functionality',
            },
          ]}
        />
      </section>

      <section className={styles.retainer} aria-labelledby="retainer">
        <div className={styles.container}>
          <NumberedHeading
            number="06"
            eyebrow="Proposed monthly retainer"
            title="$6,000 per month"
            id="retainer"
          />
          <div className={styles.retainerIntro}>
            <p>
              The fixed monthly retainer covers the ongoing Digital Services
              Specialist responsibilities described in this response.
            </p>
            <p>
              The engagement anticipates approximately{' '}
              <strong>
                24–30 hours of senior digital and technical availability per
                month
              </strong>
              , with effort shifting according to program priorities.
            </p>
            <dl>
              <dt>Annual contract value</dt>
              <dd>$72,000</dd>
            </dl>
          </div>
          <DetailGrid items={retainerCoverage} columns={4} />

          <div className={styles.assumptions}>
            <div>
              <p className={styles.eyebrow}>Assumptions &amp; exclusions</p>
              <h3>Predictable stewardship, clearly scoped.</h3>
            </div>
            <ul>
              <li>
                Website hosting, domain registration, HTTPS certificate health,
                security products, and other program-owned subscriptions remain
                paid directly by the Tourism Program.
              </li>
              <li>
                Alpath will coordinate with hosting and other technical
                providers as needed.
              </li>
              <li>
                Paid-media spend, paid-media buying, and ongoing organic
                social-media management are excluded.
              </li>
              <li>
                Original photography, videography, long-form content creation,
                public relations, and primary graphic-design production remain
                with the appropriate Tourism Program partners.
              </li>
              <li>
                A complete redesign, replacement of the underlying CMS, a
                substantial standalone application, or a similarly large
                initiative may require a separately approved scope if it exceeds
                committed availability.
              </li>
              <li>Third-party licensing costs require prior approval.</li>
              <li>
                Travel reasonably necessary to maintain destination familiarity
                is included within the proposed retainer.
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
          <h2 id="why-heading">Strategy and implementation, held together.</h2>
          <div className={styles.prose}>
            <p>
              Whidbey &amp; Camano Islands Tourism needs someone capable of
              moving comfortably between strategy and implementation. That may
              mean examining an analytics report in the morning, diagnosing a
              website issue that afternoon, improving structured data the next
              day, and working with the content team on the architecture of a
              seasonal landing page later that week.
            </p>
            <p>
              Island County also deserves someone connected to the place and
              willing to be present. That may mean joining a meeting in person,
              attending a local event, or simply experiencing the islands in the
              same ways visitors do.
            </p>
            <p>
              Lastly, you want someone dependable.{' '}
              <strong>All of our clients are repeat clients.</strong> People
              come back for our expertise, our rates, and our kindness.
            </p>
            <p>
              We are a technical company, but we are also family-owned. We would
              welcome the opportunity to help Whidbey &amp; Camano Islands
              Tourism build a digital presence that becomes progressively more
              useful, discoverable, measurable, and resilient over the course of
              the engagement.
            </p>
          </div>
        </div>
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
    </main>
  );
}
