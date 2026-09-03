# Hardik Kolhe Portfolio

React 19 + Vite 8 + Tailwind CSS v4 + Framer Motion + React Router 7.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm run build:gh-pages` | Build for GitHub user Pages (`/`) |
| `npm run lint` | Run oxlint |
| `npm run preview` | Preview production build |

## Structure

```
web/
├── public/
│   ├── assets/
│   │   ├── images/       # Photos, project thumbnails, case-study images
│   │   ├── logo/         # Company & school logos
│   │   ├── documents/    # CV/resume PDFs (add here when ready)
│   │   ├── project-page.css
│   │   └── project-page.js
│   └── favicon.svg
├── projects/             # Static case-study pages (MPA)
├── scripts/
│   └── wrap-project-pages.mjs
└── src/
    ├── components/
    │   ├── layout/       # Layout, Navbar, Footer, ScrollToTop
    │   ├── icons/        # Shared SVG icons
    │   ├── ui/           # Reusable UI primitives
    │   ├── FadeIn.jsx
    │   ├── ProjectCard.jsx
    │   └── TimelineCard.jsx
    ├── sections/         # Page sections (Hero, Skills, Projects, Contact)
    ├── pages/            # Route-level page wrappers
    ├── data/             # Content modules (profile, nav, projects, …)
    ├── styles/           # Global CSS + design tokens
    ├── theme/            # Dark/light theme context
    └── utils/            # cn(), withBase()
```

## Routes

| Path | Page |
|------|------|
| `/` | Home (hero) |
| `/about` | About, interests, skills |
| `/experience` | Work & education |
| `/projects` | Project cards |
| `/contact` | Contact form |
| `/projects/:slug` | Case-study detail pages |

## Configuration TODOs

- Add your resume PDF as `public/assets/documents/Hardik_Kolhe_Resume.pdf`
- Update GitHub URL in `src/data/profile.js`

## Case-study pages

After editing `<main>` content in `projects/*/index.html`, re-wrap shells:

```bash
node scripts/wrap-project-pages.mjs
```
