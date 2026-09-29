import type { Recipe } from '../types/game'
import { PixelButton } from '../components/PixelButton'
import { PixelPanel } from '../components/PixelPanel'

interface IntroScreenProps {
  recipe: Recipe
  onContinue: () => void
  onBack: () => void
}

export function IntroScreen({ recipe, onContinue, onBack }: IntroScreenProps) {
  return (
    <div className="screen intro-screen" style={{ '--recipe-primary': recipe.palette.primary } as React.CSSProperties}>
      <div className="intro-screen__badge">{recipe.nameAmharic}</div>
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
          <p>Prep</p>
          <small>{recipe.prepSteps.length} steps</small>
        </div>
        <div className="intro-screen__arrow">→</div>
        <div className="intro-screen__phase">
          <span>2</span>
          <p>Cook</p>
          <small>{recipe.cookSteps.length} steps</small>
        </div>
        <div className="intro-screen__arrow">→</div>
        <div className="intro-screen__phase">
          <span>3</span>
          <p>Serve</p>
          <small>enjoy!</small>
        </div>
      </div>

      <div className="intro-screen__actions">
        <PixelButton variant="secondary" onClick={onBack}>
          ← Choose Another
        </PixelButton>
        <PixelButton onClick={onContinue}>
          Begin Prep →
        </PixelButton>
      </div>
    </div>
  )
}
