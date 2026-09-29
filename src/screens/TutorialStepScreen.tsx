import type { Recipe, RecipeStep } from '../types/game'
import { KitchenScene } from '../components/KitchenScene'
import { PixelButton } from '../components/PixelButton'
import { PixelPanel } from '../components/PixelPanel'
import { StepIndicator } from '../components/StepIndicator'
import { TimerDisplay } from '../components/TimerDisplay'

interface TutorialStepScreenProps {
  recipe: Recipe
  steps: RecipeStep[]
  stepIndex: number
  phaseLabel: 'PREP' | 'COOK'
  stepStarted: boolean
  timerStarted: boolean
  timerRunning: boolean
  timerRemainingSeconds: number
  onStartStep: () => void
  onStartTimer: (minutes: number) => void
  onStopTimer: () => void
  onResumeTimer: () => void
  onNext: () => void
  onBack: () => void
}

export function TutorialStepScreen({
  recipe,
  steps,
  stepIndex,
  phaseLabel,
  stepStarted,
  timerStarted,
  timerRunning,
  timerRemainingSeconds,
  onStartStep,
  onStartTimer,
  onStopTimer,
  onResumeTimer,
  onNext,
  onBack,
}: TutorialStepScreenProps) {
  const step = steps[stepIndex]
  const isLastStep = stepIndex === steps.length - 1
  const hasTimer = step.durationMinutes !== null && step.durationMinutes > 0
  const timerFinished = timerStarted && !timerRunning && timerRemainingSeconds === 0

  return (
    <div
      className="screen tutorial-step"
      style={{
        '--recipe-primary': recipe.palette.primary,
        '--recipe-accent': recipe.palette.accent,
      } as React.CSSProperties}
    >
      <StepIndicator
        current={stepIndex}
        total={steps.length}
        phaseLabel={phaseLabel}
      />

      <KitchenScene
        emoji={step.emoji}
        action={stepStarted ? phaseLabel : 'READ'}
        animate={timerRunning}
      />

      <PixelPanel className="tutorial-step__instruction">
        <h3>{step.instruction}</h3>
        <p>{step.detail}</p>
      </PixelPanel>

      <div className="tutorial-step__duration">
        <span className="tutorial-step__duration-label">Real cook time</span>
        <span className="tutorial-step__duration-value">{step.durationLabel}</span>
      </div>

      {!stepStarted && (
        <PixelButton size="lg" onClick={onStartStep}>
          Start Step
        </PixelButton>
      )}

      {stepStarted && (
        <div className="tutorial-step__active">
          {hasTimer && !timerStarted && (
            <PixelButton
              variant="accent"
              onClick={() => onStartTimer(step.durationMinutes!)}
            >
              Start Timer ({step.durationLabel})
            </PixelButton>
          )}

          {timerStarted && (
            <div className="tutorial-step__timer-block">
              <TimerDisplay
                seconds={timerRemainingSeconds}
                running={timerRunning}
                finished={timerFinished}
              />
              {timerRunning && (
                <PixelButton variant="secondary" size="sm" onClick={onStopTimer}>
                  Pause Timer
                </PixelButton>
              )}
              {!timerRunning && timerRemainingSeconds > 0 && (
                <PixelButton
                  variant="accent"
                  size="sm"
                  onClick={onResumeTimer}
                >
                  Resume Timer
                </PixelButton>
              )}
              {timerFinished && (
                <p className="tutorial-step__timer-done">Timer finished — check your pot!</p>
              )}
            </div>
          )}

          <PixelButton size="lg" onClick={onNext}>
            {isLastStep ? `Finish ${phaseLabel} →` : 'Next Step →'}
          </PixelButton>
        </div>
      )}

      <PixelButton variant="secondary" size="sm" onClick={onBack}>
        ← Back to Menu
      </PixelButton>
    </div>
  )
}
