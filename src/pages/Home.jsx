import { Reveal, Eyebrow, Stat, Tick, Arrow } from '../components/ui'

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
            <div className="badge"><span className="dot" />Operativos · soporte 24/7 activo</div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="h-display" style={{ marginTop: 24, maxWidth: '14ch' }}>
              Tecnología que <span style={{ color: 'var(--primary)' }}>no se</span><br/>interrumpe.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="lede" style={{ marginTop: 28 }}>
              Mantenemos tus redes, sistemas y conectividad funcionando — desde un plan
              de soporte mensual hasta instalar Starlink en el medio del campo o desplegar
              sensores LoRaWAN para tu empresa.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-arrow" onClick={() => onGo('planes')}>Ver planes de soporte</button>
              <button className="btn btn-ghost" onClick={() => onGo('servicios')}>Explorar servicios</button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="hero-stats">
              <Stat value="240+" label="Equipos monitoreados" />
              <Stat value="<2h" label="Tiempo de respuesta · Max" />
              <Stat value="99.6" suffix="%" label="Uptime promedio anual" />
              <Stat value="8" label="Años en el ciclo" />
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
              <Eyebrow>01 · Planes de soporte</Eyebrow>
              <h2 className="h-1" style={{ marginTop: 14, maxWidth: '18ch' }}>Tres niveles. Una sola filosofía: anticiparse.</h2>
            </div>
            <button className="btn btn-link" onClick={() => onGo('planes')}>Ver comparativa completa</button>
          </div>

          <div className="g-grid g-grid-3 g-gap-md" style={{ marginTop: 56 }}>
            {[
              { tier: 'Nivel 1', name: 'CICLO Start', tag: 'Lo esencial', desc: 'Soporte técnico básico, monitoreo mensual y backups para arrancar sin riesgos.', features: ['Respuesta 24–48 h', 'Backup básico', 'Soporte por email'] },
              { tier: 'Nivel 2', name: 'CICLO Pro', tag: 'Recomendado', desc: 'Gestión activa, monitoreo en tiempo real y soporte 24/7 por todos los canales.', features: ['Respuesta 4–8 h', 'Mantenimiento proactivo', 'Soporte 24/7'], featured: true },
              { tier: 'Nivel 3', name: 'CICLO Max', tag: 'Operación crítica', desc: 'Soporte total, gerente de cuenta y optimización continua de la infraestructura.', features: ['Respuesta 1–2 h', 'Account manager', 'Auditorías de seguridad'] },
            ].map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
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
                    Detalles del plan
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
                <Eyebrow>02 · Conectividad sin límites</Eyebrow>
                <h2 className="h-1" style={{ marginTop: 14 }}>
                  Instalamos <span style={{ color: 'var(--primary)' }}>Starlink</span> donde la red<br/>convencional no llega.
                </h2>
                <p className="lede" style={{ marginTop: 24 }}>
                  Internet satelital de alta velocidad para campos, obras, plantas industriales,
                  cabañas y oficinas remotas. Hacemos el relevamiento, la instalación y dejamos todo configurado.
                </p>
                <div className="sf-options">
                  <div className="sf-option">
                    <div className="sf-option-h">
                      <span className="mono">A</span>
                      <h3 className="h-3">Starlink Estándar</h3>
                    </div>
                    <p className="muted" style={{ fontSize: 14 }}>Ideal para residencias y empresas que necesitan conectividad constante.</p>
                  </div>
                  <div className="sf-option">
                    <div className="sf-option-h">
                      <span className="mono">B</span>
                      <h3 className="h-3">Starlink Mini</h3>
                    </div>
                    <p className="muted" style={{ fontSize: 14 }}>Compacta y portátil, perfecta para viajes, campamentos o espacios reducidos.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
                  <button className="btn btn-primary btn-arrow" onClick={() => onGo('starlink')}>Ver detalles de instalación</button>
                  <a className="btn btn-ghost" href="https://wa.me/5493584314857" target="_blank" rel="noopener">Solicitar presupuesto</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="sf-visual">
                <img src="/StarLink1.jpg" alt="Instalación de antena Starlink" className="img-cover" style={{ aspectRatio: '4/5' }} />
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
              <Eyebrow>03 · Servicios</Eyebrow>
              <h2 className="h-1" style={{ marginTop: 14, maxWidth: '20ch' }}>Un equipo. Toda la cadena tecnológica.</h2>
            </div>
            <button className="btn btn-link" onClick={() => onGo('servicios')}>Ver todos →</button>
          </div>

          <div className="srv-grid">
            {[
              { n: '01', t: 'Desarrollo Web', d: 'Sitios y aplicaciones web modernas, performantes y responsivas.', tags: ['Next.js', 'Astro', 'WordPress'] },
              { n: '02', t: 'Apps Móviles', d: 'iOS y Android nativo o híbrido, según el caso de uso del cliente.', tags: ['React Native', 'Flutter'] },
              { n: '03', t: 'Software a Medida', d: 'Aplicaciones web y de escritorio para potenciar tu negocio.', tags: ['Node', 'Postgres', '.NET'] },
              { n: '04', t: 'Ciberseguridad', d: 'Protección avanzada de sistemas, auditorías y respuesta a incidentes.', tags: ['SOC', 'Pentest', 'EDR'] },
              { n: '05', t: 'LcGestion', d: 'Sistema integral de gestión de recursos humanos desarrollado in-house.', tags: ['RRHH', 'Liquidación'] },
              { n: '06', t: 'Consultoría IT', d: 'Diagnóstico, mapa de ruta y acompañamiento en transformación digital.', tags: ['Auditoría'] },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <button className="srv-card lift" onClick={() => onGo('servicios')}>
                  <div className="srv-n mono">{s.n}</div>
                  <h3 className="h-3" style={{ marginTop: 24 }}>{s.t}</h3>
                  <p className="muted" style={{ marginTop: 8, fontSize: 14 }}>{s.d}</p>
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
              <Eyebrow>04 · Internet de las Cosas</Eyebrow>
              <h2 className="h-2" style={{ marginTop: 12, maxWidth: '18ch' }}>Sensores LoRaWAN para monitorear lo que importa, en tiempo real.</h2>
            </div>
            <div className="lr-grid-inner">
              {[
                ['/01', 'Sensores', 'Niveles, temperatura, humedad, energía.'],
                ['/02', 'Dashboards', 'Visualización en la nube desde cualquier lugar.'],
                ['/03', 'Automatización', 'Activación remota de bombas, alarmas, control.'],
              ].map(([k, t, d]) => (
                <div key={k} className="lr-cell">
                  <div className="mono lr-key">{k}</div>
                  <div className="h-3">{t}</div>
                  <p className="muted" style={{ fontSize: 13.5, marginTop: 6 }}>{d}</p>
                </div>
              ))}
            </div>
            <button className="btn btn-ghost btn-arrow" onClick={() => onGo('lorawan')}>Explorar LoRaWAN</button>
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
          <Eyebrow>05 · Quienes confían en nosotros</Eyebrow>
          <h2 className="h-1" style={{ marginTop: 14, maxWidth: '20ch' }}>Lo que dicen del trabajo en CicloIT.</h2>
          <div className="g-grid g-grid-3 g-gap-md" style={{ marginTop: 48 }}>
            {[
              { q: 'Pasamos de tener caídas cada semana a literalmente olvidarnos del servidor. El equipo se anticipa.', a: 'Lucía Martínez', r: 'Gerente de Operaciones · AgroSur', plan: 'CICLO Max' },
              { q: 'Nos instalaron Starlink en un campo donde no había nada. En 48 hs estábamos online.', a: 'Ramiro Bedoya', r: 'Productor agropecuario', plan: 'Starlink' },
              { q: 'Desarrollaron la app interna en 6 semanas. Documentación impecable y soporte continuo.', a: 'Florencia Pérez', r: 'CTO · Clínica del Centro', plan: 'Software a medida' },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <article className="testimonial">
                  <div className="t-quote mono">"</div>
                  <p style={{ fontSize: 16.5, lineHeight: 1.45 }}>{t.q}</p>
                  <div className="t-meta">
                    <div className="t-avatar">{t.a.split(' ').map(w => w[0]).join('').slice(0, 2)}</div>
                    <div>
                      <div style={{ fontWeight: 500, fontSize: 14 }}>{t.a}</div>
                      <div className="muted" style={{ fontSize: 12.5 }}>{t.r}</div>
                    </div>
                    <span className="tag" style={{ marginLeft: 'auto' }}>{t.plan}</span>
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
              <h2 className="h-1" style={{ maxWidth: '20ch' }}>¿Hablamos de tu próximo ciclo?</h2>
              <p className="lede" style={{ marginTop: 16 }}>Contanos qué necesitás resolver. Te devolvemos un plan claro en menos de 48 horas.</p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-arrow" onClick={() => onGo('contacto')}>Escribir mensaje</button>
              <a className="btn btn-ghost" href="https://wa.me/5493584314857" target="_blank" rel="noopener">WhatsApp directo</a>
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
