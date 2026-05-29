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

| `web/` file | size | source master |
|---|---|---|
| `WOMD_bg_chat-bubbles-blue-falling_loop_1080.mp4` | 8.5 MB | `animated-3d-blue-message-bubbles-falling-backgroun-…utc.mov` |
| `WOMD_bg_chat-bubbles-glass-black_loop_1080.mp4` | 6.4 MB | `glass-speech-bubbles-on-black-bg-able-to-loop-endl-…utc.mp4` (**used behind Core Belief** on the site, with scrim + edge-vignette) |
| `WOMD_bg_chat-bubbles-glass-neonglow_loop_1080.mp4` | 4.9 MB | `animated-glass-chat-bubbles-with-neon-glow-…utc.mp4` |
| `WOMD_bg_chat-bubble-glass-black_loop_1080.mp4` | 2.4 MB | `glass-speech-bubble-on-black-bg-able-to-loop-endle-…utc.mp4` (single bubble) |
| `WOMD_motion_chat-bubbles-glossy-iconpack_loop_1080.mp4` | 3.9 MB | `3d-glossy-chat-bubble-icon-pack-loop-animation-…utc.mov` |
| `WOMD_motion_chat-bubbles-yellow-stream_loop_1080.mp4` | 3.6 MB | `flying-yellow-chat-bubble-icons-stream-animation-…utc.mov` (brand-yellow; **crossfade seamless loop**, see note above) |
| `WOMD_motion_chat-bubbles-glass-rotating_loop_1080.mp4` | 2.5 MB | `animated-transparent-glass-speech-bubbles-rotating-…utc.mov` |
| `WOMD_motion_chat-bubbles-glass-rotating-white_loop_1080.mp4` | 1.2 MB | `animated-3d-glass-chat-bubbles-rotating-on-white-…utc.mov` |

**Other yellow motion backgrounds** (not chat-bubbles, same `web/` optimization):

| `web/` file | size | source master | notes |
|---|---|---|---|
| `WOMD_bg_yellow-cube-grid_loop_1080.mp4` | 2.1 MB | `yellow-geometric-cube-grid-waving-motion-backgroun-…utc.mov` | glossy 3D yellow/amber cube grid, waving. **Natively seamless loop** (first≈last frame). Used behind **Who We Are** on the site (with a yellow scrim for black-text legibility). |

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
