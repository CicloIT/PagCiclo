export function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="h-8 w-8 text-green-600" />
      </div>
      <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}
