"use client";

import { useEffect, useState } from "react";

const THEMES = [
  { id: "blank-paper-simple", label: "blank paper simple" },
  { id: "graph-paper-core", label: "graph paper core" },
];

export default function StyleSwitcher() {
  const [theme, setTheme] = useState("blank-paper-simple");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("alpath-theme");
    const initialTheme = THEMES.some((item) => item.id === savedTheme)
      ? savedTheme
      : "blank-paper-simple";

    setTheme(initialTheme);
    document.body.dataset.theme = initialTheme;
  }, []);

  const applyTheme = (nextTheme) => {
    setTheme(nextTheme);
    document.body.dataset.theme = nextTheme;
    window.localStorage.setItem("alpath-theme", nextTheme);
  };

  return (
    <div className="style-switcher" role="group" aria-label="Site style switcher">
      {THEMES.map((option) => (
        <button
          key={option.id}
          type="button"
          className={`style-switcher-button ${theme === option.id ? "is-active" : ""}`}
          onClick={() => applyTheme(option.id)}
          aria-pressed={theme === option.id}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
