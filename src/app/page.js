import LeadershipRevenueDashboard from "./components/LeadershipRevenueDashboard";
import CursorTrailsLayer from "./components/CursorTrailsLayer";

export default function Home() {
  return (
    <main className="home">
            <CursorTrailsLayer />
      <header className="top-bar">
        <div className="brand">
          <img
            className="brand-icon-nav"
            src="/alpath/sign.svg"
            alt="Alpath Engineering brand mark"
          />
          <span className="brand-text">Alpath Engineering</span>
        </div>
        <nav className="nav-links">
          <a className="nav-link" href="#services">
            Services
          </a>
          <a className="nav-link" href="#work">
            Work
          </a>
          <a className="nav-link" href="#insights">
            Insights
          </a>
        </nav>
        <button className="contact-button" type="button">
          Contact us <span className="contact-icon-nav">→</span>
        </button>
      </header>

      <section className="hero">
        <div className="hero-brand">
          <img
            className="brand-icon-hero"
            src="/alpath/sign.svg"
            alt="Alpath Engineering brand mark"
          />
          <span className="hero-brand-text">Alpath Engineering</span>
        </div>
        <h1 className="hero-title">
          Digital systems that keep revenue visible, trusted, and ready to scale.
        </h1>
        <p>
          We blend strategy, design, and engineering to build the infrastructure ambitious
          teams need to lead with clarity.
        </p>
        <div className="hero-actions">
          <button className="primary-button" type="button">
            Book a strategy call
          </button>
          <button className="secondary-button" type="button">
            Explore the playbook
          </button>
        </div>
        <p className="alpath-signature">— Alpath Engineering</p>
      </section>

      <section className="dashboard-page">
        <LeadershipRevenueDashboard />
      </section>
    </main>
  );
}
