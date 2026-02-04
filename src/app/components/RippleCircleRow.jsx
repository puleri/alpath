"use client";

import { useEffect, useRef, useState } from "react";

const circleIcons = [
  { src: "/icons/add.png", alt: "Add", width: 46, height: 46 },
  { src: "/icons/ai-search.png", alt: "AI search", width: 46, height: 46 },
  { src: "/icons/ai.png", alt: "AI", width: 46, height: 46 },
  { src: "/icons/cloud-data.png", alt: "Cloud data", width: 46, height: 46 },
  { src: "/icons/database.png", alt: "Database", width: 46, height: 46 },
  { src: "/icons/file.png", alt: "File", width: 46, height: 46 },
  { src: "/icons/git.png", alt: "Git", width: 46, height: 46 },
  { src: "/icons/line-chart.png", alt: "Line chart", width: 46, height: 46 },
  {
    src: "/icons/outgoing-data.png",
    alt: "Outgoing data",
    width: 46,
    height: 46,
  },
  { src: "/icons/relation.png", alt: "Relation", width: 46, height: 46 },
  { src: "/icons/undo.png", alt: "Undo", width: 46, height: 46 },
  {
    src: "/icons/verification.png",
    alt: "Verification",
    width: 46,
    height: 46,
  },
  { src: "/icons/web.png", alt: "Web", width: 46, height: 46 },
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
              width={icon.width}
              height={icon.height}
              style={{
                width: icon.width ? `${icon.width}px` : undefined,
                height: icon.height ? `${icon.height}px` : undefined,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
