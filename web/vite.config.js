import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const rootDir = path.dirname(fileURLToPath(import.meta.url))
const projectsRoot = path.join(rootDir, 'projects')

// User site repo Hardik-Kolhe.github.io → https://hardik-kolhe.github.io/
const githubPagesBase = '/'

const projectSlugs = [
  'car-project',
  'olympic-project',
  'aws-project',
  'heart-stroke-project',
  'house-price-project',
  'job-salaries-project',
]

const projectPages = Object.fromEntries(
  projectSlugs.map((slug) => [
    slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase()),
    path.join(projectsRoot, slug, 'index.html'),
  ]),
)

function projectCleanUrls() {
  return {
    name: 'project-clean-urls',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0] ?? ''
        const match = url.match(/^\/projects\/([a-z0-9-]+)\/?$/)
        if (!match) {
          next()
          return
        }

        const filePath = path.join(projectsRoot, match[1], 'index.html')
        if (!fs.existsSync(filePath)) {
          next()
          return
        }

        const query = req.url?.includes('?') ? req.url.slice(req.url.indexOf('?')) : ''
        req.url = `/projects/${match[1]}/index.html${query}`
        next()
      })
    },
  }
}

function spaFallback404() {
  return {
    name: 'spa-fallback-404',
    closeBundle() {
      const indexPath = path.join(rootDir, 'dist', 'index.html')
      const fallbackPath = path.join(rootDir, 'dist', '404.html')
      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, fallbackPath)
      }
    },
  }
}

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? githubPagesBase : '/',
  plugins: [react(), tailwindcss(), projectCleanUrls(), spaFallback404()],
  build: {
    rollupOptions: {
      input: {
        main: path.join(rootDir, 'index.html'),
        ...projectPages,
      },
    },
  },
})
