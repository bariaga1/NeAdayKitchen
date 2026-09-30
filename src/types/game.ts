export type GamePhase = 'title' | 'picker' | 'intro' | 'prep' | 'cook' | 'serve'

export interface RecipeStep {
  id: string
  instruction: string
  detail: string
  /** Minutes for the optional kitchen timer; null if no timer applies */
  durationMinutes: number | null
  /** Human-readable real-world time, e.g. "25–30 min" */
  durationLabel: string
  emoji: string
}

export interface Ingredient {
  id: string
  name: string
  /** Human-readable quantity, e.g. "2 lbs" or "1/2 cup" */
  amount: string
  emoji: string
}

export interface Recipe {
  id: string
  name: string
  nameAmharic: string
  tagline: string
  description: string
  intro: string
  culturalNote: string
  ingredients: Ingredient[]
  prepSteps: RecipeStep[]
  cookSteps: RecipeStep[]
  serveMessage: string
  serveTip: string
  palette: {
    primary: string
    secondary: string
    accent: string
    bg: string
  }
}

export interface GameState {
  phase: GamePhase
  recipeId: string | null
  prepStepIndex: number
  cookStepIndex: number
  stepStarted: boolean
  timerRunning: boolean
  timerRemainingSeconds: number
  timerStarted: boolean
}
