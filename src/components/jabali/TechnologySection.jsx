import { Zap, Wifi, Camera, SatelliteDish } from 'lucide-react'
import { useTranslation } from '../../context/TranslationContext'

export function TechnologySection() {
  const { t } = useTranslation()

  const gatewayFeatures = t('tecnologia.gateway.caracteristicas') || []
  const sensorPrincipalFeatures = t('tecnologia.sensores.sensor_principal.caracteristicas') || []
  const sensorCompactoFeatures = t('tecnologia.sensores.sensor_compacto.caracteristicas') || []
  const lorawanVentajas = t('tecnologia.lorawan.ventajas') || []
  const lorawanBeneficios = t('tecnologia.lorawan.beneficios') || []
  const starlinkBeneficios = t('tecnologia.starlink.beneficios') || []
  const infrarojoBeneficios = t('tecnologia.infrarojo.beneficios') || []

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('tecnologia.titulo')}</h3>

        {/* Gateway */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
            <Zap className="h-6 w-6 text-blue-500 mr-2" />
            {t('tecnologia.gateway.titulo')}
          </h4>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img src="/Gat.jpeg" alt={t('tecnologia.gateway.alt')} className="w-full max-w-md rounded-lg shadow-md" />
              </div>
              <div>
                <h5 className="text-2xl font-bold text-gray-900 mb-4">{t('tecnologia.gateway.nombre')}</h5>
                <div className="space-y-3 text-gray-700">
                  {Array.isArray(gatewayFeatures) && gatewayFeatures.map((item, i) => (
                    <p key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sensors */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
            <Camera className="h-6 w-6 text-green-500 mr-2" />
            {t('tecnologia.sensores.titulo')}
          </h4>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img src="/Sensor.jpeg" alt={t('tecnologia.sensores.sensor_principal.alt')} className="w-24 h-24 object-cover rounded-lg shadow-md" />
                <div>
                  <h5 className="text-lg font-bold text-gray-900">{t('tecnologia.sensores.sensor_principal.nombre')}</h5>
                  <p className="text-gray-600">{t('tecnologia.sensores.sensor_principal.descripcion')}</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                {Array.isArray(sensorPrincipalFeatures) && sensorPrincipalFeatures.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img src="/Sensor4.jpeg" alt={t('tecnologia.sensores.sensor_compacto.alt')} className="w-24 h-24 object-cover rounded-lg shadow-md" />
                <div>
                  <h5 className="text-lg font-bold text-gray-900">{t('tecnologia.sensores.sensor_compacto.nombre')}</h5>
                  <p className="text-gray-600">{t('tecnologia.sensores.sensor_compacto.descripcion')}</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                {Array.isArray(sensorCompactoFeatures) && sensorCompactoFeatures.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* LoRaWAN */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white mb-12">
          <h4 className="text-xl font-semibold mb-6 flex items-center">
            <Wifi className="h-6 w-6 mr-2" />
            {t('tecnologia.lorawan.titulo')}
          </h4>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h5 className="text-lg font-semibold mb-3">{t('tecnologia.lorawan.ventajas_titulo')}</h5>
              <ul className="space-y-2 text-indigo-100">
                {Array.isArray(lorawanVentajas) && lorawanVentajas.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-3">{t('tecnologia.lorawan.beneficios_titulo')}</h5>
              <ul className="space-y-2 text-indigo-100">
                {Array.isArray(lorawanBeneficios) && lorawanBeneficios.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Starlink */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
            <SatelliteDish className="h-6 w-6 text-sky-500 mr-2" />
            {t('tecnologia.starlink.titulo')}
          </h4>
          <div className="bg-gradient-to-r from-sky-50 to-blue-100 rounded-lg p-8 grid md:grid-cols-3 gap-8 items-center">
            <img src="/StarLink2.jpg" alt={t('tecnologia.starlink.alt')} className="w-full max-w-md rounded-lg shadow-md" />
            <div className="text-gray-700 space-y-3">
              {Array.isArray(starlinkBeneficios) && starlinkBeneficios.map((item, i) => (
                <p key={i} className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  {item}
                </p>
              ))}
            </div>
            <div className="w-full h-48 rounded-lg overflow-hidden shadow-md">
              <img src="/StarLink800x1067.png" alt={t('tecnologia.starlink.alt_img')} className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>

        {/* Infrared */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
            <Camera className="h-6 w-6 text-red-500 mr-2" />
            {t('tecnologia.infrarojo.titulo')}
          </h4>
          <div className="bg-gradient-to-r from-red-50 to-rose-100 rounded-lg p-8 grid md:grid-cols-3 gap-8 items-center">
            <img src="/Camara.webp" alt={t('tecnologia.infrarojo.alt')} className="w-full max-w-md rounded-lg shadow-md" />
            <div className="text-gray-700 space-y-3">
              {Array.isArray(infrarojoBeneficios) && infrarojoBeneficios.map((item, i) => (
                <p key={i} className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  {item}
                </p>
              ))}
            </div>
            <div className="w-full h-48 rounded-lg overflow-hidden shadow-md">
              <img src="/Infraja.jpeg" alt={t('tecnologia.infrarojo.alt_img')} className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
