import { useState } from 'react'
import { Eye } from 'lucide-react'
import { TranslationProvider } from '../context/TranslationContext'
import { JabaliNav } from '../components/jabali/JabaliNav'
import { ProjectSection } from '../components/jabali/ProjectSection'
import { TechnologySection } from '../components/jabali/TechnologySection'
import { ImpactSection } from '../components/jabali/ImpactSection'
import { ResourcesSection } from '../components/jabali/ResourcesSection'
import LanguageSwitcher from '../components/jabali/LanguageSwitcher'

function JabaliContent() {
  const [activeTab, setActiveTab] = useState('proyecto')

  const renderTab = () => {
    switch (activeTab) {
      case 'proyecto': return <ProjectSection />
      case 'tecnologia': return <TechnologySection />
      case 'impacto': return <ImpactSection />
      case 'recursos': return <ResourcesSection />
      default: return <ProjectSection />
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-blue-50">
      {/* Project header bar */}
      <div className="bg-white shadow-lg border-b-4 border-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6 flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <div className="bg-green-600 p-3 rounded-xl">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">WildTrack LoRaWAN</h1>
                <p className="text-gray-600">Proyecto de Monitoreo de Jabalíes · Río Cuarto, AR</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 px-4 py-2 rounded-lg">
                <span className="text-green-800 font-semibold">Proyecto Innovador</span>
              </div>
              <LanguageSwitcher />
              <a
                href="/"
                className="flex items-center gap-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg px-4 py-2 transition-colors shadow-sm"
              >
                ← CicloIT
              </a>
            </div>
          </div>
        </div>
      </div>

      <JabaliNav activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderTab()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-600 p-2 rounded-lg">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold">WildTrack LoRaWAN</h4>
              </div>
              <p className="text-gray-300 text-sm">Proyecto innovador de monitoreo de fauna invasiva con tecnología IoT y redes LoRaWAN.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">El Proyecto</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                {['Monitoreo de jabalíes invasivos', 'Conservación de ecosistemas', 'Investigación científica', 'Tecnología sustentable'].map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Tecnología</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                {['Sensores Milesight IoT', 'Gateway RAK7289 LoRaWAN', 'Cámaras infrarrojas', 'Análisis en tiempo real'].map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Impacto</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                {['Protección ambiental', 'Apoyo al sector agrícola', 'Desarrollo tecnológico', 'Educación y concienciación'].map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 WildTrack LoRaWAN · <a href="https://cicloit.com" className="hover:text-green-400">CicloIT</a> · Proyecto de Monitoreo de Fauna Invasiva en Argentina.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function Jabali() {
  return (
    <>
      <title>WildTrack LoRaWAN — Monitoreo de Jabalíes con IoT | CicloIT</title>
      <meta name="description" content="Sistema de monitoreo inteligente de jabalíes invasivos con tecnología LoRaWAN, sensores Milesight y cámaras infrarrojas. Proyecto de conservación ambiental en Argentina desarrollado por CicloIT." />
      <meta property="og:title" content="WildTrack LoRaWAN — Monitoreo de Jabalíes con IoT" />
      <meta property="og:description" content="Monitoreo de fauna invasiva con LoRaWAN, sensores IoT y cámaras infrarrojas. Proyecto de CicloIT en Argentina." />
      <meta property="og:url" content="https://cicloit.com/jabali" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://cicloit.com/jabali" />
      <TranslationProvider defaultLocale="es">
        <JabaliContent />
      </TranslationProvider>
    </>
  )
}
