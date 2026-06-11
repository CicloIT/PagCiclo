import { Reveal, Eyebrow, Stat, Tick } from '../components/ui'
import { useTranslation } from '../context/TranslationContext'

export default function Nosotros({ onGo }) {
  const { t } = useTranslation()

  const manifesto = [
    [t('nosotros.manifesto.01.h'), t('nosotros.manifesto.01.d')],
    [t('nosotros.manifesto.02.h'), t('nosotros.manifesto.02.d')],
    [t('nosotros.manifesto.03.h'), t('nosotros.manifesto.03.d')],
    [t('nosotros.manifesto.04.h'), t('nosotros.manifesto.04.d')],
  ]

  const cases = [
    {
      cli: 'AgroSur · Sector agropecuario',
      img: '/Infraja.jpeg',
      title: t('nosotros.cases.c1.title'),
      kpi: [[t('nosotros.cases.kpi.uptime'), '99.7%'], [t('nosotros.cases.kpi.tickets'), '−82%'], [t('nosotros.cases.kpi.plan'), 'CICLO Max']],
      desc: t('nosotros.cases.c1.desc'),
      tags: ['Soporte', 'Infraestructura', 'Backup'],
    },
    {
      cli: 'Clínica del Centro · Salud',
      img: '/Turno.webp',
      title: t('nosotros.cases.c2.title'),
      kpi: [[t('nosotros.cases.kpi.launch'), '6 sem'], [t('nosotros.cases.kpi.adopt'), '94%'], [t('nosotros.cases.kpi.platform'), 'iOS + Web']],
      desc: t('nosotros.cases.c2.desc'),
      tags: ['Software a medida', 'iOS', 'Integración'],
    },
    {
      cli: 'Establecimiento El Algarrobo · Agro',
      img: '/StarlinkMini.webp',
      title: t('nosotros.cases.c3.title'),
      kpi: [[t('nosotros.cases.kpi.cover'), '100%'], [t('nosotros.cases.kpi.sensors'), '24'], [t('nosotros.cases.kpi.services'), 'Starlink + IoT']],
      desc: t('nosotros.cases.c3.desc'),
      tags: ['Starlink', 'LoRaWAN', 'Agro'],
    },
  ]

  const testimonials = [
    { q: 'CicloIT no nos vende soluciones, nos ayuda a tomar mejores decisiones. La diferencia con otros proveedores es notable: hablan claro, miden todo y se anticipan.', a: 'Lucía Martínez', r: 'Gerente de Operaciones · AgroSur', plan: 'CICLO Max · 3 años' },
    { q: 'Necesitábamos una app móvil interna y la entregaron en 6 semanas, funcionando. Documentación, capacitación y soporte impecables.', a: 'Florencia Pérez', r: 'CTO · Clínica del Centro', plan: 'Software + Pro' },
    { q: 'Instalaron Starlink en un campo donde no había nada. En 48 hs estábamos online y la atención post-venta sigue.', a: 'Ramiro Bedoya', r: 'Productor agropecuario · El Algarrobo', plan: 'Starlink + LoRaWAN' },
    { q: 'Tuvimos un incidente de seguridad un sábado a la noche. Estaban encima en 15 minutos. Resolvieron, documentaron y mejoraron los procesos.', a: 'Jorge Casas', r: 'Director · Estudio Casas & Asoc.', plan: 'CICLO Pro' },
  ]

  const teamRows = [
    [t('nosotros.team.soporte'), '4 personas'],
    [t('nosotros.team.dev'), '5 personas'],
    [t('nosotros.team.ciber'), '2 personas'],
    [t('nosotros.team.iot'), '2 personas'],
    [t('nosotros.team.design'), '1 persona'],
    [t('nosotros.team.ops'), '2 personas'],
  ]

  return (
    <main className="page">
      <title>Nosotros — CicloIT | Equipo Tecnológico en Río Cuarto</title>
      <meta name="description" content="Equipo de 12 profesionales en tecnología con 8 años de experiencia. 80+ clientes activos, 240+ equipos monitoreados. CicloIT desde Río Cuarto, Córdoba, Argentina." />
      <meta property="og:title" content="Nosotros — CicloIT" />
      <meta property="og:description" content="8 años, 12 profesionales, 80+ clientes. Soporte IT, software y conectividad desde Río Cuarto, Córdoba." />
      <meta property="og:url" content="https://cicloit.com/nosotros" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://cicloit.com/nosotros" />

      {/* HERO */}
      <section className="section section-tight" style={{ paddingTop: 'calc(var(--pad-section) * .55)' }}>
        <div className="container">
          <Eyebrow>{t('nosotros.eyebrow')}</Eyebrow>
          <h1 className="h-display" style={{ marginTop: 16, maxWidth: '16ch' }}>
            {t('nosotros.title.before')}<span style={{ color: 'var(--primary)' }}>{t('nosotros.title.highlight')}</span>{t('nosotros.title.after')}
          </h1>
          <p className="lede" style={{ marginTop: 24 }}>
            {t('nosotros.lede')}
          </p>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="section section-tight">
        <div className="container">
          <div className="manifesto">
            <div className="manifesto-side">
              <Eyebrow>{t('nosotros.manifesto.eyebrow')}</Eyebrow>
              <h2 className="h-1" style={{ marginTop: 12, maxWidth: '12ch' }}>{t('nosotros.manifesto.title')}</h2>
            </div>
            <ol className="manifesto-list">
              {manifesto.map(([h, d], i) => (
                <li key={h}>
                  <span className="manifesto-n mono">0{i + 1}</span>
                  <div>
                    <h3 className="h-3">{h}</h3>
                    <p className="muted" style={{ marginTop: 6, fontSize: 14.5 }}>{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <style>{`
          .manifesto{ display: grid; grid-template-columns: 360px 1fr; gap: 64px; padding-top: 32px; border-top: 1px solid var(--border); }
          .manifesto-list{ list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 32px; }
          .manifesto-list li{ display: grid; grid-template-columns: 60px 1fr; gap: 24px; padding-bottom: 32px; border-bottom: 1px dashed var(--border-strong); }
          .manifesto-list li:last-child{ border-bottom: 0; }
          .manifesto-n{ font-size: 12px; color: var(--primary); letter-spacing: 0.08em; padding-top: 4px; }
          @media (max-width: 900px){ .manifesto{ grid-template-columns: 1fr; gap: 32px; } }
        `}</style>
      </section>

      {/* METRICS */}
      <section className="section section-tight">
        <div className="container">
          <div className="metrics-grid">
            <Stat value="8" label={t('nosotros.stats.años')} />
            <Stat value="80+" label={t('nosotros.stats.clientes')} />
            <Stat value="240+" label={t('nosotros.stats.equipos')} />
            <Stat value="12" label={t('nosotros.stats.profesionales')} />
          </div>
        </div>
        <style>{`
          .metrics-grid{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; padding: 40px 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
          @media (max-width: 800px){ .metrics-grid{ grid-template-columns: repeat(2, 1fr); gap: 24px; } }
        `}</style>
      </section>

      {/* CASE STUDIES */}
      <section className="section">
        <div className="container">
          <Eyebrow>{t('nosotros.cases.eyebrow')}</Eyebrow>
          <h2 className="h-1" style={{ marginTop: 14, maxWidth: '20ch' }}>{t('nosotros.cases.title')}</h2>
          <div className="cases">
            {cases.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <article className="case">
                  <div className="img-wrap case-side">
                    <img src={c.img} alt={c.cli} className="img-cover" style={{ height: '100%' }} />
                  </div>
                  <div className="case-main">
                    <div className="mono" style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{c.cli}</div>
                    <h3 className="h-2" style={{ marginTop: 12 }}>{c.title}</h3>
                    <p className="muted" style={{ marginTop: 12, fontSize: 15 }}>{c.desc}</p>
                    <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {c.tags.map(tg => <span key={tg} className="tag">{tg}</span>)}
                    </div>
                    <div className="case-kpi">
                      {c.kpi.map(([k, v]) => (
                        <div key={k} className="case-kpi-cell">
                          <div className="mono" style={{ fontSize: 10.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{k}</div>
                          <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em', marginTop: 4 }}>{v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .cases{ margin-top: 48px; display: flex; flex-direction: column; gap: 20px; }
          .case{ background: var(--bg-elevated); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 32px; display: grid; grid-template-columns: 280px 1fr; gap: 40px; align-items: center; }
          .case-side{ aspect-ratio: 4/5; }
          .case-kpi{ margin-top: 28px; padding-top: 24px; border-top: 1px dashed var(--border-strong); display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
          @media (max-width: 800px){ .case{ grid-template-columns: 1fr; gap: 24px; padding: 24px; } .case-kpi{ grid-template-columns: 1fr 1fr; gap: 16px; } }
        `}</style>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <Eyebrow>{t('nosotros.test.eyebrow')}</Eyebrow>
          <h2 className="h-1" style={{ marginTop: 14 }}>{t('nosotros.test.title')}</h2>
          <div className="g-grid g-grid-2 g-gap-md" style={{ marginTop: 40 }}>
            {testimonials.map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <article className="testi">
                  <div className="t-quote mono">"</div>
                  <p style={{ fontSize: 17, lineHeight: 1.5 }}>{item.q}</p>
                  <div className="t-meta">
                    <div className="t-avatar" />
                    <div>
                      <div style={{ fontWeight: 500, fontSize: 14.5 }}>{item.a}</div>
                      <div className="muted" style={{ fontSize: 13 }}>{item.r}</div>
                    </div>
                    <span className="tag" style={{ marginLeft: 'auto' }}>{item.plan}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .testi{ background: var(--bg-elevated); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 32px; display: flex; flex-direction: column; gap: 18px; }
          .t-quote{ font-size: 48px; line-height: .5; color: var(--primary); }
          .t-meta{ margin-top: auto; padding-top: 20px; border-top: 1px dashed var(--border-strong); display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
          .t-avatar{ width: 38px; height: 38px; border-radius: 999px; background: linear-gradient(135deg, var(--primary), var(--accent)); flex: none; }
        `}</style>
      </section>

      {/* TEAM */}
      <section className="section section-tight">
        <div className="container">
          <Eyebrow>{t('nosotros.team.eyebrow')}</Eyebrow>
          <h2 className="h-1" style={{ marginTop: 14, maxWidth: '20ch' }}>{t('nosotros.team.title')}</h2>
          <div className="team-grid">
            {teamRows.map(([title, count], i) => (
              <Reveal key={title} delay={i * 50}>
                <div className="team-cell">
                  <div className="team-cell-h">{title}</div>
                  <div className="mono team-cell-c">{count}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .team-grid{ margin-top: 48px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; }
          .team-cell{ padding: 24px 28px; background: var(--bg-elevated); border-right: 1px solid var(--border); border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; gap: 16px; }
          .team-cell:nth-child(3n){ border-right: 0; }
          .team-cell:nth-last-child(-n+3){ border-bottom: 0; }
          .team-cell-h{ font-size: 16px; font-weight: 500; letter-spacing: -0.01em; }
          .team-cell-c{ font-size: 12px; color: var(--text-muted); letter-spacing: 0.04em; }
          @media (max-width: 800px){ .team-grid{ grid-template-columns: 1fr; } .team-cell{ border-right: 0 !important; } .team-cell:nth-last-child(-n+3){ border-bottom: 1px solid var(--border); } .team-cell:last-child{ border-bottom: 0; } }
        `}</style>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-final" style={{ borderRadius: 'var(--radius-xl)', padding: '56px', display: 'grid', gridTemplateColumns: '1.4fr auto', gap: 48, alignItems: 'center' }}>
            <div>
              <h2 className="h-1" style={{ maxWidth: '20ch' }}>{t('nosotros.cta.title')}</h2>
              <p className="lede" style={{ marginTop: 16 }}>{t('nosotros.cta.lede')}</p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-arrow" onClick={() => onGo('contacto')}>{t('nosotros.cta.btn1')}</button>
              <a className="btn btn-ghost" href="https://wa.me/5493584314857" target="_blank" rel="noopener">{t('nosotros.cta.btn2')}</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
