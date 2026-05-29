# WOMD — Executive Build Summary

**Proyek:** Weapons of Mass Discussion (WOMD) — brand system + website company-profile
**Stack:** Astro + Tailwind (static), single-page deck 15 slide
**Status:** Selesai dibangun & ter-push ke GitHub (`github.com/fikshb/WOMD`, history bersih). Deploy Vercel pending (menunggu restart untuk load MCP).
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

Fitur: sistem tipografi terkunci (`clamp()` fluid), dot-nav 15 titik dengan scroll-spy + warna adaptif, hamburger overlay di mobile, background video/gambar hanya di titik "bookend".

---

## 2. Perjalanan kerja (fase)

| Fase | Inti pekerjaan |
|---|---|
| **1. Brand asset** | Rapikan & rename logo, buat versi web + PNG transparan + favicon set, download font Moderniz, susun `design.md` (source of truth). |
| **2. Inisialisasi** | `/init`, scaffold Astro + Tailwind, `git init`, buat 4 project skill, struktur `docs/`. |
| **3. Konten & build** | Ambil *konten* dari referensi (MHTML artifact), bangun seluruh section, pertajam copy ke brand voice. |
| **4. Kurasi aset** | ~1,3 GB pack stock + video → diciutkan jadi library **19 MB** (ikon, tekstur, overlay, background). |
| **5. Polish desain (iteratif)** | Penyetelan panjang: hero (ukuran, splash, vignette, orientasi portrait/landscape), kunci ukuran section-title, redesign tiap section, dot-nav + scroll-spy, mobile nav. |
| **6. Refactor delivery** | Kurangi animasi (float ikon & drift halftone), ganti 2 video AI → gelap statis, **video 55 MB → 16 MB**, hapus aset orphan, commit, push, **squash history (.git 243 MB → 96 MB)**. |

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
| **Video** | Stock ~1,2 GB + 2 video AI (Higgsfield) + 1 grid-dots → dioptimalkan | **liquid-splash** (hero, +portrait), **yellow-stripes** (what-we-do). Sisanya dihapus. |
| **Gambar** | nuclear-explosion (bom), yellow-polygon ×10, 3 webp AI | **nuclear-explosion** (contact, landscape+portrait), **yellow-polygon** (who-we-are) |
| **Ikon** | Pack nuclear/ui/people/marketing (~200 SVG) | Glyph `ui`/`step` untuk pillar, process, belief, 14 kartu produk. Pack `marketing` ditolak (multicolor, off-brand). |
| **Tekstur** | halftone (hitam/putih), grain | halftone-white (section gelap), halftone-black (audience), grain (hero) |
| **Klien** | 10 logo (reuse dari Katalis, basis klien sama) | 10 logo marquee di "Who's Behind It" |

**Efisiensi:** ~1,3 GB pack → **19 MB** library; video situs **16 MB**; `.git` **96 MB** (dari 243 MB setelah squash).

---

## 5. Estimasi penggunaan token & biaya

> **Penting:** Aku **tidak bisa mengukur token aktual** dari dalam sesi. Angka di bawah adalah **estimasi metode** dengan asumsi eksplisit. **Angka pasti ada di Anthropic Console → Usage.** Tingkat keyakinan: **RENDAH.**

**Asumsi tarif** (Opus 4.7; tarif bisa berbeda — cek halaman pricing):
- Input (uncached) ≈ $15 / 1J token · Cache-read ≈ $1,50 / 1J · Cache-write ≈ $18,75 / 1J · Output ≈ $75 / 1J
- Kurs asumsi: **Rp 16.300 / USD**

**Skala sesi:** sangat panjang (context sempat penuh → di-ringkas → lanjut ratusan tool-call: ratusan Read/Edit/Bash-build + ~15 analisis gambar). Karakteristik: **input besar tapi mayoritas cache-read**; **output didominasi** oleh blok kode pada banyak operasi Edit.

| Komponen (estimasi kasar) | Token | Biaya USD |
|---|---|---|
| Cache-read (konteks berulang tiap turn) | ~18–24 J | ~$27–36 |
| Cache-write + input baru | ~1,5–2,5 J | ~$25–40 |
| Output (teks + isi tool/Edit) | ~0,9–1,4 J | ~$68–105 |
| **Total** | | **~$120–180** |

**Estimasi biaya (confidence: rendah):**
- Titik tengah: **~$150 ≈ Rp 2,45 juta**
- Rentang wajar: **~$120–180 ≈ Rp 2,0–2,9 juta**

> Output token (blok kode di tiap Edit) adalah pendorong biaya terbesar. Sesi yang sangat iteratif (banyak penyetelan kecil + rebuild) menaikkan ini. Untuk proyek serupa ke depan, biaya bisa ditekan dengan menggabungkan revisi (lebih sedikit putaran).

---

## 6. Status & langkah berikutnya

**Selesai:** brand system, situs 15-slide, optimasi aset, commit + push GitHub (history bersih).

**Sebelum go-live (butuh data asli darimu):**
- Kontak & link sosmed masih **dummy** (`hello@womd.id`, `+62 811...`, link `#`).
- Angka stats (20+/120+/60+) placeholder → konfirmasi.
- Meta description & bio/foto Razi → finalisasi.

**Deploy:** restart Claude Code agar **Vercel MCP** ter-load → import repo `fikshb/WOMD`, **Root Directory = `site`**, deploy (Astro static, tanpa adapter).
