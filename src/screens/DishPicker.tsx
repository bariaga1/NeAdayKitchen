import { getDishEmoji } from '../data/recipes'
import { PixelButton } from '../components/PixelButton'
import { PixelPanel } from '../components/PixelPanel'
import { useLanguage } from '../i18n/languageContext'
import type { LocalizedRecipe } from '../i18n/recipes.ti'

interface DishPickerProps {
  recipes: LocalizedRecipe[]
  onSelect: (id: string) => void
  onBack: () => void
}

export function DishPicker({ recipes, onSelect, onBack }: DishPickerProps) {
  const { t } = useLanguage()

  return (
    <div className="screen dish-picker">
      <h2 className="screen__heading">{t.chooseDish}</h2>
      <p className="screen__subheading">{t.pickerSubheading}</p>

      <div className="dish-picker__grid">
        {recipes.map((recipe) => (
          <PixelPanel
            key={recipe.id}
            className="dish-card"
            accent={recipe.palette.primary}
          >
            <div
              className="dish-card__banner"
              style={{ background: recipe.palette.primary }}
            />
            <div className="dish-card__emoji">
              {getDishEmoji(recipe.id)}
            </div>
            <h3 className="dish-card__name">{recipe.name}</h3>
            <p className="dish-card__amharic">{recipe.altName}</p>
            <p className="dish-card__tagline">{recipe.tagline}</p>
            {recipe.id === 'shiro' && (
              <span className="dish-card__veg-badge">{t.vegetarian}</span>
            )}
            <p className="dish-card__desc">{recipe.description}</p>
            <div className="dish-card__meta">
              <span>{t.prepStepsCount(recipe.prepSteps.length)}</span>
              <span>{t.cookStepsCount(recipe.cookSteps.length)}</span>
            </div>
            <PixelButton
              variant="accent"
              onClick={() => onSelect(recipe.id)}
              style={{ '--btn-color': recipe.palette.accent } as React.CSSProperties}
            >
              {t.cookThis}
            </PixelButton>
          </PixelPanel>
        ))}
      </div>

      <PixelButton variant="secondary" onClick={onBack}>
        {t.back}
      </PixelButton>
    </div>
  )
}
