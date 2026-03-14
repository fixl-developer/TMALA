AI STUDIO
Feature Documentation
TalentOS PaaS Platform — Product & Engineering Reference
Version 1.0	Confidential	India First	Phase 1-2	


Document Scope
This document covers every feature, module, permission, pricing rule, data model, workflow state machine, safety gate, and observability requirement of the TalentOS AI Studio. It serves as the single source of truth for Product, Engineering, QA, and Data teams.


Product Area	TalentOS — Talent Self-Service Dashboard (AI Layer)
Last Updated	March 2026
Authors	TalentOS Product & Engineering Team
Classification	Confidential — Internal Only
Related Docs	TalentOS PRD, DB Architecture, Platform Security Spec, API Reference


1. Overview & Strategic Purpose

1.1 What Is AI Studio?
AI Studio is a dedicated workspace inside the TalentOS Talent Dashboard where users can generate, improve, package, and monetize talent assets. It is not a single feature — it is a governed suite of AI tools with tenant-controlled safety, budget, and model routing.


Core Value Proposition
AI Studio transforms a talent's raw profile into a competitive, submission-ready professional identity — with AI-assisted bios, scored media, audition coaching, brand kits, and growth analytics — all within a safe, privacy-first, agency-governed environment.


1.2 Five Pillars
Generate	Improve	Package	Practice	Monetize
Bios, resumes, application answers, social scripts	Media quality scoring, fix plans, profile gaps	Casting Packs, Brand Packs, Pageant Packs — one-click exports	Audition drills, self-tape coach, interview Q&A, practice plans	Brand kit, UGC toolkit, growth insights, casting conversion funnel


1.3 Design Principles
•Free = forced cheapest model (Gemini Flash-Lite). No exceptions.
•Pro/Enterprise unlock provider choice, governed by tenant policy.
•Media generation is pack-based, especially video.
•Everything is catalog-driven: features, models, pricing, and routing are config — not code.
•All AI outputs are versioned, auditable, and revertible.
•Privacy is first-class: per-item opt-out, do-not-train flags, expiring share links.
•No sensitive attribute inference (race, religion, etc.) under any circumstances.


1.4 Users & Roles
Attribute	Detail
Talent	Primary user — creates, runs, exports AI jobs on their own profile.
Agency Staff	Operates on behalf of talent (same permissions as talent within their roster).
Tenant Admin	Configures feature toggles, model allowlists, budgets, moderation rules, and pricing.
Casting Viewer	Read-only access to shared packs only. Cannot run any AI job.
Reviewer	Enterprise-only. Reviews AI output in the human moderation queue.
Superadmin	Full platform control: provider registry, global model catalog, routing, policy packs, finance.




2. Navigation & Route Architecture

2.1 Talent-Facing Routes
Attribute	Detail
/ai-studio	Dashboard — usage summary, recent jobs, next recommended actions, credit balance.
/ai-studio/portfolio	Portfolio Builder: /scan · /bio · /resume · /sections · /versions
/ai-studio/applications	Application Assistant: /readiness · /answers · /optimizer · /exports
/ai-studio/media-lab	Media Lab: /photos · /videos · /tags · /rights · /library
/ai-studio/audition-coach	Audition Coach: /drills · /self-tape · /practice-plan · /progress
/ai-studio/generate	Media Generation: /image · /image-edit · /video · /tools
/ai-studio/insights	Growth Insights: /weekly · /monthly
/ai-studio/billing	Credits & Billing: /credits · /history · /packs


2.2 Tenant Admin Routes
Attribute	Detail
/admin/ai-studio	AI Studio settings home
/admin/ai-studio/features	Feature toggles per plan tier — enable/disable per tenant, category, or region
/admin/ai-studio/models	Model allowlists, defaults, and official-only lane configuration
/admin/ai-studio/pricing	Retail credit price, pack pricing, discounts for talents on this tenant
/admin/ai-studio/budgets	Monthly budgets, cost caps, alerting thresholds
/admin/ai-studio/templates	Brand voice templates, scoring rubrics, export format templates
/admin/ai-studio/moderation	Safety rules, watermark requirements, human review queue settings
/admin/ai-studio/audit	Audit logs, export controls, data retention settings
/admin/ai-studio/storefront	Tenant subscription plans and add-ons available for talent purchase


2.3 Superadmin Routes
Attribute	Detail
/superadmin/ai/overview	Platform-wide AI usage, cost, incident summary
/superadmin/ai/providers	Provider registry — add/edit/disable, key rotation, compliance flags
/superadmin/ai/models	Global model catalog — add versions, set deprecations, staged rollouts
/superadmin/ai/aliases	Model alias lanes — reorder candidates, set fallbacks, run experiments
/superadmin/ai/features	Feature catalog — all feature keys, their modes, metering, plan overrides
/superadmin/ai/rate-cards	Global credit rates per model/provider, margin floor profiles
/superadmin/ai/routing	Routing rules, health-based failover policies, A/B experiments
/superadmin/ai/policies	Global safety packs (OPA/Rego), content policy, compliance settings
/superadmin/ai/tenants	Per-tenant overrides, billing costs, incident tooling
/superadmin/ai/moderation	Moderation queues, rule sets, audit trail
/superadmin/ai/finance	COGS, provider invoices, unit economics, rev-share reports
/superadmin/ai/observability	SLOs, latency dashboards, downgrade rate, throttle events
/superadmin/ai/compliance	Data retention, GDPR-aligned export, compliance audit
/superadmin/ai/dev	API keys, webhooks, sandboxes, job replays for debugging




3. Portfolio Builder

The Portfolio Builder is the foundation of AI Studio. It helps every talent establish a complete, competitive professional profile — and keeps it that way as opportunities evolve.


3.1 Smart Profile Completion
Attribute	Detail
Feature Key	ai.profile.scan
Plan Access	Free (rules-only scan), Pro+ (AI-narrated plan)
Scope Options	Profile fields · Media items · Credits & links
Output Style	Checklist · Score card · Action plan (all configurable)
Outputs	scan_report · priority_fixes · recommended_next_actions


How It Works
•Profile completeness score calculated per category: Acting, Modelling, Pageant.
•AI detects missing essentials: headshots, full-body shots, intro video, measurements, show credits.
•One-click 'Fix my profile' plan generated with suggested shots, bio structure, and skill tags (confidence-rated).
•Evidence requests: for claimed skills or credits, system flags 'Add proof' (links, PDF certificates, agency verifications).
•Score updates in real time as talent adds/removes assets.


Category-Specific Scanning
A commercial modelling profile and a pageant profile require different assets. The scanner knows — it applies the correct rubric per category and shows separate completion scores side by side.


3.2 Bio / Resume Generator — Bio Studio
Attribute	Detail
Feature Key	ai.bio.generate
Plan Access	Free (text.cheapest, 3 runs/day, 500 token max), Pro (text.standard), Enterprise (text.premium)
Provider Choice	Free: ❌  |  Pro: Standard only  |  Enterprise: Standard + Premium
Bio Types	Casting Bio · Pageant Bio · Brand Collaboration Bio
Tone Presets	Professional · Bold · Elegant · Minimal
Length Options	Short (80–120 chars) · Medium (300–500 chars) · Full bio
Variants	Up to 3 tone variants per generation (Pro+)
Localization	Multi-language output supported (tenant-configured locales)
Special Modes	'Facts only' mode — no creative embellishment, uses verified data only
Brand Voice	Tenant can supply a brand voice template applied to all outputs
Outputs	bio_version[] · diff vs previous · 'Apply to profile' one-click action


3.3 Resume / CV Studio
Attribute	Detail
Feature Key	ai.resume.generate
Plan Access	Pro+ only (blocked on Free)
Template Options	Standard · ATS-optimized · Pageant Profile · Brand Sheet
Role Type Targeting	Runway · Commercial · Editorial · Acting · Influencer · Speaker
Export	PDF (with watermark options) — requires ai.export.pack permission
Outputs	resume_text · resume_pdf · versions array
ATS Mode	Structured for Applicant Tracking System compatibility — keyword-optimized


3.4 Sections Builder
Attribute	Detail
Feature Key	ai.profile.sections
Plan Access	Free+
Visibility Control	Per-section: Public · Agency-only · Casting-only · Private
Verified Badges	Agency-verified overlays applied to sections with confirmed credentials
Outputs	structured_sections[] · publish toggles per section


3.5 Portfolio Packages — One-Click Export Sets
Generate complete submission-ready packages in one click:


Package	Contents	Best For
Casting Pack	Headshot + Slate + Resume PDF + Intro Clip	Modelling & acting casting submissions
Pageant Pack	Ramp Walk Clip + Q&A Highlights + Achievements	Pageant registration and round submissions
Brand Pack	UGC Reel + Platform Stats + Brand-Safe Profile	Sponsor outreach and brand collaboration pitches


Pack Exporter Workflow States
DRAFT → ESTIMATING → QUOTA_RESERVED → QUEUED → RENDERING_PDF → ATTACHING_ASSETS → UPLOADING → SUCCEEDED → RECONCILED




4. Media Lab

Media Lab is the quality, compliance, and rights management layer for all portfolio assets. Every media item submitted through TalentOS passes through Media Lab's analysis pipeline.


4.1 Quality Analyzer — Scoring + Fix Plan
Attribute	Detail
Feature Key	ai.media.score
Plan Access	Photos: Free+ · Videos: Pro (sampled), Enterprise (deep analysis)
Photo Analysis Dimensions	Framing · Lighting · Sharpness · Background noise · Face visibility
Video Analysis Dimensions	Audio clarity · Lighting · Stability · Pacing · Composition
Score Output	0–100 quality score per media item
Fix Plan	Top 5 prioritized improvement actions with specific guidance
Retake Checklist	Auto-generated checklist before next upload attempt
Video Sampling	Pro: sampled analysis (configurable window) · Enterprise: full deep pass
Outputs	quality_score · top_improvements[] · retake_checklist · timestamp_notes (video)


4.2 Auto-Tagging & Indexing
Attribute	Detail
Feature Key	ai.media.tag
Plan Access	Free+ (tenant can disable)
Detected: Media Type	Headshot · Full-body · Runway walk · Slate · Monologue · UGC reel
Detected: Skills Shown	Dance · Acting · Sport · Voice · Catwalk · Speech
Detected: Style Tags	Editorial · Commercial · Traditional · Modern · Lifestyle · Avant-garde
Tag Groups	Configurable by tenant admin — custom taxonomies supported
Search Integration	Tags added to portfolio search index (tenant-controlled visibility)
Opt-Out	Talent can opt out of auto-tagging per item — or globally in Settings


4.3 Rights & Safety Guardrails
Attribute	Detail
Feature Key	ai.media.rights
Plan Access	Free+ (core rights). Watermark controls: add-on.exports.watermark_controls
Rights Metadata	Ownership · Permitted usage scope · Expiry date · Download allowed flag
Watermarking: Visible	Configurable text/logo overlay — position, opacity, color
Watermarking: Invisible	Invisible digital fingerprint for provenance tracking
Compliance Checks	Prohibited content detection · Missing consent flags for minor-adjacent content
Do-Not-Train Flag	Per item: marks content as excluded from any model training datasets
Outputs	rights_metadata · watermark_config · compliance_flags[]


4.4 Versioning & Audit Trail
Attribute	Detail
Feature Key	ai.media.version
Plan Access	Free+ (core versioning). Extended retention: add-on.audit.retention_365
Version Creation	Every AI edit creates a new immutable version. Original always preserved.
Revert	One-click revert to any prior version
Compare View	Side-by-side version comparison with diff highlighting
Audit Log	Records: what changed · AI job ID · model used · who triggered · timestamp
Retention	Free: 30 days · Pro: 90 days · Enterprise: 365 days


Generative Media Gate
If generative media creation features are added in future, they are gated by both tenant policy (feature toggle in admin) and explicit per-session talent consent. Tenant can disable entirely. Output always post-moderated before publishing.




5. Audition Coach

Audition Coach is TalentOS's AI-powered performance preparation suite. It pulls real criteria from live castings and pageant rounds, then delivers personalized, structured coaching — making every practice session relevant.


5.1 Role-Based Practice Drills
Attribute	Detail
Feature Key	ai.audition.drills
Plan Access	Free: basic categories only · Pro: standard drills · Enterprise + add-on: advanced pack
Context Sourcing	'Practice for this casting/pageant round' — pulls criteria, expected format, time limits from the live opportunity
Drill Types Generated	Likely questions · Character/improv prompts · Runway walk tips per category · Pageant Q&A scripts
Difficulty	Configurable: Beginner / Intermediate / Advanced
Timer Mode	Timed drills with per-question countdown. Configurable durations.
Feedback Tone	Supportive · Neutral · Critical (talent-selected per session)
Categories	Acting · Runway · Pageant · Commercial · Influencer · Speaker


5.2 Self-Tape Coach — Interactive Video Feedback
Attribute	Detail
Feature Key	ai.selftape.coach
Plan Access	Add-on only (addon.selftape.minutes_60 or addon.selftape.minutes_180)
Pipeline Stages	ASR Running → Transcript Ready → Analysis Running → Feedback Generation
Feedback Dimensions	Pacing · Clarity & diction · Energy & presence · Eye line & framing
Moment Markers	Timestamped markers on specific moments: 'Strong delivery at 0:42' / 'Eye break at 1:15'
Redo Suggestions	Specific improvement suggestions with short rehearsal plan
Depth Options	Low (fast, summary only) · Medium · High (full analysis — Enterprise+ only)
Provider Choice	Feedback text generation: Free forced economy · Pro: standard · Enterprise: premium (user selectable)
Export	Coach notes exportable as PDF or shareable link (Pro+)
Outputs	transcript · feedback_report · moment_markers[] · action_plan · practice_items[]


Self-Tape Coach Workflow States
DRAFT → ESTIMATING → QUOTA_RESERVED → POLICY_CHECK → ASR_RUNNING → TRANSCRIPT_READY → ANALYSIS_RUNNING → FEEDBACK_GENERATION → SUCCEEDED → RECONCILED


5.3 Interview & Q/A Coach — Pageant-Ready
Attribute	Detail
Feature Key	ai.interview.coach
Plan Access	Free: basic Q&A only · Pro+: full mock interviews
Format	Mock interview — timed responses, per-question feedback
Answer Frameworks Taught	STAR (Situation, Task, Action, Result) · PREP (Point, Reason, Example, Point)
Prompt Safety	Bias-safe prompt library — no discriminatory, appearance-shaming, or exclusionary prompts
Scoring Dimensions	Confidence level · Conciseness · Answer structure adherence
Answer Variations	Best answer in 3 tones: Formal · Witty · Emotional — for talent to compare and learn
Pageant-Specific	Topic bank includes social issues, personal values, community questions common in Indian pageants


5.4 Practice Plans — Structured Improvement Programs
Attribute	Detail
Feature Key	ai.practice.plan
Plan Access	Free+
Durations	7-day · 14-day · 30-day (talent selects)
Goal Setting	Casting-specific · Pageant round · General performance improvement
Cadence	Daily or every-other-day practice sessions — configurable
Reminders	Integrated with TalentOS automation system — push/email/in-app notifications
Progress Tracking	Weekly automated progress report — skill-by-skill improvement delta
Outputs	practice_plan · daily_tasks[] · progress_reports[]




6. Application Assistant

The Application Assistant helps talents submit stronger, better-prepared applications to castings, brand opportunities, and pageants — faster, with less friction and fewer rejections.


6.1 Match Readiness Check
Attribute	Detail
Feature Key	ai.application.readiness
Plan Access	Free+
Trigger	'How ready am I?' — available on every casting/pageant opportunity page
Output: Eligibility	Pass / Fail per stated criteria (age, height, category, region, etc.)
Output: Missing Items	List of missing media or documents with direct upload links
Output: Competitiveness Band	Low / Medium / High — bounded, explainable estimate. Not a guarantee.
Output: Action Plan	Top 5 specific actions to improve readiness score before deadline
Rule Pack	Tenant can configure custom eligibility rule sets per casting type
Explain Mode	Togglable: shows exactly why each pass/fail decision was made (transparency principle)


6.2 Smart Answer Builder
Attribute	Detail
Feature Key	ai.application.answers
Plan Access	Free (text.cheapest, limited variants) · Pro (text.standard, full variants) · Enterprise (text.premium)
Trigger	Any application form with custom open-text questions
Drafting Basis	Uses talent's profile facts, experience, skills, and verified credits
Tone Selector	Professional · Passionate · Confident · Humble · Bold
Length Selector	Short (1–2 sentences) · Medium (1 paragraph) · Full (2–3 paragraphs)
Variants	Up to 3 per question (Pro+) — talent picks best
Proof-Backed	Suggests specific credits or portfolio links to include as supporting evidence
Facts-Only Mode	Disables creative embellishment — outputs structured factual statements only


6.3 Risk & Scam Protection
Attribute	Detail
Feature Key	ai.application.risk
Plan Access	Free+
Suspicious Flags	Unusual payment terms · Missing organizer verification · Abnormal contract clauses (if contract text is present)
Safe Apply Mode	Anonymizes talent's direct contact info until officially shortlisted by verified organizer
Contract Analysis	If contract text uploaded: flags non-standard clauses, compares against platform norms
Trust Indicators	Verified agency badge · Platform-verified event · Escrow payment confirmed
Outputs	risk_flags[] · safe_apply_status · contract_issues[]


6.4 Submission Optimizer
Attribute	Detail
Feature Key	ai.application.optimize
Plan Access	Free+
Portfolio Ordering	Auto-reorders portfolio items to best match the role's stated priorities
Submission Playlist	Builds an ordered 'submission playlist' — correct sequence, correct formats
File Validation	Checks file sizes, format compatibility, naming conventions per platform requirements
Keyword Match	Matches talent's tags and credits against the casting brief's keywords
Claim Validation	Cross-checks claims in application answers against profile-verified data
Outputs	changeset[] · 'Apply changeset' one-click action




7. Brand Kit

Brand Kit treats the talent as a product. It helps them define a consistent personal brand identity, generate outreach materials, and create brand-safe content for UGC campaigns and social media.


7.1 Brand Identity Builder
Attribute	Detail
Feature Key	ai.brand.identity
Plan Access	Pro+ (Add-on on Free)
Defines	Niche / persona tags · Brand-safe content categories · Personal style guide words
Generates: Tagline	1–3 punchy taglines reflecting personality, speciality, and market positioning
Generates: Intro Scripts	30-second, 60-second, and 2-minute intro scripts for castings and brand meetings
Generates: Outreach Templates	Personalizable DM / email templates for approaching sponsors and brands
Brand Voice	Links to tenant brand voice template — ensures consistency across outputs
Outputs	brand_identity_doc · taglines[] · scripts[] · outreach_templates[]


7.2 Social & UGC Toolkit
Attribute	Detail
Feature Key	ai.brand.ugc
Plan Access	Pro+ (Add-on available)
Script Generator	UGC scripts for product showcases, reviews, brand stories — per platform tone
Shot List Generator	Detailed shot-by-shot list: setup, lighting, angle, action — for solo creators
Caption & Hook Suggestions	Platform-specific hooks and captions (Instagram, TikTok, YouTube, LinkedIn)
Brand Safety Checker	Runs output against tenant's brand safety guidelines — flags policy violations before posting
Hashtag Suggestions	Relevant, non-spam hashtags based on category and region
Outputs	scripts[] · shot_list · captions[] · hooks[] · safety_check_result




8. Media Generation

Media Generation lets talents create polished portfolio assets using AI image and video generation — all within tenant-governed quality, safety, and watermarking rules.


Important — Gate Policy
All generative media features are gated by tenant feature toggles and require explicit per-session talent consent. All outputs go through POST_MODERATION before publishing, and optionally through a human review queue in Enterprise.


8.1 Image Generation
Attribute	Detail
Feature Key	ai.generate.image
Free Plan	1 image/week on economy lane (runway:image_turbo or fal:seedream_v4)
Pro Plan	Requires addon.image.pack_50 or addon.image.pack_200
Enterprise Plan	Full provider choice, no weekly restriction (pack-based)
Style Presets	Editorial · Commercial · Lifestyle · Minimal · Bold · Traditional
Count Per Job	1–4 images per generation request (plan-limited)
Safety Strictness	Configurable: Standard / Strict / Custom (tenant-set)
Watermark Policy	Tenant can require watermark on all generated images (visible or invisible)
Outputs	generated_images[] · share_link · usage_ledger_entry


8.2 Image Edit Tools
Attribute	Detail
Feature Key	ai.generate.image_edit
Plan Access	Pro+
Background Replace	Remove and replace background with location presets or custom prompts
Upscale	2× / 4× resolution upscaling while preserving facial detail
Crop Ratios	Auto-crop to platform ratios: 1:1 · 4:5 · 9:16 · 3:4 · 16:9
Caption Overlay	Add styled text captions to images (for testimonials, social posts)
Outputs	edited_image · diff_from_original · share_link


8.3 Video Generation
Attribute	Detail
Feature Key	ai.generate.video
Free Plan	Disabled entirely — no video generation on Free
Pro Plan	Requires addon.video.standard_seconds_120 or addon.video.grok_25x6s
Enterprise Plan	Requires addon.video.cinema_seconds_120 — unlocks cinema quality
Duration Options	6s · 15s · 30s (pack-dependent)
Quality Modes	Fast (atlas:pika_turbo / fal:wan_2_5) · Standard · Cinema (runway:gen4_aleph — Enterprise only)
Provider Constraints	Tenant can restrict to specific providers or official-lane only
Post-Moderation	Always runs POST_MODERATION. Optional HUMAN_REVIEW in Enterprise.
Outputs	video_clip · share_link · usage_ledger_entry


8.4 Generation Workflow State Machine
All Media Generation Jobs Follow This State Machine
DRAFT → ESTIMATING → QUOTA_RESERVED → POLICY_CHECK → GENERATION_RUNNING → POST_MODERATION → (HUMAN_REVIEW — Enterprise optional) → PUBLISHING → SUCCEEDED → RECONCILED


8.5 Media Tools (Post-Processing)
Attribute	Detail
Upscale	Resolution enhancement — 2× or 4× on existing portfolio images
Format Conversion	Convert between JPG, PNG, HEIC, WebP for platform compatibility
Subtitle Generation	Auto-generate subtitles for video clips (ASR-based) — SRT/VTT export
Watermark Applier	Apply visible or invisible watermark to any portfolio asset
Repurpose Ratios	Resize / reframe existing video for different platform ratios automatically




9. Growth Insights

Growth Insights gives talents a clear, honest picture of how their profile is performing in the marketplace — and what to do about it. All metrics are decision-focused, not vanity-focused.


9.1 Funnel Analytics
Attribute	Detail
Feature Key	ai.insights.funnel
Plan Access	Free: basic · Pro+: full funnel
Funnel Stages Tracked	Profile Views → Shortlisted → Callback Received → Selected for Role
Conversion Rates	Per stage conversion with trend line (week-on-week, month-on-month)
Portfolio Attribution	Which specific media items correlate with better shortlist rates
Skill Demand Heatmap	What roles, categories, and skills are trending on the platform in talent's region
Period Granularity	Weekly · Monthly reports (separate routes)


9.2 Personalized Improvement Suggestions
Data-driven nudges generated from the talent's actual funnel data:
•'Upload a better intro video' — shown when profiles with intro videos convert 2.8× better
•'Add runway walk clip' — triggered when talent is applying to runway-heavy castings without walk footage
•'Add agency verification to increase trust' — triggered when shortlist rate is below category average
•'Connect Instagram' — when social data would improve profile discovery score
•'Complete measurements' — when casting applications fail eligibility due to missing stats


9.3 Goal Tracking
Attribute	Detail
Feature Key	ai.insights.goals
Plan Access	Free+
Goal Types	Applications per week · Shortlist rate improvement target · Profile completeness target · Verification completion
Progress Reports	Monthly automated report — goal vs actual with trend commentary
Reminders	Integrated with automation system — nudges when behind pace
Reset / Adjust	Talent can modify goals at any time without losing history




10. My AI Assets Library

Every output AI Studio produces is stored as a versioned, portable asset in the talent's personal library. Nothing gets lost between sessions.


10.1 Asset Storage
Attribute	Detail
Asset Types Stored	Bio versions · Resume PDFs · Application answers · Scripts · Practice plans · Media analysis reports · Generated images/videos
Metadata Per Asset	Asset type · Version number · Linked opportunity (if applicable) · Job ID · Model used · Created timestamp
Versioning	Full version history per asset — revert or compare any two versions
Linked Opportunities	Assets can be tagged to specific castings or pageant rounds for organized retrieval


10.2 Export Options
Attribute	Detail
PDF Resume	Full formatted PDF — requires Pro+ plan + ai.export.pack permission
Shareable Portfolio Link	Public-facing link to curated portfolio view — configurable scope
Application Pack ZIP	Complete submission pack as ZIP download — tenant controls availability
Expiring Links	All share links can be set with an expiry date (24h · 7d · 30d · custom)
Download Toggle	Talent controls whether link recipient can download assets or only view


10.3 Share & Privacy Controls
Attribute	Detail
Visibility Levels	Public · Private · Casting-only · Agency-only
Expiring Links	Time-bound share links with optional download restriction
Revoke Access	Instantly revoke any active share link
Viewer Permissions	View-only vs Download-enabled — configurable per link
Audit	Every link access logged: viewer role, timestamp, IP region (Enterprise)




11. Settings & Safety

11.1 Talent Privacy Controls
Attribute	Detail
Opt-Out: Model Training	Per item or global: marks content as excluded from any AI model improvement datasets
Opt-Out: Auto-Tagging	Disable automatic tag generation for specific items or all media
Opt-Out: Analytics Personalization	Disable personalized insights based on usage behaviour
Granularity	Per media item, per feature category, or account-wide global toggle
Consent Record	All consent decisions are immutable-logged with timestamp and version


11.2 AI Output Safety
Attribute	Detail
Anti-Harassment Enforcement	All outputs checked against harassment, bullying, and body-shaming policy
Explicit Content Block	Strict NSFW filtering at provider level + post-processing moderation
Sensitive Attribute Policy	No inference of race, religion, caste, sexual orientation, disability from any input
Explainability Panel	'Explain why' — talent can ask why any recommendation or score was generated
Bias Monitoring	Quarterly bias audit across category, region, and demographic proxies (superadmin)


11.3 Human Override & Reporting
Attribute	Detail
Report AI Output	Any talent can flag an AI output as inappropriate, incorrect, or biased
Request Human Review	Escalates flagged job to tenant ops team for manual review
Human Review Queue	Enterprise feature — ops team reviews flagged jobs before or after publishing
Review SLA	Tenant-configured SLA for review queue backlog (monitored in observability dashboard)
Override Actions	Approve · Edit & approve · Reject + explanation · Escalate to platform trust team




12. Roles & Permissions (RBAC)



Permission	Talent	Agency Staff	Tenant Admin	Casting Viewer	Reviewer	Superadmin
ai.run.text	✅	✅	✅	❌	❌	✅
ai.run.media_analysis	Plan-gated	Plan-gated	✅	❌	❌	✅
ai.run.image_gen	Plan/add-on	Plan/add-on	✅	❌	❌	✅
ai.run.video_gen	Add-on only	Add-on only	✅	❌	❌	✅
ai.export.pack	Pro+	Pro+	✅	❌	❌	✅
ai.manage.templates	❌	❌	✅	❌	❌	✅
ai.manage.models	❌	❌	✅	❌	❌	✅
ai.manage.budgets	❌	❌	✅	❌	❌	✅
ai.view.audit	❌	❌	Enterprise	❌	Enterprise	✅
ai.review.moderation	❌	❌	Enterprise	❌	✅	✅


Permission Note
ai.manage.providers is exclusively reserved for superadmin roles. No tenant, regardless of plan, can modify provider registry entries. All provider key rotations go through vault integration with superadmin approval.




13. Plans, Add-Ons & Pricing

13.1 Plan Comparison


Feature	Free	Pro	Enterprise
Bio / Resume Generator	✅ (cheapest)	✅ (standard)	✅ (premium)
Media Quality Scoring	Photo only	Photo + Video	Photo + Video (deep)
Self-Tape Coaching	❌	Add-on	Add-on (depth: high)
Audition Drills	✅ (basic)	✅ (advanced add-on)	✅ (all)
Image Generation	1/week (economy)	Add-on packs	Add-on packs
Video Generation	❌	Add-on (fast/standard)	Add-on (fast/standard/cinema)
Pack Exporter / PDF	❌	✅	✅
Brand Kit + UGC Toolkit	❌	Add-on	✅
Growth Insights	Basic	Full	Full + custom goals
Provider Choice	❌	Standard only	Standard + Premium
Human Review Queue	❌	❌	✅
Audit Log Retention	30 days	90 days	365 days
Monthly Credit Budget	1,000 cr (internal)	Tenant-set	Tenant-set
Expiring Share Links	❌	✅	✅
Moderation Queue	❌	❌	✅


13.2 Add-On SKU Catalog
Add-On SKU	Billing	Unlocks
addon.text.premium_unlock	Monthly	Premium model (Gemini Pro / GPT-5.2) for text features
addon.text.extra_variants	Bundle	Extra bio/answer variants beyond plan default
addon.selftape.minutes_60	One-time pack	60 minutes of self-tape analysis
addon.selftape.minutes_180	One-time pack	180 minutes of self-tape analysis
addon.drills.advanced_pack	Monthly	Advanced audition drill categories + unlimited sessions
addon.image.pack_50	One-time pack	50 image generation credits
addon.image.pack_200	One-time pack	200 image generation credits
addon.video.grok_10x6s	One-time pack	10 × 6-second video clips (fast mode)
addon.video.grok_25x6s	One-time pack	25 × 6-second video clips (fast mode)
addon.video.standard_seconds_120	One-time pack	120 seconds of standard video generation
addon.video.cinema_seconds_120	One-time pack	120 seconds of cinema-quality video (Enterprise only)
addon.audit.retention_365	Monthly	Extended audit log retention to 365 days
addon.moderation.human_review_queue	Monthly	Human review queue for AI output moderation
addon.exports.watermark_controls	Monthly	Advanced watermark controls: visible + invisible fingerprint


13.3 Credit Pricing Model
Attribute	Detail
Platform Retail Price	1 credit = $0.01 USD
Tenant Wholesale — Pro	$0.008 per credit
Tenant Wholesale — Enterprise	$0.007 per credit
Tenant Suggested Retail (Pro)	$0.010–$0.015 per credit
Tenant Suggested Retail (Enterprise)	$0.010–$0.020 per credit
Example Tenant Plans	Starter: $9/mo · 600 credits · cheapest/standard   |   Pro: $19/mo · 1,500 credits · exports+resume   |   Creator: $29/mo · 2,500 credits · image+video packs


13.4 Revenue Share — Direct Talent Purchases
Attribute	Detail
Default Split	70% Platform / 30% Tenant (after fees)
Enterprise Partner Split	60% Platform / 40% Tenant
Applies To	Direct credit purchases · Add-on pack purchases · Direct plan upgrades
Safeguards	Linked-talent requirement · Refund clawback rules · Optional time-window restrictions




14. Model Catalog, Aliases & Routing

14.1 Model Aliases (Lanes)
Aliases are the abstraction that decouples features from specific models. Swap providers without changing a line of feature code.


Alias Key	UI Label	Candidate Models (Priority Order)	Available On
text.cheapest	Cheapest	gemini:flash_lite	Free, Pro, Enterprise
text.standard	Standard	gemini:flash → openai:gpt5_mini	Pro, Enterprise
text.premium	Premium	gemini:pro → openai:gpt5_2	Enterprise only
image.free_weekly	Weekly Free Image	runway:image_turbo → fal:seedream_v4	Free
image.standard	Standard Image	Pack-based (Pro/Enterprise)	Pro, Enterprise
video.fast	Fast	atlas:pika_turbo → fal:wan_2_5	Pro, Enterprise (add-on)
video.standard	Standard	Standard pipeline (Pro+)	Pro, Enterprise (add-on)
video.cinema	Cinema	runway:gen4_aleph → fal:veo_3	Enterprise only (add-on)


14.2 Credit Rate Cards


Model ID	Input Rate	Output Rate	Notes
gemini:flash_lite	0.10 cr/1k tokens	0.30 cr/1k tokens	Free plan (text.cheapest)
gemini:flash	0.30 cr/1k tokens	1.00 cr/1k tokens	Standard lane
openai:gpt5_mini	0.30 cr/1k tokens	1.00 cr/1k tokens	Standard alt.
gemini:pro	0.70 cr/1k tokens	2.50 cr/1k tokens	Premium lane
openai:gpt5_2	1.00 cr/1k tokens	6.00 cr/1k tokens	Premium alt.
runway:image_turbo	6 cr/image	—	Free weekly image
fal:seedream_v4	10 cr/image	—	Image alt.
atlas:pika_turbo	10 cr/sec	—	Video fast
fal:wan_2_5	12 cr/sec	—	Video fast alt.
runway:gen4_aleph	35 cr/sec	—	Cinema quality


Rate Card Principle
Rate cards are defined per model in the catalog — not per feature. When a model is swapped in an alias, the new model's rate card applies automatically. Tenants set their retail markup above the platform wholesale rate.


14.3 Routing & Failover
Attribute	Detail
Health-Based Routing	Candidates in alias evaluated by real-time health check — degraded providers skipped
Failover Policy	If primary candidate fails: retry with next in priority order. Max retries configurable.
Regional Routing	Fallback chain configurable per region — supports India + global expansion
Official-Only Lane	Tenant can enforce official-only mode: no aggregator providers in routing chain
Experiments	5% traffic experiments: superadmin can split traffic to test alternative model chains
Rate Limit Handling	Per-provider RPM/TPM/concurrent job limits enforced. Queue overflow → QUEUED state.
Throttle Events	Logged in observability for provider health scoring and retry budgeting




15. Data Model — Core Entities

15.1 ai_job
Attribute	Detail
id	UUID — primary key
tenant_id	Owning tenant
actor_id	User who triggered the job (talent or agency_staff)
subject_talent_id	Talent whose assets are being processed
feature_key	e.g. ai.bio.generate, ai.selftape.coach
plan_tier	free / pro / enterprise — at time of job creation
chosen_mode	model alias used (e.g. text.standard)
provider_id / model_id	Resolved provider and model after routing
state	Current state machine status (see §16)
retries	Retry count
meters_estimated / meters_actual	Tokens / images / seconds — estimated vs final
credits_reserved / credits_charged	Credit ledger entries
usd_cogs_estimated / usd_cogs_actual	Platform cost tracking
timestamps	created_at · started_at · succeeded_at · reconciled_at


15.2 ai_asset
Attribute	Detail
id	UUID
type	bio / resume / export / photo_report / video_report / media_clip / script / practice_plan
storage_url	Secure S3 / CDN URL
visibility	public / private / casting-only / agency-only
consent_tags	Array: do_not_train · no_auto_tag · no_analytics
watermark_flags	visible_watermark · invisible_fingerprint
version_count	Total versions created
linked_opportunity_id	Optional — casting or pageant round this asset is linked to


15.3 ai_asset_version
Attribute	Detail
asset_id	Parent asset reference
version	Sequential integer
diff	Structured diff from previous version
created_by_job_id	The ai_job that produced this version
created_at	Timestamp
is_active	Boolean — current active version flag


15.4 talent_facts
Attribute	Detail
fact_key	e.g. height_cm, eye_color, training.acting, award.miss_elegance_2025
value	Stored value (string, number, boolean)
source	user / verified / imported (from agency or external credential)
confidence	0.0–1.0 — for AI-inferred facts only
updated_at	Last modification timestamp
usage	Feeds Smart Answers, Match Readiness, Submission Optimizer, Profile Scan


15.5 tenant_ai_policy
Attribute	Detail
feature_allowlist	Which AI features are enabled for this tenant
model_allowlist	Which model aliases can be used
monthly_credit_cap	Maximum spend per talent per month
safety_strictness	Standard / Strict / Custom
watermark_required	Boolean — enforces watermark on all generated media
human_review_enabled	Boolean — routes all outputs to review queue (Enterprise)
pricing_overrides	Tenant retail prices per credit type
content_policy_pack_id	Reference to OPA policy pack applied to this tenant


15.6 ai_usage_ledger
Attribute	Detail
Line Item Fields	job_id · type (reserve/charge/refund) · credits_amount · usd_cogs · timestamp
Immutability	Append-only — no silent edits, full audit trail
Provider Invoice IDs	Links each line item to upstream provider billing reference
Usage	Drives billing reconciliation, tenant cost reports, and superadmin unit economics


15.7 share_link
Attribute	Detail
scope	Asset IDs and visibility level included in this link
expiry	Optional datetime — link auto-expires
download_permission	Boolean — can recipient download assets
viewer_role	Expected role of link recipient (casting_viewer / public)
access_log	Timestamp, viewer region, IP hash (Enterprise only)




16. Job Workflow — State Machines

16.1 Universal Job State Machine (All AI Jobs)
Standard Flow
DRAFT → ESTIMATING → QUOTA_RESERVED → POLICY_CHECK → QUEUED → RUNNING → (RETRYING)* → SUCCEEDED | FAILED | CANCELED → RECONCILED → ARCHIVED


Attribute	Detail
DRAFT	Job created, inputs validated. Not yet submitted.
ESTIMATING	System computes estimated_credits and estimated COGS. Shown to user (Pro+); internal ledger only on Free.
QUOTA_RESERVED	Credits/budget reserved against talent's monthly allocation. Job cannot proceed without this.
POLICY_CHECK	Plan enforcement, tenant feature allowlist, sensitive attribute rules, content policy evaluated. Downgrade or block here if needed.
QUEUED	Job waiting for provider capacity (rate limits).
RUNNING	Active execution at provider. May transition to RETRYING on transient failure.
RETRYING	Transient state — retrying with same or next-in-chain provider. Max retries: configurable.
SUCCEEDED	Output available. Credit charge finalized.
FAILED	Terminal failure. Credits refunded. Failure reason logged.
CANCELED	Talent or system canceled before completion. Credits refunded.
RECONCILED	Final meters charged or refunded. Ledger updated. Audit record sealed.
ARCHIVED	Long-term storage (retention policy applies). Not accessible in UI but preserved for compliance.


16.2 Feature-Specific Workflow Notes
Pack Exporter
DRAFT → ESTIMATING → QUOTA_RESERVED → QUEUED
→ RENDERING_PDF → ATTACHING_ASSETS → UPLOADING → SUCCEEDED → RECONCILED


Self-Tape Coach
DRAFT → ESTIMATING → QUOTA_RESERVED → POLICY_CHECK
→ ASR_RUNNING → TRANSCRIPT_READY → ANALYSIS_RUNNING → FEEDBACK_GENERATION
→ SUCCEEDED → RECONCILED


Image / Video Generation
DRAFT → ESTIMATING → QUOTA_RESERVED → POLICY_CHECK
→ GENERATION_RUNNING → POST_MODERATION → (HUMAN_REVIEW — optional) → PUBLISHING → SUCCEEDED → RECONCILED




17. Safety, Moderation & Audit

17.1 Safety Gates — Where They Fire
Attribute	Detail
Pre-Run: Prompt + Input Moderation	All text prompts and media inputs are screened before job execution. Blocks prohibited content before it reaches any provider.
Post-Run: Output Moderation	All text and media metadata outputs screened after generation. Blocks before publishing to talent's portfolio or feed.
Human Review Queue	Enterprise optional — all outputs can route to ops team before talent sees them.
Sensitive Attribute Block	Any job attempting to infer race, religion, caste, sexual orientation, or disability is blocked at POLICY_CHECK.


17.2 Audit Log Requirements (Per Job)
•Who requested the job — actor_id and role
•Subject talent ID
•Feature key
•Model and provider chosen + full fallback history (which providers were tried)
•Estimated vs actual meters
•Policy decisions — why job was downgraded, blocked, or modified
•Export/share link creation and access logs (Enterprise)
•Human review decision and reviewer identity (Enterprise)


17.3 Tenant Admin Safety Controls
Attribute	Detail
Sensitive Attribute Usage Policy	Custom rules for what talent data can feed AI prompts
Content Policy Packs (OPA)	Open Policy Agent / Rego rules — tenant selects from platform-curated packs or uploads custom
Data Retention Policy	30 / 90 / 365 days — per plan and add-on
Export / Sharing Restrictions	Tenant can block all exports, require watermarks, restrict expiring links to internal sharing only
Watermark Requirement Rules	Enforce visible or invisible watermarks on all generated content




18. Observability & SLOs

18.1 Metrics Tracked — Per Feature & Per Provider
Metric	Description
Success Rate	% of jobs reaching SUCCEEDED state — per feature and per provider
Latency p50 / p95	Median and 95th percentile end-to-end job time — tracking SLA compliance
Queue Time	Time from QUEUED to RUNNING — identifies provider capacity bottlenecks
Cost Per Job	Actual USD COGS per job type — monitors unit economics
Credits Per Job	Average credits consumed per feature — calibrates retail pricing
Moderation Block Rate	% of outputs blocked post-moderation — safety health metric
Human Review Backlog	Queue depth for human review — Enterprise SLA monitoring
Downgrade Rate	% of jobs downgraded to cheaper model due to budget or plan gating
Provider Throttle Events	Frequency of provider rate limit hits — drives capacity planning
Retry Rate	% of jobs that entered RETRYING state — provider reliability indicator


18.2 SLO Targets
Attribute	Detail
Text Generation — p95 Latency	< 8 seconds for standard; < 20 seconds for premium
Image Generation — p95 Latency	< 30 seconds for economy/standard
Video Generation — p95 Latency	< 3 minutes for fast mode; < 10 minutes for cinema
Self-Tape Analysis — p95	< 5 minutes for full pipeline (ASR + analysis + feedback)
Pack Export — p95	< 60 seconds
Moderation Block Rate	< 2% for legitimate talent content
Job Success Rate (text)	≥ 99% per 24-hour window
Job Success Rate (media gen)	≥ 97% per 24-hour window




19. Analytics Events

All AI Studio interactions emit structured analytics events for product insight, safety monitoring, and billing verification.


Event Name	Fires When
ai_studio_opened	Talent navigates to /ai-studio — session started
ai_portfolio_scan_completed	Profile scan job reaches SUCCEEDED
ai_bio_generated	Bio Studio job reaches SUCCEEDED
ai_resume_generated	Resume/CV Studio job reaches SUCCEEDED
ai_media_quality_scored	Photo or video quality analysis completes
ai_self_tape_feedback_generated	Self-tape coach job reaches FEEDBACK_GENERATION → SUCCEEDED
ai_application_readiness_checked	Match Readiness Check completes for a specific opportunity
ai_application_answer_generated	Smart Answer Builder produces output
ai_submission_optimized	Submission Optimizer changeset applied
ai_pack_exported	Pack Exporter job completes + export downloaded or link created
ai_image_generated	Image generation job reaches SUCCEEDED
ai_video_generated	Video generation job reaches SUCCEEDED
ai_suggestion_applied	Talent applies an AI recommendation (bio, fix, action)
ai_opt_out_changed	Talent modifies any privacy/consent toggle
ai_output_reported	Talent flags an AI output as problematic
ai_human_review_requested	Job escalated to human review queue
ai_share_link_created	Expiring share link generated for an asset
ai_credits_depleted	Talent's monthly credit allocation hits 0
ai_addon_purchased	Add-on SKU purchased from storefront
ai_practice_plan_started	Talent begins a new practice plan




20. MVP vs Pro Rollout Plan

20.1 MVP — Ship First
MVP Goal
Deliver the core value loop in the shortest time: profile quality → better applications → more bookings. All other features add value but are not blocking.


•Portfolio Builder: Smart Profile Completion + Bio/Resume Generator
•Media Lab: Quality Analyzer (photo scoring) + Retake Checklist
•Application Assistant: Match Readiness Check + Submission Optimizer
•My AI Assets Library + export packs (PDF resume, shareable link)
•Full privacy controls: opt-out, versioning, do-not-train flags
•Analytics events for all above features


20.2 Pro (Phase 2 Differentiators)
Pro Goal
Add the coaching and brand identity features that create daily engagement and justify paid tier upgrades.


•Audition Coach: Self-Tape Coach with timestamps + Pageant Interview Q/A Drill
•Brand Kit: Identity Builder + Social/UGC Toolkit
•Growth Insights: full funnel analytics + personalized improvement nudges
•Image Generation add-ons + Image Edit tools
•Fairness-safe match improvement simulator: 'If you add X, your score improves by Y'
•Video Generation add-ons (fast mode)
•Expiring share links with download control


20.3 Enterprise (Phase 3)
•Human review queue for all AI outputs
•Premium model access (Gemini Pro, GPT-5.2)
•Cinema-quality video generation
•Advanced OPA content policy packs (custom Rego)
•365-day audit retention + compliance export
•Bias monitoring reports (quarterly superadmin)




21. Superadmin Control Plane

The Superadmin AI Studio control plane governs everything that crosses tenant boundaries: providers, models, aliases, global pricing floors, routing policies, and compliance controls.


21.1 Provider Registry
Attribute	Detail
Purpose	Single registry for all upstream AI providers — official and aggregator. No provider can route traffic without an active entry here.
Key Fields	provider_id · name · type (official/aggregator) · capabilities · regions_supported · auth_mode · rate_limits · cost_schema · billing_currency · status · SLA
Controls	Add/edit/disable providers · Rotate API keys via vault integration · Set routing eligibility per region and tenant · Set hard caps (max/sec, max tokens, max output size)
Compliance Flags	Data retention risk · Training usage allowed · PII handling notes · Output retention windows (aggregators)
Validation Required	At least 1 capability enabled · Credentials present · Successful health check — before activation


21.2 Model Catalog
Attribute	Detail
Purpose	Single source of truth for all model versions across all providers. Decouples feature code from model specifics.
Key Fields	model_id · provider_id · modality · quality_tier · pricing · limits · safety settings · availability · deprecation date
Controls	Add new model versions without code change · Mark deprecated with staged migration · Force migrate aliases to new model · Set batch-eligible flag for async jobs
Validation Required	Pricing fields complete · Context/output limits required · Fallback model per alias tier


21.3 Model Aliases Management
Attribute	Detail
Purpose	Abstraction layer — swap models/providers across all features in one config change.
Controls	Create/edit/delete aliases · Reorder candidate priority (drag-drop in UI) · Set fallback chain per region · Enable official-only mode · Define which aliases are available on Free/Pro/Enterprise globally · Run 5% traffic experiments
Validation	Each alias: ≥1 active candidate · At least 1 candidate per key region if global alias


21.4 Global Safety & Policy Packs
Attribute	Detail
OPA / Rego Rules	Open Policy Agent policies defining what inputs/outputs are allowed — enforced at POLICY_CHECK
Content Policy Packs	Curated packs: Standard · Strict · Pageant-safe · Minor-adjacent content rules
Custom Rego	Enterprise tenants can upload custom Rego policies (superadmin reviews and activates)
Sensitive Attribute Rules	Global rules blocking inference of race, religion, caste, sexual orientation, disability — cannot be overridden by any tenant
Moderation Queue	Superadmin ops can review flagged outputs platform-wide


21.5 Superadmin Roles
Attribute	Detail
superadmin_owner	Full access to all controls
superadmin_ops	Routing management + incident response + moderation ops
superadmin_finance	COGS, provider invoices, margin floors, pricing
superadmin_policy	Policy packs, compliance controls, GDPR actions
superadmin_support	Per-tenant overrides and troubleshooting (no global config changes)





— End of TalentOS AI Studio Feature Documentation —
For questions contact the TalentOS Product Team. This document is Confidential.