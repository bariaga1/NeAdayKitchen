import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { LanguageContext } from './languageContext'
import { LANGUAGES, strings, type Language } from './strings'

const STORAGE_KEY = 'ne-aday-language'

function readStoredLanguage(): Language {
  const stored = localStorage.getItem(STORAGE_KEY)
  return LANGUAGES.includes(stored as Language) ? (stored as Language) : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(readStoredLanguage)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next: Language) => setLangState(next), [])
  const toggleLang = useCallback(
    () => setLangState((prev) => (prev === 'en' ? 'ti' : 'en')),
    [],
  )

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, t: strings[lang] }),
    [lang, setLang, toggleLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
