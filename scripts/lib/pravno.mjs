/**
 * Politika privatnosti i politika kolačića za proxy1.hr.
 *
 * Tekst opisuje ono što stranica STVARNO radi (provjereno 15.10.2026.):
 *   - poslužitelj: Hetzner, podatkovni centar u Finskoj (EU); pristupni zapisi
 *     isključeni, zapisi grešaka rotiraju se dnevno i čuvaju 52 dana
 *   - e-pošta @proxy1.hr: Zoho, EU podatkovni centri (mx.zoho.eu)
 *   - fontovi s vlastitog poslužitelja, bez karata i ugrađenih sadržaja trećih
 *   - Google Analytics 4 tek nakon "Prihvati" (public/consent.js, verzija 2)
 * Promjena bilo čega od navedenog traži izmjenu i ovog teksta.
 */
import { esc } from './okvir.mjs'

export const AZURIRANO = '15. listopada 2026.'

/** Tablica koja se na mobitelu slaze u kartice (oznaka stupca uz svaku vrijednost). */
const tab = (stupci, redovi) =>
  `<table class="kartice"><thead><tr>${stupci.map((c) => `<th scope="col">${c}</th>`).join('')}</tr></thead><tbody>${redovi
    .map((r) => `<tr>${r.map((v, i) => `<td data-oznaka="${stupci[i]}">${v}</td>`).join('')}</tr>`)
    .join('')}</tbody></table>`

const VODITELJ = `<table>
<tr><th scope="row">Naziv</th><td>Proxy d.o.o.</td></tr>
<tr><th scope="row">Sjedište</th><td>Ulica dr. Franje Tuđmana 13, 21210 Solin</td></tr>
<tr><th scope="row">Poslovni prostor i skladište</th><td>Solinska 49, Dujmovača, 21000 Split</td></tr>
<tr><th scope="row">OIB</th><td>79145895043</td></tr>
<tr><th scope="row">Matični broj</th><td>04548582, Trgovački sud u Splitu</td></tr>
<tr><th scope="row">E-pošta za privatnost</th><td><a href="mailto:info@proxy1.hr">info@proxy1.hr</a></td></tr>
</table>`

const PRAVA = `<ul>
<li><strong>pristup</strong> podacima koje o vama obrađujemo (čl. 15.),</li>
<li><strong>ispravak</strong> netočnih podataka (čl. 16.),</li>
<li><strong>brisanje</strong> (čl. 17.),</li>
<li><strong>ograničenje obrade</strong> (čl. 18.),</li>
<li><strong>prenosivost</strong> podataka (čl. 20.),</li>
<li><strong>prigovor</strong> na obradu koja se temelji na legitimnom interesu (čl. 21.),</li>
<li><strong>povlačenje privole</strong> u svako doba, bez utjecaja na zakonitost obrade prije povlačenja.</li>
</ul>
<p>Zahtjev pošaljite na <a href="mailto:info@proxy1.hr">info@proxy1.hr</a>. Odgovaramo bez odgode, a najkasnije u roku od mjesec dana. Ako smatrate da obrada nije u skladu s propisima, možete podnijeti pritužbu Agenciji za zaštitu osobnih podataka, Selska cesta 136, 10000 Zagreb, <a href="https://azop.hr/">azop.hr</a>.</p>`

export function privatnostProxy1() {
  return `
<p class="lede">Ova politika objašnjava koje osobne podatke obrađuje stranica proxy1.hr, zašto, koliko dugo i koja su vaša prava. Usklađena je s Općom uredbom o zaštiti podataka (GDPR, Uredba (EU) 2016/679) i Zakonom o provedbi Opće uredbe o zaštiti podataka.</p>
<p class="datum">Zadnja izmjena: ${AZURIRANO}</p>
<div class="sadrzaj">
<h2>1. Voditelj obrade</h2>
${VODITELJ}

<h2>2. Što obrađujemo i zašto</h2>
<h3>2.1. Posjet stranici</h3>
<p>Stranicu i katalog možete pregledavati bez prijave i bez ostavljanja ikakvih podataka. Poslužitelj ne vodi zapise o posjetima. Bilježi samo greške u radu (vrijeme, tražena adresa i IP adresa s koje je zahtjev došao), da bismo mogli otkloniti kvar ili spriječiti zlouporabu.</p>
<ul>
<li>Pravna osnova: legitimni interes za siguran i ispravan rad stranice (čl. 6. st. 1. (f) GDPR-a).</li>
<li>Rok čuvanja: zapisi grešaka brišu se automatski nakon 52 dana.</li>
</ul>

<h3>2.2. Upit za ovlaštenog kupca i druga komunikacija</h3>
<p>Kad nam pišete ili nas nazovete, na primjer gumbom „Postanite ovlašteni kupac“ uz artikl u katalogu, obrađujemo podatke koje nam sami pošaljete: ime i prezime kontakt osobe, naziv tvrtke, OIB, mjesto, broj telefona, adresu e-pošte i sadržaj poruke.</p>
<ul>
<li>Svrha: odgovor na upit, dogovor uvjeta i otvaranje računa u veleprodajnom webshopu.</li>
<li>Pravna osnova: radnje prije sklapanja ugovora na vaš zahtjev (čl. 6. st. 1. (b) GDPR-a).</li>
<li>Rok čuvanja: ako suradnja ne započne, poruke brišemo najkasnije 24 mjeseca nakon zadnjeg kontakta. Ako započne, podaci postaju dio poslovne dokumentacije i čuvaju se onoliko koliko propisi traže za tu dokumentaciju.</li>
</ul>

<h3>2.3. Analitika, samo uz vašu privolu</h3>
<p>Ako na traci za kolačiće odaberete „Prihvati analitiku“, koristimo Google Analytics 4 da vidimo koje se stranice čitaju i kako posjetitelji dolaze do nas. Bilježe se podaci o pregledanim stranicama, vrsti uređaja i preglednika, približnoj lokaciji (država, grad) i izvoru posjeta. Google Analytics 4 ne sprema IP adrese.</p>
<ul>
<li>Pravna osnova: vaša privola (čl. 6. st. 1. (a) GDPR-a).</li>
<li>Bez privole se Google Analytics uopće ne učitava i stranica s Googleom ne razmjenjuje nikakve podatke.</li>
<li>Privolu povlačite u svako doba poveznicom „Postavke kolačića“ u podnožju stranice. Tada brišemo i analitičke kolačiće s vašeg uređaja.</li>
<li>Rok čuvanja: podaci u Google Analyticsu brišu se nakon 14 mjeseci.</li>
</ul>

<h3>2.4. Što ne radimo</h3>
<p>Ne koristimo oglašivačke kolačiće, piksele društvenih mreža ni praćenje između stranica. Ne prodajemo podatke i ne donosimo automatizirane odluke ni profiliranje koje bi na vas imalo pravni ili sličan učinak.</p>

<h2>3. Primatelji podataka</h2>
<p>Podatke vide samo zaposlenici Proxyja kojima su potrebni za posao i sljedeći izvršitelji obrade, s kojima imamo ugovor o obradi podataka:</p>
${tab(["Izvršitelj", "Usluga", "Gdje"], [["Hetzner Online GmbH, Njemačka", "poslužitelj na kojem radi stranica", "podatkovni centar u Finskoj (EU)"], ["Zoho Corporation B.V., Nizozemska", "e-pošta @proxy1.hr", "podatkovni centri u EU"], ["Google Ireland Limited, Irska", "Google Analytics 4, samo uz privolu", "EU; vidi točku 4."]])}

<h2>4. Prijenos izvan Europskog gospodarskog prostora</h2>
<p>Jedini mogući prijenos je za Google Analytics, i to samo ako ste dali privolu: Google podatke može obrađivati i kod Google LLC u SAD-u. Google LLC je certificiran u okviru EU-SAD okvira za privatnost podataka (Data Privacy Framework), za koji je Europska komisija donijela odluku o primjerenosti.</p>

<h2>5. Vaša prava</h2>
${PRAVA}

<h2>6. Sigurnost</h2>
<p>Stranica radi isključivo preko HTTPS-a. Poslužitelj se redovito ažurira, broj zahtjeva je ograničen radi zaštite od zlouporabe, a pristup podacima imaju samo osobe kojima je potreban za posao.</p>

<h2>7. Druge naše stranice</h2>
<p>Veleprodajni webshop (veleprodaja.proxy1.hr) i dizajner otirača (<a href="https://otiraci.proxy1.hr/privatnost">otiraci.proxy1.hr</a>) imaju vlastite politike privatnosti, jer ondje obrađujemo i podatke o narudžbama i korisničkim računima.</p>

<h2>8. Izmjene</h2>
<p>Politiku mijenjamo kad se promijeni način obrade. Datum zadnje izmjene stoji na vrhu. O bitnim izmjenama obavijestit ćemo na stranici, a ako se izmjena tiče analitike, traka za kolačiće ponovno će tražiti vaš odabir.</p>
</div>`
}

export function kolaciciProxy1() {
  return `
<p class="lede">Na proxy1.hr koristimo samo ono što je nužno za rad stranice. Analitičke kolačiće postavljamo tek kad na to pristanete. Oglašivačke kolačiće ne koristimo.</p>
<p class="datum">Zadnja izmjena: ${AZURIRANO}</p>
<p class="gumbi" style="margin-top:24px"><button type="button" class="btn btn-navy" onclick="window.proxyOpenConsent&&window.proxyOpenConsent()">Promijenite postavke kolačića</button></p>
<div class="sadrzaj">
<h2>1. Što su kolačići</h2>
<p>Kolačići su male datoteke koje stranica sprema u vaš preglednik. Slično radi i lokalna pohrana preglednika (localStorage). U ovoj politici obje tehnologije zovemo kolačićima.</p>

<h2>2. Nužni zapis, bez privole</h2>
<p>Potreban je da bi stranica zapamtila vaš odabir. Za strogo nužne zapise privola se ne traži, prema Zakonu o elektroničkim komunikacijama i Direktivi o privatnosti i elektroničkim komunikacijama.</p>
${tab(["Naziv", "Vrsta", "Svrha", "Trajanje"], [["proxy_cookie_consent", "lokalna pohrana, naša", "pamti jeste li analitiku prihvatili ili odbili", "12 mjeseci"]])}

<h2>3. Analitički kolačići, samo uz privolu</h2>
<p>Postavlja ih Google Analytics 4 (Google Ireland Limited) tek nakon što odaberete „Prihvati analitiku“. Dok to ne učinite, Google se ne učitava. Ako odbijete ili kasnije povučete privolu, brišemo ih s vašeg uređaja.</p>
${tab(["Naziv", "Pružatelj", "Svrha", "Trajanje"], [["_ga", "Google", "razlikuje posjetitelje, bez podataka koji vas izravno identificiraju", "2 godine"], ["_ga_Q8GQ6GBK77", "Google", "pamti stanje posjeta u Google Analyticsu 4", "2 godine"]])}

<h2>4. Što ne koristimo</h2>
<ul>
<li>oglašivačke i marketinške kolačiće,</li>
<li>piksele i dodatke društvenih mreža,</li>
<li>ugrađene karte, videozapise ili fontove s tuđih poslužitelja: fontove poslužujemo sami.</li>
</ul>

<h2>5. Kako mijenjate odabir</h2>
<p>Odabir mijenjate gumbom na vrhu ove stranice ili poveznicom „Postavke kolačića“ u podnožju svake stranice. Odabir vrijedi 12 mjeseci, nakon toga vas pitamo ponovno. Kolačiće možete obrisati i u postavkama svog preglednika.</p>

<h2>6. Više informacija</h2>
<p>Kako obrađujemo osobne podatke i koja su vaša prava, piše u <a href="/politika-privatnosti/">Politici privatnosti</a>. Pitanja šaljite na <a href="mailto:info@proxy1.hr">info@proxy1.hr</a>.</p>
</div>`
}

export const pravnaStranica = (naslov, tijelo) => `
<div class="wrap">
  <nav aria-label="Navigacijski put"><ol class="put"><li><a href="/">Početna</a></li><li aria-current="page">${esc(naslov)}</li></ol></nav>
  <article class="clanak">
    <h1>${esc(naslov)}</h1>
    ${tijelo}
  </article>
</div>`
