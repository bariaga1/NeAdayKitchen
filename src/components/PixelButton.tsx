import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export function PixelButton({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: PixelButtonProps) {
  return (
    <button
      className={`pixel-btn pixel-btn--${variant} pixel-btn--${size} ${className}`}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}
