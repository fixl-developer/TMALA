import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Film, CheckCircle2 } from "lucide-react"
import { AGENCY_CATEGORIES, AGENCY_ACCENTS } from "@/lib/agencies-data"
import { DynamicGridBackground } from "@/components/dynamic-grid-background"

const benefits = [
  "Multi-tenant architecture with complete data isolation",
  "Custom subdomain and branding options",
  "Advanced talent scouting and approval workflows",
  "Integrated payment processing and invoicing",
  "Mobile-responsive talent portfolios",
  "API access for custom integrations",
]

export default function AgenciesPage() {
  return (
    <main className="min-h-screen section-bg-charcoal selection:bg-montra-red/30" data-testid="section-agencies-page" aria-label="Agencies page">
      {/* Hero — cinematic */}
      <section
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-white/5"
        style={{ paddingTop: "calc(5rem + 2rem)" }}
        data-testid="section-hero"
        aria-label="Hero section"
      >
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          >
            <source src="https://assets.mixkit.co/videos/52270/52270-1080.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge
            variant="secondary"
            className="mb-6 bg-red-500/20 text-red-400 border-red-400/30 font-bebas tracking-[0.35em] uppercase px-4 py-1 rounded-none"
          >
            For Agencies
          </Badge>
          <h1 className="font-bebas text-5xl font-bold text-white sm:text-7xl lg:text-8xl tracking-tight uppercase leading-none drop-shadow-[0_0_40px_rgba(255,255,255,0.08)]">
            One Platform.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              Every Agency.
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base sm:text-lg text-white/60 font-light leading-relaxed">
            From roster and booking to casting, production, brand deals, and
            community — one cinematic stack for every kind of agency.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/agencies/all" data-testid="link-explore-agency-types">
              <Button
                size="lg"
                className="bg-red-600 text-white hover:bg-red-500 font-bebas uppercase tracking-widest px-10 py-7 rounded-none transition-all hover:scale-105 shadow-2xl shadow-red-500/25 text-lg"
                data-testid="btn-explore-agency-types"
                aria-label="Explore agency types"
              >
                Explore agency types
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 font-bebas uppercase tracking-widest px-10 py-7 rounded-none text-lg"
              data-testid="btn-schedule-demo"
              aria-label="Schedule demo"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Explore by focus — category cards with different palettes */}
      <DynamicGridBackground 
        pattern="squares" 
        accent="crimson" 
        opacity={0.08}
      >
        <section className="py-24 sm:py-32 section-bg-cool relative" data-testid="section-explore-by-focus" aria-label="Explore by focus section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-[10px] font-bebas uppercase tracking-[0.5em] text-red-500 mb-3">
              Explore by focus
            </p>
            <h2 className="font-bebas text-4xl font-bold text-white sm:text-5xl lg:text-6xl uppercase tracking-tight">
              Built for how you work
            </h2>
            <p className="mt-4 text-sm lg:text-base text-gray-500 max-w-xl mx-auto font-light">
              Each focus area has tailored modules and roles — no one-size-fits-all.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AGENCY_CATEGORIES.map((cat) => {
              const accent = AGENCY_ACCENTS[cat.accent]
              return (
                <Link
                  key={cat.key}
                  href="/agencies/all"
                  className="group relative block overflow-hidden border border-white/5 bg-zinc-900/60 backdrop-blur-sm transition-all duration-300 hover:border-cinematic-amber/30"
                  data-testid={`link-category-${cat.key}`}
                >
                  <div
                    className={`absolute top-0 left-0 w-1 h-full ${accent.bg} opacity-80 group-hover:opacity-100 transition-opacity`}
                  />
                  <div className="p-6 pl-7">
                    <span
                      className={`text-[10px] font-bebas uppercase tracking-[0.3em] ${accent.text}`}
                    >
                      {cat.label}
                    </span>
                    <p className="mt-2 text-sm text-white/50 font-light leading-snug">
                      {cat.tagline}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-bebas uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">
                      <span>{cat.slugs.length} types</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/agencies/all"
              className="inline-flex items-center gap-2 text-sm font-bebas uppercase tracking-widest text-red-400 hover:text-red-300 transition-colors"
              data-testid="link-view-all-agency-types"
            >
              View all agency types
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      </DynamicGridBackground>

      {/* Why choose us — different palette (amber/violet feel) */}
      <DynamicGridBackground 
        pattern="mesh" 
        accent="amber" 
        opacity={0.06}
        className="border-t border-white/5"
      >
      <section className="py-24 sm:py-32 section-bg-purple-tint relative overflow-hidden" data-testid="section-why-choose-us" aria-label="Why agencies choose us section">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,146,60,0.06),transparent_50%)]" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.05),transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <div>
              <p className="text-[10px] font-bebas uppercase tracking-[0.4em] text-amber-400 mb-3">
                Why agencies choose us
              </p>
              <h2 className="font-bebas text-4xl font-bold text-white sm:text-5xl lg:text-6xl uppercase tracking-tight leading-none">
                Cinematic scale. Quiet confidence.
              </h2>
              <p className="mt-6 text-lg text-gray-400 font-light leading-relaxed mb-10">
                Join agencies transforming talent management with one platform —
                multi-tenant, secure, and built for growth.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-amber-500/10 mt-0.5">
                      <CheckCircle2 className="h-5 w-5 text-amber-400 shrink-0" />
                    </div>
                    <span className="text-gray-300 font-light leading-snug">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md rounded-none border border-white/10 bg-black/40 backdrop-blur-sm p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
                <div className="pl-4">
                  <Film className="h-14 w-14 text-amber-400/90 mb-6" />
                  <h3 className="font-bebas text-3xl uppercase tracking-tight text-white mb-2">
                    Ready to run your agency here?
                  </h3>
                  <p className="text-gray-400 font-light text-sm mb-8">
                    Start free — no credit card. 14-day trial.
                  </p>
                  <Button
                    size="lg"
                    className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bebas uppercase tracking-widest py-7 rounded-none shadow-lg shadow-amber-500/20"
                    data-testid="btn-start-free-trial"
                    aria-label="Start free trial"
                  >
                    Start Free Trial
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full mt-3 border-white/20 text-white hover:bg-white/5 font-bebas uppercase tracking-widest py-7 rounded-none"
                    data-testid="btn-contact-sales"
                    aria-label="Contact sales"
                  >
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </DynamicGridBackground>
    </main>
  )
}
