# wanmeng.liu — Personal Site

Built with React + Vite. Deploys to Vercel.

---

## Running locally

**Requirements:** Node.js 18 or later.

```bash
# Install dependencies (only needed once)
npm install

# Start the dev server
npm run dev
```

The site will be available at `http://localhost:5173`.

---

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Vercel auto-detects Vite — no configuration needed. Click **Deploy**.

Every future `git push` to `main` will trigger a re-deploy automatically.

---

## Updating content

### Home page — about text
**File:** `src/pages/Home.jsx`

Find the two `<p>` tags inside `<div className="home-about-body">` and replace the placeholder text with your own copy.

```jsx
<div className="home-about-body">
  <p>
    Your first paragraph here.
  </p>
  <p>
    Your second paragraph here.
  </p>
</div>
```

You can add or remove `<p>` tags as needed. If the text overflows the column it will scroll independently, so you don't need to worry about length.

---

### Writing — adding a new post
**File:** `src/pages/Writing.jsx`

Open the file and add a new entry to the `posts` array at the top. New entries go at the **top** of the array so the most recent post appears first within its year.

```js
const posts = [
  // Add your new post here:
  {
    href: 'https://your-substack-post-url',
    title: 'Your Post Title',
    description: 'One or two sentences describing the post.',
    date: 'March',   // Month only, written out in full
    year: '2026',    // Four-digit year as a string
  },
  // existing posts below...
]
```

Posts are automatically grouped and sorted by `year`, so adding a new `year` value will create a new section header automatically.

---

### CV
**File:** `src/pages/CV.jsx`

The CV is split into two columns. The left column contains Work Experience and Selected Projects; the right column contains Education, Technical Skills, and Publications. Each section is clearly commented in the file.

Edit text directly inside the JSX. To add a new role or project entry, copy an existing `<div className="cv-entry">` block and update the content. To add a bullet point, add a `<li>` inside the nearest `<ul className="cv-entry-list">`.

---

### Headshot photo
**File:** `public/headshot.JPG`

Replace this file with a new photo. Keep the filename `headshot.JPG` exactly (case-sensitive) so the reference in `Home.jsx` still works.

---

### Site-wide colors and fonts
**File:** `src/index.css`

The design tokens are at the very top of the file inside `:root { ... }`. Key variables:

| Variable | Controls |
|---|---|
| `--color-bg` | Page background |
| `--color-border` | All ruled lines and punch holes |
| `--color-text` | Primary text |
| `--font-sans` | Body and display font |
| `--font-mono` | Nav, labels, dates |

---

## File structure

```
src/
  components/
    Nav.jsx        # Navigation bar
    Footer.jsx     # Fixed footer bar
  pages/
    Home.jsx       # Home / about page (photo, bio, contact links)
    CV.jsx         # CV page (two-column layout)
    Writing.jsx    # Writing index (posts list)
  App.jsx          # Routes
  index.css        # All styles and design tokens
public/
  headshot.JPG     # Profile photo
```
