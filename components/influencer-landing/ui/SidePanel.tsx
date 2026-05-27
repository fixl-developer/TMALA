"use client"

import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useInfluencerLanding } from '../context'

interface SidePanelProps {
  children: React.ReactNode
}

export function SidePanel({ children }: SidePanelProps) {
  const { activePanel, closePanel } = useInfluencerLanding()

  // Lock background scroll while a panel is open (works with Lenis smooth-scroll too).
  useEffect(() => {
    const html = document.documentElement
    if (activePanel) {
      document.body.style.overflow = 'hidden'
      html.classList.add('lenis-stopped')
    } else {
      document.body.style.overflow = 'unset'
      html.classList.remove('lenis-stopped')
    }
    return () => {
      document.body.style.overflow = 'unset'
      html.classList.remove('lenis-stopped')
    }
  }, [activePanel])

  return (
    <AnimatePresence>
      {activePanel && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePanel}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] cursor-pointer"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            data-lenis-prevent
            className="fixed top-0 right-0 h-full w-full sm:w-[500px] md:w-[600px] bg-bg-base shadow-2xl z-[101] overflow-y-auto overscroll-contain"
          >
            <div className="sticky top-0 right-0 p-6 flex justify-end z-[102] bg-bg-base/80 backdrop-blur-md">
              <button
                onClick={closePanel}
                className="p-2 hover:bg-black/5 rounded-full transition-colors group"
                aria-label="Close panel"
              >
                <X className="w-6 h-6 text-text-main group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            <div className="px-6 pb-20 md:px-10">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
