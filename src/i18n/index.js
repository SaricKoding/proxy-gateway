// Translation dictionary for Proxy d.o.o. gateway
// Two locales: hr (default), en
// Kept as a flat-ish shape per section for clarity.

export const locales = ['hr', 'en']
export const defaultLocale = 'hr'

export const messages = {
  hr: {
    meta: {
      title: 'Personalizirani otirači i veleprodaja kućanstva | Proxy d.o.o. Split',
      description:
        'Izrada personaliziranih otirača s logotipom za hotele, restorane i poslovne prostore. Veleprodaja kućanskih artikala, sredstava za čišćenje i ugostiteljskog programa. Proxy d.o.o. Split, Hrvatska.',
      ogTitle: 'Personalizirani otirači i veleprodaja - Proxy d.o.o. Split',
      ogDescription:
        'Izrada personaliziranih otirača s logotipom za poslovne prostore. Veleprodaja kućanskih artikala i ugostiteljskog programa. Proxy d.o.o. Split, Hrvatska.',
    },

    nav: {
      izbor: 'Izbor',
      onama: 'O nama',
      zasto: 'Zašto Proxy',
      skladiste: 'Skladište',
      kategorije: 'Kategorije',
      otiraci: 'Personalizirani otirači',
      faq: 'Pitanja',
      maloprodaja: 'Maloprodaja',
      veleprodaja: 'Veleprodaja',
      openMenu: 'Otvori izbornik',
      main: 'Glavna navigacija',
      skip: 'Preskoči na sadržaj',
    },

    hero: {
      eyebrow: '',
      title: ['Partner za ', 'VELEPRODAJU', ' i ', 'MALOPRODAJU'],
      sub: 'Široki asortiman artikala za domaćinstvo i ugostiteljstvo. Garancija dobre kvalitete proizvoda iz asortimana renomiranih svjetskih proizvođača. Pouzdana isporuka i fer poslovna praksa.',
      ctaPrimary: 'Odaberi način kupnje',
      ctaSecondary: 'Više o nama',
      doormatPill: {
        label: 'Personalizirani otirači',
        text: 'Otirači s Vašim logotipom za Vaš poslovni prostor.',
      },
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
        { name: 'Personalizirani otirači', count: 14 },
        { name: 'Posuđe',              count: 43 },
        { name: 'Spremanje ormara',    count: 20 },
        { name: 'Tekstil domaćinstvo', count: null },
      ],
    },

    doormats: {
      eyebrow: 'Vlastita izrada',
      title: ['Personalizirani otirači ', 's Vašim logotipom'],
      lead: 'Izrađujemo personalizirane otirače po narudžbi za poslovne prostore, hotele, restorane i ugostiteljske objekte. Logotipi tvrtki, natpisi i prilagođeni dizajn po Vašoj mjeri. Trajna kvaliteta, praktičnost i reprezentativan ulaz.',
      bullets: [
        'Logotipi tvrtki i brendova - vektorska izrada',
        'Natpisi po narudžbi - naziv objekta ili pozdrav',
        'Standardne i prilagođene dimenzije (60x90, 80x120, 100x150 cm i po mjeri)',
        'Različite gustoće vlakana prema učestalosti prometa',
        'Izrada za ugostiteljstvo, hotele i poslovne prostore',
      ],
      ctaWholesale: 'Upit za veleprodaju',
      ctaRetail: 'Maloprodajna ponuda',
      imageAlt: 'Personalizirani otirač s logotipom tvrtke - Proxy d.o.o. Split',
      galleryAlts: [
        'Personalizirani otirač s logotipom Proxy',
        'Personalizirani otirač za hotele i restorane - PRISTAV',
        'Otirač po narudžbi s natpisom za ugostiteljstvo',
        'Otirač s brendiranim logotipom - Hotel AS',
        'Personalizirani otirači u ugostiteljskom objektu',
      ],
    },

    footer: {
      tag: 'Sve što dom treba, od 2016.',
      channelsHead: 'Kanali prodaje',
      contactHead: 'Kontakt',
      locationHead: 'Lokacija',
      legalHead: 'Pravne informacije',
      contactRole: 'Uprava',
      channels: {
        wholesale: 'Veleprodaja (B2B)',
        retail: 'Maloprodaja (B2C)',
      },
      legal: {
        privacy: 'Politika privatnosti',
        cookies: 'Politika kolačića',
        cookiePrefs: 'Postavke kolačića',
      },
      address: ['Solinska 49, Dujmovača', '21000 Split, Hrvatska'],
      rights: 'Sva prava pridržana.',
      credit: ['Web dizajn i održavanje ', 'KLIKOTEKA d.o.o.'],
      mapTitle: 'Proxy d.o.o. lokacija na karti',
    },

    cookies: {
      title: 'Kolačići na proxy1.hr',
      text: 'Koristimo nužne kolačiće za rad stranice. Statistika i analitika koriste se isključivo uz Vaš pristanak. Više u',
      linkLabel: 'Politici kolačića',
      accept: 'Prihvati',
      reject: 'Odbij',
    },

    faq: {
      eyebrow: 'Često pitanje',
      title: ['Personalizirani otirači i ', 'veleprodaja - česta pitanja'],
      sub: 'Najčešća pitanja o izradi otirača s logotipom i veleprodajnom kanalu Proxy d.o.o.',
      items: [
        {
          q: 'Kako naručiti personalizirani otirač s logotipom?',
          a: 'Pošaljite upit na info@proxy1.hr s logotipom (vektorska datoteka SVG ili PDF idealno), željenom veličinom otirača i okvirnim brojem komada. Pripremamo prijedlog dizajna, potvrđujete izgled i kreće izrada. Vrijeme isporuke ovisi o količini i složenosti dizajna.',
        },
        {
          q: 'Koje su veličine personaliziranih otirača dostupne?',
          a: 'Otirači se izrađuju u standardnim i prilagođenim veličinama. Tipične dimenzije su 60x90 cm, 80x120 cm i 100x150 cm, ali dimenzije izrađujemo prema mjeri ulaza ili recepcije. Različite gustoće vlakana biramo prema učestalosti prometa na mjestu postavljanja.',
        },
        {
          q: 'Postoji li minimalna količina za narudžbu personaliziranog otirača?',
          a: 'Izrađujemo i pojedinačne otirače za poslovne prostore, hotele i restorane. Za veće količine, ugostiteljske lance i franšize dogovaramo veleprodajne uvjete i fiksne cijene po komadu.',
        },
        {
          q: 'Što se sve može staviti na otirač?',
          a: 'Logotip tvrtke, naziv objekta, slogan ili pozdravna poruka, kombinacije teksta i znaka. Boje se preuzimaju iz Vašeg vizualnog identiteta. Dizajn potvrđujete prije izrade.',
        },
        {
          q: 'Tko može kupovati u Proxy veleprodaji?',
          a: 'Proxy veleprodaja dostupna je ugovornim partnerima: tvrtkama, ugostiteljskim objektima, hotelima i ustanovama s odobrenim veleprodajnim pristupom. Maloprodajni kanal otvoren je svima i ne traži ugovor ni registraciju.',
        },
        {
          q: 'U koje vrijeme isporučujete robu u Hrvatskoj?',
          a: 'Standardno isporučujemo u roku od 3 radna dana na cijelom području Hrvatske. Za personalizirane otirače rok ovisi o složenosti dizajna i količini, a okvirni rok dogovaramo pri narudžbi.',
        },
      ],
    },
  },

  en: {
    meta: {
      title: 'Custom logo doormats and wholesale household goods | Proxy d.o.o. Split',
      description:
        'Custom-made doormats with your logo for hotels, restaurants and offices. Wholesale household goods, cleaning supplies and hospitality range. Proxy d.o.o. Split, Croatia.',
      ogTitle: 'Custom logo doormats and wholesale household goods - Proxy d.o.o.',
      ogDescription:
        'Custom-made doormats with your logo for offices and hospitality venues. Wholesale household goods and cleaning supplies. Proxy d.o.o. Split, Croatia.',
    },

    nav: {
      izbor: 'Choice',
      onama: 'About',
      zasto: 'Why Proxy',
      skladiste: 'Warehouse',
      kategorije: 'Categories',
      otiraci: 'Personalised doormats',
      faq: 'FAQ',
      maloprodaja: 'Retail',
      veleprodaja: 'Wholesale',
      openMenu: 'Open menu',
      main: 'Main navigation',
      skip: 'Skip to content',
    },

    hero: {
      eyebrow: '',
      title: ['Partner for ', 'WHOLESALE', ' and ', 'RETAIL'],
      sub: 'A broad range of goods for household and hospitality. Guaranteed quality from renowned international manufacturers. Reliable delivery and fair business practice.',
      ctaPrimary: 'Choose how to shop',
      ctaSecondary: 'About us',
      doormatPill: {
        label: 'Personalised doormats',
        text: 'Doormats with your logo for your business premises.',
      },
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
        { name: 'Personalised doormats', count: 14 },
        { name: 'Tableware',             count: 43 },
        { name: 'Wardrobe storage',      count: 20 },
        { name: 'Home textiles',         count: null },
      ],
    },

    doormats: {
      eyebrow: 'Made in-house',
      title: ['Personalised doormats ', 'with your logo'],
      lead: 'We produce custom doormats for offices, hotels, restaurants and hospitality venues. Company logos, custom text and tailored design cut to your size. Durable, practical and on-brand entrance.',
      bullets: [
        'Company and brand logos - vector-ready',
        'Custom text - venue name or welcome message',
        'Standard and custom sizes (60x90, 80x120, 100x150 cm and to measure)',
        'Fibre density matched to expected foot traffic',
        'Made for hospitality, hotels and commercial spaces',
      ],
      ctaWholesale: 'Wholesale inquiry',
      ctaRetail: 'Retail offer',
      imageAlt: 'Personalised doormat with company logo - Proxy d.o.o. Split',
      galleryAlts: [
        'Personalised doormat with Proxy logo',
        'Personalised doormat for hotels and restaurants - PRISTAV',
        'Custom doormat with venue text for hospitality',
        'Doormat with branded logo - Hotel AS',
        'Personalised doormats in a hospitality venue',
      ],
    },

    footer: {
      tag: 'Everything a home needs, since 2016.',
      channelsHead: 'Sales channels',
      contactHead: 'Contact',
      locationHead: 'Location',
      legalHead: 'Legal',
      contactRole: 'Management',
      channels: {
        wholesale: 'Wholesale (B2B)',
        retail: 'Retail (B2C)',
      },
      legal: {
        privacy: 'Privacy policy',
        cookies: 'Cookie policy',
        cookiePrefs: 'Cookie settings',
      },
      address: ['Solinska 49, Dujmovača', '21000 Split, Croatia'],
      rights: 'All rights reserved.',
      credit: ['Web design and maintenance ', 'KLIKOTEKA d.o.o.'],
      mapTitle: 'Proxy d.o.o. location on the map',
    },

    cookies: {
      title: 'Cookies on proxy1.hr',
      text: 'We use essential cookies to run the site. Analytics and statistics are used only with your consent. Read our',
      linkLabel: 'Cookie policy',
      accept: 'Accept',
      reject: 'Reject',
    },

    faq: {
      eyebrow: 'FAQ',
      title: ['Custom doormats and ', 'wholesale - frequently asked'],
      sub: 'Common questions about custom logo doormats and the Proxy d.o.o. wholesale channel.',
      items: [
        {
          q: 'How do I order a custom doormat with a logo?',
          a: 'Email info@proxy1.hr with your logo (vector SVG or PDF preferred), desired doormat size and approximate quantity. We prepare a design proposal, you approve the look and production starts. Lead time depends on quantity and design complexity.',
        },
        {
          q: 'What sizes of custom doormats are available?',
          a: 'Doormats are produced in standard and custom sizes. Typical dimensions are 60x90 cm, 80x120 cm and 100x150 cm, but we cut to entrance or reception measurements. Fibre density is matched to expected foot traffic.',
        },
        {
          q: 'Is there a minimum order quantity for a custom doormat?',
          a: 'We produce single doormats for offices, hotels and restaurants as well as bulk runs for hospitality chains and franchises. Wholesale terms and fixed unit pricing are agreed for larger volumes.',
        },
        {
          q: 'What can be printed on a doormat?',
          a: 'Company logos, venue names, slogans or welcome messages, combinations of text and graphics. Colours follow your brand identity. The design is confirmed before production.',
        },
        {
          q: 'Who can buy from Proxy wholesale?',
          a: 'Proxy wholesale is available to contracted partners: companies, hospitality businesses, hotels and institutions with approved wholesale access. The retail channel is open to everyone, with no contract or partner registration required.',
        },
        {
          q: 'How fast is delivery in Croatia?',
          a: 'Standard delivery is within 3 business days across Croatia. For custom doormats, lead time depends on design complexity and quantity and is confirmed at order.',
        },
      ],
    },
  },
}
