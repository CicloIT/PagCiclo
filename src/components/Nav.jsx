import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { id: 'home', label: 'Inicio' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'planes', label: 'Planes' },
  { id: 'starlink', label: 'Starlink' },
  { id: 'lorawan', label: 'LoRaWAN' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'cursos', label: 'Cursos' },
  { id: 'contacto', label: 'Contacto' },
]

export { NAV_ITEMS }

export default function Nav({ onGo }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const currentPage = location.pathname === '/' ? 'home' : location.pathname.slice(1)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])

  return (
    <header className="nav-root" data-scrolled={scrolled}>
      <div className="container nav-inner">
        <button className="nav-brand" onClick={() => onGo('home')} aria-label="Ir a inicio">
          <img src="/icono.webp" alt="CicloIT" style={{ height: 28, width: 'auto', display: 'block' }} />
        </button>

        <nav className="nav-links" aria-label="Principal">
          {NAV_ITEMS.map(it => (
            <button
              key={it.id}
              className={`nav-link ${currentPage === it.id ? 'is-active' : ''}`}
              onClick={() => onGo(it.id)}
            >
              {it.label}
              {currentPage === it.id && <span className="nav-link-dot" aria-hidden />}
            </button>
          ))}
        </nav>

        <div className="nav-cta">
          <a className="btn btn-primary btn-arrow" href="https://wa.me/5493584314857" target="_blank" rel="noopener">
            Hablemos
          </a>
        </div>

        <button className="nav-burger" onClick={() => setOpen(o => !o)} aria-label="Menú">
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          {NAV_ITEMS.map(it => (
            <button key={it.id} className={`nav-mobile-link ${currentPage === it.id ? 'is-active' : ''}`} onClick={() => onGo(it.id)}>
              {it.label}
            </button>
          ))}
          <a className="btn btn-primary" style={{ marginTop: 12 }} href="https://wa.me/5493584314857" target="_blank" rel="noopener">
            Hablemos por WhatsApp
          </a>
        </div>
      )}

      <style>{`
        .nav-root{
          position: sticky; top: 0; z-index: 100;
          background: color-mix(in srgb, var(--bg) 80%, transparent);
          -webkit-backdrop-filter: blur(14px) saturate(160%);
          backdrop-filter: blur(14px) saturate(160%);
          transition: border-color .25s ease, background-color .25s ease;
          border-bottom: 1px solid transparent;
        }
        .nav-root[data-scrolled="true"]{ border-bottom-color: var(--border); }
        .dir-sharp .nav-root{ background: color-mix(in srgb, var(--bg) 88%, transparent); }
        .nav-inner{ display: flex; align-items: center; justify-content: space-between; gap: 24px; padding-top: 14px; padding-bottom: 14px; }
        .nav-brand{ display: inline-flex; align-items: center; gap: 9px; padding: 0; background: transparent; border: 0; color: inherit; font-family: inherit; }
        .nav-brand-text{ font-size: 16px; letter-spacing: -0.01em; }
        .nav-links{ display: flex; align-items: center; gap: 2px; }
        .nav-link{
          appearance: none; border: 0; background: transparent; color: var(--text-muted);
          padding: 8px 12px; font-size: 14px; font-weight: 450; border-radius: var(--radius-md);
          cursor: pointer; position: relative; transition: color .15s ease, background-color .15s ease;
        }
        .nav-link:hover{ color: var(--text); background: var(--bg-tint); }
        .nav-link.is-active{ color: var(--text); }
        .nav-link-dot{
          position: absolute; bottom: 1px; left: 50%; transform: translateX(-50%);
          width: 4px; height: 4px; border-radius: 999px; background: var(--primary);
        }
        .nav-cta{ display: flex; gap: 10px; }
        .nav-burger{ display: none; appearance: none; border: 0; background: transparent; flex-direction: column; gap: 4px; padding: 8px; }
        .nav-burger span{ width: 20px; height: 1.5px; background: var(--text); display: block; }
        .nav-mobile{ display: none; }
        @media (max-width: 1080px){
          .nav-links{ display: none; }
          .nav-cta{ display: none; }
          .nav-burger{ display: inline-flex; }
          .nav-mobile{ display: flex; flex-direction: column; padding: 8px 20px 20px; gap: 4px; border-top: 1px solid var(--border); }
          .nav-mobile-link{ appearance: none; border: 0; background: transparent; color: var(--text-muted); padding: 12px 8px; text-align: left; font: inherit; font-size: 16px; border-radius: var(--radius-md); }
          .nav-mobile-link.is-active{ color: var(--text); background: var(--bg-tint); }
        }
      `}</style>
    </header>
  )
}
