/**
 * PROXY d.o.o. — Gateway server
 *
 * Serves the production React bundle from /dist with:
 *   - aggressive static caching (hashed assets)
 *   - short caching for HTML / sitemap / robots
 *   - compression
 *   - security headers
 *   - SPA-style fallback to index.html
 *
 * Usage:
 *   npm run build       // build the React bundle
 *   npm start           // start production server
 */

import express from 'express'
import compression from 'compression'
import helmet from 'helmet'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.resolve(__dirname, '..', 'dist')

const app = express()
const PORT = process.env.PORT || 3000

// Security headers — CSP kept permissive for self-hosted + Google Fonts.
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        baseUri: ["'self'"],
        imgSrc: ["'self'", 'data:'],
        styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        fontSrc: ["'self'", 'https://fonts.gstatic.com', 'data:'],
        scriptSrc: ["'self'"],
        connectSrc: ["'self'"],
        frameAncestors: ["'self'"],
        formAction: ["'self'"],
      },
    },
    crossOriginEmbedderPolicy: false,
  })
)

app.use(compression())

app.disable('x-powered-by')
app.set('trust proxy', 1)

// Health check
app.get('/healthz', (_req, res) => res.json({ ok: true, ts: Date.now() }))

// Hashed assets (Vite puts them under /assets): cache aggressively
app.use(
  '/assets',
  express.static(path.join(DIST, 'assets'), {
    immutable: true,
    maxAge: '1y',
    index: false,
  })
)

// Images: long cache, revalidate
app.use(
  '/images',
  express.static(path.join(DIST, 'images'), {
    maxAge: '30d',
    index: false,
  })
)

// robots + sitemap: short cache
app.get(['/robots.txt', '/sitemap.xml'], (req, res, next) => {
  res.setHeader('Cache-Control', 'public, max-age=3600')
  next()
})

// Everything else (root, favicon, html): basic static
app.use(
  express.static(DIST, {
    maxAge: '1h',
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('index.html')) {
        res.setHeader('Cache-Control', 'no-cache, max-age=0, must-revalidate')
      }
    },
  })
)

// SPA fallback
app.get('*', (req, res) => {
  res.setHeader('Cache-Control', 'no-cache, max-age=0, must-revalidate')
  res.sendFile(path.join(DIST, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Proxy Gateway listening on http://localhost:${PORT}`)
})
