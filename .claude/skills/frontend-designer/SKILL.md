---
name: frontend-designer
description: Build and style the WOMD landing page and UI components (Astro + Tailwind, full-page scroll-snap deck sections). Use when creating/editing site sections, components, layouts, styles, or implementing visual design from brand/design.md.
---

# Front-end Designer — WOMD

Build the deck-style landing page in `site/` (Astro + Tailwind). Everything must comply with `brand/design.md` — pair with the `brand-guardian` skill when in doubt.

## Stack & structure
- **Astro + Tailwind.** Static-first; minimal JS.
- `site/src/pages/index.astro` — composes the deck.
- `site/src/components/Section.astro` — one full-viewport scroll-snap section.
- `site/src/components/Nav.astro` — fixed dot/section nav.
- `site/src/layouts/Base.astro` — html shell, fonts, favicon, meta.
- `site/src/styles/global.css` — tokens, scroll-snap, `@font-face` Moderniz.
- `site/src/data/sections.ts` — section content/config (edit content here, not markup).
- Brand assets served from `site/public/` (logos, fonts, favicon).

## Design tokens (mirror of design.md — Tailwind theme)
- Colors: `brand-yellow #FDD82D`, `ink #2B2B2B`, `white #FFFFFF`.
- Fonts: `font-headline` Montserrat, `font-body` Roboto, `font-display` Moderniz (display only).

## Scroll-snap deck rules
- Container: `h-screen overflow-y-scroll snap-y snap-mandatory`.
- Each section: `min-h-screen snap-start` + flex-center content.
- Respect `prefers-reduced-motion` (disable smooth/snap), keep keyboard scroll working, and ensure sections still read on mobile (snap can be relaxed below `md`).

## Quality bar
- Mobile-first responsive. Don't ship desktop-only.
- Lighthouse-friendly: no layout shift, lazy-load heavy images, use the web-optimized assets in `public/logo/`.
- After changes, run the dev server and verify the section actually renders and snaps before claiming done. If you can't run a browser, say so.

## Don't
- Don't invent new brand colors/fonts. Don't recolor the logo. Don't add heavy scroll libraries when CSS scroll-snap suffices.
