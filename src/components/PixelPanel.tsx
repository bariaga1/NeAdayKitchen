import type { CSSProperties, ReactNode } from 'react'

interface PixelPanelProps {
  children: ReactNode
  className?: string
  accent?: string
}

export function PixelPanel({ children, className = '', accent }: PixelPanelProps) {
  return (
    <div
      className={`pixel-panel ${className}`}
      style={accent ? { '--panel-accent': accent } as CSSProperties : undefined}
    >
      {children}
    </div>
  )
}
