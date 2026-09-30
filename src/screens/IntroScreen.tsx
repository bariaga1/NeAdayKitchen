import { PixelButton } from '../components/PixelButton'
import { PixelPanel } from '../components/PixelPanel'
import { useLanguage } from '../i18n/languageContext'
import type { LocalizedRecipe } from '../i18n/recipes.ti'

interface IntroScreenProps {
  recipe: LocalizedRecipe
  onContinue: () => void
  onBack: () => void
}

export function IntroScreen({ recipe, onContinue, onBack }: IntroScreenProps) {
  const { t } = useLanguage()

  return (
    <div className="screen intro-screen" style={{ '--recipe-primary': recipe.palette.primary } as React.CSSProperties}>
      <div className="intro-screen__badge">{recipe.altName}</div>
      <h2 className="screen__heading">{recipe.name}</h2>
      <p className="intro-screen__tagline">{recipe.tagline}</p>

      <PixelPanel className="intro-screen__story" accent={recipe.palette.accent}>
        <p>{recipe.intro}</p>
      </PixelPanel>

      <PixelPanel className="intro-screen__note">
        <span className="intro-screen__note-icon">📖</span>
        <p>{recipe.culturalNote}</p>
      </PixelPanel>

      <div className="intro-screen__preview">
        <div className="intro-screen__phase">
          <span>1</span>
          <p>{t.phasePrep}</p>
          <small>{t.stepsCount(recipe.prepSteps.length)}</small>
        </div>
        <div className="intro-screen__arrow">→</div>
        <div className="intro-screen__phase">
          <span>2</span>
          <p>{t.phaseCook}</p>
          <small>{t.stepsCount(recipe.cookSteps.length)}</small>
        </div>
        <div className="intro-screen__arrow">→</div>
        <div className="intro-screen__phase">
          <span>3</span>
          <p>{t.phaseServe}</p>
          <small>{t.enjoy}</small>
        </div>
      </div>

      <div className="intro-screen__actions">
        <PixelButton variant="secondary" onClick={onBack}>
          {t.chooseAnother}
        </PixelButton>
        <PixelButton onClick={onContinue}>
          {t.gatherIngredients}
        </PixelButton>
      </div>
    </div>
  )
}
