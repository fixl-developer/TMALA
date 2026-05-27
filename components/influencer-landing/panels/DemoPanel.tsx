"use client"

import React, { useState } from 'react'
import { Calendar, Sparkles, Check } from 'lucide-react'
import { Heading } from '../ui/Heading'
import { Button } from '../ui/Button'

export function DemoPanel() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="pt-2 pb-12 space-y-6 text-center">
        <div className="mx-auto w-14 h-14 bg-accent-primary text-white flex items-center justify-center">
          <Check className="w-6 h-6" strokeWidth={3} />
        </div>
        <Heading level={3} className="text-3xl">
          Got it.
        </Heading>
        <p className="text-text-mut leading-relaxed max-w-md mx-auto">
          We'll reach out within one business day with a calendar link for your 30-minute
          walkthrough. Talk soon.
        </p>
      </div>
    )
  }

  return (
    <div className="pt-2 pb-12 space-y-7">
      <div className="space-y-2">
        <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-primary">
          <Calendar className="w-3 h-3 inline mr-2" />
          Book a Demo
        </div>
        <Heading level={3} className="text-3xl md:text-4xl">
          See the eight-role <span className="italic text-accent-primary">cockpit</span> live.
        </Heading>
        <p className="text-text-mut leading-relaxed">
          30 minutes. Real data, not slides. We'll walk you through the exact role-shell
          your team will use.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Field label="Full name" name="name" placeholder="Priya Sharma" required />
        <Field
          label="Work email"
          name="email"
          type="email"
          placeholder="priya@agency.com"
          required
        />
        <Field
          label="Agency name"
          name="agency"
          placeholder="House of Creators"
          required
        />
        <Field
          label="Roster size"
          name="rosterSize"
          placeholder="e.g. 30 creators"
        />
        <Field
          label="What problem are we solving first?"
          name="message"
          placeholder="GST/TDS automation, escrow, deal-room…"
          textarea
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full uppercase tracking-widest text-[11px] rounded-none mt-4"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Request my demo
        </Button>
        <p className="text-[11px] text-text-mut text-center">
          We never share your data. DPDP-compliant.
        </p>
      </form>
    </div>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
  textarea,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
  textarea?: boolean
}) {
  const inputClass =
    'w-full bg-bg-base border border-text-main/20 px-4 py-3 text-sm text-text-main placeholder:text-text-mut/60 focus:outline-none focus:border-accent-primary transition-colors'
  return (
    <label className="block space-y-2">
      <span className="text-[10px] uppercase tracking-widest font-bold text-text-main">
        {label}
        {required ? ' *' : ''}
      </span>
      {textarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          required={required}
          rows={3}
          className={inputClass}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className={inputClass}
        />
      )}
    </label>
  )
}
