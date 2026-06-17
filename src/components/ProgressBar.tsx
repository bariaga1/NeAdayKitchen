interface ProgressBarProps {
  current: number
  total: number
  label?: string
  color?: string
}

export function ProgressBar({ current, total, label, color }: ProgressBarProps) {
  const pct = total > 0 ? Math.min(100, (current / total) * 100) : 0

  return (
    <div className="progress-bar">
      {label && <span className="progress-bar__label">{label}</span>}
      <div className="progress-bar__track">
        <div
          className="progress-bar__fill"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
      <span className="progress-bar__count">
        {current}/{total}
      </span>
    </div>
  )
}
