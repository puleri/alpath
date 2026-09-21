import { cookies } from 'next/headers';
import { isProposalAccessCookieValid, PROPOSAL_ACCESS_COOKIE } from '../access';
import ProposalPasswordGate from '../ProposalPasswordGate';
import ServiceAgreementTemplate, {
  AgreementSectionTitle as SectionTitle,
} from '@/app/components/service-agreement/ServiceAgreementTemplate';
import styles from '@/app/components/service-agreement/service-agreement.module.css';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Union Street CRE - Services Agreement | Alpath Engineering',
  description:
    'Draft website modernization and digital growth services agreement prepared for Union Street CRE.',
  robots: { index: false, follow: false },
};

const scopeGroups = [
  {
    number: '01',
    title: 'Strategy & architecture',
    items: [
      'Full inventory of the existing website, including pages, posts, images, downloads, forms, and URLs.',
      'A revised sitemap and content architecture supporting both dental and law-firm tenant representation.',
      'Competitive search and AI-visibility review to guide page priorities and positioning.',
      'Local and business entity consistency review, plus a prioritized third-party citation and entity cleanup plan. Updates to external listings, outreach, and paid placements are handled by clients.',
    ],
  },
  {
    number: '02',
    title: 'Design, rebuild & migration',
    items: [
      'Custom redesign and responsive Next.js rebuild of the Union Street website.',
      'Migration of approved existing content and media, with URL mapping and permanent redirects where needed.',
      'Improved navigation, contact paths, analytics, search tracking, technical SEO, metadata, and schema.',
      'Quality assurance across current desktop and mobile browsers, followed by launch and deployment.',
    ],
  },
  {
    number: '03',
    title: 'Dental & law authority',
    items: [
      'Dedicated dental-office tenant-representation hub and law-firm tenant-representation hub.',
      'Six to eight specialized search and AEO landing pages in total, including both hubs and at least three law-focused pages (including the law hub). The homepage, Derek’s profile, case studies, and migrated pages are separate from this count. Final topics and counts will be confirmed in the approved sitemap.',
      'Two to three redesigned dental case studies and three redesigned law-firm case studies, based on material supplied and approved by Union Street.',
      'Derek Hermsen authority profile, question-driven content, internal linking, and structured data connecting expertise to relevant work.',
      'Alpath drafts and edits the included specialty pages, profile, and case studies using Union Street’s source material. Union Street verifies facts, permissions, and transaction outcomes and approves content before publication.',
    ],
  },
  {
    number: '04',
    title: 'CMS, resources & launch support',
    items: [
      'Sanity CMS setup for agreed editable content, including services, case studies, profile information, images, contact details, and insights. Content is editable within the layouts built for the project; changes to layouts or functionality may require a developer.',
      'Resource and insights publishing system, CMS documentation, and one live training session.',
      'An agreed set of search and AI prompts, a documented pre-launch baseline, and a comparison near the end of the 60-day support period, with a brief findings and recommendations summary. Platforms, prompts, and measures will be recorded at kickoff and reused where available; results are snapshots and may vary.',
      'Sixty days of post-launch optimization for launch-related issues and refinements to the agreed search and AEO work.',
    ],
  },
];

const payments = [
  {
    label: 'Project commencement',
    amount: '$6,167',
    note: 'Due upon signing to reserve the project and begin discovery.',
  },
  {
    label: 'Design approval milestone',
    amount: '$6,167',
    note: 'Due upon approval of the design direction and site architecture.',
  },
  {
    label: 'Final approval & launch',
    amount: '$6,166',
    note: 'Due before production launch and transfer of final project assets.',
  },
];

export default async function UnionStreetServicesAgreement() {
  const cookieStore = await cookies();
  if (
    !isProposalAccessCookieValid(cookieStore.get(PROPOSAL_ACCESS_COOKIE)?.value)
  ) {
    return <ProposalPasswordGate isAgreement />;
  }

  return (
    <ServiceAgreementTemplate
      client="Union Street CRE"
      contact="Derek Hermsen"
      clientLogo="/union-street/logo.avif"
      largeClientLogo
      date="September 2026"
      project="Website modernization & digital growth"
      engagement="Tier 3 engagement"
      investment="$18,500"
      paymentSummary="Three milestone payments"
      duration="Estimated 6-8 weeks to launch"
      support="60 days post-launch"
      proposalHref="/proposal/union-street-cre"
      sections={[
        { id: 'overview', label: 'Project overview' },
        { id: 'scope', label: 'Included services' },
        { id: 'process', label: 'Process & schedule' },
        { id: 'investment', label: 'Fees & payment' },
        { id: 'terms', label: 'Working terms' },
        { id: 'approval', label: 'Acceptance' },
      ]}
    >
      <section id="overview" className={styles.section}>
        <SectionTitle
          number="01"
          eyebrow="Project overview"
          title="A modern website built around Union Street’s expertise."
        >
          This agreement translates the selected Tier 3 proposal into the
          working project scope. It is intended to keep the work,
          responsibilities, and decisions clear as we move from discovery
          through launch.
        </SectionTitle>

        <div className={styles.overviewGrid}>
          <article className={styles.featureStatement}>
            <p className={styles.eyebrow}>The objective</p>
            <h3>
              Modernize the website’s visual presentation and information
              structure. Make Union Street a useful source for AI-powered
              answers.
            </h3>
            <p>
              The rebuild will focus on helping AI search platforms discover,
              understand, and cite Union Street’s expertise. Clear answers to
              client questions, supported by dental and law-firm case studies,
              will connect practical guidance to demonstrated experience. We’ll
              structure that content for search and measure visibility before
              and after launch, with the goal of earning relevant citations and
              reaching prospective clients. Specific rankings or AI citations
              are not guaranteed.
            </p>
          </article>
          <div className={styles.principles}>
            <div>
              <span>01</span>
              <p>Carry approved existing content forward.</p>
            </div>
            <div>
              <span>02</span>
              <p>Give dental and law their own proof and messaging.</p>
            </div>
            <div>
              <span>03</span>
              <p>Configure CMS (Sanity) for routine content management.</p>
            </div>
            <div>
              <span>04</span>
              <p>Build a foundation that another developer can continue.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="scope" className={styles.section}>
        <SectionTitle
          number="02"
          eyebrow="Included services"
          title="What the Tier 3 engagement includes."
        >
          Final page titles and content priorities will be confirmed during
          discovery, using Union Street’s strategic priorities and available
          case study material.
        </SectionTitle>

        <div className={styles.scopeGrid}>
          {scopeGroups.map((group) => (
            <article key={group.number} className={styles.scopeCard}>
              <div className={styles.scopeCardTop}>
                <span>{group.number}</span>
                <h3>{group.title}</h3>
              </div>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className={styles.scopeBoundary}>
          <p className={styles.eyebrow}>Reserved for a separate scope</p>
          <p>
            A reusable Union Street proposal generator or proposal-template
            system is not included in this engagement. We can define that work
            after reviewing current proposals and establishing the new website
            design system.
          </p>
        </div>
      </section>

      <section id="process" className={styles.section}>
        <SectionTitle
          number="03"
          eyebrow="How we’ll work"
          title="Phase breakdown"
        >
          The estimated timeline from kickoff to launch is 6–8 weeks, depending
          on timely access, content delivery, and feedback. We’ll confirm the
          schedule together at kickoff and adjust as the project progresses. A
          separate 60-day support and optimization period begins after launch.
        </SectionTitle>

        <ol className={styles.timeline}>
          <li>
            <span>01</span>
            <div>
              <h3>Discover & organize</h3>
              <p>
                Audit the existing site, review specialty priorities, confirm
                audiences, and approve the sitemap and content plan.
              </p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Design & align</h3>
              <p>
                Establish the visual direction and key page patterns, then
                refine them through the agreed review rounds.
              </p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Build & populate</h3>
              <p>
                Begin CMS and migration work alongside design; build approved
                layouts, migrate approved content, and create the agreed
                specialty pages and case studies.
              </p>
            </div>
          </li>
          <li>
            <span>04</span>
            <div>
              <h3>Verify & launch</h3>
              <p>
                Confirm approved content, working contact forms and delivery,
                redirects, mobile layouts, analytics setup, and completed CMS
                training against a shared launch checklist. Resolve material
                issues, obtain written launch approval, and deploy after final
                payment.
              </p>
            </div>
          </li>
          <li>
            <span>05</span>
            <div>
              <h3>Measure & refine</h3>
              <p>
                Monitor the launch for 60 days, address launch-related issues,
                and refine the included pages based on findings. Near the end of
                this period, repeat the agreed visibility checks and deliver a
                brief comparison and recommendations summary.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section id="investment" className={styles.section}>
        <SectionTitle
          number="04"
          eyebrow="Investment"
          title="$18,500, divided across three milestones."
        >
          Payments are tied to visible project progress rather than calendar
          dates alone.
        </SectionTitle>

        <div className={styles.paymentGrid}>
          {payments.map((payment, index) => (
            <article key={payment.label}>
              <span>0{index + 1}</span>
              <h3>{payment.label}</h3>
              <p className={styles.paymentAmount}>{payment.amount}</p>
              <p>{payment.note}</p>
            </article>
          ))}
        </div>

        <div className={styles.hostingPanel}>
          <div>
            <p className={styles.eyebrow}>Third-party services</p>
            <h3>Owned and paid directly by Union Street.</h3>
          </div>
          <div>
            <p>
              <strong>Vercel Pro:</strong> currently $40 per month while Derek
              and Matt both require deployment access. After launch, Matt’s paid
              seat can be removed when deployment access is no longer needed,
              reducing the expected cost to $20 per month. We recommend
              retaining both seats through the 60-day support period so Alpath
              can deploy fixes and refinements. Union Street pays these vendor
              charges directly; any later restoration of paid access will be
              agreed before work begins. These estimates exclude taxes, optional
              add-ons, and usage beyond included allowances.
            </p>
            <p>
              <strong>Sanity:</strong> its free plan is expected to cover the
              agreed CMS needs. Any future paid upgrade would require Union
              Street’s approval.
            </p>
            <p>
              Domain registration, email, and other third-party subscriptions
              remain separate. Vendor pricing can change and is billed by the
              vendor rather than Alpath.
            </p>
          </div>
        </div>
      </section>

      <section id="terms" className={styles.section}>
        <SectionTitle
          number="05"
          eyebrow="Working terms"
          title="Project responsibilities and terms."
        >
          These terms are meant to make responsibilities and changes visible
          before they affect schedule or cost.
        </SectionTitle>

        <div className={styles.termsGrid}>
          <article>
            <p className={styles.eyebrow}>Union Street provides</p>
            <ul>
              <li>
                Timely access to the current website, domain, analytics, and
                approved business accounts.
              </li>
              <li>
                Source material, factual review, permissions, and approval for
                claims, logos, testimonials, and case-study details.
              </li>
              <li>
                Timely, consolidated feedback and decisions at the agreed review
                milestones.
              </li>
              <li>One primary decision-maker for project approvals.</li>
            </ul>
          </article>
          <article>
            <p className={styles.eyebrow}>Alpath provides</p>
            <ul>
              <li>
                Design, development, migration, CMS implementation,
                documentation, and launch services listed in this scope.
              </li>
              <li>
                Regular progress communication and clear requests for feedback
                or materials.
              </li>
              <li>
                Reasonable testing and correction of defects in the delivered
                work.
              </li>
              <li>
                Organized source code and developer-facing documentation for
                future continuity.
              </li>
            </ul>
          </article>
          <article className={styles.changeCard}>
            <p className={styles.eyebrow}>Change management</p>
            <h3>Changes are welcome; their impact is agreed first.</h3>
            <p>
              The project includes two consolidated review rounds for the
              initial design direction and two for the completed website before
              launch. Revisions that refine the approved direction and remain
              within this scope are included.
            </p>
            <p>
              A request that adds pages, features, integrations, substantial new
              writing beyond the included content deliverables, or a new
              direction will be documented before work begins. Alpath will
              explain any effect on cost or schedule, and Union Street will
              approve that change in writing. Small scope adjustments may be
              balanced by removing work of similar effort.
            </p>
          </article>
          <article>
            <p className={styles.eyebrow}>Schedule & approvals</p>
            <p>
              Delays in access, source material, feedback, or approval may move
              the project schedule. A phase is considered approved when Union
              Street confirms approval in writing or directs Alpath to proceed
              to the next phase.
            </p>
          </article>
          <article>
            <p className={styles.eyebrow}>Ownership & continuity</p>
            <p>
              Union Street retains ownership of its existing content and media
              throughout the project. After final payment, Union Street owns the
              custom project code and newly created project-specific content and
              media. Derek will own the GitHub repository and the Vercel and
              Sanity accounts, with Alpath granted access as needed. Third-party
              software and licensed assets remain subject to their original
              licenses. At handoff, Alpath will provide setup and deployment
              instructions, CMS documentation, and guidance for exporting
              content and media, so another developer can continue the project.
            </p>
          </article>
          <article>
            <p className={styles.eyebrow}>Post-launch support</p>
            <p>
              The 60-day optimization period covers correction of launch-related
              defects and refinement of the included pages’ copy, metadata,
              structured data, and internal links based on launch findings. It
              includes the end-of-period visibility comparison and summary.
              Corrections to work that does not meet the agreed scope do not
              consume design review rounds. New pages, features, campaigns, or
              ongoing maintenance are separate. Minor future work can be quoted
              as needed; no care plan is required.
            </p>
          </article>
          <article>
            <p className={styles.eyebrow}>Cancellation</p>
            <p>
              Either party may end the project with written notice. Union Street
              will pay for completed work and approved, non-cancellable
              third-party commitments through the cancellation date. At kickoff,
              the parties will agree in writing on how the project fee is
              allocated across phases. Completed phases are valued at that
              allocation; partially completed phases are valued by their
              documented percentage of completion. Charges for the original
              scope will not exceed the $18,500 project fee. Prior payments are
              credited against the total, and Alpath will provide an itemized
              reconciliation and refund any unearned balance within 30 days.
              After any outstanding balance is paid, Alpath will provide
              completed project materials in their then-current state.
            </p>
          </article>
        </div>
      </section>

      <section id="approval" className={`${styles.section} ${styles.approval}`}>
        <SectionTitle
          number="06"
          eyebrow="Approval"
          title="Approval and next steps."
        >
          Signing confirms the scope, investment, and working terms above. The
          project begins after signature and receipt of the commencement
          payment.
        </SectionTitle>

        <div className={styles.signatureGrid}>
          <div>
            <p className={styles.eyebrow}>
              Union Street Corporate Real Estate, LLC
            </p>
            <span className={styles.signatureLine} />
            <p>Authorized signature</p>
            <span className={styles.shortLine} />
            <p>Printed name / title</p>
            <span className={styles.shortLine} />
            <p>Date</p>
          </div>
          <div>
            <p className={styles.eyebrow}>Alpath Engineering</p>
            <span className={styles.signatureLine} />
            <p>Matt Puleri / Authorized signature</p>
            <span className={styles.shortLine} />
            <p>Date</p>
          </div>
        </div>

        <div className={styles.close}>
          <p>
            Prepared for Derek Hermsen
            <br />
            <strong>Union Street CRE</strong>
          </p>
          <p>
            Prepared by Matt Puleri
            <br />
            <strong>Alpath Engineering</strong>
          </p>
        </div>
      </section>
    </ServiceAgreementTemplate>
  );
}
