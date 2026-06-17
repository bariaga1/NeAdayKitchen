import type { Recipe } from '../types/game'
import { getDishEmoji } from '../data/recipes'
import { PixelButton } from '../components/PixelButton'
import { PixelPanel } from '../components/PixelPanel'

interface DishPickerProps {
  recipes: Recipe[]
  onSelect: (id: string) => void
  onBack: () => void
}

export function DishPicker({ recipes, onSelect, onBack }: DishPickerProps) {
  return (
    <div className="screen dish-picker">
      <h2 className="screen__heading">Choose Your Dish</h2>
      <p className="screen__subheading">A guided walkthrough from prep to plate</p>

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
            <p className="dish-card__amharic">{recipe.nameAmharic}</p>
            <p className="dish-card__tagline">{recipe.tagline}</p>
            <p className="dish-card__desc">{recipe.description}</p>
            <div className="dish-card__meta">
              <span>{recipe.prepSteps.length} prep steps</span>
              <span>{recipe.cookSteps.length} cook steps</span>
            </div>
            <PixelButton
              variant="accent"
              onClick={() => onSelect(recipe.id)}
              style={{ '--btn-color': recipe.palette.accent } as React.CSSProperties}
            >
              Cook This
            </PixelButton>
          </PixelPanel>
        ))}
      </div>

      <PixelButton variant="secondary" onClick={onBack}>
        ← Back
      </PixelButton>
    </div>
  )
}
