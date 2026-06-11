import { Fragment } from 'react'
import { Reveal, Eyebrow, Tick } from '../components/ui'
import { useTranslation } from '../context/TranslationContext'

export default function Starlink({ onGo }) {
  const { t } = useTranslation()

  const models = [
    {
      k: 'A', name: 'Starlink Estándar', img: '/StarLinkStandar.png',
      tagline: t('starlink.std.tagline'),
      desc: t('starlink.std.desc'),
      specs: [
        [t('starlink.std.spec1.k'), '100–250 Mbps'],
        [t('starlink.std.spec2.k'), '25–50 ms'],
        [t('starlink.std.spec3.k'), t('starlink.std.spec3.v')],
        [t('starlink.std.spec4.k'), t('starlink.std.spec4.v')],
      ],
    },
    {
      k: 'B', name: 'Starlink Mini', img: '/StarlinkMini.webp',
      tagline: t('starlink.mini.tagline'),
      desc: t('starlink.mini.desc'),
      specs: [
        [t('starlink.std.spec1.k'), '50–150 Mbps'],
        [t('starlink.std.spec2.k'), '25–60 ms'],
        [t('starlink.std.spec3.k'), t('starlink.mini.spec3.v')],
        [t('starlink.std.spec4.k'), t('starlink.mini.spec4.v')],
      ],
    },
  ]

  const steps = [
    { n: '01', title: t('starlink.p01.title'), desc: t('starlink.p01.desc') },
    { n: '02', title: t('starlink.p02.title'), desc: t('starlink.p02.desc') },
    { n: '03', title: t('starlink.p03.title'), desc: t('starlink.p03.desc') },
    { n: '04', title: t('starlink.p04.title'), desc: t('starlink.p04.desc') },
    { n: '05', title: t('starlink.p05.title'), desc: t('starlink.p05.desc') },
    { n: '06', title: t('starlink.p06.title'), desc: t('starlink.p06.desc') },
  ]

  const cases = [
    { title: t('starlink.cases.c1.title'), desc: t('starlink.cases.c1.desc') },
    { title: t('starlink.cases.c2.title'), desc: t('starlink.cases.c2.desc') },
    { title: t('starlink.cases.c3.title'), desc: t('starlink.cases.c3.desc') },
    { title: t('starlink.cases.c4.title'), desc: t('starlink.cases.c4.desc') },
  ]

  return (
    <main className="page">
      <title>Instalación Starlink en Río Cuarto y Zona Rural — CicloIT</title>
      <meta name="description" content="Instalamos Starlink en campos, plantas, obras y zonas rurales de Río Cuarto y región. Relevamiento, instalación profesional y soporte técnico continuo." />
      <meta property="og:title" content="Instalación Starlink — CicloIT" />
      <meta property="og:description" content="Instalación profesional de Starlink en campos y zonas rurales de Río Cuarto, Córdoba. Soporte continuo." />
      <meta property="og:url" content="https://cicloit.com/instalacion-starlink" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://cicloit.com/instalacion-starlink" />

      {/* HERO */}
      <section className="section sl-hero" style={{ paddingTop: 'calc(var(--pad-section) * .5)' }}>
        <div className="container">
          <div className="sl-hero-grid">
            <div>
              <Reveal>
                <div className="badge"><span className="dot" />{t('starlink.badge')}</div>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="h-display" style={{ marginTop: 24, maxWidth: '14ch' }}>
                  {t('starlink.hero.title')}
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="lede" style={{ marginTop: 24, maxWidth: '52ch' }}>
                  {t('starlink.hero.lede')}
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
                  <a className="btn btn-primary btn-arrow" href="https://wa.me/5493584314857" target="_blank" rel="noopener">{t('starlink.hero.cta1')}</a>
                  <button className="btn btn-ghost" onClick={() => document.getElementById('proceso')?.scrollIntoView({ behavior: 'smooth' })}>{t('starlink.hero.cta2')}</button>
                </div>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <div className="sl-hero-visual">
                <img src="/StarLink960x1200.png" alt="Antena Starlink instalada en campo abierto" className="img-cover" style={{ aspectRatio: '3/4' }} />
                <div className="sl-hero-coord mono">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ color: 'var(--primary)' }}>●</span>
                    <span>LINK UP</span>
                  </div>
                  <div className="faint">·</div>
                  <div>DOWN <span style={{ color: 'var(--text)' }}>248</span> Mbps</div>
                  <div className="faint">·</div>
                  <div>UP <span style={{ color: 'var(--text)' }}>22</span> Mbps</div>
                  <div className="faint">·</div>
                  <div>PING <span style={{ color: 'var(--text)' }}>34</span> ms</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <style>{`
          .sl-hero-grid{ display: grid; grid-template-columns: 1.2fr 1fr; gap: 64px; align-items: center; }
          .sl-hero-visual{ position: relative; }
          .sl-hero-coord{ position: absolute; left: 12px; right: 12px; bottom: 12px; display: flex; align-items: center; gap: 10px; padding: 10px 14px; background: var(--bg-elevated); border: 1px solid var(--border-strong); border-radius: var(--radius-md); font-size: 11px; color: var(--text-muted); flex-wrap: wrap; }
          @media (max-width: 980px){ .sl-hero-grid{ grid-template-columns: 1fr; gap: 40px; } }
        `}</style>
      </section>

      {/* TWO MODELS */}
      <section className="section">
        <div className="container">
          <Eyebrow>{t('starlink.models.eyebrow')}</Eyebrow>
          <h2 className="h-1" style={{ marginTop: 14, maxWidth: '22ch' }}>{t('starlink.models.title')}</h2>
          <div className="sl-models">
            {models.map((m, i) => (
              <Reveal key={m.k} delay={i * 100}>
                <article className="sl-model">
                  <header className="sl-model-h">
                    <div className="sl-model-letter mono">{m.k}</div>
                    <div>
                      <h3 className="h-2">{m.name}</h3>
                      <p className="muted" style={{ marginTop: 6, fontSize: 14 }}>{m.tagline}</p>
                    </div>
                  </header>
                  <img src={m.img} alt={m.name} className="img-cover" style={{ aspectRatio: '16/9' }} />
                  <p style={{ marginTop: 24, fontSize: 15, lineHeight: 1.55 }}>{m.desc}</p>
                  <dl className="sl-specs">
                    {m.specs.map(([k, v]) => (
                      <Fragment key={k}>
                        <dt>{k}</dt>
                        <dd>{v}</dd>
                      </Fragment>
                    ))}
                  </dl>
                  <a className="btn btn-ghost btn-arrow" href="https://wa.me/5493584314857" target="_blank" rel="noopener" style={{ marginTop: 24 }}>
                    {t('starlink.consult')} {m.name}
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .sl-models{ margin-top: 48px; display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
          .sl-model{ background: var(--bg-elevated); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 32px; display: flex; flex-direction: column; }
          .sl-model-h{ display: flex; gap: 16px; align-items: flex-start; margin-bottom: 28px; }
          .sl-model-letter{ width: 40px; height: 40px; border-radius: var(--radius-md); border: 1px solid var(--border-strong); display: inline-flex; align-items: center; justify-content: center; font-size: 14px; flex: none; font-weight: 500; }
          .sl-specs{ margin: 28px 0 0; padding: 24px 0 0; border-top: 1px dashed var(--border-strong); display: grid; grid-template-columns: 1fr 1.4fr; gap: 12px 24px; }
          .sl-specs dt{ font-family: 'Geist Mono', monospace; font-size: 11px; color: var(--text-muted); letter-spacing: 0.06em; text-transform: uppercase; padding-top: 2px; }
          .sl-specs dd{ margin: 0; font-size: 14px; }
          @media (max-width: 900px){ .sl-models{ grid-template-columns: 1fr; } }
        `}</style>
      </section>

      {/* PROCESS */}
      <section className="section" id="proceso">
        <div className="container">
          <Eyebrow>{t('starlink.process.eyebrow')}</Eyebrow>
          <h2 className="h-1" style={{ marginTop: 14, maxWidth: '20ch' }}>{t('starlink.process.title')}</h2>
          <div className="process-grid">
            {steps.map((p, i) => (
              <Reveal key={p.n} delay={i * 60}>
                <div className="process-step">
                  <div className="process-n mono">{p.n}</div>
                  <h3 className="h-3" style={{ marginTop: 16 }}>{p.title}</h3>
                  <p className="muted" style={{ marginTop: 8, fontSize: 14 }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .process-grid{ margin-top: 48px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; }
          .process-step{ padding: 28px; border-right: 1px solid var(--border); border-bottom: 1px solid var(--border); background: var(--bg-elevated); }
          .process-step:nth-child(3n){ border-right: 0; }
          .process-step:nth-last-child(-n+3){ border-bottom: 0; }
          .process-n{ font-size: 12px; color: var(--primary); letter-spacing: 0.08em; }
          @media (max-width: 900px){ .process-grid{ grid-template-columns: 1fr; } .process-step{ border-right: 0 !important; } .process-step:nth-last-child(-n+3){ border-bottom: 1px solid var(--border); } .process-step:last-child{ border-bottom: 0; } }
        `}</style>
      </section>

      {/* USE CASES */}
      <section className="section">
        <div className="container">
          <Eyebrow>{t('starlink.cases.eyebrow')}</Eyebrow>
          <h2 className="h-1" style={{ marginTop: 14, maxWidth: '20ch' }}>{t('starlink.cases.title')}</h2>
          <div className="g-grid g-grid-2 g-gap-md" style={{ marginTop: 40 }}>
            {cases.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="card">
                  <h3 className="h-3">{c.title}</h3>
                  <p className="muted" style={{ marginTop: 10, fontSize: 14.5 }}>{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-final" style={{ borderRadius: 'var(--radius-xl)', padding: '56px', display: 'grid', gridTemplateColumns: '1.4fr auto', gap: 48, alignItems: 'center' }}>
            <div>
              <h2 className="h-1" style={{ maxWidth: '20ch' }}>{t('starlink.cta.title')}</h2>
              <p className="lede" style={{ marginTop: 16 }}>{t('starlink.cta.lede')}</p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a className="btn btn-primary btn-arrow" href="https://wa.me/5493584314857" target="_blank" rel="noopener">{t('starlink.cta.btn1')}</a>
              <button className="btn btn-ghost" onClick={() => onGo('contacto')}>{t('starlink.cta.btn2')}</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
