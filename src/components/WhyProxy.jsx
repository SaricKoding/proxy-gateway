const reasons = [
  {
    title: 'Bonitet A+',
    desc: 'Financijska stabilnost i pouzdanost — dokazano službenim bonitetnim ocjenama.',
    icon: 'shield',
  },
  {
    title: 'Fleksibilnost',
    desc: 'Naručivanje, dostave i povrati robe prilagođavamo stvarnim potrebama kupca.',
    icon: 'sliders',
  },
  {
    title: 'Brza dostava',
    desc: 'Isporuka u roku od 3 radna dana na području cijele Hrvatske.',
    icon: 'truck',
  },
  {
    title: 'Brzo rješavanje reklamacija',
    desc: 'Reklamacije obrađujemo odmah — bez odugovlačenja i sporednih procedura.',
    icon: 'check-circle',
  },
  {
    title: 'Briga o polici kod kupca',
    desc: 'Održavanje reda, dopuna robe i vizualni identitet polica na prodajnim mjestima.',
    icon: 'package',
  },
  {
    title: 'Ekološka osviještenost',
    desc: 'U poslovanju i logistici vodimo računa o okolišu i održivim praksama.',
    icon: 'leaf',
  },
  {
    title: 'Fer partnerski odnos',
    desc: 'Partnerstvo na dugi rok — korektnost prema kupcima, zaposlenicima i dobavljačima.',
    icon: 'handshake',
  },
]

const Icon = ({ name }) => {
  const common = {
    width: 26,
    height: 26,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }
  switch (name) {
    case 'shield':
      return (<svg {...common}><path d="M12 2L4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3z"/><path d="M9 12l2 2 4-4"/></svg>)
    case 'sliders':
      return (<svg {...common}><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/><circle cx="8" cy="6" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="10" cy="18" r="2"/></svg>)
    case 'truck':
      return (<svg {...common}><rect x="1" y="6" width="13" height="11" rx="1"/><path d="M14 9h4l3 3v5h-7z"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></svg>)
    case 'check-circle':
      return (<svg {...common}><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></svg>)
    case 'package':
      return (<svg {...common}><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>)
    case 'leaf':
      return (<svg {...common}><path d="M6 18c8 0 14-6 14-14 0 0-7-1-11 3S5 15 5 18"/><path d="M6 18c2-4 5-7 9-9"/></svg>)
    case 'handshake':
      return (<svg {...common}><path d="M11 17l2 2 4-4"/><path d="M3 12l5-5 4 4-5 5z"/><path d="M13 11l4-4 4 4-5 5"/><path d="M8 17l-2 2"/></svg>)
    default:
      return null
  }
}

export default function WhyProxy() {
  return (
    <section id="zasto-proxy" className="why" aria-labelledby="why-heading">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">Zašto Proxy</p>
          <h2 id="why-heading" className="section-title">
            Sedam razloga zašto nam <span className="gold">kupci vjeruju</span>
          </h2>
          <p className="section-sub">
            Ono što nas razlikuje nije katalog — nego način na koji poslujemo sa svojim partnerima.
          </p>
        </header>

        <ul className="why-grid">
          {reasons.map((r) => (
            <li key={r.title} className="why-card">
              <div className="why-icon" aria-hidden="true">
                <Icon name={r.icon} />
              </div>
              <h3 className="why-title">{r.title}</h3>
              <p className="why-desc">{r.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
