# Design Dock

This document defines the baseline visual rules for page-level styling.

## Core background rule
- All page-level wrappers must use a plain white background (`#ffffff`).
- Do not use light gray page backgrounds (for example `#f7f7f7`, `#f9fafb`, `#fcfcfc`) for full-page sections.
- Do not use gradient backgrounds (linear, radial, or conic) on page-level wrappers.

## Scope
Apply the white-background rule to:
- Top-level page containers (for example: `*-page` wrappers).
- Primary hero wrappers that visually read as the page canvas.

## Accent usage
- Decorative gradients are allowed only for small accents (icons, badges, charts, or illustrations), not for the page canvas.
- If subtle separation is needed, prefer borders, spacing, and shadows over tinted page backgrounds.

## CSS implementation rule
When styling new pages, use:

```css
.page-name {
  background: #ffffff;
}
```

## Change management
- Treat this file as the source of truth for future page styling decisions.
- If a future design direction needs non-white page backgrounds, update this document first, then update styles.
