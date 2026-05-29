# WOMD — Weapons of Mass Discussion

Brand + web workspace for **WOMD**, a Strategic Transformation Consultancy.

## Folder map

| Path | What |
|---|---|
| `brand/` | Single source of truth for the brand. `design.md` (the design system), logo assets, fonts, source guideline PDF, product catalog. |
| `brand/design.md` | **Read this first.** Brand identity, logo system, color, typography, asset inventory, open gaps. |
| `brand/logo/` | Logo masters (1500px JPEG), `web/` (compressed), `png-transparent/`, `web/favicon/`. |
| `brand/fonts/` | `Moderniz.otf` (decorative, free for commercial use). |
| `site/` | The deck-style landing page — Astro + Tailwind, full-page scroll-snap sections. |
| `docs/` | Work log: `WORKLOG.md` (session-by-session), `DECISIONS.md` (why we chose things), `CHANGELOG.md`. |
| `.claude/skills/` | Project agents: `frontend-designer`, `brand-guardian`, `copywriter`, `deck-architect`. |
| `CLAUDE.md` | Context for every Claude Code session in this folder. |

## Quick start (landing page)

```bash
cd site
npm install
npm run dev
```

## Conventions

- Brand decisions live in `brand/design.md`. Code/design must comply (see the `brand-guardian` skill).
- Log meaningful work in `docs/WORKLOG.md`; log non-obvious choices in `docs/DECISIONS.md`.
- Canonical brand name is **WOMD** (not WMD / WoMD).
