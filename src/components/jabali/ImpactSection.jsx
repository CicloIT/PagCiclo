import { Leaf, BarChart3, Globe } from 'lucide-react'
import { useTranslation } from '../../context/TranslationContext'

export function ImpactSection() {
  const { t } = useTranslation()

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('impacto.titulo')}</h3>

        {/* Environmental */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
            <Leaf className="h-6 w-6 text-green-500 mr-2" />
            {t('impacto.ambiental.titulo')}
          </h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h5 className="font-semibold text-green-800 mb-3">{t('impacto.ambiental.conservacion.titulo')}</h5>
              <p className="text-green-700 text-sm">{t('impacto.ambiental.conservacion.descripcion')}</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h5 className="font-semibold text-blue-800 mb-3">{t('impacto.ambiental.restauracion.titulo')}</h5>
              <p className="text-blue-700 text-sm">{t('impacto.ambiental.restauracion.descripcion')}</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h5 className="font-semibold text-purple-800 mb-3">{t('impacto.ambiental.biodiversidad.titulo')}</h5>
              <p className="text-purple-700 text-sm">{t('impacto.ambiental.biodiversidad.descripcion')}</p>
            </div>
          </div>
        </div>

        {/* Scientific */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
            <BarChart3 className="h-6 w-6 text-blue-500 mr-2" />
            {t('impacto.cientifico.titulo')}
          </h4>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-4">{t('impacto.cientifico.investigacion.titulo')}</h5>
                <ul className="space-y-3 text-gray-700">
                  {(t('impacto.cientifico.investigacion.items') || []).map?.((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-4">{t('impacto.cientifico.innovacion.titulo')}</h5>
                <ul className="space-y-3 text-gray-700">
                  {(t('impacto.cientifico.innovacion.items') || []).map?.((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Economic */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
            <Globe className="h-6 w-6 text-yellow-500 mr-2" />
            {t('impacto.economico.titulo')}
          </h4>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-yellow-50 rounded-lg p-6">
              <h5 className="text-lg font-semibold text-yellow-800 mb-4">{t('impacto.economico.agricola.titulo')}</h5>
              <ul className="space-y-2 text-yellow-700 text-sm">
                {(t('impacto.economico.agricola.items') || []).map?.((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
            <div className="bg-orange-50 rounded-lg p-6">
              <h5 className="text-lg font-semibold text-orange-800 mb-4">{t('impacto.economico.rural.titulo')}</h5>
              <ul className="space-y-2 text-orange-700 text-sm">
                {(t('impacto.economico.rural.items') || []).map?.((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Installation */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-6 text-center">{t('impacto.instalacion.titulo')}</h4>
          <div className="flex justify-center mb-6">
            <img src="/Sensor6.jpeg" alt={t('impacto.instalacion.alt')} className="max-w-md rounded-lg shadow-lg" />
          </div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">{t('impacto.instalacion.descripcion')}</p>
        </div>
      </div>
    </div>
  )
}
