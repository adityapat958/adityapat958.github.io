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
