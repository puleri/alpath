import NavigationBar from "../components/NavigationBar";

export default function WebServicesPage() {
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
