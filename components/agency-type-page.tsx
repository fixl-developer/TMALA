import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Users, Layers } from "lucide-react"
import { getAgencyBySlug, AGENCY_ACCENTS } from "@/lib/agencies-data"

interface AgencyTypePageProps {
  slug: string
}

export function AgencyTypePage({ slug }: AgencyTypePageProps) {
  const agency = getAgencyBySlug(slug)
  if (!agency) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white/60">Agency type not found.</p>
      </main>
    )
  }

  const accent = AGENCY_ACCENTS[agency.accent]

  return (
    <main
      className="min-h-screen bg-black selection:bg-white/20"
      style={{ paddingTop: "calc(5rem + 2rem)" }}
    >
      {/* Hero — cinematic with accent */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url(${agency.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <Badge
            variant="secondary"
            className={`mb-6 ${accent.label} border font-bebas tracking-[0.35em] uppercase px-4 py-1 rounded-none`}
          >
            {agency.name}
          </Badge>
          <h1 className="font-bebas text-4xl font-bold text-white sm:text-6xl lg:text-7xl tracking-tight uppercase leading-tight max-w-3xl">
            Built for{" "}
            <span className={accent.text}>{agency.name.toLowerCase()}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/60 font-light leading-relaxed">
            {agency.shortDescription}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className={`${accent.bg} text-white hover:opacity-90 font-bebas uppercase tracking-widest px-10 py-7 rounded-none shadow-xl ${accent.shadow} transition-transform hover:scale-105`}
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

      {/* Modules */}
      <section className="py-20 lg:py-28 bg-black border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p
              className={`text-[10px] font-bebas uppercase tracking-[0.4em] ${accent.text} mb-2`}
            >
              Capabilities
            </p>
            <h2 className="font-bebas text-4xl font-bold text-white sm:text-5xl uppercase tracking-tight">
              Must-have modules
            </h2>
            <p className="mt-3 text-gray-400 font-light">
              Everything you need to run this agency type on one platform.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {agency.modules.map((module, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 p-5 border ${accent.border} bg-zinc-950/50 backdrop-blur-sm transition-colors hover:bg-zinc-900/50`}
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center ${accent.bg} opacity-90`}
                >
                  <Layers className="h-5 w-5 text-white" />
                </div>
                <p className="text-white font-light leading-snug">{module}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-20 lg:py-28 bg-zinc-950 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p
              className={`text-[10px] font-bebas uppercase tracking-[0.4em] ${accent.text} mb-2`}
            >
              Team
            </p>
            <h2 className="font-bebas text-4xl font-bold text-white sm:text-5xl uppercase tracking-tight">
              Default roles
            </h2>
            <p className="mt-3 text-gray-400 font-light">
              Pre-configured roles that map to how your team works.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {agency.roles.map((role, i) => (
              <span
                key={i}
                className={`inline-flex items-center gap-2 px-4 py-2 border ${accent.border} bg-black/40 text-white/90 font-light text-sm`}
              >
                <Users className={`h-4 w-4 ${accent.text}`} />
                {role}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-950/50 border-t border-white/5 relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bebas text-4xl font-bold text-white sm:text-5xl uppercase tracking-tight">
            Run your {agency.name.toLowerCase()} on one platform
          </h2>
          <p className="mt-4 text-gray-400 font-light">
            Start free — no credit card. 14-day trial.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className={`${accent.bg} text-white hover:opacity-90 font-bebas uppercase tracking-widest px-10 py-7 rounded-none shadow-xl ${accent.shadow}`}
            >
              Start Free Trial
            </Button>
            <Link href="/agencies/all">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 font-bebas uppercase tracking-widest px-10 py-7 rounded-none w-full sm:w-auto"
              >
                View all agency types
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
