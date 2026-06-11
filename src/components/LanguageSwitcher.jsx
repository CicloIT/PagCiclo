import { useTranslation } from '../context/TranslationContext'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation()

  return (
    <div className="lang-switcher">
      <button
        className={`lang-btn ${locale === 'es' ? 'is-on' : ''}`}
        onClick={() => setLocale('es')}
        aria-label="Español"
      >ES</button>
      <span className="lang-sep" aria-hidden>|</span>
      <button
        className={`lang-btn ${locale === 'en' ? 'is-on' : ''}`}
        onClick={() => setLocale('en')}
        aria-label="English"
      >EN</button>
      <style>{`
        .lang-switcher{ display: flex; align-items: center; gap: 2px; }
        .lang-sep{ color: var(--border-strong); font-size: 12px; user-select: none; }
        .lang-btn{
          appearance: none; border: 0; background: transparent;
          font-family: 'Geist Mono', monospace; font-size: 12px; font-weight: 500;
          color: var(--text-muted); padding: 6px 8px; border-radius: var(--radius-md);
          cursor: pointer; letter-spacing: 0.04em; transition: color .15s ease, background-color .15s ease;
        }
        .lang-btn:hover{ color: var(--text); background: var(--bg-tint); }
        .lang-btn.is-on{ color: var(--primary); }
      `}</style>
    </div>
  )
}
