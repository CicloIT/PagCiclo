import { Fragment } from 'react'
import { Reveal, Eyebrow, Tick, Arrow } from '../components/ui'

const PLANS = [
  {
    id: 'start', tier: 'Nivel 1', name: 'CICLO Start', tag: 'Lo esencial',
    desc: 'Para empezar a cuidar tu tecnología sin sobre-comprometerse.',
    target: 'Comercios y oficinas chicas, 1–10 usuarios',
    sla: 'Respuesta 24–48 hs · L–V 9 a 18',
  },
  {
    id: 'pro', tier: 'Nivel 2', name: 'CICLO Pro', tag: 'Más elegido', featured: true,
    desc: 'Gestión activa, mejoras continuas y respuesta prioritaria.',
    target: 'PyMEs con operación continua, 10–80 usuarios',
    sla: 'Respuesta 4–8 hs · 24/7 multicanal',
  },
  {
    id: 'max', tier: 'Nivel 3', name: 'CICLO Max', tag: 'Operación crítica',
    desc: 'Soporte total, atención inmediata y optimización completa.',
    target: 'Empresas medianas/grandes y operaciones críticas',
    sla: 'Respuesta 1–2 hs · gerente de cuenta',
  },
]

const COMPARISON_GROUPS = [
  {
    name: 'Soporte y respuesta',
    rows: [
      ['Soporte por email', true, true, true],
      ['Soporte telefónico', false, true, true],
      ['Soporte por WhatsApp', false, true, true],
      ['Atención fuera de horario', false, true, true],
      ['Tiempo de respuesta', '24–48 hs', '4–8 hs', '1–2 hs'],
      ['Soporte 24/7 multicanal', false, true, true],
    ],
  },
  {
    name: 'Monitoreo y mantenimiento',
    rows: [
      ['Monitoreo de equipos', 'Mensual', 'Tiempo real', 'Tiempo real'],
      ['Mantenimiento preventivo', 'Básico', 'Proactivo', 'Predictivo'],
      ['Actualizaciones de seguridad', true, 'Prioritarias', 'Prioritarias'],
      ['Optimización de infraestructura', false, 'Avanzada', 'Continua'],
    ],
  },
  {
    name: 'Backups y resguardo',
    rows: [
      ['Backup', 'Básico', 'Redundante', 'Múltiples'],
      ['Restauración asistida', true, true, true],
      ['Pruebas de restore periódicas', false, 'Trimestral', 'Mensual'],
    ],
  },
  {
    name: 'Reportería',
    rows: [
      ['Documentación técnica', true, true, true],
      ['Reportes', 'A demanda', 'Semanales', 'Personalizados'],
      ['Revisión ejecutiva', false, false, 'Mensual'],
    ],
  },
  {
    name: 'Consultoría y proyectos',
    rows: [
      ['Consultoría técnica', false, true, true],
      ['Consultoría estratégica', false, false, true],
      ['Implementación de mejoras', 'Cotizable', 'Incluida limitada', 'Incluida'],
      ['Auditorías de seguridad', false, false, 'Anual incluida'],
      ['Capacitación del equipo', false, false, 'Incluida'],
      ['Gerente de cuenta dedicado', false, false, true],
    ],
  },
]

export default function Planes({ onGo }) {
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
          <Eyebrow>Planes de soporte</Eyebrow>
          <h1 className="h-display" style={{ marginTop: 16, maxWidth: '14ch' }}>
            Elegí el ciclo que<br/>te haga sentido.
          </h1>
          <p className="lede" style={{ marginTop: 24 }}>
            Todos los planes son mensuales, sin permanencia. Empezás donde necesitás y subís
            de nivel cuando la operación lo pide. Sin sorpresas en la factura.
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
                      <span className="mono pb-meta-k">Para</span>
                      <span>{p.target}</span>
                    </div>
                    <div className="pb-meta-row">
                      <span className="mono pb-meta-k">SLA</span>
                      <span>{p.sla}</span>
                    </div>
                  </div>
                  <button
                    className={`btn ${p.featured ? 'btn-primary' : 'btn-ghost'} btn-arrow`}
                    style={{ marginTop: 28, width: '100%', justifyContent: 'center' }}
                    onClick={() => onGo('contacto')}
                  >
                    Contratar {p.name.split(' ')[1]}
                  </button>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--text-faint)', marginTop: 14, textAlign: 'center', letterSpacing: '0.06em' }}>
                    Cotizado a medida según equipos y usuarios.
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
          <Eyebrow>Comparativa detallada</Eyebrow>
          <h2 className="h-1" style={{ marginTop: 14 }}>Qué incluye cada plan.</h2>
          <div className="cmp-wrap">
            <table className="cmp-table">
              <thead>
                <tr>
                  <th>Característica</th>
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
          <Eyebrow>Cómo elegir</Eyebrow>
          <h2 className="h-1" style={{ marginTop: 14, maxWidth: '24ch' }}>Si no estás seguro, esto te puede orientar.</h2>
          <div className="g-grid g-grid-3 g-gap-md" style={{ marginTop: 40 }}>
            {[
              { p: 'Empezás', q: 'Si recién estás organizando tu IT y querés evitar improvisaciones.', a: 'CICLO Start' },
              { p: 'Crecés', q: 'Si la operación no puede frenar y necesitás reacción rápida.', a: 'CICLO Pro' },
              { p: 'Operás crítico', q: 'Si una hora caído equivale a una pérdida importante.', a: 'CICLO Max' },
            ].map((c, i) => (
              <Reveal key={c.a} delay={i * 80}>
                <div className="card">
                  <div className="mono" style={{ fontSize: 11, color: 'var(--primary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{c.p}</div>
                  <p style={{ marginTop: 12, fontSize: 16, lineHeight: 1.45 }}>{c.q}</p>
                  <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px dashed var(--border-strong)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span className="mono" style={{ fontSize: 11, color: 'var(--text-muted)' }}>Recomendado</span>
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
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <h2 className="h-1" style={{ marginTop: 14 }}>Antes de contratar.</h2>
          <div className="faq-list">
            {[
              ['¿Hay contrato de permanencia?', 'No. Todos los planes se facturan mensualmente y podés dar de baja con 30 días de aviso.'],
              ['¿Cómo se cotiza cada plan?', 'A medida. Relevamos cantidad de equipos, usuarios, sistemas críticos y SLAs deseados. Te pasamos cotización en menos de 48 hs.'],
              ['¿Puedo cambiar de plan?', 'Sí, en cualquier momento. Hacemos un ajuste proporcional en la próxima factura.'],
              ['¿Atienden fuera de Río Cuarto?', 'Trabajamos en toda Argentina. Soporte remoto siempre; soporte presencial según ubicación.'],
              ['¿Qué pasa fuera del SLA?', 'Cualquier urgencia se atiende. El SLA define el compromiso de respuesta, no el límite del soporte.'],
            ].map(([q, a], i) => (
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
              <h2 className="h-1" style={{ maxWidth: '20ch' }}>¿Hablamos del plan que necesitás?</h2>
              <p className="lede" style={{ marginTop: 16 }}>Cotización clara en 48 hs. Sin compromiso.</p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-arrow" onClick={() => onGo('contacto')}>Pedir cotización</button>
              <a className="btn btn-ghost" href="https://wa.me/5493584314857" target="_blank" rel="noopener">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
