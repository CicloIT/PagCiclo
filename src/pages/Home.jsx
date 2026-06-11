import { Reveal, Eyebrow, Stat, Tick, Arrow } from '../components/ui'
import { useTranslation } from '../context/TranslationContext'

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  name: 'CicloIT',
  description: 'Soporte tecnológico, desarrollo de software, instalación Starlink y redes LoRaWAN en Río Cuarto, Córdoba, Argentina.',
  url: 'https://cicloit.com',
  telephone: '+5493584314857',
  email: 'info@cicloit.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Río Cuarto',
    addressRegion: 'Córdoba',
    addressCountry: 'AR',
  },
  areaServed: { '@type': 'State', name: 'Córdoba, Argentina' },
  foundingDate: '2018',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 12 },
  serviceType: [
    'Soporte tecnológico',
    'Desarrollo de software',
    'Instalación Starlink',
    'Redes LoRaWAN',
    'Ciberseguridad',
    'Capacitación TI',
  ],
  sameAs: [
    'https://www.linkedin.com/company/ciclo-it',
    'https://www.instagram.com/ciclo_it/',
  ],
}

export default function Home({ onGo }) {
  const { t } = useTranslation()

  const plans = [
    {
      id: 'start', tier: t('home.plan.start.tier'), name: 'CICLO Start', tag: t('home.plan.start.tag'),
      desc: t('home.plan.start.desc'),
      features: [t('home.plan.start.f1'), t('home.plan.start.f2'), t('home.plan.start.f3')],
    },
    {
      id: 'pro', tier: t('home.plan.pro.tier'), name: 'CICLO Pro', tag: t('home.plan.pro.tag'),
      desc: t('home.plan.pro.desc'),
      features: [t('home.plan.pro.f1'), t('home.plan.pro.f2'), t('home.plan.pro.f3')],
      featured: true,
    },
    {
      id: 'max', tier: t('home.plan.max.tier'), name: 'CICLO Max', tag: t('home.plan.max.tag'),
      desc: t('home.plan.max.desc'),
      features: [t('home.plan.max.f1'), t('home.plan.max.f2'), t('home.plan.max.f3')],
    },
  ]

  const services = [
    { n: '01', title: t('home.svc.01.title'), desc: t('home.svc.01.desc'), tags: ['Next.js', 'Astro', 'WordPress'] },
    { n: '02', title: t('home.svc.02.title'), desc: t('home.svc.02.desc'), tags: ['React Native', 'Flutter'] },
    { n: '03', title: t('home.svc.03.title'), desc: t('home.svc.03.desc'), tags: ['Node', 'Postgres', '.NET'] },
    { n: '04', title: t('home.svc.04.title'), desc: t('home.svc.04.desc'), tags: ['SOC', 'Pentest', 'EDR'] },
    { n: '05', title: t('home.svc.05.title'), desc: t('home.svc.05.desc'), tags: ['RRHH', 'Liquidación'] },
    { n: '06', title: t('home.svc.06.title'), desc: t('home.svc.06.desc'), tags: ['Auditoría'] },
  ]

  const loraItems = [
    { k: '/01', title: t('home.lora.01.title'), desc: t('home.lora.01.desc') },
    { k: '/02', title: t('home.lora.02.title'), desc: t('home.lora.02.desc') },
    { k: '/03', title: t('home.lora.03.title'), desc: t('home.lora.03.desc') },
  ]

  const testimonials = [
    { q: 'CICLO IT nos brinda un servicio integral de mantenimiento tecnológico, con monitoreo continuo, soporte técnico, mantenimiento preventivo y asistencia ante cualquier eventualidad. Su acompañamiento nos ayuda a mantener nuestros sistemas operativos y seguros día a día.', a: '', r: 'Indelma', plan: 'CICLO Max' },
    { q: 'Nos instalaron Starlink y quedo todo funcionando excelente, sin caidas', a: 'Horacio Pinasco', r: 'Country San Esteban', plan: 'Starlink' },
    { q: 'Espectacular todo, la pantalla y el juego. Ningún problema y salió todo muy lindo, muchas gracias por todo.', a: 'Soledad Viale', r: 'Agronomy Tech', plan: 'Software a medida' },
  ]

  return (
    <main className="page">
      <title>CicloIT — Soporte IT, Software y Conectividad en Río Cuarto</title>
      <meta name="description" content="Soporte tecnológico, desarrollo de software, instalación Starlink y redes LoRaWAN en Río Cuarto, Argentina. 8 años, 80+ clientes, respuesta en menos de 2 horas." />
      <meta property="og:title" content="CicloIT — Soporte IT, Software y Conectividad en Río Cuarto" />
      <meta property="og:description" content="Soporte tecnológico, desarrollo de software, instalación Starlink y redes LoRaWAN en Río Cuarto, Argentina." />
      <meta property="og:url" content="https://cicloit.com/" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://cicloit.com/" />
      <script type="application/ld+json">{JSON.stringify(JSON_LD)}</script>

      {/* HERO */}
      <section className="section hero" style={{ paddingTop: 'calc(var(--pad-section) * .7)', overflow: 'hidden' }}>
        <div className="hero-glow" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <div className="badge"><span className="dot" />{t('home.badge')}</div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="h-display" style={{ marginTop: 24, maxWidth: '14ch' }}>
              {t('home.hero.title.before')}<span style={{ color: 'var(--primary)' }}>{t('home.hero.title.highlight')}</span><br/>{t('home.hero.title.after')}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="lede" style={{ marginTop: 28 }}>
              {t('home.hero.lede')}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-arrow" onClick={() => onGo('planes')}>{t('home.hero.cta1')}</button>
              <button className="btn btn-ghost" onClick={() => onGo('servicios')}>{t('home.hero.cta2')}</button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="hero-stats">
              <Stat value="240+" label={t('home.stats.equipos')} />
              <Stat value="<2h" label={t('home.stats.respuesta')} />
              <Stat value="99.6" suffix="%" label={t('home.stats.uptime')} />
              <Stat value="8" label={t('home.stats.años')} />
            </div>
          </Reveal>
        </div>
        <style>{`
          .hero-glow{ position: absolute; top: -180px; left: -80px; width: 700px; height: 700px; border-radius: 50%; pointer-events: none; z-index: 0; }
          .dir-sharp .hero-glow{ background: radial-gradient(circle, color-mix(in srgb, var(--primary) 22%, transparent) 0%, transparent 62%); filter: blur(90px); }
          .dir-soft .hero-glow{ background: radial-gradient(circle, color-mix(in srgb, var(--primary) 7%, transparent) 0%, transparent 65%); filter: blur(80px); }
          .hero-stats{ margin-top: 72px; padding-top: 28px; border-top: 1px solid var(--border); display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
          @media (max-width: 800px){ .hero-stats{ grid-template-columns: repeat(2, 1fr); gap: 24px; } }
        `}</style>
      </section>

      {/* PLANES TEASER */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>{t('home.planes.eyebrow')}</Eyebrow>
              <h2 className="h-1" style={{ marginTop: 14, maxWidth: '18ch' }}>{t('home.planes.title')}</h2>
            </div>
            <button className="btn btn-link" onClick={() => onGo('planes')}>{t('home.planes.cta')}</button>
          </div>

          <div className="g-grid g-grid-3 g-gap-md" style={{ marginTop: 56 }}>
            {plans.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <div className={`plan-card ${p.featured ? 'is-featured' : ''}`}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="mono" style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{p.tier}</span>
                    {p.featured
                      ? <span className="badge"><span className="dot" />{p.tag}</span>
                      : <span className="mono" style={{ fontSize: 11, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{p.tag}</span>
                    }
                  </div>
                  <h3 className="h-2" style={{ marginTop: 16 }}>{p.name}</h3>
                  <p className="muted" style={{ marginTop: 10, fontSize: 14.5 }}>{p.desc}</p>
                  <ul className="plan-feats">
                    {p.features.map(f => (
                      <li key={f}><Tick />{f}</li>
                    ))}
                  </ul>
                  <button className="btn btn-ghost" style={{ marginTop: 28, width: '100%', justifyContent: 'center' }} onClick={() => onGo('planes')}>
                    {t('home.planes.detalle')}
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .section-head{ display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
          .plan-card{
            background: var(--bg-elevated); border: 1px solid var(--border);
            border-radius: var(--radius-lg); padding: 28px; height: 100%;
            display: flex; flex-direction: column;
            transition: border-color .2s ease, transform .2s ease, box-shadow .2s ease;
          }
          .plan-card.is-featured{ border-color: var(--primary); background: linear-gradient(180deg, color-mix(in srgb, var(--primary) 6%, var(--bg-elevated)) 0%, var(--bg-elevated) 60%); }
          .dir-soft .plan-card.is-featured{ box-shadow: 0 0 0 4px var(--primary-soft); background: linear-gradient(180deg, var(--primary-soft) 0%, var(--bg-elevated) 50%); }
          .dir-soft .plan-card:hover{ transform: translateY(-3px); box-shadow: var(--shadow-md); }
          .dir-sharp .plan-card:hover{ border-color: var(--border-strong); }
          .plan-feats{ list-style: none; padding: 0; margin: 24px 0 0; display: flex; flex-direction: column; gap: 10px; font-size: 14px; }
          .plan-feats li{ display: flex; align-items: center; gap: 10px; color: var(--text-muted); }
        `}</style>
      </section>

      {/* STARLINK FEATURE */}
      <section className="section starlink-feature">
        <div className="container-wide">
          <div className="sf-grid">
            <Reveal>
              <div className="sf-copy">
                <Eyebrow>{t('home.starlink.eyebrow')}</Eyebrow>
                <h2 className="h-1" style={{ marginTop: 14 }}>
                  {t('home.starlink.title.before')}<span style={{ color: 'var(--primary)' }}>{t('home.starlink.title.highlight')}</span>{t('home.starlink.title.after')}
                </h2>
                <p className="lede" style={{ marginTop: 24 }}>
                  {t('home.starlink.lede')}
                </p>
                <div className="sf-options">
                  <div className="sf-option">
                    <div className="sf-option-h">
                      <span className="mono">A</span>
                      <h3 className="h-3">{t('home.starlink.a.label')}</h3>
                    </div>
                    <p className="muted" style={{ fontSize: 14 }}>{t('home.starlink.a.desc')}</p>
                  </div>
                  <div className="sf-option">
                    <div className="sf-option-h">
                      <span className="mono">B</span>
                      <h3 className="h-3">{t('home.starlink.b.label')}</h3>
                    </div>
                    <p className="muted" style={{ fontSize: 14 }}>{t('home.starlink.b.desc')}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
                  <button className="btn btn-primary btn-arrow" onClick={() => onGo('instalacion-starlink')}>{t('home.starlink.cta1')}</button>
                  <a className="btn btn-ghost" href="https://wa.me/5493584314857" target="_blank" rel="noopener">{t('home.starlink.cta2')}</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="sf-visual">
                <img src="/StarLink800x1067.png" alt="Instalación de antena Starlink" className="img-cover" style={{ aspectRatio: '4/5' }} />
                <div className="sf-coord mono">
                  <span>33°08′S</span><span>·</span><span>64°20′W</span>
                  <span style={{ marginLeft: 'auto', color: 'var(--primary)' }}>● ONLINE</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <style>{`
          .starlink-feature{ background: var(--bg-tint); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
          .sf-grid{ display: grid; grid-template-columns: 1.1fr 1fr; gap: 80px; align-items: center; }
          .sf-options{ margin-top: 36px; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; padding-top: 24px; border-top: 1px solid var(--border); }
          .sf-option-h{ display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
          .sf-option-h .mono{ width: 22px; height: 22px; border-radius: 6px; background: var(--bg-elevated); border: 1px solid var(--border-strong); display: inline-flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 500; }
          .sf-visual{ position: relative; }
          .sf-coord{ position: absolute; left: 16px; right: 16px; bottom: 16px; display: flex; gap: 8px; align-items: center; padding: 10px 14px; background: var(--bg-elevated); border: 1px solid var(--border-strong); border-radius: var(--radius-md); font-size: 11px; color: var(--text-muted); }
          @media (max-width: 1000px){ .sf-grid{ grid-template-columns: 1fr; gap: 48px; } .sf-options{ grid-template-columns: 1fr; } }
        `}</style>
      </section>

      {/* SERVICIOS GRID */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>{t('home.svc.eyebrow')}</Eyebrow>
              <h2 className="h-1" style={{ marginTop: 14, maxWidth: '20ch' }}>{t('home.svc.title')}</h2>
            </div>
            <button className="btn btn-link" onClick={() => onGo('servicios')}>{t('home.svc.cta')}</button>
          </div>

          <div className="srv-grid">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <button className="srv-card lift" onClick={() => onGo('servicios')}>
                  <div className="srv-n mono">{s.n}</div>
                  <h3 className="h-3" style={{ marginTop: 24 }}>{s.title}</h3>
                  <p className="muted" style={{ marginTop: 8, fontSize: 14 }}>{s.desc}</p>
                  <div className="srv-tags">
                    {s.tags.map(tg => <span key={tg} className="tag">{tg}</span>)}
                  </div>
                  <span className="srv-arrow" aria-hidden="true">→</span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .srv-grid{ margin-top: 48px; display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; background: var(--bg-elevated); }
          .srv-card{ appearance: none; background: transparent; border: 0; border-right: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 32px; text-align: left; color: inherit; font: inherit; cursor: pointer; transition: background-color .2s ease; display: flex; flex-direction: column; min-height: 240px; position: relative; }
          .srv-arrow{ position: absolute; bottom: 32px; right: 28px; color: var(--primary); font-size: 16px; opacity: 0; transform: translateX(-8px); transition: opacity .2s ease, transform .22s var(--ease-out, ease); pointer-events: none; }
          .srv-card:hover .srv-arrow{ opacity: 1; transform: translateX(0); }
          .srv-card:hover{ background: var(--bg-tint); }
          .srv-card:nth-child(3n){ border-right: 0; }
          .srv-card:nth-last-child(-n+3){ border-bottom: 0; }
          .srv-n{ font-size: 12px; color: var(--text-faint); letter-spacing: 0.08em; }
          .srv-tags{ margin-top: auto; padding-top: 24px; display: flex; flex-wrap: wrap; gap: 6px; }
          @media (max-width: 900px){ .srv-grid{ grid-template-columns: 1fr; } .srv-card{ border-right: 0 !important; } .srv-card:nth-last-child(-n+3){ border-bottom: 1px solid var(--border); } .srv-card:last-child{ border-bottom: 0; } }
        `}</style>
      </section>

      {/* LORAWAN STRIP */}
      <section className="section section-tight">
        <div className="container">
          <div className="lr-strip">
            <div>
              <Eyebrow>{t('home.lora.eyebrow')}</Eyebrow>
              <h2 className="h-2" style={{ marginTop: 12, maxWidth: '18ch' }}>{t('home.lora.title')}</h2>
            </div>
            <div className="lr-grid-inner">
              {loraItems.map(item => (
                <div key={item.k} className="lr-cell">
                  <div className="mono lr-key">{item.k}</div>
                  <div className="h-3">{item.title}</div>
                  <p className="muted" style={{ fontSize: 13.5, marginTop: 6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <button className="btn btn-ghost btn-arrow" onClick={() => onGo('lorawan')}>{t('home.lora.cta')}</button>
          </div>
        </div>
        <style>{`
          .lr-strip{ background: var(--bg-elevated); border: 1px solid var(--border); border-radius: var(--radius-xl); padding: 48px; display: grid; grid-template-columns: 1.2fr 2fr auto; gap: 56px; align-items: center; }
          .lr-grid-inner{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
          .lr-key{ font-size: 11px; color: var(--primary); letter-spacing: 0.08em; margin-bottom: 8px; }
          @media (max-width: 1100px){ .lr-strip{ grid-template-columns: 1fr; gap: 28px; padding: 32px; } .lr-strip > button{ justify-self: start; } }
          @media (max-width: 600px){ .lr-grid-inner{ grid-template-columns: 1fr; gap: 16px; } }
        `}</style>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <Eyebrow>{t('home.test.eyebrow')}</Eyebrow>
          <h2 className="h-1" style={{ marginTop: 14, maxWidth: '20ch' }}>{t('home.test.title')}</h2>
          <div className="g-grid g-grid-3 g-gap-md" style={{ marginTop: 48 }}>
            {testimonials.map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <article className="testimonial">
                  <div className="t-quote mono">"</div>
                  <p style={{ fontSize: 16.5, lineHeight: 1.45 }}>{item.q}</p>
                  <div className="t-meta">
                    <div className="t-avatar">{item.a.split(' ').map(w => w[0]).join('').slice(0, 2)}</div>
                    <div>
                      <div style={{ fontWeight: 500, fontSize: 14 }}>{item.a}</div>
                      <div className="muted" style={{ fontSize: 12.5 }}>{item.r}</div>
                    </div>
                    <span className="tag" style={{ marginLeft: 'auto' }}>{item.plan}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .testimonial{ background: var(--bg-elevated); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 28px; height: 100%; display: flex; flex-direction: column; gap: 16px; }
          .t-quote{ font-size: 42px; line-height: .5; color: var(--primary); }
          .t-meta{ margin-top: auto; padding-top: 20px; border-top: 1px dashed var(--border-strong); display: flex; align-items: center; gap: 12px; }
          .t-avatar{ width: 36px; height: 36px; border-radius: 999px; background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%); flex: none; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; color: #fff; letter-spacing: 0.04em; font-family: 'Geist', sans-serif; }
        `}</style>
      </section>

      {/* CTA FINAL */}
      <section className="section">
        <div className="container">
          <div className="cta-final" style={{ borderRadius: 'var(--radius-xl)', padding: '64px', display: 'grid', gridTemplateColumns: '1.4fr auto', gap: 48, alignItems: 'center' }}>
            <div>
              <h2 className="h-1" style={{ maxWidth: '20ch' }}>{t('home.cta.title')}</h2>
              <p className="lede" style={{ marginTop: 16 }}>{t('home.cta.lede')}</p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-arrow" onClick={() => onGo('contacto')}>{t('home.cta.btn1')}</button>
              <a className="btn btn-ghost" href="https://wa.me/5493584314857" target="_blank" rel="noopener">{t('home.cta.btn2')}</a>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 800px){ .cta-final{ grid-template-columns: 1fr !important; padding: 40px !important; } }
        `}</style>
      </section>
    </main>
  )
}
