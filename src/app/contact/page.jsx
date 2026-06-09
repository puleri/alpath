import Image from 'next/image';
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact Alpath | Brand & Website Strategy',
  description:
    'Start a conversation about brand positioning, website strategy, and digital experiences built to create trust and generate qualified opportunities.',
};

const prepChecklist = [
  'What your current brand or website is not communicating clearly.',
  'The audiences, offers, and buying decisions the experience needs to support.',
  'Any launch dates, internal stakeholders, or systems the work must connect with.',
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-shell container">
        <header className="contact-hero">
          <div>
            <p className="case-studies-eyebrow">Contact</p>
            <h1>
              Let’s build a brand and website that make your value obvious
            </h1>
            <p>
              Share where your positioning, messaging, or website is falling
              short. We’ll respond with practical next steps for creating a
              sharper digital presence that builds trust, explains your value,
              and turns qualified visitors into real conversations.
            </p>
          </div>
          <div className="contact-hero-art">
            <Image
              src="/heros/contact.svg"
              alt="Brand and website strategy illustration"
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
              <li>
                The growth outcome you want your brand or website to support.
              </li>
              <li>
                Where prospects are confused, hesitating, or dropping off today.
              </li>
              <li>
                Any messaging, visual identity, content, or technical
                constraints.
              </li>
            </ul>
            <p className="contact-direct-line">
              Prefer direct email? Reach us at{' '}
              <a href="mailto:contact@alpathengineering.com">
                contact@alpathengineering.com
              </a>
              .
            </p>
          </aside>

          <section className="contact-bento-card contact-bento-form-wrap">
            <h2>Brand and website brief</h2>
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
