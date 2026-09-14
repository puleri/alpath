import { cookies } from 'next/headers';
import { isProposalAccessCookieValid, PROPOSAL_ACCESS_COOKIE } from './access';
import ProposalPasswordGate from './ProposalPasswordGate';
import PricingOptions from './PricingOptions';
import CopyEmailButton from './CopyEmailButton';
import AuditDisclosure from './AuditDisclosure';

export const dynamic = 'force-dynamic';
import styles from './page.module.css';

export const metadata = {
  title: 'Union Street CRE — Website Modernization Proposal | Alpath',
  description:
    'A website rebuild, content migration, and dental search authority proposal prepared for Union Street CRE.',
  robots: { index: false, follow: false },
};

const audit = [
  {
    name: 'Homepage',
    path: '/',
    found:
      'Seattle tenant positioning and existing social proof through highlighting previous work.',
    action:
      'Carry forward the core positioning and strong social proof. Rebuild around Seattle & Puget Sound tenant representation, with a clear route into dental expertise.',
    tier: '',
  },
  {
    name: 'About',
    path: '/about',
    found:
      'An established tenant-only philosophy, technology story, and advisory approach.',
    action:
      'Migrate and bubble up information structure (development) for easier crawlability.',
    tier: '',
  },
  {
    name: 'Clients',
    path: '/clients',
    found:
      'A broad client-logo gallery demonstrates experience across different businesses.',
    action:
      'Preserve approved logos and client relationships. Add readable context where supplied; keep broader tenant experience visible alongside the dental specialty.',
    tier: '',
  },
  {
    name: 'Medical & dental',
    path: '/medical-dental',
    found:
      'A dedicated medical and dental client gallery, but limited service explanation in the reviewed page text.',
    action:
      'Preserve the medical and dental client content. Connect it to a new Seattle dental page; expand into a dental hub and 2–3 evidence-led case studies in Tier 2.',
    tier: '',
  },
  {
    name: 'Process',
    path: '/process',
    found:
      'Useful guidance organized around planning, strategy, and results, including a lease-review offer.',
    action:
      'Migrate the process and confirm the current offer. Create clearer steps and contact paths, then connect relevant guidance to dental lease questions.',
    tier: '',
  },
  {
    name: 'Contact / Derek Hermsen',
    path: '/contact',
    found:
      'Derek’s designated-broker role, portrait, direct contact information, and the office address.',
    action:
      'Preserve these details and rebuild the inquiry path. Tier 2 adds a dedicated authority profile with a client-approved biography and links to relevant work.',
    tier: '',
  },
  {
    name: 'Blog archive',
    path: '/blog-1',
    found:
      'An existing article archive with named authors, dates, business updates, and dental-related material.',
    action:
      'Migrate existing posts, images, dates, and authorship. Review time-sensitive articles before reuse. Tier 3 adds the expanded insights publishing system.',
    tier: '',
  },
  {
    name: 'Resources',
    path: '/resources',
    found:
      'A resource directory linking to the leasing process, subleases, and an agency-law pamphlet.',
    action:
      'Preserve useful resources and downloads, restructure content for crawlers. This is a common follow up question to an LLM if they serve your content and the user wants to know what they would od next. Check destinations and document versions, and replace generic link labels with descriptive navigation (for AI-search visibility purposes).',
    tier: '',
  },
  {
    name: 'Sublease listings',
    path: '/sublease-listings',
    found:
      'The reviewed page reports no current listings and invites visitors to contact the firm.',
    action:
      'Retain the page and useful inquiry path. Confirm availability at migration and support a clear empty state when there are no active listings. Possble case for CMS integration.',
    tier: '',
  },
  {
    name: 'Hawaii',
    path: '/hawaii',
    found:
      'A separate regional page with broker information, an affiliation, and dental-practice lease questions.',
    action:
      'Preserve this regional content and verify current details with Union Street. Keep Hawaii distinct from Seattle targeting; adapt relevant questions only after local review.',
    tier: '',
  },
];

const tiers = [
  {
    number: '01',
    name: 'Website Rebuild',
    price: '$7,500',
    intro: 'A complete modernization with a focused search foundation.',
    items: [
      'Full website redesign and rebuild',
      'Modern, mobile-responsive design',
      'Existing content migration and URL mapping',
      'Improved navigation and site architecture',
      'Conversion-focused contact paths',
      'Analytics and search tracking setup',
      'Technical SEO, metadata, and schema',
      '2 optimized pages: homepage + Seattle dental tenant representation',
      'Launch and deployment',
    ],
    best: 'A stronger digital presence, with search investment focused on the highest-value niche.',
  },
  {
    number: '02',
    name: 'Website + Dental Authority',
    price: '$12,500',
    intro: 'The foundation plus deeper proof of dental expertise.',
    items: [
      'Everything in Tier 1',
      'Expanded Dental Tenant Representation hub',
      '2–3 redesigned dental case studies',
      'Derek Hermsen authority / profile page',
      '3 additional high-intent dental AEO pages',
      'FAQ and question-driven content strategy',
      'Enhanced internal linking and structured data',
      'Local / business entity consistency review',
      'Baseline AI visibility testing across relevant prompts',
    ],
    best: 'Building meaningful dental authority through connected services, expertise, and client evidence.',
    recommended: true,
  },
  {
    number: '03',
    name: 'Digital Growth Platform',
    price: '$18,500',
    intro: 'A broader platform for ongoing client acquisition.',
    items: [
      'Everything in Tier 2',
      'Full content architecture and CMS strategy',
      '6–8 specialized AEO/search landing pages in total',
      'Expanded case-study system',
      'Resource / insights publishing system',
      'Comprehensive conversion strategy',
      'Competitive search and AI visibility analysis',
      'Third-party citation and entity cleanup strategy',
      'AI benchmark and post-launch comparison',
      '60-day post-launch optimization period',
    ],
    best: 'Supporting the wider tenant-representation business and an ongoing dental content program.',
  },
];

function SectionHeading({ number, label, title, children }) {
  return (
    <div className={styles.sectionHeading}>
      <p className={styles.eyebrow}>
        {number} / {label}
      </p>
      <div>
        <h2>{title}</h2>
        {children && <p>{children}</p>}
      </div>
    </div>
  );
}

export default async function UnionStreetProposal() {
  const cookieStore = await cookies();
  if (
    !isProposalAccessCookieValid(cookieStore.get(PROPOSAL_ACCESS_COOKIE)?.value)
  ) {
    return <ProposalPasswordGate />;
  }
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.topline}>
          <span>Alpath Engineering / Following up on our call</span>
          <span className={styles.toplineClient}>
            <img src="/union-street/logo.avif" alt="Union Street CRE" />
            <span>For Derek · September 2026</span>
          </span>
        </div>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Union Street CRE</p>
            <h1>
              re: Let’s build on
              <br />
              <span>what you’ve built.</span>
            </h1>
            <p className={styles.lead}>
              Derek, thanks for taking the time to talk. I’ve put together a
              path for the website rebuild, with your existing content carried
              forward and more room to show Union Street’s dental expertise in
              Seattle.
            </p>
            <a href="#investment" className={styles.button}>
              Compare the options <span aria-hidden="true">↗</span>
            </a>
          </div>
          <aside className={styles.heroAside}>
            <div className={styles.orbit} aria-hidden="true">
              <span />
              <span />
              <span />
              <b>U / S</b>
            </div>
            <div className={styles.asideText}>
              <p className={styles.eyebrow}>Website + AI search visibility</p>
              <p>
                Clear positioning.
                <br />
                Credible proof.
                <br />
                Connected expertise.
              </p>
            </div>
          </aside>
        </div>
        <div className={styles.heroBottom}>
          <span>Seattle & Puget Sound</span>
          <span>Tenant representation / Dental specialization</span>
          <a href="#audit">Start with the existing site ↓</a>
        </div>
      </header>

      <nav className={styles.sectionNav} aria-label="Proposal sections">
        <a href="#audit">01 / Current site</a>
        <a href="#migration">02 / Migration</a>
        <a href="#strategy">03 / Helping clients find you</a>
        <a href="#investment">04 / Investment</a>
        <a href="#next">05 / Next steps</a>
      </nav>

      <section id="audit" className={styles.section}>
        <div className={styles.auditIntro}>
          <strong>Initial outline of site pages to be migrated.</strong>
          <p>
            I manually clicked through the site on September 14, 2026 and pulled
            together this initial migration list. Some pages may be missing
            here; we’ll run a full crawl with our in-house page auditor once
            work starts and confirm the inventory together.
          </p>
        </div>
        <div className={styles.auditList}>
          {audit.map((item, index) => (
            <AuditDisclosure
              key={item.path}
              item={item}
              index={index}
              initiallyOpen={index === 3}
            />
          ))}
        </div>
        <p className={styles.note}>
          One thing I’d like to work through with you: the client galleries show
          who you’ve helped, but there’s an opportunity to tell more of those
          stories. For the 2–3 dental case studies in Tier 2, we’ll gather the
          background together and confirm which transaction details and outcomes
          we can share.
        </p>
      </section>

      <section
        id="migration"
        className={`${styles.section} ${styles.migration}`}
      >
        <SectionHeading
          number="02"
          label="Migration"
          title="Content/page migration are included in every tier."
        >
          (Per our discussion)
        </SectionHeading>
        <div className={styles.migrationGrid}>
          <div className={styles.statement}>
            <span aria-hidden="true">↗</span>
            <h3>Modernized tech stack will mean:</h3>
            <p>
              Faster page loads, better performance on classic SEO. Better
              indexing and crawability by standard web crawlers. And of course,
              you will own the code.
            </p>
          </div>
          <ol className={styles.steps}>
            <li>
              <strong>Inventory & map</strong>
              <p>
                Catalog existing URLs, posts, images (any you would like to
                carry over, that is), downloads, and forms. Agree on each item’s
                destination before rebuilding.
              </p>
            </li>
            <li>
              <strong>Migrate & refine</strong>
              <p>
                Carry over approved copy and assets. Preserve article dates and
                authors. Flag outdated content for a retain, update, or archive
                decision with Union Street.
              </p>
            </li>
            <li>
              <strong>Protect discoverability</strong>
              <p>
                Keep useful URLs where possible. Map changed URLs to relevant
                destinations with permanent redirects; update internal links,
                canonicals, and the sitemap.
              </p>
            </li>
            <li>
              <strong>Verify before launch</strong>
              <p>
                Reconcile the new site against the inventory. Check images,
                downloads, redirects, mobile layouts, and contact delivery.
                Obtain content sign-off before launch.
              </p>
            </li>
          </ol>
        </div>
        <p className={styles.note}>
          Migration preserves existing material; new research, substantial
          rewrites, and additional landing pages follow the selected tier. The
          final inventory and any exceptional integrations are confirmed at
          kickoff. No existing content is silently dropped.
        </p>
      </section>

      <section id="strategy" className={styles.section}>
        <SectionHeading
          number="03"
          label="Helping clients find you"
          title="AI Search Visibility"
        >
          Dental + Future Law Niche
        </SectionHeading>
        <div className={styles.strategyGrid}>
          <article>
            <p className={styles.eyebrow}>Dental</p>
            <h3>Give AI a useful source to cite.</h3>
            <p>
              Seattle dental-office leasing gives us a specific place to start.
              Here’s the approach I’d take with the Tier 2 dental content:
            </p>
            <ul>
              <li>
                <strong>Answer real questions:</strong> build a central dental
                page and practical answers about renewals, lease transfers when
                selling a practice, and expansion or relocation.
              </li>
              <li>
                <strong>Back it up with experience:</strong> connect those
                answers to approved client stories and your profile, so readers
                can see who’s giving the advice and the work behind it.
              </li>
              <li>
                <strong>Make it easy to find and reference:</strong> use clear
                headings, connected pages, and consistent business information.
              </li>
              <li>
                <strong>Check where you appear:</strong> test a small set of
                relevant questions to establish a starting point. Tier 3 adds
                the post-launch comparison and 60 days of refinement.
              </li>
            </ul>
            <p className={styles.strategyCount}>
              Tier 1 starts with the homepage and dental page. Tier 2 adds the
              deeper answers and proof above. Citations are the goal, not a
              guaranteed placement.
            </p>
          </article>
          <article>
            <p className={styles.eyebrow}>Law</p>
            <h3>Let’s talk about this next.</h3>
            <p>
              There may be a similar opportunity in representing law firms. I’d
              like to hear more about the clients you want to reach, the
              questions they bring you, and the work you’d want to highlight
              before proposing a direction.
            </p>
            <p className={styles.strategyCount}>
              Open for discussion. No dedicated law-firm content is committed
              here yet- we can explore it together and scope additional work if
              it makes sense.
            </p>
          </article>
        </div>
      </section>

      <section id="investment" className={styles.section}>
        <SectionHeading
          number="04"
          label="Scope & investment"
          title="Here’s how we could structure it."
        >
          This is a standardized set of scopes, mainly to get the conversation
          started. I am happy to work with you to narrow/widen the scope to a
          more custom solution/price.
        </SectionHeading>
        <PricingOptions tiers={tiers} />
        <div className={styles.scopeNotes}>
          <p>
            <strong>Page-count assumption.</strong> Tier 2 includes the
            homepage, the dental hub, and three additional dental search pages.
            For this proposal, Tier 3’s 6–8 specialized landing pages are the
            total specialized-page scope, including the dental hub and the three
            Tier 2 topics; the homepage, profile, case studies, and migrated
            pages are separate.
          </p>
          <p>
            <strong>Content & operations.</strong> Union Street supplies access,
            existing assets, and approval of business claims. Case-study
            outcomes and profile credentials are verified before publishing.
            Hosting and platform subscriptions are separate. Basic care is
            optional; we’ll confirm delivery dates and payment terms together
            before starting.
          </p>
        </div>
      </section>

      <section className={styles.recommendation}>
        <p className={styles.eyebrow}>Where I’d start / Tier 2</p>
        <h2>
          My recommendation:
          <br />
          build out the dental story.
        </h2>
        <div>
          <p>
            I’d lean toward Tier 2. The $7,500 option gets the rebuild in place,
            while the $12,500 scope gives us room to develop the dental pages
            and client stories that make your experience easier to see.
          </p>
          <p>
            We can start with the rebuild and take it from there. You don’t need
            to commit to ongoing care- we’re available to quote small changes
            when you need them, or offer the optional basic plan above.
          </p>
        </div>
      </section>

      <section id="next" className={styles.section}>
        <SectionHeading
          number="05"
          label="Next steps"
          title="Let’s choose the right starting point."
        >
          Let me know which scope feels right. From there, we’ll confirm the
          content inventory, choose the dental stories to develop, and put a
          schedule in place.
        </SectionHeading>
        <div className={styles.nextGrid}>
          <article>
            <span>01</span>
            <h3>Align on scope</h3>
            <p>
              Confirm the investment, final page counts, CMS needs, and delivery
              schedule.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Collect the evidence</h3>
            <p>
              Gather website access, approved assets, Derek’s biography, and
              source material for dental case studies.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Design, build & launch</h3>
            <p>
              Approve the architecture and design, migrate content, validate the
              experience, and launch with tracking in place.
            </p>
          </article>
        </div>
        <div className={styles.close}>
          <p>
            Thanks again for the conversation, Derek.
            <br />
            <strong>Matt / Alpath Engineering</strong>
          </p>
          <CopyEmailButton />
        </div>
      </section>
    </main>
  );
}
