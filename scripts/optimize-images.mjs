import sharp from 'sharp'
import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const SRC = path.resolve(ROOT, '..', 'slikezaweb')
const OUT = path.resolve(ROOT, 'public', 'images')

await fs.mkdir(OUT, { recursive: true })

const jobs = [
  { src: '1.jpg',                out: 'drvena-galanterija.jpg', w: 1100 },
  { src: 'ormar.jpg',            out: 'spremanje-ormara.jpg',   w: 1100 },
  { src: 'posude.jpg',           out: 'posudje-display.jpg',    w: 1100 },
  { src: 'izlaganje.jpg',        out: 'opremanje-display.jpg',  w: 1100 },
  { src: 'izlaganje.jpg',        out: 'veleprodaja-izlaganje.jpg', w: 1600 },
  { src: 'ciscenje.jpeg',        out: 'ciscenje.jpg',           w: 1100 },
  { src: 'inox.png',             out: 'inox-galanterija.jpg',   w: 1100 },
  { src: 'otirac_glavni.jpeg',   out: 'otirac-hero.jpg',        w: 1600 },
  { src: 'skladiste.jpeg',       out: 'hero-warehouse.jpg',     w: 1800 },
  { src: 'skladiste2.jpeg',      out: 'warehouse-wide.jpg',     w: 1600 },
  { src: 'izlaganje2.jpg',       out: 'display-2.jpg',          w: 1100 },
  { src: 'izlaganje3.jpg',       out: 'display-3.jpg',          w: 1100 },
]

for (const job of jobs) {
  const from = path.join(SRC, job.src)
  const to = path.join(OUT, job.out)
  try {
    await sharp(from)
      .resize({ width: job.w, withoutEnlargement: true })
      .jpeg({ quality: 78, progressive: true, mozjpeg: true })
      .toFile(to)
    const stat = await fs.stat(to)
    console.log(`OK  ${job.out}  ${(stat.size/1024).toFixed(0)} KB`)
  } catch (e) {
    console.log(`FAIL ${job.src}: ${e.message}`)
  }
}
console.log('Done.')
