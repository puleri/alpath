import NavigationBar from "../components/NavigationBar";

export default function WebServicesPage() {
  const lighthouseScores = [
    { label: "Performance", score: 99 },
    { label: "SEO", score: 100 },
    { label: "Best Practices", score: 97 },
    { label: "Accessibility", score: 99 },
  ];

  return (
    <>
      <NavigationBar />
      <main className="web-services-page">
        <section className="web-services-grid">
          <div className="web-services-hero">
            <div className="web-services-hero-copy">
              <h1>Your website, finally working as hard as your business</h1>
              <p>
                We build high-performance, conversion-optimized web platforms
                that integrate seamlessly with your core engineering and revenue
                systems.
              </p>
              <div className="hero-actions">
                <button className="primary-button" type="button">
                  Request a Web Audit
                </button>
                <button className="secondary-button" type="button">
                  View Expertise
                </button>
              </div>
            </div>
            <div className="web-services-hero-visual">
              <img
                src="/placeholders/small-projects.svg"
                alt="Website and mobile UI mockups"
              />
            </div>
          </div>

          <div className="web-services-insights-row">
            <article className="architecture-panel">
              <h2>Modern Architecture</h2>
              <p>
                Fast, secure, and scalable web solutions built on cutting-edge
                stacks that ensure your platform evolves with your traffic.
              </p>
              <div
                className="architecture-panel-dots"
                aria-hidden="true"
              />
            </article>

            <aside className="lighthouse-panel" aria-label="Lighthouse scores">
              <div className="lighthouse-score-grid">
                {lighthouseScores.map((item) => (
                  <div key={item.label} className="lighthouse-score-item">
                    <h3>{item.label}</h3>
                    <div
                      className="lighthouse-score-circle"
                      style={{ "--score": `${item.score}%` }}
                      aria-label={`${item.label} score ${item.score}%`}
                    >
                      <span>{item.score}%</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lighthouse-progress-wrap" aria-hidden="true">
                <div className="lighthouse-progress-track">
                  <div className="lighthouse-progress-fill" />
                </div>
                <div className="lighthouse-progress-caption">
                  <p>85% Improved Engagement Rate</p>
                  <p>*A Real Client</p>
                </div>
              </div>
            </aside>
          </div>

          <div className="web-services-third-row" aria-label="Web service value points">
            <article className="web-services-third-card">
              <p>
                Build brand authority through a refined digital experience.
              </p>
            </article>
            <article className="web-services-third-card">
              <p>
                Building a custom site means: the sky is the limit. Use your
                designs or work with our designers.
              </p>
            </article>
            <article className="web-services-third-card">
              <p>Did you know: Bounce rates reach 90% due to slow sites?</p>
            </article>
            <article className="web-services-third-card">
              <p>Make your site performant. Even on a 5 year old phone.</p>
            </article>
          </div>

          <div className="web-services-card">
            <h2>Launch &amp; refresh</h2>
            <p>
              Placeholder copy: Describe how you translate brand strategy into a
              clean, conversion-focused homepage with clear navigation and story
              beats.
            </p>
            <div className="placeholder-image">
              Placeholder image: A layered collage of website wireframes and
              typography samples.
            </div>
          </div>

          <div className="web-services-card">
            <h2>Always-on support</h2>
            <p>
              Placeholder copy: Highlight the calm reliability of having updates,
              monitoring, and performance tuning handled behind the scenes.
            </p>
            <div className="placeholder-image">
              Placeholder image: A dashboard view showing uptime graphs and
              response time snapshots.
            </div>
          </div>

          <div className="web-services-card">
            <h2>Growth-ready builds</h2>
            <p>
              Placeholder copy: Note the flexible architecture that lets new
              landing pages, campaigns, or integrations ship quickly.
            </p>
            <div className="placeholder-image">
              Placeholder image: A modular layout system with reusable blocks
              snapping into place.
            </div>
          </div>

          <div className="web-services-card">
            <h2>Performance storytelling</h2>
            <p>
              Placeholder copy: Explain how reporting turns analytics into
              actionable insights for marketing and sales teams.
            </p>
            <div className="placeholder-image">
              Placeholder image: A meeting table with charts projected on the
              wall.
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
