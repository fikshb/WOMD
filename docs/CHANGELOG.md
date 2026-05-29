# Changelog

User-facing / asset-facing changes. Format loosely follows Keep a Changelog.

## [Unreleased]

### Changed (2026-05-29)
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
