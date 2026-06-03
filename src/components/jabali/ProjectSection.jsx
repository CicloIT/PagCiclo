import { AlertTriangle, Shield, Target, Wifi, Camera, BarChart3, Users, MapPin, Activity } from 'lucide-react'
import { FeatureCard } from './FeatureCard'
import { useTranslation } from '../../context/TranslationContext'

export function ProjectSection() {
  const { t } = useTranslation()

  const problemaLista = t('proyecto.problema.lista') || []
  const solucionLista = t('proyecto.solucion.lista') || []

  const projectFeatures = [
    { icon: Target, title: t('proyecto.caracteristicas.monitoreo_preciso.titulo'), description: t('proyecto.caracteristicas.monitoreo_preciso.descripcion') },
    { icon: Wifi, title: t('proyecto.caracteristicas.tecnologia_lorawan.titulo'), description: t('proyecto.caracteristicas.tecnologia_lorawan.descripcion') },
    { icon: Camera, title: t('proyecto.caracteristicas.camaras_infrarrojas.titulo'), description: t('proyecto.caracteristicas.camaras_infrarrojas.descripcion') },
    { icon: BarChart3, title: t('proyecto.caracteristicas.analisis_datos.titulo'), description: t('proyecto.caracteristicas.analisis_datos.descripcion') },
  ]

  return (
    <div className="space-y-12">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div
          className="relative h-96 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/j.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="text-center text-white max-w-4xl">
              <h2 className="text-5xl font-bold mb-6">{t('proyecto.descripcion')}</h2>
              <p className="text-xl leading-relaxed">{t('proyecto.intro')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <section className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">{t('proyecto.problema.titulo')}</h3>
          </div>
          <div className="space-y-4 text-gray-600">
            <p>{t('proyecto.problema.p1')}</p>
            <p>{t('proyecto.problema.p2')}</p>
            <ul className="list-disc list-inside space-y-2 ml-5">
              {Array.isArray(problemaLista) && problemaLista.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Shield className="h-8 w-8 text-green-500 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">{t('proyecto.solucion.titulo')}</h3>
          </div>
          <div className="space-y-4 text-gray-600">
            <p>{t('proyecto.solucion.p1')}</p>
            <p>{t('proyecto.solucion.p2')}</p>
            <ul className="list-disc list-inside space-y-2 ml-5">
              {Array.isArray(solucionLista) && solucionLista.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
            <p className="font-semibold text-green-700">{t('proyecto.solucion.final')}</p>
          </div>
        </section>
      </div>

      <section className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('proyecto.caracteristicas.titulo')}</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectFeatures.map(({ icon, title, description }, i) => (
            <FeatureCard key={i} icon={icon} title={title} description={description} />
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl shadow-lg p-8 text-white">
        <h3 className="text-2xl font-bold mb-6 text-center">{t('proyecto.objetivos.titulo')}</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <Users className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h4 className="text-lg font-semibold mb-2">{t('proyecto.objetivos.investigacion.titulo')}</h4>
            <p className="text-blue-100">{t('proyecto.objetivos.investigacion.descripcion')}</p>
          </div>
          <div className="text-center">
            <MapPin className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h4 className="text-lg font-semibold mb-2">{t('proyecto.objetivos.mapeo.titulo')}</h4>
            <p className="text-blue-100">{t('proyecto.objetivos.mapeo.descripcion')}</p>
          </div>
          <div className="text-center">
            <Activity className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h4 className="text-lg font-semibold mb-2">{t('proyecto.objetivos.gestion.titulo')}</h4>
            <p className="text-blue-100">{t('proyecto.objetivos.gestion.descripcion')}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
