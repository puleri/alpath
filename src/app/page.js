"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import CursorTrailsLayer from "../components/CursorTrailsLayer";

const navItems = ["Services", "Use Cases", "Pricing", "Blog"];

function CursorTrailsLayer() {
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const dotWrapperRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const handlePointerMove = (event) => {
      targetPosition.current = { x: event.clientX, y: event.clientY };
    };

    const animate = () => {
      const { x: targetX, y: targetY } = targetPosition.current;
      const current = currentPosition.current;

      current.x += (targetX - current.x) * 0.1;
      current.y += (targetY - current.y) * 0.1;

      if (dotWrapperRef.current) {
        dotWrapperRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      }

      animationFrameRef.current = window.requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    animationFrameRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="cursor-trails-layer" aria-hidden="true">
      <div className="cursor-trail-dot-wrapper" ref={dotWrapperRef}>
        <div className="cursor-trail-dot" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="home container">
      <CursorTrailsLayer />
      <header className="top-bar">
        <div className="brand">
          <Image
            src="/alpath/sign.svg"
            alt="Alpath Engineering icon"
            className="brand-icon-nav"
            width={34}
            height={34}
          />
          <span className="brand-text">
            <span className="alpath-signature">Alpath</span> Engineering
          </span>
        </div>
        <nav className="nav-links">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
        <button className="contact-button" type="button">
          Contact
          <span className="contact-icon" aria-hidden="true">
            ✉
          </span>
        </button>
      </header>

      <section className="hero">
        <div className="hero-brand">
          <Image
            src="/alpath/sign.svg"
            alt="Alpath Engineering icon"
            className="brand-icon-hero"
            width={32}
            height={32}
          />
          <span className="hero-brand-text">
            <span className="alpath-signature">Alpath</span> Engineering
          </span>
        </div>

        <h1 className="hero-title">
          Digital Solutions working
          <br />
          as hard as your business
        </h1>

        <div className="hero-actions">
          <button className="primary-button" type="button">
            Contact
            <span className="contact-icon" aria-hidden="true">
              ✉
            </span>
          </button>
          <button className="secondary-button" type="button">
            Explore Use Cases
          </button>
        </div>
      </section>
    </main>
  );
}
