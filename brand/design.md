# WOMD — Design System & Brand Reference

> **WOMD — Weapons of Mass Discussion**
> Brand identity for a Strategic Transformation Consultancy.
> Compiled from `WMD Simple Visual Guideline (New).pdf` (Mufti Hadi Design, ©2024), the logo asset set, and `WOMD Product Catalog.md`.
> Last updated: 2026-05-28.

---

## 0. Status & honest scope note

This document consolidates everything we currently have. Be clear about what is **specified** vs. **assumed**:

- **Specified by the source PDF:** 3 colors, 3 typefaces, logo lockups. That's it.
- **The PDF is a "simple" style sheet, not a full brand guideline.** Most of its body text is Lorem ipsum placeholder. There are **no** rules for clear-space, minimum size, do/don'ts, grid, layout, iconography, photography, or application mockups.
- **Assumed / decided here (flag for review):**
  - Canonical name = **WOMD** (the logo reads W-O-M-D, the "O" being the radiation mark). The PDF filename says "WMD" — treat that as legacy.
  - WOMD is the brand **for the consultancy** described in the product catalog (both assets live in the same project).
  - Yellow is taken from the PDF spec as `#FDD82D`. Not yet pixel-verified against the JPEG masters.

Anything in **§8 Gaps** is missing and should be produced before this is treated as a real brand system.

---

## 1. Brand identity

| | |
|---|---|
| **Name** | WOMD |
| **Full name / tagline** | Weapons of Mass Discussion |
| **Category** | Strategic Transformation Consultancy |
| **Verbal positioning** | A play on "Weapons of Mass Destruction" → reframed as discussion / communication / strategy. The brand weaponizes conversation, ideas, and transformation. |
| **Personality (inferred from mark)** | Bold, irreverent, confident, high-contrast, slightly subversive. Comic/sticker-style outline suggests approachable + punchy, not corporate-sterile. |
| **Designer of record** | Mufti Hadi Design (©2024) |

**Naming rule:** Use **WOMD** in all text. Do not mix "WMD" / "WoMD" / "W.O.M.D." Spell out "Weapons of Mass Discussion" on first use in formal documents.

---

## 2. Logo system

The mark is a wordmark **W[O]MD** where the "O" is a radiation/nuclear trefoil enclosed in a speech bubble — fusing "weapon" (radiation) + "discussion" (speech bubble). All masters are 1500px JPEG (raster).

### 2.1 Master files (`logo/`)

| File | Type | Background | Use for |
|---|---|---|---|
| `WOMD_Wordmark_BgYellow_1500x1500.jpeg` | Full wordmark | Yellow `#FDD82D` | Brand-forward placements, social avatars on dark |
| `WOMD_Wordmark_BgDark_1500x1500.jpeg` | Full wordmark | Black Pearl `#2B2B2B` | Dark UI, dark slides, dark social |
| `WOMD_Wordmark_BgWhite_1500x1500.jpeg` | Full wordmark | White `#FFFFFF` | Default / documents / light UI |
| `WOMD_Wordmark_Horizontal_BgLight_1500x457.jpeg` | Horizontal lockup (tight crop) | Light | Headers, nav bars, email signatures |
| `WOMD_Wordmark_Horizontal_BgLight_1500x470.jpeg` | Horizontal lockup (alt crop) | Light | Same as above; near-duplicate of the 457 crop |
| `WOMD_Lockup_Tagline_BgLight_1500x623.jpeg` | Wordmark + "Weapons of Mass Discussion" | Light | Intro slides, about pages, formal first-use |
| `WOMD_Icon_SpeechBubble_BgYellow_1500x1500.jpeg` | Icon (speech bubble + radiation) | Yellow | App icon, favicon, avatar |
| `WOMD_Icon_SpeechBubble_BgWhite_1500x1500.jpeg` | Icon (speech bubble + radiation) | White | Favicon on light, watermark |
| `WOMD_Icon_Radiation_BgYellow_1500x1500.jpeg` | Icon (radiation only, no bubble) | Yellow | Secondary mark, pattern motif, loaders |

### 2.2 Web-optimized files (`logo/web/`)

Compressed JPEG (quality ~70), sized for fast web loading:

| File | Size | Use |
|---|---|---|
| `WOMD_Wordmark_BgWhite_512.jpg` | 512px / 20KB | Default web logo (light bg) |
| `WOMD_Wordmark_BgDark_512.jpg` | 512px / 24KB | Web logo on dark |
| `WOMD_Wordmark_BgYellow_512.jpg` | 512px / 24KB | Web logo on color block |
| `WOMD_Wordmark_Horizontal_640.jpg` | 640×195 / 28KB | Site header / nav |
| `WOMD_Lockup_Tagline_800.jpg` | 800×332 / 52KB | Hero / about section |
| `WOMD_Icon_SpeechBubble_BgYellow_512.jpg` | 512px / 28KB | Social avatar |
| `WOMD_Icon_SpeechBubble_BgWhite_512.jpg` | 512px / 28KB | Avatar on light |
| `WOMD_Icon_Radiation_BgYellow_512.jpg` | 512px / 20KB | Secondary icon |
| `WOMD_favicon_192.jpg` | 192px / 12KB | Favicon / PWA icon source |

### 2.3 Logo selection logic

- **Light background →** `BgWhite` wordmark.
- **Dark background →** `BgDark` wordmark.
- **Brand color block / hero →** `BgYellow` wordmark.
- **Square space (avatar, app icon) →** `Icon_SpeechBubble`.
- **First/formal use →** `Lockup_Tagline`.

### 2.4 Logo rules (provisional — not in source PDF)

- Maintain clear-space ≈ height of the "O" mark on all sides. *(Proposed default — confirm.)*
- Minimum legible width: wordmark ≥ 90px; icon ≥ 24px on screen.
- Do not stretch, recolor, re-shadow, rotate, or place the wordmark on a low-contrast background.
- The shadow/outline is part of the mark — do not remove it.

---

## 3. Color system

Source: PDF "COLOR — Primary Color".

| Token | Name | HEX | RGB | Role |
|---|---|---|---|---|
| `--color-yellow` | Yellow | `#FDD82D` | `253, 216, 45` | Primary brand color, accents, CTAs, highlights |
| `--color-black-pearl` | Black Pearl | `#2B2B2B` | `43, 43, 43` | Text, outlines, dark backgrounds |
| `--color-white` | White | `#FFFFFF` | `255, 255, 255` | Backgrounds, negative space, knockout text |

```css
:root {
  --color-yellow: #FDD82D;
  --color-black-pearl: #2B2B2B;
  --color-white: #FFFFFF;
}
```

**Usage:** Yellow is the signature — use it deliberately (accent + energy), not as a wash. Black Pearl is the workhorse for text and the logo outline. Pairing of choice: yellow on black-pearl, or black-pearl on white.

> **Not yet defined (see §8):** semantic colors (success/warning/error), neutral gray scale, hover/active states, accessible text-on-yellow contrast pairs. `#2B2B2B` text on `#FDD82D` passes WCAG AA; white text on `#FDD82D` does **not** — avoid it.

---

## 4. Typography

Source: PDF "TYPEFACE".

| Role | Typeface | Notes |
|---|---|---|
| **Headline** | Montserrat | Geometric sans. Use Bold/ExtraBold for headlines. |
| **Body** | Roboto | Neutral, highly legible. Regular/Medium for body copy. |
| **Decorative** | Moderniz | Display-only. Use sparingly for impact words/posters — never for body. |

```css
--font-headline: "Montserrat", sans-serif;
--font-body: "Roboto", sans-serif;
--font-decorative: "Moderniz", sans-serif; /* display use only */
```

- Montserrat & Roboto: free via Google Fonts.
- **Moderniz:** display face by Eko Bimantara. **100% free for personal & commercial use** (per bundled `Read Me.txt`). Font file lives at `fonts/Moderniz.otf`. Restrictions: do not sell, modify, or create derivative fonts from it. Source: dafont.com / ekobimantara.com.

> **Not yet defined:** type scale (h1–h6, body, caption), line-height, letter-spacing, weights per role, web font-loading strategy.

---

## 5. Web implementation starter

Minimum to ship a consistent web presence:

```css
:root {
  --color-yellow: #FDD82D;
  --color-black-pearl: #2B2B2B;
  --color-white: #FFFFFF;
  --font-headline: "Montserrat", sans-serif;
  --font-body: "Roboto", sans-serif;
}
body { font-family: var(--font-body); color: var(--color-black-pearl); background: var(--color-white); }
h1,h2,h3,h4,h5,h6 { font-family: var(--font-headline); font-weight: 700; }
.btn-primary { background: var(--color-yellow); color: var(--color-black-pearl); }
```

- **Favicon:** ready in `logo/web/favicon/` — drop in `favicon.ico`, link `apple-touch-icon.png`, `icon-192/512.png`, and `site.webmanifest`.
- **Logo in header:** `WOMD_Wordmark_Horizontal_640.jpg` (swap to dark variant in dark mode).
- **Open Graph image:** build from `WOMD_Wordmark_BgYellow` or the tagline lockup.

---

## 6. Brand context — what WOMD sells

WOMD's offering (from `WOMD Product Catalog.md`) spans 5 categories. Visual identity must flex across strategy decks, dashboards, websites, and training materials — i.e., **B2B / executive-facing**, which sets a high bar for polish the current "simple" guideline does not yet meet.

1. **Digital Transformation & Future-Ready Leadership** — DT-01 Digital Transformation Playbook · DT-02 Social Media Growth Strategy Playbook · DT-03 Digital Leadership Playbook
2. **Technology & Digital Product Development** — TK-01 LMS Platform · TK-02 AI Agent & Automation · TK-03 Website & Digital Presence
3. **Brand Strategy & Visual System** — BR-01 Brand Blueprint · BR-02 Brand Kit & Visual System
4. **People & Org Development in the Age of AI** — HR-01 Org & Talent Assessment · HR-02 Transformation Training Roadmap · HR-03 Strategic Hiring & Talent Development
5. **Business & Data-Driven Product Innovation** — IN-01 Market Research Report · IN-02 Product-Market Fit Assessment · IN-03 Data Analytics Dashboard Blueprint

> Note: WOMD itself sells **BR-02 Brand Kit & Visual System** to clients. The current WOMD guideline should eventually meet the standard WOMD promises to deliver — right now it doesn't (§8). Fixing this is also a credibility/sales asset.

---

## 7. Asset inventory

| Asset | Path | Format | Notes |
|---|---|---|---|
| Logo masters (9) | `logo/*.jpeg` | JPEG 1500px | Raster only — **no vector source** |
| Web logos (9) | `logo/web/*.jpg` | JPEG, compressed | Generated 2026-05-28 |
| Transparent PNGs (5) | `logo/png-transparent/*.png` | PNG, alpha | Wordmark, horizontal, tagline lockup, speech-bubble icon, radiation mark (mono). Flood-filled from raster — edges are not vector-crisp |
| Favicon set | `logo/web/favicon/` | PNG + ICO | `favicon.ico` (16/32/48/64), `favicon-16/32/48.png` (transparent), `apple-touch-icon.png` (180, opaque yellow), `icon-192.png`, `icon-512.png` (opaque yellow, PWA), `site.webmanifest` |
| Moderniz font | `fonts/Moderniz.otf` | OTF | Decorative display face; free for commercial use (`Read Me.txt`) |
| Asset library | `assets/` | SVG/PNG/JPG/WebP/AI | Curated stock: icons (nuclear, ui, people, marketing), textures (halftone, grain), overlays (yellow-stripes), backgrounds (yellow-polygon), imagery, vector sources. See `assets/README.md` |
| Visual guideline | `WMD Simple Visual Guideline (New).pdf` | PDF | Source of color/type/logo; mostly placeholder body |
| Product catalog | `WOMD Product Catalog.md` | Markdown | Service offering |
| This document | `design.md` | Markdown | Consolidated reference |

> All paths above are relative to the `brand/` folder. The web app (`/site`) consumes copies of the web-optimized logos, favicon set, and `Moderniz.otf` under `site/public/`.

---

## 8. Gaps & recommended next steps

What's missing for this to be a real, defensible brand system (priority order):

1. **Vector source files (CRITICAL).** All logos are raster JPEG. No SVG/AI/EPS = can't scale to print/signage, can't recolor, no transparency. Request the original vector files from Mufti Hadi Design. Without these, the identity can't be properly applied.
2. ~~**Transparent logo versions (PNG).**~~ ✅ Partial — transparent PNGs generated in `logo/png-transparent/` (flood-filled from raster). Still need **SVG** (vector) versions — depends on item #1.
3. **Resolve the name.** Lock WOMD vs WMD across all assets, file names, and the PDF.
4. **Logo usage rules.** Clear-space, min size, incorrect-use examples, co-branding/lockup behavior.
5. **Extended color system.** Neutral gray scale, semantic colors, state colors, verified accessible text/background pairs.
6. **Type scale & hierarchy.** Defined h1–caption sizes, weights, line-heights; web font strategy.
7. ~~**Moderniz licensing.**~~ ✅ Resolved — free for commercial use; file stored in `fonts/Moderniz.otf`.
8. **Application templates.** Social templates, slide master, document template, email signature, business card, favicon set — the things BR-02 promises clients.
9. **Pixel-verify yellow.** Sample the actual logo JPEG and confirm it matches `#FDD82D`.

> **Strategic note (revenue):** WOMD productizes brand systems (BR-01/BR-02). Upgrading WOMD's *own* guideline into a reusable, sellable template/playbook turns this internal cleanup into capitalizable IP — a demo of the exact deliverable you sell.
