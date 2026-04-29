# Lunim — Digital Services Redesign (Prototype)

A redesigned landing page for [lunim.io/digital](https://lunim.io/digital).
Editorial layout, real case study data, scroll-triggered motion, and a
draggable Before/After comparison — built with React, Vite and Tailwind, no
animation libraries.

> _"Light the way to your next moonshot."_

## Stack

- **React 18** via Vite
- **Tailwind CSS** with Lunim's exact brand tokens
- Native **Intersection Observer** + CSS transitions for all motion
- Hardcoded case study data — no backend

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Deploy

Zero-config deploy to Vercel — point at this repo and ship.

## Structure

```
src/
  App.jsx
  main.jsx
  components/
    Hero.jsx              # Full-viewport editorial hero
    Nav.jsx               # Lunim logo + nav + Get In Touch
    FilterBar.jsx         # Sticky All / UX / AI / Web3 tabs
    CaseStudyGrid.jsx     # Asymmetric magazine-style grid
    CaseStudyCard.jsx     # Editorial card with metric + tags
    BeforeAfter.jsx       # Draggable mouse + touch slider
    ImpactMetrics.jsx     # Count-up metrics on scroll
    Outro.jsx             # CTA section
    Reveal.jsx            # Scroll-reveal wrapper
  data/
    caseStudies.js        # Real Lunim case studies
  hooks/
    useScrollReveal.js    # IntersectionObserver hook
  styles/
    index.css             # Tokens + base styles
```

## Notes

- The six case studies, their outcomes, metrics, and URLs are kept
  unchanged from Lunim's live site.
- Each card uses its project accent colour as a left border and subtle
  hover bleed — giving every project a visual identity without breaking
  the dark editorial system.
- The Before/After interaction recreates the current Lunim card layout
  faithfully on the left, with the redesigned card revealed on the right
  as the user drags.
