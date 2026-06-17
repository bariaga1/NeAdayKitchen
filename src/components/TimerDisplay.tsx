interface TimerDisplayProps {
  seconds: number
  running: boolean
  finished?: boolean
}

function formatDuration(totalSeconds: number): string {
  const hrs = Math.floor(totalSeconds / 3600)
  const mins = Math.floor((totalSeconds % 3600) / 60)
  const secs = totalSeconds % 60
  const pad = (n: number) => n.toString().padStart(2, '0')

  if (hrs > 0) {
    return `${hrs}:${pad(mins)}:${pad(secs)}`
  }
  return `${mins}:${pad(secs)}`
}

export function TimerDisplay({ seconds, running, finished }: TimerDisplayProps) {
  return (
    <div
      className={`timer-display ${running ? 'timer-display--running' : ''} ${finished ? 'timer-display--finished' : ''}`}
    >
      <span className="timer-display__icon">{finished ? '✓' : '⏱'}</span>
      <span className="timer-display__time">{formatDuration(seconds)}</span>
    </div>
  )
}
