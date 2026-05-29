# Decision Log

Lightweight ADRs. Record decisions that aren't obvious from the code/files — especially the *why*, so future-us doesn't relitigate them. Newest at top.

---

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
