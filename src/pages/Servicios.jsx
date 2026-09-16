import { Reveal, Eyebrow, Tick, Arrow } from '../components/ui'
import { useTranslation } from '../context/TranslationContext'

export default function Servicios({ onGo }) {
  const { t } = useTranslation()

  const SERVICIOS = [
    {
      id: 'soporte', n: '01', title: t('svc.soporte.title'),
      img: '/soporte.webp',
      short: t('svc.soporte.short'),
      body: t('svc.soporte.body'),
      bullets: [t('svc.soporte.b1'), t('svc.soporte.b2'), t('svc.soporte.b3'), t('svc.soporte.b4')],
      tags: ['Infraestructura', 'Networking', 'Help desk'],
      cta: 'planes',
    },
    {
      id: 'web', n: '02', title: t('svc.web.title'),
      img: '/pag.webp',
      short: t('svc.web.short'),
      body: t('svc.web.body'),
      bullets: [t('svc.web.b1'), t('svc.web.b2'), t('svc.web.b3'), t('svc.web.b4')],
      tags: ['Frontend', 'SEO', 'CMS'],
    },
    {
      id: 'games', n: '03', title: t('svc.games.title'),
      img: '/juegos.webp',
      short: t('svc.games.short'),
      body: t('svc.games.body'),
      bullets: [t('svc.games.b1'), t('svc.games.b2'), t('svc.games.b3'), t('svc.games.b4')],
      tags: ['Gamificación', 'Eventos', 'Educación'],
      links: [
        { label: 'Agda', url: 'https://agda.cicloit.com' },
        { label: 'Trivia', url: 'https://trivia.cicloit.com/' },
        { label: 'Memo', url: 'https://memo.cicloit.com/' },
        { label: 'JuegoCiber', url: 'https://cicloit.github.io/juegoCiber/' },
        { label: 'AgronomyTech', url: 'https://cicloit.github.io/AgronomyTech/' },
        { label: 'Puntal', url: 'https://cicloit.github.io/puntal/' },
      ],
    },
    {
      id: 'software', n: '04', title: t('svc.software.title'),
      img: '/Ordenes.webp',
      short: t('svc.software.short'),
      body: t('svc.software.body'),
      bullets: [t('svc.software.b1'), t('svc.software.b2'), t('svc.software.b3'), t('svc.software.b4')],
      tags: ['Node', '.NET', 'Postgres', 'Cloud'],
    },
    {
      id: 'ciber', n: '05', title: t('svc.ciber.title'),
      img: '/ciberseguridad.webp',
      short: t('svc.ciber.short'),
      body: t('svc.ciber.body'),
      bullets: [t('svc.ciber.b1'), t('svc.ciber.b2'), t('svc.ciber.b3'), t('svc.ciber.b4')],
      tags: ['Pentest', 'SOC', 'Compliance'],
    },
    {
      id: 'lcg', n: '06', title: t('svc.lcg.title'),
      img: '/lcgestion.webp',
      short: t('svc.lcg.short'),
      body: t('svc.lcg.body'),
      bullets: [t('svc.lcg.b1'), t('svc.lcg.b2'), t('svc.lcg.b3'), t('svc.lcg.b4')],
      tags: ['RRHH', 'Producto propio', 'SaaS'],
    },
    {
      id: 'starlink', n: '07', title: t('svc.starlink.title'),
      img: '/StarLink800x1067.png',
      imgPos: 'bottom',
      short: t('svc.starlink.short'),
      body: t('svc.starlink.body'),
      bullets: [t('svc.starlink.b1'), t('svc.starlink.b2'), t('svc.starlink.b3'), t('svc.starlink.b4')],
      tags: ['Conectividad', 'Satelital'],
      cta: 'instalacion-starlink',
    },
    {
      id: 'lorawan', n: '08', title: t('svc.lorawan.title'),
      img: '/Sensor4.jpeg',
      short: t('svc.lorawan.short'),
      body: t('svc.lorawan.body'),
      bullets: [t('svc.lorawan.b1'), t('svc.lorawan.b2'), t('svc.lorawan.b3'), t('svc.lorawan.b4')],
      tags: ['IoT', 'Agro', 'Industria'],
      cta: 'lorawan',
    },
  ]

  return (
    <main className="page">
      <title>Servicios — CicloIT | Soporte IT, Software, Ciberseguridad, Starlink, LoRaWAN</title>
      <meta name="description" content="Soporte IT, desarrollo web y apps, ciberseguridad, instalación Starlink y redes LoRaWAN en Río Cuarto, Córdoba. Soluciones tecnológicas a medida para empresas." />
      <meta property="og:title" content="Servicios — CicloIT" />
      <meta property="og:description" content="Soporte IT, desarrollo web y apps, ciberseguridad, Starlink y LoRaWAN en Río Cuarto, Córdoba." />
      <meta property="og:url" content="https://cicloit.com/servicios" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://cicloit.com/servicios" />

      {/* HERO */}
      <section className="section section-tight" style={{ paddingTop: 'calc(var(--pad-section) * .6)' }}>
        <div className="container">
          <Eyebrow>{t('svc.page.eyebrow')}</Eyebrow>
          <h1 className="h-display" style={{ marginTop: 16, maxWidth: '16ch' }}>
            {t('svc.page.title')}
          </h1>
          <p className="lede" style={{ marginTop: 24, maxWidth: '60ch' }}>
            {t('svc.page.lede')}
          </p>
        </div>
      </section>

      {/* SERVICE INDEX */}
      <section className="section section-tight">
        <div className="container">
          <div className="srv-index">
            {SERVICIOS.map(s => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="srv-index-row"
                onClick={(e) => { e.preventDefault(); document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
              >
                <span className="mono srv-index-n">{s.n}</span>
                <span className="srv-index-t">{s.title}</span>
                <span className="srv-index-arrow"><Arrow /></span>
              </a>
            ))}
          </div>
        </div>
        <style>{`
          .srv-index{ border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
          .srv-index-row{ display: grid; grid-template-columns: 60px 1fr auto; align-items: center; gap: 24px; padding: 22px 8px; border-bottom: 1px solid var(--border); cursor: default; transition: background-color .15s ease, padding .15s ease, color .15s ease; }
          .srv-index-row:last-child{ border-bottom: 0; }
          .srv-index-row:hover{ background: var(--bg-tint); padding-left: 16px; }
          .srv-index-row:hover .srv-index-arrow{ color: var(--primary); }
          .srv-index-n{ font-size: 12px; color: var(--text-faint); }
          .srv-index-t{ font-size: clamp(22px, 2.2vw, 30px); font-weight: 500; letter-spacing: -0.02em; }
          .srv-index-arrow{ color: var(--text-faint); }
        `}</style>
      </section>

      {/* SERVICE BLOCKS */}
      <section className="section">
        <div className="container">
          <div className="srv-cards">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.id} delay={(i % 2) * 60}>
                <article id={s.id} className="srv-card-full">
                  <div className="srv-card-full-visual img-wrap">
                    <img src={s.img} alt={s.title} className="img-cover" style={s.imgPos ? { objectPosition: s.imgPos } : undefined} />
                  </div>
                  <div className="srv-card-full-body">
                    <div className="srv-card-full-head">
                      <span className="mono" style={{ fontSize: 11, color: 'var(--text-faint)', letterSpacing: '0.08em' }}>{s.n} / 08</span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {s.tags.map(tg => <span key={tg} className="tag">{tg}</span>)}
                      </div>
                    </div>
                    <h2 className="h-2" style={{ marginTop: 16 }}>{s.title}</h2>
                    <p className="muted" style={{ marginTop: 10, fontSize: 14.5 }}>{s.short}</p>
                    <p className="muted" style={{ marginTop: 10, fontSize: 13.5, opacity: 0.85 }}>{s.body}</p>
                    <ul className="srv-bullets">
                      {s.bullets.map(b => <li key={b}><Tick />{b}</li>)}
                    </ul>
                    {s.links && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 18 }}>
                        {s.links.map(l => (
                          <a key={l.url} href={l.url} target="_blank" rel="noopener" className="tag">{l.label}</a>
                        ))}
                      </div>
                    )}
                    {s.cta && (
                      <button className="btn btn-ghost btn-arrow" style={{ marginTop: 24 }} onClick={() => onGo(s.cta)}>
                        {t('svc.seeMore')}
                      </button>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .srv-cards{ display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
          .srv-card-full{ display: flex; flex-direction: column; border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; background: var(--bg-elevated); height: 100%; scroll-margin-top: 90px; }
          .srv-card-full-visual{ border: 0; border-radius: 0; aspect-ratio: 16/9; }
          .srv-card-full-visual .img-cover{ object-position: top; }
          .srv-card-full-body{ padding: 28px; display: flex; flex-direction: column; flex: 1; }
          .srv-card-full-head{ display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
          .srv-bullets{ list-style: none; padding: 0; margin: 20px 0 0; display: flex; flex-direction: column; gap: 10px; font-size: 14px; }
          .srv-bullets li{ display: flex; align-items: center; gap: 10px; color: var(--text-muted); }
          @media (max-width: 900px){ .srv-cards{ grid-template-columns: 1fr; } }
        `}</style>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-band" style={{ border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-xl)', padding: '56px', display: 'flex', gap: 48, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <div>
              <Eyebrow>{t('svc.cta.eyebrow')}</Eyebrow>
              <h2 className="h-1" style={{ marginTop: 12, maxWidth: '22ch' }}>{t('svc.cta.title')}</h2>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-arrow" onClick={() => onGo('contacto')}>{t('svc.cta.btn1')}</button>
              <button className="btn btn-ghost" onClick={() => onGo('planes')}>{t('svc.cta.btn2')}</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
