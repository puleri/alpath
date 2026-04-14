import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact',
  description:
    'Start a conversation with Alpath Engineering about your revenue systems, web strategy, and business intelligence goals.',
};

const prepChecklist = [
  'Set NEXT_PUBLIC_EMAILJS_SERVICE_ID in your local and production env.',
  'Set NEXT_PUBLIC_EMAILJS_TEMPLATE_ID to the template mapped to this form.',
  'Set NEXT_PUBLIC_EMAILJS_PUBLIC_KEY so the client-side send can authenticate.',
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
            form now sends through EmailJS using your configured keys.
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
              Prefer direct email? Reach out at{' '}
              <a href="mailto:matt@alpathengineering.com">
                matt@alpathengineering.com
              </a>
              .
            </p>
          </aside>

          <section className="contact-bento-card contact-bento-form-wrap">
            <h2>Project intake form</h2>
            <ContactForm />
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
