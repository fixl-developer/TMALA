"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Sparkles,
  Camera,
  Shield,
  Search,
  Trophy,
  Zap,
  CheckCircle2,
  ChevronDown
} from "lucide-react"
import { RadialVideoMenu } from "@/components/radial-video-menu";

const features = [
  {
    icon: User,
    title: "Verified Profiles",
    description: "Create professional, verified profiles with ID verification and authenticity badges.",
    video: "/talents-demo.mp4",
    gradient: "linear-gradient(135deg, #c026d3 0%, #7e22ce 100%)",
  },
  {
    icon: Sparkles,
    title: "AI-Enhanced Portfolios",
    description: "Automatically enhance your photos and organize your portfolio with AI assistance.",
    video: "/generate-step.mp4",
    gradient: "linear-gradient(135deg, #1d4ed8 0%, #312e81 100%)",
  },
  {
    icon: Camera,
    title: "Professional Showcase",
    description: "Beautiful, mobile-responsive portfolios that showcase your best work.",
    video: "/result-step.mp4",
    gradient: "linear-gradient(135deg, #0d9488 0%, #155e75 100%)",
  },
  {
    icon: Search,
    title: "Agency Discovery",
    description: "Get discovered by top agencies actively scouting for new talent.",
    video: "/agencies-demo.mp4",
    gradient: "linear-gradient(135deg, #be123c 0%, #831843 100%)",
  },
  {
    icon: Trophy,
    title: "Opportunity Access",
    description: "Direct access to casting calls, pageants, and exclusive opportunities.",
    video: "/sponsors-demo.mp4",
    gradient: "linear-gradient(135deg, #b45309 0%, #c2410c 100%)",
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Your data and images are protected with enterprise-grade security.",
    video: "/background-video.mp4",
    gradient: "linear-gradient(135deg, #047857 0%, #0f766e 100%)",
  },
]

const benefits = [
  "Self-onboarding with guided profile creation",
  "AI-powered photo enhancement and organization",
  "Direct messaging with verified agencies",
  "Real-time notifications for new opportunities",
  "Mobile app for on-the-go portfolio management",
  "Analytics on profile views and engagement"
]

const talentTypes = [
  {
    title: "Models",
    description: "Fashion, commercial, fitness, and specialty modeling. Create stunning portfolios that capture every angle.",
    video: "/talents-demo.mp4"
  },
  {
    title: "Actors",
    description: "Film, television, theater, and commercial acting. Showcase your range and headshots to casting directors.",
    video: "/agencies-demo.mp4"
  },
  {
    title: "Dancers",
    description: "Contemporary, classical, commercial, and cultural dance. Upload performance videos and action shots.",
    video: "/sponsors-demo.mp4"
  },
  {
    title: "Musicians",
    description: "Vocalists, instrumentalists, and music performers. Share your tracks and live session recordings.",
    video: "/background-video.mp4"
  },
  {
    title: "Influencers",
    description: "Social media personalities and content creators. Track your engagement and brand collaboration history.",
    video: "/generate-step.mp4"
  },
  {
    title: "Artists",
    description: "Visual artists, designers, and creative professionals. Display your digital art and physical installations.",
    video: "/result-step.mp4"
  }
]

const SEGMENT_ANGLES = [0, 60, 120, 180, 240, 300] // degrees for 6 segments

function SegmentVideo({
  src,
  isPlaying,
  isVisible,
  className,
}: {
  src: string
  isPlaying: boolean
  isVisible: boolean
  className?: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    if (!isVisible || !videoRef.current) return
    if (isPlaying) videoRef.current.play().catch(() => { })
    else videoRef.current.pause()
  }, [isPlaying, isVisible])
  if (!isVisible) return null
  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      muted
      loop
      playsInline
      preload="metadata"
    />
  )
}

export default function TalentsPage() {
  const [benefitsVisible, setBenefitsVisible] = useState(false)
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null)
  const [careerHoveredIndex, setCareerHoveredIndex] = useState<number | null>(null)
  const [careerVideosLoaded, setCareerVideosLoaded] = useState<Set<number>>(new Set())
  const [careerSectionInView, setCareerSectionInView] = useState(false)
  const benefitsSectionRef = useRef<HTMLElement>(null)
  const nextSectionRef = useRef<HTMLElement>(null)
  const careerSectionRef = useRef<HTMLElement>(null)
  const heroVideoRef = useRef<HTMLVideoElement>(null)

  const scrollToNext = () => {
    if (nextSectionRef.current) {
      const targetPosition = nextSectionRef.current.offsetTop
      const startPosition = window.pageYOffset
      const distance = targetPosition - startPosition
      const duration = 2000 // 2 seconds for slow scroll
      let start: number | null = null

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime
        const timeElapsed = currentTime - start
        const progress = Math.min(timeElapsed / duration, 1)

        // Easing function for smooth animation
        const ease = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2

        window.scrollTo(0, startPosition + (distance * ease))

        if (timeElapsed < duration) {
          requestAnimationFrame(animation)
        }
      }

      requestAnimationFrame(animation)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBenefitsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (benefitsSectionRef.current) {
      observer.observe(benefitsSectionRef.current)
    }

    return () => {
      if (benefitsSectionRef.current) {
        observer.unobserve(benefitsSectionRef.current)
      }
    }
  }, [])

  // Career features circle: only consider "in view" for lazy behavior (phase-wise load)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setCareerSectionInView(entry.isIntersecting)
        })
      },
      { threshold: 0.2, rootMargin: "50px" }
    )
    if (careerSectionRef.current) observer.observe(careerSectionRef.current)
    return () => {
      if (careerSectionRef.current) observer.unobserve(careerSectionRef.current)
    }
  }, [])

  const handleCareerSegmentHover = (index: number | null) => {
    setCareerHoveredIndex(index)
    if (index !== null) {
      setCareerVideosLoaded((prev) => new Set(prev).add(index))
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            ref={heroVideoRef}
            src="/background-video.mp4#t=3,35"
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-6 border-montra-red text-montra-red animate-fade-in px-4 py-1 uppercase tracking-[0.3em] font-bebas text-sm">
              FOR CREATIVE TALENTS
            </Badge>
            <h1 className="font-bebas text-4xl font-bold text-white uppercase sm:text-5xl lg:text-6xl mb-6" style={{ letterSpacing: '0.05em' }}>
              Elevate <span className="text-transparent italic" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.8)' }}>Your Art</span>
            </h1>
            <p className="mt-8 max-w-md text-lg text-gray-300 lg:text-xl leading-loose font-light">
              Professionalize your career with TMA. Connect with top agencies, showcase your talent to the world, and unlock opportunities that elevate your creative journey. Build your portfolio, get discovered by industry leaders, and take control of your artistic future with our comprehensive platform designed specifically for creative professionals.
            </p>
          </div>
        </div>

        {/* Circular Button - Bottom Right */}
        <div className="absolute bottom-12 right-12 z-20 hidden lg:flex items-center gap-8">
          <div>
            <ChevronDown className="w-16 h-16 text-white/20 rotate-45" />
          </div>
          <button
            onClick={scrollToNext}
            className="group relative w-32 h-32 rounded-full bg-montra-red flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden shadow-xl shadow-montra-red/30"
          >
            <div className="relative z-10 flex flex-col items-center group-hover:opacity-0 transition-opacity duration-300">
              <span className="font-bebas text-lg leading-none text-black">EXPLORE</span>
              <span className="font-bebas text-lg leading-none text-black">TALENTS</span>
            </div>
            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex items-center justify-center">
              <ChevronDown className="w-10 h-10 text-white" />
            </div>
          </button>
        </div>

        {/* Scroll Arrow - Removed duplicate, now using circle button */}
      </section>

      {/* Talent Spectrum Grid Section */}
      <section
        ref={nextSectionRef}
        className="relative bg-zinc-950 py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 lg:mb-24">
            <p className="text-sm font-bebas uppercase tracking-[0.4em] text-montra-red mb-4">The Spectrum</p>
            <h2 className="font-bebas text-5xl font-bold text-white sm:text-6xl lg:text-8xl uppercase tracking-tighter">
              A Stage for <span className="text-white/30 italic">Everyone</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {talentTypes.slice(0, 5).map((type, index) => (
              <div
                key={index}
                className={`group relative h-[450px] overflow-hidden bg-[#0a0a0a] border border-white/10 transition-all duration-500 hover:border-white/20 ${index < 2 ? 'md:col-span-3' : 'md:col-span-2'
                  }`}
                onMouseEnter={() => setHoveredVideo(index)}
                onMouseLeave={() => setHoveredVideo(null)}
              >
                {/* Background Video/Image Layer */}
                <div className="absolute inset-0 z-0">
                  <video
                    src={type.video}
                    className={`h-full w-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105 ${hoveredVideo === index ? "opacity-100" : "opacity-0"
                      }`}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-black transition-all duration-700 group-hover:bg-black/40" />

                  {/* 3D-like Text Placeholder (visible when not hovering) */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 pointer-events-none ${hoveredVideo === index ? 'opacity-0' : 'opacity-100'}`}>
                    <h3 className="font-bebas text-[120px] md:text-[160px] leading-none text-zinc-800/10 uppercase tracking-tighter whitespace-nowrap select-none">
                      {type.title.split(' ')[0]}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                  {/* Top: Number */}
                  <div className="flex justify-between items-start">
                    <span className="font-bebas text-2xl text-white/30 group-hover:text-montra-red transition-colors duration-500">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* Bottom: Text */}
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-bebas text-4xl md:text-5xl text-white uppercase tracking-wide group-hover:text-montra-red transition-colors duration-500 drop-shadow-lg">
                      {type.title}
                    </h3>

                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500">
                      <div className="overflow-hidden">
                        <p className="text-gray-300 text-sm leading-relaxed font-light pb-2 drop-shadow-md">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career-Defining Features Section - Circular hover-to-play */}
      <section ref={careerSectionRef} className="relative bg-black text-white py-24 lg:py-32 z-10 overflow-hidden">
        {/* Fixed Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            src="/robot.mp4"
            className="w-full h-full object-cover opacity-20"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-sm font-bebas uppercase tracking-[0.4em] text-montra-red mb-4">The Toolkit</p>
            <h2 className="font-bebas text-5xl font-bold sm:text-7xl uppercase tracking-tighter text-white mb-6">
              Career-Defining <span className="text-white/30 italic">Features</span>
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Professional tools designed to empower creators and simplify discovery workflows.
            </p>
          </div>

          {/* Replaced manual implementation with RadialVideoMenu */}
          <div className="w-full">
            <RadialVideoMenu
              segments={features.map((f, idx) => ({
                id: f.title.toLowerCase().replace(/\s+/g, '-'),
                label: f.title,
                videoUrl: f.video,
                icon: <f.icon className="w-6 h-6 text-white" />,
                ringId: idx === 0 || idx === 5 ? "ring-3" : (idx === 1 || idx === 2 ? "ring-2" : "ring-1")
              }))}
              centralRings={[
                { id: "ring-1", label: "OMNI SYNDICATION", radius: 110, width: 30, videoUrl: "/agencies-demo.mp4" },
                { id: "ring-2", label: "VIDEO & AI INFRA", radius: 80, width: 30, videoUrl: "/generate-step.mp4" },
                { id: "ring-3", label: "VIDEO CMS", radius: 50, width: 30, videoUrl: "/result-step.mp4" }
              ]}
              centerLabel={
                <span className="text-white text-3xl drop-shadow-lg">∞</span>
              }
            />
          </div>

          {/* Feature descriptions list (below circle, for context) */}
          <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:border-white/10 transition-colors"
              >
                <feature.icon className="h-5 w-5 text-montra-red shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bebas text-white uppercase tracking-widest text-sm mb-1">{feature.title}</h3>
                  <p className="text-gray-400 text-xs font-light leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & CTA - Final Section */}
      <section ref={benefitsSectionRef} className="py-24 lg:py-32 bg-zinc-950 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-bebas text-5xl font-bold text-white sm:text-7xl tracking-tighter uppercase leading-tight mb-6">
              Ready to take the <br />
              <span className="text-montra-red italic">next step?</span>
            </h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Join a global ecosystem of creative professionals today.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="relative flex items-center gap-6 p-6 bg-zinc-900/50 border border-white/5 hover:border-montra-red/20 transition-all duration-500 group overflow-hidden"
              >
                <div
                  className={`h-12 w-12 rounded-full bg-montra-red/10 flex items-center justify-center shrink-0 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${benefitsVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                    }`}
                  style={{
                    transitionDelay: `${400 + index * 100}ms`
                  }}
                >
                  <CheckCircle2 className="h-6 w-6 text-montra-red" />
                </div>
                <span
                  className={`text-white text-lg font-bebas uppercase tracking-widest transition-all duration-700 ${benefitsVisible ? 'opacity-100 translate-x-0' : 'opacity-30 -translate-x-4'
                    }`}
                  style={{
                    transitionDelay: `${500 + index * 100}ms`
                  }}
                >
                  {benefit}
                </span>
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-montra-red transition-all duration-1000 ${benefitsVisible ? 'h-full opacity-100' : 'h-0 opacity-0'
                    }`}
                  style={{
                    transitionDelay: `${600 + index * 100}ms`
                  }}
                />
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Button size="lg" className="bg-montra-red text-white hover:bg-red-700 shadow-2xl shadow-montra-red/20 h-16 px-12 text-xl font-bebas uppercase tracking-widest rounded-none">
              Create Your Profile
            </Button>
          </div>
        </div>
      </section>

    </main>
  )
}
