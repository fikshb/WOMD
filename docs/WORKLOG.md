# Work Log

Reverse-chronological log of meaningful work. One entry per session/task. Keep it factual: what changed, why, what's next.

---

## 2026-06-03 — Bilingual EN/ID: toggle + suggest banner

Made the site bilingual. Committed + pushed to `origin/main` as `435049e`.

**Routing.** Enabled Astro i18n (`defaultLocale: "en"`, `locales: ["en","id"]`, `prefixDefaultLocale: false`) → EN at `/` and `/what-we-do`; ID at `/id/` and `/id/what-we-do`. Build emits 4 static HTML pages.

**Content layer.** Added `src/data/content.id.ts` mirroring `content.ts` shape; both feed through `src/i18n.ts` (`getContent(lang)`, `otherLang`, `altLangPath`). Expanded `content.ts` with strings that were previously hardcoded in `.astro` files (`homePage.*`, `whatWeDoPage.*`, `closing.contactHeadlineLead/Accent`, `closing.futureEyebrow`, `process.headlineLead/Accent`, `ui.*`). Page bodies extracted to lang-aware `HomePage.astro` / `WhatWeDoPage.astro`; the 4 page files in `pages/` are now thin wrappers.

**ID translation.** Drafted by Claude — professional consultancy register, anti-jargon; product names (Brand Blueprint, Digital Transformation Playbook, LMS, etc.) intentionally kept English as SKU-like nouns. Process step titles translated (Diagnosa / Definisi / Rancangan / Pengembangan / Aktivasi). Needs human review pass — flagged as draft in the file header.

**UI chrome.** Header gets an `EN / ID` toggle (top-right). Active code yellow, alt code white-60. Click persists `localStorage.womd_lang` so the suggest-banner never overrides an explicit choice. Base layout's `<html lang>` follows the prop. Nav (desktop dots + mobile overlay) labels translate per locale.

**Suggest banner.** New `LangBanner.astro` — fixed bottom-center pill, shows only when `localStorage.womd_lang` is unset AND `navigator.languages` preferred lang ≠ current page lang. Copy is in the **target** language (inviting them to it). CTA navigates + persists; dismiss persists current. **No auto-redirect** (see D-013). Industry-standard pattern: respect explicit choice > intent signal > silent default.

**Verified:** `npm run build` clean; 4 pages emitted; grep confirms `lang="id"`, "mustahil diabaikan", "Lima pilar transformasi", "Strategi Brand", banner copy "This page is available in English" all rendered. Not visually eyeballed in dev server this session.

**Next:**
- Native ID review pass on `content.id.ts` (tone is formal "kami / Anda"; punchier alternatives welcome).
- Visual check at `npm run dev` — toggle visibility on hero (dark bg), banner timing on first visit, mobile collision with hamburger.
- Decide whether product/service names stay English or get ID names too.
- SEO: add `<link rel="alternate" hreflang>` pair in `<head>` (currently only on the toggle anchor).
- Consider sitemap.xml with both languages.

---

## 2026-06-02 — Full session: deck overhaul + page split + Razi revisions

Long session, many commits to `main`. Highlights below by area.

### Header
- Rebuilt as NC-inspired full-width bar, then later simplified: logo-only (no nav links / CTA).
- **Scroll-aware:** transparent at scrollY ≤ 150, then frosted ink/85 + backdrop-blur + hairline border. Yellow wordmark at top, white after scroll.
- Wordmark text expanded "WOMD" → "Weapons of Mass Discussion" (uppercase, yellow accent dot). Tagline "Strategic Transformation Consultancy" dropped — Razi rev #1 ✅
- Logo pinned top-left on wide screens (dropped centered max-w-7xl container).
- Extracted inline header → `src/components/Header.astro` for reuse across pages.

### Hero (home)
- Many iterations. Final state: dark hero, custom Higgsfield mushroom-cloud cinematic video (`WOMD_bg_hero-dark_pingpong_720.mp4`, 851 KB), `filter:grayscale(0.8)` + `bg-ink/50` scrim.
- Pingpong loop (forward+reverse concat via ffmpeg-static) eliminates seam.
- Layout: `justify-center` + `-mt-[10vh]` shift up, tight `mt-2`/`mt-6` gaps under wordmark.
- Wordmark PNG swapped square 1500×1500 → horizontal 1500×457 — the square had huge transparent padding causing a big visual gap to the tagline.

### Section backgrounds (all 4 brand-aligned bg images)
| Section(s) | Image | Notes |
|---|---|---|
| `#who`, `#audience` | `WOMD_yellow-slide-bg.jpg` (385 KB ← 2.2 MB PNG) | bg-brand-yellow base + image 25% opacity multiply; body copy bumped to `text-black` for max contrast |
| `#team`, pillars 01/03/05 (odd) | `whitebg.jpg` (385 KB) | Crumple paper + yellow icons at edges |
| pillars 02/04 (even) | `greybg.jpg` (498 KB) | Same artwork on grey/cream |
| `#belief`, `#process`, `#different`, `#future`, `#contact` | `WOMD_dark-slide-bg.jpg` (356 KB) | Dropped per-section VideoBg + custom scrims; alternating `scale-x-[-1]` flip on #process and #future to break visual repeat |
| `#contact` (override) | `nuclear-explosion.jpg` (288 KB) | Dramatic closing image; ink/80 scrim |

### Pillar reorder + retitle + bullets sync (catalog doc alignment)
- Order: **DT&L → Brand → Innovation → Tech → People** (was DT&L → Innovation → Tech → Brand → People).
- Pillar #03 renamed "Innovation & Business Intelligence" → "Business & Product Innovation".
- Bullets resynced with Razi's catalog doc — added missing items per product: Website visual direction (BR-02), Key findings & recommendations (IN-01), Audience relevance mapping + Strategic recommendation report (IN-02), User role & access mapping (IN-03), Content structure setup (TK-01), Technical requirement guide (TK-02), split UI/Copy on TK-03.

### Nuclear-themed icons (full vocabulary)
Swapped all 24 icons in pillars/process to the brand's nuclear outline set (`brand/assets/icons/nuclear/outline`):
- **5 pillar anchors** — Fusion reaction (DT&L), Radioactive (Brand), Radiator Detector (Innovation), Nuclear Power Plant (Tech), Atom (People).
- **5 process steps** — PET Scan (Diagnose), Radiation Zone (Define), Nucleus Atom (Design), Nuclear Reaction (Develop), Battery (Enable).
- **14 product cards** — Nuclear Energy / Acid Rain / Proton (DT&L); Radium / Plutonium (Brand); Gamma Ray / Isotope / Cooling Tower (Innovation); Barrel / Biohazard / Radiotherapy (Tech); Hazmat Suit / Uranium / Atom (People).

### Razi photo (Razi rev #2 ✅)
Drop-in replacement `site/public/team/razi-thalib.jpg`: framed speech-bubble portrait baked into the image (yellow bg + radiation/atom icons + WOMD bubble outline). 1.5 MB PNG → 161 KB JPG.

### Stats section (#team)
- Mobile awkward 2+1 grid → forced `grid-cols-3` across all viewports. Smaller fonts (text-2xl → text-6xl scale) + `min-w-0` + gap-x-2 to fit in one row on iPhone widths.
- Block was almost deleted (Razi instruction confusion) but kept — only website + address removed from #contact + email updated to `hello@wmdiscussion.com`.

### Dot-nav (Razi rev #3 ✅)
- Active dot now fills (white on dark sections, ink on light) + label appears next to it automatically via scroll-spy.
- Hero exempt — active dot fills white but label hidden (no "TOP").
- **Critical bug fix:** Nav.astro inline `<script>` ran during HTML parse, before sibling `<section>` elements existed in DOM → `getElementById` returned null for every section → sectionMap empty → `apply()` never called → no class toggle at all. Wrapped init in `DOMContentLoaded`.
- Also rewrote scroll-spy from `IntersectionObserver` (unreliable under scroll-snap with overlapping min-h-screen sections) to direct `requestAnimationFrame` scroll listener that picks the section whose center is closest to viewport center. Deterministic.

### Page split — new route `/what-we-do`
- Home was too long with 5 full pillar detail sections inline. Extracted to dedicated route.
- New page: hero ("What we do" / "Five pillars of transformation." / comprehensive intro) + pill nav to each pillar + 5 pillar detail sections + full contact slide.
- Home keeps the `#what-we-do` overview list design unchanged + added "See all 5 pillars →" CTA. Each pillar title links to `/what-we-do#pillar-XX`.
- `navItems` split into `homeNavItems` (10) + `whatWeDoNavItems` (7: Top + 5 pillars + Contact). Nav.astro detects pathname and picks the right list.
- Header logo links to `/` (works from any page).

### `/what-we-do` hero video (Higgsfield Seedance 2.0)
- Took 4 attempts to land **exactly 5 atoms** (1 center + 4 corners + 4 dashed connecting lines).
  - Gen 1: 4 atoms (short).
  - Gen 2: NSFW flag (probably "pentagonal star" / "radiation symbols" triggered safety filter).
  - Gen 3: 7 atoms (overshoot).
  - Gen 4: ✅ position-explicit prompt nailed it.
- Pingpong + x264 CRF28 → 653 KB. JPG poster 71 KB.
- ~67.5 credits total burned on this hero alone. Lesson: Seedance miscounts abstract numbers; explicit positions ("center + 4 corners") work better than "EXACTLY FIVE".
- Hero scrim went through ~6 iterations to balance atom visibility vs text legibility. Final: **inverted radial vignette** (88% solid ink at center where text lives, 15% at corners where corner atoms pop) + heavy text-shadow stack.

### Higgsfield spend this session
- Hero doodle (first home hero attempt, later replaced) — 22.5 credits.
- /what-we-do hero (4 gens) — 67.5 credits.
- Total ~90 credits out of 1200+. Balance still ~1078.

### Razi revision queue status
- ✅ #1 Header mobile + "Weapons of Mass Discussion"
- ✅ #2 Razi photo + speech-bubble frame
- ✅ #3 Dot-nav active reveal + hero exempt
- ✅ #4b Dot-nav adaptive (via `is-light` flip + currentColor)
- ⏳ #4a Client logos curation — **blocked on Razi's final brand list**
- ⏳ #5 Font audit (lock Roboto / Montserrat-only) — not started

### Carry-overs / cleanup
- 5 dark videos (V.glassBubbles, V.organic, V.sphere, V.tunnel, V.neonglow) no longer referenced after dark-slide image rollout — still in `site/public/video/` + V map in index.astro. Audit + delete pending.
- `V.bubbles` (home bubble video) also no longer used — same cleanup batch.
- ffmpeg-static added as dev dep (no-save) for video encoding work. Removed from package.json automatically; binary in node_modules until next clean.

### Commits (chronological highlights)
Many. Notable: `54ea4df` header tagline drop · `055f054` pillar bullets sync · `2f6966b` nuclear product icons · `73943ba` DOMContentLoaded fix for dot-nav · `1032d2f` /what-we-do page split · `cc86898` contact slide on new page · `482a3e0` 5-atom hero video · `f360e0e` final hero vignette.

**Next session:**
- Get client logo list from Razi → execute #4a.
- Font audit: Montserrat-only decision; update `tailwind.config.mjs` default sans + drop Roboto from Google Fonts URL + update `brand/design.md`.
- Asset cleanup: delete unused dark videos.
- Visual QA pass on `/what-we-do` end-to-end.

---

## 2026-06-02 — Razi revision queue (WhatsApp, 17:20)

Antrian revisi dari Razi — **belum dieksekusi**, dikerjakan satu per satu sesuai instruksi:

1. **Header mobile blocking** — teks overlap di mobile; ganti tagline jadi "Weapons of Mass Discussion" saja (drop "Strategic Transformation Consultancy" di header).
2. **Foto Razi** — ganti pakai file dari Google Drive: https://drive.google.com/file/d/1AAqaJGZhU1B8jBxMZeIyqw4C2czeBHkW/view?usp=sharing. Frame: bulat, idealnya dalam bentuk logo WOMD (speech bubble shape).
3. **Desktop dot-nav (Nav.astro)** — titik default jadi putih; label section muncul otomatis saat section itu active (sekarang labels cuma muncul on hover). Behavior berubah dari hover-reveal → active-reveal.
4. **"Who's behind it" section**:
   a. Logo perusahaan: filter — hanya tampilkan brand yang pernah benar-benar dikerjakan oleh Razi (jangan asal pajang). Butuh list final dari Razi.
   b. Desktop: di section ini bg putih, dot-nav kanan juga putih → menu hilang. Perlu bg adaptif (atau pakai active-reveal logic dari #3, sekaligus dengan label box).
5. **Font / brand guidelines** — Razi konfirmasi: Montserrat semua? Sudah ada brand guidelines belum? **Jawaban kita:** ya, `brand/design.md` adalah source of truth. Stack: Montserrat (headline), Roboto (body), Moderniz (display/decorative only). Belum semua propagated ke site — saat ini headline pakai Montserrat (Tailwind `font-headline`), body banyak yang fallback ke Inter default. Perlu audit + lock Roboto untuk body.

## 2026-05-30 — Session close (video-rich redesign)

**Shipped & pushed** to `github.com/fikshb/WOMD` (main). Commits this session:
- `2ba6e22` — first batch: video bgs (hero/who/belief) + motion library.
- `867895e` — full deck video bgs (9 sections) + lazy-load + `VideoBg` props (`bg`/`rate`/`position`) + brand-yellow duotone recolor (process/contact) + line-height D-012 + ~34 MB cleanup + docs.
- `a31bf8f` — **perf:** deployed videos shrunk to 720p/CRF28, **33 MB → ~7 MB** (canonical `brand/motion/web` kept HD).
- `7cd831a` — **frosted-glass header chip** so the fixed brand mark stops colliding with section text.

**End state:** 9 cinematic video sections, all lazy-loaded (preload=none + IntersectionObserver, paused off-screen/tab-hidden, skipped for reduced-motion/Save-Data/2G), brand-cohesive (yellow/black; the one green "different" sphere kept as a deliberate accent), deployed video ~7 MB total.

**Open / handed to user (NOT done — by their call):**
- **Fit-the-screen:** content-dense sections (what-we-do, process, different, pillar details, belief) overflow the viewport on laptop-768 & mobile; deck "one-slide-one-screen" only holds for the punchy slides. Recommended: let dense sections scroll, snap only the statement slides. (Measured; see review.)
- **Contact dummy data** (email/phone/social/address + stats + Razi bio) — launch-blocker, needs real values.
- **9 videos is a lot** for mobile data/battery even with lazy-load — consider trimming.
- Eyeball legibility (belief/process/future) + autoplay/lazy feel in a **real browser** (`npm run dev`) — headless can't fairly verify autoplay.
- Deploy: Vercel (root = `site`, Astro static).

### Pre-commit cleanup + line-height pass

- **Deleted 12 files (~34 MB)** before committing the video work: orphaned `site/public/video` (liquid-splash 1080 + portrait = old hero; the non-ping-pong yellow-stream loop), replaced `imagery` stills (nuclear-explosion ×2, yellow-polygon), orphaned `textures/halftone-white.png`, and 5 unused `brand/motion/web` chat-bubble clips (blue-falling, glossy-iconpack, glass-rotating, glass-rotating-white, single glass-black). All regenerable from the local (gitignored) masters. Removed dead code: `V.splash`/`V.splashPortrait` entries + the unused `halftone` const. Committed video weight: `site/public/video` ~34 MB (9 used loops + ping-pong + stripes + poster).
- **Note:** `brand/motion/masters/` is **306 MB local** (gitignored — the 239 MB MJPEG organic master dominates). Zero impact on the commit; flagged for the user in case they want the disk space back (would lose re-encode source).
- Headline line-height pass — see D-012.
- **Brand-cohesion recolor:** two off-palette video bgs recolored to a **yellow/black duotone** baked via ffmpeg (`format=gray,lutrgb=g='val*0.85':b='val*0.18'` ≈ #FDD82D ratio): Process vortex (purple/cyan → gold) + Contact neon (green → yellow). Duotone bakes into the file → zero runtime cost (better than a CSS filter on video). Tested hue-rotate first — rejected (drags neutral silver to pink, no clean yellow). The single green "different" sphere is **kept** as a deliberate accent (field is neutral silver; only one ball is off-palette; duotone-ing it would flatten the standout). Masters stay local for re-grade.

### Hero swapped to yellow-stream bubbles (light theme)

**Done:**
- Replaced the hero background (`liquid-splash`, dark) with `WOMD_motion_chat-bubbles-yellow-stream_loop_1080.mp4` (copied into `site/public/video/`) + a poster frame (`WOMD_chat-bubbles-yellow-stream_poster.jpg`, grabbed at 3.4s).
- The clip is **yellow bubbles on a pure-white background**, which inverts the hero's color logic. Adapted the whole section to a **light theme** (D-011):
  - Section `text-white`→`text-ink`, added `bg-white`. `VideoBg` now takes a `bg` prop (default `bg-black`); hero passes `bg="bg-white"` + `scrim={0}` + `contain` so the white letterbox is invisible on web and mobile-portrait alike.
  - Subhead/tagline flipped to ink; subhead accent is now a **yellow highlight box** (black-on-yellow, brand's primary pairing) so it stays legible over bubbles.
  - Added a soft **white radial halo** behind the content so text always has a clean stage while bubbles read at the edges. Grain overlay switched `mix-blend-screen`→`multiply` (screen is invisible on white).
  - Swapped the hero logo from the **square** `WOMD_Wordmark_transparent_1500.png` (1500×1500 — its transparent padding made the IMG ~896px tall and pushed the subhead off-screen) to the **horizontal** `WOMD_Wordmark_Horizontal_transparent.png` (1500×457). Same white+black-outline art, fits the viewport.
- To avoid two near-white sections in a row, restyled **Who We Are** (see follow-ups — landed on full-yellow). New rhythm: white hero → yellow who → dark belief.

**Verified (headless Chrome + composite):** desktop 1440×900 — logo fits, full subhead visible, ink text legible. Legibility over the *busiest* bubble frame confirmed via a composite (logo's black outline + radial halo hold up). Narrow render at 500px — content centers cleanly, no clipping. The apparent mobile "clipping" at 390px was a **headless artifact** (Chrome clamps layout to 500px min while writing a 390 canvas); a DOM scan proved `scrollWidth == viewport` (no real horizontal overflow). `npm run build` succeeds. **Bubbles don't render in headless** (autoplay hides poster, no frame compositing) — needs a real-browser `npm run dev` eyeball to confirm motion feel.

**Follow-up fixes (same day):**
- **Video wasn't showing** (reported): I'd added `bg-white` to the hero `<section>`, which painted over the `VideoBg` at `-z-10` (paint order: section bg at z0 covers child at z-10). Removed it — the white backdrop is already supplied by the `VideoBg` `bg="bg-white"` container at the correct layer (same pattern as the original dark hero, whose section had no bg). Confirmed bubbles render via a software-GL headless capture (`--use-gl=swiftshader`).
- **Seamless loop** (requested): the clip streams bubbles *in* (empty→full), so a raw `loop` hard-cuts. Rebuilt `WOMD_motion_chat-bubbles-yellow-stream_loop_1080.mp4` as a **crossfade self-loop** (`xfade` last 0.8 s over first 0.8 s + concat middle; 8.03 s→7.27 s, forward-only motion, no reverse). First≈last frame verified → seamless join. Updated both `brand/motion/web/` and `site/public/video/`; documented in `brand/motion/README.md`.
- **Ping-pong variant** (on request to try "rewind"): also generated `..._pingpong_1080.mp4` (forward+`reverse` concat, 16 s, 7.8 MB) and **swapped the hero to it** for evaluation. Both files live in `/video/`; reverting to the crossfade loop is a one-line `V.bubbles` change. Note: browsers never play `loop` backward — they restart; ping-pong is the only way to get literal reverse motion, which *is* a visible "rewind."
- **Who We Are → full yellow** (on request): `yellow-polygon.jpg` cover + `bg-brand-yellow` base, text→ink, kicker→ink/60, body→ink/80 medium, and the headline accent flipped from a yellow box to an **ink box with yellow text** (a yellow box would vanish on yellow). Verified legible on desktop + narrow via an isolated composite (headless couldn't scroll the snap container to the section).
- **Who We Are → cube-grid video** (on request): optimized `yellow-geometric-cube-grid-waving…mov` (2.7→2.1 MB, crf20 + faststart, video-only) → `WOMD_bg_yellow-cube-grid_loop_1080.mp4` (brand/motion + site). Natively seamless loop (verified). Wired behind Who via `VideoBg` (had to drop the section's `bg-brand-yellow` so it doesn't paint over the `-z-10` video — same stacking gotcha as the hero) + a left-heavy `brand-yellow` gradient scrim (`/85→/55→/30`) so black text stays legible over the busy cubes. Polygon image now unused (left in `imagery/`). Final color arc unchanged: white hero → yellow who → dark belief.
- **Core Belief → glass-bubbles video** (on request; cube is for Who, not Belief): wired `WOMD_bg_chat-bubbles-glass-black_loop_1080.mp4` (copied to site) behind Belief. Section stays dark (white text + yellow accents) — dropped `bg-ink` from the section (stacking), `VideoBg bg="bg-ink"`. Treatment iterated on request ("lebih gelap" + "vignette, not opacity"): flat `scrim={52}` for overall darkening **plus a cinematic edge-vignette overlay** (`radial transparent 22% → black 0.5 @60% → 0.92 @edges`). Knocks down the bright glass behind the dense 4-beat timeline so white text stays legible; corners go moody-dark. Verified via composite.
- **Hero video → cover** (on request, "full ngikutin layar"): dropped `contain` on the hero `VideoBg` so the bubble loop fills the viewport edge-to-edge (was letterboxed/contained on white). On mobile portrait this zoom-crops the 16:9 clip — bubbles read larger/full-bleed.
- **How we work / process → organic particle video** (on request, from a downloaded zip): source `Abstract Organic Background Loop.mov` was a **239 MB MJPEG, 2000×2000, 191 Mbps** — re-encoded to `WOMD_bg_organic-particles_loop_1080.mp4` (H.264 crf20, 1280×1280, faststart, tmcd stripped) = **2.0 MB** (black-heavy content compresses tiny). Natively seamless loop. Wired behind `#process` (dark section, white text) via `VideoBg scrim={50} bg="bg-ink"` (dropped section `bg-ink` for stacking). Master → `brand/motion/masters/` (gitignored), zip deleted. Verified legible via composite.
- **Lazy-load for ALL background videos** (perf, on request): reworked `VideoBg` — `preload="none"` + `<source data-src>`, a single bundled `IntersectionObserver` (rootMargin 300px) that loads + `play()`s a clip only as its section nears the viewport and `pause()`s it when off-screen, pauses everything on tab-hidden, and **skips video entirely for `prefers-reduced-motion` / `Save-Data` / 2G** (poster + bg colour only). So only ~1 video decodes at a time instead of 6. Removed `autoplay` (JS drives playback now). **Needs a real-browser check** — headless can't fairly verify (media clock doesn't advance under virtual-time; headless may report reduce-motion → guard skips video).
- **The future (#future) → neon-tunnel video** (on request): optimized `futuristic-neon-tunnel-with-yellow-lights…mov` (6 MB H.264 + audio → `WOMD_bg_neon-tunnel_loop_1080.mp4`, 4.1 MB, `-an`, faststart). Bright yellow neon perspective tunnel on black = most on-brand clip; fits the dark, centered "The future" pre-closing perfectly. `VideoBg scrim={58} vignette bg="bg-ink"` — vignette darkens behind the centered headline/CTA while the tunnel neon stays bright at the edges. Natively seamless loop. Master gitignored. Verified via composite. (First tried it on the audience section flipped-to-dark, then **reverted audience back to solid yellow** — the tunnel reads better under the centered "future" statement.) Now **6 video sections**, lazy-load keeps only the visible one active.
- **Contact (last slide) → neonglow video**: placed `WOMD_bg_chat-bubbles-glass-neonglow_loop_1080.mp4` (glass chat-bubbles with neon glow, seamless loop) behind the final contact section, **replacing the nuclear-explosion image**. Kept the existing strong radial scrim (rgba(20,20,20,.9→.5)) so the centered white text + yellow accents stay legible; dropped `bg-ink` (stacking), `VideoBg scrim={0}` (the radial div does the darkening). Verified via composite.
- **The future — darkened** (on request, several rounds): raising the VideoBg vignette `scrim` alone wasn't enough — a vignette by design keeps the **edges** bright, so the neon-tunnel frames stayed lit. Final treatment: `VideoBg scrim={55} vignette` **+ a flat `bg-black/65` overlay** on top → darkens the whole frame (edges included) uniformly while the vignette adds extra center depth. Tunnel now reads as a subtle dark glow behind a deep-dark centered statement.
- **Contact video slowed 1.5×** (on request): added a `rate` prop to `VideoBg` (sets `data-rate`; the lazy script applies `video.playbackRate` on play). **Why we are different → green-sphere video** (on request): optimized `unique-green-sphere-pulsating…mov` (3 MB → **1.1 MB** H.264 crf20, faststart, `-an`). A field of silver spheres with one green "different" sphere (upper-right) — perfect metaphor. Flipped `#different` to use it, `scrim={58} vignette` (dark). **Key requirement: keep the green sphere visible on mobile + web** — the sphere sits ~77% x, and on portrait `object-cover` crops to a ~26%-wide vertical strip, so a centered crop loses it. Added a `position` prop to `VideoBg`; set `object-[85%_25%]` to bias the crop to the green sphere. Verified at 1440×900 (green large, upper-right) and 390×844 (green peeks upper-right above the headline). Now **8 video sections** (all lazy). Later darkened **"very dark"** on request: `scrim={55} vignette` **+ a flat `bg-black/72` overlay** → the silver field goes near-black while the bright green sphere survives as the single standout (it's the brightest element). Added a `[text-shadow:0_2px_14px_rgba(0,0,0,0.85)]` on the content wrapper so the headline + 4 items lift cleanly off the sphere texture (same trick as Contact). Final treatment (on request): replaced the center-vignette + flat overlay with a **radial vignette centered ON the green sphere** (`radial-gradient(ellipse 62% 72% at 78% 20%, transparent → black .92)`) — the sphere becomes a lit spotlight while darkness radiates outward over the text area. Spotlights the "different" sphere and maximises text contrast. Verified desktop + mobile (green glows top-right both).

**Who we work with / audience → office-sun video, yellow-tinted** (on request): source `office-building-with-glass-windows-an-rising-sun-f…mp4` was 16.7 MB / 11 Mbps and **didn't loop** (camera pans). Re-encoded crf26 + **crossfade self-loop** → `WOMD_bg_office-sun_loop_1080.mp4` (4.7 MB, seamless, 11 s, `-an`/tmcd-stripped). Section kept its **yellow / black-text** identity: dropped solid `bg-brand-yellow` (stacking), `VideoBg scrim={0} bg="bg-brand-yellow"` + a flat brand-yellow tint overlay. **72% looked fine in a still composite but failed in the real browser** — the video's brightness varies across the loop (dark building frames vs bright sun), and a semi-transparent yellow over a dark frame goes muddy-olive → black text vanished + the busy window grid broke up the letters. Set the tint to **`bg-brand-yellow/[0.78]`** (raised to 0.88 for safety, then dialed back to 0.78 on request — verified still legible on the darkest frame): bright, clearly yellow, black text crisp everywhere; the building survives as a faint sun-shimmer texture. Lesson: tint strength for black-text-on-video must be set against the *darkest* frame, not a lucky still. Now **9 video sections** (all lazy).

Contact's neonglow runs at `rate={0.8}` for a calmer close (started at 0.67 ≈1.5× slower, but that looked juddery — slowing 30fps playback drops effective fps; 0.8 is the smooth/slow balance). Reusable on any VideoBg.

**Next:** eyeball in a real browser (`npm run dev`) for bubble motion + poster handoff; if the light hero feels too soft, dial the radial halo down or nudge content below the bubble band.

### Chat-bubble motion assets: ingest, optimize, rename

**Done:**
- Took the loose `Glass Bubble Chat Asset/` drop (8 stock chat-bubble loops, ~44 MB) into `brand/motion/`.
- All 8 were already H.264/1080p/30fps but web-hostile: `.mov` containers, no faststart, stray audio/timecode (`tmcd`) tracks, one at 11 Mbps, stock-dump filenames.
- Re-encoded all → `brand/motion/web/` as single-stream H.264 `.mp4` (`libx264 -crf 20 -preset slow`, `+faststart`, audio + `tmcd` stripped, `yuv420p`), renamed to the site convention `WOMD_<bg|motion>_<slug>_loop_1080.mp4`. ~44 MB → ~35 MB (modest — sources were already compressed; the real wins are faststart, `.mp4` container, single stream, consistent naming).
- Originals kept untouched in `brand/motion/masters/` — **filenames preserved on purpose** (the `…utc` stock IDs are license provenance).
- `ffmpeg` isn't installed and there's no Homebrew, so I pulled a temporary `ffmpeg-static` npm binary, ran the batch, then `npm uninstall`-ed it so `site/` deps stay clean. (Hit the classic `ffmpeg`-eats-stdin bug in the loop → fixed with `-nostdin`.)
- Documented the set + master→web map + re-run recipe in `brand/motion/README.md`.
- **Not wired into the site** — these are library assets; placement (which clip on which section) is a separate decision.

**Verified:** all 8 `web/*.mp4` probe as exactly 1 video stream, H.264 High / yuv420p / 1920×1080, moov-before-mdat (faststart) confirmed by byte-offset check. `site/package.json` + lockfile carry no `ffmpeg` residue.

**Next:** decide whether any clip becomes a live section background (copy into `site/public/video/`, feed `VideoBg`); the brand-yellow stream loop (`WOMD_motion_chat-bubbles-yellow-stream`) is the most on-brand candidate.

---

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
