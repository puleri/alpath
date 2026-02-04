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
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
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
        className={`hero-video${isVisible ? " is-visible" : ""}`}
      >
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
    </section>
  );
}
