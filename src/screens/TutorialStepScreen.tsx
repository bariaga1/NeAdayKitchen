import type { Recipe, RecipeStep } from '../types/game'
import { KitchenScene } from '../components/KitchenScene'
import { PixelButton } from '../components/PixelButton'
import { PixelPanel } from '../components/PixelPanel'
import { StepIndicator } from '../components/StepIndicator'
import { TimerDisplay } from '../components/TimerDisplay'
import { useLanguage } from '../i18n/languageContext'

interface TutorialStepScreenProps {
  recipe: Recipe
  steps: RecipeStep[]
  stepIndex: number
  phaseLabel: string
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
  const { t } = useLanguage()
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
        action={stepStarted ? phaseLabel : t.labelRead}
        animate={timerRunning}
      />

      <PixelPanel className="tutorial-step__instruction">
        <h3>{step.instruction}</h3>
        <p>{step.detail}</p>
      </PixelPanel>

      <div className="tutorial-step__duration">
        <span className="tutorial-step__duration-label">{t.realCookTime}</span>
        <span className="tutorial-step__duration-value">{step.durationLabel}</span>
      </div>

      {!stepStarted && (
        <PixelButton size="lg" onClick={onStartStep}>
          {t.startStep}
        </PixelButton>
      )}

      {stepStarted && (
        <div className="tutorial-step__active">
          {hasTimer && !timerStarted && (
            <PixelButton
              variant="accent"
              onClick={() => onStartTimer(step.durationMinutes!)}
            >
              {t.startTimer(step.durationLabel)}
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
                  {t.pauseTimer}
                </PixelButton>
              )}
              {!timerRunning && timerRemainingSeconds > 0 && (
                <PixelButton
                  variant="accent"
                  size="sm"
                  onClick={onResumeTimer}
                >
                  {t.resumeTimer}
                </PixelButton>
              )}
              {timerFinished && (
                <p className="tutorial-step__timer-done">{t.timerDone}</p>
              )}
            </div>
          )}

          <PixelButton size="lg" onClick={onNext}>
            {isLastStep ? t.finishPhase(phaseLabel) : t.nextStep}
          </PixelButton>
        </div>
      )}

      <PixelButton variant="secondary" size="sm" onClick={onBack}>
        {t.backToMenu}
      </PixelButton>
    </div>
  )
}
