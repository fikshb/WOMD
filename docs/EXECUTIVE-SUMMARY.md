# WOMD — Executive Build Summary

**Proyek:** Weapons of Mass Discussion (WOMD) — brand system + website company-profile
**Stack:** Astro + Tailwind (static), single-page deck 15 slide
**Status:** Selesai + **redesign video-rich** (9 slide background video sinematik, lazy-loaded, brand-cohesive). **Semua ter-commit & ter-push** ke GitHub (`github.com/fikshb/WOMD`, main → `7cd831a`). Video deploy diciutkan **33 MB → ~7 MB** (720p/CRF28). Deploy Vercel pending (root = `site`). Sisa sebelum go-live: **contact dummy data** + keputusan **fit-the-screen** untuk section padat (lihat WORKLOG "Session close").
**Dokumen ini:** ringkasan eksekutif — bukan log teknis baris-per-baris (itu ada di `WORKLOG.md` / `DECISIONS.md`).

---

## 1. Apa yang dibangun

Sebuah **landing page deck-style** untuk konsultansi transformasi strategis. Satu halaman, 15 "slide" full-screen dengan scroll-snap, narasi seperti pitch deck:

1. Hero (logo + tagline, video splash)
2. Who We Are
3. Core Belief (flow 4 ikon)
4. What We Do — Five Pillars (overview)
5–9. Pillar Detail 01–05 (produk per kategori)
10. How We Work (proses 5 langkah)
11. Who's Behind It (Razi + track record + brands)
12. What Makes Us Different
13. Who We Work With
14. The Future (pre-closing)
15. Contact (CTA + sosmed, latar "bom")

Fitur: sistem tipografi terkunci (`clamp()` fluid), dot-nav 15 titik dengan scroll-spy + warna adaptif, hamburger overlay di mobile.

**Background video sinematik (9 section, semua lazy-loaded)** — arc warna: Hero putih (gelembung chat kuning, ping-pong) → Who-We-Are kuning (cube-grid) → Belief gelap (gelembung kaca) → What-we-do (yellow-stripes) → **Different** gelap (bola perak + 1 bola hijau, radial-spotlight) → Process gelap (vortex partikel) → **Audience** kuning (gedung sunrise, tint kuning) → The Future gelap (neon-tunnel) → Contact gelap (gelembung neon, 0.8× speed). Tiap video dioptimalkan (H.264 crf~20-26, faststart, audio dibuang) dan diberi scrim/vignette/tint agar teks tetap kontras. Komponen `VideoBg` punya prop reusable: `bg`, `scrim`, `vignette`, `contain`, `rate` (playback speed), `position` (focal crop).

---

## 2. Perjalanan kerja (fase)

| Fase | Inti pekerjaan |
|---|---|
| **1. Brand asset** | Rapikan & rename logo, buat versi web + PNG transparan + favicon set, download font Moderniz, susun `design.md` (source of truth). |
| **2. Inisialisasi** | `/init`, scaffold Astro + Tailwind, `git init`, buat 4 project skill, struktur `docs/`. |
| **3. Konten & build** | Ambil *konten* dari referensi (MHTML artifact), bangun seluruh section, pertajam copy ke brand voice. |
| **4. Kurasi aset** | ~1,3 GB pack stock + video → diciutkan jadi library **19 MB** (ikon, tekstur, overlay, background). |
| **5. Polish desain (iteratif)** | Penyetelan panjang: hero (ukuran, splash, vignette, orientasi portrait/landscape), kunci ukuran section-title, redesign tiap section, dot-nav + scroll-spy, mobile nav. |
| **6. Refactor delivery** | Kurangi animasi, ganti 2 video AI → gelap statis, **video 55 MB → 16 MB**, hapus aset orphan, commit, push, **squash history (.git 243 MB → 96 MB)**. |
| **7. Redesign video-rich** (sesi ini, Opus 4.8) | 6 video stock baru diproses (chat-bubbles, cube-grid, organic-vortex, neon-tunnel, green-sphere, office-sunrise) → web-friendly + crossfade/ping-pong loop di yang tak seamless. Dipasang sebagai bg di 9 section dengan treatment per-section (scrim, vignette, radial-spotlight, tint kuning, slow-mo). **Lazy-load** semua video (IntersectionObserver: load+play saat terlihat, pause saat keluar, skip untuk reduced-motion/Save-Data). Tuning iteratif (gelap/kuning/spacing), pass line-height (D-012), lalu **cleanup ~34 MB** + update docs. |

---

## 3. "Agent" / peran yang dipakai

Pekerjaan dieksekusi oleh **satu agen (Claude Opus 4.7, 1M context)** yang menerapkan empat **lensa peran** yang sudah didefinisikan sebagai *project skills* di `.claude/skills/`:

- **frontend-designer** — keputusan layout, tipografi, komposisi, performa.
- **brand-guardian** — kepatuhan warna/font ke `design.md` (mis. menolak kombinasi kuning-di-putih yang lemah kontras).
- **copywriter** — penajaman & penyelarasan copy ke brand voice.
- **deck-architect** — urutan & narasi antar-section.

> Catatan jujur: skill-skill ini dipakai sebagai *kerangka berpikir*, bukan dijalankan sebagai sub-agent otonom terpisah di sesi ini. Eksekusi langsung oleh agen utama.

**Tooling pendukung:** `ffmpeg-static` (transcode/crop video), `sips` (resize/convert/crop gambar — bawaan macOS), Pillow (flood-fill transparansi PNG, fase awal), Higgsfield (generate video AI), `git`.

---

## 4. Aset — dikumpulkan vs dipakai

| Kategori | Dikumpulkan | Dipakai di situs final |
|---|---|---|
| **Logo** | 10 file WhatsApp-export → renamed + web + PNG transparan + favicon | Wordmark (hero), icon speech-bubble (masthead/contact), favicon set, OG image |
| **Font** | Moderniz (display), Montserrat, Roboto | Montserrat (headline), Roboto (body); Moderniz **tidak terpakai** di markup |
| **Video** | Stock + AI → dioptimalkan | **9 background loop** (chat-bubbles ×2, cube-grid, organic-vortex, neon-tunnel, green-sphere, office-sunrise, yellow-stripes) di `site/public/video` (~34 MB). Library kanonik + masters di `brand/motion/` (web committed, masters lokal/gitignored). Klip stok lama (liquid-splash) + library tak-terpakai dihapus. |
| **Gambar** | nuclear-explosion, yellow-polygon, 3 webp AI | Diganti video — semua still bg (nuclear, polygon) dihapus saat cleanup. Tersisa: logo, favicon, team photo, client logos. |
| **Ikon** | Pack nuclear/ui/people/marketing (~200 SVG) | Glyph `ui`/`step` untuk pillar, process, belief, 14 kartu produk. Pack `marketing` ditolak (off-brand). |
| **Tekstur** | halftone (hitam/putih), grain | halftone-black (team), grain (hero). halftone-white dihapus (orphan). |
| **Klien** | 10 logo (reuse dari Katalis, basis klien sama) | 10 logo marquee di "Who's Behind It" |

**Efisiensi:** ~1,3 GB pack → **19 MB** library; video situs **16 MB**; `.git` **96 MB** (dari 243 MB setelah squash).

---

## 5. Estimasi penggunaan token & biaya

> **Penting:** Aku **tidak bisa mengukur token aktual** dari dalam sesi. Angka di bawah adalah **estimasi metode** dengan asumsi eksplisit. **Angka pasti ada di Anthropic Console → Usage.** Tingkat keyakinan: **RENDAH.**

**Asumsi tarif** (Opus 4.7; tarif bisa berbeda — cek halaman pricing):
- Input (uncached) ≈ $15 / 1J token · Cache-read ≈ $1,50 / 1J · Cache-write ≈ $18,75 / 1J · Output ≈ $75 / 1J
- Kurs asumsi: **Rp 16.300 / USD**

**Skala (kumulatif 2 fase besar):** fase 1–6 (build awal) + fase 7 (redesign video-rich, sesi ini). Fase 7 sangat berat: ~6 video diproses (puluhan operasi `ffmpeg`), **~60+ analisis gambar** (frame/composite/screenshot — semua input *vision*), ~40 build, dan **puluhan putaran tuning kecil** dengan context panjang yang dibaca-ulang tiap turn.

| Komponen (estimasi kasar, **kumulatif**) | Token | Biaya USD |
|---|---|---|
| Cache-read (konteks berulang, ratusan turn) | ~35–55 J | ~$50–85 |
| Cache-write + input baru (termasuk ~60+ gambar) | ~3–5 J | ~$50–90 |
| Output (teks + blok kode tiap Edit) | ~1,5–2,5 J | ~$110–190 |
| **Total** | | **~$210–360** |

**Estimasi biaya kumulatif (confidence: RENDAH):**
- Titik tengah: **~$285 ≈ Rp 4,6 juta**
- Rentang wajar: **~$210–360 ≈ Rp 3,4–5,9 juta**
- Fase 1–6 saja ~$120–180; fase 7 (video) kira-kira melipatgandakannya karena banyak input gambar + iterasi.

> Dua pendorong terbesar: **output** (blok kode tiap Edit) dan **input gambar** (tiap screenshot/frame yang di-review ≈ ribuan token). Penghematan ke depan: gabungkan revisi (lebih sedikit putaran), kurangi verifikasi screenshot bila tak kritikal. **Angka pasti hanya di Anthropic Console → Usage.**

---

## 6. Status & langkah berikutnya

**Selesai:** brand system, situs 15-slide, optimasi aset, commit + push GitHub (history bersih).

**Sebelum go-live (butuh data asli darimu):**
- Kontak & link sosmed masih **dummy** (`hello@womd.id`, `+62 811...`, link `#`).
- Angka stats (20+/120+/60+) placeholder → konfirmasi.
- Meta description & bio/foto Razi → finalisasi.

**Deploy:** restart Claude Code agar **Vercel MCP** ter-load → import repo `fikshb/WOMD`, **Root Directory = `site`**, deploy (Astro static, tanpa adapter).
