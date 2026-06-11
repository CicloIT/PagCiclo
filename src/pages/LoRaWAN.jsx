import { Reveal, Eyebrow, Tick } from '../components/ui'
import { useTranslation } from '../context/TranslationContext'

export default function LoRaWAN({ onGo }) {
  const { t } = useTranslation()

  const whyItems = [
    { k: t('lorawan.why.alcance.k'), v: t('lorawan.why.alcance.v'), d: t('lorawan.why.alcance.d') },
    { k: t('lorawan.why.consumo.k'), v: t('lorawan.why.consumo.v'), d: t('lorawan.why.consumo.d') },
    { k: t('lorawan.why.costo.k'), v: t('lorawan.why.costo.v'), d: t('lorawan.why.costo.d') },
    { k: t('lorawan.why.escala.k'), v: t('lorawan.why.escala.v'), d: t('lorawan.why.escala.d') },
  ]

  const apps = [
    { title: t('lorawan.apps.a1.title'), desc: t('lorawan.apps.a1.desc') },
    { title: t('lorawan.apps.a2.title'), desc: t('lorawan.apps.a2.desc') },
    { title: t('lorawan.apps.a3.title'), desc: t('lorawan.apps.a3.desc') },
    { title: t('lorawan.apps.a4.title'), desc: t('lorawan.apps.a4.desc') },
    { title: t('lorawan.apps.a5.title'), desc: t('lorawan.apps.a5.desc') },
    { title: t('lorawan.apps.a6.title'), desc: t('lorawan.apps.a6.desc') },
  ]

  return (
    <main className="page">
      <title>Redes LoRaWAN e IoT — CicloIT | Sensores y Conectividad Rural</title>
      <meta name="description" content="Desplegamos redes LoRaWAN para IoT en agroindustria e industria. Sensores, gateways y dashboards a medida desde Río Cuarto, Córdoba, Argentina." />
      <meta property="og:title" content="Redes LoRaWAN e IoT — CicloIT" />
      <meta property="og:description" content="Redes LoRaWAN para IoT: sensores, gateways y dashboards para agroindustria e industria. Río Cuarto, Córdoba." />
      <meta property="og:url" content="https://cicloit.com/lorawan" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://cicloit.com/lorawan" />

      {/* HERO */}
      <section className="section section-tight" style={{ paddingTop: 'calc(var(--pad-section) * .55)' }}>
        <div className="container">
          <div className="g-grid g-grid-2 g-gap-lg" style={{ alignItems: 'center' }}>
            <div>
              <Reveal>
                <Eyebrow>{t('lorawan.eyebrow')}</Eyebrow>
                <h1 className="h-display" style={{ marginTop: 16, maxWidth: '14ch' }}>
                  {t('lorawan.title')}
                </h1>
                <p className="lede" style={{ marginTop: 24 }}>
                  {t('lorawan.lede')}
                </p>
                <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
                  <button className="btn btn-primary btn-arrow" onClick={() => onGo('contacto')}>{t('lorawan.cta1')}</button>
                  <button className="btn btn-ghost" onClick={() => onGo('jabali')}>{t('lorawan.cta2')}</button>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div className="lr-visual img-wrap" style={{ aspectRatio: '4/5' }}>
                <img src="/Sensor.jpeg" alt="Gateway LoRaWAN en altura" className="img-cover" style={{ height: '100%' }} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY LORAWAN */}
      <section className="section section-tight">
        <div className="container">
          <Eyebrow>{t('lorawan.why.eyebrow')}</Eyebrow>
          <h2 className="h-1" style={{ marginTop: 14, maxWidth: '20ch' }}>{t('lorawan.why.title')}</h2>
          <div className="g-grid g-grid-4 g-gap-md" style={{ marginTop: 40 }}>
            {whyItems.map((s, i) => (
              <Reveal key={s.k} delay={i * 60}>
                <div className="lr-stat">
                  <div className="mono" style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.k}</div>
                  <div className="h-2" style={{ marginTop: 12, color: 'var(--primary)' }}>{s.v}</div>
                  <p className="muted" style={{ marginTop: 8, fontSize: 13.5 }}>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .lr-stat{ padding: 24px; border: 1px solid var(--border); border-radius: var(--radius-lg); background: var(--bg-elevated); height: 100%; }
        `}</style>
      </section>

      {/* APPLICATIONS */}
      <section className="section">
        <div className="container">
          <Eyebrow>{t('lorawan.apps.eyebrow')}</Eyebrow>
          <h2 className="h-1" style={{ marginTop: 14, maxWidth: '20ch' }}>{t('lorawan.apps.title')}</h2>
          <div className="lr-apps">
            {apps.map((a, i) => (
              <Reveal key={a.title} delay={i * 50}>
                <div className="lr-app">
                  <span className="lr-app-dot" />
                  <h3 className="h-3">{a.title}</h3>
                  <p className="muted" style={{ marginTop: 8, fontSize: 14 }}>{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .lr-apps{ margin-top: 48px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; background: var(--bg-elevated); }
          .lr-app{ padding: 28px; border-right: 1px solid var(--border); border-bottom: 1px solid var(--border); position: relative; }
          .lr-app:nth-child(3n){ border-right: 0; }
          .lr-app:nth-last-child(-n+3){ border-bottom: 0; }
          .lr-app-dot{ position: absolute; top: 28px; right: 28px; width: 8px; height: 8px; border-radius: 999px; background: var(--primary); box-shadow: 0 0 0 4px var(--primary-soft); }
          @media (max-width: 900px){ .lr-apps{ grid-template-columns: 1fr; } .lr-app{ border-right: 0 !important; } .lr-app:nth-last-child(-n+3){ border-bottom: 1px solid var(--border); } .lr-app:last-child{ border-bottom: 0; } }
        `}</style>
      </section>

      {/* CASE: JABALI */}
      <section className="section">
        <div className="container">
          <div className="lr-case">
            <div className="img-wrap" style={{ aspectRatio: '1/1' }}>
              <img src="/infra-jabali.jpeg" alt="Proyecto Jabalí · monitoreo de fauna con LoRaWAN" className="img-cover" style={{ height: '100%' }} />
            </div>
            <div>
              <Eyebrow>{t('lorawan.case.eyebrow')}</Eyebrow>
              <h2 className="h-1" style={{ marginTop: 12 }}>{t('lorawan.case.title')}</h2>
              <p className="lede" style={{ marginTop: 18 }}>
                {t('lorawan.case.lede')}
              </p>
              <ul className="lr-case-list">
                <li><Tick />{t('lorawan.case.b1')}</li>
                <li><Tick />{t('lorawan.case.b2')}</li>
                <li><Tick />{t('lorawan.case.b3')}</li>
              </ul>
              <button className="btn btn-ghost btn-arrow" onClick={() => onGo('jabali')} style={{ marginTop: 28 }}>
                {t('lorawan.case.cta')}
              </button>
            </div>
          </div>
        </div>
        <style>{`
          .lr-case{ background: var(--bg-elevated); border: 1px solid var(--border); border-radius: var(--radius-xl); padding: 48px; display: grid; grid-template-columns: 1fr 1.2fr; gap: 56px; align-items: center; }
          .lr-case-list{ list-style: none; padding: 0; margin: 24px 0 0; display: flex; flex-direction: column; gap: 12px; }
          .lr-case-list li{ display: flex; align-items: center; gap: 10px; color: var(--text-muted); font-size: 14.5px; }
          @media (max-width: 900px){ .lr-case{ grid-template-columns: 1fr; gap: 32px; padding: 32px; } }
        `}</style>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-final" style={{ borderRadius: 'var(--radius-xl)', padding: '56px', display: 'grid', gridTemplateColumns: '1.4fr auto', gap: 48, alignItems: 'center' }}>
            <div>
              <h2 className="h-1" style={{ maxWidth: '22ch' }}>{t('lorawan.cta.title')}</h2>
              <p className="lede" style={{ marginTop: 16 }}>{t('lorawan.cta.lede')}</p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-arrow" onClick={() => onGo('contacto')}>{t('lorawan.cta.btn1')}</button>
              <a className="btn btn-ghost" href="https://wa.me/5493584314857" target="_blank" rel="noopener">{t('lorawan.cta.btn2')}</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
