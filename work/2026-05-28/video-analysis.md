# Video Analysis & Section Pairing — 2026-05-28

Analysis of the 4 web-optimized background videos in `site/public/video/`, and a recommended pairing to the landing-page deck sections.

## Per-video breakdown

### 1. `WOMD_bg_yellow-stripes_1080.mp4` — 1.4 MB · 12s · 30fps
- **Visual:** Animated diagonal stripes, two tones of yellow (brand `#FDD82D` + lighter cream). Flat, bold, energetic, looping.
- **On-brand:** ✅ Strongly — pure brand yellow.
- **Text over it:** Needs **dark `#2B2B2B`** text. Stripes are busy → put text in a solid card or add a subtle scrim; don't lay text directly on raw stripes.
- **Best for:** A loud brand moment — the "Idea" / POV section, or a CTA. High energy, low information.

### 2. `WOMD_bg_liquid-splash_1080.mp4` — 4.6 MB · 7s · 25fps
- **Visual:** Gold/yellow liquid exploding outward on **pure black**. Dramatic, premium, "detonation."
- **On-brand:** ✅ Yellow + black = exact brand colors. Also literal fit for "ideas that detonate."
- **Text over it:** Dark bg → **white or yellow** text. Center is busy; keep text to the sides or below, or use the dark edges.
- **Best for:** The **Hook / hero** — the explosion matches "Weapons of Mass Discussion." Strongest opener.

### 3. `WOMD_bg_network-geometric_1080.mp4` — 7.4 MB · 20s · 25fps
- **Visual:** White/grey plexus network (nodes + lines) with faint data-readout numbers, on near-black. Monochrome, cold, technical.
- **On-brand:** ✅ Neutral (white-on-black) — won't fight the yellow accents.
- **Text over it:** Dark bg → white/yellow text. Fairly even → text works with a light scrim.
- **Best for:** **Problem/Tension** ("noise without strategy") or **Services/Data** — the connected-network look reads as digital transformation / data.
- **Note:** Heaviest file (7.4 MB). Fine for desktop autoplay-muted-loop; consider a 720p variant or poster image for mobile.

### 4. `WOMD_bg_network-futuristic_1080.mp4` — 1.6 MB · 18s · 25fps
- **Visual:** Glowing **teal/green** network nodes + data labels on dark teal-black. Same genre as #3 but green-tinted.
- **On-brand:** ⚠️ **Off-palette** — teal/cyan-green is NOT in the brand (yellow/black/white). Introduces a foreign color.
- **Options:** (a) skip it; (b) recolor at runtime via CSS `filter: grayscale()` or `hue-rotate`/`sepia` to push it toward brand yellow/mono. Recoloring is hacky and may look muddy.
- **Best for:** Only if recolored to mono/yellow. Otherwise hold in reserve.

## Recommended pairing (deck arc)

Principle: **not every section gets video.** Alternate motion with calm solid-color sections for legibility, performance, and rhythm. Target ~3 video sections.

| Section | Job | Background | Text color |
|---|---|---|---|
| **Hook** | Stop the scroll | `liquid-splash` (gold explosion / black) | white + yellow accent |
| **Problem** | Name the pain | `network-geometric` (mono, cold) | white |
| **Shift** | Reframe (AI era) | **solid white** (calm beat, no video) | ink |
| **Idea** | "We weaponize discussion" | `yellow-stripes` (loud brand) | ink, in a card |
| **Services** | The offering | **solid ink** or static (let content lead) | white |
| **CTA** | One next step | **solid ink** + yellow button (or reuse `liquid-splash` muted) | white |

- `network-futuristic` (green): **held in reserve** pending a recolor decision.
- All videos: `autoplay muted loop playsinline`, `poster` fallback (extract a frame), and a dark/scrim overlay layer for text contrast.
- Mobile: consider disabling video (use a poster image) to save bandwidth, especially the 7.4 MB geometric.

## Open
- Final pairing depends on the reference site (see `reference-site.md`) — adjust once that's analyzed.
