import type { ComponentType } from 'react'
import {
  Crown,
  Briefcase,
  UserCheck,
  Search,
  User,
  Coins,
  Scale,
  Shield,
  Cog,
  Wallet,
} from 'lucide-react'

export type DemoRoleCategory = 'leadership' | 'operations' | 'business' | 'talent' | 'tenant'

export interface DemoRole {
  category: DemoRoleCategory
  icon: ComponentType<{ className?: string }>
  name: string
  persona: string
  email: string
  pages: string
  dashboardPath: string
  highlights: string[]
}

export const MODELING_ROLES: DemoRole[] = [
  {
    category: 'leadership',
    icon: Crown,
    name: 'Agency Admin',
    persona: 'Founder · COO · Head of Bookings',
    email: 'admin@modelling.demo',
    pages: '28+ pages',
    dashboardPath: '/modelling-admin',
    highlights: [
      'Cross-vertical roster grid + agency health score',
      'Option Board override + crisis dispatch console',
      'Bulk operations on roster, contracts, payouts — audit-logged',
    ],
  },
  {
    category: 'operations',
    icon: Briefcase,
    name: 'Senior Booker',
    persona: 'Holds options · runs the board',
    email: 'booker@modelling.demo',
    pages: '14 pages',
    dashboardPath: '/modelling-booker',
    highlights: [
      'Interactive Option Board with 24h challenge clock',
      'Casting Feed + brand portal direct uploads',
      'Roster Grid with live availability + comp-card preview',
    ],
  },
  {
    category: 'operations',
    icon: UserCheck,
    name: 'Talent Manager',
    persona: 'Careers · transit · day-to-day',
    email: 'manager@modelling.demo',
    pages: '12 pages',
    dashboardPath: '/modelling-manager',
    highlights: [
      'Quarterly check-in workflow with talent feedback',
      'Visa Desk + transit clearance tracker',
      'Local escort dispatch + crisis playbook trigger',
    ],
  },
  {
    category: 'operations',
    icon: Search,
    name: 'Roster Scout',
    persona: 'Streetcasting · onboarding · prelim splits',
    email: 'scout@modelling.demo',
    pages: '8 pages',
    dashboardPath: '/modelling-scout',
    highlights: [
      'Scouting CRM with grading and parent-consent waivers',
      '5-stage onboarding flow with KYC + measurement log',
      'Preliminary commission split drafts for senior review',
    ],
  },
  {
    category: 'talent',
    icon: User,
    name: 'Model / Talent',
    persona: 'Mobile cockpit · wallet · safety',
    email: 'talent@modelling.demo',
    pages: '13 pages',
    dashboardPath: '/modelling-talent',
    highlights: [
      'Today shell + Bookings + 10-stage state machine',
      'Earnings + Wallet with beneficiary management',
      '8 crisis playbooks, rights charter, wellbeing surface',
    ],
  },
  {
    category: 'business',
    icon: Coins,
    name: 'Finance & Compliance',
    persona: 'Escrow · splits · SEPA · GST/TDS',
    email: 'finance@modelling.demo',
    pages: '17 pages',
    dashboardPath: '/modelling-finance',
    highlights: [
      'Trust Account ledger with maker-checker approval',
      'Universal blueprint splits engine + tax withholding',
      'Reconciliation matcher · cash-flow forecast · crisis cash playbook',
    ],
  },
  {
    category: 'business',
    icon: Scale,
    name: 'Legal Counsel',
    persona: 'Templates · redlines · minor consent',
    email: 'legal@modelling.demo',
    pages: '11 pages',
    dashboardPath: '/modelling-legal',
    highlights: [
      'Triple-Lock contract templates with PDF export',
      'Talent Redline Editor with side-by-side amendment diff',
      'Minor consent + curfew packs (IN, EU, US) — cryptographically frozen',
    ],
  },
]

export const TENANT_ROLES: DemoRole[] = [
  {
    category: 'tenant',
    icon: Crown,
    name: 'Tenant Owner',
    persona: 'Owns tenant · installs blueprints',
    email: 'tenant-owner@talentos.io',
    pages: '12 pages',
    dashboardPath: '/tenant-owner',
    highlights: [
      'Blueprint marketplace (B1–B10) with addon billing',
      'Cross-blueprint revenue rollup',
      'Team activity + sponsorship',
    ],
  },
  {
    category: 'tenant',
    icon: Shield,
    name: 'Tenant Admin',
    persona: 'Tenant-wide config · RBAC',
    email: 'tenant-admin@talentos.io',
    pages: 'See /admin',
    dashboardPath: '/admin',
    highlights: [
      'Cross-vertical RBAC (43 roles, 194 perms)',
      'Team invites + role management',
      'Integrations + policy enforcement',
    ],
  },
  {
    category: 'tenant',
    icon: Cog,
    name: 'Tenant Ops',
    persona: 'SLA · conflicts · staff · reminders',
    email: 'tenant-ops@talentos.io',
    pages: '25 pages',
    dashboardPath: '/tenant-ops',
    highlights: [
      'SLA monitor across all blueprints',
      'Conflict resolution (booking overlaps)',
      'Cross-blueprint staff assignments',
    ],
  },
  {
    category: 'tenant',
    icon: Wallet,
    name: 'Tenant Finance',
    persona: 'Cross-blueprint invoices · payouts',
    email: 'tenant-finance@talentos.io',
    pages: '30 pages',
    dashboardPath: '/tenant-finance',
    highlights: [
      'Cross-blueprint invoices + escrow aging',
      'Payouts across B1 + B2 + B4 + B5',
      'GST/TDS exports + reconciliation',
    ],
  },
]

// Override via NEXT_PUBLIC_APP_URL. Falls back to the deployed app URL so
// tiles work in production even when the env var isn't set.
export const APP_BASE = process.env.NEXT_PUBLIC_APP_URL || 'https://frontend-mauve-beta-86.vercel.app'

export function loginUrlFor(role: DemoRole): string {
  return `${APP_BASE}/login?email=${encodeURIComponent(role.email)}`
}
