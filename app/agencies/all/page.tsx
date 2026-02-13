import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import {
  AGENCY_TYPES,
  AGENCY_ACCENTS,
  getAgencyHref,
} from "@/lib/agencies-data"

function AgencyCard({
  agency,
}: {
  agency: (typeof AGENCY_TYPES)[0]
}) {
  const accent = AGENCY_ACCENTS[agency.accent]
  return (
    <Link
      href={getAgencyHref(agency.slug)}
      className="group relative block overflow-hidden bg-zinc-950 border border-white/5 transition-all duration-300 hover:border-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
    >
      {/* Accent bar */}
      <div
        className={`absolute top-0 left-0 w-1 h-full ${accent.bg} opacity-60 group-hover:opacity-100 transition-opacity z-10`}
      />
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-20 transition-opacity duration-500"
        style={{ backgroundImage: `url(${agency.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
      {/* Content */}
      <div className="relative z-10 p-6 min-h-[200px] flex flex-col justify-end">
        <span
          className={`text-[10px] font-bebas uppercase tracking-[0.25em] ${accent.text} mb-2`}
        >
          Agency type
        </span>
        <h3 className="font-bebas text-2xl font-bold text-white uppercase tracking-tight group-hover:text-white transition-colors">
          {agency.name}
        </h3>
        <p className="mt-2 text-sm text-white/50 font-light line-clamp-2 leading-snug">
          {agency.shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-bebas uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">
          Explore
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  )
}

export default function AllAgenciesPage() {
  return (
    <main className="min-h-screen bg-black selection:bg-red-500/30">
      {/* Hero */}
      <section
        className="relative py-20 lg:py-28 border-b border-white/5 overflow-hidden"
        style={{ paddingTop: "calc(5rem + 2rem)" }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[140px]" />
          <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge
            variant="secondary"
            className="mb-6 bg-white/10 text-white/90 border-white/20 font-bebas tracking-[0.35em] uppercase px-4 py-1 rounded-none"
          >
            All agency types
          </Badge>
          <h1 className="font-bebas text-5xl font-bold text-white sm:text-6xl lg:text-7xl tracking-tight uppercase leading-none">
            Powering <span className="text-red-400">every kind</span> of agency
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/50 font-light">
            From modeling and casting to production, influencer, pageant, and
            beyond — one platform, tailored to each.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {AGENCY_TYPES.map((agency) => (
              <AgencyCard key={agency.slug} agency={agency} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bebas text-4xl font-bold text-white sm:text-5xl uppercase tracking-tight">
            Ready to <span className="text-amber-400">transform</span> your
            agency?
          </h2>
          <p className="mt-4 text-lg text-gray-400 font-light">
            Start your free trial — no credit card required.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-400 text-black font-bebas uppercase tracking-widest px-10 py-7 rounded-none shadow-lg shadow-amber-500/20"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 font-bebas uppercase tracking-widest px-10 py-7 rounded-none"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
