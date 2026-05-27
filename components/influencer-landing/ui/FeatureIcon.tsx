import React from 'react'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface FeatureIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  variant?: 'primary' | 'secondary' | 'dark'
}

export const FeatureIcon = React.forwardRef<HTMLDivElement, FeatureIconProps>(
  ({ className, icon: Icon, variant = 'primary', ...props }, ref) => {
    const variants = {
      primary: 'bg-accent-primary text-white shadow-md shadow-accent-primary/20',
      secondary: 'bg-surface-sec text-text-main border border-black/5',
      dark: 'bg-text-main text-white',
    }

    return (
      <div
        ref={ref}
        className={cn(
          'w-12 h-12 rounded-xl flex items-center justify-center',
          variants[variant],
          className
        )}
        {...props}
      >
        <Icon className="w-6 h-6" />
      </div>
    )
  }
)
FeatureIcon.displayName = 'FeatureIcon'
