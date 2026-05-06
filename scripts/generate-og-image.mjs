import sharp from 'sharp'
import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const PUBLIC_IMG = path.resolve(ROOT, 'public', 'images')

const W = 1200
const H = 630

// SVG for OG card. Inline brand: dark navy with gold logo wordmark + headline.
const overlay = Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0B1E3A"/>
      <stop offset="1" stop-color="#0E2545"/>
    </linearGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#E2BC66"/>
      <stop offset="1" stop-color="#BF922F"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- subtle gold hairline -->
  <rect x="80" y="${H - 80}" width="${W - 160}" height="2" fill="url(#gold)" opacity="0.5"/>

  <!-- brand mark -->
  <g transform="translate(80, 110)">
    <text font-family="Barlow Condensed, Arial Narrow, Arial, sans-serif" font-weight="700" font-size="56" letter-spacing="6" fill="url(#gold)">
      PROXY
    </text>
    <text x="0" y="32" font-family="Inter, Arial, sans-serif" font-weight="500" font-size="14" letter-spacing="3" fill="rgba(212,167,74,0.85)">
      D.O.O.  ·  SVE STO DOM TREBA
    </text>
  </g>

  <!-- main headline -->
  <g transform="translate(80, 280)">
    <text font-family="Barlow Condensed, Arial Narrow, Arial, sans-serif" font-weight="700" font-size="78" fill="#FFFFFF" letter-spacing="-1">
      Personalizirani otirači
    </text>
    <text y="84" font-family="Barlow Condensed, Arial Narrow, Arial, sans-serif" font-weight="600" font-size="56" fill="rgba(255,255,255,0.85)">
      i veleprodaja kucanstva
    </text>
  </g>

  <!-- footer line -->
  <g transform="translate(80, ${H - 60})">
    <text font-family="Inter, Arial, sans-serif" font-weight="500" font-size="20" fill="rgba(255,255,255,0.7)">
      Split, Hrvatska  ·  proxy1.hr
    </text>
  </g>
</svg>`)

const target = path.join(PUBLIC_IMG, 'og-card.jpg')
await fs.mkdir(PUBLIC_IMG, { recursive: true })

await sharp(overlay)
  .jpeg({ quality: 85, progressive: true, mozjpeg: true })
  .toFile(target)

const stat = await fs.stat(target)
console.log(`OK  ${path.relative(ROOT, target)}  ${(stat.size/1024).toFixed(0)} KB  (${W}x${H})`)
