export default function NavigationBar() {
  return (
    <header className="top-bar">
      <div className="top-bar-content container">
        <div className="brand">
          <img
            className="brand-icon-nav"
            src="/alpath/sign.svg"
            alt="Alpath Engineering brand mark"
          />
          <span className="brand-text"><span className="alpath-weight">Alpath</span> Engineering</span>
        </div>
        <nav className="nav-links">
          <div className="nav-item nav-dropdown">
            <button className="nav-link nav-dropdown-toggle" type="button" aria-haspopup="true">
              Services <span className="nav-dropdown-icon">▾</span>
            </button>
            <div className="nav-dropdown-menu" role="menu">
              <a className="nav-dropdown-link" href="#revenue-systems" role="menuitem">
                Revenue Systems
              </a>
              <a className="nav-dropdown-link" href="#integrations" role="menuitem">
                Integrations
              </a>
              <a className="nav-dropdown-link" href="#web-systems" role="menuitem">
                Web Systems
              </a>
            </div>
          </div>
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

      </div>
    </header>
  );
}
