import { useState } from 'react'
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
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  function toggleIngredient(id: string) {
    if (checked[id]) {
      setChecked({ ...checked, [id]: false })
    } else {
      setChecked({ ...checked, [id]: true })
    }
  }

  const gatheredCount =  Object.values(checked).filter(Boolean).length
  return (
    <div className="screen ingredients-screen">
      <h2 className="screen__heading">{t.ingredientsHeading}</h2>
      <p className="screen__subheading">{t.ingredientsSubheading}</p>

      <PixelPanel className="ingredients-screen__panel" accent={recipe.palette.accent}>
        <ul className="ingredients-screen__list">
          {recipe.ingredients.map((ingredient) => {
            const isChecked = checked[ingredient.id] ?? false
            return (
              <li key={ingredient.id}>
                <label
                  className={`ingredients-screen__item${isChecked ? ' ingredients-screen__item--checked' : ''}`}
                >
                  <input
                    type="checkbox"
                    className="ingredients-screen__checkbox"
                    checked={isChecked}
                    onChange={() => toggleIngredient(ingredient.id)}
                  />
                  <span className="ingredients-screen__emoji">{ingredient.emoji}</span>
                  <span className="ingredients-screen__name">{ingredient.name}</span>
                  <span className="ingredients-screen__amount">{ingredient.amount}</span>
                </label>
              </li>
            )
          })}
        </ul>
      </PixelPanel>

      <p className="ingredients-screen__count">
        {t.gatheredCount(gatheredCount, recipe.ingredients.length)}
      </p>

      <div className="ingredients-screen__actions">
        <PixelButton variant="secondary" onClick={onBack}>
          {t.back}
        </PixelButton>
        <PixelButton onClick={onContinue}>{t.beginPrep}</PixelButton>
      </div>
    </div>
  )
}
