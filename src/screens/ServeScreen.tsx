import type { Recipe } from '../types/game'
import { getDishEmoji } from '../data/recipes'
import { PixelButton } from '../components/PixelButton'
import { PixelPanel } from '../components/PixelPanel'
import { useLanguage } from '../i18n/languageContext'

interface ServeScreenProps {
  recipe: Recipe
  onPlayAgain: () => void
  onHome: () => void
}

export function ServeScreen({ recipe, onPlayAgain, onHome }: ServeScreenProps) {
  const { t } = useLanguage()

  return (
    <div
      className="screen serve-screen"
      style={{ '--recipe-primary': recipe.palette.primary, '--recipe-accent': recipe.palette.accent } as React.CSSProperties}
    >
      <div className="serve-screen__confetti">
        {Array.from({ length: 12 }, (_, i) => (
          <span key={i} style={{ '--i': i } as React.CSSProperties}>✨</span>
        ))}
      </div>

      <h2 className="serve-screen__title">{t.serveTitle}</h2>
      <p className="serve-screen__subtitle">{t.serveSubtitle}</p>

      <div className="serve-screen__plate">
        <div className="injera">
          <div className="injera__bread" />
          <div className="injera__wat" style={{ background: recipe.palette.primary }}>
            <span>{getDishEmoji(recipe.id)}</span>
          </div>
        </div>
      </div>

      <PixelPanel className="serve-screen__message">
        <h3>{recipe.name}</h3>
        <p>{recipe.serveMessage}</p>
        <p className="serve-screen__tip">💡 {recipe.serveTip}</p>
      </PixelPanel>

      <div className="serve-screen__actions">
        <PixelButton onClick={onPlayAgain}>
          {t.cookAnother}
        </PixelButton>
        <PixelButton variant="secondary" onClick={onHome}>
          {t.mainMenu}
        </PixelButton>
      </div>
    </div>
  )
}
