import { Reveal, Eyebrow, Tick, Arrow } from '../components/ui'

const SERVICIOS = [
  {
    id: 'soporte', n: '01', t: 'Soporte y Mantenimiento',
    img: '/soporte.webp',
    short: 'Planes de soporte tecnológico continuo para mantener tu operación en marcha.',
    body: 'Tres niveles diseñados para escalar con tu organización. Monitoreo, respuesta a incidentes, backups y mantenimiento preventivo. Sin sorpresas en la factura.',
    bullets: ['Monitoreo 24/7', 'Backup redundante', 'Soporte multicanal', 'Reportes periódicos'],
    tags: ['Infraestructura', 'Networking', 'Help desk'],
    cta: 'planes',
  },
  {
    id: 'web', n: '02', t: 'Páginas Web',
    img: '/pag.webp',
    short: 'Sitios institucionales y landings rápidas, accesibles y optimizadas para conversión.',
    body: 'Desde landing pages para campañas hasta plataformas a medida. Stack moderno, SEO técnico, CMS si lo necesitás, performance medible.',
    bullets: ['Next.js / Astro / WordPress', 'Core Web Vitals óptimos', 'Hosting + dominio + CDN', 'SEO técnico incluido'],
    tags: ['Frontend', 'SEO', 'CMS'],
  },
  {
    id: 'apps', n: '03', t: 'Aplicaciones Móviles',
    img: '/Moda.webp',
    imgStyle: { aspectRatio: '16/9' },
    short: 'Apps nativas e híbridas para iOS y Android.',
    body: 'Diseñamos UX, desarrollamos y publicamos. Aplicaciones que se sienten nativas, con sincronización offline y notificaciones push.',
    bullets: ['React Native / Flutter / Swift / Kotlin', 'Publicación en App Store y Play Store', 'Integración con APIs y servicios cloud', 'Mantenimiento evolutivo'],
    tags: ['iOS', 'Android', 'React Native'],
  },
  {
    id: 'software', n: '04', t: 'Software a Medida',
    img: '/Ordenes.webp',
    imgStyle: { aspectRatio: '16/9' },
    short: 'Aplicaciones web y de escritorio diseñadas para tu negocio.',
    body: 'Cuando los productos enlatados no alcanzan. Levantamos requerimientos, diseñamos arquitectura y entregamos un sistema que respira con tu operación.',
    bullets: ['Web apps · APIs · Microservicios', 'Sistemas internos y dashboards', 'Integraciones con ERPs y POS', 'Mantenimiento y evolución continua'],
    tags: ['Node', '.NET', 'Postgres', 'Cloud'],
  },
  {
    id: 'ciber', n: '05', t: 'Ciberseguridad',
    img: '/ciberseguridad.webp',
    imgStyle: { aspectRatio: '16/9' },
    short: 'Protección avanzada para sistemas, redes y personas.',
    body: 'Auditorías, hardening, respuesta a incidentes, capacitación interna y monitoreo continuo. Reducimos la superficie de ataque antes de que duela.',
    bullets: ['Penetration testing y auditorías', 'Hardening de servidores y endpoints', 'Capacitación anti-phishing', 'Respuesta a incidentes 24/7'],
    tags: ['Pentest', 'SOC', 'Compliance'],
  },
  {
    id: 'lcg', n: '06', t: 'LcGestion',
    img: '/lcgestion.webp',
    imgStyle: { aspectRatio: '16/9' },
    short: 'Sistema integral de gestión de recursos humanos.',
    body: 'Producto propio. Liquidación de sueldos, control de presencia, legajos digitales, vacaciones y reportería. Adaptable a la operación de tu empresa.',
    bullets: ['Liquidación de sueldos automatizada', 'Control de asistencia y horarios', 'Legajos digitales y certificados', 'Reportería ejecutiva'],
    tags: ['RRHH', 'Producto propio', 'SaaS'],
  },
  {
    id: 'starlink', n: '07', t: 'Instalación Starlink',
    img: '/StarLink1.jpg',
    imgStyle: { aspectRatio: '4/3' },
    short: 'Internet satelital de alta velocidad donde la red convencional no llega.',
    body: 'Relevamiento del sitio, importación o suministro del equipo, instalación profesional y puesta en marcha. Soporte continuo opcional.',
    bullets: ['Starlink Estándar y Mini', 'Relevamiento sin cargo', 'Instalación + configuración', 'Soporte post-instalación'],
    tags: ['Conectividad', 'Satelital'],
    cta: 'starlink',
  },
  {
    id: 'lorawan', n: '08', t: 'LoRaWAN / IoT',
    img: '/Sensor4.jpeg',
    short: 'Sensores de largo alcance y bajo consumo para monitoreo distribuido.',
    body: 'Implementamos gateways, sensores y dashboards. Monitoreo de niveles, temperatura, humedad, energía y más, accesible desde cualquier lugar.',
    bullets: ['Gateways y sensores LoRaWAN', 'Dashboards en la nube', 'Alertas automáticas', 'Integración con sistemas existentes'],
    tags: ['IoT', 'Agro', 'Industria'],
    cta: 'lorawan',
  },
]

export default function Servicios({ onGo }) {
  return (
    <main className="page">
      <title>Servicios — CicloIT | Soporte IT, Software, Ciberseguridad, Starlink, LoRaWAN</title>
      <meta name="description" content="Soporte IT, desarrollo web y apps, ciberseguridad, instalación Starlink y redes LoRaWAN en Río Cuarto, Córdoba. Soluciones tecnológicas a medida para empresas." />
      <meta property="og:title" content="Servicios — CicloIT" />
      <meta property="og:description" content="Soporte IT, desarrollo web y apps, ciberseguridad, Starlink y LoRaWAN en Río Cuarto, Córdoba." />
      <meta property="og:url" content="https://cicloit.com/servicios" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://cicloit.com/servicios" />
      {/* HERO */}
      <section className="section section-tight" style={{ paddingTop: 'calc(var(--pad-section) * .6)' }}>
        <div className="container">
          <Eyebrow>Servicios · 2026</Eyebrow>
          <h1 className="h-display" style={{ marginTop: 16, maxWidth: '16ch' }}>
            Todo lo que necesitás<br/>en un solo equipo.
          </h1>
          <p className="lede" style={{ marginTop: 24, maxWidth: '60ch' }}>
            Desde el cable hasta la nube. Ocho líneas de servicio que pueden contratarse
            por separado o combinarse en un plan integral.
          </p>
        </div>
      </section>

      {/* SERVICE INDEX */}
      <section className="section section-tight">
        <div className="container">
          <div className="srv-index">
            {SERVICIOS.map(s => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="srv-index-row"
                onClick={(e) => { e.preventDefault(); document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
              >
                <span className="mono srv-index-n">{s.n}</span>
                <span className="srv-index-t">{s.t}</span>
                <span className="srv-index-arrow"><Arrow /></span>
              </a>
            ))}
          </div>
        </div>
        <style>{`
          .srv-index{ border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
          .srv-index-row{ display: grid; grid-template-columns: 60px 1fr auto; align-items: center; gap: 24px; padding: 22px 8px; border-bottom: 1px solid var(--border); cursor: default; transition: background-color .15s ease, padding .15s ease, color .15s ease; }
          .srv-index-row:last-child{ border-bottom: 0; }
          .srv-index-row:hover{ background: var(--bg-tint); padding-left: 16px; }
          .srv-index-row:hover .srv-index-arrow{ color: var(--primary); }
          .srv-index-n{ font-size: 12px; color: var(--text-faint); }
          .srv-index-t{ font-size: clamp(22px, 2.2vw, 30px); font-weight: 500; letter-spacing: -0.02em; }
          .srv-index-arrow{ color: var(--text-faint); }
        `}</style>
      </section>

      {/* SERVICE BLOCKS */}
      {SERVICIOS.map((s, i) => (
        <section key={s.id} id={s.id} className="section">
          <div className="container">
            <div className="srv-block">
              <div className="srv-block-side">
                <div className="mono" style={{ fontSize: 11, color: 'var(--text-faint)', letterSpacing: '0.08em' }}>{s.n} / 08</div>
                <div className="srv-block-rule" />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {s.tags.map(tg => <span key={tg} className="tag">{tg}</span>)}
                </div>
              </div>
              <div className="srv-block-main">
                <Reveal>
                  <h2 className="h-1">{s.t}</h2>
                  <p className="lede" style={{ marginTop: 18 }}>{s.short}</p>
                  <p className="muted" style={{ marginTop: 14, fontSize: 15, maxWidth: '62ch' }}>{s.body}</p>
                  <ul className="srv-bullets">
                    {s.bullets.map(b => <li key={b}><Tick />{b}</li>)}
                  </ul>
                  {s.cta && (
                    <button className="btn btn-ghost btn-arrow" style={{ marginTop: 32 }} onClick={() => onGo(s.cta)}>
                      Ver más
                    </button>
                  )}
                </Reveal>
              </div>
              <div className="srv-block-visual img-wrap">
                <img src={s.img} alt={s.t} className="img-cover" style={{ aspectRatio: '4/5', ...s.imgStyle }} />
              </div>
            </div>
          </div>
          <style>{`
            .srv-block{ display: grid; grid-template-columns: 180px 1fr 320px; gap: 56px; padding-top: 48px; border-top: 1px solid var(--border); }
            .srv-block-side{ display: flex; flex-direction: column; gap: 16px; }
            .srv-block-rule{ width: 32px; height: 2px; background: var(--primary); margin: 4px 0 8px; }
            .srv-bullets{ list-style: none; padding: 0; margin: 28px 0 0; display: grid; grid-template-columns: 1fr 1fr; gap: 12px 32px; font-size: 14.5px; }
            .srv-bullets li{ display: flex; align-items: center; gap: 10px; color: var(--text-muted); }
            @media (max-width: 1000px){ .srv-block{ grid-template-columns: 1fr; gap: 24px; } .srv-block-visual{ order: -1; max-width: 480px; } .srv-bullets{ grid-template-columns: 1fr; } }
          `}</style>
        </section>
      ))}

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-band" style={{ border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-xl)', padding: '56px', display: 'flex', gap: 48, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <div>
              <Eyebrow>Empecemos</Eyebrow>
              <h2 className="h-1" style={{ marginTop: 12, maxWidth: '22ch' }}>¿Cuál de estos servicios necesitás resolver primero?</h2>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-arrow" onClick={() => onGo('contacto')}>Hablemos</button>
              <button className="btn btn-ghost" onClick={() => onGo('planes')}>Ver planes</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
