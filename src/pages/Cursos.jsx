import { Reveal, Eyebrow } from '../components/ui'

const CURSOS = [
  { lvl: 'Inicial', t: 'Fundamentos de Ciberseguridad para Empresas', d: 'Phishing, contraseñas, MFA, backup. Para empleados no técnicos.', dur: '6 hs', mod: 'Presencial o virtual', cupo: 'Hasta 25' },
  { lvl: 'Intermedio', t: 'Introducción al Desarrollo Web Moderno', d: 'HTML, CSS, JavaScript y frameworks. Para quienes quieren empezar.', dur: '40 hs', mod: 'Virtual', cupo: 'Hasta 30' },
  { lvl: 'Intermedio', t: 'Mantenimiento de Redes y Servidores', d: 'Networking, virtualización, monitoreo, troubleshooting práctico.', dur: '32 hs', mod: 'Presencial', cupo: 'Hasta 15' },
  { lvl: 'Avanzado', t: 'Implementación de IoT con LoRaWAN', d: 'Diseño de red, gateways, sensores, dashboards y casos reales.', dur: '24 hs', mod: 'Híbrido', cupo: 'Hasta 12' },
  { lvl: 'Customizado', t: 'Capacitación a medida', d: 'Diseñamos un programa para el equipo de tu empresa, según necesidades.', dur: 'A definir', mod: 'A definir', cupo: 'Equipo completo' },
]

export default function Cursos({ onGo }) {
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
          <Eyebrow>Cursos · 2026</Eyebrow>
          <h1 className="h-display" style={{ marginTop: 16, maxWidth: '16ch' }}>
            Formación que se nota<br/>en el trabajo del día.
          </h1>
          <p className="lede" style={{ marginTop: 24, maxWidth: '60ch' }}>
            Capacitaciones diseñadas y dictadas por nuestro propio equipo técnico.
            Para empresas, equipos internos y personas que quieren mejorar.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-arrow" onClick={() => onGo('contacto')}>Consultar próximos inicios</button>
            <a className="btn btn-ghost" href="https://wa.me/5493584314857" target="_blank" rel="noopener">Diseñar curso a medida</a>
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section className="section">
        <div className="container">
          <Eyebrow>Catálogo</Eyebrow>
          <h2 className="h-1" style={{ marginTop: 14 }}>Cinco programas disponibles.</h2>
          <div className="cursos-list">
            {CURSOS.map((c, i) => (
              <Reveal key={c.t} delay={i * 60}>
                <article className="curso-row">
                  <div><span className="tag">{c.lvl}</span></div>
                  <div className="curso-body">
                    <h3 className="h-2">{c.t}</h3>
                    <p className="muted" style={{ marginTop: 8, fontSize: 14.5, maxWidth: '64ch' }}>{c.d}</p>
                  </div>
                  <div className="curso-meta">
                    <div><span className="mono curso-k">Dur.</span> <span>{c.dur}</span></div>
                    <div><span className="mono curso-k">Mod.</span> <span>{c.mod}</span></div>
                    <div><span className="mono curso-k">Cupo</span> <span>{c.cupo}</span></div>
                  </div>
                  <div>
                    <button className="btn btn-ghost btn-arrow" onClick={() => onGo('contacto')}>Inscribir equipo</button>
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
          <Eyebrow>Cómo funciona</Eyebrow>
          <h2 className="h-1" style={{ marginTop: 14, maxWidth: '20ch' }}>Tres pasos para arrancar.</h2>
          <div className="g-grid g-grid-3 g-gap-md" style={{ marginTop: 36 }}>
            {[
              ['01', 'Consultá', 'Nos contás qué necesitás aprender o capacitar. Te orientamos sin compromiso.'],
              ['02', 'Definimos', 'Te enviamos programa, calendario y presupuesto. Ajustamos a tu equipo.'],
              ['03', 'Empezamos', 'Material, plataforma, certificación y soporte durante todo el cursado.'],
            ].map(([n, t, d]) => (
              <div className="card" key={n}>
                <div className="mono" style={{ fontSize: 12, color: 'var(--primary)', letterSpacing: '0.08em' }}>{n}</div>
                <h3 className="h-3" style={{ marginTop: 14 }}>{t}</h3>
                <p className="muted" style={{ marginTop: 8, fontSize: 14 }}>{d}</p>
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
              <h2 className="h-1" style={{ maxWidth: '20ch' }}>¿Querés capacitar a tu equipo?</h2>
              <p className="lede" style={{ marginTop: 16 }}>Te armamos un programa que se ajuste a su nivel y disponibilidad.</p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-arrow" onClick={() => onGo('contacto')}>Consultar</button>
              <a className="btn btn-ghost" href="https://wa.me/5493584314857" target="_blank" rel="noopener">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
