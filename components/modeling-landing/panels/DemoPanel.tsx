"use client"

import React, { useState } from 'react'
import { Calendar, Sparkles, Check } from 'lucide-react'
import { Heading } from '../ui/Heading'
import { Button } from '../ui/Button'

const ROLES = ['Agency Admin', 'Senior Booker', 'Talent Manager', 'Finance & Compliance', 'Legal Counsel']

export function DemoPanel() {
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
          Booked.
        </Heading>
        <p className="text-modeling-mut leading-relaxed max-w-md mx-auto">
          We&apos;ll reach out within one business day with a calendar link for your 30-minute walkthrough of the modelling agency cockpit.
        </p>
      </div>
    )
  }

  return (
    <div className="pt-2 pb-12 space-y-7">
      <div className="space-y-2">
        <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-modeling-rose inline-flex items-center">
          <Calendar className="w-3 h-3 inline mr-2" />
          Book a 30-min demo
        </div>
        <Heading level={3} className="text-3xl md:text-4xl">
          See the seven-role <span className="italic text-modeling-deep">modelling cockpit</span> live.
        </Heading>
        <p className="text-modeling-mut leading-relaxed">
          Real options, real escrow, real splits. We&apos;ll walk through the exact role-shell your booker, talent manager, and finance team will use.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Field label="Full name" name="name" placeholder="Priya Sharma" required />
        <Field label="Work email" name="email" type="email" placeholder="priya@agency.com" required />
        <Field label="Agency name" name="agency" placeholder="Vogue Collective" required />
        <Field label="Roster size" name="rosterSize" placeholder="e.g. 80 models, multi-territory" />
        <SelectField label="Your role" name="role" options={ROLES} />
        <Field
          label="What problem are we solving first?"
          name="message"
          placeholder="Option Board, Trust Account splits, Co-Guardian flow, curfew checks…"
          textarea
        />

        <Button type="submit" variant="primary" size="lg" className="w-full uppercase tracking-widest text-[11px] mt-4">
          <Sparkles className="w-4 h-4 mr-2" />
          Request my demo
        </Button>
        <p className="text-[11px] text-modeling-mut text-center">
          DPDP-compliant. We never share your data.
        </p>
      </form>
    </div>
  )
}

function Field({
  label, name, type = 'text', placeholder, required, textarea,
}: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean; textarea?: boolean
}) {
  const inputClass =
    'w-full bg-white border border-modeling-line px-4 py-3 text-sm text-modeling-ink placeholder:text-modeling-mut/60 focus:outline-none focus:border-modeling-rose transition-colors rounded-sm'
  return (
    <label className="block space-y-2">
      <span className="text-[10px] uppercase tracking-widest font-bold text-modeling-ink">
        {label}{required ? ' *' : ''}
      </span>
      {textarea ? (
        <textarea name={name} placeholder={placeholder} required={required} rows={3} className={inputClass} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} required={required} className={inputClass} />
      )}
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
