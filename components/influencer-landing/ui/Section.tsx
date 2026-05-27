import React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('w-full py-20 lg:py-32', className)}
        {...props}
      >
        {children}
      </section>
    )
  }
)
Section.displayName = 'Section'
