"use client";

import { useEffect, useRef, useState } from "react";

const circleIcons = [
  { src: "/icons/add.png", alt: "Add" },
  { src: "/icons/ai-search.png", alt: "AI search" },
  { src: "/icons/ai.png", alt: "AI" },
  { src: "/icons/cloud-data.png", alt: "Cloud data" },
  { src: "/icons/database.png", alt: "Database" },
  { src: "/icons/file.png", alt: "File" },
  { src: "/icons/git.png", alt: "Git" },
  { src: "/icons/line-chart.png", alt: "Line chart" },
  { src: "/icons/outgoing-data.png", alt: "Outgoing data" },
  { src: "/icons/relation.png", alt: "Relation" },
  { src: "/icons/undo.png", alt: "Undo" },
  { src: "/icons/verification.png", alt: "Verification" },
  { src: "/icons/web.png", alt: "Web" },
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
        {circleIcons.map((icon, index) => (
          <div
            className="ripple-row__circle"
            key={icon.src}
            style={{ "--delay": `${index * 0.45}s` }}
          >
            <img
              className="ripple-row__icon"
              src={icon.src}
              alt={icon.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
