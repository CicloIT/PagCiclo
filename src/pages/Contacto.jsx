import { useState } from 'react'
import { Eyebrow } from '../components/ui'

export default function Contacto({ onGo }) {
  const [sent, setSent] = useState(false)
  const [topic, setTopic] = useState('Soporte')

  const onSubmit = (e) => { e.preventDefault(); setSent(true) }

  return (
    <main className="page">
      <title>Contacto — CicloIT | Río Cuarto, Córdoba</title>
      <meta name="description" content="Contactá a CicloIT en Río Cuarto, Córdoba. Email: info@cicloit.com — WhatsApp: +54 9 358 431 4857. Respondemos en menos de 48 horas." />
      <meta property="og:title" content="Contacto — CicloIT" />
      <meta property="og:description" content="Contactá a CicloIT en Río Cuarto, Córdoba. Respondemos en menos de 48 horas." />
      <meta property="og:url" content="https://cicloit.com/contacto" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://cicloit.com/contacto" />
      <section className="section" style={{ paddingTop: 'calc(var(--pad-section) * .55)' }}>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-side">
              <Eyebrow>Contacto · Río Cuarto, AR</Eyebrow>
              <h1 className="h-display" style={{ marginTop: 16, maxWidth: '12ch' }}>Hablemos.</h1>
              <p className="lede" style={{ marginTop: 24 }}>
                Contanos qué necesitás resolver. Te respondemos en menos de 48 horas con un plan claro y sin compromiso.
              </p>

              <div className="contact-info">
                {[
                  ['Email', <a href="mailto:info@cicloit.com" className="contact-v">info@cicloit.com</a>],
                  ['WhatsApp', <a href="https://wa.me/5493584314857" target="_blank" rel="noopener" className="contact-v">+54 9 358 431 4857</a>],
                  ['Horario', <div className="contact-v">Lunes a Viernes · 9:00 a 18:00</div>],
                  ['Dirección', <div className="contact-v">Río Cuarto, Córdoba, Argentina</div>],
                ].map(([k, v]) => (
                  <div key={k} className="contact-info-row">
                    <div className="mono contact-k">{k}</div>
                    {v}
                  </div>
                ))}
              </div>

              <div className="contact-quick">
                <div className="mono" style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Atajos</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['planes', 'starlink', 'lorawan', 'cursos'].map(p => (
                    <button key={p} className="quick" onClick={() => onGo(p)}>
                      {p === 'planes' ? 'Ver planes' : p === 'starlink' ? 'Instalar Starlink' : p === 'lorawan' ? 'Proyecto LoRaWAN' : 'Cursos'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-form-wrap">
              {!sent ? (
                <form className="contact-form" onSubmit={onSubmit}>
                  <div className="mono contact-form-h">/Mensaje nuevo</div>

                  <div className="field">
                    <label htmlFor="c-nombre">Nombre</label>
                    <input id="c-nombre" className="input" required placeholder="Tu nombre" />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div className="field">
                      <label htmlFor="c-email">Email</label>
                      <input id="c-email" type="email" className="input" required placeholder="tu@email.com" />
                    </div>
                    <div className="field">
                      <label htmlFor="c-empresa">Empresa</label>
                      <input id="c-empresa" className="input" placeholder="Opcional" />
                    </div>
                  </div>

                  <div className="field">
                    <label>Tema</label>
                    <div className="topic-row">
                      {['Soporte', 'Desarrollo', 'Starlink', 'LoRaWAN', 'Ciberseguridad', 'Otro'].map(t => (
                        <button type="button" key={t} className={`topic ${topic === t ? 'is-on' : ''}`} onClick={() => setTopic(t)}>{t}</button>
                      ))}
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="c-msj">Mensaje</label>
                    <textarea id="c-msj" className="textarea" required placeholder="Contanos brevemente qué necesitás" />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                    <div className="mono" style={{ fontSize: 11, color: 'var(--text-faint)' }}>RESPUESTA EN &lt; 48 HS</div>
                    <button type="submit" className="btn btn-primary btn-arrow">Enviar mensaje</button>
                  </div>
                </form>
              ) : (
                <div className="sent">
                  <div className="sent-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="16" r="15" stroke="var(--primary)" strokeWidth="1.5" />
                      <path d="M10 16.5l4 4 8-9" stroke="var(--primary)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h2 className="h-2" style={{ marginTop: 20 }}>Mensaje enviado.</h2>
                  <p className="muted" style={{ marginTop: 10, fontSize: 15 }}>Te respondemos por email en menos de 48 horas. Si es urgente, escribinos por WhatsApp.</p>
                  <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
                    <a className="btn btn-primary" href="https://wa.me/5493584314857" target="_blank" rel="noopener">Abrir WhatsApp</a>
                    <button className="btn btn-ghost" onClick={() => setSent(false)}>Enviar otro mensaje</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <style>{`
          .contact-grid{ display: grid; grid-template-columns: 1fr 1fr; gap: 80px; }
          .contact-info{ margin-top: 40px; padding: 28px 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); display: flex; flex-direction: column; gap: 16px; }
          .contact-info-row{ display: grid; grid-template-columns: 100px 1fr; gap: 16px; font-size: 15px; align-items: center; }
          .contact-k{ font-size: 11px; color: var(--text-muted); letter-spacing: 0.08em; text-transform: uppercase; }
          .contact-v{ font-size: 16px; }
          a.contact-v:hover{ color: var(--primary); }
          .contact-quick{ margin-top: 28px; }
          .quick{ appearance: none; background: transparent; border: 1px solid var(--border-strong); padding: 8px 14px; border-radius: var(--radius-md); font: inherit; font-size: 13.5px; color: var(--text); transition: all .15s ease; }
          .quick:hover{ border-color: var(--primary); color: var(--primary); background: var(--primary-soft); }
          .contact-form-wrap{ position: sticky; top: 90px; align-self: flex-start; }
          .contact-form{ background: var(--bg-elevated); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 32px; display: flex; flex-direction: column; gap: 18px; }
          .contact-form-h{ font-size: 11px; color: var(--text-muted); letter-spacing: 0.08em; padding-bottom: 8px; border-bottom: 1px dashed var(--border-strong); }
          .topic-row{ display: flex; flex-wrap: wrap; gap: 6px; }
          .topic{ appearance: none; background: transparent; border: 1px solid var(--border-strong); padding: 7px 12px; border-radius: 999px; font: inherit; font-size: 13px; color: var(--text-muted); transition: all .15s ease; }
          .topic:hover{ border-color: var(--text-muted); color: var(--text); }
          .topic.is-on{ background: var(--primary); border-color: var(--primary); color: #fff; }
          .dir-sharp .topic.is-on{ color: #0a0d0d; }
          .sent{ background: var(--bg-elevated); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 48px; text-align: center; }
          .sent-icon{ display: inline-flex; padding: 12px; border-radius: 999px; background: var(--primary-soft); }
          @media (max-width: 980px){ .contact-grid{ grid-template-columns: 1fr; gap: 48px; } .contact-form-wrap{ position: static; } }
        `}</style>
      </section>
    </main>
  )
}
