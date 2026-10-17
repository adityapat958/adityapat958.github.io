// ============================================
// PORTFOLIO WEBSITE - JAVASCRIPT
// GitHub API Integration & Dynamic Features
// ============================================

// ============================================
// CONFIGURATION
// ============================================
// Projects are hardcoded in index.html — no GitHub API needed

// ============================================
// DOM ELEMENTS
// ============================================
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// ============================================
// NAVBAR - SCROLL EFFECT & MOBILE MENU
// ============================================

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile hamburger menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // No dynamic loading needed — projects are hardcoded
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// SMOOTH SCROLL FOR BUTTONS
// ============================================

// ============================================
// SHOWCASE — reel resolution + scene lightbox
// ============================================
(() => {
    const reel = document.getElementById('reel');
    if (reel) {
        const hd = window.innerWidth > 1000 && !(navigator.connection && navigator.connection.saveData);
        reel.src = hd ? reel.dataset.hd : reel.dataset.sd;
    }
    const modal = document.getElementById('video-modal');
    const mv = document.getElementById('modal-video');
    if (!modal || !mv) return;
    const close = () => { mv.pause(); mv.removeAttribute('src'); mv.load(); modal.close(); };
    document.querySelectorAll('.scene-tile').forEach(t => t.addEventListener('click', () => {
        document.getElementById('modal-title').textContent = t.dataset.title;
        mv.src = t.dataset.video;
        modal.showModal();
        mv.play().catch(() => {});
    }));
    document.getElementById('modal-close').addEventListener('click', close);
    modal.addEventListener('click', e => { if (e.target === modal) close(); });
    modal.addEventListener('cancel', e => { e.preventDefault(); close(); });
})();

// ============================================
// PROJECT GALLERIES (generated from assets/media/projects/manifest.json)
// ============================================
const GALLERIES = {"autopano": [{"i": "01.jpg", "c": "Classical pipeline panorama — corners → ANMS → feature matching → RANSAC homography → blending"}, {"i": "02.jpg", "c": "Classical panorama, library facade"}, {"i": "03.jpg", "c": "Inlier feature matches after RANSAC outlier rejection"}, {"i": "04.jpg", "c": "Adaptive non-maximal suppression spreads corners evenly across the image"}, {"i": "05.jpg", "c": "Wide lab panorama with cylindrical projection"}, {"i": "06.jpg", "c": "HomographyNet: supervised vs unsupervised corner predictions (blue = ground truth)"}, {"i": "07.jpg", "c": "Panorama stitched with the deep homography model"}], "sfm_nerf": [{"v": "01.mp4", "i": "01.jpg", "c": "NeRF novel-view synthesis — Lego scene"}, {"v": "02.mp4", "i": "02.jpg", "c": "NeRF novel-view synthesis — Ship scene"}, {"i": "03.jpg", "c": "SfM: RANSAC-filtered feature matches between views"}, {"i": "04.jpg", "c": "Epipolar lines from the estimated fundamental matrix"}, {"i": "05.jpg", "c": "Reprojection of triangulated 3D points into the image"}, {"i": "06.jpg", "c": "Sparse reconstruction and camera poses, before vs after bundle adjustment"}], "vio": [{"i": "01.jpg", "c": "Deep VIO: predicted vs ground-truth 3D trajectory, top/side views and drift"}, {"i": "02.jpg", "c": "Visual-only vs IMU-only vs fused VIO on a test sequence"}, {"i": "03.jpg", "c": "Feature detection and optical flow on low- vs high-texture sequences"}, {"i": "04.jpg", "c": "Synthetic data generation pipeline (textures, trajectories, optical flow)"}, {"i": "05.jpg", "c": "Absolute trajectory error across model variants"}, {"i": "06.jpg", "c": "Modality imbalance: IMU loss converges ~10× faster than vision"}], "aerial": [{"v": "p5_race.mp4", "i": "p5_race.jpg", "c": "Full autonomous race run (onboard camera): racing windows → unknown-shape gap → final window"}, {"i": "01.jpg", "c": "Gaussian-splat render of the lab used for drone racing-window detection"}, {"i": "02.jpg", "c": "Racing window detection on the splat render"}, {"i": "03.jpg", "c": "RRT* path + B-spline trajectory through a maze, executed by the quadrotor"}, {"i": "04.jpg", "c": "3D path planning through a window map"}, {"i": "05.jpg", "c": "Optical-flow based gap detection for flying through an unknown hole"}, {"i": "06.jpg", "c": "Gap detection on the real wall"}, {"i": "07.jpg", "c": "Attitude estimation: gyro, accel, complementary, Madgwick and UKF vs Vicon"}], "hrl": [{"i": "01.jpg", "c": "Fetch robot rollouts in Habitat 2.0 (ReplicaCAD)"}, {"i": "02.jpg", "c": "Hierarchical navigation: curriculum learning, high-level training and success rates"}, {"i": "03.jpg", "c": "HAC agent: subgoals and executed trajectory vs geodesic path"}, {"i": "04.jpg", "c": "SAC vs A2C vs PPO over 1M steps"}], "consistency": [{"i": "01.jpg", "c": "Consistency-model samples with the AYS-optimised schedule"}, {"i": "02.jpg", "c": "Baseline samples for comparison"}, {"i": "03.jpg", "c": "AYS: 5 sampling steps placed where model curvature is highest"}, {"i": "04.jpg", "c": "FID vs number of sampling steps"}]};
(() => {
    const modal = document.getElementById('gallery-modal');
    if (!modal) return;
    const img = modal.querySelector('.gm-img'), vid = modal.querySelector('.gm-vid'),
          cap = modal.querySelector('.gm-cap'), cnt = modal.querySelector('.gm-count');
    let key = null, idx = 0;
    const cache = {};
    const url = (k, f) => `assets/media/projects/${k}/${f}`;
    const preload = k => GALLERIES[k].forEach(it => {      // fetch whole gallery once, in order
        const u = url(k, it.i);
        if (!cache[u]) { cache[u] = new Image(); cache[u].decoding = 'async'; cache[u].src = u; }
    });
    let token = 0;
    const show = () => {
        const it = GALLERIES[key][idx], t = ++token;
        cap.textContent = it.c; cnt.textContent = `${idx + 1} / ${GALLERIES[key].length}`;
        if (it.v) {
            img.hidden = true; vid.hidden = false; vid.poster = url(key, it.i); vid.src = url(key, it.v); vid.play().catch(() => {});
            return;
        }
        vid.pause(); vid.hidden = true; vid.removeAttribute('src');
        const pre = cache[url(key, it.i)] || Object.assign(new Image(), { src: url(key, it.i) });
        img.classList.add('loading');
        pre.decode().catch(() => {}).then(() => {           // swap only when decoded → no blank/partial frame
            if (t !== token) return;                          // user already moved on
            img.src = pre.src; img.alt = it.c; img.hidden = false; img.classList.remove('loading');
        });
    };
    const step = d => { idx = (idx + d + GALLERIES[key].length) % GALLERIES[key].length; show(); };
    const close = () => { vid.pause(); vid.removeAttribute('src'); modal.close(); };
    document.querySelectorAll('button.project-media[data-gallery]').forEach(b => {
        ['pointerenter', 'touchstart', 'focus'].forEach(ev => b.addEventListener(ev, () => preload(b.dataset.gallery), { once: true, passive: true }));
    });
    document.querySelectorAll('button.project-media[data-gallery]').forEach(b => b.addEventListener('click', () => {
        key = b.dataset.gallery; idx = 0; preload(key); show(); modal.showModal();
    }));
    modal.querySelector('.gm-prev').addEventListener('click', () => step(-1));
    modal.querySelector('.gm-next').addEventListener('click', () => step(1));
    modal.querySelector('.gm-close').addEventListener('click', close);
    modal.addEventListener('click', e => { if (e.target === modal) close(); });
    modal.addEventListener('cancel', e => { e.preventDefault(); close(); });
    document.addEventListener('keydown', e => {
        if (!modal.open) return;
        if (e.key === 'ArrowLeft') step(-1);
        if (e.key === 'ArrowRight') step(1);
    });
    let x0 = null;
    modal.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
    modal.addEventListener('touchend', e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1); x0 = null; });
})();

// Card cover videos: load + play only while on screen
(() => {
    const vids = document.querySelectorAll('video.pm-cover[data-src]');
    if (!('IntersectionObserver' in window)) { vids.forEach(v => { v.src = v.dataset.src; v.play().catch(() => {}); }); return; }
    const io = new IntersectionObserver(es => es.forEach(e => {
        const v = e.target;
        if (e.isIntersecting) { if (!v.src) v.src = v.dataset.src; v.play().catch(() => {}); } else v.pause();
    }), { rootMargin: '200px' });
    vids.forEach(v => io.observe(v));
})();
