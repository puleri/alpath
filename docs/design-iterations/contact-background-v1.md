# Contact background — iteration 1

Archived July 29, 2026. This iteration is intentionally dormant and is not
imported by the live contact page.

## Concept

A scattered ambient layer made from low-opacity code fragments, abstract
typographic symbols, and five flat color swatches.

## JSX

```jsx
<div className="contact-atmosphere" aria-hidden="true">
  <pre className="contact-code contact-code-primary">
    {`const path = ['brand', 'web', 'growth'];
path.map((signal) => makeItClear(signal));`}
  </pre>
  <pre className="contact-code contact-code-secondary">
    {`01  SIGNAL  →  SYSTEM
02  IDEA    →  INTERFACE
03  STORY   →  ACTION`}
  </pre>

  <span className="contact-symbol contact-symbol-brackets">[ A ]</span>
  <span className="contact-symbol contact-symbol-direction">↗</span>
  <span className="contact-symbol contact-symbol-orbit">○</span>
  <span className="contact-symbol contact-symbol-cross">+</span>

  <span className="contact-swatch contact-swatch-blue" />
  <span className="contact-swatch contact-swatch-pink" />
  <span className="contact-swatch contact-swatch-yellow" />
  <span className="contact-swatch contact-swatch-green" />
  <span className="contact-swatch contact-swatch-violet" />
</div>
```

## CSS

```css
.contact-page {
  position: relative;
  isolation: isolate;
  min-height: 100vh;
  padding: 6.5rem 0 5rem;
  overflow: hidden;
  background: #fcfcfd;
}

.contact-atmosphere {
  position: absolute;
  z-index: -1;
  inset: 0;
  width: min(1440px, 100%);
  margin: 0 auto;
  pointer-events: none;
  user-select: none;
}

.contact-code {
  position: absolute;
  margin: 0;
  color: #111827;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: clamp(0.62rem, 0.9vw, 0.78rem);
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: -0.01em;
  white-space: pre;
  opacity: 0.11;
}

.contact-code-primary {
  top: 8.2rem;
  right: clamp(2rem, 8vw, 8rem);
  transform: rotate(2deg);
}

.contact-code-secondary {
  top: 45rem;
  left: clamp(1rem, 5vw, 4rem);
  transform: rotate(-3deg);
}

.contact-symbol {
  position: absolute;
  color: #111111;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-weight: 500;
  line-height: 1;
  opacity: 0.1;
}

.contact-symbol-brackets {
  top: 20rem;
  right: 3.5%;
  font-size: clamp(2.5rem, 5vw, 5.25rem);
  letter-spacing: 0.18em;
  transform: rotate(7deg);
}

.contact-symbol-direction {
  top: 32rem;
  left: 2.5%;
  font-size: clamp(5rem, 9vw, 9rem);
  transform: rotate(-8deg);
}

.contact-symbol-orbit {
  right: 7%;
  bottom: 18rem;
  font-size: clamp(6rem, 12vw, 12rem);
  transform: scaleX(1.2);
}

.contact-symbol-cross {
  left: 8%;
  bottom: 8rem;
  font-size: clamp(4rem, 8vw, 7rem);
  transform: rotate(12deg);
}

.contact-swatch {
  position: absolute;
  display: block;
  border: 1px solid currentColor;
  opacity: 0.1;
}

.contact-swatch-blue {
  top: 16rem;
  left: 1.5%;
  width: clamp(72px, 10vw, 130px);
  aspect-ratio: 1.45;
  color: #00a3ff;
  background: #00a3ff;
  transform: rotate(-5deg);
}

.contact-swatch-pink {
  top: 27rem;
  right: 1.5%;
  width: clamp(78px, 10vw, 138px);
  aspect-ratio: 0.9;
  color: #ff3d7f;
  background: #ff3d7f;
  transform: rotate(4deg);
}

.contact-swatch-yellow {
  top: 51rem;
  right: 4%;
  width: clamp(86px, 12vw, 160px);
  aspect-ratio: 1.55;
  color: #ffd400;
  background: #ffd400;
  transform: rotate(-3deg);
}

.contact-swatch-green {
  bottom: 22rem;
  left: 3%;
  width: clamp(68px, 9vw, 116px);
  aspect-ratio: 1;
  color: #21c45d;
  background: #21c45d;
  transform: rotate(7deg);
}

.contact-swatch-violet {
  right: 13%;
  bottom: 6rem;
  width: clamp(72px, 8vw, 108px);
  aspect-ratio: 1.25;
  color: #8b5cf6;
  background: #8b5cf6;
  transform: rotate(-6deg);
}

@media (max-width: 640px) {
  .contact-code-primary {
    top: 9rem;
    right: -7rem;
  }

  .contact-code-secondary {
    top: 52rem;
    left: -5rem;
  }

  .contact-symbol-brackets {
    top: 26rem;
    right: -2rem;
  }

  .contact-symbol-direction {
    top: 35rem;
    left: -1rem;
  }

  .contact-symbol-orbit {
    right: -3rem;
    bottom: 19rem;
  }

  .contact-swatch-blue {
    top: 18rem;
    left: -2rem;
  }

  .contact-swatch-pink {
    top: 42rem;
    right: -2.5rem;
  }

  .contact-swatch-yellow {
    top: 66rem;
    right: -3rem;
  }

  .contact-swatch-green {
    left: -2.5rem;
  }
}
```
