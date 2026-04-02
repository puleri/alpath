export default function NavigationBar() {
  return (
    <header className="top-bar">
      <div className="top-bar-content container">
        <a className="brand" href="/">
          <img
            className="brand-icon-nav"
            src="/alpath/sign.svg"
            alt="Alpath Engineering brand mark"
          />
          <span className="brand-text"><span className="alpath-weight">Alpath</span> Engineering</span>
        </a>
        <nav className="nav-links">
          <div className="nav-item nav-dropdown">
            <a className="nav-link nav-dropdown-toggle" href="/services" aria-haspopup="true">
              Services <span className="nav-dropdown-icon">▾</span>
            </a>
            <div className="nav-dropdown-menu" role="menu">
              <a className="nav-dropdown-link" href="/services/revenue-automation" role="menuitem">
                Revenue Systems
              </a>
              <a className="nav-dropdown-link" href="/docs/business-intelligence" role="menuitem">
                Integrations
              </a>
              <a className="nav-dropdown-link" href="/services/web-services" role="menuitem">
                Web Strategy
              </a>
            </div>
          </div>
          <a className="nav-link" href="/case-studies">
            Case Studies
          </a>
          <a className="nav-link" href="/about">
            About
          </a>
        </nav>
        <button className="contact-button" type="button">
          Contact us <span className="contact-icon-nav">→</span>
        </button>
      </div>
    </header>
  );
}
