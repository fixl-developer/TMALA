"use client"

import React, { useState } from 'react'
import { Rocket, ShieldCheck, Check } from 'lucide-react'
import { Heading } from '../ui/Heading'
import { Button } from '../ui/Button'

const ROSTER_SIZES = [
  '1 — 50 talents · Boutique',
  '50 — 250 talents · Multi-city',
  '250 — 1,000 talents · National',
  '1,000+ talents · Holding network',
]

const JURISDICTIONS = [
  'IN · India (GST + TDS)',
  'EU · SEPA + Schengen (UK / DE / FR)',
  'US · Federal + CA/NY minor work-hours',
  'Multi-jurisdiction (we operate cross-border)',
]

export function TrialPanel() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="pt-2 pb-12 space-y-6 text-center">
        <div className="mx-auto w-14 h-14 bg-modeling-rose text-white flex items-center justify-center rounded-full">
          <Check className="w-6 h-6" strokeWidth={3} />
        </div>
        <Heading level={3} className="text-3xl">
          Trial provisioning.
        </Heading>
        <p className="text-modeling-mut leading-relaxed max-w-md mx-auto">
          Your isolated tenant is being compiled with the modelling blueprint, role pack, and a sandbox Trust Account. We&apos;ll email login credentials within 30 minutes.
        </p>
      </div>
    )
  }

  return (
    <div className="pt-2 pb-12 space-y-7">
      <div className="space-y-2">
        <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-modeling-rose inline-flex items-center">
          <Rocket className="w-3 h-3 inline mr-2" />
          Start a 14-day trial
        </div>
        <Heading level={3} className="text-3xl md:text-4xl">
          Your own <span className="italic text-modeling-deep">modelling tenant</span>, in 30 minutes.
        </Heading>
        <p className="text-modeling-mut leading-relaxed">
          We provision an isolated workspace with the B5 modelling blueprint, 7 pre-configured role packs, a sandbox Trust Account, and Razorpay test mode. No credit card.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Field label="Agency name" name="agencyName" placeholder="Vogue Collective" required />
        <Field label="Primary contact" name="contact" placeholder="Founder / Booking Director" required />
        <Field label="Work email" name="email" type="email" placeholder="founder@agency.com" required />
        <SelectField label="Roster size" name="rosterSize" options={ROSTER_SIZES} />
        <SelectField label="Primary jurisdiction" name="jurisdiction" options={JURISDICTIONS} />

        <Button type="submit" variant="primary" size="lg" className="w-full uppercase tracking-widest text-[11px] mt-4">
          <ShieldCheck className="w-4 h-4 mr-2" />
          Provision my trial
        </Button>
        <p className="text-[11px] text-modeling-mut text-center">
          Isolated tenant · sandbox Trust Account · zero data shared with other agencies.
        </p>
      </form>
    </div>
  )
}

function Field({
  label, name, type = 'text', placeholder, required,
}: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean
}) {
  return (
    <label className="block space-y-2">
      <span className="text-[10px] uppercase tracking-widest font-bold text-modeling-ink">
        {label}{required ? ' *' : ''}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-white border border-modeling-line px-4 py-3 text-sm text-modeling-ink placeholder:text-modeling-mut/60 focus:outline-none focus:border-modeling-rose transition-colors rounded-sm"
      />
    </label>
  )
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block space-y-2">
      <span className="text-[10px] uppercase tracking-widest font-bold text-modeling-ink">{label}</span>
      <select
        name={name}
        defaultValue={options[1]}
        className="w-full bg-white border border-modeling-line px-4 py-3 text-sm text-modeling-ink focus:outline-none focus:border-modeling-rose transition-colors rounded-sm"
      >
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  )
}
