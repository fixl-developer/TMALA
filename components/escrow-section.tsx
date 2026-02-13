"use client"

import { useState, useEffect, useCallback } from "react"
import { Shield, ArrowUpRight, ArrowRight, Wallet, FileCheck, CheckCircle, AlertCircle } from "lucide-react"

const escrowSteps = [
  {
    icon: Wallet,
    title: "Payment Secured",
    description: "Brand/agency books talent. Full payment goes into secure escrow (like a bank locker).",
    image: "/feature-onboarding.jpg"
  },
  {
    icon: FileCheck,
    title: "Work Completed",
    description: "Talent completes shoot/event/deliverable and uploads proof (photos, videos, attendance).",
    image: "/feature-agency-control.jpg"
  },
  {
    icon: CheckCircle,
    title: "Agency Approves",
    description: "Agency reviews and approves the work, confirming everything is satisfactory.",
    image: "/feature-subscription.jpg"
  },
  {
    icon: ArrowRight,
    title: "Auto Split",
    description: "Money automatically splits: Talent share + Agency commission + Platform fee + GST.",
    image: "/feature-pageants.jpg"
  },
  {
    icon: AlertCircle,
    title: "Dispute Resolution",
    description: "If issues arise, raise a dispute. Platform decides (partial pay, refund, or penalty).",
    image: "/feature-judging.jpg"
  }
]

export function EscrowSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(true)

  // Clone first 3 items (max visible on desktop) to end for infinite loop
  const extendedSteps = [...escrowSteps, ...escrowSteps.slice(0, 3)]
  const totalOriginalSteps = escrowSteps.length

  const nextSlide = useCallback(() => {
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev + 1)
  }, [])

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(nextSlide, 2500)
    return () => clearInterval(interval)
  }, [isHovered, nextSlide])

  const handleTransitionEnd = () => {
    // If we've scrolled past the last original item to the first clone
    if (currentIndex >= totalOriginalSteps) {
      // Disable transition temporarily
      setIsTransitioning(false)
      // Snap back to the real first item
      setCurrentIndex(currentIndex % totalOriginalSteps)
    }
  }

  // To re-enable transition after snapping back
  useEffect(() => {
    if (!isTransitioning) {
      // Force a reflow or simply wait a tick to re-enable transition
      // requestAnimationFrame is a good way to ensure the snap (no transition) rendered
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true)
        })
      })
    }
  }, [isTransitioning])

  return (
    <section className="relative bg-black py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-full">
        {/* Header */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-montra-red/10 text-montra-red font-bebas tracking-widest text-sm mb-6">
            <Shield className="w-4 h-4" />
            <span>SECURE PAYMENT SYSTEM</span>
          </div>
          <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight mb-6">
            Escrow Protection
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Your money stays safe in our secure escrow system — like a bank locker.
            Payments release only when work is complete and both parties are satisfied.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative w-full border-y border-white/10 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Sliding Track */}
          <div
            className="flex"
            style={{
              transform: `translateX(-${currentIndex * (typeof window !== 'undefined' && window.innerWidth < 1024 ? 100 : 33.333)}%)`,
              transition: isTransitioning ? 'transform 700ms ease-in-out' : 'none'
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedSteps.map((step, index) => {
              // Calculate the "real" index for display (0-4)
              const realIndex = index % totalOriginalSteps
              // Check if this card is hovered
              const isCardHovered = hoveredCard === index
              // Check if any card is hovered
              const anyCardHovered = hoveredCard !== null
              
              // Calculate flex-basis based on hover state
              const flexBasis = isCardHovered 
                ? 'lg:basis-[40%]' 
                : anyCardHovered 
                ? 'lg:basis-[30%]' 
                : 'lg:basis-1/3'

              return (
                <div
                  key={index}
                  className={`relative flex-shrink-0 w-full ${flexBasis} min-h-[500px] border-r border-white/10 p-8 lg:p-12 flex flex-col justify-between transition-all duration-700 ease-in-out bg-black hover:bg-zinc-900/40 group`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="mb-6">
                    <span className="text-6xl font-bebas text-white/30 group-hover:text-white transition-colors">
                      .0{realIndex + 1}
                    </span>
                  </div>

                  <div className="relative z-10 mb-auto">
                    <h3 className="font-bebas text-4xl text-white uppercase tracking-wide mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 font-light leading-relaxed max-w-sm">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-8 mb-8">
                    <div className="flex items-center gap-2 text-white font-bebas tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-all">
                      <span>Learn More</span>
                      <div className="p-2 rounded-full border border-white/20 group-hover:border-montra-red group-hover:bg-montra-red transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 h-48 w-full overflow-hidden rounded-lg opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-12 gap-2">
          {escrowSteps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsTransitioning(true)
                setCurrentIndex(idx)
              }}
              className={`h-1 transition-all duration-500 ${idx === (currentIndex % totalOriginalSteps) ? 'w-12 bg-montra-red' : 'w-4 bg-white/10 hover:bg-white/20'}`}
              aria-label={`Go to step ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
