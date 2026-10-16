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

## projects/ — project-card covers + galleries
`projects/<key>/cover.jpg` (800×450 card cover), `NN.jpg` (≤1800 px wide) / `NN.mp4` (NeRF loops), captions in `manifest.json`
(copied into `GALLERIES` in script.js). Keys: autopano, sfm_nerf, vio, aerial, hrl, consistency.
Sources: report PDFs (embedded figures) + project output folders — full map in /tmp/pf_cand/*/SOURCES.md at build time:
- autopano: ~/Downloads/p1 autopano.pdf, ~/Downloads/Group3_p1/Report.pdf
- sfm_nerf: ~/Downloads/Group3_p2/Phase1/Data/church/*, ~/Downloads/Group3_p2-2/Group3_p2/Phase2/{lego,ship_render}.gif
- vio: ~/Downloads/Group4_p4/Code/Phase 2/{figures,visualizations}
- aerial: ~/RBE 595 Aerial Robotics/{p0,p2,p3,p4} + RBE595_P0/P3/P4 report PDFs
- hrl: ~/RL_final/WPI_DS551_G10_Final (plots, render sheets)
- consistency: ~/gen_ai/GenAI-FinalSubmission/.../visualizations/images
