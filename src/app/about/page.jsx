export const metadata = {
  title: 'About Alpath | Operator-Led Strategy, Design & Engineering',
  description:
    'Meet the operator behind Alpath and learn how strategy, design, engineering, automation, and AI search visibility come together in one accountable practice.',
};

const expertise = [
  {
    title: 'Brand systems',
    description:
      'Positioning, messaging, and visual foundations that make the business easier to understand and trust.',
  },
  {
    title: 'Web systems',
    description:
      'Architecture, conversion paths, and performance standards built around real customer decisions.',
  },
  {
    title: 'Revenue operations',
    description:
      'Lead capture, routing, follow-up, and CRM workflows that keep opportunities moving.',
  },
  {
    title: 'AI search visibility',
    description:
      'SEO, AEO, GEO, and content systems that make your expertise easier for search engines and AI answers to find, understand, trust, and cite.',
  },
];

const principles = [
  {
    title: 'Think in connected systems',
    description:
      'Brand, web, automation, and data should reinforce each other - not create another set of handoffs.',
  },
  {
    title: 'Stay accountable to the result',
    description:
      'Recommendations only matter when they can be implemented, measured, and improved.',
  },
  {
    title: 'Build for independence',
    description:
      'The work should leave your team with more clarity and control, not a permanent dependency.',
  },
];

export default function AboutPage() {
  return (
    <main className="about-page about-page-editorial">
      <header className="container about-editorial-hero">
        <div className="about-hero-topline">
          <p className="about-kicker">About Alpath</p>
          <img src="/alpath/sign.svg" alt="" />
        </div>
        <h1>Built by an operator who stays close to the work.</h1>
        <p className="about-hero-intro">
          Alpath brings strategy, design, and engineering together to help
          growing businesses build clearer brands and better operating systems.
        </p>
      </header>

      <section
        className="about-operator-section"
        aria-labelledby="about-operator-heading"
      >
        <div className="container about-operator-layout">
          <figure className="about-portrait">
            <img
              className="about-portrait-image"
              src="/people/matt/matt-on-grey.png"
              alt="Matt, the operator behind Alpath"
            />
            <figcaption>The operator behind Alpath</figcaption>
          </figure>

          <div className="about-operator-copy">
            <p className="about-kicker">The operator</p>
            <h2 id="about-operator-heading">From strategy to building.</h2>
            <div className="about-story">
              <p>
                I run Alpath as an operator-led practice, shaping the strategy
                while also responsible for turning it into a working system.
              </p>
              <p>
                My expertise sits at the intersection of brand, web, and AI
                visibility. I move from positioning and customer journeys into
                implementation and integrations without losing the connection
                between the idea and the outcome.
              </p>
              <p>
                Like many of the businesses Alpath partners with, I am
                family-first. Family keeps my perspective grounded and reminds
                me that the best work creates more clarity and more time back,
                not more complexity.
              </p>
            </div>
            <div className="about-family-note">
              <span>At work</span>
              <p>Operator, strategist, designer, and engineer.</p>
              <span>At home</span>
              <p>Husband and dad</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="container about-expertise-section"
        aria-labelledby="about-expertise-heading"
      >
        <header className="about-section-heading">
          <p className="about-kicker">Connected expertise</p>
          <h2 id="about-expertise-heading">One practice. Four systems.</h2>
        </header>
        <div className="about-expertise-grid">
          {expertise.map((item, index) => (
            <article className="about-expertise-item" key={item.title}>
              <p className="about-item-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="about-principles-section"
        aria-labelledby="about-principles-heading"
      >
        <div className="container">
          <header className="about-section-heading is-inverted">
            <div>
              <p className="about-kicker">How I work</p>
              <h2 id="about-principles-heading">
                Clear thinking. Direct ownership.
              </h2>
            </div>
            <img src="/alpath/sign.svg" alt="" />
          </header>
          <div className="about-editorial-principles">
            {principles.map((principle, index) => (
              <article
                className="about-editorial-principle"
                key={principle.title}
              >
                <p className="about-item-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container about-contact-panel">
        <img src="/alpath/sign.svg" alt="" />
        <div>
          <p className="about-kicker">Work directly with the operator</p>
          <h2>Bring the bottleneck. We will find the system behind it.</h2>
        </div>
        <a href="/contact">
          <span>Start a conversation</span>
          <span aria-hidden="true">→</span>
        </a>
      </section>
    </main>
  );
}
