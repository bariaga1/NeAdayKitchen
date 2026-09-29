import { useMemo } from 'react'
import { BackgroundMusic } from './components/BackgroundMusic'
import { LanguageToggle } from './components/LanguageToggle'
import { getRecipe, recipes } from './data/recipes'
import { useGameState } from './hooks/useGameState'
import { useLanguage } from './i18n/languageContext'
import { localizeRecipe } from './i18n/recipes.ti'
import { DishPicker } from './screens/DishPicker'
import { IntroScreen } from './screens/IntroScreen'
import { ServeScreen } from './screens/ServeScreen'
import { TitleScreen } from './screens/TitleScreen'
import { TutorialStepScreen } from './screens/TutorialStepScreen'
import './App.css'

function App() {
  const {
    state,
    setPhase,
    selectRecipe,
    resetGame,
    startStep,
    startTimer,
    stopTimer,
    resumeTimer,
    nextPrepStep,
    nextCookStep,
  } = useGameState()
  const { lang, t } = useLanguage()

  const localizedRecipes = useMemo(
    () => recipes.map((r) => localizeRecipe(r, lang)),
    [lang],
  )
  const baseRecipe = state.recipeId ? getRecipe(state.recipeId) : undefined
  const recipe = baseRecipe ? localizeRecipe(baseRecipe, lang) : undefined

  const recipeStyle = recipe
    ? ({
        '--recipe-primary': recipe.palette.primary,
        '--recipe-secondary': recipe.palette.secondary,
        '--recipe-accent': recipe.palette.accent,
        '--recipe-bg': recipe.palette.bg,
      } as React.CSSProperties)
    : undefined

  return (
    <div className="app" style={recipeStyle}>
      <div className="app__frame">
        <LanguageToggle />
        <BackgroundMusic />
        {state.phase === 'title' && (
          <TitleScreen onStart={() => setPhase('picker')} />
        )}

        {state.phase === 'picker' && (
          <DishPicker
            recipes={localizedRecipes}
            onSelect={selectRecipe}
            onBack={resetGame}
          />
        )}

        {state.phase === 'intro' && recipe && (
          <IntroScreen
            recipe={recipe}
            onContinue={() => setPhase('prep')}
            onBack={() => setPhase('picker')}
          />
        )}

        {state.phase === 'prep' && recipe && (
          <TutorialStepScreen
            recipe={recipe}
            steps={recipe.prepSteps}
            stepIndex={state.prepStepIndex}
            phaseLabel={t.labelPrep}
            stepStarted={state.stepStarted}
            timerStarted={state.timerStarted}
            timerRunning={state.timerRunning}
            timerRemainingSeconds={state.timerRemainingSeconds}
            onStartStep={startStep}
            onStartTimer={startTimer}
            onStopTimer={stopTimer}
            onResumeTimer={resumeTimer}
            onNext={() => nextPrepStep(recipe.prepSteps.length)}
            onBack={() => setPhase('picker')}
          />
        )}

        {state.phase === 'cook' && recipe && (
          <TutorialStepScreen
            recipe={recipe}
            steps={recipe.cookSteps}
            stepIndex={state.cookStepIndex}
            phaseLabel={t.labelCook}
            stepStarted={state.stepStarted}
            timerStarted={state.timerStarted}
            timerRunning={state.timerRunning}
            timerRemainingSeconds={state.timerRemainingSeconds}
            onStartStep={startStep}
            onStartTimer={startTimer}
            onStopTimer={stopTimer}
            onResumeTimer={resumeTimer}
            onNext={() => nextCookStep(recipe.cookSteps.length)}
            onBack={() => setPhase('picker')}
          />
        )}

        {state.phase === 'serve' && recipe && (
          <ServeScreen
            recipe={recipe}
            onPlayAgain={() => setPhase('picker')}
            onHome={resetGame}
          />
        )}
      </div>
    </div>
  )
}

export default App
