# Reference Site Analysis — 2026-05-28

**Reference:** "WOMD Company Profile — Strategic Transformation Consultancy" (Claude artifact `59a51c25...`), saved as MHTML in this folder and parsed from the rendered DOM.

**ROLE: CONTENT SOURCE ONLY.** We take the *copy + section structure + 5-pillar grouping* from this MHTML. We do **NOT** copy its visual design (layout, colors, animation). The design is built from scratch using `brand/design.md` + our background videos. Any colors/fonts detected below are incidental (and partly claude.ai UI chrome) — not a design reference.

**What it is:** A full single-page **company profile** for WOMD. Its value to us is the narrative: it turns the product catalog into a flowing profile (hero → who → belief → 5 pillars → process → differentiators → audience → CTA).

---

## Section structure (in order)

1. **Hero** — eyebrow `STRATEGIC TRANSFORMATION CONSULTANCY` → wordmark **W O MD** → tagline **Weapons of Mass Discussion** → subhead: *"We help organizations turn ideas into public conversations through strategy, research, innovation, AI, technology, branding, and capability development."*
2. **WHO WE ARE** — H2 *"A consultancy built for the AI & digital era."* + 2 paragraphs (we're not a content agency; we create clarity/systems/narratives).
3. **OUR CORE BELIEF** — H2 *"Ideas do not move people just because they exist."* → 4 beats: **CLEAR · RELEVANT · POWERFUL · IMPACTFUL** (each with a line).
4. **WHAT WE DO (overview)** — H2 *"Five pillars of transformation."* → 5 pillar cards (title + 3 product names each).
5–9. **Pillar detail ×5** — one section per pillar, each = intro paragraph + 3 product cards, each card with ~5 deliverable bullets:
   - **01 Digital Transformation & Leadership** — Digital Transformation Playbook · Social Media Strategy Playbook · Digital Leadership Playbook
   - **02 Innovation & Business Intelligence** — Market Research Report · Product-Market Fit Assessment · Data Analytics Dashboard Blueprint
   - **03 Technology & Digital Products** — LMS & Learning Platform · AI Agent & Automation · Website & Digital Presence
   - **04 Brand Strategy & Visual System** — Brand Blueprint · Brand Kit & Visual System
   - **05 People & Organizational Development** — Org & Talent Assessment · Transformation Training Roadmap · Strategic Hiring & Talent Dev
10. **HOW WE WORK** — H2 *"We begin with clarity."* → 5 numbered steps: **Diagnose · Define · Design · Develop · Enable**.
11. **WHAT MAKES US DIFFERENT** — H2 *"We don't start from 'what should we make?' We start from 'what needs to change?'"* → 4 differentiators: Strategic Before Tactical · Connected Not Siloed · Systems Not Outputs · AI-Enabled Human-Centered.
12. **WHO WE WORK WITH** — H2 *"Organizations ready to build for the future."* → 8 arrow bullets (companies in digital transformation, AI adopters, brands needing positioning, product teams, leaders, institutions, founders, orgs scaling).
13. **Closing CTA** — H2 *"The future belongs to organizations that know how to think, communicate, and transform."* + `LET'S BUILD TOGETHER` → wordmark, contact placeholders (`[insert email/website/phone/address]`), kicker **"TURN IDEAS INTO PUBLIC CONVERSATIONS."**

> Note: this maps 1:1 to `brand/WOMD Product Catalog.md`, re-grouped into 5 pillars (catalog Category 5 "Innovation" is surfaced as Pillar 02).

---

## Color palette — INCIDENTAL ONLY (not a design reference)

We design our own palette from `brand/design.md`. The one useful side-fact: `rgb(253, 216, 45)` = **`#FDD82D`** appears **163×**, which **pixel-confirms our brand yellow** (resolves design.md §8 #9). Everything else below is noise — ignore for design.

| Use | Colors |
|---|---|
| Primary yellow | `#FDD82D` |
| Amber depth ramp (Tailwind amber) | `#fffbeb #fef3c7 #fde68a #fcd34d #fbbf24 #f59e0b #d97706 #b45309 #92400e` |
| Dark | `#0b0b0b`, `#000000`, slate `#182230` |
| Light / neutral | `#ffffff #fafafa #f5f5f5` + grays `#e5e7eb #d1d5db #d4d4d4 #6b7280 #374151` |

⚠️ **Discrepancies vs `brand/design.md`:**
- Reference dark = **`#0b0b0b` / near-black**, NOT brand Black Pearl `#2B2B2B`. Decide which wins.
- Reference uses a full **amber gradient ramp** for depth — design.md only specifies the single yellow. The reference *extends* the palette.
- (Ignore `#d97757`, `#dc2626`, `#3b82f6` — those are claude.ai UI chrome from the MHTML wrapper, not the artifact.)

## Typography
- **Montserrat** (headlines) + **Roboto** (body) — matches the brand exactly. ✅
- **Moderniz is NOT used** in the reference. (We have it; reference doesn't lean on it.)

---

## Build implications (content drives structure; design is ours)

1. **Scope grew.** ~13 top-level sections + dense pillar detail — not a 6-slide deck. The current `site/src/data/sections.ts` (6 placeholder sections) gets replaced with this content structure.
2. **Scroll model.** Pure full-page scroll-snap (D-004) does **not** fit content-heavy pillar sections (3 cards × 5 bullets). Recommend **hybrid**: snap on punchy/transition sections (hero, belief, differentiators, closing), normal scroll on dense ones. Revisit D-004.
3. **Visual design = original.** Build from `brand/design.md` (colors, fonts, logo) + our own layout/animation choices. Do not derive design from the MHTML.
4. **Video pairing.** Use video on a few punchy/transition sections only (hero, core belief, closing CTA). See `video-analysis.md`.
5. **Copy is ready-ish.** The reference copy is solid and on-message; we can refine via the `copywriter` skill but it's a strong starting draft. Contact details are placeholders (`[insert ...]`) — need real values.
