import React from 'react'
import { cn } from '@/lib/utils'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  as?: React.ElementType
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 2, as, children, ...props }, ref) => {
    const Component = as || (`h${level}` as React.ElementType)
    const sizes = {
      1: 'text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.02]',
      2: 'text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08]',
      3: 'text-3xl md:text-4xl tracking-tight leading-[1.15]',
      4: 'text-2xl md:text-3xl tracking-tight leading-[1.25]',
      5: 'text-xl md:text-2xl tracking-tight',
      6: 'text-lg md:text-xl tracking-tight',
    }
    return (
      <Component
        ref={ref}
        className={cn('font-modeling-display font-bold text-modeling-ink', sizes[level], className)}
        {...props}
      >
        {children}
      </Component>
    )
  }
)
Heading.displayName = 'Heading'
