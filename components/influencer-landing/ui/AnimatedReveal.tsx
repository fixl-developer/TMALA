"use client"

import React, { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export const AnimatedReveal = React.forwardRef<HTMLDivElement, AnimatedRevealProps>(
  ({ className, children, delay = 0, direction = 'up', ...props }, ref) => {
    const shouldReduceMotion = useReducedMotion()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
      setMounted(true)
    }, [])

    const directions = {
      up: { y: 40, x: 0 },
      down: { y: -40, x: 0 },
      left: { y: 0, x: 40 },
      right: { y: 0, x: -40 },
    }

    // SSR-safe: render at final state until hydration, then animate
    if (!mounted || shouldReduceMotion) {
      return (
        <div ref={ref} className={cn('', className)} {...props}>
          {children}
        </div>
      )
    }

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, ...directions[direction] }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={cn('', className)}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)
AnimatedReveal.displayName = 'AnimatedReveal'
