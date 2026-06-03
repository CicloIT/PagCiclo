import { Leaf, Wifi, Globe, Play } from 'lucide-react'
import { useTranslation } from '../../context/TranslationContext'

const TABS = [
  { id: 'proyecto', labelKey: 'proyecto.titulo', icon: Leaf },
  { id: 'tecnologia', labelKey: 'tecnologia.titulo', icon: Wifi },
  { id: 'impacto', labelKey: 'impacto.titulo', icon: Globe },
  { id: 'recursos', labelKey: 'recursos.titulo', icon: Play },
]

export function JabaliNav({ activeTab, setActiveTab }) {
  const { t } = useTranslation()

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden sm:flex sm:space-x-8">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <tab.icon className="h-5 w-5" />
              <span>{t(tab.labelKey)}</span>
            </button>
          ))}
        </div>
        <div className="sm:hidden">
          <div className="grid grid-cols-2 gap-2 py-3">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center space-y-1 py-3 px-2 rounded-lg font-medium text-xs transition-colors ${
                  activeTab === tab.id
                    ? 'bg-green-50 text-green-600'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span className="text-center leading-tight">{t(tab.labelKey)}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
