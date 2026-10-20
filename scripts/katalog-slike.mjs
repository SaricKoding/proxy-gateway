/**
 * Slike javnog kataloga: iz izvornih ERP/Woo slika (katalog-izvor/slike/)
 * pravi dvije WebP velicine u public/katalog/slike/:
 *   <ime>-m.webp  480 px, kvadrat na bijelom (mreza)
 *   <ime>-v.webp  1000 px, kvadrat na bijelom (stranica artikla)
 *
 * Kvadrat na bijelom: ERP slike su razlicitih omjera, a mreza mora biti mirna.
 * Postojece datoteke se preskacu, pa je ponovno pokretanje brzo.
 *
 * Pokretanje: node scripts/katalog-slike.mjs
 */
import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SRC = path.join(ROOT, 'katalog-izvor', 'slike')
const OUT = path.join(ROOT, 'public', 'katalog', 'slike')

export const imeSlike = (f) => path.parse(f).name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

await fs.mkdir(OUT, { recursive: true })
const files = (await fs.readdir(SRC)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f))

let novo = 0
for (const f of files) {
  const ime = imeSlike(f)
  for (const [suf, px, q] of [['m', 480, 78], ['v', 1000, 82]]) {
    const dst = path.join(OUT, `${ime}-${suf}.webp`)
    try { await fs.access(dst); continue } catch {}
    await sharp(path.join(SRC, f))
      .rotate()
      .flatten({ background: '#ffffff' })
      .resize(px, px, { fit: 'contain', background: '#ffffff' })
      .webp({ quality: q })
      .toFile(dst)
    novo++
  }
}
// Slike skupina: izrez 4:3 bez bijelih rubova (polja kazala na naslovnici i u katalogu).
const izvoz = JSON.parse(await fs.readFile(path.join(ROOT, 'katalog-izvor', 'katalog.json'), 'utf8'))
for (const k of izvoz.kategorije) {
  if (!k.slika) continue
  const dst = path.join(OUT, `${imeSlike(k.slika)}-k.webp`)
  try { await fs.access(dst); continue } catch {}
  await sharp(path.join(SRC, k.slika)).rotate().resize(960, 720, { fit: 'cover' }).webp({ quality: 80 }).toFile(dst)
  novo++
}
console.log(`katalog slike: ${files.length} izvora, ${novo} novih datoteka`)
