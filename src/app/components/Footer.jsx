"use client";

import { useEffect, useRef, useState } from "react";

const primaryLinks = [
  "Download",
  "Product",
  "Docs",
  "Changelog",
  "Press",
  "Releases",
];

const secondaryLinks = ["Blog", "Pricing", "Use Cases"];

const legalLinks = ["About Alpath", "Client Stories", "Privacy", "Terms"];

const toEndpoint = (label) => `/${label.toLowerCase().replace(/\s+/g, "-")}`;

export default function Footer() {
  const wordmarkRef = useRef(null);
  const [isRaised, setIsRaised] = useState(false);

  useEffect(() => {
    const wordmark = wordmarkRef.current;
    if (!wordmark) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsRaised(entry.isIntersecting);
      },
      { threshold: 0.6 }
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
          <p className="footer-kicker">Experience liftoff</p>
          <p className="footer-subtitle">
            Keep your revenue systems coordinated, visible, and ready for the
            next stage.
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
        <span className="footer-brand">Alpath</span>
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
