# SEO PLAN — proxy1.hr

> **Za Claude agente:** Ovaj file je izvor istine za SEO rad na proxy1.hr. Na početku sesije
> provjeri sekciju "Sljedeći koraci" i dospjele stavke. Nakon svake odrađene stavke ažuriraj
> status i upiši datum u Dnevnik. Sadržajne stranice se uređuju u `content/seo-pages.mjs`
> (generator: `scripts/build-seo-pages.mjs`), deploy = build + tar preko SSH (vidi CLAUDE.md).

**Cilj:** Novi maloprodajni partneri (B2B leadovi) + rast prodaje kroz organski promet.
**Ograničenje (vlasnik):** od 15.10.2026. postoji javni katalog BEZ cijena (/katalog/, 718 artikala), odluka vlasnika. Cijene, rabati i zalihe nikad ne idu javno.
**KPI:** ne-brendirani upiti u GSC · pozicije za "veleprodaja X" pojmove · klikovi na Postanite partner · mailovi na info@proxy1.hr

---

## Status napravljenog

| Datum | Što | Status |
|---|---|---|
| 16.07.2026 | Tehnički SEO: robots fix (/assets/), cache headeri, HSTS, sitemap | ✅ |
| 16.07.2026 | 12 HR stranica: postanite-partner, 8 kategorija, 3 vodiča | ✅ |
| 16.07.2026 | 9 EN stranica: become-a-partner + 8 kategorija, hreflang parovi | ✅ |
| 16.07.2026 | Galerije stvarnih proizvoda (ERP slike) na kategorijama | ✅ |
| 16.07.2026 | Interno linkanje: kartice kategorija, footer "Za trgovce" | ✅ |
| 16.07.2026 | Em-dashevi uklonjeni sa svih stranica | ✅ |
| 16.07.2026 | Sitemap resubmitan u GSC | ✅ |
| 16.07.2026 | GA4 očišćen od com-adria miješanja | ✅ |
| 04.09.2026 | P7 mjesečna provjera #1: live health, schema, hreflang, indeksiranost | ✅ (GSC/GA4 dio blokiran) |
| 14.10.2026 | P7 mjesečna provjera #2: live health, schema, hreflang, em-dash, P7a re-check | ✅ (GSC/GA4 i indeksiranost blokirani) |
| 20.10.2026 | P8 kvartalna provjera #1: brojke, rok isporuke, vodiči, konkurencija, re-check P7a/P7b | ✅ (GSC/GA4 i indeksiranost blokirani) |

---

## Sljedeći koraci

### P1 — Google Business Profile (vlasnik + korisnik) 🔴
- [ ] Vlasnik dodaje pristup (Google Business → Postavke → Korisnici) — **čeka vlasnika**
- [ ] Kategorija "Veleprodaja kućanskih potrepština", opis, radno vrijeme, fotke, link na /postanite-partner/
- [ ] 10–15 recenzija od najboljih partnera (komercijalist šalje direktan link)
- KPI: GBP vidljiv za "veleprodaja kućanstva split" u Maps

### P2 — NAP citati / direktoriji (korisnik, ~2h) — DETALJNE UPUTE
Svugdje upisati IDENTIČNO (kopiraj blok):
```
Naziv:   Proxy d.o.o.
Adresa:  Solinska 49, Dujmovača, 21000 Split
OIB:     79145895043
Email:   info@proxy1.hr
Web:     https://proxy1.hr
Opis:    Veleprodaja asortimana za kućanstvo i ugostiteljstvo. 700+ artikala,
         300+ partnera u Hrvatskoj. Vlastita izrada personaliziranih otirača
         s logotipom. Brza dostava po cijeloj Hrvatskoj. Osnovano 2016., bonitet A+.
Djelatnost: Trgovina na veliko kućanskim potrepštinama
```
- ⚠️ (20.10.) U opisu 800+ promijenjeno u 700+ (live od 15.10.: naslovnica 718 artikala, partner stranica i vodiči 700+).
- ⚠️ (14.10.) Iz bloka maknuto "Isporuka u 3 radna dana": vlasnik je 10.09.2026. rekao da se rok
  isporuke NE obećava u danima. Unose u direktorije teško je kasnije mijenjati, zato bez broja dana.
- [ ] **Fininfo** (fininfo.hr) — tvrtka već postoji u registru; klikni "Preuzmi tvrtku" / "Uredi podatke" → verifikacija emailom na službenu adresu → dodaj web, email i opis. Besplatno.
- [ ] **Poslovni.hr imenik** (poslovni.hr → Leksikon/Imenik tvrtki) — pronađi Proxy d.o.o. po OIB-u → "Ažuriraj podatke" → dodaj web + opis.
- [ ] **Zlatne stranice** (zlatnestranice.hr) — "Dodaj tvrtku" (besplatni osnovni unos) → kategorija "Kućanske potrepštine - veleprodaja" → NAP blok + link.
- [ ] **moja-djelatnost.hr** — registracija besplatnog profila → kategorija "Trgovina i usluge" → NAP + opis + 2-3 fotke skladišta.
- [ ] **Bizit.hr** — "Dodaj tvrtku" → osnovni besplatni profil s linkom.
- [ ] **HGK registar** (digitalnakomora.hr) — tvrtka je članica po sili zakona; prijavi se / zatraži pristup i dopuni profil (web, djelatnosti, opis).
- ⚠️ **Dvije adrese, ne miješati.** Sjedište po sudskom registru je *Ulica dr. Franje Tuđmana 13,
  21210 Solin*, a *Solinska 49, Dujmovača, 21000 Split* je poslovni prostor i skladište.
  U direktorije, Google Business i schemu ide **poslovni prostor (Split)**, jer se ondje posluje
  i to je adresa koju proxy1.hr već navodi. Sjedište (Solin) ide samo u impressum i pravne
  stranice. Ne "ispravljaj" jedno u drugo, oboje je točno na svom mjestu.
- ⚠️ Pravilo: svugdje ISTI podaci (bez varijacija adrese), uvijek https://proxy1.hr kao web.
- KPI: 6 živih citata s linkom u 30 dana

### P3 — Telefon na stranici (čeka vlasnika)
- [ ] Vlasnik odobri javni broj → dodati na /postanite-partner/, footer, LocalBusiness schemu, GBP
- Razlog: B2B leadovi zovu; samo-email gubi dio upita

### P4 — Case study + digital PR (mjesec 1–2)
- [ ] Napisati: "Personalizirani otirači za Hotel More 5★" (fotke postoje u galeriji otirača)
- [ ] Ponuditi: Slobodna Dalmacija (poslovni), Dalmacija Danas, turistički portali
- KPI: 1–2 backlinka s .hr medija

### P5 — Linkovi iz vlastitog ekosustava
- [ ] veleprodaja.proxy1.hr footer → linkovi na proxy1.hr kategorije (tema: v16/proxy-b2b-theme)
- [ ] maloprodaja.proxy1.hr footer → isto
- [ ] com-adria.hr (KLIKOTEKA održava) → "partner" link u footeru

### P6 — Novi vodiči (1–2 mjesečno; agent: seo-content-writer)
Redoslijed po prilici (sezona!):
- [ ] "Oprema za apartmane: checklist za iznajmljivače" — CILJATI PRIJE SEZONE (veljača–travanj)
- [ ] "Kako opremiti restoran inox priborom: količine po broju stolova"
- [ ] "Sezonski kalendar police za trgovinu kućanstva"
- Konvencije: u `content/seo-pages.mjs`, type:'guide', BEZ em-dasheva, FAQ sekcija, interni linkovi na kategorije, CTA na postanite-partner

### P7. Mjesečna rutina (agent: seo-caretaker; sljedeći due: 14.11.2026.)
Zadnje odrađeno: 14.10.2026. (drugi ciklus, kasnio 10 dana od 04.10.). Prije toga 04.09.2026.
- [x] Live provjera (14.10.): svih 25 proxy1.hr URL-ova iz sitemapa vraća 200; JSON-LD validan (0 parse grešaka, 75 blokova na 25 stranica); hreflang parovi recipročni s x-default na 18 stranica; canonical ispravan na svih 23 SEO/naslovnicama; 0 em-dasheva na 21 SEO stranici + naslovnicama
- [ ] Indeksiranost (14.10.): NIJE provjerljiva bez GSC-a. Bing preko WebFetcha vraća nepovezane rezultate (bot tretman), DDG traži captchu, Google consent preusmjerava. Jedini pouzdan izvor je GSC
- [ ] GSC: indeksiranost 21 stranice, novi upiti (posebno ne-brendirani), pozicije. **Čeka pristup korisnika** (browser login)
- [ ] GA4: hostname čist (com-adria repić mrtav?), posjete na /postanite-partner/. **Čeka pristup korisnika** (browser login)
- [ ] FAQ dopune prema stvarnim GSC upitima. Blokirano dok nema GSC podataka. Priprema: 8 HR i 8 EN kategorija ima samo 1 pitanje, tu je najviše prostora
- [x] Ažurirati ovaj file (Dnevnik + statusi)

### P7a. Nalazi provjere 04.09.2026. (1, 2, 3 i 8 riješeni 05.09. i deployani) 🟡
Redoslijed po utjecaju:
1. [x] **/en/ servira hrvatski JSON-LD.** RIJEŠENO 05.09. Naslovnica /en/ ima `lang="en"` i engleski vidljivi tekst, ali FAQPage (svih 6 pitanja), ItemList, Service i Organization description su na hrvatskom. Uzrok: `scripts/build-en-index.mjs` zamjenjuje samo meta tagove, JSON-LD kopira doslovno. Posljedica: schema ne odgovara vidljivom sadržaju. Riješeno novim korakom `scripts/build-schema-i18n.mjs` u `npm run build`: FAQPage se GENERIRA iz `src/i18n/index.js` (hr za naslovnicu, en za /en/), ostali blokovi idu kroz tablicu prijevoda. Skripta PADA ako u EN shemi zaostane hrvatski, pa se kvar ne može tiho vratiti.
2. [x] **FAQ neslaganje na naslovnici (HR).** RIJEŠENO 05.09. Schema u `index.html` (linija 224) pita "U koje vrijeme isporučujete robu u Hrvatskoj?", a React renderira "U kojem roku isporučujete robu u Hrvatskoj?" (`src/i18n/index.js`). Riješeno u korijenu istim korakom: schema se više ne prepisuje ručno nego se crta iz i18n-a, iz istog izvora iz kojeg React crta pitanja. Razilaženje više nije moguće.
3. [x] **maloprodaja.proxy1.hr u sitemapu vraća 503.** RIJEŠENO 05.09. Stranica je "Uskoro otvaramo" s `noindex, nofollow` i `Retry-After: 86400`. URL s greškom u sitemapu kvari izvještaj Sitemaps u GSC-u. Izbačen iz `public/sitemap.xml`, na mjestu unosa stoji komentar zašto i kada ga vratiti. Sitemap sada ima 26 URL-ova.
Stavke 4 do 7 ponovno provjerene uživo 20.10.2026.: 5 i 6 riješene redizajnom 15.10., 4 i 7 i dalje otvorene.
4. [ ] **Legacy WordPress URL još u indeksu.** `proxy1.hr/kategorija-proizvoda/posude/` je u Bing indeksu, a vraća 404. Fix: nginx 301 s `/kategorija-proizvoda/posude/` na `/veleprodaja-posuda/` (i općenito pravilo za taj prefiks).
5. [x] (riješeno 15.10., potvrđeno 20.10.: 0 linkova bez kose crte) **Interni linkovi bez kose crte.** Naslovnica, /en/ i politika-kolacica linkaju na `/politika-privatnosti` i `/politika-kolacica` bez završne kose crte, što radi nepotreban 301 skok. Fix: dodati kosu crtu u `src/components/Footer.jsx` i pravnim predlošcima.
6. [x] (riješeno 15.10., potvrđeno 20.10.: 0 em-dasheva) Em-dashevi (3 komada) na `/politika-privatnosti/` i `/politika-kolacica/`. Nisu SEO stranice, ali krše pravilo projekta.
7. [ ] (20.10. i dalje: `/images/*` i dalje šalju dva Cache-Control headera) Duplicirani `Cache-Control` header na `/assets/` (nginx šalje i `expires` i `add_header`). Bezopasno, ali čisto je čisto.
8. [x] ⚠️ **Prije bilo kakvog deploya: `npm run build`.** PROVJERENO 05.09. Lokalni `dist/` je stariji od produkcije (nema Klikoteka credit link iz commita 2b4b8cc, a njegov JS bundle vraća 404 na produkciji). Tarati postojeći `dist/` bi vratilo site unatrag. Nakon `npm run build` lokalni bundle je `index-DWwR-FKA.js`, isti kao na produkciji, dakle izvor JE u sinkronizaciji i zamka je bila samo u starom `dist/`.

### P7b. Nalazi provjere 14.10.2026. (re-check 20.10.: 3 i 4 riješeni, 1 djelomično) 🔴
Redoslijed po utjecaju:
1. [ ] **(20.10. DJELOMIČNO: čišćenje 15.10. propustilo meta opise.** Live je ostalo 24 pojavljivanja na 10 stranica: meta/og description + JSON-LD description na HR `/veleprodaja-sredstava-za-ciscenje/`, `/veleprodaja-posuda/`, `/veleprodaja-drvene-galanterije/`, `/veleprodaja-spremanja-ormara/` ("isporuka (u) 3 dana") i EN cleaning-supplies, cookware, wooden-kitchenware, closet-storage ("Delivery in 3 days"), plus tijelo teksta na EN household-textiles i home-equipment ("delivered within 3 working days"). Izvor: `content/seo-pages.mjs` retci 71, 108, 170, 265, 537, 571, 636, 674, 734, 772. Naslovnice su čiste. Mrtvi kod `src/i18n/index.js` i `index.html` još ima "3 radna dana" i "800+", ne ide na live, ali treba očistiti da se ne vrati.) **Stranice obećavaju rok "3 radna dana", a vlasnik je 10.09.2026. rekao da se rok NE obećava u danima** ("Brza dostava", nikad broj dana). Live: oko 20 pojavljivanja na HR stranicama (meta description kategorija "Isporuka u 3 dana", FAQ odgovori u JSON-LD, tekst "isporuka u 3 radna dana") i 18 na EN ("3 working days", "Delivery in 3 days"). U `content/seo-pages.mjs` 17 redaka, plus naslovnica (`src/i18n/index.js` / `index.html` FAQ "Standardno isporučujemo u roku od 3 radna dana"). Iznimka koja smije ostati: vodič "Standard za Hrvatsku je 2–5 radnih dana" (opća tvrdnja o tržištu, ne obećanje). **Prije izmjene potvrditi s vlasnikom formulaciju** (npr. "brza dostava po cijeloj Hrvatskoj").
2. [ ] **Kategorija "Veleprodaja sredstava i opreme za čišćenje" kosi se s vlasnikovom izjavom 10.09.2026.** da se prodaje PRIBOR, ne sredstva/kemija. Title i H1 na `/veleprodaja-sredstava-za-ciscenje/` kažu "sredstava", EN "cleaning supplies" (manji problem, "supplies" je neutralno). Meta description već nabraja samo pribor (mopovi, metle, četke...). Prijedlog: title/H1 u "Veleprodaja pribora i opreme za čišćenje"; **slug NE mijenjati** sada (stranica možda ima signale), ili ga promijeniti uz 301 tek kad GSC pokaže stanje. Odluka korisnika.
3. [x] (riješeno 15.10., potvrđeno 20.10.: sitemap ima samo proxy1.hr adrese) **`https://veleprodaja.proxy1.hr/` u sitemapu sada vraća 302** na `/b2b-prijava/`, koja je `noindex, nofollow`. U rujnu je bila 200. Uz to je URL drugog hosta u sitemapu proxy1.hr (GSC ga prihvaća samo ako su oba propertyja verificirana). Prijedlog: izbaciti iz `public/sitemap.xml` (isto kao maloprodaja 05.09.), ostaviti samo interni link.
4. [x] (riješeno 15.10., potvrđeno 20.10.; maloprodaja.proxy1.hr se više ne spominje) Pravne stranice (`/politika-privatnosti/`, `/politika-kolacica/`) nemaju `rel=canonical`. Niski prioritet, rješava se zajedno s P7a 5 i 6.
5. [ ] Brotli i dalje nije aktivan (samo gzip, potvrđeno 20.10.). Niski prioritet, nginx modul.
6. [ ] (novo 20.10.) **`/veleprodaja-otiraca/` i `/en/wholesale-doormats/` i dalje tvrde "60×90, 80×120 i 100×150" i "100+ modela"** (otvoreno iz Dnevnika 15.10.). Uskladiti s otiraci.proxy1.hr (17 mjera) i smanjiti kanibalizaciju. Linkovi na poddomenu postoje (4 HR, 3 EN).
7. [ ] (novo 20.10.) Footer na svim stranicama: "© 2026 Proxy d.o.o.. Web dizajn" (dvije točke, jer naziv već završava točkom). Izvor `scripts/lib/okvir.mjs` redak 178. Kozmetika.

### P8. Kvartalno (sljedeći due: 16.01.2027.)
Zadnje odrađeno: 20.10.2026. (prvi ciklus, kasnio 4 dana od 16.10.).
- [ ] Vodiči: dateModified + sadržajno osvježenje. Stanje 20.10.: sva 3 vodiča imaju datePublished = dateModified = 2026-07-16 i "Objavljeno: 16. srpnja 2026.", iako je 15.10. tekst mijenjan (700+, link na /katalog/). Prijedlog: dateModified na stvarni datum izmjene u generatoru. U siječnju 2027. naslov "vodič za 2026." prebaciti na 2027. uz stvarnu reviziju sadržaja. Vodiči linkaju samo na /katalog/, ne na pripadne skupine; dodati 2-3 linka na skupine.
- [x] Brojke provjerene 20.10.: naslovnica HR/EN 718 artikala i "više od 300 partnera"/300+; partner stranice i vodič 700+ artikala, 300+ partnera; kategorije 70+ do 220+. Dosljedno. NAP blok u P2 ažuriran na 700+. Rok isporuke: vidi P7b 1 (djelomično). "Sredstva": vidi P7b 2 (title/H1 i dalje "sredstava", čeka odluku).
- [x] Konkurencija 20.10.: berliner.hr ima 5000+ proizvoda, javni popis artikala BEZ cijena ("Registrirajte se za cijene!", odobrenje računa), Be:brands vlastite marke, aplikacija; novosti zadnje iz 11/2024, nema sadržajnog SEO-a ni partner programa. ultragros.hr NIJE stvarni konkurent: udruženje trgovačkih kuća (prehrana, vlastite marke, 600+ proizvoda), zadnja novost 17.06.2026. Prijedlog: za idući kvartal zamijeniti ultragros.hr pravim konkurentom iz SERP-a za "veleprodaja kućanskih potrepština" (odluka korisnika).

---

## Dnevnik

- **16.07.2026** — Inicijalni plan. Tehnički SEO + 21 stranica live. GSC baseline: 183 klika/3mj, svi upiti brendirani, 5 indeksiranih stranica. Sitemap resubmitan.

- **04.09.2026.** P7 mjesečna provjera #1 (kasnila 19 dana od prvog due 16.08.).
  **Live health OK:** svih 27 URL-ova iz sitemapa provjereno, 26 vraća 200. Jedini izuzetak je
  maloprodaja.proxy1.hr (503, namjerno "Uskoro otvaramo"). robots.txt ne blokira /assets/,
  AI crawleri i dalje eksplicitno dopušteni. sitemap.xml je dobro formiran XML, 27 URL-ova,
  bez duplikata. Preusmjeravanja ispravna: http na https, www na non-www, bez kose crte na
  verziju s kosom crtom, sve 301. HSTS, X-Frame-Options i nosniff prisutni. gzip aktivan,
  brotli nije. TTFB oko 230 ms. Sve slike imaju alt. 404 vraća pravi 404, nema soft-404.
  **Schema:** 79 JSON-LD blokova, 0 grešaka u parsanju. Svih 34 FAQ pitanja na 21 statičkoj
  SEO stranici poklapa se s vidljivim tekstom. Naslovnice su iznimka, vidi P7a 1 i 2.
  **Sadržaj:** 0 em-dasheva na 21 SEO stranici (3 zaostala na pravnim stranicama).
  En-dashevi u vodičima su brojčani rasponi ("2-5 radnih dana"), tipografski ispravni.
  hreflang parovi recipročni s x-default na svih 18 stranica s parom. Brojke 800+ artikala
  i 300+ partnera dosljedne na HR i EN, poklapaju se s ovim planom.
  **Indeksiranost (Bing/DDG, jer GSC nije dostupan):** vidljivo indeksirano 9 URL-ova, i to
  naslovnica, /en/, /en/become-a-partner/ i 6 EN kategorija. Nijedna HR kategorija ni vodič
  nije se pojavio u tom indeksu. Ovo je slab signal (Bing nije Google) i traži potvrdu u GSC-u.
  Google site: upit blokiran consent preusmjeravanjem, scraping SERP-a nepouzdan.
  Za ne-brendirane pojmove "veleprodaja otirača" i "veleprodaja kućanskih potrepština"
  proxy1.hr nije u prvih 12 rezultata; berliner.hr drži vrh (poklapa se s P8 popisom konkurencije).
  **Nalazi za popravak:** 8 stavki upisano u novu sekciju P7a. Najozbiljnije je da /en/
  naslovnica servira hrvatski JSON-LD.
  **Ništa nije deployano.** Sve provjere su bile read-only.
  **Čeka korisnika:** GSC i GA4 traže browser login, popis konkretnih upita je u izvještaju.

- **05.09.2026.** Popravljeni P7a 1, 2, 3 i 8, buildano i deployano na proxy1.hr
  (uz kopiju stare mape u `dist-backup-*`). Provjereno uživo: `/en/` sada servira
  englesku Organization description i engleskih 6 FAQ pitanja; HR naslovnica pita
  "U kojem roku isporučujete robu u Hrvatskoj?", isto kao vidljivi tekst; sitemap
  ima 26 URL-ova bez maloprodaje. Novi build korak `scripts/build-schema-i18n.mjs`
  drži schemu i vidljivi tekst na istom izvoru i ruši build ako u EN shemi zaostane
  hrvatski. Ostaju otvoreni P7a 4, 5, 6 i 7 (nginx 301, kose crte, em-dashevi,
  dupli Cache-Control) i GSC/GA4 provjere koje traže prijavu vlasnika.

- **14.09.2026.** Sadržajna izmjena naslovnice (zahtjev vlasnika): u FAQ odgovoru
  "Što se sve može staviti na otirač?" riječ "znaka" zamijenjena s "logotipa"
  (i18n + JSON-LD u `index.html`, ista promjena u oba), a galerija otirača dobila
  četiri vlastite fotografije vlasnika (`otirac-9` do `otirac-12`, jpg + webp) na
  prvim mjestima, s HR i EN alt/title tekstovima. Buildano i deployano na proxy1.hr
  (stara mapa u `dist-old-20260914`). Nema promjene URL-ova ni sitemapa.

- **14.10.2026.** P7 mjesečna provjera #2 (kasnila 10 dana od due 04.10.). Sve read-only,
  ništa nije deployano.
  **Live health OK:** sitemap.xml je dobro formiran XML s 26 URL-ova; svih 25 proxy1.hr
  URL-ova vraća 200 (TTFB oko 220 ms). Jedini izuzetak je `https://veleprodaja.proxy1.hr/`,
  koja sada vraća 302 na noindex prijavu (P7b 3). robots.txt ne blokira /assets/, AI crawleri
  dopušteni, sitemap naveden.
  **Schema i hreflang:** 75 JSON-LD blokova na 25 stranica, 0 grešaka; naslovnice HR/EN imaju
  6 blokova (Organization/LocalBusiness, WebSite, Service, ItemList, FAQPage, BreadcrumbList),
  kategorije i partner stranice Breadcrumb + Service + FAQPage, vodiči Breadcrumb + Article +
  FAQPage. hreflang hr/en/x-default recipročan na svih 18 stranica s parom, canonical ispravan,
  `lang` ispravan na HR i EN.
  **Sadržaj:** 0 em-dasheva na SEO stranicama i naslovnicama; 3 i dalje na pravnim stranicama
  (P7a 6). Brojke 800+ artikala i 300+ partnera dosljedne. **Novo:** stranice obećavaju
  "3 radna dana", što se kosi s vlasnikovom odlukom od 10.09. (P7b 1), a kategorija čišćenja
  u naslovu govori o "sredstvima" iako Proxy prodaje pribor (P7b 2). Iz NAP bloka u P2
  maknuto "Isporuka u 3 radna dana" da ne ode u direktorije.
  **P7a 4 do 7:** i dalje otvoreni (legacy URL 404, linkovi bez kose crte, em-dashevi na
  pravnim stranicama, dupli Cache-Control).
  **Indeksiranost:** ovaj put nije bilo moguće izmjeriti. Bing preko WebFetcha vraća
  nepovezane rezultate, DDG captcha, Google consent. Treba GSC.
  **Čeka korisnika:** GSC i GA4 (browser login), odluke za P7b 1 i 2, P1/P2/P3.
  **Nadolazeće:** P8 kvartalno dospijeva 16.10.2026. Sljedeći P7: 14.11.2026.

- **15.10.2026. otiraci.proxy1.hr naslovnica (v5).** Istraživanje google.hr: mi smo #2 za
  „otirači s logotipom", oko #8 „otirač/i s logom", oko #4 „reklamni otirači"; nema nas za
  „otirač s logom cijena", „otirači po mjeri", „otirači za tvrtke". Glavni konkurenti: cws.com/hr,
  salesianer.hr (najam), seventex.si/hr (najjači SEO, cijena od 52 €), hausdekore.hr (konfigurator).
  Napravljeno: title „Otirači s logotipom po mjeri | Besplatna dostava | Proxy", nova meta,
  H1 „Otirači s logotipom po mjeri", H2-ovi s ključnim riječima, FAQ (7 pitanja) + FAQPage shema,
  Organization (logo, sjedište Solin) + WebSite shema, Product seller → Organization (bio „Split"),
  favicon/icon/apple-icon (bio Vercelov trokut), OG slika. Prednost „kupnja, ne najam" istaknuta.
  **Otvoreno:** proxy1.hr/veleprodaja-otiraca kanibalizira i tvrdi „60×90, 80×120, 100×150" i
  „100+ modela" (ne vrijedi za 17 mjera) → uskladiti i linkati na poddomenu. U GSC zatražiti
  ponovno indeksiranje (stari snippet „Tri modela, 79 nijansi").

- **15.10.2026. proxy1.hr preuređen + javni katalog.** Cijela stranica je sada statička (scripts/build-site.mjs + scripts/lib/okvir.mjs + public/site.css), dizajn kao otiraci.proxy1.hr (Lato, navy/zlatna, bez sjena i obrva). Maloprodaja maknuta iz priče (izbornik, kartice, llms.txt, schema sameAs). Novi javni katalog BEZ cijena: /katalog/, 10 skupina, 718 stranica artikala (BreadcrumbList), svaki artikl vodi na upit za ovlaštenog kupca (Robert + komercijalisti). Sitemap 754 adrese. SEO tekstovi: maknuta obećanja "isporuka u 3 radna dana" (rok se ne obećava), 800+ → 700+. SEO stranice kategorija linkaju na pripadnu skupinu kataloga.
  **Sljedeće:** u GSC poslati novi sitemap i pratiti indeksiranje /katalog/ (718 novih URL-ova); politika privatnosti i kolačića još spominju maloprodaja.proxy1.hr (pravni tekst, čeka odluku).
- **15.10.2026. (2) katalog: opisi za SEO.** 549 artikala bez opisa ili s kratkom napomenom dobilo je opis (19 do 78 riječi, medijan 59) iz naziva, skupine i pakiranja, bez izmišljenih specifikacija; ponavljane opće rečenice (12+ pojavljivanja) izbačene. ERP opisi očišćeni (slijepljene rečenice). Naslovnica: video izrade otirača, nova B2B sekcija (naručivanje 24 h, rabati, odgoda plaćanja, besplatna dostava iznad 100 €), slogan "Sve što dom treba". Robertov broj maknut s javnih stranica.
- **20.10.2026.** P8 kvartalna provjera #1 (kasnila 4 dana od due 16.10.). Sve read-only,
  ništa nije deployano ni mijenjano na serveru.
  **Live health OK:** sitemap.xml dobro formiran, 754 adrese (25 stranica + 729 katalog), sve
  vraćaju 200, samo proxy1.hr host. robots.txt ne blokira ništa osim /healthz, AI crawleri
  dopušteni. http i www na https non-www 301, stranica bez kose crte 301, nepostojeći URL
  pravi 404, TTFB oko 240 ms. Uzorak 14 stranica kataloga: 0 em-dasheva, 0 cijena,
  canonical ispravan, index/follow.
  **Kvaliteta:** 0 em-dasheva na svih 25 stranica. hreflang hr/en/x-default i canonical
  ispravni na naslovnici, /postanite-partner/, /veleprodaja-posuda/ i EN paru.
  **Re-check:** P7a 5 i 6, P7b 3 i 4 riješeni redizajnom 15.10. Otvoreno: P7a 4 (legacy
  /kategorija-proizvoda/posude/ i dalje 404), P7a 7 (dupli Cache-Control na /images/),
  P7b 5 (brotli). **P7b 1 samo djelomično:** "3 dana" ostao u meta opisima i schema
  description na 8 kategorija i u tekstu 2 EN stranice (24 pojavljivanja na 10 stranica).
  **P8:** brojke dosljedne (718 / 700+ / 300+), NAP blok ažuriran na 700+; vodiči bez
  ažuriranog dateModified; konkurencija pregledana (vidi P8). Novo: P7b 6 (tvrdnje o
  otiračima) i P7b 7 (dupla točka u footeru).
  **Indeksiranost:** ni ovaj put nije mjerljiva (Bing preko WebFetcha vraća nepovezane
  rezultate). Treba GSC, posebno za 729 novih /katalog/ adresa.
  **Čeka korisnika:** GSC i GA4 (browser login), odluka za P7b 2 i formulacija za P7b 1,
  P1/P2/P3. **Sljedeće:** P7 14.11.2026., P8 16.01.2027.
