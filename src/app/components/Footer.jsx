"use client";

import { useEffect, useRef, useState } from "react";

const primaryLinks = ["Docs"];

const secondaryLinks = ["Use Cases"];

const legalLinks = ["About", "Privacy", "Terms"];

const toEndpoint = (label) => `/${label.toLowerCase().replace(/\s+/g, "-")}`;

export default function Footer() {
  const wordmarkRef = useRef(null);
  const [isRaised, setIsRaised] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const wordmark = wordmarkRef.current;
    if (!wordmark) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsRaised(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(wordmark);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        <div className="footer-intro">
          <p className="footer-kicker">Experience momentum</p>
          <p className="footer-subtitle">
            Keep your digital experience modern, performant, and visible.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            {primaryLinks.map((link) => (
              <a key={link} className="footer-link" href={toEndpoint(link)}>
                {link}
              </a>
            ))}
          </div>
          <div className="footer-column">
            {secondaryLinks.map((link) => (
              <a key={link} className="footer-link" href={toEndpoint(link)}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div ref={wordmarkRef} className="footer-wordmark">
        <span
          className={`footer-wordmark-prefix${isRaised ? " is-raised" : ""}`}
        >
          Al
        </span>
        <span>path</span>
      </div>

      <div className="container footer-meta">
        <div className="footer-brand-wrap">
          <div>
                        <span className="footer-brand">Alpath Engineering </span>
          <span className="footer-rights">
            © {currentYear} All Rights Reserved.
          </span>

          </div>
          <div className="footer-contact-line">
            <span className="footer-contact-label">Phone:</span>{" "}
            <a className="footer-phone" href="tel:+13604478757">
              (360) 447 8757
            </a>
          </div>
          <div className="footer-contact-line">
            <span className="footer-contact-label">Hours:</span> 8:00am - 5:00pm
          </div>
        </div>
        <div className="footer-legal">
          {legalLinks.map((link) => (
            <a key={link} className="footer-legal-link" href={toEndpoint(link)}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
