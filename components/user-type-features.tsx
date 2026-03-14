"use client"

import { useState, useEffect, useRef } from "react"
import { Building2, Users, Handshake } from "lucide-react"
import { IconBox } from "@/components/ui/icon-box"

const userTypes = [
  {
    id: "agencies",
    icon: Building2,
    title: "Agencies",
    description: "Complete management tools for talent agencies",
    video: "https://assets.mixkit.co/videos/4809/4809-1080.mp4",
    features: [
      "Multi-tenant agency control",
      "Talent roster management",
      "Event & pageant hosting",
      "Brand partnership tools"
    ]
  },
  {
    id: "talents",
    icon: Users,
    title: "Talents",
    description: "Showcase your portfolio and get discovered",
    video: "https://assets.mixkit.co/videos/52270/52270-1080.mp4",
    features: [
      "Portfolio management",
      "Agency connections",
      "Event participation",
      "Career opportunities"
    ]
  },
  {
    id: "sponsors",
    icon: Handshake,
    title: "Sponsors",
    description: "Connect with talent and agencies for brand partnerships",
    video: "https://assets.mixkit.co/videos/26787/26787-720.mp4",
    features: [
      "Brand visibility",
      "Sponsorship opportunities",
      "Deal management",
      "ROI tracking"
    ]
  }
]

export function UserTypeFeaturesSection() {
  const [activeType, setActiveType] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Auto-play video when active type changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play().catch(err => console.log("Video autoplay prevented:", err))
    }
  }, [activeType])

  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gray-800">
            Features by User Type
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Tailored functionality for every type of user
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side - User Type Tabs */}
          <div className="space-y-4">
            {userTypes.map((type, index) => {
              const Icon = type.icon
              const isActive = index === activeType

              return (
                <button
                  key={type.id}
                  onClick={() => setActiveType(index)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl scale-105"
                      : "bg-gray-50 text-gray-900 hover:bg-gray-100 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <IconBox
                      icon={Icon}
                      size="md"
                      variant={isActive ? "solid" : "outline"}
                      accentColor="purple"
                      iconClassName={isActive ? "text-white" : "text-purple-600"}
                      className={isActive ? "bg-white/20 border-white/30" : "bg-purple-100 border-purple-200"}
                    />
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                      <p
                        className={`text-sm mb-3 ${
                          isActive ? "text-white/90" : "text-gray-600"
                        }`}
                      >
                        {type.description}
                      </p>
                      
                      {isActive && (
                        <ul className="space-y-2">
                          {type.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-sm text-white/90"
                            >
                              <svg
                                className="w-4 h-4 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right Side - Video Player */}
          <div className="relative">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
              <video
                ref={videoRef}
                key={activeType}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={userTypes[activeType].video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Video Overlay Label */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-white text-sm font-semibold">
                  {userTypes[activeType].title} Demo
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-8 -right-8 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
