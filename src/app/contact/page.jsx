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
      <div className="contact-code-scene" aria-hidden="true">
        <div className="contact-code-editor">
          <div className="contact-code-editor-bar">
            <span className="contact-code-editor-controls">
              <span />
              <span />
              <span />
            </span>
            <span>contact.system.js</span>
          </div>
          <ol className="contact-code-lines">
            <li>
              <code>
                <span className="contact-code-keyword">import</span>{' '}
                {'{ clarity }'}{' '}
                <span className="contact-code-keyword">from</span>{' '}
                <span className="contact-code-string">'@alpath/system'</span>;
              </code>
            </li>
            <li className="contact-code-line-empty">
              <code>&nbsp;</code>
            </li>
            <li>
              <code>
                <span className="contact-code-keyword">const</span> brief ={' '}
                <span className="contact-code-keyword">await</span> listen({'{'}
              </code>
            </li>
            <li>
              <code>
                &nbsp;&nbsp;business:{' '}
                <span className="contact-code-variable">context</span>,
              </code>
            </li>
            <li>
              <code>
                &nbsp;&nbsp;ambition:{' '}
                <span className="contact-code-string">'forward'</span>,
              </code>
            </li>
            <li>
              <code>{'}'});</code>
            </li>
            <li className="contact-code-line-empty">
              <code>&nbsp;</code>
            </li>
            <li>
              <code>
                <span className="contact-code-keyword">export const</span>{' '}
                direction =
              </code>
            </li>
            <li>
              <code>&nbsp;&nbsp;clarity(brief);</code>
            </li>
          </ol>
        </div>
        <img className="contact-code-logo" src="/alpath/sign.svg" alt="" />
      </div>

      <section className="contact-shell container">
        <header className="contact-hero">
          <div className="contact-hero-topline">
            <p className="case-studies-eyebrow">Contact</p>
            <img src="/alpath/sign.svg" alt="" />
          </div>
          <h1>Time to build.</h1>
          <p>
            Tell us about your business. Then we will email you to set up a real
            conversation. Let&apos;s strategize how to get from where you are to
            where you want to be.
          </p>
        </header>

        <div className="contact-bento-grid">
          <section className="contact-bento-card contact-bento-form-wrap">
            <header className="contact-card-heading">
              <p aria-hidden="true">01 / Project brief</p>
              <h2>Brand and website brief</h2>
            </header>
            <ContactForm />
          </section>

          <aside className="contact-bento-card contact-bento-prep">
            <header className="contact-card-heading">
              <p aria-hidden="true">02 / Prepare</p>
              <img
                className="contact-prep-mark"
                src="/alpath/sign.svg"
                alt=""
              />
              <h2>Helpful context before we start</h2>
            </header>
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
