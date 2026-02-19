// ============================================
// PORTFOLIO WEBSITE - JAVASCRIPT
// GitHub API Integration & Dynamic Features
// ============================================

// ============================================
// CONFIGURATION - UPDATE THIS WITH YOUR USERNAME
// ============================================
const USERNAME = 'adityapat958';
const HIGHLIGHTED_REPOS = ['drone-sensor-fusion', 'reinforcement-learning-project'];

// ============================================
// DOM ELEMENTS
// ============================================
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const projectsGrid = document.getElementById('projects-grid');
const highlightedProjectsContainer = document.getElementById('highlighted-projects');
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error');

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
// GITHUB API INTEGRATION
// ============================================

/**
 * Fetch public repositories from GitHub API
 * @param {string} username - GitHub username
 * @returns {Promise<Array>} Array of repositories
 */
async function fetchGitHubProjects(username) {
    try {
        const apiUrl = `https://api.github.com/users/${username}/repos?sort=stars&per_page=100&type=public`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`GitHub API Error: ${response.status}`);
        }

        const repos = await response.json();

        if (repos.length === 0) {
            throw new Error('No public repositories found');
        }

        return repos;
    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        throw error;
    }
}

/**
 * Create a project card element
 * @param {Object} repo - Repository object from GitHub API
 * @param {boolean} isHighlighted - Whether this is a highlighted project
 * @returns {HTMLElement} Project card element
 */
function createProjectCard(repo, isHighlighted = false) {
    const card = document.createElement('div');
    card.className = isHighlighted ? 'project-card-highlighted' : 'project-card';

    // Get primary language
    const language = repo.language || 'No Language';

    // Format star count
    const starCount = repo.stargazers_count > 0 ? repo.stargazers_count : 0;

    // Create card HTML
    card.innerHTML = `
        <h3 class="project-name">${escapeHtml(repo.name)}</h3>
        <p class="project-description">${escapeHtml(repo.description || 'No description available')}</p>
        
        <div class="project-meta">
            ${language !== 'No Language' ? `<span class="project-language">${escapeHtml(language)}</span>` : ''}
            <div class="project-stars">
                <i class="fas fa-star"></i>
                <span>${starCount}</span>
            </div>
        </div>
        
        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="project-link">
            View on GitHub <i class="fas fa-external-link-alt"></i>
        </a>
    `;

    return card;
}

/**
 * Escape HTML special characters to prevent XSS
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

/**
 * Load and display GitHub projects
 */
async function loadProjects() {
    try {
        // Validate username
        if (USERNAME === 'YOUR_GITHUB_USERNAME') {
            errorElement.textContent = 'Please update the USERNAME variable in script.js with your GitHub username.';
            errorElement.style.display = 'block';
            loadingElement.style.display = 'none';
            return;
        }

        loadingElement.style.display = 'block';
        errorElement.style.display = 'none';

        // Fetch repositories
        const repos = await fetchGitHubProjects(USERNAME);

        // Clear loading state
        loadingElement.style.display = 'none';

        // Separate highlighted and regular projects
        const highlightedRepos = [];
        const regularRepos = [];

        repos.forEach(repo => {
            if (HIGHLIGHTED_REPOS.some(highlighted => 
                highlighted.toLowerCase() === repo.name.toLowerCase())) {
                highlightedRepos.push(repo);
            } else {
                regularRepos.push(repo);
            }
        });

        // Display highlighted projects
        if (highlightedRepos.length > 0) {
            highlightedRepos.forEach(repo => {
                const card = createProjectCard(repo, true);
                highlightedProjectsContainer.appendChild(card);
            });
        }

        // Display regular projects
        regularRepos.forEach(repo => {
            const card = createProjectCard(repo, false);
            projectsGrid.appendChild(card);
        });

        // Show error if no projects found
        if (repos.length === 0) {
            throw new Error('No repositories found');
        }

    } catch (error) {
        console.error('Failed to load projects:', error);
        loadingElement.style.display = 'none';
        errorElement.style.display = 'block';
        errorElement.innerHTML = `<p>Could not load projects from GitHub. Error: ${escapeHtml(error.message)}</p>`;
    }
}

// ============================================
// SMOOTH SCROLL FOR BUTTONS
// ============================================

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
// INITIALIZE ON PAGE LOAD
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
});

// ============================================
// UTILITY: OBSERVER FOR SCROLL ANIMATIONS
// ============================================

// Optional: Add scroll animation observer for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards when they're added
setTimeout(() => {
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
}, 100);
