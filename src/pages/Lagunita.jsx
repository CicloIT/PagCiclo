import { Wifi, Zap, Globe, BookOpen, Radio } from 'lucide-react'
import { TranslationProvider, useTranslation } from '../context/TranslationContext'

const IMAGES = Array.from({ length: 19 }, (_, i) => `/lagunita/${i + 1}.jpeg`)

const OPTIONS = [
  { code: 'es', label: '🇪🇸 ES' },
  { code: 'en', label: '🇺🇸 EN' },
]

function LangSwitch() {
  const { locale, setLocale } = useTranslation()
  return (
    <>
      <div className="hidden sm:flex gap-2">
        {OPTIONS.map(({ code, label }) => (
          <button
            key={code}
            className={`text-black rounded-lg transition-colors px-3 py-2 text-base ${
              locale === code ? 'bg-blue-200 ring-2 ring-blue-500' : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => setLocale(code)}
            aria-label={`Switch language to ${label}`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="sm:hidden">
        <select
          aria-label="Language selector"
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

function LagunitaContent() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6 flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-xl">
                <Wifi className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{t('lagunita.titulo')}</h1>
                <p className="text-gray-500 text-sm sm:text-base">{t('lagunita.subtitulo')}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="bg-blue-100 px-4 py-2 rounded-lg">
                <span className="text-blue-800 font-semibold text-sm">{t('lagunita.badge')}</span>
              </div>
              <LangSwitch />
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

        {/* Hero */}
        <section
          className="relative rounded-2xl overflow-hidden shadow-xl h-[28rem] bg-cover bg-center flex items-end"
          style={{ backgroundImage: "url('/lagunita/9.jpeg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="relative p-8 sm:p-12 text-white max-w-3xl">
            <h2 className="text-3xl sm:text-5xl font-black leading-tight mb-4 whitespace-pre-line">
              {t('lagunita.hero.titulo')}
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-white/90">
              {t('lagunita.hero.descripcion')}
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Wifi,  value: t('lagunita.stats.red.valor'),     label: t('lagunita.stats.red.label'),     bg: 'bg-blue-100',   text: 'text-blue-600' },
            { icon: Radio, value: t('lagunita.stats.lorawan.valor'), label: t('lagunita.stats.lorawan.label'), bg: 'bg-teal-100',   text: 'text-teal-600' },
            { icon: Zap,   value: t('lagunita.stats.enlace.valor'),  label: t('lagunita.stats.enlace.label'),  bg: 'bg-indigo-100', text: 'text-indigo-600' },
            { icon: Globe, value: t('lagunita.stats.entorno.valor'), label: t('lagunita.stats.entorno.label'), bg: 'bg-green-100',  text: 'text-green-600' },
          ].map(({ icon: Icon, value, label, bg, text }) => (
            <div key={label} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className={`inline-flex p-3 rounded-xl mb-3 ${bg}`}>
                <Icon className={`h-6 w-6 ${text}`} />
              </div>
              <div className={`text-3xl font-black ${text} mb-1`}>{value}</div>
              <div className="text-sm text-gray-500 font-medium">{label}</div>
            </div>
          ))}
        </section>

        {/* Mission banner */}
        <section className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-8 sm:p-10 text-white shadow-lg">
          <p className="text-xl sm:text-2xl font-semibold leading-relaxed text-center max-w-3xl mx-auto">
            "{t('lagunita.mision')}"
          </p>
        </section>

        {/* About */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div
              className="h-64 md:h-auto bg-cover bg-center"
              style={{ backgroundImage: "url('/lagunita/7.jpeg')" }}
            />
            <div className="p-8 sm:p-10 space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">{t('lagunita.proyecto.titulo')}</h2>
              <p className="text-gray-600 leading-relaxed">{t('lagunita.proyecto.descripcion')}</p>
              <p className="text-gray-600 leading-relaxed">{t('lagunita.proyecto.trabajo')}</p>
            </div>
          </div>
        </section>

        {/* Education + Innovation */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: "url('/lagunita/10.jpeg')" }}
            />
            <div className="p-8 space-y-4 flex-1">
              <div className="flex items-center gap-3">
                <div className="bg-teal-100 p-3 rounded-xl">
                  <BookOpen className="h-6 w-6 text-teal-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">{t('lagunita.educacion.titulo')}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">{t('lagunita.educacion.descripcion')}</p>
              <p className="text-gray-600 leading-relaxed">{t('lagunita.educacion.capacitaciones')}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: "url('/lagunita/14.jpeg')" }}
            />
            <div className="p-8 space-y-4 flex-1">
              <div className="flex items-center gap-3">
                <div className="bg-indigo-100 p-3 rounded-xl">
                  <Radio className="h-6 w-6 text-indigo-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">{t('lagunita.innovacion.titulo')}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">{t('lagunita.innovacion.descripcion')}</p>
              <p className="text-gray-600 leading-relaxed">{t('lagunita.innovacion.futuro')}</p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">{t('lagunita.galeria.titulo')}</h2>
            <p className="text-gray-500 mt-1">{t('lagunita.galeria.subtitulo')}</p>
          </div>
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
            {IMAGES.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Proyecto Conectividad Rural CicloIT ${i + 1}`}
                className="w-full rounded-xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-200 break-inside-avoid"
                loading="lazy"
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Wifi className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold">{t('lagunita.titulo')}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <p className="text-gray-400 text-sm text-center" style={{ maxWidth: '32rem' }}>{t('lagunita.footer.descripcion')}</p>
          </div>
          <p className="text-gray-600 text-xs border-t border-gray-800 pt-4 text-center" style={{ textAlign: 'center' }}>{t('lagunita.footer.derechos')}</p>
        </div>
      </footer>
    </div>
  )
}

export default function Lagunita() {
  return (
    <>
      <title>Proyecto Conectividad Rural — CicloIT CCC | Telecomunicaciones</title>
      <meta name="description" content="CicloIT CCC trabaja en el diseño, instalación y mantenimiento de infraestructura de telecomunicaciones para zonas rurales y de difícil acceso en las sierras de Córdoba." />
      <meta property="og:title" content="Proyecto Conectividad Rural — CicloIT CCC" />
      <meta property="og:description" content="Infraestructura de telecomunicaciones para comunidades serranas en Córdoba, Argentina. CicloIT CCC." />
      <meta property="og:url" content="https://cicloit.com/ccc" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://cicloit.com/ccc" />
      <TranslationProvider defaultLocale="es">
        <LagunitaContent />
      </TranslationProvider>
    </>
  )
}
