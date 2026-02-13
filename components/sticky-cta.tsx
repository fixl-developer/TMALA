"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (approximately 100vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.8)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="outline"
        size="icon"
        onClick={scrollToTop}
        className="h-12 w-12 rounded-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-gray-800/80 backdrop-blur-sm shadow-lg"
      >
        <ChevronUp className="h-5 w-5" />
        <span className="sr-only">Scroll to top</span>
      </Button>
    </div>
  )
}
