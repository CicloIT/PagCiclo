import { createContext, useContext, useState } from 'react'
import jabaliEs from '../locales/jabali_es.json'
import jabaliEn from '../locales/jabali_en.json'
import siteEs from '../locales/es.json'
import siteEn from '../locales/en.json'

const translations = {
  es: { ...jabaliEs, ...siteEs },
  en: { ...jabaliEn, ...siteEn },
}

const getNestedValue = (obj, path) => {
  if (obj[path] !== undefined) return obj[path]
  return path.split('.').reduce((o, p) => (o && o[p] !== undefined ? o[p] : undefined), obj) ?? path
}

const TranslationContext = createContext()

export function TranslationProvider({ children, defaultLocale = 'es' }) {
  const [locale, setLocale] = useState(defaultLocale)

  const t = (key) => {
    const translation = translations[locale] || translations.es
    return getNestedValue(translation, key)
  }

  return (
    <TranslationContext.Provider value={{ t, locale, setLocale }}>
      {children}
    </TranslationContext.Provider>
  )
}

export const useTranslation = () => useContext(TranslationContext)
