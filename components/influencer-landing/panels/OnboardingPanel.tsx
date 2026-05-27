"use client"

import React, { useState } from 'react'
import { Rocket, Check } from 'lucide-react'
import { Heading } from '../ui/Heading'
import { Button } from '../ui/Button'

const TIERS = ['Free', 'Starter', 'Pro (14-day trial)', 'Studio', 'Enterprise']

export function OnboardingPanel() {
  const [submitted, setSubmitted] = useState(false)
  const [tier, setTier] = useState('Pro (14-day trial)')

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
          Welcome aboard.
        </Heading>
        <p className="text-text-mut leading-relaxed max-w-md mx-auto">
          Check your inbox for a tenant-activation link. B4 — Brand Deals + Deliverables
          will install automatically on first login. First deal closes in a Deal Room
          within 24 hours, or money back.
        </p>
      </div>
    )
  }

  return (
    <div className="pt-2 pb-12 space-y-7">
      <div className="space-y-2">
        <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-primary">
          <Rocket className="w-3 h-3 inline mr-2" />
          Start Your Trial
        </div>
        <Heading level={3} className="text-3xl md:text-4xl">
          Your agency, <span className="italic text-accent-primary">live in 10 minutes.</span>
        </Heading>
        <p className="text-text-mut leading-relaxed">
          B4 — Brand Deals + Deliverables blueprint installs on signup. Razorpay
          sub-account configured. GST/TDS rules pre-set for India.
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
          label="Subdomain"
          name="subdomain"
          placeholder="houseofcreators"
          required
        />

        <div className="space-y-2">
          <span className="text-[10px] uppercase tracking-widest font-bold text-text-main">
            Choose tier *
          </span>
          <div className="grid grid-cols-1 gap-2">
            {TIERS.map((t) => (
              <label
                key={t}
                className={`flex items-center gap-3 p-3 border cursor-pointer transition-all ${
                  tier === t
                    ? 'border-accent-primary bg-accent-primary/5'
                    : 'border-text-main/15 hover:border-text-main/40'
                }`}
              >
                <input
                  type="radio"
                  name="tier"
                  value={t}
                  checked={tier === t}
                  onChange={() => setTier(t)}
                  className="accent-accent-primary"
                />
                <span className="text-sm font-medium text-text-main">{t}</span>
              </label>
            ))}
          </div>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full uppercase tracking-widest text-[11px] rounded-none mt-4"
        >
          Start Trial · No Card Required
        </Button>
        <p className="text-[11px] text-text-mut text-center leading-relaxed">
          By signing up you agree to our terms. Hosted in Mumbai. DPDP-compliant.
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
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <label className="block space-y-2">
      <span className="text-[10px] uppercase tracking-widest font-bold text-text-main">
        {label}
        {required ? ' *' : ''}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-bg-base border border-text-main/20 px-4 py-3 text-sm text-text-main placeholder:text-text-mut/60 focus:outline-none focus:border-accent-primary transition-colors"
      />
    </label>
  )
}
