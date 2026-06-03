import { Reveal, Eyebrow, Tick } from '../components/ui'

export default function LoRaWAN({ onGo }) {
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
                <Eyebrow>LoRaWAN · IoT</Eyebrow>
                <h1 className="h-display" style={{ marginTop: 16, maxWidth: '14ch' }}>
                  Medir, monitorear, automatizar.
                </h1>
                <p className="lede" style={{ marginTop: 24 }}>
                  Implementamos redes LoRaWAN de largo alcance y bajo consumo para industria, agro y ciudades.
                  Sensores distribuidos, dashboards en la nube, alertas en tiempo real.
                </p>
                <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
                  <button className="btn btn-primary btn-arrow" onClick={() => onGo('contacto')}>Cotizar un proyecto</button>
                  <button className="btn btn-ghost" onClick={() => onGo('jabali')}>Caso Proyecto Jabalí →</button>
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
          <Eyebrow>Por qué LoRaWAN</Eyebrow>
          <h2 className="h-1" style={{ marginTop: 14, maxWidth: '20ch' }}>Tecnología pensada para el campo, no para la oficina.</h2>
          <div className="g-grid g-grid-4 g-gap-md" style={{ marginTop: 40 }}>
            {[
              { k: 'Alcance', v: 'Hasta 15 km', d: 'Un solo gateway cubre un establecimiento completo.' },
              { k: 'Consumo', v: '5–10 años', d: 'Sensores a batería que duran sin recargar.' },
              { k: 'Costo', v: 'Sin SIM', d: 'Red privada, sin cargo por dispositivo.' },
              { k: 'Escala', v: '1000+ nodos', d: 'Cada gateway soporta miles de dispositivos.' },
            ].map((s, i) => (
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
          <Eyebrow>Aplicaciones</Eyebrow>
          <h2 className="h-1" style={{ marginTop: 14, maxWidth: '20ch' }}>Qué se puede medir.</h2>
          <div className="lr-apps">
            {[
              { t: 'Sensores IoT', d: 'Niveles de tanques y silos, temperatura, humedad, movimiento, energía, calidad de aire, presión y más.' },
              { t: 'Monitoreo en tiempo real', d: 'Visualización en dashboards web y mobile desde cualquier lugar. Histórico, comparativas, exportes.' },
              { t: 'Automatización remota', d: 'Activación a distancia de bombas, alarmas, válvulas, motores y sistemas de control.' },
              { t: 'Alertas inteligentes', d: 'Notificaciones por WhatsApp, email o webhook cuando algo se sale del rango esperado.' },
              { t: 'Integración con ERPs', d: 'Conectamos los datos con tu sistema de gestión, BI o plataforma de operaciones.' },
              { t: 'Trazabilidad', d: 'Seguimiento de activos móviles dentro del establecimiento o ruta logística.' },
            ].map((a, i) => (
              <Reveal key={a.t} delay={i * 50}>
                <div className="lr-app">
                  <span className="lr-app-dot" />
                  <h3 className="h-3">{a.t}</h3>
                  <p className="muted" style={{ marginTop: 8, fontSize: 14 }}>{a.d}</p>
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
              <Eyebrow>Caso destacado</Eyebrow>
              <h2 className="h-1" style={{ marginTop: 12 }}>Proyecto Jabalí</h2>
              <p className="lede" style={{ marginTop: 18 }}>
                Aplicamos LoRaWAN al monitoreo de fauna silvestre en colaboración con investigadores y productores.
                Sensores de movimiento, cámaras-trampa integradas y alertas geo-referenciadas en tiempo real.
              </p>
              <ul className="lr-case-list">
                <li><Tick />Red de sensores distribuidos en zonas rurales</li>
                <li><Tick />Dashboard en la nube con histórico y mapa de calor</li>
                <li><Tick />Alertas automáticas a productores afectados</li>
              </ul>
              <button className="btn btn-ghost btn-arrow" onClick={() => onGo('jabali')} style={{ marginTop: 28 }}>
                Ver el proyecto completo
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
              <h2 className="h-1" style={{ maxWidth: '22ch' }}>¿Tenés algo que querés medir en tiempo real?</h2>
              <p className="lede" style={{ marginTop: 16 }}>Te ayudamos a diseñar la red y los sensores que necesitás.</p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-arrow" onClick={() => onGo('contacto')}>Conversar</button>
              <a className="btn btn-ghost" href="https://wa.me/5493584314857" target="_blank" rel="noopener">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
