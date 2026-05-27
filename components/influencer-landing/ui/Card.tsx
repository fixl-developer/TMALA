import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, elevated = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-surface-main rounded-2xl border border-black/5 p-6',
          elevated
            ? 'shadow-lg hover:shadow-xl transition-shadow duration-300'
            : 'shadow-sm',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Card.displayName = 'Card'
