import { Reveal, Eyebrow } from '../components/ui'
import { useTranslation } from '../context/TranslationContext'

export default function Cursos({ onGo }) {
  const { t } = useTranslation()

  const CURSOS = [
    { lvl: t('cursos.c1.lvl'), title: t('cursos.c1.title'), desc: t('cursos.c1.desc'), dur: t('cursos.c1.dur'), mod: t('cursos.c1.mod'), cupo: t('cursos.c1.cupo') },
    { lvl: t('cursos.c2.lvl'), title: t('cursos.c2.title'), desc: t('cursos.c2.desc'), dur: t('cursos.c2.dur'), mod: t('cursos.c2.mod'), cupo: t('cursos.c2.cupo') },
    { lvl: t('cursos.c3.lvl'), title: t('cursos.c3.title'), desc: t('cursos.c3.desc'), dur: t('cursos.c3.dur'), mod: t('cursos.c3.mod'), cupo: t('cursos.c3.cupo') },
    { lvl: t('cursos.c4.lvl'), title: t('cursos.c4.title'), desc: t('cursos.c4.desc'), dur: t('cursos.c4.dur'), mod: t('cursos.c4.mod'), cupo: t('cursos.c4.cupo') },
    { lvl: t('cursos.c5.lvl'), title: t('cursos.c5.title'), desc: t('cursos.c5.desc'), dur: t('cursos.c5.dur'), mod: t('cursos.c5.mod'), cupo: t('cursos.c5.cupo') },
  ]

  const howSteps = [
    ['01', t('cursos.how.01.title'), t('cursos.how.01.desc')],
    ['02', t('cursos.how.02.title'), t('cursos.how.02.desc')],
    ['03', t('cursos.how.03.title'), t('cursos.how.03.desc')],
  ]

  return (
    <main className="page">
      <title>Cursos de Tecnología — CicloIT | Redes, Sistemas y TI en Río Cuarto</title>
      <meta name="description" content="Cursos y capacitaciones en redes, sistemas y tecnología dictados por profesionales de CicloIT en Río Cuarto, Córdoba. Formación práctica y actualizada." />
      <meta property="og:title" content="Cursos de Tecnología — CicloIT" />
      <meta property="og:description" content="Capacitaciones en redes, sistemas y TI por profesionales de CicloIT. Río Cuarto, Córdoba." />
      <meta property="og:url" content="https://cicloit.com/cursos" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://cicloit.com/cursos" />

      {/* HERO */}
      <section className="section section-tight" style={{ paddingTop: 'calc(var(--pad-section) * .55)' }}>
        <div className="container">
          <Eyebrow>{t('cursos.eyebrow')}</Eyebrow>
          <h1 className="h-display" style={{ marginTop: 16, maxWidth: '16ch' }}>
            {t('cursos.title')}
          </h1>
          <p className="lede" style={{ marginTop: 24, maxWidth: '60ch' }}>
            {t('cursos.lede')}
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-arrow" onClick={() => onGo('contacto')}>{t('cursos.cta1')}</button>
            <a className="btn btn-ghost" href="https://wa.me/5493584314857" target="_blank" rel="noopener">{t('cursos.cta2')}</a>
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section className="section">
        <div className="container">
          <Eyebrow>{t('cursos.catalog.eyebrow')}</Eyebrow>
          <h2 className="h-1" style={{ marginTop: 14 }}>{t('cursos.catalog.title')}</h2>
          <div className="cursos-list">
            {CURSOS.map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
                <article className="curso-row">
                  <div><span className="tag">{c.lvl}</span></div>
                  <div className="curso-body">
                    <h3 className="h-2">{c.title}</h3>
                    <p className="muted" style={{ marginTop: 8, fontSize: 14.5, maxWidth: '64ch' }}>{c.desc}</p>
                  </div>
                  <div className="curso-meta">
                    <div><span className="mono curso-k">{t('cursos.dur')}</span> <span>{c.dur}</span></div>
                    <div><span className="mono curso-k">{t('cursos.mod')}</span> <span>{c.mod}</span></div>
                    <div><span className="mono curso-k">{t('cursos.cupo')}</span> <span>{c.cupo}</span></div>
                  </div>
                  <div>
                    <button className="btn btn-ghost btn-arrow" onClick={() => onGo('contacto')}>{t('cursos.inscribir')}</button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .cursos-list{ margin-top: 36px; border-top: 1px solid var(--border); }
          .curso-row{ display: grid; grid-template-columns: 110px 1.6fr 220px auto; gap: 32px; align-items: center; padding: 28px 8px; border-bottom: 1px solid var(--border); }
          .curso-meta{ display: flex; flex-direction: column; gap: 8px; font-size: 13.5px; }
          .curso-k{ font-size: 11px; color: var(--text-muted); letter-spacing: 0.06em; text-transform: uppercase; margin-right: 8px; }
          @media (max-width: 1000px){ .curso-row{ grid-template-columns: 1fr; gap: 16px; padding: 28px 8px; } .curso-meta{ flex-direction: row; flex-wrap: wrap; gap: 16px; } }
        `}</style>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section-tight">
        <div className="container">
          <Eyebrow>{t('cursos.how.eyebrow')}</Eyebrow>
          <h2 className="h-1" style={{ marginTop: 14, maxWidth: '20ch' }}>{t('cursos.how.title')}</h2>
          <div className="g-grid g-grid-3 g-gap-md" style={{ marginTop: 36 }}>
            {howSteps.map(([n, title, desc]) => (
              <div className="card" key={n}>
                <div className="mono" style={{ fontSize: 12, color: 'var(--primary)', letterSpacing: '0.08em' }}>{n}</div>
                <h3 className="h-3" style={{ marginTop: 14 }}>{title}</h3>
                <p className="muted" style={{ marginTop: 8, fontSize: 14 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-final" style={{ borderRadius: 'var(--radius-xl)', padding: '56px', display: 'grid', gridTemplateColumns: '1.4fr auto', gap: 48, alignItems: 'center' }}>
            <div>
              <h2 className="h-1" style={{ maxWidth: '20ch' }}>{t('cursos.cta.title')}</h2>
              <p className="lede" style={{ marginTop: 16 }}>{t('cursos.cta.lede')}</p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-arrow" onClick={() => onGo('contacto')}>{t('cursos.cta.btn1')}</button>
              <a className="btn btn-ghost" href="https://wa.me/5493584314857" target="_blank" rel="noopener">{t('cursos.cta.btn2')}</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
