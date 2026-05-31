# Changelog

User-facing / asset-facing changes. Format loosely follows Keep a Changelog.

## [Unreleased]

### Changed (2026-05-29)
- **Hero is now a light theme** with the yellow chat-bubble loop (`WOMD_motion_chat-bubbles-yellow-stream`) on white, ink text, and a yellow highlight-box accent (+ poster frame for fast first paint). Hero logo switched to the horizontal wordmark so it fits the viewport. **Who We Are** flipped to dark to keep section rhythm. `VideoBg` gained a `bg` prop for light-background clips. (See D-011.)
- **Who We Are** now runs a looping **yellow cube-grid video** background (`WOMD_bg_yellow-cube-grid_loop_1080.mp4`) under a yellow scrim, replacing the static polygon image.
- **Core Belief** now runs a looping **glass chat-bubbles video** (`WOMD_bg_chat-bubbles-glass-black_loop_1080.mp4`) on black, darkened with a scrim + cinematic edge-vignette (section stays dark / white text).
- **Hero** video now fills the viewport (`cover`) instead of being contained.
- **How we work / process** now runs a looping **organic particle-vortex video** (`WOMD_bg_organic-particles_loop_1080.mp4`) on black under a scrim (source was a 239 MB MJPEG → 2.0 MB H.264).
- **The future** (pre-closing) now runs a **yellow neon-tunnel video** (`WOMD_bg_neon-tunnel_loop_1080.mp4`) on black behind the centered statement (scrim + vignette). (Audience / "Who we work with" stays solid yellow.)
- **Who we work with / audience** now runs a golden **office-building-at-sunrise video** (`WOMD_bg_office-sun_loop_1080.mp4`, crossfade-looped) under a flat brand-yellow tint so it stays a yellow / black-text section.
- **Why we are different** now runs a **green-sphere-in-a-silver-field video** (`WOMD_bg_green-sphere_loop_1080.mp4`) on a dark vignette; the crop is biased (`object-position`) so the standout green sphere stays visible on both web and mobile. New `position` + `rate` props on `VideoBg`.
- **Contact** (final slide) now runs the **neon-glow glass-bubbles video** (`WOMD_bg_chat-bubbles-glass-neonglow_loop_1080.mp4`) behind the existing radial scrim, replacing the nuclear-explosion still.
- **Performance:** all background videos are now **lazy-loaded** — `preload="none"`, downloaded + played only when their section nears the viewport (IntersectionObserver), paused when off-screen or the tab is hidden, and skipped entirely for reduced-motion / Save-Data / 2G users.

### Added (2026-05-29)
- New `brand/motion/` library: 8 web-optimized chat-bubble loops in `web/` (H.264 1080p `.mp4`, faststart, video-only) + untouched stock originals in `masters/` + README. Renamed to the `WOMD_<bg|motion>_<slug>_loop_1080.mp4` convention. Not yet used on the site.

### Changed (2026-05-30) — header
- Brand mark (top-left) is now a **frosted-glass chip** (backdrop-blur + subtle tint + border) so the fixed header no longer visually collides with section text scrolling underneath. Neutral frost reads cleanly on light, yellow, and dark sections.

### Changed (2026-05-30) — performance
- Shrank the **deployed** background videos (`site/public/video`) to **720p / CRF 28**: total **33 MB → ~7 MB (−79%)**, hero 7.4 → 1.7 MB. Detail is masked by each section's scrim/tint so the quality drop is invisible; verified on the most-visible clips. The canonical `brand/motion/web` library is kept at full quality (1080p / CRF 20).

### Changed (2026-05-29) — brand cohesion
- Recolored two off-palette background videos to a **yellow/black duotone** (baked via ffmpeg, no runtime cost): **Process** vortex (was purple/cyan → gold) and **Contact** neon bubbles (was green → yellow-neon). The green "different" sphere on the *Why we are different* slide is kept as a deliberate single accent.

### Removed (2026-05-29)
- Pre-commit cleanup (~34 MB off the repo): orphaned videos (liquid-splash 1080 + portrait — old hero; the non-ping-pong yellow-stream loop), replaced stills (nuclear-explosion wide/portrait, yellow-polygon), the orphaned `halftone-white.png` texture, and five unused chat-bubble library clips (blue-falling, glossy-iconpack, glass-rotating, glass-rotating-white, single glass-black — regenerable from local masters). Dropped dead code (`V.splash`/`splashPortrait`, the unused `halftone` const).

### Changed (2026-05-29)
- Tightened headline `line-height` to **1.1** for plain headlines (punchier/editorial); headlines with a background-box accent (Who We Are, Hero subhead) keep the wider leading they need. (See D-012.)
- Rebuilt the site as a **15-slide deck** with a locked type system and adaptive 15-dot scroll-spy nav; added mobile hamburger overlay.
- Merged Track Record + Trusted By into the founder section (Razi); aligned all copy to the source catalog; removed em-dashes.
- Reduced motion (calmer feel), reserved background video/image for Hero + Contact bookends, flattened pillar sections.
- Trimmed background videos **55 MB → 16 MB**; squashed git history (`.git` 243 MB → 96 MB); pushed to `github.com/fikshb/WOMD`.
- Added `docs/EXECUTIVE-SUMMARY.md`.

### Fixed (2026-05-29)
- Headline descenders (e.g. the "y" in "consultancy") were clipped — bumped section-title `line-height` 0.98 → 1.25 (0.98 sat below Montserrat's ~1.22em glyph height). Revises D-008's tight setting.
- Mobile: long headline words (e.g. "transformation.") overflowed off-screen — lowered the `text-h2` clamp floor (2.6rem → 1.7rem), trimmed the "What we do" card padding on small screens, and added an `overflow-wrap` safety net on all headings.
- Replaced the emoji-rendered `↗` arrows (blue on iOS) in the pillar index with brand SVG glyphs.
- Removed the unused Moderniz `@font-face` + `font-display` Tailwind token from the site (font stays canonical in `brand/fonts/`).
- Corrected stale docs: `site/README.md` + `CLAUDE.md` referenced `sections.ts` / `Section.astro` (don't exist) → now `content.ts` + inlined `index.astro`.

### Added
- Workspace structure: `brand/`, `docs/`, `site/`, `.claude/skills/`; git initialized.
- `brand/design.md` design system reference.
- Web-optimized logos, transparent PNGs, and full favicon set under `brand/logo/`.
- Moderniz font (`brand/fonts/Moderniz.otf`).
- Astro + Tailwind landing-page scaffold (`site/`) with scroll-snap deck sections.
- Project skills: frontend-designer, brand-guardian, copywriter, deck-architect.
- Web-optimized background videos in `site/public/video/` (4× H.264 1080p MP4).
- Curated asset library in `brand/assets/` (icons, textures, overlays, backgrounds, imagery, vector sources) — ~1.3 GB of downloaded packs trimmed/optimized to 19 MB.

### Changed
- Sharpened site copy to brand voice across all sections.
- Editorial redesign: fluid `clamp()` type scale, exposed kickers, asymmetric layouts, pillar index, sharp cards.
- Added scroll-reveal animations, a proof/stats band, a visual process timeline, a client-logo grid, and a team section (Razi Thalib).
- Organized `.mogrt` animated-icon packs into `brand/assets/motion/` (Adobe source, not web).

### Removed
- Raw stock video originals (~1.2 GB: 802 MB zip + 4 `.mov`) after web conversion.
- Oversized/off-brand asset packs: dusty-grain (678 MB), spray-grain (341 MB), 3D-corporate-infographic (20 MB); plus original zips/webp after curation.

### Changed
- Renamed all logo files to a descriptive convention; removed 1 duplicate.
