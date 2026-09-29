import { useLanguage } from '../i18n/languageContext'

export function LanguageToggle() {
  const { t, toggleLang } = useLanguage()

  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={toggleLang}
      aria-label={t.languageToggleAria}
      title={t.languageToggleAria}
    >
      {t.languageToggleLabel}
    </button>
  )
}
