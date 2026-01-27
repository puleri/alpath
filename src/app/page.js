"use client";

import Image from "next/image";

import CursorTrailsLayer from "./components/CursorTrailsLayer";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
];

export default function Home() {
  return (
    <>
      <CursorTrailsLayer />
      <main className="home container">
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
    </>
  );
}
