const navItems = ["Services", "Use Cases", "Pricing", "Blog", "Blog"];

export default function Home() {
  return (
    <main className="home">
      <header className="top-bar">
        <div className="brand">
          <img
            src="/alpath/icon.svg"
            alt="Alpath Engineering icon"
            className="brand-icon"
          />
          <span className="brand-text">
            <strong>Alpath</strong> Engineering
          </span>
        </div>
        <nav className="nav-links">
          {navItems.map((item) => (
            <a key={item} href="#" className="nav-link">
              {item}
            </a>
          ))}
        </nav>
        <button className="contact-button" type="button">
          Contact
          <span className="contact-icon" aria-hidden="true">
            ✉
          </span>
        </button>
      </header>

      <section className="hero">
        <div className="hero-brand">
          <img
            src="/alpath/icon.svg"
            alt="Alpath Engineering icon"
            className="hero-icon"
          />
          <span className="hero-brand-text">
            <strong>Alpath</strong> Engineering
          </span>
        </div>

        <h1 className="hero-title">
          Digital Solutions working
          <br />
          as hard as your business
        </h1>

        <div className="hero-actions">
          <button className="primary-button" type="button">
            Contact
            <span className="contact-icon" aria-hidden="true">
              ✉
            </span>
          </button>
          <button className="secondary-button" type="button">
            Explore Use Cases
          </button>
        </div>
      </section>
    </main>
  );
}
