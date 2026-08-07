'use client';

import { useEffect, useId, useState } from 'react';

const navItems = [
  { href: '/our-work', label: 'Portfolio' },
  { href: '/about', label: 'About' },
];

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navId = useId();

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', closeOnEscape);

    return () => {
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const mobileMenuStyle = {
    maxHeight: isMenuOpen ? '340px' : '0px',
    opacity: isMenuOpen ? 1 : 0,
    padding: isMenuOpen ? '14px 0 10px' : '0px',
    pointerEvents: isMenuOpen ? 'auto' : 'none',
    transform: isMenuOpen ? 'translateY(0)' : 'translateY(-8px)',
    visibility: isMenuOpen ? 'visible' : 'hidden',
  };

  const mobileNavLinkStyle = (index) => ({
    opacity: isMenuOpen ? 0.9 : 0,
    transform: isMenuOpen ? 'translateY(0)' : 'translateY(-6px)',
    transitionDelay: isMenuOpen ? `${70 + index * 40}ms` : '0ms',
  });

  const mobileContactStyle = {
    opacity: isMenuOpen ? 0.94 : 0,
    transform: isMenuOpen ? 'translateY(0)' : 'translateY(-6px)',
    transitionDelay: isMenuOpen ? '190ms' : '0ms',
  };

  return (
    <header className={`top-bar${isMenuOpen ? ' is-nav-open' : ''}`}>
      <div className="top-bar-content container">
        <a className="brand" href="/" onClick={closeMenu}>
          <img
            className="brand-icon-nav"
            src="/alpath/sign.svg"
            alt="Alpath Engineering brand mark"
          />
          <span className="brand-text">
            <span className="alpath-weight">Alpath</span> Engineering
          </span>
        </a>
        <div className="nav-menu nav-menu-desktop">
          <nav className="nav-links" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a className="nav-link" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="contact-button" href="/contact">
            Contact us <span className="contact-icon-nav">→</span>
          </a>
        </div>
        <button
          className={`nav-toggle${isMenuOpen ? ' is-open' : ''}`}
          type="button"
          aria-controls={navId}
          aria-expanded={isMenuOpen}
          aria-label={
            isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          onClick={() => {
            setIsMenuOpen((current) => !current);
          }}
        >
          <span className="nav-toggle-line nav-toggle-line-top" />
          <span className="nav-toggle-line nav-toggle-line-middle" />
          <span className="nav-toggle-line nav-toggle-line-bottom" />
        </button>
        <div
          aria-hidden={!isMenuOpen}
          className={`mobile-nav-menu${isMenuOpen ? ' is-open' : ''}`}
          data-menu-open={isMenuOpen}
          id={navId}
          style={mobileMenuStyle}
        >
          <nav className="nav-links" aria-label="Primary navigation">
            {navItems.map((item, index) => (
              <a
                className="nav-link"
                href={item.href}
                key={item.href}
                onClick={closeMenu}
                style={mobileNavLinkStyle(index)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            className="contact-button"
            href="/contact"
            onClick={closeMenu}
            style={mobileContactStyle}
          >
            Contact us <span className="contact-icon-nav">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
