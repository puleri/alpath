"use client";
import { useEffect, useRef, useState } from "react";
import CallToAction from "../../components/CallToAction";

const SCORE_ANIMATION_MS = 1700;
const PROGRESS_ANIMATION_MS = 1800;

function easeInOutCubic(value) {
  return value < 0.5
    ? 4 * value * value * value
    : 1 - Math.pow(-2 * value + 2, 3) / 2;
}

function LighthouseMetricCircle({ label, score, shouldAnimate }) {
  const [displayedScore, setDisplayedScore] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    let frameId;
    const start = performance.now();

    const animate = (time) => {
      const elapsed = Math.min((time - start) / SCORE_ANIMATION_MS, 1);
      const eased = easeInOutCubic(elapsed);
      setDisplayedScore(Math.round(score * eased));

      if (elapsed < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [score, shouldAnimate]);

  return (
    <div className="lighthouse-score-item">
      <h3>{label}</h3>
      <div
        className="lighthouse-score-circle"
        style={{ "--score": `${displayedScore}%` }}
        aria-label={`${label} score ${displayedScore}%`}
      >
        <span>{displayedScore}%</span>
      </div>
    </div>
  );
}

export default function WebServicesPage() {
  const lighthouseScores = [
    { label: "Performance", score: 99 },
    { label: "SEO", score: 100 },
    { label: "Best Practices", score: 97 },
    { label: "Accessibility", score: 99 },
  ];

  const metricsRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const [animateMetrics, setAnimateMetrics] = useState(false);
  const [engagementScore, setEngagementScore] = useState(0);

  useEffect(() => {
    const metricNode = metricsRef.current;
    if (!metricNode || hasAnimatedRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries.some((entry) => entry.isIntersecting);
        if (!isVisible || hasAnimatedRef.current) return;

        hasAnimatedRef.current = true;
        setAnimateMetrics(true);
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(metricNode);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!animateMetrics) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setEngagementScore(85);
      return;
    }

    let frameId;
    const start = performance.now();

    const animateProgress = (time) => {
      const elapsed = Math.min((time - start) / PROGRESS_ANIMATION_MS, 1);
      const eased = easeInOutCubic(elapsed);
      setEngagementScore(Math.round(85 * eased));

      if (elapsed < 1) {
        frameId = window.requestAnimationFrame(animateProgress);
      }
    };

    frameId = window.requestAnimationFrame(animateProgress);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [animateMetrics]);

  return (
    <>
      <main className="web-services-page">
        <section className="web-services-grid">
          <div className="web-services-hero">
            <div className="web-services-hero-copy">
              <h1>Your website, finally working as hard as your business</h1>
              <p>
                We build high-performance, conversion-optimized web platforms
                that integrate seamlessly with your core engineering and revenue
                systems.
              </p>
              <div className="hero-actions">
                <button className="primary-button" type="button">
                  Request a Web Audit
                </button>
                <button className="secondary-button" type="button">
                  View Expertise
                </button>
              </div>
            </div>
            <div className="web-services-hero-visual">
              <img
                src="/placeholders/small-projects.svg"
                alt="Website and mobile UI mockups"
              />
            </div>
          </div>

          <div className="web-services-insights-row" ref={metricsRef}>
            <article className="architecture-panel">
              <h2>Modern Architecture</h2>
              <p>
                Fast, secure, and scalable web solutions built on cutting-edge
                stacks that ensure your platform evolves with your traffic.
              </p>
              <div className="architecture-panel-dots" aria-hidden="true" />
            </article>

            <aside className="lighthouse-panel" aria-label="Lighthouse scores">
              <div className="lighthouse-score-grid">
                {lighthouseScores.map((item) => (
                  <LighthouseMetricCircle
                    key={item.label}
                    label={item.label}
                    score={item.score}
                    shouldAnimate={animateMetrics}
                  />
                ))}
              </div>

              <div className="lighthouse-progress-wrap" aria-hidden="true">
                <div className="lighthouse-progress-track">
                  <div
                    className="lighthouse-progress-fill"
                    style={{ "--engagement-score": `${engagementScore}%` }}
                  />
                </div>
                <div className="lighthouse-progress-caption">
                  <p>{engagementScore}% Improved Engagement Rate</p>
                  <p>*A Real Client</p>
                </div>
              </div>
            </aside>
          </div>

          <div
            className="web-services-third-row"
            aria-label="Web service value points"
          >
            <article className="web-services-third-card">
              <p>Build brand authority through a refined digital experience.</p>
            </article>
            <article className="web-services-third-card">
              <p>
                Building a custom site means: the sky is the limit. Use your
                designs or work with our designers.
              </p>
            </article>
            <article className="web-services-third-card">
              <p>Did you know: Bounce rates reach 90% due to slow sites?</p>
            </article>
            <article className="web-services-third-card">
              <p>Make your site performant. Even on a 5 year old phone.</p>
            </article>
          </div>

        </section>
        <CallToAction variant="webServicesBottom" />
      </main>
    </>
  );
}
