# brand/motion — Chat-bubble motion assets

3D / glass / glossy chat-bubble loops sourced as stock footage. On-brand for WOMD
(the "discussion" half of the pun) — usable as section backgrounds, hero loops, or
social motion.

## Layout

| Folder | What |
|---|---|
| `masters/` | Original stock files, **untouched**. Filenames kept verbatim (the `…utc` IDs are license provenance — do not rename). |
| `web/` | Web-optimized, brand-named loops. **Use these on the site/social.** |

## web/ specs

All `web/` clips are normalized to a single, web-friendly profile:

- **Codec / container:** H.264 (High profile, level 4.0) in `.mp4`
- **Re-encode:** `libx264 -crf 20 -preset slow` (high quality, near-transparent for this content)
- **Streaming:** `+faststart` (moov atom at front → starts playing before full download)
- **Tracks:** video only — audio and timecode/data tracks stripped
- **Pixel format:** `yuv420p` (universal browser/decoder support)
- **Resolution / fps:** 1920×1080, 30 fps (unchanged from source)
- **Alpha:** none. Despite the "transparent" stock name, the source is H.264 (no alpha channel) over a solid background.

> **Loop note — `chat-bubbles-yellow-stream`:** this clip streams bubbles *in* (starts near-empty, ends full), so a raw `loop` shows a hard cut. The `web/` version is a **crossfade self-loop** (7.27 s, down from the 8.03 s master): the end dissolves into the start so the loop join is seamless, with forward-only motion (no reverse/"rewind" look). Recipe: `xfade` the last 0.8 s over the first 0.8 s, then concat the middle. The other clips loop natively and are untouched.

> Naming follows the site convention `WOMD_<bg|motion>_<slug>_loop_1080.mp4` (cf. `site/public/video/WOMD_bg_liquid-splash_loop_1080.mp4`). `bg` = full-frame background loop; `motion` = element/icon animation.

## Master → web map

Only clips actually used on the site (plus the canonical yellow-stream loop) are kept in `web/`. Five unused chat-bubble options (blue-falling, glossy-iconpack, glass-rotating, glass-rotating-white, single glass-black) were trimmed on 2026-05-29 to keep the repo lean — they're regenerable from `masters/` if ever needed.

| `web/` file | size | source master |
|---|---|---|
| `WOMD_bg_chat-bubbles-glass-black_loop_1080.mp4` | 6.4 MB | `glass-speech-bubbles-on-black-bg-able-to-loop-endl-…utc.mp4` (**used behind Core Belief**, scrim + edge-vignette) |
| `WOMD_bg_chat-bubbles-glass-neonglow_loop_1080.mp4` | 3.9 MB | `animated-glass-chat-bubbles-with-neon-glow-…utc.mp4` (**used behind Contact** / final slide, radial scrim, 0.8× playback). **Recolored to a yellow/black duotone** (`format=gray,lutrgb=g='val*0.85':b='val*0.18'`) — source glow was green (off-brand); now yellow-neon, on-brand. |
| `WOMD_motion_chat-bubbles-yellow-stream_loop_1080.mp4` | 3.6 MB | `flying-yellow-chat-bubble-icons-stream-animation-…utc.mov` (brand-yellow; **crossfade seamless loop**. NB: the Hero uses a **ping-pong** variant that lives only in `site/public/video/`) |

**Other motion backgrounds** (not chat-bubbles, same `web/` optimization):

| `web/` file | size | source master | notes |
|---|---|---|---|
| `WOMD_bg_yellow-cube-grid_loop_1080.mp4` | 2.1 MB | `yellow-geometric-cube-grid-waving-motion-backgroun-…utc.mov` | glossy 3D yellow/amber cube grid, waving. **Natively seamless loop** (first≈last frame). Used behind **Who We Are** (with a yellow scrim for black-text legibility). |
| `WOMD_bg_organic-particles_loop_1080.mp4` | 2.0 MB | `abstract-organic-background-loop-…utc.mov` | dark purple/cyan particle vortex on black, 1280×1280. Source was a **239 MB MJPEG 2000×2000** → re-encoded H.264 crf20 (black-heavy → tiny). **Natively seamless loop.** Used behind **How we work / process** (dark section, white text + scrim). **Recolored to a gold yellow/black duotone** — source particles were purple/cyan (off-brand); now amber-gold, on-brand. |
| `WOMD_bg_neon-tunnel_loop_1080.mp4` | 4.1 MB | `futuristic-neon-tunnel-with-yellow-lights-…utc.mov` | bright **yellow neon perspective tunnel** on black — most on-brand (yellow+black). **Natively seamless loop.** Used behind **The future** pre-closing (dark, centered statement; white text + yellow accents + scrim 58 & vignette to tame the bright neon). |
| `WOMD_bg_green-sphere_loop_1080.mp4` | 1.1 MB | `unique-green-sphere-pulsating-in-abstract-geometri-…utc.mov` | field of silver spheres with one **green ("different") sphere** in the upper-right, pulsating. **Natively seamless loop.** Used behind **Why we are different** — `VideoBg position="object-[85%_25%]"` biases the crop to keep the green sphere visible on both web and mobile-portrait; radial vignette centered on the sphere (spotlight) for a very dark section. |
| `WOMD_bg_office-sun_loop_1080.mp4` | 4.7 MB | `office-building-with-glass-windows-an-rising-sun-f-…utc.mp4` | golden office building, sun on glass. Source was 16.7 MB / 11 Mbps + didn't loop (camera pan) → re-encoded crf26 **+ crossfade self-loop** (now seamless, 11 s). Used behind **Who we work with / audience** under a **flat `bg-brand-yellow/72` tint** so it reads as the yellow section (black text) with the building as golden texture. |

## Use on the site

Copy the chosen `web/*.mp4` into `site/public/video/` and pass it to the existing
`VideoBg` component (`site/src/components/VideoBg.astro`), which already expects a
faststart H.264 `.mp4`. Example:

```astro
<VideoBg src="/video/WOMD_bg_chat-bubbles-glass-black_loop_1080.mp4" scrim={20} />
```

## Re-running the optimization

`ffmpeg` is not installed system-wide and there is no Homebrew on this machine. The
conversion used a static binary pulled temporarily via `npx`/npm (`ffmpeg-static`),
then removed. To redo it:

```bash
cd site && npm i -D ffmpeg-static && FF="$(node -e 'process.stdout.write(require("ffmpeg-static"))')"
"$FF" -nostdin -y -i in.mov -map 0:v:0 -c:v libx264 -crf 20 -preset slow \
  -profile:v high -level 4.0 -pix_fmt yuv420p -movflags +faststart -an out.mp4
cd site && npm uninstall ffmpeg-static
```
