# Changelog

User-facing / asset-facing changes. Format loosely follows Keep a Changelog.

## [Unreleased]

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
