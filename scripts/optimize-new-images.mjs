import sharp from 'sharp'
import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const SRC_HOME = path.resolve(ROOT, '..', 'slikezaweb', 'home')
const SRC_OTIRACI = path.resolve(ROOT, '..', 'slikezaweb', 'otiraci')
const OUT = path.resolve(ROOT, 'public', 'images')

await fs.mkdir(OUT, { recursive: true })

// Category cards: 4:3 cover crop @ ~1100w, white background fallback for transparent pngs
const categoryJobs = [
  { src: path.join(SRC_HOME, 'mop.jpg'),       out: 'ciscenje.jpg',           w: 1100, fit: 'cover', ratio: 4/3 },
  { src: path.join(SRC_HOME, 'daska.jpg'),     out: 'drvena-galanterija.jpg', w: 1100, fit: 'cover', ratio: 4/3 },
  { src: path.join(SRC_HOME, 'inox.jpg'),      out: 'inox-galanterija.jpg',   w: 1100, fit: 'cover', ratio: 4/3 },
  { src: path.join(SRC_HOME, 'metla.jpg'),     out: 'opremanje-display.jpg',  w: 1100, fit: 'cover', ratio: 4/3 },
  { src: path.join(SRC_HOME, 'otirac.png'),    out: 'otiraci-globo.jpg',      w: 1100, fit: 'contain', ratio: 4/3, bg: '#F5F2EB' },
  { src: path.join(SRC_HOME, 'tave.jpg'),      out: 'posudje-display.jpg',    w: 1100, fit: 'cover', ratio: 4/3 },
  { src: path.join(SRC_HOME, 'ogledalo.jpg'),  out: 'spremanje-ormara.jpg',   w: 1100, fit: 'cover', ratio: 4/3 },
  { src: path.join(SRC_HOME, 'krpa.jpg'),      out: 'wholesale-fabric.jpg',   w: 1100, fit: 'cover', ratio: 4/3 },
]

// Doormats hero: large feature image filling the frame (cover), focal-aware crop
const heroJobs = [
  { src: path.join(SRC_HOME, 'otirac.png'),                        out: 'otirac-hero.jpg', w: 1600, fit: 'cover', ratio: 3/2 },
]

// Doormats gallery: cover crop so each tile shows the actual mat material, no cream padding
const galleryJobs = [
  { src: path.join(SRC_OTIRACI, 'otirac_glavni.jpeg'),       out: 'otirac-1.jpg', w: 1100, fit: 'cover', ratio: 4/3 },
  { src: path.join(SRC_OTIRACI, 'otirac_2.jpeg'),            out: 'otirac-2.jpg', w: 1100, fit: 'cover', ratio: 4/3 },
  { src: path.join(SRC_OTIRACI, 'otirac_3.jpeg'),            out: 'otirac-3.jpg', w: 1100, fit: 'cover', ratio: 4/3 },
  { src: path.join(SRC_OTIRACI, 'otirac_4.jpeg'),            out: 'otirac-4.jpg', w: 1100, fit: 'cover', ratio: 4/3 },
  { src: path.join(SRC_OTIRACI, 'IMG_20190502_084829.jpg'),  out: 'otirac-5.jpg', w: 1100, fit: 'cover', ratio: 4/3 },
]

// New hero background: cleaning assortment shot (izlaganje3.jpg) - vibrant retail aisle
const heroBgJobs = [
  { src: path.resolve(ROOT, '..', 'slikezaweb', 'izlaganje3.jpg'), out: 'hero-cleaning.jpg', w: 1920, fit: 'cover', ratio: 16/9 },
]

const allJobs = [...categoryJobs, ...heroJobs, ...galleryJobs, ...heroBgJobs]

for (const job of allJobs) {
  const { src, out, w, fit, ratio, bg } = job
  const target = path.join(OUT, out)
  try {
    const width = w
    const height = Math.round(w / ratio)

    let pipeline = sharp(src).rotate()

    if (fit === 'cover') {
      pipeline = pipeline.resize(width, height, { fit: 'cover', position: 'attention' })
    } else {
      pipeline = pipeline
        .resize(width, height, { fit: 'contain', background: bg || '#FFFFFF' })
        .flatten({ background: bg || '#FFFFFF' })
    }

    await pipeline.jpeg({ quality: 80, progressive: true, mozjpeg: true }).toFile(target)
    const stat = await fs.stat(target)
    console.log(`OK  ${out}  ${(stat.size/1024).toFixed(0)} KB  (${width}x${height} ${fit})`)
  } catch (e) {
    console.log(`FAIL ${out}: ${e.message}`)
  }
}
console.log('Done.')
