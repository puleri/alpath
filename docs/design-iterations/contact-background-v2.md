# Contact background — iteration 2

Archived July 29, 2026. This iteration is intentionally dormant and is not
imported by the live contact page.

## Concept

An editorial “open line” composition with a large outlined `HELLO`, a faint
column grid, a cobalt diagonal field, and one continuous route.

## JSX

```jsx
<div className="contact-open-line" aria-hidden="true">
  <span className="contact-open-line-index">CONTACT / 001</span>
  <span className="contact-open-line-word">HELLO</span>
  <div className="contact-open-line-route">
    <span className="contact-open-line-point contact-open-line-point-start" />
    <span className="contact-open-line-point contact-open-line-point-end" />
  </div>
</div>
```

## CSS

```css
.contact-open-line {
  position: absolute;
  z-index: -1;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  user-select: none;
}

.contact-open-line::before {
  position: absolute;
  top: 23rem;
  left: -12%;
  width: 124%;
  height: clamp(8rem, 15vw, 13rem);
  background: #1757d2;
  content: '';
  opacity: 0.035;
  transform: rotate(-7deg);
}

.contact-open-line::after {
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    90deg,
    transparent 0,
    transparent calc(12.5% - 1px),
    rgba(17, 17, 17, 0.035) calc(12.5% - 1px),
    rgba(17, 17, 17, 0.035) 12.5%
  );
  content: '';
}

.contact-open-line-index {
  position: absolute;
  top: 12rem;
  left: clamp(0.75rem, 2vw, 2rem);
  color: #111111;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  opacity: 0.3;
  text-transform: uppercase;
  transform: rotate(-90deg) translateX(-100%);
  transform-origin: top left;
}

.contact-open-line-word {
  position: absolute;
  top: clamp(6rem, 11vw, 9rem);
  right: clamp(-2.5rem, -2vw, -0.5rem);
  color: transparent;
  font-size: clamp(8rem, 21vw, 19rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.08em;
  opacity: 0.065;
  -webkit-text-stroke: 1.5px #111111;
}

.contact-open-line-route {
  position: absolute;
  top: 30rem;
  right: -3rem;
  bottom: 7rem;
  width: min(34vw, 30rem);
  border: 2px solid rgba(23, 87, 210, 0.22);
  border-left: 0;
  border-radius: 0 999px 999px 0;
}

.contact-open-line-route::before {
  position: absolute;
  right: 50%;
  bottom: -2px;
  width: 52vw;
  border-bottom: 2px solid rgba(23, 87, 210, 0.22);
  content: '';
}

.contact-open-line-point {
  position: absolute;
  width: 0.7rem;
  height: 0.7rem;
  border: 2px solid rgba(23, 87, 210, 0.5);
  border-radius: 50%;
  background: #f7f6f1;
}

.contact-open-line-point-start {
  right: calc(50% + 52vw);
  bottom: -0.42rem;
}

.contact-open-line-point-end {
  top: -0.42rem;
  left: -0.35rem;
}

@media (max-width: 640px) {
  .contact-open-line::before {
    top: 19rem;
    left: -30%;
    width: 160%;
    transform: rotate(-11deg);
  }

  .contact-open-line::after {
    background-image: repeating-linear-gradient(
      90deg,
      transparent 0,
      transparent calc(25% - 1px),
      rgba(17, 17, 17, 0.035) calc(25% - 1px),
      rgba(17, 17, 17, 0.035) 25%
    );
  }

  .contact-open-line-index {
    display: none;
  }

  .contact-open-line-word {
    top: 9rem;
    right: -1.8rem;
    font-size: clamp(6rem, 31vw, 9rem);
  }

  .contact-open-line-route {
    top: 32rem;
    right: -8rem;
    bottom: 5rem;
    width: 15rem;
  }

  .contact-open-line-route::before {
    width: 70vw;
  }

  .contact-open-line-point-start {
    right: calc(50% + 70vw);
  }
}
```
