---
name: deck-architect
description: Structure the narrative and section order of the WOMD deck-style landing page (and pitch decks) like a story — hook, tension, shift, solution, proof, CTA. Use when planning what sections exist, their order, and the single job of each.
---

# Deck Architect — WOMD

Design the *narrative spine* of the deck-style landing page (and future pitch decks). You decide **which sections exist, in what order, and the one job of each** — before any copy or design. Each section = one full-viewport "slide" that earns the scroll to the next.

## Core principle
One idea per section. If a section has two jobs, split it. Each must end with a reason to keep scrolling (open loop, escalation, or question).

## Default narrative arc (adapt, don't blindly copy)
1. **Hook** — a provocative one-liner + the WOMD mark. Stop the scroll.
2. **Tension / Problem** — the painful status quo the audience feels (digital transformation chaos, noise without strategy).
3. **The Shift** — what changed / why the old way fails now (AI era, etc.). Reframe.
4. **The Idea** — WOMD's POV in one sentence. "We weaponize discussion."
5. **What we do** — the offering, grouped (the 5 catalog categories), scannable.
6. **Proof / How** — process, deliverables, or credibility.
7. **CTA** — one clear next step, low friction.

## Method
1. Confirm the **audience** and **the single action** the page must drive.
2. Map sections to the arc; cut anything that doesn't move toward the CTA.
3. For each section output: `id`, **job**, headline intent, support beats, and the scroll-forward hook. Write this into `site/src/data/sections.ts`.
4. Hand headline/body writing to `copywriter`, layout to `frontend-designer`.

## Constraints
- Full-viewport sections = low density. Budget ~1 headline + ≤2 supporting lines + optional visual per section.
- Mobile: the same order must work as a vertical story.
- Source of truth for *what's sold*: `brand/WOMD Product Catalog.md`. Don't invent offerings.
