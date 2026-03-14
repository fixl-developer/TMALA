"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Users, Building2, Trophy } from "lucide-react"

const sections = [
  {
    id: 1,
    title: "Transform Your Talent Management",
    subtitle: "The Future of Creative Agencies",
    description: "Discover how leading agencies worldwide are revolutionizing talent discovery and management",
    bgColor: "from-pink-100 via-purple-50 to-blue-50",
    textColor: "text-gray-900",
    accentColor: "text-purple-600",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
    icon: Sparkles,
    image: "/modeling-agency.jpg"
  },
  {
    id: 2,
    title: "Connect With Top Talent",
    subtitle: "10,000+ Verified Professionals",
    description: "Access a global network of models, actors, dancers, and creative professionals ready to work",
    bgColor: "from-purple-600 via-indigo-700 to-purple-800",
    textColor: "text-white",
    accentColor: "text-yellow-300",
    buttonColor: "bg-yellow-400 hover:bg-yellow-500 text-gray-900",
    icon: Users,
    image: "/talent-agency.jpg"
  },
  {
    id: 3,
    title: "Built For Modern Agencies",
    subtitle: "All-in-One Platform",
    description: "From casting to contracts, manage every aspect of your agency operations in one powerful platform",
    bgColor: "from-yellow-400 via-orange-400 to-pink-500",
    textColor: "text-gray-900",
    accentColor: "text-purple-900",
    buttonColor: "bg-gray-900 hover:bg-gray-800 text-white",
    icon: Building2,
    image: "/casting-agency.jpg"
  },
  {
    id: 4,
    title: "Scale Your Success",
    subtitle: "Trusted by 500+ Agencies",
    description: "Join the fastest-growing talent management platform and take your agency to the next level",
    bgColor: "from-blue-600 via-cyan-500 to-teal-400",
    textColor: "text-white",
    accentColor: "text-yellow-300",
    buttonColor: "bg-white hover:bg-gray-100 text-blue-600",
    icon: Trophy,
    image: "/production-agency.jpg"
  }
]

export function LayeredParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const rect = container.getBoundingClientRect()
      const containerTop = rect.top
      const containerHeight = rect.height
      const windowHeight = window.innerHeight

      // Calculate scroll progress through the container
      const scrolled = -containerTop
      const totalScroll = containerHeight - windowHeight
      const progress = Math.max(0, Math.min(1, scrolled / totalScroll))

      setScrollProgress(progress)

      // Determine active section
      const sectionIndex = Math.min(
        sections.length - 1,
        Math.floor(progress * sections.length)
      )
      setActiveSection(sectionIndex)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      ref={containerRef}
      className="relative"
      style={{ height: `${sections.length * 100}vh` }}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {sections.map((section, index) => {
          const isActive = index === activeSection
          const isPast = index < activeSection
          const isFuture = index > activeSection

          // Calculate transforms
          let scale = 1
          let translateY = 0
          let opacity = 0

          if (isActive) {
            opacity = 1
            scale = 1
            translateY = 0
          } else if (isPast) {
            opacity = 0.3
            scale = 0.9
            translateY = -50
          } else if (isFuture) {
            opacity = 0
            scale = 1.1
            translateY = 100
          }

          const Icon = section.icon

          return (
            <div
              key={section.id}
              className={`absolute inset-0 transition-all duration-1000 ease-out`}
              style={{
                opacity,
                transform: `scale(${scale}) translateY(${translateY}%)`,
                zIndex: isActive ? 10 : isPast ? 5 : 1,
              }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${section.bgColor}`} />

              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url(${section.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="absolute inset-0 bg-black/10" />

              {/* Content */}
              <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                  {/* Icon */}
                  <div 
                    className="mx-auto w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                    style={{
                      animation: isActive ? 'pulse 2s ease-in-out infinite' : 'none'
                    }}
                  >
                    <Icon className={`w-10 h-10 ${section.accentColor}`} />
                  </div>

                  {/* Subtitle */}
                  <p 
                    className={`text-sm font-bold uppercase tracking-widest ${section.accentColor}`}
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'all 0.8s ease-out 0.2s'
                    }}
                  >
                    {section.subtitle}
                  </p>

                  {/* Title */}
                  <h2 
                    className={`font-sans text-3xl sm:text-4xl lg:text-5xl font-bold ${section.textColor}`}
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'translateY(0)' : 'translateY(30px)',
                      transition: 'all 0.8s ease-out 0.4s'
                    }}
                  >
                    {section.title}
                  </h2>

                  {/* Description */}
                  <p 
                    className={`text-xl sm:text-2xl ${section.textColor} opacity-90 max-w-2xl mx-auto`}
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'translateY(0)' : 'translateY(30px)',
                      transition: 'all 0.8s ease-out 0.6s'
                    }}
                  >
                    {section.description}
                  </p>

                  {/* CTA Button */}
                  <div
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'translateY(0)' : 'translateY(30px)',
                      transition: 'all 0.8s ease-out 0.8s'
                    }}
                  >
                    <Button 
                      size="lg" 
                      className={`${section.buttonColor} text-lg px-8 py-6 shadow-2xl`}
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Section Indicator */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {sections.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index 
                        ? 'w-8 bg-white' 
                        : 'w-2 bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Side Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 space-y-4">
        {sections.map((section, index) => (
          <button
            key={section.id}
            className={`block w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeSection
                ? 'bg-white scale-125 shadow-lg'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            onClick={() => {
              const targetScroll = (index / sections.length) * (containerRef.current?.offsetHeight || 0)
              window.scrollTo({ top: targetScroll, behavior: 'smooth' })
            }}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
