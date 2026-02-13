1) Matrix: Agency Type → Blueprint → Must-have modules/sub-modules → Default roles
 B1 Roster + Booking • B2 Casting Pipeline • B3 Season/Competition • B4 Brand 	Deals + Deliverables • B5 Course/Cohort • B6 Project + Assets + Approvals • B7 Shift/Staffing • B8 Community + Monetization • B9 Marketplace/Aggregator • B10 Holding/Group (multi-tenant)
Agency / Org Type
Blueprint(s)
Must-have Modules → Sub-modules
Default Roles (tenant-side)
Modeling Agency
B1, (B8 optional)
Talent Profiles+Portfolio approvals; Booking pipeline (inquiry→option hold→confirmed); Availability; Contracts/usage rights; Payments/escrow; Disputes
Owner, Admin, Agent/Booker, Talent Manager, Talent, Finance, Legal, Moderator (if community)
Talent Agency (actors/performers)
B1 + B2
Casting calls intake; Submissions; Auditions (self-tapes); Shortlist/callbacks; Deals/contracts; Escrow/payouts; Disputes
Owner, Admin, Agent, Casting Coordinator, Talent, Finance, Legal
Casting Agency / Casting Director Office
B2
Casting calls; Criteria filters; Submission intake; Shortlist+notes; Audition scheduling; Client viewer room; Offer handoff to escrow
Casting Director, Casting Associate, Coordinator, Client Viewer, Admin
Production House / Studio
B2 + B6
Projects; Casting + booking; Vendor management; Contracts; Milestones/escrow; Asset approvals; Disputes; Analytics
Producer, PM, Casting Lead, Client/Stakeholder Viewer, Finance, Legal, Admin
Influencer Management Agency
B4, (B8 optional)
Creator roster+media kits; Deal rooms; Deliverables tracker; Content approvals; Reporting; Escrow/payouts; Disputes
Owner, Admin, Creator Manager, Brand Partnerships, Content Reviewer, Creator, Analyst, Finance
UGC / Content Production Agency
B6 + B4
Brief→production→edit→deliver pipeline; Asset library/versioning; Client approvals; Deliverables; Invoicing/escrow
Producer, Creative Director, Editor, Client Approver, Admin, Finance
Social Media / Growth Marketing Agency
B4 + B8
Campaigns; Content calendar; Approvals; Community moderation; Sponsored ads reporting (if sold)
Strategist, Community Manager, Analyst, Client Viewer/Approver, Admin
Pageant Organizer / Pageant Agency
B3 + B8 + (B4 optional)
Season builder (rounds/tasks/scoring); Registrations/eligibility; Judges panels; Submissions; Results publishing; Sponsor placements; Payments; Disputes
Owner, Program Director, Admin, Judges, Moderator, Participant Support, Finance
Pageant Training/Grooming Agency
B5 + (B1 optional)
Courses/cohorts; Attendance; Assignments; Certificates; Payments/discounts/loyalty
Owner, Admin, Trainer, Mentor, Student/Talent, Finance
Acting/Modeling Academy / Institute
B5 + (B1 optional)
Courses; Cohorts; Assessments; Certificates; Payments; Student progress analytics
Academic Admin, Trainer, Mentor, Student, Finance
Speaker Bureau / Public Figure Booking
B1
Booking requests; Itinerary; Contracts; Invoicing; Escrow (advance/post-event); Disputes
Booker, Coordinator, Talent/Assistant, Finance, Legal, Admin
Sports / Esports Talent Agency
B1 + B4
Deals/sponsorship pipeline; Appearances; Deliverables; Conflicts; Revenue splits; Escrow
Agent, Deals Manager, Talent, Analyst, Finance, Admin
Event/Concert/Festival Promoter
B1 + B6 + B4
Event ops; Booking; Sponsor placements; Settlements; Vendor deliverables; Payments
Event Director, Ops Manager, Booker, Sponsor Manager, Finance, Admin
Photography/Videography Agency
B6
Booking; Shoot schedules; Asset delivery; Revisions; Usage rights licensing; Escrow
Producer, Photographer, Editor, Client Approver, Admin, Finance
Styling/Makeup/Wardrobe Agency
B1 + (B7 optional)
Service packages; Booking calendar; Team assignment; Payments; Disputes
Lead Stylist, Artists, Scheduler, Finance, Admin
Event Staffing Agency (hosts/promoters/models)
B7 + (B1 optional)
Shift rosters; Check-ins/timesheets; Approvals; Payroll-like payouts; Disputes
Staffing Manager, Coordinator, Staff/Talent, Finance, Admin
Creative Recruitment Agency
B2 + (B6 optional)
Listings; Applications; Shortlist; Offers; Contracts; Placement invoicing/escrow
Recruiter, Account Manager, Candidate, Client, Admin, Finance
Brand / Sponsor Team (as tenant)
B4
Campaign manager; Partner deal rooms; Approvals; Contracts/usage rights; Escrow; Reporting
Brand Manager, Campaign Manager, Legal Approver, Finance, Analyst, Admin
Media Buying / Ad Agency
B4
Multi-client partitions; Campaigns; Reporting; Billing/invoicing; Approval workflows
Account Manager, Media Buyer, Analyst, Client Viewer, Admin, Finance
Talent Network / Community Operator
B8 + (B1 optional)
Communities; Governance/moderation; Discovery; Events; Rewards/loyalty; Sponsor placements
Community Manager, Moderator, Talent/Creator, Sponsor Manager, Admin, Finance
Marketplace / Aggregator (services)
B9
Vendor onboarding; Listings; Booking; Escrow; Disputes; Ratings moderation
Marketplace Admin, Vendor, Client, Moderator, Finance
Holding Company (multi-agency group)
B10 (+ underlying blueprints)
Parent governance; Sub-tenant management; Consolidated analytics; Shared billing; Shared policy packs
Group Admin, Shared Finance, Shared Legal, Agency Admins


2) Role permission sets per blueprint (default “starter packs”)
Permission levels (simple and reusable)
OWN: full control (settings, billing, policies, exports, delete)


ADM: manage modules/users, approve/publish, configure workflows (no tenant billing delete)


OPS: operate day-to-day (create/edit/assign), limited approve


CONTRIB: create content/deliverables, submit work, comment


VIEW: read-only, can comment if allowed


FIN: financial actions (invoices, payouts, escrow), reporting, exports


LEGAL: contract templates, approvals, dispute decisions (if allowed)


MOD: moderation actions in community/content areas



B1) Roster + Booking (Modeling/Talent/Speaker)
Core modules: Profiles+Portfolio, Booking pipeline, Availability, Contracts, Payments/Escrow, Disputes, Analytics
Default roles → permissions
Owner (OWN): everything


Admin (ADM): manage users/roles, configure pipeline stages, approve portfolio, manage templates, exports


Agent/Booker (OPS): create inquiries, holds, bookings; assign talent; negotiate (internal); request contract; initiate escrow


Talent Manager (OPS): roster ops, availability edits, portfolio review requests, internal notes


Talent (CONTRIB): update own profile (approval-gated), upload portfolio (approval-gated), accept/decline bookings, submit deliverables


Finance (FIN): invoices, fee settings (if allowed), escrow release requests, payouts, reconciliation exports


Legal (LEGAL): contract templates, approval gates, dispute adjudication (optional)


Key approval gates (recommended)
Portfolio publish, contract finalization, escrow release, refunds.



B2) Casting Pipeline (Casting/Studio/Recruitment)
Core modules: Casting Calls, Submissions, Shortlist, Auditions, Offers/Bookings, Contracts, Escrow, Disputes
Default roles → permissions
Admin (ADM): configure pipelines, rubrics, forms, privacy settings (redaction), manage users


Casting Director/Producer (OPS+): publish casting calls, shortlist, scoring rubric use, approve final shortlist, trigger offers


Coordinator/Associate (OPS): manage submissions, schedule auditions, request self-tapes, communicate, notes


Client Viewer (VIEW/COMMENT): view shortlist, comment/score (optional), cannot see hidden PII if redaction on


Talent/Candidate (CONTRIB): submit application, upload self-tape, availability updates, accept/decline


Finance (FIN): offer fee details, escrow, payouts


Legal (LEGAL): NDAs, contracts, approvals


Key options
Confidential project mode, role-based redaction, scoring audit logs.



B3) Season/Competition Workflow (Pageants)
Core modules: Season Builder, Registrations, Tasks/Uploads, Judging/Scoring, Results Publishing, Sponsor placements, Payments, Disputes
Default roles → permissions
Owner/Organizer (OWN/OPS+): final authority on season config, publish results, override (audited)


Program Director (OPS+): configure rounds/tasks, manage operations, publish announcements


Admin (ADM): users/roles, templates, eligibility rules, exports


Judges (CONTRIB-SCORE): score assigned rounds, comment, cannot edit config


Moderator (MOD): participant content moderation, report handling


Participant Support (OPS): handle queries, validate docs (if enabled)


Participants (CONTRIB): submit tasks, uploads, pay fees, view schedules


Finance (FIN): fee collection, refunds policy execution, payout/prize flows


Sponsor Manager (OPS): sponsor placements, campaign assets approvals (if sponsors enabled)


Key approval gates
Eligibility approval, judge assignment, scoring lock-in, results publish, sponsor creatives.



B4) Brand Deals + Deliverables (Influencer/Brand/Sponsorship/Ads)
Core modules: Deal Rooms, Briefs, Deliverables tracker, Content approvals, Reporting, Contracts/Usage rights, Escrow/Payouts
Default roles → permissions
Admin (ADM): configure deal templates, deliverable types, approval chain, users


Brand Partnerships/Deals Manager (OPS+): create deals, negotiate terms, assign creators, approve deliverables


Creator Manager (OPS): manage creator roster, schedules, ensure completion


Content Reviewer/Compliance (OPS/MOD): approve/reject content, flag risks, enforce brand safety rules


Creator (CONTRIB): submit drafts, revisions, final content, performance screenshots/links


Brand Client Viewer/Approver (VIEW/APPROVE): approve final assets, view reports (no roster admin)


Analyst (VIEW+): reporting dashboards, exports


Finance (FIN): escrow milestones, payouts, invoices, refunds (policy-gated)


Legal (LEGAL): usage rights clauses, contract approval, dispute decisions


Key options
Multi-step approvals (creator → agency → brand), revision limits, usage rights windows.



B5) Course/Cohort (Academy/Training)
Core modules: Courses, Cohorts, Lessons, Assignments/Quizzes, Attendance, Certificates, Payments/Discounts, Analytics
Default roles → permissions
Academic Admin (ADM): course creation, cohort scheduling, trainer assignment, certificate templates


Trainer (OPS/CONTRIB): create lessons, assignments, grade, mark attendance


Mentor (CONTRIB): feedback, office hours, partial grading (optional)


Student (CONTRIB): enroll, submit assignments, view progress, pay fees


Finance (FIN): fee plans, discounts, refunds, reconciliation


Moderator (MOD): community moderation if course community enabled


Key gates
Certificate issuance requires completion rules + trainer approval.



B6) Project + Assets + Approvals (Production/UGC/Photo/Creative)
Core modules: Projects, Tasks, Asset library, Versioning, Reviews/Approvals, Milestones/Escrow, Disputes
Default roles → permissions
Producer/PM (OPS+): create projects, assign tasks, set milestones, approve final deliverables


Creative Director (OPS+): creative approvals, revision direction, quality gate


Editor/Contributor (CONTRIB): upload versions, respond to feedback, deliver assets


Client Approver (VIEW/APPROVE): approve/reject deliverables, comment, no internal settings


Admin (ADM): templates, roles, workflow settings


Finance (FIN): milestone invoicing, escrow release, payouts


Legal (LEGAL): contracts, licensing/usage rights approvals


Key options
Revision limits, SLA timers, watermark previews, rights licensing.



B7) Shift/Staffing (Event staffing)
Core modules: Jobs/Shifts, Rosters, Check-ins, Timesheets, Approvals, Payouts, Disputes
Default roles → permissions
Staffing Manager (OPS+): create shifts, assign staff, approve timesheets, enforce penalties (policy-gated)


Coordinator (OPS): roster ops, communications, check-in verification


Staff/Talent (CONTRIB): accept shift, check-in/out, submit proof, dispute timesheets


Client Supervisor (VIEW/APPROVE optional): confirm attendance, rate staff


Finance (FIN): payouts, adjustments (policy-gated), exports


Admin (ADM): templates, role settings, compliance fields



B8) Community + Monetization (Network/community operator)
Core modules: Spaces, Governance, Moderation, Events, Rewards/Loyalty, Sponsored placements (optional)
Default roles → permissions
Community Admin (ADM): create spaces, rules, automation rules, member management


Moderator (MOD): reports queue, remove content, mute/ban (audited), escalate disputes


Creator/Talent (CONTRIB): post/comment, host events (optional), earn rewards


Member (CONTRIB limited): participate based on rules


Sponsor Manager (OPS): sponsor posts/placements, approvals workflow


Analyst (VIEW+): engagement analytics


Finance (FIN): paid memberships/credits/refunds (if enabled)


Key options
Strike system, auto-moderation triggers, membership tiers.



B9) Marketplace/Aggregator (vendors/services)
Core modules: Vendor onboarding, Listings, Booking, Escrow, Ratings moderation, Disputes
Default roles → permissions
Marketplace Admin (OWN/ADM): vendor verification, listing governance, fee rules


Vendor (CONTRIB/OPS): manage listings, accept bookings, deliver work, request payout


Client (CONTRIB): book services, approve deliverables, raise disputes


Moderator (MOD): handle reviews abuse, content reports


Finance (FIN): settlement, payouts, refunds, reconciliation



B10) Holding/Group (multi-agency)
Core modules: Sub-tenant management, Shared policy packs, Consolidated analytics, Shared billing, Shared vendor/talent pools (optional)
Default roles → permissions
Group Admin (OWN): create/manage sub-tenants, apply policy packs, consolidated reporting


Shared Finance (FIN+): cross-tenant billing, settlement, exports


Shared Legal (LEGAL+): contract templates, dispute escalation, compliance exports


Agency Admin (ADM): operate their tenant within group constraints




