import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <NavigationBar />
      <main className="privacy-page">
        <header className="privacy-hero">
          <p className="section-kicker">Privacy Policy</p>
          <h1>Privacy Policy</h1>
          <p className="privacy-effective-date">Effective date: [Insert date]</p>
          <p>
            This Privacy Policy explains how Alpath Engineering (“Alpath,” “we,”
            or “us”) collects, uses, and protects information when you visit our
            website or contact us.
          </p>
          <p>
            We believe privacy is a matter of trust and professional
            responsibility. We collect the minimum information necessary to
            communicate with you and deliver our services, and nothing more.
          </p>
        </header>

        <section className="privacy-section">
          <h2>1. Information We Collect</h2>
          <p>We collect only the information you choose to provide.</p>
          <h3>Information You Provide Directly</h3>
          <p>When you contact us through our website, we may collect:</p>
          <ul>
            <li>Your name</li>
            <li>Your email address</li>
            <li>Any information you include in your message</li>
          </ul>
          <p>We do not collect:</p>
          <ul>
            <li>Analytics or tracking data</li>
            <li>Advertising or marketing profiles</li>
            <li>Cookies for behavioral tracking</li>
            <li>Payment information through our website</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>2. How We Use Your Information</h2>
          <p>We use the information you provide solely to:</p>
          <ul>
            <li>Respond to inquiries</li>
            <li>Communicate about potential or active projects</li>
            <li>Provide requested services</li>
          </ul>
          <p>We do not use your information for:</p>
          <ul>
            <li>Advertising or remarketing</li>
            <li>Selling or sharing data with third parties</li>
            <li>Data mining or profiling</li>
            <li>Training artificial intelligence systems</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>3. Client Data and Confidentiality</h2>
          <p>
            As part of our work, Alpath Engineering may be granted access to
            client-owned systems, codebases, credentials, or other sensitive
            materials.
          </p>
          <p>
            We treat all client data as confidential and handle it according to
            the following principles:
          </p>
          <ul>
            <li>Client data remains the sole property of the client</li>
            <li>
              Access is limited to what is necessary to perform agreed-upon work
            </li>
            <li>
              Client data is never reused, sold, analyzed, or disclosed outside
              the scope of the project
            </li>
            <li>
              We do not retain client materials beyond what is reasonably
              required, unless otherwise agreed
            </li>
          </ul>
          <p>
            Any temporary access provided for development, debugging, or
            deployment purposes is used responsibly and with professional
            restraint.
          </p>
        </section>

        <section className="privacy-section">
          <h2>4. Data Sharing</h2>
          <p>We do not sell, rent, or trade personal information.</p>
          <p>Information is shared only when:</p>
          <ul>
            <li>You explicitly request or authorize it, or</li>
            <li>
              It is required to deliver contracted services (for example,
              interacting with client-designated platforms or hosting providers)
            </li>
          </ul>
          <p>We do not share personal data for marketing or advertising purposes.</p>
        </section>

        <section className="privacy-section">
          <h2>5. Data Security</h2>
          <p>
            We take reasonable and professional steps to protect the information
            entrusted to us, including:
          </p>
          <ul>
            <li>Limiting access to sensitive information</li>
            <li>Using secure systems and modern development practices</li>
            <li>Handling credentials and confidential materials responsibly</li>
          </ul>
          <p>
            No method of transmission or storage is completely secure, but we
            strive to apply safeguards appropriate to the nature of our work.
          </p>
        </section>

        <section className="privacy-section">
          <h2>6. Data Retention</h2>
          <p>We retain personal information only for as long as necessary to:</p>
          <ul>
            <li>Respond to inquiries</li>
            <li>Maintain professional correspondence</li>
            <li>Fulfill legal, contractual, or accounting obligations</li>
          </ul>
          <p>You may request deletion of your contact information at any time.</p>
        </section>

        <section className="privacy-section">
          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Ask what information we have about you</li>
            <li>Request corrections or deletion of your information</li>
            <li>Withdraw consent for future communication</li>
          </ul>
          <p>
            Requests can be made by contacting us using the information below.
          </p>
        </section>

        <section className="privacy-section">
          <h2>8. Children’s Privacy</h2>
          <p>
            Our website and services are not directed to children under 13, and
            we do not knowingly collect personal information from children.
          </p>
        </section>

        <section className="privacy-section">
          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. Updates will be
            posted on this page with a revised effective date.
          </p>
        </section>

        <section className="privacy-section">
          <h2>10. Contact</h2>
          <p>
            If you have questions or concerns about this Privacy Policy or how
            your information is handled, you may contact us at:
          </p>
          <p className="privacy-contact">Alpath Engineering</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
