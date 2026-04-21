"use client";

import { useEffect, useRef, useState } from "react";

const CTA_VARIANTS = {
  default: {
    title: "Ready to turn your revenue system into a predictable growth engine?",
    description: "",
    primaryAction: "Schedule a consult",
    secondaryAction: "See recent wins",
    primaryHref: "/contact",
    secondaryHref: "/case-studies",
    tone: "dark",
  },
  websiteAudit: {
    title: "Start with a free evaluation",
    description: "",
    primaryAction: "Schedule a website audit",
    secondaryAction: "See how it works",
    primaryHref: "/contact",
    secondaryHref: "/services/web-services",
    tone: "dark",
  },
  webServicesBottom: {
    title: "Ready to engineer a high-performance web presence?",
    description:
      "Our audits reveal the technical bottlenecks preventing your website from scaling.",
    primaryAction: "Request a Web Audit",
    primaryHref: "/contact",
    tone: "light",
  },
  customBottom: {
    title: "Have a product idea that needs real execution?",
    description:
      "We can help you scope, design, and build a practical MVP or deliver the full production system.",
    primaryAction: "Talk to an Engineer",
    secondaryAction: "See Related Services",
    primaryHref: "/contact",
    secondaryHref: "/services",
    tone: "light",
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
          className={`cta-card cta-card-${selectedVariant.tone}${hasAnimated ? " is-visible" : ""}`}
        >
          <div className="cta-content">
            <h2 className="cta-title">{selectedVariant.title}</h2>
            {selectedVariant.description ? (
              <p className="cta-description">{selectedVariant.description}</p>
            ) : null}
            <div className="cta-actions">
              <a className="cta-button cta-button-primary" href={selectedVariant.primaryHref}>
                {selectedVariant.primaryAction}
              </a>
              {selectedVariant.secondaryAction ? (
                <a className="cta-button cta-button-secondary" href={selectedVariant.secondaryHref}>
                  {selectedVariant.secondaryAction}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
