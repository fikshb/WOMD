# WOMD Asset Library

Curated stock assets (icons, textures, backgrounds, imagery) for WOMD work.
Sourced from downloaded packs on 2026-05-28, then trimmed, optimized, renamed, and grouped.

> **Status:** this is a **library** — not yet wired into `/site`. The site currently uses only the logo + background videos. Pull from here as needed.

## Structure

| Folder | What | Format | Notes |
|---|---|---|---|
| `icons/nuclear/` | Radiation / nuclear-science icons (on-brand) | SVG | 4 styles × 25: `flat`, `outline`, `glyph`, `filled-line` |
| `icons/ui/` | Interface glyph icons (arrow, chat, settings…) | SVG | 58 |
| `icons/people/` | Business-people icons | SVG | 20 |
| `icons/marketing/` | Marketing & sales icons (funnel, graph, target…) | SVG | 20 |
| `textures/halftone/black/`, `/white/` | Halftone patterns (comic/print feel) | PNG | 6 each, ≤1600px. Black for light bg, white for dark |
| `textures/grain/` | Film-grain overlays | PNG | 5, ≤1600px |
| `overlays/yellow-stripes/` | Transparent yellow stripe overlays | PNG | 6, ≤1920px (alpha) |
| `backgrounds/yellow-polygon/` | Yellow low-poly backgrounds | JPG | 10, ≤1920px q70 |
| `imagery/nuclear-explosion.jpg` | Nuclear explosion photo (on-brand "detonate") | JPG | ≤1920px |
| `imagery/ai-generated/` | 3 AI-generated images | WebP | **⚠️ NEEDS REVIEW** — could not be previewed during curation; confirm & rename meaningfully |
| `source/` | Editable vector sources (need Illustrator) | AI | `nuclear-explosion.ai`, `speech-bubbles/*.ai` |

## Curation log (what was discarded & why)

- **`dusty-grain-overlay-textures-pack` (678 MB)** + **`spray-grain-texture-overlays` (341 MB)** — deleted. Absurd size for web; grain need covered by `textures/grain/`.
- **`3d-corporate-infographic-elements` (20 MB)** — deleted. `.ai/.eps` unusable on web; dated 3D-glossy style clashes with the bold/flat WOMD aesthetic.
- Per kept pack: dropped `__MACOSX`/`._*`/`.DS_Store` junk, redundant formats (kept SVG over EPS/AI; kept PNG over JPG for halftone), and trimmed counts (stripes 15→6, grain 10→5).
- ~1.3 GB of zips → **19 MB** curated library.

## Open
- `imagery/ai-generated/` — confirm these 3 are wanted and give real names.
- `source/*.ai` kept as editable IP but cannot be rendered without Illustrator.
