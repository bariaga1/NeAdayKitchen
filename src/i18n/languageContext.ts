import { createContext, useContext } from 'react'
import type { Language, Strings } from './strings'
import { strings } from './strings'

export interface LanguageContextValue {
  lang: Language
  setLang: (lang: Language) => void
  toggleLang: () => void
  t: Strings
}

export const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: () => {},
  toggleLang: () => {},
  t: strings.en,
})

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext)
}
