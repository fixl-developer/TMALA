"use client"

import React, { useState } from 'react'
import { Mail, Check } from 'lucide-react'
import { Heading } from '../ui/Heading'
import { Button } from '../ui/Button'

export function InvitationPanel() {
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
          On the list.
        </Heading>
        <p className="text-text-mut leading-relaxed max-w-md mx-auto">
          We'll send your invitation when the next cohort opens. Expect to hear from us in
          7–14 days.
        </p>
      </div>
    )
  }

  return (
    <div className="pt-2 pb-12 space-y-7">
      <div className="space-y-2">
        <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-primary">
          <Mail className="w-3 h-3 inline mr-2" />
          Request Invitation
        </div>
        <Heading level={3} className="text-3xl md:text-4xl">
          By invitation, <span className="italic text-accent-primary">for now.</span>
        </Heading>
        <p className="text-text-mut leading-relaxed">
          We onboard agencies in cohorts so we can give each new tenant white-glove setup.
          Tell us a bit about you — we'll reach out when the next cohort opens.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block space-y-2">
          <span className="text-[10px] uppercase tracking-widest font-bold text-text-main">
            Full name *
          </span>
          <input
            name="name"
            type="text"
            placeholder="Priya Sharma"
            required
            className="w-full bg-bg-base border border-text-main/20 px-4 py-3 text-sm focus:outline-none focus:border-accent-primary transition-colors"
          />
        </label>
        <label className="block space-y-2">
          <span className="text-[10px] uppercase tracking-widest font-bold text-text-main">
            Work email *
          </span>
          <input
            name="email"
            type="email"
            placeholder="priya@agency.com"
            required
            className="w-full bg-bg-base border border-text-main/20 px-4 py-3 text-sm focus:outline-none focus:border-accent-primary transition-colors"
          />
        </label>
        <label className="block space-y-2">
          <span className="text-[10px] uppercase tracking-widest font-bold text-text-main">
            Why TalentOS? *
          </span>
          <textarea
            name="reason"
            rows={3}
            placeholder="What problem are you trying to fix?"
            required
            className="w-full bg-bg-base border border-text-main/20 px-4 py-3 text-sm focus:outline-none focus:border-accent-primary transition-colors"
          />
        </label>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full uppercase tracking-widest text-[11px] rounded-none mt-4"
        >
          Request my invitation
        </Button>
      </form>
    </div>
  )
}
