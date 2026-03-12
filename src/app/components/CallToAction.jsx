"use client";

import { useEffect, useRef, useState } from "react";

const CTA_VARIANTS = {
  default: {
    title: "Ready to turn your revenue system into a predictable growth engine?",
    primaryAction: "Schedule a consult",
    secondaryAction: "See recent wins",
  },
  websiteAudit: {
    title: "Start with a quick evaluation",
    primaryAction: "Schedule a Website Audit",
    secondaryAction: "See How It Works",
  },
};

export default function CallToAction({ variant = "default" }) {
  const cardRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const selectedVariant = CTA_VARIANTS[variant] ?? CTA_VARIANTS.default;

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
      <div className="">
        <div
          ref={cardRef}
          className={`cta-card${hasAnimated ? " is-visible" : ""}`}
        >
          <div className="cta-content">
            <h2 className="cta-title">{selectedVariant.title}</h2>
            <div className="cta-actions">
              <button className="cta-button cta-button-primary" type="button">
                {selectedVariant.primaryAction}
              </button>
              <button className="cta-button cta-button-secondary" type="button">
                {selectedVariant.secondaryAction}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
