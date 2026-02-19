# Portfolio Website - Robotics & ML Engineer

A modern, responsive single-page portfolio website for showcasing robotics and machine learning projects. Built with **pure HTML5, CSS3, and Vanilla JavaScript** (no frameworks) for easy deployment to GitHub Pages.

## 🚀 Features

- **Responsive Design**: Fully responsive from mobile to desktop (1 column on mobile, 3 columns on desktop)
- **Dark Theme**: Modern dark mode with Cyberpunk Blue and Neon Green accents
- **GitHub Integration**: Automatically fetches your public repositories from GitHub API
- **Project Highlighting**: Pin your best projects to appear at the top with special styling
- **Smooth Animations**: CSS transitions and fade-in effects throughout
- **Sticky Navigation**: Fixed navbar that becomes opaque on scroll
- **Mobile Menu**: Responsive hamburger menu for mobile devices
- **SEO Friendly**: Semantic HTML5 structure
- **FontAwesome Icons**: Beautiful icons via CDN
- **Google Fonts**: Clean typography with Roboto font

## 📋 Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About Me**: Personal bio and skills/technologies showcase
3. **Projects**: GitHub-integrated project gallery with automatic fetching
4. **Contact**: Email and social media links (GitHub, LinkedIn)
5. **Footer**: Copyright information

## 🛠️ Tech Stack

- HTML5 (Semantic markup)
- CSS3 (Grid, Flexbox, animations)
- Vanilla JavaScript (ES6+)
- GitHub API (public repos)
- FontAwesome (v6.4.0) - Icons
- Google Fonts - Typography

## 📦 File Structure

```
portfolio_website/
├── index.html          # Main HTML file
├── style.css           # Styles and responsive design
├── script.js           # GitHub API integration & interactivity
├── README.md           # This file
└── resume.pdf          # (Optional) Your resume PDF
```

## 🚀 Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository named `your-username.github.io`
   - Replace `your-username` with your actual GitHub username
   - This is important for GitHub Pages to work correctly

### Step 2: Configure Your GitHub Username

1. Open `script.js`
2. Find this line at the top:
   ```javascript
   const USERNAME = 'YOUR_GITHUB_USERNAME';
   ```
3. Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username

### Step 3: Highlight Your Best Projects (Optional)

In `script.js`, update the `HIGHLIGHTED_REPOS` array with your project names:

```javascript
const HIGHLIGHTED_REPOS = ['drone-sensor-fusion', 'ml-project-name'];
```

These projects will appear at the top in highlighted cards.

### Step 4: Update Contact Information

In `index.html`, find the **Contact Section** and update:
- Email address: Find `mailto:your.email@example.com`
- GitHub link: Find `https://github.com` and replace with your GitHub profile
- LinkedIn link: Find `https://linkedin.com` and replace with your LinkedIn profile
- Resume link: Add a `resume.pdf` file to the root folder (optional)

### Step 5: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio website"

# Add remote (replace 'your-username' with your GitHub username)
git remote add origin https://github.com/your-username/your-username.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 6: Enable GitHub Pages

1. Go to your repository settings
2. Scroll to "GitHub Pages" section
3. Select `main` branch as the source
4. Your site will be live at `https://your-username.github.io`

(Note: It may take a few minutes for GitHub to build and deploy the site)

## ⚙️ Customization Guide

### Change Colors

Edit the CSS variables in `style.css` (lines 10-20):

```css
:root {
    --primary-bg: #1a1a1a;           /* Main background */
    --accent-blue: #00d9ff;           /* Primary accent */
    --accent-green: #39ff14;          /* Secondary accent */
    /* ... other variables ... */
}
```

### Modify Hero Section

Edit the hero content in `index.html`:
- Headline: Change "Robotics & ML Engineer"
- Sub-headline: Update the description
- Resume button: Ensure `resume.pdf` is in the root folder

### Update About Section

Modify the bio text and skills in `index.html` to match your background.

### Add More Sections

Add new sections following the existing pattern:
```html
<section id="section-id" class="section-name">
    <div class="container">
        <!-- Content here -->
    </div>
</section>
```

## 🔧 GitHub API Notes

- The JavaScript automatically fetches your **public repositories**
- Private repositories won't be displayed (by design)
- API calls are limited to 60 requests/hour without authentication
- For more API calls, add a personal access token:
  ```javascript
  const apiUrl = `https://api.github.com/users/${username}/repos?sort=stars&per_page=100&type=public&access_token=YOUR_TOKEN`;
  ```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above (3-column grid)
- **Tablet**: 769px - 1199px
- **Mobile**: 480px - 768px (1-column grid, hamburger menu)
- **Small Mobile**: Below 480px (optimized for small screens)

## 🎨 Design System

### Colors
- **Background**: Deep charcoal (#1a1a1a)
- **Text**: Light gray (#e0e0e0)
- **Accent 1**: Cyberpunk Blue (#00d9ff)
- **Accent 2**: Neon Green (#39ff14)
- **Accent 3**: Purple (#7e5bef)

### Typography
- **Font Family**: Roboto (Google Fonts)
- **Headings**: 700 weight
- **Body**: 400 weight
- **Monospace**: Default system monospace (for code snippets)

### Spacing
- **Container Max Width**: 1200px
- **Section Padding**: 6rem vertical
- **Gap Between Cards**: 2rem

## 🐛 Troubleshooting

### Projects Not Loading?
- Check that your GitHub username is correct in `script.js`
- Ensure you have at least one public repository
- Check browser console (F12) for any error messages

### GitHub Pages Not Working?
- Ensure repository is named `username.github.io`
- Check that all files are pushed to `main` branch
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### Styling Issues?
- Clear browser cache
- Try a different browser
- Ensure CSS file is properly linked in `index.html`

### Icons Not Showing?
- Check internet connection (FontAwesome is loaded via CDN)
- Verify CDN link is not blocked

## 📚 Additional Resources

- [GitHub Pages Documentation](https://pages.github.com/)
- [GitHub API Documentation](https://docs.github.com/en/rest)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [FontAwesome Icons](https://fontawesome.com/search)

## 📄 License

This portfolio template is free to use and modify. Feel free to customize it for your needs!

## 💡 Tips for Best Results

1. **Add a Professional Photo**: Consider adding a profile picture in the About section
2. **Write Good READMEs**: Each GitHub project should have a proper README
3. **Keep Projects Updated**: Regularly update your best projects to keep the portfolio fresh
4. **Use Meaningful Descriptions**: Add detailed descriptions to your GitHub repositories
5. **Mobile Testing**: Always test on actual mobile devices before sharing
6. **Analytics**: Consider adding Google Analytics for tracking visitors

## 🎯 Next Steps

1. Update `USERNAME` in `script.js`
2. Configure contact information in `index.html`
3. Add `resume.pdf` to root folder (if needed)
4. Test locally by opening `index.html` in a browser
5. Push to GitHub Pages repository
6. Share your portfolio!

---

**Happy coding! 🚀**
