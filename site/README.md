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
| `src/data/sections.ts` | **Edit content here.** Section order, headlines, copy, theme. |
| `src/components/Section.astro` | One full-viewport scroll-snap slide. |
| `src/components/Nav.astro` | Fixed dot navigation. |
| `src/layouts/Base.astro` | HTML shell: fonts, favicon, meta, OG. |
| `src/styles/global.css` | Tokens, scroll-snap behavior, Moderniz `@font-face`. |
| `public/` | Brand assets (logos, fonts, favicon) — copied from `../brand/`. |
| `tailwind.config.mjs` | Brand colors + fonts as Tailwind theme. |

## Brand rules

All visual/verbal choices must comply with `../brand/design.md`.
Colors: `brand-yellow #FDD82D`, `ink #2B2B2B`. Fonts: `font-headline` (Montserrat), `font-body` (Roboto), `font-display` (Moderniz, display only).

Copy in `sections.ts` is **placeholder** — replace via the `copywriter` skill; structure via `deck-architect`.

> Note: if `../brand/` assets change, re-copy the needed files into `public/`.
