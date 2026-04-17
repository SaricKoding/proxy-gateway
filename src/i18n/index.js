// Translation dictionary for Proxy d.o.o. gateway
// Two locales: hr (default), en
// Kept as a flat-ish shape per section for clarity.

export const locales = ['hr', 'en']
export const defaultLocale = 'hr'

export const messages = {
  hr: {
    meta: {
      title: 'Proxy d.o.o. Veleprodaja i maloprodaja za domaćinstvo i ugostiteljstvo. Split.',
      description:
        'Proxy d.o.o. Split. Veleprodaja i maloprodaja asortimana za domaćinstvo i ugostiteljstvo. Kućanski pribor, oprema za čišćenje, inox galanterija, posuđe, tekstil i personalizirani otirači s logotipom.',
      ogTitle: 'Proxy d.o.o. Sve što dom treba.',
      ogDescription:
        'Veleprodaja i maloprodaja asortimana za domaćinstvo i ugostiteljstvo. Personalizirani otirači s logotipom. Split, Hrvatska.',
    },

    nav: {
      izbor: 'Izbor',
      onama: 'O nama',
      zasto: 'Zašto Proxy',
      skladiste: 'Skladište',
      kategorije: 'Kategorije',
      otiraci: 'Otirači',
      maloprodaja: 'Maloprodaja',
      veleprodaja: 'Veleprodaja',
      openMenu: 'Otvori izbornik',
      main: 'Glavna navigacija',
      skip: 'Preskoči na sadržaj',
    },

    hero: {
      eyebrow: 'Proxy d.o.o., Split · Osnovano 2016.',
      title: ['Partner za ', 'VELEPRODAJU', ' i ', 'MALOPRODAJU'],
      sub: 'Asortiman za domaćinstvo i ugostiteljstvo. Kvalitetna roba, pouzdana isporuka i fer poslovna praksa.',
      ctaPrimary: 'Odaberite kanal',
      ctaSecondary: 'Saznajte više',
      marks: [
        { n: '700+', l: 'artikala' },
        { n: '3 dana', l: 'isporuka u HR' },
        { n: 'A+', l: 'bonitet' },
      ],
    },

    gateway: {
      eyebrow: 'Vaš izbor',
      title: 'Gdje želite kupovati?',
      sub: 'Odaberite kanal koji vam odgovara. Oba su dio Proxy d.o.o.',
      cards: {
        veleprodaja: {
          kicker: 'B2B',
          tag: 'Samo ugovorni partneri',
          title: 'Veleprodaja',
          desc: 'Za ugovorne partnere, tvrtke, ugostiteljske objekte i ustanove s odobrenim veleprodajnim pristupom.',
          cta: 'Otvorite veleprodaju',
        },
        maloprodaja: {
          kicker: 'B2C',
          tag: 'Dostupno svima',
          title: 'Maloprodaja',
          desc: 'Otvoreno za sve. Kupujte pojedinačno, bez ugovora i bez registracije partnera.',
          cta: 'Otvorite maloprodaju',
        },
      },
      notice: {
        strong: 'Veleprodaja je dostupna samo ugovornim partnerima.',
        text: ['Niste partner? Kontaktirajte nas na ', ' i postanite registrirani partner Proxy d.o.o.'],
        cta: 'Postanite partner',
      },
    },

    about: {
      eyebrow: 'O tvrtki',
      title: ['Osnovano 2016. u Splitu. ', 'Fer partnerstvo na prvom mjestu.'],
      lead: 'Proxy d.o.o. je trgovina na veliko asortimanom za domaćinstvo i ugostiteljstvo. Uz široki katalog roba, nudimo i izradu personaliziranih otirača s logotipima i natpisima tvrtki.',
      p1: 'Tvrtku je 11. svibnja 2016. osnovao Robert Raič nakon dugogodišnjeg iskustva u prodaji. Cilj je bio kvalitetan proizvod i usluga za klijente, uz brigu o zaposlenicima i lokalnoj zajednici.',
      p2: 'Ozbiljnim pristupom i jasnom vizijom, naš je prodajni asortiman popunjen robom vrhunske kvalitete. O tome svjedoči rast baze klijenata kojima pružamo najbolju uslugu.',
      p3: 'Fer poslovna praksa i partnerstvo ostaju na prvom mjestu. Naša vizija je širenje na strana tržišta, ulaganje u proizvodnju i razvoj zaposlenika kroz kontinuiranu edukaciju.',
      stats: [
        { t: 'Godina osnutka', v: '2016.' },
        { t: 'Sjedište', v: 'Split, HR' },
        { t: 'Fokus', v: 'Veleprodaja i maloprodaja' },
        { t: 'Djelokrug', v: 'Hrvatska' },
      ],
      caption: 'Sjedište i skladište · Split',
      imageAlt: 'Proxy skladište u Splitu, profesionalno opremljeno za distribuciju',
    },

    why: {
      eyebrow: 'Zašto Proxy',
      title: ['Sedam razloga zašto nam ', 'kupci vjeruju'],
      sub: 'Ono što nas razlikuje nije katalog, nego način na koji poslujemo sa svojim partnerima.',
      reasons: [
        { t: 'Bonitet A+', d: 'Financijska stabilnost i pouzdanost, potvrđena službenim bonitetnim ocjenama.' },
        { t: 'Fleksibilnost', d: 'Naručivanje, dostave i povrate robe prilagođavamo stvarnim potrebama kupaca.' },
        { t: 'Brza dostava', d: 'Isporuka u roku od 3 radna dana na području cijele Hrvatske.' },
        { t: 'Brzo rješavanje reklamacija', d: 'Reklamacije obrađujemo odmah, bez odugovlačenja i sporednih procedura.' },
        { t: 'Briga o polici kod kupca', d: 'Održavanje reda, dopuna robe i vizualni identitet polica na prodajnim mjestima.' },
        { t: 'Ekološka osviještenost', d: 'U poslovanju i logistici vodimo računa o okolišu i održivim praksama.' },
        { t: 'Fer partnerski odnos', d: 'Partnerstvo na dugi rok, korektnost prema kupcima, zaposlenicima i dobavljačima.' },
      ],
    },

    warehouse: {
      eyebrow: 'Infrastruktura',
      title: 'Naše skladište',
      sub: 'Organizirano, uredno i spremno. Osigurava brzu i točnu isporuku. Kliknite sliku za galeriju.',
      openImage: 'Otvori sliku',
      close: 'Zatvori',
      prev: 'Prethodna slika',
      next: 'Sljedeća slika',
      dialogLabel: 'Galerija skladišta',
      images: [
        'Skladište Proxy, glavna hala',
        'Regalni sustav u skladištu',
        'Organizirane zone skladištenja',
        'Spremljena roba po kategorijama',
        'Priprema narudžbi za otpremu',
        'Radni prostor skladišta',
        'Police s asortimanom',
        'Skladišne police, detalj',
      ],
    },

    categories: {
      eyebrow: 'Asortiman',
      title: 'Kategorije proizvoda',
      sub: 'Od opreme za čišćenje do ugostiteljskog programa. Sve pod jednim krovom.',
      itemsLabel: (n) => `${n} artikala`,
      linkLabel: (name) => `${name}, pogledajte kategoriju`,
      list: [
        { name: 'Čišćenje',            count: 118 },
        { name: 'Drvena galanterija',  count: 99 },
        { name: 'Inox galanterija',    count: 138 },
        { name: 'Opremanje',           count: 189 },
        { name: 'Otirači',             count: 14 },
        { name: 'Posuđe',              count: 43 },
        { name: 'Spremanje ormara',    count: 20 },
        { name: 'Tekstil domaćinstvo', count: null },
      ],
    },

    doormats: {
      eyebrow: 'Dodatna usluga',
      title: ['Personalizirani otirači ', 's vašim logotipom'],
      lead: 'Izrađujemo otirače po narudžbi za poslovne prostore, hotele, restorane i ugostiteljske objekte. Logotipi, natpisi i personalizirani dizajn. Trajno, praktično i reprezentativno.',
      bullets: [
        'Logotipi tvrtki i brendova',
        'Natpisi po narudžbi, bilo koji tekst',
        'Različite dimenzije i gustoće vlakana',
        'Izrada za ugostiteljstvo i poslovne prostore',
      ],
      ctaWholesale: 'Upit za veleprodaju',
      ctaRetail: 'Maloprodajna ponuda',
      imageAlt: 'Personalizirani otirač s logotipom tvrtke',
    },

    footer: {
      tag: 'Sve što dom treba, od 2016.',
      channelsHead: 'Kanali prodaje',
      contactHead: 'Kontakt',
      locationHead: 'Lokacija',
      legalHead: '',
      contactRole: 'Uprava',
      channels: {
        wholesale: 'Veleprodaja (B2B)',
        retail: 'Maloprodaja (B2C)',
      },
      address: ['Solinska 49, Dujmovača', '21000 Split, Hrvatska'],
      rights: 'Sva prava pridržana.',
      credit: ['Web dizajn i održavanje ', 'KLIKOTEKA d.o.o.'],
      mapTitle: 'Proxy d.o.o. lokacija na karti',
    },
  },

  en: {
    meta: {
      title: 'Proxy d.o.o. Wholesale and retail for household and hospitality. Split, Croatia.',
      description:
        'Proxy d.o.o. Split, Croatia. Wholesale and retail for household and hospitality supplies. Kitchenware, cleaning equipment, stainless steel, tableware, textiles and personalised doormats with logo.',
      ogTitle: 'Proxy d.o.o. Everything a home needs.',
      ogDescription:
        'Wholesale and retail for household and hospitality supplies. Personalised doormats with logo. Split, Croatia.',
    },

    nav: {
      izbor: 'Choice',
      onama: 'About',
      zasto: 'Why Proxy',
      skladiste: 'Warehouse',
      kategorije: 'Categories',
      otiraci: 'Doormats',
      maloprodaja: 'Retail',
      veleprodaja: 'Wholesale',
      openMenu: 'Open menu',
      main: 'Main navigation',
      skip: 'Skip to content',
    },

    hero: {
      eyebrow: 'Proxy d.o.o., Split · Established 2016',
      title: ['Partner for ', 'WHOLESALE', ' and ', 'RETAIL'],
      sub: 'Household and hospitality supplies. Quality goods, reliable delivery and fair business practice.',
      ctaPrimary: 'Choose a channel',
      ctaSecondary: 'Learn more',
      marks: [
        { n: '700+', l: 'products' },
        { n: '3 days', l: 'delivery in Croatia' },
        { n: 'A+', l: 'credit rating' },
      ],
    },

    gateway: {
      eyebrow: 'Your choice',
      title: 'Where would you like to shop?',
      sub: 'Pick the channel that suits you. Both are part of Proxy d.o.o.',
      cards: {
        veleprodaja: {
          kicker: 'B2B',
          tag: 'Contracted partners only',
          title: 'Wholesale',
          desc: 'For contracted partners, companies, hospitality businesses and institutions with approved wholesale access.',
          cta: 'Open wholesale',
        },
        maloprodaja: {
          kicker: 'B2C',
          tag: 'Open to everyone',
          title: 'Retail',
          desc: 'Open to all. Shop individually, no contract and no partner registration.',
          cta: 'Open retail',
        },
      },
      notice: {
        strong: 'Wholesale is available only to contracted partners.',
        text: ['Not a partner yet? Contact us at ', ' to become a registered Proxy d.o.o. partner.'],
        cta: 'Become a partner',
      },
    },

    about: {
      eyebrow: 'About the company',
      title: ['Founded in 2016 in Split. ', 'Fair partnership above all.'],
      lead: 'Proxy d.o.o. is a wholesale company supplying household and hospitality goods. Alongside a broad catalogue, we also produce personalised doormats with company logos and custom text.',
      p1: 'The company was founded on 11 May 2016 by Robert Raič after many years of sales experience. The goal was quality products and service for clients, combined with care for employees and the local community.',
      p2: 'A serious approach and a clear vision quickly built an assortment of top-quality goods. A growing client base confirms the quality of our service.',
      p3: 'Fair business practice and partnership remain our top priority. Our vision is to expand into foreign markets, invest in production and develop our employees through continuous education.',
      stats: [
        { t: 'Established', v: '2016' },
        { t: 'Headquarters', v: 'Split, HR' },
        { t: 'Focus', v: 'Wholesale and retail' },
        { t: 'Coverage', v: 'Croatia' },
      ],
      caption: 'Headquarters and warehouse · Split',
      imageAlt: 'Proxy warehouse in Split, professionally equipped for distribution',
    },

    why: {
      eyebrow: 'Why Proxy',
      title: ['Seven reasons our ', 'customers trust us'],
      sub: 'What sets us apart is not the catalogue. It is how we work with our partners.',
      reasons: [
        { t: 'A+ credit rating', d: 'Financial stability and reliability, confirmed by official credit ratings.' },
        { t: 'Flexibility', d: 'We adapt orders, deliveries and returns to real customer needs.' },
        { t: 'Fast delivery', d: 'Delivery within 3 business days across Croatia.' },
        { t: 'Fast complaint handling', d: 'Complaints are resolved immediately, without delays or red tape.' },
        { t: 'Shelf care', d: 'We maintain order, restock and keep a consistent visual identity at your point of sale.' },
        { t: 'Environmental awareness', d: 'We keep sustainability and the environment in mind across operations and logistics.' },
        { t: 'Fair partnership', d: 'Long-term partnerships, fair to customers, employees and suppliers.' },
      ],
    },

    warehouse: {
      eyebrow: 'Infrastructure',
      title: 'Our warehouse',
      sub: 'Organised, tidy and ready. The base for fast and accurate delivery. Click an image to open the gallery.',
      openImage: 'Open image',
      close: 'Close',
      prev: 'Previous image',
      next: 'Next image',
      dialogLabel: 'Warehouse gallery',
      images: [
        'Proxy warehouse, main hall',
        'Shelving system in the warehouse',
        'Organised storage zones',
        'Goods stored by category',
        'Preparing orders for shipping',
        'Warehouse working area',
        'Shelves with products',
        'Warehouse shelving, detail',
      ],
    },

    categories: {
      eyebrow: 'Product range',
      title: 'Product categories',
      sub: 'From cleaning equipment to hospitality supplies. Everything under one roof.',
      itemsLabel: (n) => `${n} products`,
      linkLabel: (name) => `${name}, view category`,
      list: [
        { name: 'Cleaning',              count: 118 },
        { name: 'Wooden accessories',    count: 99 },
        { name: 'Stainless steel',       count: 138 },
        { name: 'Equipment',             count: 189 },
        { name: 'Doormats',              count: 14 },
        { name: 'Tableware',             count: 43 },
        { name: 'Wardrobe storage',      count: 20 },
        { name: 'Home textiles',         count: null },
      ],
    },

    doormats: {
      eyebrow: 'Additional service',
      title: ['Personalised doormats ', 'with your logo'],
      lead: 'We produce custom doormats for offices, hotels, restaurants and hospitality venues. Logos, custom text and personalised design. Durable, practical and on-brand.',
      bullets: [
        'Company and brand logos',
        'Custom text, any wording',
        'Various sizes and fibre densities',
        'Made for hospitality and commercial spaces',
      ],
      ctaWholesale: 'Wholesale inquiry',
      ctaRetail: 'Retail offer',
      imageAlt: 'Personalised doormat with company logo',
    },

    footer: {
      tag: 'Everything a home needs, since 2016.',
      channelsHead: 'Sales channels',
      contactHead: 'Contact',
      locationHead: 'Location',
      legalHead: '',
      contactRole: 'Management',
      channels: {
        wholesale: 'Wholesale (B2B)',
        retail: 'Retail (B2C)',
      },
      address: ['Solinska 49, Dujmovača', '21000 Split, Croatia'],
      rights: 'All rights reserved.',
      credit: ['Web design and maintenance ', 'KLIKOTEKA d.o.o.'],
      mapTitle: 'Proxy d.o.o. location on the map',
    },
  },
}
