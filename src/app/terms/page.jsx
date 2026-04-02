export default function TermsPage() {
  return (
    <main className="privacy-page">
      <header className="privacy-hero">
        <p className="section-kicker">Terms of Service</p>
        <h1>Terms of Service</h1>
        <p className="privacy-effective-date">Effective date: April 2, 2026</p>
        <p>
          These Terms of Service ("Terms") govern how Alpath Engineering
          ("Alpath," "we," or "us") provides services to clients. By engaging
          with Alpath, you agree to these Terms unless superseded by a signed
          agreement.
        </p>
        <p>
          Our work is structured, systems-focused, and collaborative. These
          terms are designed to set clear expectations and protect both parties.
        </p>
      </header>

      <section className="privacy-section">
        <h2>1. Services Overview</h2>
        <p>
          Alpath provides digital consulting, web development, automation
          systems, and analytics implementation.
        </p>
        <p>
          Project deliverables, timelines, and outcomes vary by engagement and
          are defined in each proposal, statement of work (SOW), or written
          agreement.
        </p>
      </section>

      <section className="privacy-section">
        <h2>2. Scope &amp; Change Control</h2>
        <p>
          Work is limited to what is explicitly outlined in the approved
          proposal, SOW, or agreement.
        </p>
        <ul>
          <li>Out-of-scope requests require a written change order</li>
          <li>
            Additional work may be billed at an agreed project rate or hourly
            rate
          </li>
          <li>
            Revisions are limited to three rounds per deliverable unless
            otherwise stated
          </li>
        </ul>
        <p>
          Any work requested outside the agreed scope will require a written
          change order.
        </p>
      </section>

      <section className="privacy-section">
        <h2>3. Fees &amp; Payment Terms</h2>
        <ul>
          <li>A 50% deposit is required before work begins unless stated otherwise</li>
          <li>Remaining balances are due at milestones or project completion</li>
          <li>Late or missed payments may result in an immediate pause in work</li>
          <li>
            Final files, deployments, credentials, and handoff materials are
            released only after full payment is received
          </li>
          <li>All fees are non-refundable once work has commenced</li>
          <li>
            Client is responsible for third-party costs (hosting, APIs,
            subscriptions, software licenses, and platform usage)
          </li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>4. Client Responsibilities</h2>
        <p>The client agrees to:</p>
        <ul>
          <li>Provide required content, assets, credentials, and approvals on time</li>
          <li>Assign a single point of contact for decisions and feedback</li>
          <li>Review deliverables and provide consolidated feedback promptly</li>
        </ul>
        <p>
          Delays in client response may result in adjusted timelines and
          additional fees.
        </p>
      </section>

      <section className="privacy-section">
        <h2>5. Intellectual Property</h2>
        <ul>
          <li>
            Alpath retains ownership of pre-existing materials, internal
            frameworks, code patterns, methods, and reusable systems
          </li>
          <li>
            Upon full payment, client receives rights to use final
            client-specific deliverables as defined in the agreement
          </li>
          <li>
            Alpath may reuse non-client-specific components, structures, and
            know-how in future work
          </li>
        </ul>
        <p>
          Ownership transfer or license rights for final deliverables do not
          become effective until full payment is complete.
        </p>
      </section>

      <section className="privacy-section">
        <h2>6. Warranties &amp; Liability Limits</h2>
        <p>
          Services are provided on an "as is" and "as available" basis to the
          fullest extent permitted by law.
        </p>
        <ul>
          <li>
            Alpath does not guarantee specific business outcomes, including
            traffic, leads, conversions, revenue, or search ranking performance
          </li>
          <li>
            Client is responsible for business decisions, operations, and
            implementation choices made using deliverables
          </li>
        </ul>
        <p>In no event shall liability exceed the total fees paid.</p>
      </section>

      <section className="privacy-section">
        <h2>7. Third-Party Tools &amp; Integrations</h2>
        <p>
          Projects may involve third-party tools and services (including
          platforms like Sanity, Supabase, hosting providers, analytics tools,
          and API vendors).
        </p>
        <ul>
          <li>
            Alpath is not responsible for third-party outages, policy changes,
            pricing updates, or platform limitations
          </li>
          <li>
            The client is responsible for accounts, subscriptions, and
            obligations under third-party provider terms unless otherwise agreed
          </li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>8. Termination</h2>
        <p>
          Either party may terminate an engagement with written notice, subject
          to any minimum commitments in a signed agreement.
        </p>
        <ul>
          <li>Client must pay for all work performed through termination date</li>
          <li>Deposits are non-refundable</li>
          <li>
            Alpath may pause or terminate work for non-payment, prolonged client
            inactivity, or breach of these Terms
          </li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>9. Confidentiality</h2>
        <p>
          Both parties agree to keep confidential, non-public information
          private and to use it only for purposes related to the engagement,
          except as required by law.
        </p>
      </section>

      <section className="privacy-section">
        <h2>10. Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws
          of the State of Washington, without regard to conflict of law
          principles.
        </p>
      </section>
    </main>
  );
}
