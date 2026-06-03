# Decision Log

Lightweight ADRs. Record decisions that aren't obvious from the code/files — especially the *why*, so future-us doesn't relitigate them. Newest at top.

---

## D-013 — Bilingual EN/ID: manual toggle + intent-signal banner, no IP geo-redirect

- **Date:** 2026-06-03
- **Decision:** Site is bilingual EN/ID. EN at `/`, ID at `/id/`. Language is chosen via a manual EN/ID toggle in the header. A one-time dismissible banner suggests the other language **only** when `navigator.languages` indicates a mismatch with the current page lang. **No auto-redirect**; no IP geolocation.
- **Why:** IP-based auto-redirect is a well-known UX anti-pattern: it punishes Indonesian users abroad, breaks VPN users, confuses search-engine crawlers (US-IP bots only see EN), and overrides users who *intentionally* request the other language. The browser language list is a direct intent signal — closer to what the user wants than where their packets exit. The cookie-of-explicit-choice (`localStorage.womd_lang`) trumps everything else, matching how Google, Wikipedia, and Stripe handle it.
- **How:** `astro.config.mjs` i18n routing with `prefixDefaultLocale:false`; per-locale content in `data/content.ts` (EN) + `data/content.id.ts` (ID) resolved through `src/i18n.ts`. Page bodies in `HomePage.astro` / `WhatWeDoPage.astro` take a `lang` prop. Banner is client-only, copy lives in the target lang.
- **Trade-off:** Hosted static (no SSR) means we can't read `Accept-Language` server-side or set a Cookie before first paint. Banner appears post-hydration with a ~900ms delay (avoids fighting the hero entrance). If we later move to Vercel SSR, we can promote this to a header-aware response at the edge without UX changes for the user.
- **Open:** Product/service names (e.g., "Brand Blueprint") currently stay English in both versions as SKU-like nouns; revisit if user wants full Indonesianization.

---

## D-012 — Headline line-height: tight (1.1) by default, wide (1.25) only for boxed accents

- **Date:** 2026-05-29
- **Decision:** Section-title `line-height` is **1.1** for plain headlines (the `text-h2` token + the explicit non-box `<h2>`s: Belief, What-we-do, Pillar titles, Process, Different, Audience, Future, Contact). Headlines whose accent has a **background box** keep a wide leading: **Who We Are 1.25** (ink box) and the **Hero subhead 1.12** (yellow box).
- **Why:** D-010 set everything to 1.25 to stop descender clipping — but its own evidence (the "y" in "consultancy" covered by the next line's box on Who We Are) shows the real cause was the **highlight box** painting over the line-above's descenders, not line spacing. Plain headlines have no box, so descenders fit fine at ≥1.0; 1.1 reads tighter/more editorial and stays clip-safe (verified on the wrappy, descender-heavy Belief headline). Only boxed accents genuinely need the extra vertical air.
- **Rule of thumb:** boxed/highlighted multi-line headline → leading ≥1.25; plain headline → 1.1.

- **Date:** 2026-05-29
- **Decision:** Replace the dark `liquid-splash` hero with the white-background `WOMD_motion_chat-bubbles-yellow-stream` loop, and rebuild the hero as a **light theme**: white container, `object-contain` video (invisible white letterbox on web + mobile), ink text, a yellow highlight-box subhead accent, and a soft white radial halo behind the content. Added a `bg` prop to `VideoBg`. Made **Who We Are** a **full-yellow** section (`yellow-polygon.jpg` cover, ink text, accent flipped to an ink box with yellow text) so the deck doesn't run two near-white sections back-to-back. Switched the hero logo to the **horizontal** wordmark (the square 1500×1500 PNG's transparent padding made the IMG too tall and pushed the subhead off-screen).
- **Why:** The chat-bubble motion is more on-brand for "Weapons of Mass *Discussion*" than the abstract splash, and reads as conversation/energy. The arc escalates **white hero → yellow who → dark belief**, each section a distinct brand color. (Who was briefly dark; changed to yellow on request — yellow separates the white hero and dark belief more cleanly and is bolder.)
- **Tension with D-009:** D-009 reduced motion and reserved video for hero/contact "bookends." This keeps the bookend principle but makes the hero *more* energetic, not calmer. If it reads as too busy, raise the radial-halo opacity or move content below the bubble band — don't re-darken (that re-creates the white-on-white contrast problem the clip caused).
- **Revisit if:** real-browser review shows bubbles fighting the wordmark, or the two-dark middle (who+belief) feels heavy.

## D-010 — Typography corrections: descender-safe line-height + mobile-safe type floor

- **Date:** 2026-05-29
- **Decision:** Partially revert D-008's tight `line-height: 0.98` on section titles to **1.25**, and lower the `text-h2` clamp **floor** from `2.6rem` to `1.7rem` (curve `clamp(1.7rem, 0.5rem + 6vw, 5.5rem)`; desktop max unchanged). Added global `overflow-wrap: break-word` on `h1–h3`.
- **Why:** `0.98` is below Montserrat's intrinsic glyph height (~1.22em), so descenders (y/g/p/j) on the first of a wrapped headline were clipped — most visibly the "y" in "consultancy", where line 2's yellow highlight box painted over the tail. The `2.6rem` (~42px) floor also forced long single words ("transformation.") to overflow off-screen inside the narrow "What we do" card on iPhone. Correctness (no clipped/overflowing letters) outweighs the marginal tightness D-008 wanted.
- **Also:** "What we do" card padding `p-8 → p-6` on mobile; `↗` (emoji on iOS) → inline SVG; removed the unused Moderniz `@font-face`/token from the site (kept as a brand asset in `brand/fonts/`).

## D-009 — Delivery polish: motion reduced, backgrounds as "bookends" only

- **Date:** 2026-05-29
- **Decision:** Dial back decoration for a calmer/premium feel. (a) **Motion cut**: infinite icon-float kept only on the Core Belief flow (removed from what-we-do/pillars/process); halftone "drift" made **static**. (b) **Backgrounds reserved for bookends**: Hero (splash video) + Contact (nuclear-explosion image), both responsive portrait/landscape; Who-We-Are keeps a single yellow-polygon accent; **what-we-do** keeps the stripes video; everything else flat/textured. (c) Bright AI videos (future/contact) replaced with **static dark + halftone** because they needed ~90% scrim to be legible (not worth ~13 MB).
- **Why:** Multiple simultaneous motion systems + a video in many sections read as "busy/restless", not confident. Images should mark moments, not wallpaper. Result: **video payload 55 MB → 16 MB**.
- **Also:** `scroll-snap-type` set to **mandatory** on desktop (deck feel), disabled `<768px`. Pillars flattened (no halftone), pillar 02/04 dark→light so the 5-pillar set reads as one cohesive light stretch (balances a dark-heavy deck).

## D-008 — Locked type scale + 15-slide deck structure + adaptive dot-nav

- **Date:** 2026-05-29
- **Decision:** (a) **Lock section typography** to Tailwind tokens: section-title = `text-h2` (`clamp 2.6→5.5rem`, Montserrat extrabold), eyebrow = `text-eyebrow`; plus a dedicated **"long-title"** size (`clamp 1.8→3.4rem`) for long headings. (b) Expand to a **15-slide deck** and **merge** Track Record + Trusted By into the founder ("Who's Behind It") section — those are Razi's credentials, not WOMD's. (c) **Dot-nav = one dot per slide (15) + scroll-spy active state + deterministic light/dark color** (`is-light` toggle, not `mix-blend`, which proved unreliable on white). (d) **Mobile = hamburger → full-screen overlay** (pillars collapsed to one entry); horizontal swipe-deck rejected as risky for content-dense pillar slides.
- **Why:** Consistency (every title same size/font), narrative completeness, and navigation that stays visible on any background and reflects scroll position.

## D-007 — Visualization pass: scroll-reveal, proof stats, timeline, clients, team; Lottie for animation

- **Date:** 2026-05-28
- **Decision:** Make the site feel more *visual* (inspired by the team's own Katalis deck + on.energy): (a) **scroll-reveal** entrance animations via IntersectionObserver (`.reveal`, JS-gated so no-JS still shows content, reduced-motion respected); (b) a **proof/stats band** with big numerals (placeholder numbers — replace before launch); (c) **process redesigned as a visual timeline**; (d) **client logo grid** + **team section (Razi Thalib only)** with assets reused from Katalis (same client base — user-authorized). For animated icons, chose **Lottie** (web-native) over rendering the `.mogrt` packs (which need Adobe and can't go to web directly).
- **Why:** User felt the site was text-heavy/under-visualized and pointed to Katalis as the benchmark; both reference sites lean on big-number proof + spatial structure. Lottie avoids an Adobe round-trip and ships tiny.
- **Assets:** downloaded `.mogrt`/`.aep` icon packs are Adobe-only motion source, kept (or held) under `brand/assets/motion/` — NOT web assets. Raw `.zip` packs are now gitignored.

- **Date:** 2026-05-28
- **Decision:** Move the site away from a generic "AI/template" look toward an **editorial** direction: fluid `clamp()` type scale (Tailwind `text-display/h2/h3/lead/eyebrow/numeral`), bigger and more exposed typography, left-aligned/asymmetric layouts instead of center-everything, pillar overview as an editorial **index list** (large numerals) instead of a card grid, hairline/sharp cards instead of heavy rounded shadows, prominent kicker labels (rule line + spaced caps), and varied section rhythm.
- **Why:** User felt text was too small/under-exposed (e.g., hero eyebrow) and parts looked "vibe coding" (generic). Research confirms center-everything + four-cards-in-a-grid + timid type are the top tells of AI-generated sites; WOMD's bold/provocative brand should read editorial, not safe SaaS.
- **Refs:** landy-ai hero best practices; dev.to "why every AI landing page looks the same"; clamp fluid-type guides.

## D-005 — Site content from reference MHTML; hybrid scroll; design original

- **Date:** 2026-05-28
- **Decision:** Rebuild `site/` as a full **company profile** (~13 sections) using the *content* (copy + 5-pillar structure) from the saved reference artifact MHTML. The **visual design is original**, derived from `brand/design.md` + our background videos — not copied from the reference. Scroll model is **hybrid** (revises D-004): `scroll-snap-type: y proximity` on the document so punchy/transition sections gently snap while content-dense pillar sections scroll freely.
- **Why:** The reference turns the product catalog into a strong narrative (hero → who → belief → 5 pillars → process → differentiators → audience → CTA). Full mandatory snap (D-004) breaks on dense pillar sections (3 cards × 5 bullets each). User confirmed content-only use of the MHTML and delegated the call.
- **Also:** Reference pixel-confirms brand yellow `#FDD82D` (163× in its CSS) → resolves design.md §8 #9. Contact details left as clearly-marked placeholders (not fabricated).

## D-004 — Landing page is a single-page, scroll-snap "deck-style" site

- **Date:** 2026-05-28
- **Decision:** The landing page is one page where each section fills the viewport and snaps on scroll (CSS `scroll-snap`), narrated like a pitch deck (hook → problem → solution → services → CTA).
- **Why:** Matches the desired "presentation deck per section" experience; CSS scroll-snap avoids heavy JS libs (`fullPage.js`).
- **Trade-off:** Full-viewport sections constrain content density; long-form content needs a different layout. Accessibility: must keep keyboard scroll + reduced-motion fallback.

## D-003 — Stack: Astro + Tailwind

- **Date:** 2026-05-28
- **Decision:** Build `site/` with Astro + Tailwind CSS.
- **Why:** Static-first = fast + great SEO for a marketing one-pager; component model keeps sections clean; easy to fork into a **sellable template** (aligns with WOMD's BR-02 product / capitalizable IP). Lighter than Next.js for a no-app site.
- **Revisit if:** the domain later needs auth, CMS, or app features → consider Next.js.

## D-002 — Workspace structure (`brand/`, `docs/`, `site/`, `.claude/`)

- **Date:** 2026-05-28
- **Decision:** Separate brand source-of-truth (`brand/`) from the web app (`site/`); the app consumes *copies* of web assets under `site/public/`.
- **Why:** Keeps canonical brand assets clean and tool-agnostic; the site is one consumer among future ones (decks, social, docs).
- **Trade-off:** Asset duplication between `brand/` and `site/public/`. Acceptable; re-copy when masters change.

## D-001 — Canonical brand name is "WOMD"

- **Date:** 2026-05-28
- **Decision:** Use **WOMD** everywhere. "WMD" (PDF filename) is legacy; "WoMD" not used.
- **Why:** The logo literally reads W-O-M-D (the "O" is the radiation mark). Three competing spellings across existing assets is a basic brand weakness.
- **Open:** Source guideline PDF still titled "WMD" — rename when convenient.
