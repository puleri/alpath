"use client";

import { useEffect, useRef, useState } from "react";

const circleLabels = [
  "A",
  "A",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
];

export default function RippleCircleRow() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const animationFrame = useRef(null);

  useEffect(() => {
    const updateOffset = () => {
      const scrollTop = window.scrollY || 0;
      const scrollable = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const progress = Math.min(Math.max(scrollTop / scrollable, 0), 1);
      setScrollOffset(-50 * progress);
    };

    const handleScroll = () => {
      if (animationFrame.current) {
        return;
      }
      animationFrame.current = window.requestAnimationFrame(() => {
        updateOffset();
        animationFrame.current = null;
      });
    };

    updateOffset();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (animationFrame.current) {
        window.cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <div className="ripple-row" aria-hidden="true">
      <div
        className="ripple-row__track"
        style={{ transform: `translateX(calc(${scrollOffset}px))` }}
      >
        {circleLabels.map((label, index) => (
          <div
            className="ripple-row__circle"
            key={label}
            style={{ "--delay": `${index * 0.45}s` }}
          >
            <span className="ripple-row__label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
