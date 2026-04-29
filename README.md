# Lunim Studio — Case Study Landing Page Redesign

**Stage 2 Engineering Assessment · April 2026**

[Live demo](https://lunim-case-study-landing-page.vercel.app/)  

---

## The Problem

Lunim's `/digital` page lists six pieces of work across three 
disciplines. Each is presented identically — a dark card, a 
one-line description, a link. For a studio whose entire value 
proposition is that design changes outcomes, this is a credibility 
gap. The work is strong. The presentation undersells it.

A prospective client landing on this page reads about great work 
rather than feeling it. The impact numbers that should open the 
conversation — 28% faster checkout, 93% task completion, 22% 
reduction in abandonment — are buried at the bottom of individual 
pages most visitors never reach.

---

## The Approach

Before writing a single line of code, I audited the live page as 
a heuristic exercise. Five friction points emerged:

1. **No visual hierarchy** — every case study has identical weight
2. **Outcomes invisible** — key metrics don't appear until you 
   click through
3. **No project identity** — nothing distinguishes the Pizza Hut 
   work from the DAO work visually
4. **Everything is bullets** — no rhythm, no storytelling, no craft
5. **No before state** — claims improvement without showing contrast

These five points became the design brief. The constraint was 
one working day. The goal was not to rebuild the site — it was 
to prove the format could be better, and ship that proof.

---

## The Solution

A redesigned case study landing page built as a working prototype, 
proposed as a reusable template for all future Lunim case studies.

Three UX techniques layered together:

**1. Editorial grid with outcome-first cards**  
Asymmetric layout — one large featured card, smaller supporting 
cards below. Each project has a distinct visual accent colour. 
The primary outcome metric is the largest element on every card, 
visible before any click. Client and category surface as a combined 
eyebrow line. Hover reveals the one-line challenge.

**2. Draggable before/after comparison**  
A full-width interactive section with a draggable vertical divider 
between the current Lunim card format and the redesigned version. 
Works on touch. This is the moment the argument becomes tactile — 
the visitor feels the difference rather than reading about it.

**3. Animated impact metrics**  
A dedicated strip where numbers count up from zero on scroll entry. 
28% / 93% / 22% / 10hrs+. Each attributed to its source project. 
Outcomes that were previously buried are now the loudest thing on 
the page.

---

## Why This Framing

Lunim's strongest existing case studies — Pizza Hut, ToucanBox — 
follow the same pattern: identify friction in a client's product, 
redesign it, measure the improvement. This prototype applies that 
exact methodology to Lunim's own product. The studio becomes the 
client. The before state is already live at lunim.io/digital. The 
after state is this prototype.

That self-referential quality is intentional. It demonstrates 
understanding of how Lunim thinks, not just what Lunim does.

---

## How AI Was Used

| Tool | How |
|---|---|
| **Claude** | Initial audit of live page — identified 5 friction points before any code was written. Copy for all sections. Strategic framing of the case study proposal. |
| **Cursor (Claude Opus 4.7)** | Full React build from a detailed prompt. Component iteration. Bug fixes on the before/after touch handling. |
| **Claude** | Review of first build screenshot — identified grid uniformity issue, copy problems, and missing visual hierarchy. Corrected all copy before final pass. |

AI was used as a thinking partner first, a builder second. The 
audit happened in conversation before the prompt was written. The 
prompt was written before Cursor opened. The build was reviewed 
critically before polish began.

---

## Tech Stack

- **React** (Vite)
- **Tailwind CSS**
- **Intersection Observer API** — scroll-triggered reveals and 
  metric counter animations, no animation library
- **Custom drag handler** — before/after slider, mouse and touch
- **Vercel** — zero-config deployment
- **GitHub** — commit per task (see history)

---

## Decisions Made

**Why no animation library?**  
Framer Motion would have been faster to implement but adds 
~30kb and a dependency. Intersection Observer covers everything 
needed here with zero overhead. Keeping the build lean was a 
deliberate choice.

**Why a fictional before state in the slider?**  
The current Lunim cards are faithfully recreated in the before 
panel — not a strawman. The goal was contrast, not criticism.

**Why one featured card rather than a uniform grid?**  
Visual hierarchy is the argument. If everything is equal weight, 
nothing is. The Pizza Hut card leads because it has the strongest 
quantitative outcome. That's an editorial decision, not a 
technical one.

---

## What I'd Do Next

With more time and access to real data:

- **A/B test** the editorial grid against the current uniform 
  layout using heatmap and scroll depth tooling
- **Individual case study pages** in the same immersive format — 
  scroll-driven, with process documentation and before/after 
  UI comparisons built in
- **Reusable component library** — the before/after slider and 
  metric counter are generic enough to become a Lunim sales tool 
  for client pitches, not just the portfolio page
- **CMS integration** — hook the case study data layer to 
  Prismic (which Lunim already uses) so new case studies can be 
  added without a code deploy

---

## Running Locally

```bash
git clone [repo-url]
cd [repo-name]
npm install
npm run dev
```

Deployed to Vercel. No environment variables required.

---
