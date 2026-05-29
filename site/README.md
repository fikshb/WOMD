# WOMD — Landing Page

Deck-style single-page landing for WOMD. **Astro + Tailwind**, full-page scroll-snap sections.

## Run

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview
```

## Where things are

| Path | What |
|---|---|
| `src/data/content.ts` | **Edit content here.** Section order (`navItems`), headlines, copy, pillars, contact. |
| `src/pages/index.astro` | All sections are inlined here — the markup for every slide. |
| `src/components/Nav.astro` | Fixed dot-nav (desktop) + hamburger overlay (mobile). |
| `src/components/VideoBg.astro` | Looping background video with scrim/vignette. |
| `src/layouts/Base.astro` | HTML shell: fonts, favicon, meta, OG, scroll-reveal script. |
| `src/styles/global.css` | Scroll-snap, scroll-reveal, logo marquee, heading-wrap safety. |
| `public/` | Brand assets (logos, fonts, favicon) — copied from `../brand/`. |
| `tailwind.config.mjs` | Brand colors + fonts as Tailwind theme. |

## Brand rules

All visual/verbal choices must comply with `../brand/design.md`.
Colors: `brand-yellow #FDD82D`, `ink #2B2B2B`. Fonts: `font-headline` (Montserrat), `font-body` (Roboto). Moderniz is a brand display face but is **not** loaded on the site (unused) — it stays canonical in `../brand/fonts/`.

Copy in `content.ts` is **placeholder** — replace via the `copywriter` skill; structure via `deck-architect`.

> Note: if `../brand/` assets change, re-copy the needed files into `public/`.
