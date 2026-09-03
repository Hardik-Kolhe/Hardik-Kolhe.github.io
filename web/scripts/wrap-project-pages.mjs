import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectsDir = path.join(__dirname, '../projects')

const slugs = fs
  .readdirSync(projectsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && !entry.name.startsWith('_'))
  .map((entry) => entry.name)

function shell(title, mainContent) {
  const year = new Date().getFullYear()

  return `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — Hardik Kolhe</title>
  <link rel="icon" href="../../HK.png" type="image/png">
  <script>
    (function () {
      try {
        var saved = localStorage.getItem('theme');
        var theme =
          saved === 'light' || saved === 'dark'
            ? saved
            : window.matchMedia('(prefers-color-scheme: light)').matches
              ? 'light'
              : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
      } catch (e) {}
    })();
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <link rel="stylesheet" href="../../assets/project-page.css">
</head>
<body>
  <header class="site-header">
    <nav class="site-nav" aria-label="Main navigation">
      <div class="site-nav__group">
        <a class="site-nav__link site-nav__link--icon" href="../../" data-nav-path="/" aria-label="Home">
          <svg class="site-nav__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </a>
      </div>
      <span class="site-nav__divider" aria-hidden="true"></span>
      <div class="site-nav__group">
        <a class="site-nav__link" href="../../about" data-nav-path="/about">
          <svg class="site-nav__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
          <span>About</span>
        </a>
        <a class="site-nav__link" href="../../experience" data-nav-path="/experience">
          <svg class="site-nav__icon" viewBox="0 0 24 24" aria-hidden="true"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          <span>Experience</span>
        </a>
        <a class="site-nav__link" href="../../projects" data-nav-path="/projects">
          <svg class="site-nav__icon" viewBox="0 0 24 24" aria-hidden="true"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
          <span>Projects</span>
        </a>
        <a class="site-nav__link" href="../../contact" data-nav-path="/contact">
          <svg class="site-nav__icon" viewBox="0 0 24 24" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          <span>Contact</span>
        </a>
      </div>
      <span class="site-nav__divider" aria-hidden="true"></span>
      <button class="site-nav__theme" id="theme-toggle" type="button" aria-label="Toggle theme">
        <svg class="site-nav__icon" id="theme-icon-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
        <svg class="site-nav__icon" id="theme-icon-moon" viewBox="0 0 24 24" aria-hidden="true" style="display:none"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
      </button>
    </nav>
  </header>

${mainContent}

  <footer class="site-footer">
    <div class="container site-footer__inner">
      <p class="site-footer__copy">Copyright &copy; ${year} Hardik Kolhe. All rights reserved.</p>
      <div class="site-footer__socials">
        <a class="site-footer__social" href="https://www.linkedin.com/in/hardik-kolhe/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a class="site-footer__social" href="mailto:kolhehardikanil0609@gmail.com" aria-label="Email">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="22,6 12,13 2,6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <a class="site-footer__social" href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        </a>
      </div>
    </div>
  </footer>

  <script src="../../assets/project-page.js"></script>
</body>
</html>
`
}

for (const slug of slugs) {
  const filePath = path.join(projectsDir, slug, 'index.html')
  const html = fs.readFileSync(filePath, 'utf8')

  const titleMatch = html.match(/<title>(.*?)<\/title>/i)
  const title = titleMatch ? titleMatch[1].replace(/\s*—\s*Hardik Kolhe$/, '') : slug

  const mainMatch = html.match(/<main class="project-details">[\s\S]*?<\/main>/i)
  if (!mainMatch) {
    console.warn(`Skipping ${slug}: no <main class="project-details"> found`)
    continue
  }

  fs.writeFileSync(filePath, shell(title, mainMatch[0]))
  console.log(`Updated ${slug}`)
}
