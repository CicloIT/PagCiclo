import { Reveal, Eyebrow, Stat, Tick } from '../components/ui'

export default function Nosotros({ onGo }) {
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
          <Eyebrow>Sobre nosotros · Río Cuarto, AR</Eyebrow>
          <h1 className="h-display" style={{ marginTop: 16, maxWidth: '16ch' }}>
            Un ciclo que <span style={{ color: 'var(--primary)' }}>nunca se</span> detiene.
          </h1>
          <p className="lede" style={{ marginTop: 24 }}>
            Somos un equipo de profesionales en mantenimiento, desarrollo de software y conectividad.
            Trabajamos con empresas que necesitan tecnología que funcione, todo el tiempo, sin excusas.
          </p>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="section section-tight">
        <div className="container">
          <div className="manifesto">
            <div className="manifesto-side">
              <Eyebrow>Manifiesto</Eyebrow>
              <h2 className="h-1" style={{ marginTop: 12, maxWidth: '12ch' }}>Cómo pensamos.</h2>
            </div>
            <ol className="manifesto-list">
              {[
                ['Anticiparse, no reaccionar.', 'Un sistema bien mantenido no necesita rescates. Invertimos tiempo en prevención y monitoreo para que las urgencias sean la excepción.'],
                ['Claridad por encima de jerga.', 'Hablamos en castellano simple. Si una solución no puede explicarse, probablemente no sea la mejor solución.'],
                ['Ciclos, no fuegos.', 'Mejor mantener que parchear. Trabajamos en ciclos de revisión y mejora, no en heroicidades aisladas.'],
                ['Datos sobre opiniones.', 'Medimos, reportamos y decidimos en base a evidencia. La intuición ayuda, pero los números mandan.'],
              ].map(([h, d], i) => (
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
            <Stat value="8" label="Años trabajando" />
            <Stat value="80+" label="Clientes activos" />
            <Stat value="240+" label="Equipos monitoreados" />
            <Stat value="12" label="Profesionales en el equipo" />
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
          <Eyebrow>Casos de éxito</Eyebrow>
          <h2 className="h-1" style={{ marginTop: 14, maxWidth: '20ch' }}>Algunos proyectos recientes.</h2>
          <div className="cases">
            {[
              {
                cli: 'AgroSur · Sector agropecuario',
                img: '/Infraja.jpeg',
                title: 'De 4 caídas mensuales a uptime 99.7% en seis meses',
                kpi: [['Uptime', '99.7%'], ['Tickets críticos', '−82%'], ['Plan', 'CICLO Max']],
                d: 'Migración completa a infraestructura monitoreada en tiempo real, con backups redundantes y mantenimiento preventivo trimestral.',
                tags: ['Soporte', 'Infraestructura', 'Backup'],
              },
              {
                cli: 'Clínica del Centro · Salud',
                img: '/Turno.webp',
                title: 'App interna para gestión de turnos en 6 semanas',
                kpi: [['Time-to-launch', '6 sem'], ['Adopción interna', '94%'], ['Plataforma', 'iOS + Web']],
                d: 'Diseño, desarrollo y publicación de aplicación interna integrada al sistema de historia clínica. Documentación y soporte continuos.',
                tags: ['Software a medida', 'iOS', 'Integración'],
              },
              {
                cli: 'Establecimiento El Algarrobo · Agro',
                img: '/StarlinkMini.webp',
                title: 'Starlink + sensores LoRaWAN en 1.200 ha',
                kpi: [['Cobertura', '100%'], ['Sensores activos', '24'], ['Servicios', 'Starlink + IoT']],
                d: 'Instalación de Starlink en casa de campo, gateway LoRaWAN y sensores de nivel en tanques y silos. Dashboard centralizado.',
                tags: ['Starlink', 'LoRaWAN', 'Agro'],
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <article className="case">
                  <div className="img-wrap case-side">
                    <img src={c.img} alt={c.cli} className="img-cover" style={{ height: '100%' }} />
                  </div>
                  <div className="case-main">
                    <div className="mono" style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{c.cli}</div>
                    <h3 className="h-2" style={{ marginTop: 12 }}>{c.title}</h3>
                    <p className="muted" style={{ marginTop: 12, fontSize: 15 }}>{c.d}</p>
                    <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {c.tags.map(t => <span key={t} className="tag">{t}</span>)}
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
          <Eyebrow>Lo que dicen</Eyebrow>
          <h2 className="h-1" style={{ marginTop: 14 }}>Testimonios.</h2>
          <div className="g-grid g-grid-2 g-gap-md" style={{ marginTop: 40 }}>
            {[
              { q: 'CicloIT no nos vende soluciones, nos ayuda a tomar mejores decisiones. La diferencia con otros proveedores es notable: hablan claro, miden todo y se anticipan.', a: 'Lucía Martínez', r: 'Gerente de Operaciones · AgroSur', plan: 'CICLO Max · 3 años' },
              { q: 'Necesitábamos una app móvil interna y la entregaron en 6 semanas, funcionando. Documentación, capacitación y soporte impecables.', a: 'Florencia Pérez', r: 'CTO · Clínica del Centro', plan: 'Software + Pro' },
              { q: 'Instalaron Starlink en un campo donde no había nada. En 48 hs estábamos online y la atención post-venta sigue.', a: 'Ramiro Bedoya', r: 'Productor agropecuario · El Algarrobo', plan: 'Starlink + LoRaWAN' },
              { q: 'Tuvimos un incidente de seguridad un sábado a la noche. Estaban encima en 15 minutos. Resolvieron, documentaron y mejoraron los procesos.', a: 'Jorge Casas', r: 'Director · Estudio Casas & Asoc.', plan: 'CICLO Pro' },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <article className="testi">
                  <div className="t-quote mono">"</div>
                  <p style={{ fontSize: 17, lineHeight: 1.5 }}>{t.q}</p>
                  <div className="t-meta">
                    <div className="t-avatar" />
                    <div>
                      <div style={{ fontWeight: 500, fontSize: 14.5 }}>{t.a}</div>
                      <div className="muted" style={{ fontSize: 13 }}>{t.r}</div>
                    </div>
                    <span className="tag" style={{ marginLeft: 'auto' }}>{t.plan}</span>
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
          <Eyebrow>Equipo</Eyebrow>
          <h2 className="h-1" style={{ marginTop: 14, maxWidth: '20ch' }}>Quienes están atrás del ciclo.</h2>
          <div className="team-grid">
            {[
              ['Soporte e infra', '4 personas'],
              ['Desarrollo de software', '5 personas'],
              ['Ciberseguridad', '2 personas'],
              ['Conectividad / IoT', '2 personas'],
              ['Diseño y producto', '1 persona'],
              ['Operaciones', '2 personas'],
            ].map(([t, c], i) => (
              <Reveal key={t} delay={i * 50}>
                <div className="team-cell">
                  <div className="team-cell-h">{t}</div>
                  <div className="mono team-cell-c">{c}</div>
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
              <h2 className="h-1" style={{ maxWidth: '20ch' }}>¿Hablamos de un proyecto juntos?</h2>
              <p className="lede" style={{ marginTop: 16 }}>Te respondemos en menos de 48 hs.</p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-arrow" onClick={() => onGo('contacto')}>Contactar</button>
              <a className="btn btn-ghost" href="https://wa.me/5493584314857" target="_blank" rel="noopener">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
