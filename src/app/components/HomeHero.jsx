"use client";

import { useEffect, useState } from "react";
import CursorTrailsLayer from "./CursorTrailsLayer";

const HERO_TEXT =
  "Digital systems that keep revenue visible, trusted, and ready to scale.";
const TYPING_DELAY_MS = 350;
const TYPING_SPEED_MS = 35;

export default function HomeHero() {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    let timeoutId;

    const typeNext = () => {
      index += 1;
      setTypedText(HERO_TEXT.slice(0, index));

      if (index < HERO_TEXT.length) {
        timeoutId = window.setTimeout(typeNext, TYPING_SPEED_MS);
        return;
      }

      setIsTyping(false);
      setIsComplete(true);
    };

    timeoutId = window.setTimeout(typeNext, TYPING_DELAY_MS);

    return () => {
      window.clearTimeout(timeoutId);
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
          <h1 className="hero-title hero-title-typing" aria-label={HERO_TEXT}>
            <span className="hero-title-text">{typedText}</span>
            <span
              className={`hero-cursor${isTyping ? " is-typing" : " is-idle"}`}
              aria-hidden="true"
            >
              |
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
