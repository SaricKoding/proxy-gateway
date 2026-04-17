import { useLocale } from '../i18n/LocaleContext'

const icons = ['shield', 'sliders', 'truck', 'check-circle', 'package', 'leaf', 'handshake']

const Icon = ({ name }) => {
  const common = {
    width: 26, height: 26, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 2,
    strokeLinecap: 'round', strokeLinejoin: 'round',
    'aria-hidden': true,
  }
  switch (name) {
    case 'shield':       return (<svg {...common}><path d="M12 2L4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3z"/><path d="M9 12l2 2 4-4"/></svg>)
    case 'sliders':      return (<svg {...common}><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/><circle cx="8" cy="6" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="10" cy="18" r="2"/></svg>)
    case 'truck':        return (<svg {...common}><rect x="1" y="6" width="13" height="11" rx="1"/><path d="M14 9h4l3 3v5h-7z"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></svg>)
    case 'check-circle': return (<svg {...common}><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></svg>)
    case 'package':      return (<svg {...common}><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>)
    case 'leaf':         return (<svg {...common}><path d="M6 18c8 0 14-6 14-14 0 0-7-1-11 3S5 15 5 18"/><path d="M6 18c2-4 5-7 9-9"/></svg>)
    case 'handshake':    return (<svg {...common}><path d="M11 17l2 2 4-4"/><path d="M3 12l5-5 4 4-5 5z"/><path d="M13 11l4-4 4 4-5 5"/><path d="M8 17l-2 2"/></svg>)
    default: return null
  }
}

export default function WhyProxy() {
  const { t } = useLocale()
  const w = t('why')

  return (
    <section id="zasto-proxy" className="why" aria-labelledby="why-heading">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">{w.eyebrow}</p>
          <h2 id="why-heading" className="section-title">
            {w.title[0]}
            <span className="gold">{w.title[1]}</span>
          </h2>
          <p className="section-sub">{w.sub}</p>
        </header>

        <ul className="why-grid">
          {w.reasons.map((r, i) => (
            <li key={i} className="why-card">
              <div className="why-icon" aria-hidden="true">
                <Icon name={icons[i]} />
              </div>
              <h3 className="why-title">{r.t}</h3>
              <p className="why-desc">{r.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
