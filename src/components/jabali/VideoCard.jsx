import { ExternalLink } from 'lucide-react'
import { useTranslation } from '../../context/TranslationContext'

export function VideoCard({ video }) {
  const { t } = useTranslation()

  return (
    <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-4 md:p-6 hover:shadow-lg transition-all duration-300 border border-red-100">
      <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 space-y-4 sm:space-y-0">
        <div className="flex-shrink-0 self-center sm:self-start">
          <img
            src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
            alt={video.title}
            className="w-full sm:w-40 h-48 sm:h-24 object-cover rounded-lg"
          />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h4 className="font-semibold text-gray-900 mb-1 text-lg sm:text-base">{video.title}</h4>
          <p className="text-sm text-gray-500 italic mb-1">{video.canal}</p>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{video.description}</p>
          <a
            href={`https://youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-red-600 hover:text-red-800 font-medium transition-colors"
          >
            {t('watchOnYouTube')}
            <ExternalLink className="h-4 w-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  )
}
