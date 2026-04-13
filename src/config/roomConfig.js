/*  ── Room Configuration ──
    All scroll zones, overlay positions, and content for the panoramic experience.
    Progress goes from 0.0 (left/start) to 1.0 (right/end).

    Room layout (panorama left → right):
    [DOOR: Maloprodaja] → [WALL: Welcome] → [WALL: Products] → [WALL: O nama] → [WALL: Values] → [WALL: Products] → [DOOR: Veleprodaja]
*/

export const panoramaAsset = {
  src: '/images/panorama-room.webp',
  fallbackSrc: '/images/panorama-room.jpg',
  width: 8192,
  height: 2048,
  // true = CSS gradient placeholder; false = use actual panorama image
  usePlaceholder: true,
}

export const doors = [
  {
    id: 'maloprodaja',
    label: 'MALOPRODAJA',
    title: 'Za vaš dom',
    subtitle: 'Kućanski pribor, sredstva za čišćenje i sve za svakodnevni život',
    url: 'https://maloprodaja.proxy1.hr',
    subdomain: 'maloprodaja.proxy1.hr',
    activeRange: [0.0, 0.12],
    color: 'blue',
  },
  {
    id: 'veleprodaja',
    label: 'VELEPRODAJA',
    title: 'Za vaš posao',
    subtitle: 'B2B narudžbe, veleprodajne cijene, brza isporuka za poslovne partnere',
    url: 'https://veleprodaja.proxy1.hr',
    subdomain: 'veleprodaja.proxy1.hr',
    activeRange: [0.88, 1.0],
    color: 'yellow',
  },
]

export const wallTexts = [
  {
    id: 'welcome',
    heading: 'Dobrodošli u Proxy',
    body: null,
    visibleRange: [0.05, 0.18],
    position: { x: '50%', y: '35%' },
    style: 'hero',
  },
  {
    id: 'tagline',
    heading: 'Sve što dom treba',
    body: 'Kvalitetni proizvodi za dom i posao — od kućanskog pribora do profesionalnog ugostiteljskog programa.',
    visibleRange: [0.18, 0.32],
    position: { x: '50%', y: '38%' },
    style: 'tagline',
  },
  {
    id: 'about',
    heading: 'O nama',
    body: 'Proxy d.o.o. je veleprodajna tvrtka iz Splita specijalizirana za opskrbu širokim asortimanom proizvoda za domaćinstvo i ugostiteljstvo. Osnovana 2016. godine od strane Roberta Raiča, danas opslužujemo široku mrežu trgovaca i poslovnih subjekata diljem Hrvatske.',
    visibleRange: [0.32, 0.48],
    position: { x: '50%', y: '35%' },
    style: 'body',
  },
  {
    id: 'mission',
    heading: 'Naša misija',
    body: 'Pružiti klijentima najkvalitetnije proizvode i usluge uz fer poslovnu praksu, vodeći računa o dobrobiti zaposlenika i šire zajednice.',
    visibleRange: [0.48, 0.60],
    position: { x: '50%', y: '38%' },
    style: 'body',
  },
  {
    id: 'stats',
    heading: null,
    body: null,
    stats: [
      { num: '792+', label: 'Artikala' },
      { num: '24h', label: 'Isporuka' },
      { num: '200+', label: 'Partnera' },
      { num: '2016', label: 'Od godine' },
    ],
    visibleRange: [0.60, 0.72],
    position: { x: '50%', y: '40%' },
    style: 'stats',
  },
  {
    id: 'values',
    heading: 'Zašto Proxy',
    body: null,
    values: [
      { title: 'Kvaliteta', desc: 'Samo provjereni, vrhunski proizvodi' },
      { title: 'Pouzdanost', desc: 'Dostava na vrijeme, konzistentan asortiman' },
      { title: 'Fer poslovanje', desc: 'Transparentnost bez skrivenih troškova' },
      { title: 'Inovativnost', desc: 'Kontinuirano unapređenje ponude' },
    ],
    visibleRange: [0.72, 0.88],
    position: { x: '50%', y: '35%' },
    style: 'values',
  },
]

export const productHotspots = [
  {
    id: 'knives',
    image: '/images/knives-product.jpg',
    label: 'Bonomi noževi',
    category: 'Kuhinjski program',
    visibleRange: [0.22, 0.35],
    position: { x: '20%', y: '65%' },
  },
  {
    id: 'cleaning',
    image: '/images/proxy-display.jpg',
    label: 'Program čišćenja',
    category: 'Sredstva za čišćenje',
    visibleRange: [0.38, 0.52],
    position: { x: '80%', y: '62%' },
  },
  {
    id: 'doormats',
    image: '/images/doormats.jpg',
    label: 'Otirači',
    category: 'Otirači & Tepisi',
    visibleRange: [0.55, 0.68],
    position: { x: '22%', y: '68%' },
  },
  {
    id: 'textiles',
    image: '/images/wholesale-fabric.jpg',
    label: 'Stolnjaci i tekstil',
    category: 'Ugostiteljski program',
    visibleRange: [0.75, 0.88],
    position: { x: '78%', y: '65%' },
  },
]

export const scrollHeight = 6  // multiplier of viewport height
