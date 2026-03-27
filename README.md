# Wanmeng Liu Portfolio Website

A minimalist professional portfolio website built for GitHub Pages.

## Structure

```
portfolio-site/
├── index.html                    # Home/Landing page
├── projects.html                 # Projects listing
├── project-provider-performance.html
├── project-sepsis.html
├── project-healthcare-claims.html
├── cv.html                       # CV/Resume
├── writing.html                  # Substack links
├── contact.html                  # Contact info
├── css/
│   └── styles.css               # Main stylesheet
└── diagrams/
    ├── provider-performance-architecture.html
    ├── sepsis-architecture.html
    └── healthcare-claims-architecture.html
```

---

## How to Host on GitHub Pages (Step-by-Step Guide)

### Step 1: Create a GitHub Account (if you don't have one)
1. Go to [github.com](https://github.com)
2. Click "Sign up" and create an account

### Step 2: Create a New Repository
1. Log into GitHub
2. Click the **+** icon in the top right → **New repository**
3. **Repository name**: Enter `wanmengliu.github.io`
   - ⚠️ The repository name MUST be `yourusername.github.io` (replace `wanmengliu` with your actual GitHub username)
4. Keep it **Public** (required for free GitHub Pages)
5. Leave "Add a README file" **unchecked**
6. Click **Create repository**

### Step 3: Upload Your Website Files

**Option A: Using the GitHub Web Interface (Easiest)**

1. On your new repository page, click **"uploading an existing file"**
2. Drag and drop ALL the files from your `portfolio-site` folder:
   - `index.html`
   - `projects.html`
   - `project-provider-performance.html`
   - `project-sepsis.html`
   - `project-healthcare-claims.html`
   - `cv.html`
   - `writing.html`
   - `contact.html`
   - The `css` folder (with `styles.css` inside)
   - The `diagrams` folder (with all `.html` files inside)
3. Add a commit message like "Initial website upload"
4. Click **Commit changes**

**Option B: Using Git Command Line**

```bash
# Navigate to your portfolio-site folder
cd portfolio-site

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial website upload"

# Add your GitHub repository as remote (replace with your username)
git remote add origin https://github.com/wanmengliu/wanmengliu.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (gear icon, top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

### Step 5: Access Your Website

1. Wait 1-2 minutes for deployment
2. Your site will be live at: `https://wanmengliu.github.io`
   - (Replace `wanmengliu` with your actual GitHub username)
3. GitHub will show the URL in the Pages settings once it's ready

---

## Updating Your Website

To make changes after initial deployment:

1. Edit files locally
2. Go to your repository on GitHub
3. Navigate to the file you want to update
4. Click the **pencil icon** (Edit)
5. Make your changes
6. Click **Commit changes**

Or use Git:
```bash
git add .
git commit -m "Description of changes"
git push
```

Changes will go live within 1-2 minutes.

---

## Customization Notes

### Updating Links
- **Substack**: Update URLs in `writing.html` with your actual Substack article links
- **LinkedIn/GitHub**: Verify usernames in footer of all pages and in `contact.html`

### Updating Content
- **CV**: Edit `cv.html` for resume updates
- **Projects**: Edit individual `project-*.html` files
- **Home stats**: Edit the hero section in `index.html`

### Design System
The site uses a minimalist design system with:
- Font: DM Sans (sans) + DM Mono (monospace)
- Colors: Neutral grays with semantic accents (green/yellow/red/blue) used sparingly
- Spacing: Consistent 4px-based scale

---

## Troubleshooting

**Site not loading?**
- Make sure repository name is exactly `yourusername.github.io`
- Check that `index.html` is in the root (not in a subfolder)
- Wait a few minutes for deployment to complete

**404 errors on subpages?**
- Make sure all files are uploaded to the root of the repository
- Check file names match exactly (case-sensitive)

**Diagrams not showing?**
- Verify the `diagrams/` folder was uploaded
- Check that iframe paths in project pages match diagram file names

---

## File Checklist

Before uploading, verify you have:
- [ ] `index.html`
- [ ] `projects.html`
- [ ] `project-provider-performance.html`
- [ ] `project-sepsis.html`
- [ ] `project-healthcare-claims.html`
- [ ] `cv.html`
- [ ] `writing.html`
- [ ] `contact.html`
- [ ] `css/styles.css`
- [ ] `diagrams/provider-performance-architecture.html`
- [ ] `diagrams/sepsis-architecture.html`
- [ ] `diagrams/healthcare-claims-architecture.html`

# how to run 
  cd /Users/mercuryliu/Documents/portfolio-site
  python3 -m http.server 8000