import React from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'outline'
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-colors'

    const variants = {
      default: 'bg-surface-sec text-text-main border border-black/5',
      accent: 'bg-accent-primary/10 text-accent-primary border border-accent-primary/20',
      outline: 'bg-transparent text-text-mut border border-text-mut/30',
    }

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </span>
    )
  }
)
Badge.displayName = 'Badge'
