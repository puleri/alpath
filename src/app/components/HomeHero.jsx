"use client";

import { useEffect, useState } from "react";
import CursorTrailsLayer from "./CursorTrailsLayer";

const HERO_CONTENT = {
  default: {
    heroText: "Software Consulting & Software Development.",
    supportingText:
      "We design and build practical software systems that help growing teams capture demand, automate operations, and make better decisions.",
    primaryCta: "Book a strategy call",
    secondaryCta: "Explore the playbook",
    secondaryHref: "/docs",
  },
  rebrand: {
    heroText:
      "Your Bellevue digital marketing agency",
    supportingText:
      "We help construction, architecture, and small businesses preserve trust during a rebrand, modernize their digital experience, and showcase project portfolios.",
    primaryCta: "Plan a rebrand launch",
    secondaryCta: "View client outcomes",
    secondaryHref: "/our-work",
  },
};
const CURSOR_BLINK_DURATION_MS = 1000;
const TYPING_SPEED_MS = 35;

export default function HomeHero({ variant = "default" }) {
  const content = HERO_CONTENT[variant] ?? HERO_CONTENT.default;
  const { heroText, supportingText, primaryCta, secondaryCta, secondaryHref } =
    content;

  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isBlinking, setIsBlinking] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setTypedText("");
    setIsTyping(false);
    setIsBlinking(true);
    setIsComplete(false);

    let index = 0;
    let timeoutId;

    const startTyping = () => {
      setIsBlinking(false);
      setIsTyping(true);
      timeoutId = window.setTimeout(typeNext, TYPING_SPEED_MS);
    };

    const typeNext = () => {
      index += 1;
      setTypedText(heroText.slice(0, index));

      if (index < heroText.length) {
        timeoutId = window.setTimeout(typeNext, TYPING_SPEED_MS);
        return;
      }

      setIsTyping(false);
      setIsComplete(true);
    };

    timeoutId = window.setTimeout(startTyping, CURSOR_BLINK_DURATION_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [heroText]);

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
          <h1 className="hero-title hero-title-typing" aria-label={heroText}>
            <span className="hero-title-frame hero-title-measure" aria-hidden="true">
              {heroText}
            </span>
            <span className="hero-title-frame hero-title-reveal" aria-hidden="true">
              <span className="hero-title-text">{typedText}</span>
              {isTyping || isBlinking ? (
                <span
                  className={`hero-cursor ${isBlinking ? "is-anticipation" : "is-typing"}`}
                >
                  |
                </span>
              ) : null}
            </span>
          </h1>

          <p className="hero-supporting-copy hero-reveal">{supportingText}</p>

          <div className="hero-actions hero-reveal">
            <a className="primary-button" href="/contact">
              {primaryCta}
            </a>
            <a className="secondary-button" href={secondaryHref}>
              {secondaryCta}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
