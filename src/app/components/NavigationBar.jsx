export default function NavigationBar() {
  return (
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
  );
}
