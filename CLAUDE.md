# CLAUDE.md — WOMD workspace

Project-specific context for Claude Code sessions in this folder.
Tone, persona, and revenue focus are inherited from `~/.claude/CLAUDE.md` (global) and `../CLAUDE.md` (FIKRI_PROJECT) — not repeated here.

---

## What this is

**WOMD — Weapons of Mass Discussion**: brand + web workspace for a Strategic Transformation Consultancy. The name is a deliberate pun on "Weapons of Mass Destruction" → reframed around discussion/strategy. This folder holds the brand system, its assets, and the marketing website.

**Canonical name is `WOMD`** — never "WMD" or "WoMD" (the source guideline PDF is titled "WMD"; that's legacy). See `docs/DECISIONS.md` D-001.

---

## Source of truth

- **`brand/design.md`** is the authority for all brand decisions: identity, logo system, color, typography, asset inventory, and open gaps. **Read it before producing or reviewing any brand artifact.** Do not invent colors, fonts, or logo treatments outside it.
- **`brand/WOMD Product Catalog.md`** is the authority for what WOMD actually sells (5 categories). Don't invent offerings.

Quick brand reference (full detail in `design.md`):
- Colors: Yellow `#FDD82D`, Black Pearl `#2B2B2B`, White `#FFFFFF`. (White text on yellow fails contrast — don't.)
- Fonts: Montserrat (headline), Roboto (body), Moderniz (decorative/display only — free for commercial use).

---

## Folder map

| Path | What |
|---|---|
| `brand/` | Source of truth: `design.md`, `logo/`, `fonts/`, guideline PDF, product catalog. |
| `brand/logo/` | Masters (1500px JPEG) + `web/` (compressed) + `png-transparent/` + `web/favicon/`. |
| `site/` | The landing page — **Astro + Tailwind**, full-page scroll-snap deck (`see site/README.md`). |
| `docs/` | `WORKLOG.md`, `DECISIONS.md`, `CHANGELOG.md`. |
| `.claude/skills/` | Project agents: `frontend-designer`, `brand-guardian`, `copywriter`, `deck-architect`. |

---

## Working conventions

- **Compliance:** Visual/verbal work must pass `brand/design.md`. Use the `brand-guardian` skill to check.
- **The site:** content lives in `site/src/data/content.ts`; all sections are inlined in `site/src/pages/index.astro` (no per-section component). It's a single-page, scroll-snap, deck-style landing (`docs/DECISIONS.md` D-004). Stack rationale: D-003.
- **Logging:** After meaningful work, append to `docs/WORKLOG.md`. Record non-obvious choices (and *why*) in `docs/DECISIONS.md`. User-facing/asset changes go in `docs/CHANGELOG.md`.
- **Assets:** `brand/` is canonical; `site/public/` holds copies. If masters change, re-copy.
- **Skills:** prefer the project skill that matches the task (front-end build → `frontend-designer`, narrative/section order → `deck-architect`, copy → `copywriter`, consistency check → `brand-guardian`).

## Run the site

```bash
cd site && npm install && npm run dev   # http://localhost:4321
```

---

## Known constraints / open items (from `design.md` §8)

- **No vector logo source** (only raster JPEG + flood-filled PNGs). Blocking for print/scale; request SVG/AI from the designer (Mufti Hadi Design). This is the #1 gap.
- Source guideline is thin (mostly Lorem ipsum): no clear-space, type scale, or usage rules yet — several are proposed defaults pending confirmation.
