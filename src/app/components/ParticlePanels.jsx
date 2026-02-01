"use client";

import { useEffect, useMemo, useState } from "react";

const PARTICLE_COUNT = 220;

const createParticles = (count, seedOffset = 0) =>
  Array.from({ length: count }, (_, index) => ({
    id: `${seedOffset}-${index}`,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 2,
  }));

const useParticleField = (seedOffset = 0) => {
  const particles = useMemo(
    () => createParticles(PARTICLE_COUNT, seedOffset),
    [seedOffset]
  );
  const [shrinkStates, setShrinkStates] = useState(
    Array.from({ length: PARTICLE_COUNT }, () => false)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setShrinkStates((prev) => prev.map(() => Math.random() < 0.01));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { particles, shrinkStates };
};

export default function ParticlePanels() {
  const { particles: leftParticles, shrinkStates: leftShrink } =
    useParticleField(0);
  const { particles: rightParticles, shrinkStates: rightShrink } =
    useParticleField(1);
  const [activePanel, setActivePanel] = useState(null);

  return (
    <section className="particle-panels">
      <div
        className={`particle-panel particle-panel--left ${
          activePanel === "left" ? "particle-panel--active" : ""
        }`}
      >
        <div className="particle-field">
          {leftParticles.map((particle, index) => (
            <span
              key={particle.id}
              className={`particle-dot ${
                leftShrink[index] ? "particle-dot--tiny" : ""
              }`}
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
          <div className="particle-triangles">
            <span className="particle-triangle particle-triangle--top" />
            <span className="particle-triangle particle-triangle--left" />
            <span className="particle-triangle particle-triangle--right" />
          </div>
        </div>
        <div className="particle-panel__content">
          <p className="particle-copy">
            Placeholder copy for the left column that invites collaboration and
            experimentation with atmospheric visuals.
          </p>
          <button
            className="particle-link"
            type="button"
            onMouseEnter={() => setActivePanel("left")}
            onFocus={() => setActivePanel("left")}
            onMouseLeave={() => setActivePanel(null)}
            onBlur={() => setActivePanel(null)}
          >
            Hover to gather triangles
          </button>
        </div>
      </div>
      <div
        className={`particle-panel particle-panel--right ${
          activePanel === "right" ? "particle-panel--active" : ""
        }`}
      >
        <div className="particle-field">
          {rightParticles.map((particle, index) => (
            <span
              key={particle.id}
              className={`particle-dot ${
                rightShrink[index] ? "particle-dot--tiny" : ""
              }`}
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
          <div className="particle-braces">
            <span className="particle-brace particle-brace--left">{"{"}</span>
            <span className="particle-brace particle-brace--right">{"}"}</span>
          </div>
        </div>
        <div className="particle-panel__content">
          <p className="particle-copy">
            Placeholder copy for the right column highlighting measured, guided
            progress through evolving systems.
          </p>
          <button
            className="particle-link"
            type="button"
            onMouseEnter={() => setActivePanel("right")}
            onFocus={() => setActivePanel("right")}
            onMouseLeave={() => setActivePanel(null)}
            onBlur={() => setActivePanel(null)}
          >
            Hover to reveal braces
          </button>
        </div>
      </div>
    </section>
  );
}
