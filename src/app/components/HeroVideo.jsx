"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const wrapperRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    observer.observe(wrapper);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="hero-video-section">
      <div
        ref={wrapperRef}
        className={`hero-video-shell${isVisible ? " is-visible" : ""}`}
      >
        <div className="hero-video-backdrop" />
        <div className="hero-video">
          <video
            poster="/videos/hero-poster.jpg"
            muted
            playsInline
            loop
            autoPlay
            preload="none"
          >
            {isVisible && (
              <>
                <source src="/videos/hero.webm" type="video/webm" />
                <source src="/videos/hero.mp4" type="video/mp4" />
              </>
            )}
          </video>
        </div>
      </div>
    </section>
  );
}
