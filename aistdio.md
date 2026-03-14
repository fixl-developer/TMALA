AI Studio for Talents
1) What AI Studio is
A dedicated workspace in the Talent dashboard where users can:
Generate, improve, and organize portfolio assets (photos/videos/docs)


Practice & get coaching (auditions, runway walk, interviews, pageant rounds)


Optimize applications (role-fit, answers, media checklist)


Track improvement (quality scores, conversion metrics)


Control privacy & rights (consent, usage permissions, watermarking)


AI Studio is not one feature; it’s a suite of AI tools with guardrails.

2) AI Studio navigation
Tabs
Portfolio Builder


Media Lab


Audition Coach


Application Assistant


Brand Kit


Growth Insights


My AI Assets (library, versions, exports)


Settings & Safety



3) Portfolio Builder
3.1 Smart Profile Completion
Profile completeness score by category (acting/modeling/pageant)


AI detects missing essentials: headshots, full-body, intro video, measurements, credits


One-click “Fix my profile” plan:


Suggested shots to upload


Suggested bio structure


Suggested skill tags (with confidence)


Evidence requests: “Add proof” for skills/credits (links/docs)


3.2 AI Resume / Bio Generator
Creates:


Casting bio


Pageant bio


Brand collaboration bio


Supports tones:


professional / bold / elegant / minimal


Outputs:


short bio (80–120 chars)


medium bio (300–500 chars)


full bio


Localization: multi-language versions


3.3 Portfolio “Packages”
One-click generate export sets:
“Casting Pack” (headshot + slate + resume + intro clip)


“Pageant Pack” (walk clip + Q/A highlights + achievements)


“Brand Pack” (UGC reel + stats + brand-safe profile)



4) Media Lab (quality + compliance)
4.1 Quality Analyzer (Scoring + Fix Plan)
For each media item:
Photo: framing, lighting, sharpness, background noise, face visibility


Video: audio clarity, lighting, stability, pacing, composition
 Outputs:


Quality score (0–100)


Top 5 improvements


Auto-checklist before submission


4.2 Auto-Tagging & Indexing
Detects:


media type (headshot, full-body, runway walk, slate, monologue)


skills shown (dance, accent, sport)


style tags (editorial, commercial, traditional, modern)


Adds searchable tags to the portfolio (tenant-controlled)


4.3 Rights & Safety Guardrails
Rights metadata:


ownership, permitted usage, expiry, “download allowed”


Auto watermark options:


visible watermark


invisible fingerprint


Compliance checks:


prohibited content detection


missing consent flags (for minors, if applicable)


4.4 Versioning & Audit
Every AI edit creates a new version


Original preserved


“Revert” and “Compare” view


Audit log for what changed + why


Note: If you later add generative media creation, gate it by tenant policy and explicit consent.

5) Audition Coach
5.1 Role-Based Practice
“Practice for this casting/pageant round” pulls:


criteria


expected format


time constraints


Generates:


likely questions


character prompts


improv scenarios


runway walk tips per category


pageant Q&A drills


5.2 Self-Tape Coach (Interactive)
Talent uploads a self-tape; AI returns:
pacing feedback


clarity & diction


energy & presence


eye line & framing


“moment markers” with timestamps


redo suggestions + short rehearsal plan


5.3 Interview & Q/A Coach (Pageant-ready)
Mock interviews (timed)


Answer structure training (STAR, PREP frameworks)


Bias-safe prompts


Confidence, conciseness scoring


“Best answer variations” (formal / witty / emotional)


5.4 Practice Plans
7-day, 14-day, 30-day training plans


Auto reminders via automations


Weekly progress report



6) Application Assistant
6.1 Match Readiness Check
On any opportunity page:
“How ready am I?”
 Outputs:


eligibility status (pass/fail)


missing requirements (media/docs)


predicted competitiveness band (low/medium/high) bounded, explainable


top 5 actions to improve score


6.2 Smart Answer Builder
For custom application questions:
Draft answers based on profile + experience


Tone selector


Length selector


“Proof-backed” suggestions (links/credits)


6.3 Risk & Scam Protection
Flags suspicious opportunities:


unusual payment terms


missing organizer verification


abnormal contract clauses (if contract text exists)


“Safe apply mode”:


anonymize contact info until shortlisted


6.4 Submission Optimizer
Auto orders portfolio items for that role


Builds a “submission playlist”


Checks file sizes, formats, naming conventions



7) Brand Kit (Talent as a product)
7.1 Brand Identity Builder
Defines:


niche / persona tags


brand-safe categories


style guide words


Generates:


tagline


intro scripts


outreach message templates (for sponsors/brands)


7.2 Social/UGC Toolkit
Script generator for UGC


Shot list generator


Caption and hook suggestions


“Brand safety checker” against tenant guidelines



8) Growth Insights
8.1 Funnel Analytics for Talent
Views → shortlist → callback → selection conversion


Portfolio performance:


which media items drive better outcomes


“Skill demand heatmap” (what roles are trending)


8.2 Personalized Improvement Suggestions
“Upload a better intro video” (with checklist)


“Add runway walk clip” (if applying to runway-heavy roles)


“Add verification to increase trust”


8.3 Goal Tracking
Set goals:


number of applications/week


improve shortlist rate


complete verification


Monthly progress report



9) My AI Assets Library
All AI outputs stored with:


asset type (bio, resume, answers, scripts, practice plans)


version


linked opportunities


Export:


PDF resume


shareable portfolio link


application pack zip (tenant-controlled)


Share controls:


public/private/casting-only


expiring links



10) Settings & Safety
10.1 Privacy Controls
Opt-out of:


using content for model improvement (tenant-level + user-level)


auto-tagging


analytics personalization


Fine-grained: per media item


10.2 AI Output Safety
Anti-harassment, anti-explicit content enforcement


No sensitive attribute inference (race/religion etc.)


“Explain why” panel for recommendations


10.3 Human override & reporting
Report AI output


Request human review (tenant ops)



11) Tenant Admin / SuperAdmin controls (must-have)
11.1 Feature Toggles
Enable/disable:


self-tape analysis


auto-tagging


resume generator


audition coach


brand kit


Per tenant / per category / per region


11.2 Policy Constraints
Sensitive attribute usage policy


Content policy packs (OPA)


Data retention policy


Export/sharing restrictions


Watermark requirement rules


11.3 Quotas & Billing
Credits per month per talent


Cost caps per tenant


Rate limits


“Pro tier” AI Studio upgrades



12) AI Studio events to track (analytics-ready)
ai_studio_opened


ai_portfolio_scan_completed


ai_media_quality_scored


ai_self_tape_feedback_generated


ai_application_answer_generated


ai_pack_exported


ai_suggestion_applied


ai_opt_out_changed


ai_output_reported



13) Recommended MVP vs Pro rollout
MVP (fastest to ship)
Portfolio completeness + bio/resume generator


Media quality scoring + checklist


Opportunity readiness check + submission optimizer


AI assets library + export packs


Full privacy + versioning


Pro (differentiators)
Self-tape coaching with timestamps


Pageant interview drill coach


Brand kit + UGC toolkit


Personalized growth insights


Fairness-safe match improvement simulator (“if you add X, score improves by Y”)



If you want, I can generate next (in the same level of detail):
AI Studio PRD (screens, user stories, acceptance criteria)


AI Studio service architecture (pipelines, storage, model gateway, moderation)


AI Studio policy packs (OPA/Rego) for content + privacy + sharing controls





1) AI Studio module overview
Purpose
AI Studio helps talents and agencies create, improve, package, and monetize talent assets (bios, resumes, submissions, media analysis, media generation), with tenant-governed models, budgets, and safety.
Core principles
Free = forced cheapest: rules-only first; if model needed → Gemini Flash-Lite (no choice).


Pro/Enterprise can offer provider choice (Gemini vs OpenAI), gated by tenant policy.


Media generation is pack-based (especially video).


Everything is catalog-driven: features/models/pricing/routing via config, not code.



2) Navigation sitemap and routes
2.1 Talent-facing routes
/ai-studio — Dashboard (usage, recent jobs, next actions)


/ai-studio/portfolio


/scan


/bio


/resume


/sections


/versions


/ai-studio/applications


/readiness


/answers


/optimizer


/exports


/ai-studio/media-lab


/photos


/videos


/tags


/rights


/library


/ai-studio/audition-coach


/drills


/self-tape


/practice-plan


/progress


/ai-studio/generate


/image


/image-edit


/video


/tools


/ai-studio/insights


/weekly


/monthly


/ai-studio/billing


/credits


/history


/packs


2.2 Tenant admin routes
/admin/ai-studio — AI Studio settings home


/features — toggles per feature + plan gating


/models — allowlists + defaults + “official-only” lanes


/pricing — tenant retail price per credit, pack pricing, discounts


/budgets — monthly budgets, caps, alerts


/templates — brand voice, rubrics, export templates


/moderation — safety rules, watermark, review queue


/audit — logs, exports, retention


/storefront — tenant plans + add-ons for talents


2.3 Superadmin routes
/superadmin/ai — platform AI control plane


/providers — provider registry


/models — global model catalog + mappings


/rate-cards — global price floors + suggested rates


/routing — health-based routing + failover policies


/tenants — overrides + incident tools


/compliance — global policy packs, audit exports



3) Roles and permissions (RBAC)
3.1 Roles
talent


agency_staff (operates on behalf of talent)


tenant_admin


casting_viewer (read-only for shared packs)


reviewer (enterprise moderation workflow)


superadmin


3.2 Permission groups
ai.run.text


ai.run.media_analysis


ai.run.image_gen


ai.run.video_gen


ai.export.pack


ai.manage.templates


ai.manage.models


ai.manage.budgets


ai.view.audit


ai.review.moderation


ai.manage.providers (superadmin only)


3.3 RBAC matrix
Permission
Talent
Agency Staff
Tenant Admin
Casting Viewer
Reviewer
Superadmin
ai.run.text
✅
✅
✅
❌
❌
✅
ai.run.media_analysis
Plan-gated
Plan-gated
✅
❌
❌
✅
ai.run.image_gen
Plan/add-on
Plan/add-on
✅
❌
❌
✅
ai.run.video_gen
Add-on only
Add-on only
✅
❌
❌
✅
ai.export.pack
Pro+
Pro+
✅
❌
❌
✅
ai.manage.templates
❌
❌
✅
❌
❌
✅
ai.manage.models
❌
❌
✅
❌
❌
✅
ai.manage.budgets
❌
❌
✅
❌
❌
✅
ai.view.audit
❌
❌
Enterprise
❌
Enterprise
✅
ai.review.moderation
❌
❌
Enterprise
❌
✅
✅


4) Plans and add-ons (SKU spec)
4.1 Platform plans (baseline)
Free
Forced: rules_only or text.cheapest (Gemini Flash-Lite)


No exports, no self-tape coach, no video gen


Image gen: 1/week (economy lane)


Pro
Provider choice for Standard (Gemini Flash vs OpenAI GPT-5 mini), tenant can restrict


Resume PDF + exports


Media lab video scoring


Add-ons: self-tape coach, image packs, video packs, premium text unlock


Enterprise
Everything in Pro


Premium lanes (Gemini Pro / OpenAI premium) governed by tenant policy


Human review queue, audit retention, advanced routing, SSO (if you want)


Official-lane option for premium video workflows


4.2 Add-ons (storefront SKUs)
Text
addon.text.premium_unlock (monthly)


addon.text.extra_variants (bundle)


Audition
addon.selftape.minutes_60


addon.selftape.minutes_180


addon.drills.advanced_pack


Image
addon.image.pack_50


addon.image.pack_200


Video
addon.video.grok_10x6s


addon.video.grok_25x6s


addon.video.standard_seconds_120


addon.video.cinema_seconds_120


Governance
addon.audit.retention_365


addon.moderation.human_review_queue


addon.exports.watermark_controls



5) Feature inventory with options (implementation-ready)
5.1 Portfolio Builder
Profile Scan
Modes: rules_only + optional narrated explanation


Options: scan scope (profile/media/credits/links), output style (checklist/score/action plan)


Outputs: scan_report, priority_fixes, recommended_next_actions


Bio Studio
Options: tone preset, length, variants, “facts only” mode, brand voice template


Outputs: bio_version[], diff, “apply to profile”


Resume/CV Studio
Options: template, ATS mode, role type, PDF export


Outputs: resume_text, resume_pdf, versions


Sections Builder
Options: visibility per section, verified badge overlays


Outputs: structured sections + publish toggles


5.2 Application Assistant
Readiness Check
Options: rule pack, eligibility gates, explain mode


Outputs: pass/fail + missing + fixes


Smart Answers
Options: style, length, variants, facts-only, provider choice (Pro+)


Outputs: drafts + best pick


Submission Optimizer
Options: tailor pack, keyword match, claim validation


Outputs: changeset + “apply”


Pack Exporter
Options: PDF pack, zip, expiring share link, download toggle, watermark


Outputs: export asset + link


5.3 Media Lab
Photo Scoring
Rules-first scoring + optional coaching tips


Options: rubric profile, auto-crop guides, retake checklist


Video Scoring
Sampled analysis (Pro) vs deeper (Enterprise)


Options: sampling window, timestamp notes, retake checklist


Auto Tagging
Options: tag groups, search filters


Rights/Consent
Options: usage scope, expiry, do-not-train flags


5.4 Audition Coach
Drills
Options: categories, difficulty, timer, feedback tone


Self-Tape Coach
Pipeline: ASR + timestamp feedback + action plan


Options: depth low/med/high, provider choice for feedback text (Pro+), export coach notes


Practice Plan + Progress
Options: goals, cadence, reminders; track improvements


5.5 Media Generation
Image Gen
Free: 1/week; Pro/Ent add-on packs


Options: style presets, count, safety strictness, watermark (tenant policy)


Image Edit
Options: background replace, upscale, crop ratios, captions


Video Gen
Packs only


Options: duration, quality mode (fast/standard/cinema), provider constraints


Outputs: clip + share + usage ledger


Tools
Upscale, format, subtitles, watermark, repurpose ratios



6) Job workflow catalog (state machines)
6.1 Common job state machine (all AI jobs)
DRAFT
  -> ESTIMATING
  -> QUOTA_RESERVED
  -> POLICY_CHECK
  -> QUEUED
  -> RUNNING
  -> (RETRYING)*  [transient]
  -> SUCCEEDED | FAILED | CANCELED
  -> RECONCILED (final meters charged/refunded)
  -> ARCHIVED

Required transitions
ESTIMATING must compute estimated_credits and show to user (Pro+; for Free internal ledger)


QUOTA_RESERVED reserves credits/budget


POLICY_CHECK enforces plan + tenant rules (including Free forced economy)


RECONCILED finalizes charge and writes to ledger


6.2 Feature-specific workflow notes
Pack Exporter workflow
DRAFT -> ESTIMATING -> QUOTA_RESERVED -> QUEUED
-> RENDERING_PDF -> ATTACHING_ASSETS -> UPLOADING -> SUCCEEDED -> RECONCILED

Self-tape coach workflow
DRAFT -> ESTIMATING -> QUOTA_RESERVED -> POLICY_CHECK
-> ASR_RUNNING -> TRANSCRIPT_READY
-> ANALYSIS_RUNNING -> FEEDBACK_GENERATION
-> SUCCEEDED -> RECONCILED

Media gen workflow (image/video)
DRAFT -> ESTIMATING -> QUOTA_RESERVED -> POLICY_CHECK
-> GENERATION_RUNNING -> POST_MODERATION
-> (HUMAN_REVIEW)? -> PUBLISHING -> SUCCEEDED -> RECONCILED


7) Data model (core entities)
7.1 Entities
ai_job


id, tenant_id, actor_id, subject_talent_id


feature_key, plan_tier, chosen_mode, provider_id, model_id


state, retries, timestamps


meters_estimated, meters_actual


credits_reserved, credits_charged, usd_cogs_estimated, usd_cogs_actual


ai_asset


id, type (bio/resume/export/photo_report/video_report/media_clip)


storage_url, visibility, consent tags, watermark flags


ai_asset_version


asset_id, version, diff, created_by_job_id


talent_facts


fact_key, value, source (user/verified/imported), confidence, updated_at


tenant_ai_policy


allowlists, defaults, caps, moderation settings, pricing overrides


ai_usage_ledger


line items for credits reserved/charged/refunded, cogs, provider invoice ids


share_link


scope, expiry, download permission, viewer role



8) Catalog configuration (the “engine”)
This is the part that makes AI Studio dynamic: you update catalog rows, not code.
8.1 Model aliases (modes)
{
  "model_aliases": [
    {
      "alias": "text.cheapest",
      "ui_label": "Cheapest",
      "candidates_in_priority_order": ["gemini:flash_lite"]
    },
    {
      "alias": "text.standard",
      "ui_label": "Standard",
      "candidates_in_priority_order": ["gemini:flash", "openai:gpt5_mini"]
    },
    {
      "alias": "text.premium",
      "ui_label": "Premium",
      "candidates_in_priority_order": ["gemini:pro", "openai:gpt5_2"]
    },
    {
      "alias": "image.free_weekly",
      "ui_label": "Weekly Free Image",
      "candidates_in_priority_order": ["runway:image_turbo", "fal:seedream_v4"]
    },
    {
      "alias": "video.fast",
      "ui_label": "Fast",
      "candidates_in_priority_order": ["atlas:pika_turbo", "fal:wan_2_5"]
    },
    {
      "alias": "video.cinema",
      "ui_label": "Cinema",
      "candidates_in_priority_order": ["runway:gen4_aleph", "fal:veo_3"]
    }
  ]
}

8.2 Feature profiles (per feature knobs)
{
  "feature_profiles": [
    {
      "feature_key": "ai.bio.generate",
      "category": "portfolio_builder",
      "meters": ["tokens_in_1k", "tokens_out_1k"],
      "defaults": { "mode_alias": "text.standard" },
      "plan_overrides": {
        "free": { "force_mode_alias": "text.cheapest", "allow_user_choice": false, "max_output_tokens": 500, "max_runs_per_day": 3 },
        "pro": { "allow_user_choice": true, "allowed_mode_aliases": ["text.standard"] },
        "enterprise": { "allow_user_choice": true, "allowed_mode_aliases": ["text.standard", "text.premium"] }
      }
    },
    {
      "feature_key": "ai.generate.image",
      "category": "media_generation",
      "meters": ["image_gen_count"],
      "defaults": { "mode_alias": "image.standard" },
      "plan_overrides": {
        "free": { "force_mode_alias": "image.free_weekly", "quota": { "images_per_week": 1 }, "allow_user_choice": false },
        "pro": { "requires_addon": "addon.image.pack_50", "allow_user_choice": true },
        "enterprise": { "allow_user_choice": true }
      }
    },
    {
      "feature_key": "ai.generate.video",
      "category": "media_generation",
      "meters": ["video_gen_seconds"],
      "defaults": { "mode_alias": "video.fast" },
      "plan_overrides": {
        "free": { "disabled": true },
        "pro": { "requires_addon": "addon.video.standard_seconds_120", "allow_user_choice": true, "allowed_mode_aliases": ["video.fast", "video.standard"] },
        "enterprise": { "requires_addon": "addon.video.cinema_seconds_120", "allow_user_choice": true, "allowed_mode_aliases": ["video.fast", "video.standard", "video.cinema"] }
      }
    }
  ]
}

8.3 Rate cards (credits charged)
{
  "rate_cards": [
    { "model_id": "gemini:flash_lite", "rates": { "tokens_in_1k": 0.10, "tokens_out_1k": 0.30 } },
    { "model_id": "gemini:flash", "rates": { "tokens_in_1k": 0.30, "tokens_out_1k": 1.00 } },
    { "model_id": "openai:gpt5_mini", "rates": { "tokens_in_1k": 0.30, "tokens_out_1k": 1.00 } },
    { "model_id": "gemini:pro", "rates": { "tokens_in_1k": 0.70, "tokens_out_1k": 2.50 } },
    { "model_id": "openai:gpt5_2", "rates": { "tokens_in_1k": 1.00, "tokens_out_1k": 6.00 } },

    { "model_id": "runway:image_turbo", "rates": { "image_gen_count": 6 } },
    { "model_id": "fal:seedream_v4", "rates": { "image_gen_count": 10 } },

    { "model_id": "atlas:pika_turbo", "rates": { "video_gen_seconds": 10 } },
    { "model_id": "fal:wan_2_5", "rates": { "video_gen_seconds": 12 } },
    { "model_id": "runway:gen4_aleph", "rates": { "video_gen_seconds": 35 } }
  ]
}

8.4 Plan enforcement (global)
{
  "plans": {
    "free": {
      "allowed_global_mode_aliases": ["rules_only", "text.cheapest", "image.free_weekly"],
      "blocked_features": ["ai.resume.generate", "ai.export.pack", "ai.selftape.coach", "ai.generate.video"],
      "quotas": { "image_per_week": 1 },
      "budget": { "monthly_credits_internal_ledger": 1000 }
    },
    "pro": {
      "allowed_global_mode_aliases": ["text.cheapest", "text.standard", "image.standard", "video.fast", "video.standard"],
      "addons_enabled": true
    },
    "enterprise": {
      "allowed_global_mode_aliases": ["text.cheapest", "text.standard", "text.premium", "image.standard", "video.fast", "video.standard", "video.cinema"],
      "addons_enabled": true,
      "governance": { "human_review": true, "audit_retention_days": 365 }
    }
  }
}


9) Tenant pricing + revenue + rev-share (implementable rules)
9.1 Tenant credit pricing model
Platform retail: 1 credit = $0.01


Tenant wholesale:


Pro: $0.008/credit


Enterprise: $0.007/credit


Tenants set talent retail:


Suggested: $0.010–$0.015/credit (Pro), $0.010–$0.020/credit (Enterprise)


9.2 Tenant-created plans (examples)
Starter: $9/mo, includes 600 credits, cheapest/standard only


Pro: $19/mo, includes 1500 credits, exports + resume


Creator: $29/mo, includes 2500 credits, image pack + optional video pack


9.3 Rev-share when talent buys directly
Default: 70/30 (platform/tenant) after fees


Enterprise partner: 60/40


Applies to: direct credit purchases, add-on packs, direct upgrades


Safeguards: linked-talent requirement, refund clawbacks, time-window optional



10) Safety, moderation, audit (minimum requirements)
10.1 Safety gates (where enforced)
Pre-run: prompt + inputs moderation


Post-run: output moderation (text/media metadata)


Optional: human review queue (Enterprise)


10.2 Audit requirements
Log for each job:
who requested, subject talent, feature_key


model/provider chosen + fallback history


estimated vs actual meters


policy decisions (why downgraded/blocked)


export/share link creation + access logs (Enterprise)



11) Observability and SLOs (AI Studio-specific)
Track per feature & per provider:
success rate, latency p50/p95, queue time


cost per job, credits per job


moderation block rate, human review backlog


downgrade rate (budget or plan gating)


provider throttling and retries




