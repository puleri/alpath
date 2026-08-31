import printStyles from './print.module.css';

function PrintHeader({ number, eyebrow }) {
  return (
    <header className={printStyles.pageHeader}>
      <span>{eyebrow}</span>
      <span>{String(number).padStart(2, '0')} / 10</span>
    </header>
  );
}

function PrintFooter({ number }) {
  return (
    <footer className={printStyles.pageFooter}>
      <span>Alpath Engineering · City of Sumner Website RFQ</span>
      <span>Counted page {String(number).padStart(2, '0')}</span>
    </footer>
  );
}

function PrintPage({ number, eyebrow, className = '', children }) {
  return (
    <section className={`${printStyles.page} ${className}`.trim()}>
      <PrintHeader number={number} eyebrow={eyebrow} />
      {children}
      <PrintFooter number={number} />
    </section>
  );
}

function SumnerMark() {
  return (
    <div className={printStyles.sumnerMark}>
      <span className={printStyles.cityBars} aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>
        <small>City of</small>
        <strong>Sumner</strong>
        <small>Washington</small>
      </span>
    </div>
  );
}

function AlpathMark() {
  return (
    <div className={printStyles.alpathMark}>
      <img src="/alpath/sign.svg" alt="" />
      <span>
        <strong>Alpath</strong> Engineering
      </span>
    </div>
  );
}

export default function SumnerPrintProposal({
  work,
  standards,
  testing,
  cms,
  phases,
  deliveryControls,
  security,
  references,
}) {
  return (
    <div className={printStyles.proposal}>
      <section className={`${printStyles.page} ${printStyles.cover}`}>
        <div className={printStyles.coverTopline}>
          <span>Statement of qualifications</span>
          <span>Private response · August 2026</span>
        </div>

        <div className={printStyles.coverMarks}>
          <AlpathMark />
          <span aria-hidden="true">×</span>
          <SumnerMark />
        </div>

        <div className={printStyles.coverContext}>
          <p>
            Prepared for
            <strong>City of Sumner · Communications Department</strong>
          </p>
          <p>
            Submitted by
            <strong>Alpath Engineering</strong>
          </p>
        </div>

        <div className={printStyles.coverTitle}>
          <p>New, accessible City website</p>
          <h1>
            A practical digital front door for the people who live, work, visit,
            and do business in Sumner.
          </h1>
          <dl>
            <div>
              <dt>Project lead</dt>
              <dd>Matt Puleri</dd>
            </div>
            <div>
              <dt>Term</dt>
              <dd>One year</dd>
            </div>
            <div>
              <dt>Proposed team</dt>
              <dd>2 named members</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className={`${printStyles.page} ${printStyles.letter}`}>
        <div className={printStyles.exemptLabel}>
          <span>Cover letter</span>
          <span>Excluded from ten-page limit</span>
        </div>
        <p className={printStyles.kicker}>Letter of interest</p>
        <h2>
          A website that works for residents and for the staff who maintain it.
        </h2>
        <div className={printStyles.letterBody}>
          <p className={printStyles.salutation}>
            Dear Carmen Palmer and members of the City of Sumner Evaluation
            Committee,
          </p>
          <div>
            <p>
              Thank you for considering Alpath Engineering for the design,
              development, and launch of a new, accessible City website.
            </p>
            <p>
              Alpath is qualified to plan, design, build, move, test, and
              support content-rich websites. Our reference projects show that we
              can simplify complicated information, migrate code without losing
              content, improve performance, and remain accountable after launch.
            </p>
            <p>
              Those qualifications would help Sumner create clearer paths to
              services, build accessibility into everyday publishing, prepare
              staff to maintain the website, and keep one accountable project
              lead involved from discovery through post-launch support.
            </p>
            <p>
              We would welcome the opportunity to make Sumner’s website easier
              for residents to use and easier for staff to maintain.
            </p>
            <p className={printStyles.signature}>
              Sincerely,
              <strong>Matt Puleri</strong>
              <span>Operator · Alpath Engineering</span>
            </p>
          </div>
        </div>
      </section>

      <PrintPage
        number={1}
        eyebrow="Executive summary"
        className={printStyles.executivePage}
      >
        <p className={printStyles.kicker}>The case for Alpath</p>
        <h2>Qualified to build it. Focused on making it useful.</h2>
        <div className={printStyles.questionGrid}>
          <article>
            <p>Are we qualified?</p>
            <h3>The goalposts move regularly where technology is concerned.</h3>
            <p>
              Matt has over 16k industry hours designing, building, migrating,
              and supporting websites that people rely on. His websites
              currently serve over 100k people each month. Anthony Damico adds
              experienced graphic-design support when the project calls for it.
            </p>
          </article>
          <article>
            <p>How will that help Sumner?</p>
            <h3>Residents get clearer paths. Staff get a safer system.</h3>
            <p>
              Sumner would receive an accessible, dependable website; editing
              tools that support good publishing; practical documentation and
              training; and a partner who remains responsible after launch.
            </p>
          </article>
        </div>
        <div className={printStyles.proofRow}>
          <article>
            <strong>Direct ownership</strong>
            <span>One lead connects resident needs, design, and delivery.</span>
          </article>
          <article>
            <strong>Repeat relationships</strong>
            <span>Every Alpath client is a repeat client.</span>
          </article>
          <article>
            <strong>Honest fit</strong>
            <span>
              Private-sector examples, applied to public accessibility and
              security requirements.
            </span>
          </article>
        </div>
        <p className={printStyles.summaryClose}>
          The proposed one-year process begins by listening to residents and
          staff, then moves through content organization, platform selection,
          design, development, migration, testing, training, launch, and
          post-launch support.
        </p>
      </PrintPage>

      <PrintPage
        number={2}
        eyebrow="Key team member · Project lead"
        className={printStyles.resumePage}
      >
        <div className={printStyles.resumeLayout}>
          <figure>
            <img
              src="/people/matt/matt-on-grey.png"
              alt="Matt Puleri, Operator at Alpath Engineering"
            />
            <figcaption>Proposed project lead</figcaption>
          </figure>
          <div className={printStyles.resumeCopy}>
            <p className={printStyles.kicker}>Matt Puleri</p>
            <h2>Operator · Project Lead</h2>
            <p className={printStyles.resumeLead}>
              Matt would remain accountable for the website from discovery
              through launch and ongoing support.
            </p>
            <h3>Proposed responsibilities</h3>
            <ul>
              <li>Lead conversations and decisions with City staff.</li>
              <li>Organize services, navigation, search, and page types.</li>
              <li>Recommend and configure the content management system.</li>
              <li>Guide design; build, connect, and test the website.</li>
              <li>Oversee migration, training, launch, and support.</li>
            </ul>
            <h3>Relevant qualifications</h3>
            <p>
              Direct experience building accessible websites, improving speed
              and reliability, moving sites between platforms, solving problems
              in existing systems, documenting work, and supporting clients
              after the initial project is complete.
            </p>
          </div>
        </div>
        <aside className={printStyles.firmBand}>
          <div>
            <p className={printStyles.kicker}>Firm overview</p>
            <h3>A small team with a short path to an answer.</h3>
          </div>
          <p>
            Alpath Engineering is a Pacific Northwest digital consultancy that
            brings website planning, visual design, development, accessibility,
            measurement, and ongoing support together. For Sumner, that means
            fewer handoffs and direct access to the people doing the work.
          </p>
        </aside>
      </PrintPage>

      <PrintPage
        number={3}
        eyebrow="Key team member · Graphic design contractor"
        className={printStyles.resumePage}
      >
        <div className={printStyles.resumeLayout}>
          <figure>
            <img
              src="/people/anthony/anthony-damico.jpg"
              alt="Anthony Damico, senior digital designer"
            />
            <figcaption>Available graphic design contractor</figcaption>
          </figure>
          <div className={printStyles.resumeCopy}>
            <p className={printStyles.kicker}>Anthony Damico</p>
            <h2>Senior Digital Designer · Contractor</h2>
            <p className={printStyles.resumeLead}>
              Anthony is available for approved graphic-design needs such as
              visual assets, illustration, page graphics, and related design
              work.
            </p>
            <h3>Experience</h3>
            <p>
              Senior Digital Designer at 500 Degrees Studio since 2019,
              following two years as a Junior Designer at Ibel Agency. His work
              includes web design and development, branding, advertising,
              campaign design, motion graphics, environmental and experiential
              design, packaging, and illustration.
            </p>
            <h3>Relevant skills</h3>
            <p>Graphic design · Animation · Figma · Marketing</p>
            <h3>Tools</h3>
            <p>
              Illustrator · Photoshop · After Effects · Blender · Spline ·
              Unreal Engine
            </p>
            <a href="https://alpath.engineering/resumes/Anthony-Damico_Resume_Aug2026.pdf">
              View Anthony’s full resume
            </a>
          </div>
        </div>
        <aside className={printStyles.assuranceBand}>
          <div>
            <p className={printStyles.kicker}>Role clarity</p>
            <h3>Available support, represented accurately.</h3>
          </div>
          <ul>
            <li>
              Anthony was recently brought into a separate project that remains
              in progress.
            </li>
            <li>He had no involvement in the three reference projects.</li>
            <li>
              Matt and Anthony will not be replaced without the City’s prior
              approval.
            </li>
          </ul>
        </aside>
      </PrintPage>

      <PrintPage
        number={4}
        eyebrow="Relevant experience"
        className={printStyles.experiencePage}
      >
        <div className={printStyles.titleRow}>
          <div>
            <p className={printStyles.kicker}>Three recent projects</p>
            <h2>Comparable website problems. Directly owned work.</h2>
          </div>
          <p>
            These projects were undertaken within the past five years. They show
            that Alpath can move a large website safely, make information easier
            to find, improve performance, learn an unfamiliar system,
            communicate clearly, and continue supporting the client after
            launch.
          </p>
        </div>
        <div className={printStyles.projectGrid}>
          {work.map((project, index) => (
            <article key={project.name}>
              <div className={printStyles.projectTopline}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>{project.status}</span>
              </div>
              <h3>{project.name}</h3>
              <a href={project.url}>{project.displayUrl}</a>
              <p>{project.body}</p>
              <p className={printStyles.projectMetric}>
                <strong>{project.metric}</strong>
                <span>{project.metricLabel}</span>
              </p>
              <div className={printStyles.involvement}>
                <p>
                  <strong>Matt Puleri</strong>
                  {project.involvement}
                </p>
                <p>
                  <strong>Anthony Damico</strong>
                  No involvement in this reference project.
                </p>
              </div>
              <a
                className={printStyles.projectPhone}
                href={`tel:${project.phoneHref}`}
              >
                {project.phone}
              </a>
            </article>
          ))}
        </div>
      </PrintPage>

      <PrintPage
        number={5}
        eyebrow="Accessibility"
        className={printStyles.accessibilityPage}
      >
        <div className={printStyles.titleRow}>
          <div>
            <p className={printStyles.kicker}>Standards and verification</p>
            <h2>Accessible at launch and maintainable afterward.</h2>
          </div>
          <p>
            Alpath would connect each requirement to page design, publishing
            guidance, testing, fixes, and launch approval.
          </p>
        </div>
        <h3 className={printStyles.gridLabel}>Applicable standards</h3>
        <div className={printStyles.fourGrid}>
          {standards.map((standard, index) => (
            <article key={standard.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h4>{standard.title}</h4>
              <p>{standard.body}</p>
            </article>
          ))}
        </div>
        <h3 className={printStyles.gridLabel}>Audit and remediation</h3>
        <div className={printStyles.fourGrid}>
          {testing.map((method, index) => (
            <article key={method.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h4>{method.title}</h4>
              <p>{method.body}</p>
            </article>
          ))}
        </div>
        <aside className={printStyles.acceptanceBand}>
          <strong>A passing scan is not enough to approve launch.</strong>
          <span>
            Core tasks receive keyboard and screen-reader review; every issue
            has a priority, owner, evidence, and follow-up check.
          </span>
        </aside>
      </PrintPage>

      <PrintPage
        number={6}
        eyebrow="Content management system"
        className={printStyles.cmsPage}
      >
        <div className={printStyles.titleRow}>
          <div>
            <p className={printStyles.kicker}>CMS, migration, and training</p>
            <h2>Make accessible publishing easier for City staff.</h2>
          </div>
          <p>
            The platform would be selected after discovery, based on City needs
            rather than assumed in advance.
          </p>
        </div>
        <div className={printStyles.twoGrid}>
          {cms.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <div className={printStyles.processRow}>
          <span>Decide what stays</span>
          <i aria-hidden="true">→</i>
          <span>Move in manageable groups</span>
          <i aria-hidden="true">→</i>
          <span>Verify links and accessibility</span>
          <i aria-hidden="true">→</i>
          <span>Train staff with the real tools</span>
        </div>
      </PrintPage>

      <PrintPage
        number={7}
        eyebrow="Delivery approach"
        className={printStyles.deliveryPage}
      >
        <div className={printStyles.titleRow}>
          <div>
            <p className={printStyles.kicker}>One-year starting plan</p>
            <h2>Clear phases, decisions, and responsibilities.</h2>
          </div>
          <p>
            The schedule would be confirmed with City staff after discovery,
            then managed through visible milestones and regular reviews.
          </p>
        </div>
        <div className={printStyles.phaseGrid}>
          {phases.map((phase, index) => (
            <article key={phase.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{phase.title}</h3>
              <p>{phase.body}</p>
            </article>
          ))}
        </div>
        <aside className={printStyles.deliveryBand}>
          Content migration and staff training begin before development is
          complete, so questions and accessibility improvements can be addressed
          while changes are easier and less expensive.
        </aside>
      </PrintPage>

      <PrintPage
        number={8}
        eyebrow="Quality and security"
        className={printStyles.controlsPage}
      >
        <div className={printStyles.titleRow}>
          <div>
            <p className={printStyles.kicker}>Visible project controls</p>
            <h2>Protect the work, the schedule, and City information.</h2>
          </div>
          <p>
            Quality and security are planned throughout the project instead of
            being postponed until launch.
          </p>
        </div>
        <h3 className={printStyles.gridLabel}>Quality, schedule, and cost</h3>
        <div className={printStyles.threeGrid}>
          {deliveryControls.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <h3 className={printStyles.gridLabel}>Public-sector security</h3>
        <div className={printStyles.fourGrid}>
          {security.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </PrintPage>

      <PrintPage
        number={9}
        eyebrow="Communication and commitments"
        className={printStyles.communicationPage}
      >
        <div className={printStyles.titleRow}>
          <div>
            <p className={printStyles.kicker}>A useful project record</p>
            <h2>City staff can see what changed, why, and what comes next.</h2>
          </div>
          <p>
            Routine questions would generally receive a response within one
            business day. Outages, security concerns, and major service failures
            receive priority attention.
          </p>
        </div>
        <div className={printStyles.commitmentColumns}>
          <article>
            <h3>Communication and documentation</h3>
            <ul>
              <li>Weekly progress updates while work is active.</li>
              <li>Reviews at each major stage before moving forward.</li>
              <li>A shared list of issues, risks, decisions, and owners.</li>
              <li>Accessibility findings and post-launch priorities.</li>
              <li>Recorded training and written staff instructions.</li>
              <li>Launch, recovery, and support procedures.</li>
            </ul>
          </article>
          <article>
            <h3>Commitments to the City</h3>
            <ul>
              <li>
                Matt Puleri remains project lead and Anthony Damico remains the
                named graphic-design contractor.
              </li>
              <li>
                Neither named member nor any approved specialist will be
                replaced without prior City approval.
              </li>
              <li>
                Additional specialists will be disclosed before assignment.
              </li>
              <li>
                The City receives the agreed records, design files, guidance,
                instructions, and website materials in the final scope.
              </li>
            </ul>
          </article>
        </div>
        <aside className={printStyles.supportBand}>
          <div>
            <strong>One-year professional-services period</strong>
            <span>with the option to develop a maintenance plan</span>
          </div>
          <div>
            <strong>Controlled launch</strong>
            <span>followed by review, issue resolution, and improvements</span>
          </div>
        </aside>
      </PrintPage>

      <PrintPage
        number={10}
        eyebrow="Professional references"
        className={printStyles.referencesPage}
      >
        <p className={printStyles.kicker}>Professional references</p>
        <h2>People who know our work.</h2>
        <div className={printStyles.referenceList}>
          {references.map((reference, index) => (
            <article key={reference.email}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{reference.name}</h3>
                <p>
                  {reference.organization} · {reference.role}
                </p>
              </div>
              <div>
                <a href={`mailto:${reference.email}`}>{reference.email}</a>
                <a href={`tel:${reference.phoneHref}`}>{reference.phone}</a>
              </div>
            </article>
          ))}
        </div>
        <aside className={printStyles.competitionNote}>
          <div>
            <h3>Finally,</h3>
          </div>
          <div>
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
        <div className={printStyles.closing}>
          <AlpathMark />
          <p>Thank you for your consideration.</p>
        </div>
      </PrintPage>
    </div>
  );
}
