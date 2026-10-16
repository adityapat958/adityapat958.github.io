# Media assets (web-optimised, served by the site)

H.264, yuv420p, `+faststart`, no audio. Full-res sources live in `../../media_originals/` (gitignored, 357 MB).

## einsteinvision/ — EinsteinVision (CV P3, Blender driving-scene reconstruction)
- `reel_1080p.mp4` / `reel_720p.mp4` + `reel_poster.jpg` — 30 s demo reel, 6 scenes × 5 s
- `sceneN_composite_720p.mp4` + `sceneN_composite_poster.jpg` (N=1..13) — 2×2: dashcam | front / top | chase
- Source: lablaptop `~/Documents/Spring_26/CV/einstein_vision/renders/{reel,composite}` (repo adityapat958/einstein_vision @ render-v2)
- Not included (originals only): `full/sceneN.mp4` (camera | render side-by-side)

## fetch_rl/ — Fetch rearrangement skills (DS551 RL final, Habitat 2.0)
- `fetch_bedroom_to_kitchen_720p.mp4`, `fetch_learned_skills_720p.mp4` + `_poster.jpg`, `_sheet.jpg` contact sheets
- Source: `~/RL_final/WPI_DS551_G10_Final/videos/portfolio/`

Usage: `<video src="assets/media/einsteinvision/reel_720p.mp4" poster="assets/media/einsteinvision/reel_poster.jpg" muted loop playsinline autoplay></video>`
