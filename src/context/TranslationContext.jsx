import { createContext, useContext, useState } from 'react'
import es from '../locales/jabali_es.json'
import en from '../locales/jabali_en.json'

const translations = { es, en }

const getNestedValue = (obj, path) => {
  return path.split('.').reduce((o, p) => (o && o[p] !== undefined ? o[p] : path), obj)
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
