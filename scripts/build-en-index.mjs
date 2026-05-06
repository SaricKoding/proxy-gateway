import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.resolve(__dirname, '..', 'dist')

const SRC = path.join(DIST, 'index.html')
const OUT_DIR = path.join(DIST, 'en')
const OUT = path.join(OUT_DIR, 'index.html')

const html = await fs.readFile(SRC, 'utf8')

// EN values mirroring src/i18n/index.js -> en.meta + the head meta on the HR index.
const enTitle = 'Custom logo doormats and wholesale household goods | Proxy d.o.o. Split'
const enDesc = 'Custom-made doormats with your logo for hotels, restaurants and offices. Wholesale household goods, cleaning supplies and hospitality range. Proxy d.o.o. Split, Croatia.'
const enOgTitle = 'Custom logo doormats and wholesale household goods - Proxy d.o.o.'
const enOgDesc = 'Custom-made doormats with your logo for offices and hospitality venues. Wholesale household goods and cleaning supplies. Proxy d.o.o. Split, Croatia.'

let en = html

// <html lang>
en = en.replace(/<html lang="hr">/, '<html lang="en">')

// <title>
en = en.replace(
  /<title>[^<]*<\/title>/,
  `<title>${enTitle}</title>`
)

// meta description
en = en.replace(
  /<meta name="description" content="[^"]*"/,
  `<meta name="description" content="${enDesc}"`
)

// canonical
en = en.replace(
  /<link rel="canonical" href="https:\/\/proxy1\.hr\/"/,
  '<link rel="canonical" href="https://proxy1.hr/en/"'
)

// og title / desc / url / locale
en = en.replace(
  /<meta property="og:title" content="[^"]*"/,
  `<meta property="og:title" content="${enOgTitle}"`
)
en = en.replace(
  /<meta property="og:description" content="[^"]*"/,
  `<meta property="og:description" content="${enOgDesc}"`
)
en = en.replace(
  /<meta property="og:url" content="https:\/\/proxy1\.hr\/"/,
  '<meta property="og:url" content="https://proxy1.hr/en/"'
)
en = en.replace(
  /<meta property="og:locale" content="hr_HR"/,
  '<meta property="og:locale" content="en_US"'
)
en = en.replace(
  /<meta property="og:locale:alternate" content="en_US"/,
  '<meta property="og:locale:alternate" content="hr_HR"'
)

// Twitter
en = en.replace(
  /<meta name="twitter:title" content="[^"]*"/,
  `<meta name="twitter:title" content="${enOgTitle}"`
)
en = en.replace(
  /<meta name="twitter:description" content="[^"]*"/,
  `<meta name="twitter:description" content="${enOgDesc}"`
)

// Asset paths in /en/index.html: Vite uses absolute /assets/... so they keep working.

await fs.mkdir(OUT_DIR, { recursive: true })
await fs.writeFile(OUT, en)

const stat = await fs.stat(OUT)
console.log(`OK  dist/en/index.html  ${(stat.size/1024).toFixed(1)} KB`)
