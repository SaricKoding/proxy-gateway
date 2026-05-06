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
import rateLimit from 'express-rate-limit'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.resolve(__dirname, '..', 'dist')

const app = express()
const PORT = process.env.PORT || 3000

app.disable('x-powered-by')
app.set('trust proxy', 1)

// Security headers. Google Maps embed needs frameSrc; CSP is otherwise tight.
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        baseUri: ["'self'"],
        imgSrc: ["'self'", 'data:', 'https:'],
        styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        fontSrc: ["'self'", 'https://fonts.gstatic.com', 'data:'],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        connectSrc: ["'self'"],
        frameSrc: ["'self'", 'https://www.google.com'],
        frameAncestors: ["'self'"],
        formAction: ["'self'"],
        objectSrc: ["'none'"],
        upgradeInsecureRequests: [],
      },
    },
    crossOriginEmbedderPolicy: false,
    referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
  })
)

app.use(compression())

// Basic anti-abuse rate limit (per IP). Real DDoS protection should sit at the
// edge (Cloudflare or similar); this only blunts trivial floods.
const generalLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => req.path === '/healthz',
})
app.use(generalLimiter)

// Health check
app.get('/healthz', (_req, res) => res.json({ ok: true, ts: Date.now() }))

// Clean URLs for legal pages (HTML lives in /public/*.html, copied to /dist).
app.get(['/politika-privatnosti', '/politika-privatnosti/'], (_req, res) => {
  res.setHeader('Cache-Control', 'public, max-age=3600')
  res.sendFile(path.join(DIST, 'politika-privatnosti.html'))
})
app.get(['/politika-kolacica', '/politika-kolacica/'], (_req, res) => {
  res.setHeader('Cache-Control', 'public, max-age=3600')
  res.sendFile(path.join(DIST, 'politika-kolacica.html'))
})

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
