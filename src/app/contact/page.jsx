export const metadata = {
  title: "Contact",
  description:
    "Start a conversation with Alpath Engineering about your revenue systems, web strategy, and business intelligence goals.",
};

const prepChecklist = [
  "Form IDs and name attributes are ready for EmailJS template mapping.",
  "Submit flow currently posts to a thank-you route for no-backend testing.",
  "Replace the action with your EmailJS client handler when you are ready.",
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-shell container">
        <header className="contact-hero">
          <p className="case-studies-eyebrow">Contact</p>
          <h1>Build your next system with a bento-lunch-box brief</h1>
          <p>
            Share your goals below and we will map the best first step. This
            placeholder form is set up so EmailJS can be wired in later.
          </p>
        </header>

        <div className="contact-bento-grid">
          <aside className="contact-bento-card contact-bento-intro">
            <h2>What to include</h2>
            <ul>
              <li>What outcome you need in the next 90 days.</li>
              <li>The biggest bottleneck in your current workflow.</li>
              <li>Any existing tools we should work with.</li>
            </ul>
            <p className="contact-direct-line">
              Prefer direct email? Reach out at{" "}
              <a href="mailto:matt@alpathengineering.com">
                matt@alpathengineering.com
              </a>
              .
            </p>
          </aside>

          <section className="contact-bento-card contact-bento-form-wrap">
            <h2>Project intake form</h2>
            <form
              className="contact-form"
              action="/thank-you"
              method="get"
              data-emailjs-ready="true"
            >
              <input type="hidden" name="contact_source" value="website" />
              <div className="contact-form-row">
                <label htmlFor="contact_name">Name</label>
                <input
                  id="contact_name"
                  name="contact_name"
                  type="text"
                  autoComplete="name"
                  required
                />
              </div>
              <div className="contact-form-row">
                <label htmlFor="contact_email">Email</label>
                <input
                  id="contact_email"
                  name="contact_email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>
              <div className="contact-form-row">
                <label htmlFor="company_name">Company</label>
                <input
                  id="company_name"
                  name="company_name"
                  type="text"
                  autoComplete="organization"
                />
              </div>
              <div className="contact-form-row">
                <label htmlFor="project_scope">Project brief</label>
                <textarea
                  id="project_scope"
                  name="project_scope"
                  rows={6}
                  placeholder="Tell us what you are trying to improve."
                  required
                />
              </div>
              <button className="primary-button contact-submit" type="submit">
                Send brief <span aria-hidden="true">→</span>
              </button>
            </form>
          </section>

          <aside className="contact-bento-card contact-bento-prep">
            <h2>EmailJS handoff notes</h2>
            <ul>
              {prepChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
