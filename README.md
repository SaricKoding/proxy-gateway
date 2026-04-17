# Proxy d.o.o. — Gateway (proxy1.hr)

Gateway landing page for **Proxy d.o.o.** (Solin, Hrvatska). A single, SEO-optimized, mobile-first
corporate page whose primary job is to route visitors to one of two storefronts:

- **Veleprodaja (B2B):** [veleproday.proxy1.hr](https://veleproday.proxy1.hr)
- **Maloprodaja (B2C):** [maloprodaja.proxy.hr](https://maloprodaja.proxy.hr)

## Tech stack

| Layer        | Tech                                    |
| ------------ | --------------------------------------- |
| Frontend     | React 18 + Vite 6                       |
| Styling      | Hand-tuned CSS (design tokens in `:root`) |
| Typography   | Barlow Condensed + Inter (Google Fonts) |
| Backend      | Node.js 18+ · Express · Helmet · Compression |
| Image pipeline | `sharp` (build-time JPEG optimization)  |

## Structure

```
proxy-gateway/
├─ index.html                 # App shell + full SEO (OG, Twitter, JSON-LD)
├─ public/
│  ├─ images/                 # Optimized JPG/SVG assets served as-is
│  ├─ robots.txt
│  ├─ sitemap.xml
│  └─ favicon.png
├─ scripts/
│  └─ optimize-images.mjs     # Resize & compress source images via sharp
├─ server/
│  └─ index.js                # Express production server
├─ src/
│  ├─ main.jsx                # React entry
│  ├─ App.jsx                 # Section composition
│  ├─ components/
│  │  ├─ Header.jsx           # Sticky, transparent-on-hero, mobile drawer
│  │  ├─ Hero.jsx             # Full-bleed hero with 2 CTAs
│  │  ├─ Gateway.jsx          # Dominant B2B/B2C choice — the page's purpose
│  │  ├─ About.jsx            # Company story + stats
│  │  ├─ Warehouse.jsx        # Warehouse photo gallery
│  │  ├─ Categories.jsx       # Product categories grid (8 kategorija)
│  │  ├─ Doormats.jsx         # Personalised doormats service spotlight
│  │  └─ Footer.jsx           # Corporate footer
│  └─ styles/
│     └─ index.css            # Single stylesheet — tokens + components + responsive
└─ package.json
```

## Scripts

```bash
npm install                 # install deps

npm run dev                 # Vite dev server on :3000
npm run build               # Build production bundle into dist/
npm run preview             # Vite static preview
npm start                   # Run Express server on :3000 (serves dist/)
npm run serve               # build + start
npm run optimize:images     # Regenerate optimized JPGs from ../slikezaweb
```

## Design direction

- **Palette:** corporate navy blue `#0B1E3A–#1E4A8B` + gold accent `#BF922F–#D4A74A` on white
- **Tone:** clean, spacious, business-first; no chrome, no gimmicks
- **Mobile-first:** fluid typography with `clamp()`, drawer nav under 880 px
- **Accessibility:** skip link, semantic landmarks (`header`/`main`/`footer`/`section`),
  focus-visible outlines, alt text, reduced-motion honoured

## SEO

- Unique, keyword-rich `<title>` and `<meta name="description">`
- Canonical URL, locale, geo hints
- Open Graph + Twitter Card
- Three JSON-LD blocks: `Organization`, `WebSite`, `ItemList` (gateway destinations)
- `robots.txt` + `sitemap.xml` served under `public/`
- Semantic H1/H2/H3 hierarchy, descriptive `alt` attributes
- Hero image preloaded, fonts preconnected, CSS/JS minified

## Production server

The Express server in `server/index.js` provides:

- Helmet CSP tuned for self-hosted assets + Google Fonts
- `compression` (gzip/brotli when available)
- Immutable caching for `/assets/*` (Vite hashed output)
- `no-cache` for `index.html` (always fetches latest build)
- `/healthz` endpoint

Deploy: build then run.

```bash
npm run build
PORT=8080 npm start
```

## Key pages / anchors

- `/`              Gateway landing
- `/#izbor`        Gateway choice (primary CTA)
- `/#o-nama`       About
- `/#skladiste`    Warehouse gallery
- `/#kategorije`   Product categories
- `/#otiraci`      Personalised doormats
