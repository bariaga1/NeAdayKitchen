import { PixelButton } from '../components/PixelButton'
import { PixelPanel } from '../components/PixelPanel'
import { useLanguage } from '../i18n/languageContext'
import type { LocalizedRecipe } from '../i18n/recipes.ti'

interface IngredientsScreenProps {
  recipe: LocalizedRecipe
  onContinue: () => void
  onBack: () => void
}

export function IngredientsScreen({ recipe, onContinue, onBack }: IngredientsScreenProps) {
  const { t } = useLanguage()

  return (
    <div className="screen ingredients-screen">
      <h2 className="screen__heading">{t.ingredientsHeading}</h2>
      <p className="screen__subheading">{t.ingredientsSubheading}</p>

      <PixelPanel className="ingredients-screen__panel" accent={recipe.palette.accent}>
        <ul className="ingredients-screen__list">
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient.id} className="ingredients-screen__item">
              <span className="ingredients-screen__emoji">{ingredient.emoji}</span>
              <span className="ingredients-screen__name">{ingredient.name}</span>
              <span className="ingredients-screen__amount">{ingredient.amount}</span>
            </li>
          ))}
        </ul>
      </PixelPanel>

      <div className="ingredients-screen__actions">
        <PixelButton variant="secondary" onClick={onBack}>
          {t.back}
        </PixelButton>
        <PixelButton onClick={onContinue}>{t.beginPrep}</PixelButton>
      </div>
    </div>
  )
}
