import { useTranslation } from '../../context/TranslationContext'

const OPTIONS = [
  { code: 'es', label: '🇪🇸 ES' },
  { code: 'en', label: '🇺🇸 EN' },
]

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation()

  return (
    <>
      <div className="hidden sm:flex gap-2">
        {OPTIONS.map(({ code, label }) => (
          <button
            key={code}
            className={`text-black rounded-lg transition-colors px-3 py-2 text-base ${
              locale === code
                ? 'bg-green-200 ring-2 ring-green-500'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => setLocale(code)}
            aria-label={`Cambiar idioma a ${label}`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="sm:hidden">
        <select
          aria-label="Selector de idioma"
          className="rounded-lg border border-gray-300 px-3 py-2 text-black"
          value={locale}
          onChange={(e) => setLocale(e.target.value)}
        >
          {OPTIONS.map(({ code, label }) => (
            <option key={code} value={code}>{label}</option>
          ))}
        </select>
      </div>
    </>
  )
}
