# Work Log

Reverse-chronological log of meaningful work. One entry per session/task. Keep it factual: what changed, why, what's next.

---

## 2026-05-29

### Post-launch fixes: typography clipping + mobile overflow

**Done:**
- **Descender clipping:** section-title `line-height` 0.98 → **1.25** (`text-h2` token + inline who/belief). 0.98 < Montserrat's ~1.22em glyph height, so line-1 descenders (y/g/p/j) were overlapped by line 2 — on Who-We-Are, covered by the yellow highlight box. Partial revert of D-008.
- **Mobile word overflow:** clamp floor was 2.6rem (~42px) → long words ("transformation.") overflowed the white card off-screen on iPhone. New curve `clamp(1.7rem, 0.5rem + 6vw, 5.5rem)` (desktop max unchanged), "What we do" card `p-8 → p-6` on mobile, global `overflow-wrap: break-word` on h1–h3 as a hard safety net.
- **Emoji arrows:** `↗` (U+2197, blue emoji on iOS) in the pillar index → inline brand SVG (currentColor).
- **Dead CSS:** removed unused Moderniz `@font-face` (global.css) + `display` token (tailwind) + orphan `site/public/fonts/Moderniz.otf`; Moderniz stays canonical in `brand/fonts/`.
- **Doc drift:** `site/README.md` + `CLAUDE.md` pointed to non-existent `src/data/sections.ts` / `src/components/Section.astro` → corrected to `content.ts` + inlined `index.astro` (mapped `VideoBg.astro`).

**Verified:** dev server serves new clamp + SVG arrow + `p-6`; old 2.6rem clamp and `↗` emoji gone (counts 0).

**Next:** domain (#3 — pending whether `womd.id` is owned); replace dummy contact/stats/social (#2); SEO/OG polish (#5).

---

### Deck redesign, design polish & delivery prep

**Done:**
- **Restructured to a 15-slide deck** (was 13): hero, who, belief, what-we-do (Five Pillars overview), pillar 01–05, how-we-work (Process), who's-behind-it, what-makes-us-different, who-we-work-with, the-future, contact.
- **Merged** Track Record (stats) + Trusted By (clients) into the **Who's Behind It** (Razi) section — those credentials belong to Razi, not WOMD yet. Stats personalized (20+ yrs, projects, brands).
- **Locked type system:** section-title = `text-h2` token (`clamp 2.6→5.5rem`), eyebrow = `text-eyebrow` token, plus a "long-title" `clamp 1.8→3.4rem` for long headings. Bumped `h2`/`eyebrow` tokens in `tailwind.config.mjs`.
- **Hero** rebuilt to ref: boxed→clean eyebrow path, big logo, tagline as eyebrow style, subhead as title with yellow accent ("impossible to ignore"), splash video bg (responsive **portrait+landscape**, boomerang loop, vignette). Content lifted via padding (not transform — `reveal` was overriding transform).
- **Copy** aligned to source catalog (pillar intros = exact category descriptions; product names exact; removed all em-dashes; "What we do"/"How we work"/"Different"/"Audience"/closing copy per provided text).
- **Icons:** per-product (14) + per-step + belief flow, via WOMD `ui`/`step` glyphs (yellow chips or CSS mask).
- **Navigation:** dot-nav expanded to **15 dots + scroll-spy** (active slide) + **adaptive light/dark color** (`mix-blend` replaced by deterministic `is-light` toggle). **Mobile hamburger → full-screen overlay** (pillars collapsed to one item).
- **Scroll:** `scroll-snap-type` set to **mandatory** (deck feel) on desktop; off `<768px`.
- **Visual rhythm:** backgrounds reserved for "bookends" — Hero (splash video) + Contact (bomb image, responsive). Who-we-are = yellow-polygon accent. Pillars flattened (white/`#f5f5f5`, no halftone). Pillar 02/04 dark→light for a calmer set.
- **Delivery refactor:** cut simultaneous motion (float icons → belief only; halftone drift → static); replaced 2 bright AI videos (future/contact) with static dark + texture; **videos 55 MB → 16 MB**; removed orphan assets; cleaned `V` map & dead code.
- **Git:** committed everything, added remote `github.com/fikshb/WOMD`, pushed `main`. **Squashed history** to drop oversized legacy assets (`.git` 243 MB → 96 MB), force-pushed. Gitignored raw video/image masters + `.mhtml`.
- Wrote `docs/EXECUTIVE-SUMMARY.md` (build overview + asset usage + token/cost estimate).

**Verified:** `npm run build` passes throughout; 15 dots + section ids present; no dangling asset refs.

**Next:**
- Deploy to **Vercel** (restart Claude Code to load Vercel MCP; **Root Directory = `site`**, Astro static).
- Replace placeholders before launch: contact email/phone/website/address, social links, stats numbers, meta description, Razi bio/photo.
- Optional: prune dead CSS (unused drift keyframes), reserve yellow further (use as single accent per section).

---

## 2026-05-28

### Brand asset cleanup + workspace initialization

**Done:**
- Renamed 10 WhatsApp-export logo files → descriptive `WOMD_<type>_<bg>_<dimensions>` scheme. Removed 1 byte-identical duplicate. (`brand/logo/`)
- Generated web-optimized logos (quality ~70, 512/640/800px) → `brand/logo/web/`.
- Generated transparent PNGs via corner flood-fill (Pillow) → `brand/logo/png-transparent/`.
- Generated full favicon set + `site.webmanifest` → `brand/logo/web/favicon/`.
- Downloaded Moderniz display font (free, commercial-OK) → `brand/fonts/`.
- Wrote `brand/design.md` — consolidated design system from the guideline PDF + catalog + assets.
- Restructured workspace: `brand/`, `docs/`, `site/`, `.claude/skills/`. `git init`.
- Scaffolded Astro + Tailwind landing page (`site/`) with full-page scroll-snap sections and brand tokens.
- Created 4 project skills: frontend-designer, brand-guardian, copywriter, deck-architect.

- Optimized background videos: 4 stock clips → web MP4 (H.264, 1080p, no audio, faststart) in `site/public/video/`. Two were MJPEG (142/51 Mbps) → re-encoded; two were already H.264 → remuxed. Deleted all raw originals + the 802 MB zip (3× 4K Social Network clips, redundant). **1.2 GB → 16 MB.** Removed empty `video/` folder.

**Verified:** `npm install` + `npm run build` succeed (Astro static build, 1 page, no errors). All 4 MP4s probe valid (H.264/yuv420p/1080p).

- Built full company-profile site (D-005): replaced 6-section placeholder with 13 sections (hero, who, belief, 5-pillar overview + 5 pillar details, process, differentiators, audience, pre-closing, contact). Content from reference MHTML (content only); design original from brand. Hybrid proximity scroll-snap. Videos on hero (liquid-splash), pillar overview (yellow-stripes), pre-closing (geometric). Created `content.ts`, `VideoBg.astro`; updated `Nav.astro`, `global.css`, `index.astro`. Logged reference + video analysis in `work/2026-05-28/`.

- Sharpened all site copy to brand voice (hero, who, belief, 5 pillar intros, what-we-do, audience, closing). Edits in `content.ts` + one headline in `index.astro`.
- Curated 16 downloaded asset files (13 stock zips + 3 webp, ~1.3 GB) → **19 MB** organized library in `brand/assets/` (icons, textures, overlays, backgrounds, imagery, vector sources). Deleted 2 giant grain packs (678+341 MB) + 3D-corporate pack (off-aesthetic). Optimized rasters, stripped junk, renamed, grouped. See `brand/assets/README.md`. **`imagery/ai-generated/` 3 webp flagged — couldn't preview, need user confirmation.**

- Wired assets into site: 5 pillar icons + 5 process-step icons (monochrome `ui` glyphs in yellow chips, black-on-yellow = no recolor needed) → `site/public/icons/`. Subtle white halftone overlay (~6%) on dark sections (belief, process, contact) → `site/public/textures/`. Rejected the `marketing` icon set (multicolor blue, off-brand). Held back rasters/webp (need visual review).

- Editorial redesign (D-006): added fluid `clamp()` type scale (Tailwind `display/h2/h3/lead/eyebrow/numeral`); rewrote `index.astro` — left-aligned/asymmetric layouts, exposed kicker labels (rule + spaced caps), hero bottom-left with bigger type, pillar overview as editorial index list (large numerals) instead of card grid, numbered belief beats, big-numeral asymmetric pillar details, sharp hairline cards. Deleted user's reference screenshot from root per request.

- Visualization pass (D-007): scroll-reveal animations (IntersectionObserver, JS-gated, reduced-motion safe); proof/stats band with big numerals (placeholder numbers); process redesigned as a visual timeline; **client logo grid** (10 logos) + **team section (Razi Thalib only)** — logos + photo reused from Katalis (same clients). Organized `.mogrt` animated-icon packs into `brand/assets/motion/` (Adobe-only, not web). Chose **Lottie** for web animation (not the .mogrt → needs Adobe). gitignored raw `*.zip`. Did NOT import the 234 MB presentations `.aep/.ai` pack (Adobe-only, against Lottie direction) — left in root pending user decision.

**Verified:** build succeeds; fluid clamp tokens compiled; sections incl. proof/clients/team present; reveal observer inlined; clients (10) + Razi photo + credentials in `dist/`. **NOT visually eyeballed** (image preview blocked this session) — needs `npm run dev` review.

**Next:**
- `cd site && npm run dev` for live preview — check snap feel, video legibility, mobile.
- Replace contact placeholders (`[insert ...]`) with real values.
- Refine copy via `copywriter`; consider first git commit.
- Fill in real copy for each deck section (use `copywriter` + `deck-architect`).
- Pursue vector logo source files (blocking item #1 in `design.md` §8).
- Lock the brand name WOMD across all assets/PDF.
