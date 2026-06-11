"use client"

import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useModelingLanding } from '../context'

export function SidePanel({ children }: { children: React.ReactNode }) {
  const { activePanel, closePanel } = useModelingLanding()

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
            className="fixed inset-0 bg-modeling-ink/55 backdrop-blur-sm z-[100] cursor-pointer"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 210 }}
            data-lenis-prevent
            className="fixed top-0 right-0 h-full w-full sm:w-[500px] md:w-[600px] bg-modeling-bg shadow-2xl z-[101] overflow-y-auto overscroll-contain"
          >
            <div className="sticky top-0 right-0 p-6 flex justify-end z-[102] bg-modeling-bg/80 backdrop-blur-md">
              <button
                onClick={closePanel}
                className="p-2 hover:bg-modeling-light rounded-full transition-colors group"
                aria-label="Close panel"
              >
                <X className="w-6 h-6 text-modeling-ink group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>
            <div className="px-6 pb-20 md:px-10">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
