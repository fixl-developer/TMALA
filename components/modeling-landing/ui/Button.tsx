import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center font-modeling-body font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-modeling-rose focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

    const variants = {
      primary: 'bg-modeling-rose text-white hover:bg-modeling-deep shadow-[0_8px_24px_-8px_rgba(236,72,153,0.45)] hover:shadow-[0_12px_32px_-8px_rgba(190,24,93,0.5)]',
      secondary: 'bg-white text-modeling-ink border border-modeling-line hover:border-modeling-rose hover:text-modeling-deep',
      ghost: 'bg-transparent text-modeling-ink hover:bg-modeling-light/60',
      outline: 'bg-transparent text-modeling-ink border border-modeling-ink/15 hover:bg-modeling-ink hover:text-white hover:border-modeling-ink',
    }

    const sizes = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-sm',
    }

    return (
      <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />
    )
  }
)
Button.displayName = 'Button'
