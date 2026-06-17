interface StepIndicatorProps {
  current: number
  total: number
  phaseLabel: string
}

export function StepIndicator({ current, total, phaseLabel }: StepIndicatorProps) {
  return (
    <div className="step-indicator">
      <span className="step-indicator__phase">{phaseLabel}</span>
      <div className="step-indicator__dots">
        {Array.from({ length: total }, (_, i) => (
          <span
            key={i}
            className={`step-indicator__dot ${i < current ? 'done' : ''} ${i === current ? 'active' : ''}`}
          />
        ))}
      </div>
      <span className="step-indicator__count">
        {current + 1} / {total}
      </span>
    </div>
  )
}
