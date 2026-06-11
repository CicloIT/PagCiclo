import { Fragment } from 'react'
import { Reveal, Eyebrow, Tick, Arrow } from '../components/ui'
import { useTranslation } from '../context/TranslationContext'

export default function Planes({ onGo }) {
  const { t } = useTranslation()

  const PLANS = [
    {
      id: 'start', tier: t('planes.start.tier'), name: 'CICLO Start', tag: t('planes.start.tag'),
      desc: t('planes.start.desc'),
      target: t('planes.start.target'),
      sla: t('planes.start.sla'),
    },
    {
      id: 'pro', tier: t('planes.pro.tier'), name: 'CICLO Pro', tag: t('planes.pro.tag'), featured: true,
      desc: t('planes.pro.desc'),
      target: t('planes.pro.target'),
      sla: t('planes.pro.sla'),
    },
    {
      id: 'max', tier: t('planes.max.tier'), name: 'CICLO Max', tag: t('planes.max.tag'),
      desc: t('planes.max.desc'),
      target: t('planes.max.target'),
      sla: t('planes.max.sla'),
    },
  ]

  const COMPARISON_GROUPS = [
    {
      name: t('planes.cmp.grp.soporte'),
      rows: [
        [t('planes.cmp.r.email'), true, true, true],
        [t('planes.cmp.r.tel'), false, true, true],
        [t('planes.cmp.r.wa'), false, true, true],
        [t('planes.cmp.r.fuera'), false, true, true],
        [t('planes.cmp.r.tiempo'), '24–48 hs', '4–8 hs', '1–2 hs'],
        [t('planes.cmp.r.247'), false, true, true],
      ],
    },
    {
      name: t('planes.cmp.grp.monitoreo'),
      rows: [
        [t('planes.cmp.r.monitoreo'), t('planes.cmp.v.mensual'), t('planes.cmp.v.realtime'), t('planes.cmp.v.realtime')],
        [t('planes.cmp.r.mante'), t('planes.cmp.v.basico'), t('planes.cmp.v.proactivo'), t('planes.cmp.v.predictivo')],
        [t('planes.cmp.r.seg'), true, t('planes.cmp.v.prioritarias'), t('planes.cmp.v.prioritarias')],
        [t('planes.cmp.r.opt'), false, t('planes.cmp.v.avanzada'), t('planes.cmp.v.continua')],
      ],
    },
    {
      name: t('planes.cmp.grp.backups'),
      rows: [
        [t('planes.cmp.r.backup'), t('planes.cmp.v.basico'), t('planes.cmp.v.redundante'), t('planes.cmp.v.multiples')],
        [t('planes.cmp.r.rest'), true, true, true],
        [t('planes.cmp.r.testRestore'), false, t('planes.cmp.v.trimestral'), t('planes.cmp.v.mensualRev')],
      ],
    },
    {
      name: t('planes.cmp.grp.reporteria'),
      rows: [
        [t('planes.cmp.r.doc'), true, true, true],
        [t('planes.cmp.r.rep'), t('planes.cmp.v.demanda'), t('planes.cmp.v.semanales'), t('planes.cmp.v.personaliz')],
        [t('planes.cmp.r.rev'), false, false, t('planes.cmp.v.mensualRev')],
      ],
    },
    {
      name: t('planes.cmp.grp.consultoria'),
      rows: [
        [t('planes.cmp.r.consult'), false, true, true],
        [t('planes.cmp.r.estrategia'), false, false, true],
        [t('planes.cmp.r.impl'), t('planes.cmp.v.cotizable'), t('planes.cmp.v.inclLim'), t('planes.cmp.v.incl')],
        [t('planes.cmp.r.audit'), false, false, t('planes.cmp.v.anualIncl')],
        [t('planes.cmp.r.cap'), false, false, t('planes.cmp.v.incl')],
        [t('planes.cmp.r.gerente'), false, false, true],
      ],
    },
  ]

  const howItems = [
    { p: t('planes.how.start.p'), q: t('planes.how.start.q'), a: 'CICLO Start' },
    { p: t('planes.how.pro.p'), q: t('planes.how.pro.q'), a: 'CICLO Pro' },
    { p: t('planes.how.max.p'), q: t('planes.how.max.q'), a: 'CICLO Max' },
  ]

  const faqItems = [
    [t('planes.faq.q1'), t('planes.faq.a1')],
    [t('planes.faq.q2'), t('planes.faq.a2')],
    [t('planes.faq.q3'), t('planes.faq.a3')],
    [t('planes.faq.q4'), t('planes.faq.a4')],
    [t('planes.faq.q5'), t('planes.faq.a5')],
  ]

  return (
    <main className="page">
      <title>Planes de Soporte IT — CicloIT | CICLO Start, Pro y Max</title>
      <meta name="description" content="Planes de soporte tecnológico mensuales para empresas en Río Cuarto, Córdoba. CICLO Start, Pro y Max: monitoreo 24/7, respuesta en menos de 2 horas, sin costos ocultos." />
      <meta property="og:title" content="Planes de Soporte IT — CicloIT" />
      <meta property="og:description" content="Planes de soporte tecnológico mensuales. Monitoreo 24/7, respuesta en menos de 2 horas. Río Cuarto, Córdoba." />
      <meta property="og:url" content="https://cicloit.com/planes" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://cicloit.com/planes" />

      {/* HERO */}
      <section className="section section-tight" style={{ paddingTop: 'calc(var(--pad-section) * .6)' }}>
        <div className="container">
          <Eyebrow>{t('planes.eyebrow')}</Eyebrow>
          <h1 className="h-display" style={{ marginTop: 16, maxWidth: '14ch' }}>
            {t('planes.title')}
          </h1>
          <p className="lede" style={{ marginTop: 24 }}>
            {t('planes.lede')}
          </p>
        </div>
      </section>

      {/* PLAN CARDS */}
      <section className="section section-tight">
        <div className="container">
          <div className="plans-row">
            {PLANS.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <div className={`plan-big ${p.featured ? 'is-featured' : ''}`}>
                  <header className="pb-head">
                    <div className="mono pb-tier">{p.tier}</div>
                    {p.featured
                      ? <span className="badge"><span className="dot" />{p.tag}</span>
                      : <span className="mono pb-tag">{p.tag}</span>
                    }
                  </header>
                  <h2 className="h-2" style={{ marginTop: 18 }}>{p.name}</h2>
                  <p className="muted" style={{ marginTop: 10, fontSize: 14.5 }}>{p.desc}</p>
                  <div className="pb-meta">
                    <div className="pb-meta-row">
                      <span className="mono pb-meta-k">{t('planes.para')}</span>
                      <span>{p.target}</span>
                    </div>
                    <div className="pb-meta-row">
                      <span className="mono pb-meta-k">{t('planes.sla')}</span>
                      <span>{p.sla}</span>
                    </div>
                  </div>
                  <button
                    className={`btn ${p.featured ? 'btn-primary' : 'btn-ghost'} btn-arrow`}
                    style={{ marginTop: 28, width: '100%', justifyContent: 'center' }}
                    onClick={() => onGo('contacto')}
                  >
                    {t('planes.contratar')} {p.name.split(' ')[1]}
                  </button>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--text-faint)', marginTop: 14, textAlign: 'center', letterSpacing: '0.06em' }}>
                    {t('planes.pricing')}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .plans-row{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
          .plan-big{ background: var(--bg-elevated); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 32px; display: flex; flex-direction: column; height: 100%; transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease; }
          .plan-big.is-featured{ border-color: var(--primary); }
          .dir-soft .plan-big.is-featured{ box-shadow: 0 0 0 4px var(--primary-soft); }
          .dir-soft .plan-big:hover{ transform: translateY(-3px); box-shadow: var(--shadow-md); }
          .pb-head{ display: flex; justify-content: space-between; align-items: center; }
          .pb-tier, .pb-tag{ font-size: 11px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em; }
          .pb-meta{ margin-top: 24px; padding-top: 24px; border-top: 1px dashed var(--border-strong); display: flex; flex-direction: column; gap: 12px; }
          .pb-meta-row{ display: grid; grid-template-columns: 56px 1fr; gap: 12px; align-items: start; font-size: 13.5px; }
          .pb-meta-k{ font-size: 11px; color: var(--text-faint); letter-spacing: 0.06em; padding-top: 2px; }
          @media (max-width: 900px){ .plans-row{ grid-template-columns: 1fr; } }
        `}</style>
      </section>

      {/* COMPARATIVE TABLE */}
      <section className="section">
        <div className="container">
          <Eyebrow>{t('planes.cmp.eyebrow')}</Eyebrow>
          <h2 className="h-1" style={{ marginTop: 14 }}>{t('planes.cmp.title')}</h2>
          <div className="cmp-wrap">
            <table className="cmp-table">
              <thead>
                <tr>
                  <th>{t('planes.cmp.feature')}</th>
                  {PLANS.map(p => (
                    <th key={p.id} className={p.featured ? 'is-featured' : ''}>
                      <div className="cmp-th-name">{p.name}</div>
                      <div className="cmp-th-tier">{p.tier}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_GROUPS.map(g => (
                  <Fragment key={g.name}>
                    <tr className="cmp-group">
                      <td colSpan={4}>{g.name}</td>
                    </tr>
                    {g.rows.map((row, ri) => (
                      <tr key={ri}>
                        <td>{row[0]}</td>
                        {[1, 2, 3].map(ci => {
                          const v = row[ci]
                          const featured = PLANS[ci - 1].featured
                          return (
                            <td key={ci} className={featured ? 'is-featured' : ''}>
                              {typeof v === 'boolean' ? <Tick on={v} /> : <span className="cmp-val">{v}</span>}
                            </td>
                          )
                        })}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <style>{`
          .cmp-wrap{ margin-top: 36px; border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; background: var(--bg-elevated); overflow-x: auto; }
          .cmp-table{ width: 100%; border-collapse: collapse; min-width: 720px; }
          .cmp-table th, .cmp-table td{ padding: 16px 22px; text-align: left; border-bottom: 1px solid var(--border); font-size: 14px; vertical-align: middle; }
          .cmp-table thead th{ background: var(--bg-tint); font-weight: 500; }
          .cmp-table thead th:first-child{ font-family: 'Geist Mono', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-muted); }
          .cmp-table th.is-featured, .cmp-table td.is-featured{ background: var(--primary-soft); border-left: 1px solid color-mix(in srgb, var(--primary) 30%, transparent); border-right: 1px solid color-mix(in srgb, var(--primary) 30%, transparent); }
          .dir-sharp .cmp-table th.is-featured, .dir-sharp .cmp-table td.is-featured{ background: rgba(27, 185, 170, 0.06); }
          .cmp-th-name{ font-size: 16px; font-weight: 500; letter-spacing: -0.01em; }
          .cmp-th-tier{ font-family: 'Geist Mono', monospace; font-size: 11px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em; margin-top: 4px; }
          .cmp-table th:not(:first-child), .cmp-table td:not(:first-child){ text-align: center; }
          .cmp-group td{ background: var(--bg-tint); font-family: 'Geist Mono', monospace; font-size: 11px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em; padding: 14px 22px; }
          .cmp-val{ font-size: 13.5px; color: var(--text); }
          .cmp-table tbody tr:last-child td{ border-bottom: 0; }
        `}</style>
      </section>

      {/* HOW TO CHOOSE */}
      <section className="section section-tight">
        <div className="container">
          <Eyebrow>{t('planes.how.eyebrow')}</Eyebrow>
          <h2 className="h-1" style={{ marginTop: 14, maxWidth: '24ch' }}>{t('planes.how.title')}</h2>
          <div className="g-grid g-grid-3 g-gap-md" style={{ marginTop: 40 }}>
            {howItems.map((c, i) => (
              <Reveal key={c.a} delay={i * 80}>
                <div className="card">
                  <div className="mono" style={{ fontSize: 11, color: 'var(--primary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{c.p}</div>
                  <p style={{ marginTop: 12, fontSize: 16, lineHeight: 1.45 }}>{c.q}</p>
                  <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px dashed var(--border-strong)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span className="mono" style={{ fontSize: 11, color: 'var(--text-muted)' }}>{t('planes.how.recommended')}</span>
                    <span style={{ fontWeight: 500 }}>{c.a}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-tight">
        <div className="container">
          <Eyebrow>{t('planes.faq.eyebrow')}</Eyebrow>
          <h2 className="h-1" style={{ marginTop: 14 }}>{t('planes.faq.title')}</h2>
          <div className="faq-list">
            {faqItems.map(([q, a], i) => (
              <details key={i} className="faq-item">
                <summary>
                  <span>{q}</span>
                  <span className="faq-chev"><Arrow /></span>
                </summary>
                <div className="faq-body muted">{a}</div>
              </details>
            ))}
          </div>
        </div>
        <style>{`
          .faq-list{ margin-top: 36px; border-top: 1px solid var(--border); }
          .faq-item{ border-bottom: 1px solid var(--border); }
          .faq-item summary{ list-style: none; padding: 22px 4px; display: flex; justify-content: space-between; align-items: center; gap: 24px; cursor: default; font-size: 17px; font-weight: 500; }
          .faq-item summary::-webkit-details-marker{ display: none; }
          .faq-chev{ color: var(--text-faint); transition: transform .2s ease; }
          .faq-item[open] .faq-chev{ transform: rotate(90deg); color: var(--primary); }
          .faq-body{ padding: 0 4px 22px; max-width: 60ch; font-size: 15px; }
        `}</style>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-final" style={{ borderRadius: 'var(--radius-xl)', padding: '56px', display: 'grid', gridTemplateColumns: '1.4fr auto', gap: 48, alignItems: 'center' }}>
            <div>
              <h2 className="h-1" style={{ maxWidth: '20ch' }}>{t('planes.cta.title')}</h2>
              <p className="lede" style={{ marginTop: 16 }}>{t('planes.cta.lede')}</p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-arrow" onClick={() => onGo('contacto')}>{t('planes.cta.btn1')}</button>
              <a className="btn btn-ghost" href="https://wa.me/5493584314857" target="_blank" rel="noopener">{t('planes.cta.btn2')}</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
