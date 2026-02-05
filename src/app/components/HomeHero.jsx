"use client";

import { useEffect, useState } from "react";
import CursorTrailsLayer from "./CursorTrailsLayer";

const HERO_TEXT =
  "Digital systems that keep revenue visible, trusted, and ready to scale.";
const CURSOR_BLINK_DURATION_MS = 1000;
const REVEAL_SPEED_MS = 35;
const REVEAL_DURATION_MS = HERO_TEXT.length * REVEAL_SPEED_MS;

export default function HomeHero() {
  const [isTyping, setIsTyping] = useState(false);
  const [isBlinking, setIsBlinking] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startTyping = window.setTimeout(() => {
      setIsBlinking(false);
      setIsTyping(true);
    }, CURSOR_BLINK_DURATION_MS);

    const finishTyping = window.setTimeout(() => {
      setIsTyping(false);
      setIsComplete(true);
    }, CURSOR_BLINK_DURATION_MS + REVEAL_DURATION_MS);

    return () => {
      window.clearTimeout(startTyping);
      window.clearTimeout(finishTyping);
    };
  }, []);

  return (
    <div className={`hero-viewport${isComplete ? " is-complete" : ""}`}>
      <CursorTrailsLayer />
      <div className="cursor-trails-cover" aria-hidden="true" />
      <section className="welcome-wrapper">
        <div className="welcome-section">
          <div className="hero-brand hero-reveal">
            <img
              className="brand-icon-hero"
              src="/alpath/sign.svg"
              alt="Alpath Engineering brand mark"
            />
            <span className="hero-brand-text">
              <span className="alpath-weight">Alpath</span> Engineering
            </span>
          </div>
          <h1
            className={`hero-title hero-title-typing${isTyping ? " is-typing" : ""}`}
            aria-label={HERO_TEXT}
            style={{ "--hero-reveal-duration": `${REVEAL_DURATION_MS}ms` }}
          >
            <span className="hero-title-frame hero-title-measure" aria-hidden="true">
              {HERO_TEXT}
            </span>
            <span className="hero-title-frame hero-title-reveal" aria-hidden="true">
              <span className="hero-title-text">{HERO_TEXT}</span>
              {isTyping || isBlinking ? (
                <span
                  className={`hero-cursor ${isBlinking ? "is-anticipation" : "is-typing"}`}
                >
                  |
                </span>
              ) : null}
            </span>
          </h1>

          <div className="hero-actions hero-reveal">
            <button className="primary-button" type="button">
              Book a strategy call
            </button>
            <button className="secondary-button" type="button">
              Explore the playbook
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
