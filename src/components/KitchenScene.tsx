interface KitchenSceneProps {
  emoji: string
  action?: string
  animate?: boolean
}

export function KitchenScene({ emoji, action, animate }: KitchenSceneProps) {
  return (
    <div className={`kitchen-scene ${animate ? 'kitchen-scene--animate' : ''}`}>
      <div className="kitchen-scene__bg">
        <div className="kitchen-scene__shelf" />
        <div className="kitchen-scene__counter" />
        <div className="kitchen-scene__stove">
          <div className="kitchen-scene__burner kitchen-scene__burner--on" />
          <div className="kitchen-scene__burner" />
        </div>
        <div className="kitchen-scene__pot">🍲</div>
      </div>
      <div className={`kitchen-scene__ingredient ${action ?? ''}`}>
        <span className="kitchen-scene__emoji">{emoji}</span>
      </div>
      {action && <div className="kitchen-scene__action-label">{action}</div>}
    </div>
  )
}
