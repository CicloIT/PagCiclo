import { ExternalLink } from 'lucide-react'
import { VideoCard } from './VideoCard'
import { useTranslation } from '../../context/TranslationContext'

const VIDEO_IDS = ['cJ_7Vsrd-vQ', 'gC_A3J0LMqc', '78A4Ts63J3I', 'GOO8S73qIDE']

export function ResourcesSection() {
  const { t } = useTranslation()

  const youtubeVideos = VIDEO_IDS.map((id, i) => ({
    id,
    title: t(`recursos.youtube.${i}.title`),
    description: t(`recursos.youtube.${i}.description`),
    canal: t(`recursos.youtube.${i}.channel`),
  }))

  const tecnicaLinks = t('recursos.enlaces.tecnica_links') || []
  const jabaliLinks = t('recursos.enlaces.jabali_links') || []

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('recursos.titulo')}</h3>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {youtubeVideos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>

        {/* Images */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">{t('recursos.imagenes.titulo')}</h4>
          <p className="text-gray-700 mb-8 text-center max-w-4xl mx-auto">{t('recursos.imagenes.descripcion')}</p>
          <div className="space-y-8">
            <div className="flex justify-center">
              <div className="flex flex-col items-center max-w-md">
                <img src="/accidente.jpeg" alt={t('recursos.imagenes.alt1')} className="rounded-lg shadow-md mb-2 max-h-70 object-contain" />
                <p className="text-sm text-gray-700 text-center">{t('recursos.imagenes.texto1')}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <img src="/info.jpeg" alt={t('recursos.imagenes.alt2')} className="rounded-lg shadow-md mb-2 max-h-[32rem] w-full object-contain" />
                <p className="text-sm text-gray-700 text-center">{t('recursos.imagenes.texto2')}</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/info2.jpeg" alt={t('recursos.imagenes.alt3')} className="rounded-lg shadow-md mb-2 w-full object-contain" />
                <p className="text-sm text-gray-700 text-center">{t('recursos.imagenes.texto3')}</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col items-center max-w-md">
                <img src="/infra-jabali.jpeg" alt={t('recursos.imagenes.alt4')} className="rounded-lg shadow-md mb-2 max-h-64 object-contain" />
                <p className="text-sm text-gray-700 text-center">{t('recursos.imagenes.texto4')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <h4 className="text-xl font-semibold text-blue-900 mb-6 flex items-center">
            <ExternalLink className="h-6 w-6 mr-2" />
            {t('recursos.enlaces.titulo')}
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-blue-800 mb-3">{t('recursos.enlaces.tecnica')}</h5>
              <div className="space-y-3">
                {Array.isArray(tecnicaLinks) && tecnicaLinks.map(({ href, label }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                    <ExternalLink className="h-4 w-4 mr-2 flex-shrink-0" />{label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-blue-800 mb-3">{t('recursos.enlaces.jabali')}</h5>
              <div className="space-y-3">
                {Array.isArray(jabaliLinks) && jabaliLinks.map(({ href, label }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                    <ExternalLink className="h-4 w-4 mr-2 flex-shrink-0" />{label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-white text-center mt-8">
          <h4 className="text-xl font-semibold mb-4">{t('recursos.contacto.titulo')}</h4>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">{t('recursos.contacto.descripcion')}</p>
          <div className="flex justify-center space-x-4 flex-wrap gap-4">
            <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
              <span className="text-sm">{t('recursos.contacto.telefono')}</span>
            </div>
            <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
              <span className="text-sm">{t('recursos.contacto.email')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
