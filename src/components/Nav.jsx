import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from '../context/TranslationContext'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'

const NAV_KEYS = [
  { id: 'home', key: 'nav.home' },
  { id: 'servicios', key: 'nav.servicios' },
  { id: 'planes', key: 'nav.planes' },
  { id: 'instalacion-starlink', key: 'nav.starlink' },
  { id: 'lorawan', key: 'nav.lorawan' },
  { id: 'nosotros', key: 'nav.nosotros' },
  { id: 'cursos', key: 'nav.cursos' },
  { id: 'contacto', key: 'nav.contacto' },
]

const NAV_ITEMS = NAV_KEYS.map(({ id, key }) => ({ id, label: key }))

export { NAV_ITEMS }

export default function Nav({ onGo, direction, onDirection }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const currentPage = location.pathname === '/' ? 'home' : location.pathname.slice(1)
  const { t } = useTranslation()

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
          {NAV_KEYS.map(it => (
            <button
              key={it.id}
              className={`nav-link ${currentPage === it.id ? 'is-active' : ''}`}
              onClick={() => onGo(it.id)}
            >
              {t(it.key)}
              {currentPage === it.id && <span className="nav-link-dot" aria-hidden />}
            </button>
          ))}
        </nav>

        <div className="nav-cta">
          <LanguageSwitcher />
          <ThemeToggle direction={direction} onChange={onDirection} />
          <a className="btn btn-primary btn-arrow" href="https://wa.me/5493584314857" target="_blank" rel="noopener">
            {t('nav.cta')}
          </a>
        </div>

        <button className="nav-burger" onClick={() => setOpen(o => !o)} aria-label="Menú">
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          {NAV_KEYS.map(it => (
            <button key={it.id} className={`nav-mobile-link ${currentPage === it.id ? 'is-active' : ''}`} onClick={() => onGo(it.id)}>
              {t(it.key)}
            </button>
          ))}
          <div className="nav-mobile-bar">
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <LanguageSwitcher />
              <ThemeToggle direction={direction} onChange={onDirection} />
            </div>
            <a className="nav-mobile-wa" href="https://wa.me/5493584314857" target="_blank" rel="noopener">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              {t('nav.ctaMobile')}
            </a>
          </div>
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
        .nav-cta{ display: flex; gap: 10px; align-items: center; }
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
          .nav-mobile-bar{ margin-top: 12px; padding-top: 14px; border-top: 1px solid var(--border); display: flex; gap: 12px; align-items: center; justify-content: space-between; flex-wrap: wrap; }
          .nav-mobile-wa{ display: inline-flex; align-items: center; gap: 6px; font-size: 13px; color: var(--text-muted); padding: 6px 10px; border-radius: var(--radius-md); transition: color .15s ease, background-color .15s ease; }
          .nav-mobile-wa:hover{ color: var(--primary); background: var(--bg-tint); }
        }
      `}</style>
    </header>
  )
}
