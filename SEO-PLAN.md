# SEO PLAN — proxy1.hr

> **Za Claude agente:** Ovaj file je izvor istine za SEO rad na proxy1.hr. Na početku sesije
> provjeri sekciju "Sljedeći koraci" i dospjele stavke. Nakon svake odrađene stavke ažuriraj
> status i upiši datum u Dnevnik. Sadržajne stranice se uređuju u `content/seo-pages.mjs`
> (generator: `scripts/build-seo-pages.mjs`), deploy = build + tar preko SSH (vidi CLAUDE.md).

**Cilj:** Novi maloprodajni partneri (B2B leadovi) + rast prodaje kroz organski promet.
**Ograničenje (vlasnik):** NEMA javnog kataloga proizvoda (tajnost od konkurencije).
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
Opis:    Veleprodaja asortimana za kućanstvo i ugostiteljstvo. 800+ artikala,
         300+ partnera u Hrvatskoj. Vlastita izrada personaliziranih otirača
         s logotipom. Isporuka u 3 radna dana. Osnovano 2016., bonitet A+.
Djelatnost: Trgovina na veliko kućanskim potrepštinama
```
- [ ] **Fininfo** (fininfo.hr) — tvrtka već postoji u registru; klikni "Preuzmi tvrtku" / "Uredi podatke" → verifikacija emailom na službenu adresu → dodaj web, email i opis. Besplatno.
- [ ] **Poslovni.hr imenik** (poslovni.hr → Leksikon/Imenik tvrtki) — pronađi Proxy d.o.o. po OIB-u → "Ažuriraj podatke" → dodaj web + opis.
- [ ] **Zlatne stranice** (zlatnestranice.hr) — "Dodaj tvrtku" (besplatni osnovni unos) → kategorija "Kućanske potrepštine - veleprodaja" → NAP blok + link.
- [ ] **moja-djelatnost.hr** — registracija besplatnog profila → kategorija "Trgovina i usluge" → NAP + opis + 2-3 fotke skladišta.
- [ ] **Bizit.hr** — "Dodaj tvrtku" → osnovni besplatni profil s linkom.
- [ ] **HGK registar** (digitalnakomora.hr) — tvrtka je članica po sili zakona; prijavi se / zatraži pristup i dopuni profil (web, djelatnosti, opis).
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

### P7 — Mjesečna rutina (agent: seo-caretaker; prvi due: 16.08.2026.)
- [ ] GSC: indeksiranost 21 stranice, novi upiti (posebno ne-brendirani), pozicije
- [ ] GA4: hostname čist (com-adria repić mrtav?), posjete na /postanite-partner/
- [ ] Live provjera: sve stranice 200, schema validna, nema em-dasheva
- [ ] FAQ dopune prema stvarnim GSC upitima
- [ ] Ažurirati ovaj file (Dnevnik + statusi)

### P8 — Kvartalno (prvi due: 16.10.2026.)
- [ ] Vodiči: dateModified + sadržajno osvježenje
- [ ] Brojke (artikli/partneri) provjeriti i ažurirati svugdje
- [ ] Konkurencija: berliner.hr, ultragros.hr — što su novo objavili?

---

## Dnevnik

- **16.07.2026** — Inicijalni plan. Tehnički SEO + 21 stranica live. GSC baseline: 183 klika/3mj, svi upiti brendirani, 5 indeksiranih stranica. Sitemap resubmitan.
