"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  BarChart3,
  Users,
  Shield,
  Calendar,
  DollarSign,
  Handshake,
  Eye,
  CheckCircle2,
  Trophy,
  Building2,
  Megaphone,
  Camera
} from "lucide-react"
import { IconBox } from "@/components/ui/icon-box"

const features = [
  {
    icon: Target,
    title: "Targeted Campaigns",
    description: "Reach specific demographics and talent categories with precision targeting."
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track campaign performance, engagement rates, and ROI in real-time."
  },
  {
    icon: Users,
    title: "Talent Database Access",
    description: "Browse and connect with verified talents across multiple agencies."
  },
  {
    icon: Calendar,
    title: "Event Sponsorship",
    description: "Sponsor pageants, casting events, and talent showcases for maximum exposure."
  },
  {
    icon: Shield,
    title: "Brand Safety",
    description: "All talents are verified, ensuring your brand associates with quality professionals."
  },
  {
    icon: DollarSign,
    title: "Flexible Budgeting",
    description: "Set budgets, track spending, and optimize campaigns for better results."
  }
]

const benefits = [
  "Direct access to verified talent database",
  "Real-time campaign performance tracking",
  "Secure payment processing and invoicing",
  "Brand safety with verified talent profiles",
  "Custom sponsorship packages available",
  "Dedicated account management support"
]

const sponsorshipTypes = [
  {
    title: "Event Sponsorship",
    description: "Sponsor pageants, fashion shows, and talent competitions",
    icon: Trophy
  },
  {
    title: "Talent Partnerships",
    description: "Partner directly with individual talents for campaigns",
    icon: Handshake
  },
  {
    title: "Agency Collaborations",
    description: "Work with agencies for large-scale talent campaigns",
    icon: Building2
  },
  {
    title: "Platform Advertising",
    description: "Advertise your brand across the platform to reach all users",
    icon: Megaphone
  },
  {
    title: "Custom Campaigns",
    description: "Create bespoke campaigns tailored to your brand needs",
    icon: Target
  },
  {
    title: "Content Creation",
    description: "Commission content from talents for your marketing needs",
    icon: Camera
  }
]

export default function SponsorsPage() {
  return (
    <main className="min-h-screen section-bg-charcoal text-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 section-bg-cyan-tint overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cinematic-cyan/5 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 border-cinematic-cyan/50 text-cinematic-cyan bg-cinematic-cyan/10 font-bebas uppercase tracking-widest">
              For Sponsors & Brands
            </Badge>
            <h1 className="font-bebas text-4xl font-bold text-white sm:text-5xl lg:text-7xl uppercase tracking-tight">
              Scale Your Brand Presence
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-400 lg:text-xl font-light leading-relaxed">
              Connect with verified talent ecosystems and world-class agencies.
              Launch precision campaigns, architect event sponsorships, and forge
              high-impact partnerships through our unified neural engine.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-cinematic-amber text-black hover:bg-cinematic-amber/90 font-bebas uppercase tracking-widest px-10 py-7 rounded-lg shadow-lg shadow-amber-500/20">
                Start Sponsoring
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-bebas uppercase tracking-widest px-10 py-7 rounded-lg">
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Types */}
      <section className="py-20 lg:py-28 section-bg-purple-tint">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bebas uppercase tracking-[0.4em] text-cinematic-amber mb-3">Opportunities</p>
            <h2 className="font-bebas text-4xl font-bold text-white sm:text-5xl uppercase tracking-tight">
              Sponsorship Types
            </h2>
            <p className="mt-4 text-lg text-gray-400 font-light">
              Multiple ways to connect with talent and grow your brand
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sponsorshipTypes.map((type, index) => (
              <Card key={index} className="border-white/10 bg-zinc-900/30 backdrop-blur-sm text-center hover:border-cinematic-amber/30 transition-all duration-500">
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <IconBox icon={type.icon} size="lg" variant="gradient" accentColor="amber" />
                  </div>
                  <CardTitle className="text-xl text-white font-bebas uppercase">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 font-light">
                    {type.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28 section-bg-warm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bebas uppercase tracking-[0.4em] text-cinematic-cyan mb-3">Tools</p>
            <h2 className="font-bebas text-4xl font-bold text-white sm:text-5xl uppercase tracking-tight">
              Powerful Sponsorship Tools
            </h2>
            <p className="mt-4 text-lg text-gray-400 font-light">
              Everything you need to run successful talent campaigns
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="border-white/10 bg-zinc-900/30 backdrop-blur-sm hover:border-cinematic-cyan/30 transition-all duration-500">
                <CardHeader>
                  <IconBox icon={feature.icon} size="md" variant="glass" accentColor="cyan" />
                  <CardTitle className="text-xl text-white font-bebas uppercase">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 font-light">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28 section-bg-magenta-tint">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-bebas text-4xl font-bold text-white sm:text-5xl uppercase tracking-tight">
                Why Brands Choose Our Platform
              </h2>
              <p className="mt-4 text-lg text-gray-400 font-light">
                Join leading brands already connecting with top talent through our platform.
              </p>
              <div className="mt-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cinematic-amber mt-0.5 shrink-0" />
                    <span className="text-gray-400 font-light">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Card className="w-full max-w-md border-white/10 bg-zinc-900/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <Handshake className="h-12 w-12 text-cinematic-amber mx-auto mb-4" />
                  <CardTitle className="text-2xl text-white font-bebas uppercase">Ready to Partner?</CardTitle>
                  <CardDescription className="text-gray-400">
                    Connect with verified talents and agencies today
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-cinematic-amber text-black hover:bg-cinematic-amber/90 font-bebas uppercase" size="lg">
                    Start Sponsoring
                  </Button>
                  <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 font-bebas uppercase" size="lg">
                    Request Demo
                  </Button>
                  <p className="text-center text-xs text-gray-500">
                    Custom packages available • Dedicated support
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}