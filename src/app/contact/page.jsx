import Image from 'next/image';
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact',
  description:
    'Tell us where your process is breaking and we’ll map a practical plan to fix it.',
};

const prepChecklist = [
  'Your top priority for the next quarter.',
  'Where work is currently getting stuck.',
  'The tools and teams this project touches.',
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-shell container">
        <header className="contact-hero">
          <div>
            <p className="case-studies-eyebrow">Contact</p>
            <h1>Let’s fix the systems slowing your team down</h1>
            <p>
              Share a few details about your goals and constraints. We’ll reply
              with clear next steps, realistic scope, and a plan your team can
              execute.
            </p>
          </div>
          <div className="contact-hero-art">
            <Image
              src="/heros/systems.png"
              alt="System architecture illustration"
              width={460}
              height={320}
              priority
            />
          </div>
        </header>

        <div className="contact-bento-grid">
          <aside className="contact-bento-card contact-bento-intro">
            <h2>What to include</h2>
            <ul>
              <li>The business result you need, not just the feature list.</li>
              <li>What is blocking progress today.</li>
              <li>Any timelines, dependencies, or technical constraints.</li>
            </ul>
            <p className="contact-direct-line">
              Prefer direct email? Reach us at{' '}
              <a href="mailto:matt@alpathengineering.com">
                matt@alpathengineering.com
              </a>
              .
            </p>
          </aside>

          <section className="contact-bento-card contact-bento-form-wrap">
            <h2>Project brief</h2>
            <ContactForm />
          </section>

          <aside className="contact-bento-card contact-bento-prep">
            <h2>Helpful context before we start</h2>
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
