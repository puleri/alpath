"use client";

import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
  const cardRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(card);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="cta-section">
      <div className="container">
        <div
          ref={cardRef}
          className={`cta-card${hasAnimated ? " is-visible" : ""}`}
        >
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to turn your revenue system into a predictable growth engine?
            </h2>
            <div className="cta-actions">
              <button className="cta-button cta-button-primary" type="button">
                Schedule a consult
              </button>
              <button className="cta-button cta-button-secondary" type="button">
                See recent wins
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
