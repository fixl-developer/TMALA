"use client"

import React, { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { PhysicsFeatures } from "@/components/physics-features"
import {
  Building2,
  Users,
  DollarSign,
  Sparkles,
  Shield,
  BarChart3,
  Calendar,
  ChevronDown,
  Play,
  Pause
} from "lucide-react"
import { IconBox } from "@/components/ui/icon-box"

const coreFeatures = [
  {
    icon: Building2,
    title: "Infinite Multi-Tenancy",
    description: "Complete data isolation and enterprise-grade branding for every agency division."
  },
  {
    icon: Sparkles,
    title: "Neural Engine Portfolios",
    description: "State-of-the-art AI enhancement and intelligent portfolio orchestration."
  },
  {
    icon: Shield,
    title: "Fortress Security",
    description: "Institutional-grade RBAC/ABAC with end-to-end cryptographic data protection."
  },
  {
    icon: Users,
    title: "Talent Lifecycle Hub",
    description: "Beyond search: A complete environment for talent discovery and growth."
  },
  {
    icon: Calendar,
    title: "Studio Event Engine",
    description: "Architect complex pageants, casting calls, and high-fidelity showcases."
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Real-time insights on engagement, revenue velocity, and performance trends."
  }
]

const agencyFeatures = [
  "Custom branding and white-label solutions",
  "Role-based access control (RBAC)",
  "Talent scouting and approval workflows",
  "Sponsorship management tools",
  "Event and pageant hosting",
  "Financial tracking and invoicing",
  "Custom domain and subdomain options",
  "API access for integrations"
]

const talentFeatures = [
  "Self-onboarding with ID verification",
  "AI-powered photo enhancement",
  "Mobile-responsive portfolios",
  "Agency discovery and applications",
  "Real-time opportunity notifications",
  "Direct messaging with agencies",
  "Performance analytics and insights",
  "Social media integration"
]

const sponsorFeatures = [
  "Verified talent database access",
  "Targeted campaign management",
  "Event sponsorship opportunities",
  "Performance tracking and ROI analytics",
  "Secure payment processing",
  "Brand safety and verification",
  "Custom partnership packages",
  "Dedicated account management"
]

export default function FeaturesPage() {
  // Features section video states
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null)
  const [videoCursorPos, setVideoCursorPos] = useState({ x: 0, y: 0 })
  const [videoMouseDown, setVideoMouseDown] = useState(false)
  const [videoPlaying, setVideoPlaying] = useState<{ [key: string]: boolean }>({
    'talents-main': true,
    'agencies-main': true,
    'sponsors-main': true,
    'agencies-small-1': true,
    'agencies-small-2': true,
    'talents-small-1': true,
    'talents-small-2': true,
    'sponsors-small-1': true,
    'sponsors-small-2': true,
  })

  // Individual refs for each video
  const talentsMainRef = useRef<HTMLVideoElement>(null)
  const agenciesMainRef = useRef<HTMLVideoElement>(null)
  const sponsorsMainRef = useRef<HTMLVideoElement>(null)
  const agenciesSmall1Ref = useRef<HTMLVideoElement>(null)
  const agenciesSmall2Ref = useRef<HTMLVideoElement>(null)
  const talentsSmall1Ref = useRef<HTMLVideoElement>(null)
  const talentsSmall2Ref = useRef<HTMLVideoElement>(null)
  const sponsorsSmall1Ref = useRef<HTMLVideoElement>(null)
  const sponsorsSmall2Ref = useRef<HTMLVideoElement>(null)

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  // Features section video handlers
  const handleFeatureVideoMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setVideoCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const toggleFeatureVideo = (videoKey: string) => {
    const refMap: { [key: string]: React.RefObject<HTMLVideoElement> } = {
      'talents-main': talentsMainRef,
      'agencies-main': agenciesMainRef,
      'sponsors-main': sponsorsMainRef,
      'agencies-small-1': agenciesSmall1Ref,
      'agencies-small-2': agenciesSmall2Ref,
      'talents-small-1': talentsSmall1Ref,
      'talents-small-2': talentsSmall2Ref,
      'sponsors-small-1': sponsorsSmall1Ref,
      'sponsors-small-2': sponsorsSmall2Ref,
    }

    const video = refMap[videoKey]?.current
    if (video) {
      if (videoPlaying[videoKey]) {
        video.pause()
      } else {
        video.play()
      }
      setVideoPlaying(prev => ({ ...prev, [videoKey]: !prev[videoKey] }))
    }
  }


  return (
    <main className="min-h-screen section-bg-charcoal text-white selection:bg-montra-red/30 pt-20" data-testid="section-features-page" aria-label="Features page">
      {/* 3D Parallax Hero Section */}
      {/* Editorial Hero Section */}
      <section className="relative h-[90vh] w-full section-bg-charcoal overflow-hidden flex flex-col justify-center items-center" data-testid="section-hero" aria-label="Features hero">
        {/* Background Subtle Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-black to-black opacity-40" />

        {/* Left Image - Floating */}
        <div className="absolute left-0 top-[10%] lg:left-[5%] lg:top-[15%] w-[40vw] lg:w-[25vw] aspect-[3/4] overflow-hidden z-0 animate-slide-in-left">
          <video
            src="https://assets.mixkit.co/videos/44556/44556-1080.mp4"
            className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 ease-out hover:scale-105"
            autoPlay loop muted playsInline
          />
        </div>

        {/* Right Image - Lower */}
        <div className="absolute right-0 bottom-0 lg:right-[0] lg:bottom-[0] w-[50vw] lg:w-[35vw] aspect-[4/3] overflow-hidden z-0 animate-slide-in-right">
          <video
            src="https://assets.mixkit.co/videos/42286/42286-1080.mp4"
            className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 ease-out hover:scale-105"
            autoPlay loop muted playsInline
          />
        </div>

        <style jsx>{`
          @keyframes slide-in-left {
            from {
              transform: translateX(-100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slide-in-right {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .animate-slide-in-left {
            animation: slide-in-left 1s ease-out forwards;
          }

          .animate-slide-in-right {
            animation: slide-in-right 1s ease-out forwards;
            animation-delay: 0.2s;
            opacity: 0;
          }
        `}</style>

        {/* Main Typography - Centered & Overlapping (below header/menu modal) */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center pointer-events-none">
          <h1 className="font-bebas text-[10vw] leading-[0.9] text-white tracking-tighter drop-shadow-2xl">
            REIMAGINE
          </h1>
          <h1 className="font-bebas text-[10vw] leading-[0.9] text-white tracking-tighter drop-shadow-2xl">
            THE <span className="text-montra-red italic">ENTERPRISE</span>
          </h1>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-10 z-20 p-2 text-white/50 hover:text-white transition-colors"
          data-testid="btn-scroll-down"
          aria-label="Scroll down"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] font-light">Scroll</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </div>
        </button>
      </section>

      {/* Physics Interactive Section */}
      <PhysicsFeatures />

      {/* Role-Specific Features */}
      <section className="relative section-bg-cool border-y border-white/5 py-20 flex items-center min-h-[80vh]" data-testid="section-role-features" aria-label="Features by user type">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-4">
            <h2 className="font-bebas text-3xl font-bold text-white sm:text-5xl uppercase tracking-tight">
              Features by User Type
            </h2>
            <p className="mt-1 text-sm text-gray-400 font-light">
              Tailored functionality for every type of user
            </p>
          </div>

          <Tabs defaultValue="talents" className="w-full" data-testid="section-tabs-role-features" aria-label="Role features tabs">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto bg-zinc-900/50 border border-white/10 p-1 rounded-none">
              <TabsTrigger value="talents" className="rounded-none font-bebas uppercase tracking-widest data-[state=active]:bg-montra-red data-[state=active]:text-white" data-testid="btn-tab-talents" aria-label="Talents tab">Talents</TabsTrigger>
              <TabsTrigger value="agencies" className="rounded-none font-bebas uppercase tracking-widest data-[state=active]:bg-montra-red data-[state=active]:text-white" data-testid="btn-tab-agencies" aria-label="Agencies tab">Agencies</TabsTrigger>
              <TabsTrigger value="sponsors" className="rounded-none font-bebas uppercase tracking-widest data-[state=active]:bg-montra-red data-[state=active]:text-white" data-testid="btn-tab-sponsors" aria-label="Sponsors tab">Sponsors</TabsTrigger>
            </TabsList>

            <TabsContent value="talents" className="mt-4" data-testid="section-tab-talents" aria-label="Talents features">
              <div className="grid gap-4 lg:grid-cols-[1fr_2fr]">
                {/* Left Side - Content */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-3">
                    <IconBox icon={Users} size="sm" variant="solid" accentColor="amber" />
                    <div>
                      <h3 className="text-lg font-bebas uppercase tracking-widest text-white">Talent Portfolio Tools</h3>
                      <p className="text-[10px] text-gray-400 font-light">Showcase your skills and get discovered</p>
                    </div>
                  </div>

                  <div className="grid gap-1.5">
                    {talentFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2 p-2 rounded-none bg-zinc-900/40 border border-white/5 hover:border-montra-red/30 transition-all">
                        <IconBox icon={Users} size="sm" variant="solid" accentColor="amber" className="h-6 w-6 [&>svg]:h-2 [&>svg]:w-2 shrink-0 mt-0.5" />
                        <span className="text-[11px] text-gray-300 leading-tight font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-montra-red hover:bg-montra-red-dark text-white font-bebas uppercase tracking-widest mt-2 text-xs py-1.5 rounded-none" data-testid="btn-create-profile" aria-label="Create profile">
                    Create Profile
                  </Button>
                </div>

                {/* Right Side - Videos */}
                <div className="grid gap-2.5">
                  {/* Talents Video */}
                  <div
                    className="relative aspect-[3/1] rounded-lg overflow-hidden bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-white/10 cursor-none"
                    onMouseEnter={() => setHoveredVideo('talents-main')}
                    onMouseLeave={() => {
                      setHoveredVideo(null)
                      setVideoMouseDown(false)
                    }}
                    onMouseMove={handleFeatureVideoMouseMove}
                    onMouseDown={() => setVideoMouseDown(true)}
                    onMouseUp={() => setVideoMouseDown(false)}
                    onClick={() => toggleFeatureVideo('talents-main')}
                  >
                    <video
                      ref={talentsMainRef}
                      src="https://assets.mixkit.co/videos/52270/52270-1080.mp4"
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-2">
                      <p className="text-white font-bold text-sm">Talents</p>
                      <p className="text-gray-300 text-[10px]">Showcase your portfolio</p>
                    </div>

                    {/* Custom Cursor */}
                    {hoveredVideo === 'talents-main' && (
                      <div
                        className="absolute pointer-events-none z-50 transition-all duration-300 ease-out"
                        style={{
                          left: `${videoCursorPos.x}px`,
                          top: `${videoCursorPos.y}px`,
                          transform: `translate(-50%, -50%) scale(${videoMouseDown ? 0.9 : 1})`,
                        }}
                      >
                        <div className="w-16 h-16 rounded-full bg-montra-red border-2 border-montra-red shadow-[0_0_30px_rgba(255,0,0,0.5)] flex items-center justify-center transition-all duration-300">
                          {videoPlaying['talents-main'] ? (
                            <Pause className="w-7 h-7 text-white fill-white" />
                          ) : (
                            <Play className="w-7 h-7 text-white fill-white ml-0.5" />
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Agencies & Sponsors Videos */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div
                      className="relative aspect-[2.5/1] rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 cursor-none"
                      onMouseEnter={() => setHoveredVideo('agencies-small-1')}
                      onMouseLeave={() => {
                        setHoveredVideo(null)
                        setVideoMouseDown(false)
                      }}
                      onMouseMove={handleFeatureVideoMouseMove}
                      onMouseDown={() => setVideoMouseDown(true)}
                      onMouseUp={() => setVideoMouseDown(false)}
                      onClick={() => toggleFeatureVideo('agencies-small-1')}
                    >
                      <video
                        ref={agenciesSmall1Ref}
                        src="https://assets.mixkit.co/videos/4809/4809-1080.mp4"
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-2 left-2">
                        <p className="text-white font-semibold text-xs">Agencies</p>
                      </div>

                      {/* Custom Cursor */}
                      {hoveredVideo === 'agencies-small-1' && (
                        <div
                          className="absolute pointer-events-none z-50 transition-all duration-300 ease-out"
                          style={{
                            left: `${videoCursorPos.x}px`,
                            top: `${videoCursorPos.y}px`,
                            transform: `translate(-50%, -50%) scale(${videoMouseDown ? 0.9 : 1})`,
                          }}
                        >
                          <div className="w-12 h-12 rounded-full bg-montra-red border-2 border-montra-red shadow-[0_0_20px_rgba(255,0,0,0.5)] flex items-center justify-center">
                            {videoPlaying['agencies-small-1'] ? (
                              <Pause className="w-5 h-5 text-white fill-white" />
                            ) : (
                              <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    <div
                      className="relative aspect-[2.5/1] rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 cursor-none"
                      onMouseEnter={() => setHoveredVideo('sponsors-small-1')}
                      onMouseLeave={() => {
                        setHoveredVideo(null)
                        setVideoMouseDown(false)
                      }}
                      onMouseMove={handleFeatureVideoMouseMove}
                      onMouseDown={() => setVideoMouseDown(true)}
                      onMouseUp={() => setVideoMouseDown(false)}
                      onClick={() => toggleFeatureVideo('sponsors-small-1')}
                    >
                      <video
                        ref={sponsorsSmall1Ref}
                        src="https://assets.mixkit.co/videos/26787/26787-720.mp4"
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-2 left-2">
                        <p className="text-white font-semibold text-xs">Sponsors</p>
                      </div>

                      {/* Custom Cursor */}
                      {hoveredVideo === 'sponsors-small-1' && (
                        <div
                          className="absolute pointer-events-none z-50 transition-all duration-300 ease-out"
                          style={{
                            left: `${videoCursorPos.x}px`,
                            top: `${videoCursorPos.y}px`,
                            transform: `translate(-50%, -50%) scale(${videoMouseDown ? 0.9 : 1})`,
                          }}
                        >
                          <div className="w-12 h-12 rounded-full bg-montra-red border-2 border-montra-red shadow-[0_0_20px_rgba(255,0,0,0.5)] flex items-center justify-center">
                            {videoPlaying['sponsors-small-1'] ? (
                              <Pause className="w-5 h-5 text-white fill-white" />
                            ) : (
                              <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="agencies" className="mt-4" data-testid="section-tab-agencies" aria-label="Agencies features">
              <div className="grid gap-4 lg:grid-cols-[1fr_2fr]">
                {/* Left Side - Content */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-3">
                    <IconBox icon={Building2} size="sm" variant="solid" accentColor="amber" />
                    <div>
                      <h3 className="text-lg font-bebas uppercase tracking-widest text-white">Agency Management Tools</h3>
                      <p className="text-[10px] text-gray-400 font-light">Everything you need to manage your talent agency</p>
                    </div>
                  </div>

                  <div className="grid gap-1.5">
                    {agencyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2 p-2 rounded-none bg-zinc-900/40 border border-white/5 hover:border-montra-red/30 transition-all">
                        <IconBox icon={Building2} size="sm" variant="solid" accentColor="amber" className="h-6 w-6 [&>svg]:h-2 [&>svg]:w-2 shrink-0 mt-0.5" />
                        <span className="text-[11px] text-gray-300 leading-tight font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-montra-red hover:bg-montra-red-dark text-white font-bebas uppercase tracking-widest mt-2 text-xs py-1.5 rounded-none" data-testid="btn-start-agency-trial" aria-label="Start agency trial">
                    Start Agency Trial
                  </Button>
                </div>

                {/* Right Side - Videos */}
                <div className="grid gap-3">
                  {/* Agencies Video */}
                  <div
                    className="relative aspect-[3/1] rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 cursor-none"
                    onMouseEnter={() => setHoveredVideo('agencies-main')}
                    onMouseLeave={() => {
                      setHoveredVideo(null)
                      setVideoMouseDown(false)
                    }}
                    onMouseMove={handleFeatureVideoMouseMove}
                    onMouseDown={() => setVideoMouseDown(true)}
                    onMouseUp={() => setVideoMouseDown(false)}
                    onClick={() => toggleFeatureVideo('agencies-main')}
                  >
                    <video
                      ref={agenciesMainRef}
                      src="https://assets.mixkit.co/videos/4809/4809-1080.mp4"
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <p className="text-white font-bold text-base">Agencies</p>
                      <p className="text-gray-300 text-xs">Complete agency management</p>
                    </div>

                    {/* Custom Cursor */}
                    {hoveredVideo === 'agencies-main' && (
                      <div
                        className="absolute pointer-events-none z-50 transition-all duration-300 ease-out"
                        style={{
                          left: `${videoCursorPos.x}px`,
                          top: `${videoCursorPos.y}px`,
                          transform: `translate(-50%, -50%) scale(${videoMouseDown ? 0.9 : 1})`,
                        }}
                      >
                        <div className="w-16 h-16 rounded-full bg-montra-red border-2 border-montra-red shadow-[0_0_30px_rgba(255,0,0,0.5)] flex items-center justify-center">
                          {videoPlaying['agencies-main'] ? (
                            <Pause className="w-7 h-7 text-white fill-white" />
                          ) : (
                            <Play className="w-7 h-7 text-white fill-white ml-0.5" />
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Talents & Sponsors Videos */}
                  <div className="grid grid-cols-2 gap-3">
                    <div
                      className="relative aspect-[2.5/1] rounded-xl overflow-hidden bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-white/10 cursor-none"
                      onMouseEnter={() => setHoveredVideo('talents-small-1')}
                      onMouseLeave={() => {
                        setHoveredVideo(null)
                        setVideoMouseDown(false)
                      }}
                      onMouseMove={handleFeatureVideoMouseMove}
                      onMouseDown={() => setVideoMouseDown(true)}
                      onMouseUp={() => setVideoMouseDown(false)}
                      onClick={() => toggleFeatureVideo('talents-small-1')}
                    >
                      <video
                        ref={talentsSmall1Ref}
                        src="https://assets.mixkit.co/videos/52270/52270-1080.mp4"
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-2 left-2">
                        <p className="text-white font-semibold text-xs">Talents</p>
                      </div>

                      {/* Custom Cursor */}
                      {hoveredVideo === 'talents-small-1' && (
                        <div
                          className="absolute pointer-events-none z-50 transition-all duration-300 ease-out"
                          style={{
                            left: `${videoCursorPos.x}px`,
                            top: `${videoCursorPos.y}px`,
                            transform: `translate(-50%, -50%) scale(${videoMouseDown ? 0.9 : 1})`,
                          }}
                        >
                          <div className="w-12 h-12 rounded-full bg-montra-red border-2 border-montra-red shadow-[0_0_20px_rgba(255,0,0,0.5)] flex items-center justify-center">
                            {videoPlaying['talents-small-1'] ? (
                              <Pause className="w-5 h-5 text-white fill-white" />
                            ) : (
                              <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    <div
                      className="relative aspect-[2.5/1] rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 cursor-none"
                      onMouseEnter={() => setHoveredVideo('sponsors-small-2')}
                      onMouseLeave={() => {
                        setHoveredVideo(null)
                        setVideoMouseDown(false)
                      }}
                      onMouseMove={handleFeatureVideoMouseMove}
                      onMouseDown={() => setVideoMouseDown(true)}
                      onMouseUp={() => setVideoMouseDown(false)}
                      onClick={() => toggleFeatureVideo('sponsors-small-2')}
                    >
                      <video
                        ref={sponsorsSmall2Ref}
                        src="https://assets.mixkit.co/videos/26787/26787-720.mp4"
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-2 left-2">
                        <p className="text-white font-semibold text-xs">Sponsors</p>
                      </div>

                      {/* Custom Cursor */}
                      {hoveredVideo === 'sponsors-small-2' && (
                        <div
                          className="absolute pointer-events-none z-50 transition-all duration-300 ease-out"
                          style={{
                            left: `${videoCursorPos.x}px`,
                            top: `${videoCursorPos.y}px`,
                            transform: `translate(-50%, -50%) scale(${videoMouseDown ? 0.9 : 1})`,
                          }}
                        >
                          <div className="w-12 h-12 rounded-full bg-montra-red border-2 border-montra-red shadow-[0_0_20px_rgba(255,0,0,0.5)] flex items-center justify-center">
                            {videoPlaying['sponsors-small-2'] ? (
                              <Pause className="w-5 h-5 text-white fill-white" />
                            ) : (
                              <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="sponsors" className="mt-4" data-testid="section-tab-sponsors" aria-label="Sponsors features">
              <div className="grid gap-4 lg:grid-cols-[1fr_2fr]">
                {/* Left Side - Content */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-3">
                    <IconBox icon={DollarSign} size="sm" variant="solid" accentColor="amber" />
                    <div>
                      <h3 className="text-lg font-bebas uppercase tracking-widest text-white">Sponsorship & Marketing Tools</h3>
                      <p className="text-[10px] text-gray-400 font-light">Connect with verified talents</p>
                    </div>
                  </div>

                  <div className="grid gap-1.5">
                    {sponsorFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2 p-2 rounded-none bg-zinc-900/40 border border-white/5 hover:border-montra-red/30 transition-all">
                        <IconBox icon={DollarSign} size="sm" variant="solid" accentColor="amber" className="h-6 w-6 [&>svg]:h-2 [&>svg]:w-2 shrink-0 mt-0.5" />
                        <span className="text-[11px] text-gray-300 leading-tight font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-montra-red hover:bg-montra-red-dark text-white font-bebas uppercase tracking-widest mt-2 text-xs py-1.5 rounded-none" data-testid="btn-start-sponsoring" aria-label="Start sponsoring">
                    Start Sponsoring
                  </Button>
                </div>

                {/* Right Side - Videos */}
                <div className="grid gap-3">
                  {/* Sponsors Video */}
                  <div
                    className="relative aspect-[3/1] rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 cursor-none"
                    onMouseEnter={() => setHoveredVideo('sponsors-main')}
                    onMouseLeave={() => {
                      setHoveredVideo(null)
                      setVideoMouseDown(false)
                    }}
                    onMouseMove={handleFeatureVideoMouseMove}
                    onMouseDown={() => setVideoMouseDown(true)}
                    onMouseUp={() => setVideoMouseDown(false)}
                    onClick={() => toggleFeatureVideo('sponsors-main')}
                  >
                    <video
                      ref={sponsorsMainRef}
                      src="https://assets.mixkit.co/videos/26787/26787-720.mp4"
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <p className="text-white font-bold text-base">Sponsors</p>
                      <p className="text-gray-300 text-xs">Brand partnerships</p>
                    </div>

                    {/* Custom Cursor */}
                    {hoveredVideo === 'sponsors-main' && (
                      <div
                        className="absolute pointer-events-none z-50 transition-all duration-300 ease-out"
                        style={{
                          left: `${videoCursorPos.x}px`,
                          top: `${videoCursorPos.y}px`,
                          transform: `translate(-50%, -50%) scale(${videoMouseDown ? 0.9 : 1})`,
                        }}
                      >
                        <div className="w-16 h-16 rounded-full bg-montra-red border-2 border-montra-red shadow-[0_0_30px_rgba(255,0,0,0.5)] flex items-center justify-center">
                          {videoPlaying['sponsors-main'] ? (
                            <Pause className="w-7 h-7 text-white fill-white" />
                          ) : (
                            <Play className="w-7 h-7 text-white fill-white ml-0.5" />
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Agencies & Talents Videos */}
                  <div className="grid grid-cols-2 gap-3">
                    <div
                      className="relative aspect-[2.5/1] rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 cursor-none"
                      onMouseEnter={() => setHoveredVideo('agencies-small-2')}
                      onMouseLeave={() => {
                        setHoveredVideo(null)
                        setVideoMouseDown(false)
                      }}
                      onMouseMove={handleFeatureVideoMouseMove}
                      onMouseDown={() => setVideoMouseDown(true)}
                      onMouseUp={() => setVideoMouseDown(false)}
                      onClick={() => toggleFeatureVideo('agencies-small-2')}
                    >
                      <video
                        ref={agenciesSmall2Ref}
                        src="https://assets.mixkit.co/videos/4809/4809-1080.mp4"
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-2 left-2">
                        <p className="text-white font-semibold text-xs">Agencies</p>
                      </div>

                      {/* Custom Cursor */}
                      {hoveredVideo === 'agencies-small-2' && (
                        <div
                          className="absolute pointer-events-none z-50 transition-all duration-300 ease-out"
                          style={{
                            left: `${videoCursorPos.x}px`,
                            top: `${videoCursorPos.y}px`,
                            transform: `translate(-50%, -50%) scale(${videoMouseDown ? 0.9 : 1})`,
                          }}
                        >
                          <div className="w-12 h-12 rounded-full bg-montra-red border-2 border-montra-red shadow-[0_0_20px_rgba(255,0,0,0.5)] flex items-center justify-center">
                            {videoPlaying['agencies-small-2'] ? (
                              <Pause className="w-5 h-5 text-white fill-white" />
                            ) : (
                              <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    <div
                      className="relative aspect-[2.5/1] rounded-xl overflow-hidden bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-white/10 cursor-none"
                      onMouseEnter={() => setHoveredVideo('talents-small-2')}
                      onMouseLeave={() => {
                        setHoveredVideo(null)
                        setVideoMouseDown(false)
                      }}
                      onMouseMove={handleFeatureVideoMouseMove}
                      onMouseDown={() => setVideoMouseDown(true)}
                      onMouseUp={() => setVideoMouseDown(false)}
                      onClick={() => toggleFeatureVideo('talents-small-2')}
                    >
                      <video
                        ref={talentsSmall2Ref}
                        src="https://assets.mixkit.co/videos/52270/52270-1080.mp4"
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-2 left-2">
                        <p className="text-white font-semibold text-xs">Talents</p>
                      </div>

                      {/* Custom Cursor */}
                      {hoveredVideo === 'talents-small-2' && (
                        <div
                          className="absolute pointer-events-none z-50 transition-all duration-300 ease-out"
                          style={{
                            left: `${videoCursorPos.x}px`,
                            top: `${videoCursorPos.y}px`,
                            transform: `translate(-50%, -50%) scale(${videoMouseDown ? 0.9 : 1})`,
                          }}
                        >
                          <div className="w-12 h-12 rounded-full bg-montra-red border-2 border-montra-red shadow-[0_0_20px_rgba(255,0,0,0.5)] flex items-center justify-center">
                            {videoPlaying['talents-small-2'] ? (
                              <Pause className="w-5 h-5 text-white fill-white" />
                            ) : (
                              <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Business Inquiry Form Section */}
      <section className="relative section-bg-warm py-24 lg:py-32 border-t border-white/5" data-testid="section-business-inquiry" aria-label="Business inquiry form">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-5xl font-bold text-white sm:text-7xl uppercase tracking-tight mb-6">
              Partner with <span className="text-montra-red">Us</span>
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
              Looking for a custom enterprise solution? Let's discuss how we can tailor our platform to your agency's needs.
            </p>
          </div>

          <div className="bg-zinc-900/30 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white font-bebas tracking-widest uppercase">Name</Label>
                  <Input id="name" placeholder="Your Name" className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 focus:border-montra-red/50 rounded-none h-12" data-testid="input-name" aria-label="Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white font-bebas tracking-widest uppercase">Company</Label>
                  <Input id="company" placeholder="Company Name" className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 focus:border-montra-red/50 rounded-none h-12" data-testid="input-company" aria-label="Company" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-bebas tracking-widest uppercase">Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 focus:border-montra-red/50 rounded-none h-12" data-testid="input-email" aria-label="Email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white font-bebas tracking-widest uppercase">Phone</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 focus:border-montra-red/50 rounded-none h-12" data-testid="input-phone" aria-label="Phone" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white font-bebas tracking-widest uppercase">Requirements</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your specific needs..."
                  className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 focus:border-montra-red/50 rounded-none min-h-[150px] resize-none"
                  data-testid="input-message"
                  aria-label="Requirements"
                />
              </div>

              <Button size="lg" className="w-full bg-montra-red hover:bg-montra-red-dark text-white font-bebas uppercase tracking-widest py-8 text-xl rounded-none shadow-xl shadow-montra-red/20 transition-all hover:scale-[1.02]" data-testid="btn-submit-inquiry" aria-label="Submit inquiry">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 section-bg-rich border-t border-white/5 relative overflow-hidden" data-testid="section-cta" aria-label="Call to action">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.1),transparent 70%)] opacity-50" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-bebas text-5xl font-bold text-white sm:text-8xl tracking-tight uppercase leading-none mb-8">
            Ready to Experience <br /><span className="text-montra-red">All Features?</span>
          </h2>
          <p className="mt-6 text-xl text-gray-400 font-light max-w-2xl mx-auto mb-12">
            Start your free trial today and discover how our platform can transform your talent management.
          </p>
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-montra-red text-white hover:bg-montra-red-dark font-bebas uppercase tracking-widest px-12 py-8 rounded-none transition-transform hover:scale-110 shadow-2xl shadow-montra-red/20" data-testid="btn-start-free-trial" aria-label="Start free trial">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 px-12 py-8 rounded-none font-bebas uppercase tracking-widest" data-testid="btn-schedule-demo" aria-label="Schedule demo">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

    </main>
  )
}