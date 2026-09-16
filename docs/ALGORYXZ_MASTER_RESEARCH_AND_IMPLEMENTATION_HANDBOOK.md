# ALGORYXZ MASTER RESEARCH & IMPLEMENTATION HANDBOOK

**Document Version:** 1.0.0  
**Effective Date:** September 2026  
**Status:** Comprehensive Knowledge Companion to `ALGORYXZ_OPERATING_CONTRACT_V1.md`  
**Classification:** Internal Engineering & Operational Master Reference

---

## 0. FORENSIC SOURCE INVENTORY

Before compiling this handbook, a complete forensic inventory of all research, audit, and decision documents across the Algoryxz workspace and active agent brain directories was conducted.

| Source Identifier | File Path / Location | Classification | Authority Level | Primary Scope | Status & Contradictions Resolved |
|---|---|---|---|---|---|
| **SRC-01** | `ALGORYXZ_OPERATING_CONTRACT_V1.md` | **CANONICAL** | Highest Operating Authority | Operational constitution, governance, lifecycle, pricing, stack | **Active Source of Truth.** Overrides all prior documents. |
| **SRC-02** | `algoryxz-phase1-research.md` | **HISTORICAL RESEARCH** | Deprecated / Contextual | Phase 1 initial business model, pricing, founder split | Initial claim of "one founder invoices, splits privately" was struck down by SRC-03. PAN/TAN post-inc claim was struck down. |
| **SRC-03** | `algoryxz-phase1-addendum.md` | **CORRECTION / ADDENDUM** | High (supersedes SRC-02) | LLP FiLLiP PAN/TAN, AOP tax risks, Care ₹999 floor, AI leverage KPIs | Corrected LLP PAN auto-allotment via FiLLiP 2022; introduced AOP joint liability risk; established ₹999 human-touch floor. |
| **SRC-04** | `algoryxz-phase2-gtm.md` | **HISTORICAL RESEARCH** | Deprecated / Contextual | Early GTM draft, client flows, channel ranking | Drafted initial warm-network approach; contained stale mobile stat and loose concept project ceiling. |
| **SRC-05** | `algoryxz-phase2-gtm-v2.md` | **HISTORICAL RESEARCH** | Medium (supersedes SRC-04) | GTM expansion, positioning vs alternatives, website spec | Corrected mobile stats (64.8% per StatCounter Aug 2026); scoped DPDP Act phased commencement; added Google Maps prospecting. |
| **SRC-06** | `algoryxz-phase3-infra.md` | **HISTORICAL RESEARCH** | Medium (supersedes earlier infra) | Cloudflare, Vercel, Netlify, database & storage pricing | Initial draft contained inaccurate "Cloudflare Pages project transfer" assumption and blended client pass-throughs into studio OPEX. |
| **SRC-07** | Phase 3 Final Decision Record | **CORRECTION / DECISION** | High (supersedes SRC-06) | Cloudflare recreation handover, 3-bucket cost model, Care economics v2 | Proved native Pages transfer does not exist; established 3-bucket cost architecture; fixed Resend limits (3 domains free). |
| **SRC-08** | `o-travelz/AGENTS.md` & `docs/v4/*` | **REUSABLE SKILL SOURCE** | Reference Architecture | Reusable engineering disciplines, multi-agent bounds, QA evidence | Extracted 10 generalizable engineering practices (anti-vibe-code, physical device evidence, evidence > reports). |

### Conflict Resolution Protocol
Whenever research sources diverge, precedence is strictly enforced:  
$$\text{Repository Code \& Contracts} \succ \text{Operating Contract V1} \succ \text{Master Handbook} \succ \text{Phase 3 Decision Record} \succ \text{Phase Addenda} \succ \text{Phase 1–3 Drafts}$$

---

## 1. REUSABLE SKILLS FROM PAST PROJECTS

Algoryxz inherits proven multi-agent engineering patterns from large-scale software projects previously engineered by the founders (most notably **O-TRAVELZ V4**, an intelligent cultural atlas and transit platform for Odisha). 

Rather than copying O-TRAVELZ’s product architecture (which involved Kotlin Multiplatform, GTFS transit engines, and spatial PostGIS databases), Algoryxz extracts its **meta-engineering governance**:

1. **Repository Evidence Over Completion Reports:** An agent or founder saying *"feature complete"* is meaningless without reproducible evidence: build logs, passing linters, preview URLs, and physical device captures.
2. **Diagnose Before Editing:** Deep inspection of existing ASTs, dependencies, and git logs must precede any code edit. Speculative editing causes compounding regressions.
3. **Task Completion Contract:** A task is complete only when verified by an independent automated check or an external human gate.
4. **Shared File Collision Policy:** High-contention files (design tokens, global CSS, package manifests, route definitions) must have single, explicit human owners. Parallel agents are barred from simultaneous edits on shared files.
5. **Non-Overlapping Work Boundaries:** Parallel agents must operate on disjoint sub-trees or isolated feature branches with strict interface contracts.
6. **Physical Hardware Validation:** Synthetic browser resize and mobile emulation miss critical touch targets, viewport zoom quirks, font rendering bugs, and low-end CPU jank. Mobile web must be tested on real devices.
7. **Rollback & Recovery Checkpoints:** Before any risky migration, dependency upgrade, or production push, a discrete rollback path (git tag, SQL dump, or Cloudflare deployment rollback) must be verified.
8. **Anti-Vibe-Code Rules:** Strict rejection of AI-generated cliches: purple/neon gradients, glassmorphism on readability surfaces, fake metric tickers, and generic placeholder copy.
9. **Allowed UI Network States as Truth:** Interfaces must display authentic system states (`CONTENT`, `LOADING`, `OFFLINE`, `ERROR`, `STALE`). Speculative "AI thinking" spinners or fake progress bars are prohibited.
10. **Canonical Contracts Over Duplicated Assumptions:** If an API shape, token name, or business rule changes, it changes in a single canonical source of truth, never duplicated across client code.

---

## 2. SKILL ADOPTION MATRIX

Every engineering candidate from prior projects was audited against Algoryxz’s studio requirements (three founders, rapid client turnaround, low overhead):

| Skill / Practice | Provenance | Classification | Algoryxz Implementation | Scope & Necessary Modifications |
|---|---|---|---|---|
| **Repository Forensics & Diagnostic Audit** | O-TRAVELZ V4 | **ADOPT** | Pre-work git & AST scan | Run before touching any client codebase; inspect commit history and working tree before proposing changes. |
| **Evidence-First QA Gates** | O-TRAVELZ V4 | **ADOPT** | Physical Mobile QA Gate | Akriti tests every preview deploy on a physical Android and iOS device. Screenshots required before production merge. |
| **Shared File Collision Guard** | O-TRAVELZ V4 | **ADOPT** | Token & Manifest Governance | Design tokens owned by Deeptiman; schema/routes owned by Smarak. Parallel agents barred from touching `tokens.css` or `routes.ts`. |
| **Semantic 3-Tier Design Tokens** | O-TRAVELZ V4 | **ADOPT** | Visual Design Foundation | Primitive (palette) $\rightarrow$ Semantic (surface, text) $\rightarrow$ Component tokens. Guarantees theme consistency across client sites. |
| **Anti-Vibe-Code Aesthetic Filter** | O-TRAVELZ V4 | **ADOPT** | Brand & UI Review | Rejects neon blur circles, purple AI glows, and filler copy. Enforces clean typography and high editorial contrast. |
| **Automated Dependency Vulnerability Gate** | O-TRAVELZ V4 | **ADAPT** | CI Build Audit | Scaled down: run `npm audit` and Dependabot in GitHub Actions. Block production merge on critical CVEs only. |
| **Cloudflare Zero-Egress Storage Pattern** | O-TRAVELZ V4 | **ADAPT** | Client Media Pipeline | Adapted from map tile delivery to wedding/event photo hosting via Cloudflare R2 + Worker signed upload URLs. |
| **Database Migration Dry-Run Gate** | O-TRAVELZ V4 | **ADAPT** | Custom Systems Backend | For Custom Systems: DB migrations require dry-run verification against local/staging branch before Smarak executes live. |
| **Kotlin Multiplatform Parity Core** | O-TRAVELZ V4 | **REJECT** | N/A | High complexity. Algoryxz builds modern web (HTML/CSS/JS/TS/React/Next.js/Astro), not native mobile dual-targets. |
| **Complex Spatial Graph Engines (GTFS/PostGIS)**| O-TRAVELZ V4 | **REJECT** | N/A | Algoryxz client sites do not need complex geographic graph solvers. Standard Cloudflare D1 / Neon Postgres suffices. |
| **Multi-Agent Event Bus & Leases** | O-TRAVELZ V4 | **DEFER** | Phase 4 Agent Bridge | Premature for a 3-person studio at launch. Simple branch-per-task model with human gate is sufficient. |

---

## 3. EXECUTIVE SUMMARY

### The Studio
Algoryxz is a high-craft, high-velocity digital studio based in Bhubaneswar, Odisha, founded by Smarak (Engineering), Deeptiman (Design), and Akriti (Operations). 

### The Market Problem
Small businesses, creators, and families celebrating milestone events are caught between two bad options:
1. **The DIY Illusion (Wix, Squarespace, generic AI builders):** Requires hours of frustrating layout wrangling, produces template-looking output, fails when custom integrations (UPI, custom bookings) are needed, and leaves the owner alone when things break.
2. **The Agency & Commodity Freelancer Trap:** Traditional agencies charge enterprise markups, move slowly through layers of account managers, and deliver dated WordPress bloat. Commodity gig freelancers on Fiverr often deliver brittle code with zero design cohesion and vanish when revisions are needed.

### The Algoryxz Solution
Algoryxz delivers agency-grade design and engineering at transparent, productized prices with turnaround times measured in days, not months. We achieve this by using internal AI coding agents and automated serverless pipelines as our engine room, while presenting a completely human-centric, accountable studio interface to the client.

### Customer Lanes
* **Celebrations (Wedge):** Emotional milestone portals (weddings, proposals, birthdays) sold as fixed productized packages. Rapid turnaround, high margin per founder hour, and powerful word-of-mouth distribution.
* **Business & Brand (Recurring Engine):** Polished digital storefronts for cafés, salons, gyms, creators, and local businesses. Sold as a base build with modular add-ons, funneling into recurring monthly Care plans.
* **Custom Systems (High-Value Capability):** Bespoke booking workflows, authenticated dashboards, dynamic databases, and automation systems. Individually scoped and milestone-priced.

### Commercial Strategy
1. **One-Time Build + Bounded Recurring Care:** Upfront fees capture delivery value; ₹499–₹2,499/month Care plans create recurring revenue without unbounded support liabilities.
2. **Disciplined Scope:** Fixed 2-revision standard, zero-rollover maintenance caps, and transparent upfront payment terms protect team capacity while in college.
3. **Capital-Efficient Operations:** Cloudflare Pages/Workers/R2 and Neon/D1 enable near-zero infrastructure hosting overhead, scaling directly with revenue.

---

## 4. RESEARCH TIMELINE & SYNTHESIS: PHASE 1 (BUSINESS & ECONOMICS)

Phase 1 established the financial, operational, and legal baseline of Algoryxz.

```
PHASE 1 INQUIRY FLOW
[Agency vs Product vs Studio?] ──► Decision: Productized Service Studio
[Weddings vs Businesses?]     ──► Decision: Celebrations (Wedge) + Business (MRR)
[Entity on Day 0?]            ──► Decision: Partnership Deed / Informal Validation First
[Page-Count Pricing?]         ──► Decision: Struck Down ──► 8-Axis Scoping Engine
[Care Plan at ₹499?]          ──► Decision: Struck Down ──► ₹999 Minimum for Human Touch
```

### Key Questions, Evidence & Locked Decisions

#### 1. What entity and commercial model fits three college founders?
* **Research & Evidence:** Pure freelance agencies fail on lack of corporate track record; pure SaaS software platforms burn months before first revenue. Search confirmed productized service studios (fixed scope, fast delivery, clear deliverables) capture early trust without long sales cycles.
* **Decision:** Launch as a **productized service studio**.
* **Entity Pathway:** Day 0 validation under a simple Partnership Deed; incorporate as an **LLP (Limited Liability Partnership)** once revenue and partner commitment are proven. SPICe+ / FiLLiP MCA updates confirmed that PAN and TAN are allotted automatically upon incorporation.
* **AOP Tax Warning:** Informal splitting of revenue received under one founder's PAN risks classification as an Association of Persons (AOP) under Indian Income Tax law (*CIT v. Indira Balkrishna*). The first paid revenues require a written partnership deed and dedicated bookkeeping.

#### 2. How should the studio price, and is page count an acceptable metric?
* **Research & Evidence:** Page count measures content volume, not engineering risk or design effort. A 3-page custom booking app with payment integration requires $10\times$ the effort of a 10-page static brochure.
* **Decision:** **Page-count pricing is strictly rejected.** Replaced by an **8-Axis Internal Scoping Engine** (Design, Functionality, Integrations, Content, Backend, Risk, Urgency, Business Value).

#### 3. Can a ₹499/month maintenance plan include human support?
* **Research & Evidence:** Modeling founder labor at a modest ₹500/hour shadow rate revealed that a single 20-minute client support exchange wipes out the gross margin of a ₹499 fee.
* **Decision:** **₹499 is strictly infra-only (Care Lite).** Any tier including human-touch edits must start at **₹999/month (Care)** with a strict 30-minute monthly cap and zero rollover.

#### 4. How does AI affect unit economics?
* **Research & Evidence:** AI typing speed does not equal client satisfaction. If AI generates brittle code requiring human rework, effective hourly return collapses.
* **Decision:** Track **Effective Blended Hourly Return** = $(\text{Revenue} - \text{AI Spend}) / \text{Human Hours}$. Baseline target is ₹420–₹915/hr. AI rework must be isolated and logged as a distinct health metric.

---

## 5. RESEARCH TIMELINE & SYNTHESIS: PHASE 2 (GO-TO-MARKET)

Phase 2 defined positioning, customer acquisition, website architecture, and early sales execution.

### Key Insights & Strategic Decisions

```
                           GTM FUNNEL ARCHITECTURE
                           
  ACQUISITION CHANNELS:
  Clients 1–3   ──► Warm Personal Orbit + High-Fidelity Custom Mockup
  Clients 4–10  ──► Direct Local Outreach + Google Maps Prospecting + Instagram DMs
  Clients 11–25 ──► Vendor Partnerships (Wedding Planners/Photographers) + Local SEO
  
  POSITIONING ENGINE:
  "Why Us?" ────► NOT "AI-Powered", NOT "Cheap Freelancer", NOT "Bloated Agency"
                  IS: "A small, founder-led studio built like a modern engineering team."
```

#### 1. Why Algoryxz instead of Wix, Fiverr, local agencies, or prompting Claude?
* **Research Established:**
  * Local Bhubaneswar agencies position on generic buzzwords ("leading IT solutions"), 10+ years of legacy, and commodity price dumping (₹4,999 WordPress templates). None offer transparent productized scopes, modern edge performance, or named founder access.
  * DIY builders (Wix/Framer) create friction for business owners who lack design taste, responsive debugging skills, or payment integration knowledge.
  * Gig platforms (Fiverr) offer fragmented labor: a designer who cannot code, or a coder who cannot design.
* **Algoryxz Positioning:** *"A studio-sized team with engineering depth."* We provide Deeptiman (Design) and Smarak (Engineering) working in lockstep, with Akriti enforcing QA and delivery deadlines. Clients do not buy AI; they buy finished accountability.

#### 2. Portfolio Strategy with Zero Real Clients
* **Research Established:** B2B buyers and event couples want to see proof of aesthetic taste and functional reliability. However, demanding 6 full concept projects before selling creates an unnecessary delay.
* **Decision:** **Project 000 (the Algoryxz studio site) + 2–3 exceptional live concept projects** is the threshold to begin active outreach.
* **Concept Disclosure:** Clear, confident tagging: *"Concept Project — Built to demonstrate our design and engineering process."* Fictional brand names only; never mock up real local businesses without authorization.

#### 3. Client Acquisition Sequence (1 to 25 Clients)
* **Clients 1–3:** Warm personal/family/alumni orbit. Time-boxed free mockup (max 3 hours) permitted *only* for the first 3 clients as a trust-wedge in exchange for portfolio rights, video testimonials, and referral commitments.
* **Clients 4–10:** Google Maps prospecting (identifying local businesses with missing websites, broken mobile menus, or unoptimized listings) + physical visits + targeted Instagram DMs.
* **Clients 11–25:** Formal vendor referral partnerships (10% one-time referral fee to wedding planners, event photographers, and print shops) + local SEO landing pages. Zero paid ads during this stage.

---

## 6. RESEARCH TIMELINE & SYNTHESIS: PHASE 3 (INFRASTRUCTURE & OPERATIONS)

Phase 3 established the technical stack, account boundaries, and hosting economics.

```
                    INFRASTRUCTURE TOPOLOGY & BOUNDARIES
                    
      [Client Custom Domain] (Client-Owned Registrar)
                 │
                 ▼
      [Cloudflare DNS + Edge] (Managed by Algoryxz or Client)
                 │
        ┌────────┴────────────────────────┐
        ▼                                 ▼
  [Cloudflare Pages]              [Cloudflare Workers / R2]
  (Static HTML/JS Assets)         (Form Handlers & Media Uploads)
        │                                 │
        ▼                                 ▼
  [Resend API]                    [Neon / Cloudflare D1]
  (Transactional Mail)            (RSVP & Event Database)
```

### Corrections Applied in the Closure Pass

#### 1. The Cloudflare Pages Handover Correction
* **Finding:** Cloudflare official documentation confirms there is **no native project transfer mechanism** for Pages across accounts. Furthermore, Cloudflare forbids linking the same Git repository to multiple Cloudflare accounts simultaneously.
* **Corrected Handover Procedure:**
  1. Export/transfer repository to client GitHub organization.
  2. Delete Pages project from Algoryxz Cloudflare account to unbind the Git repository.
  3. Recreate Pages project in client Cloudflare account, reconnect repository, recreate environment variables, Functions bindings, and custom domain routing.

#### 2. The Three-Bucket Cost Accounting Model
To eliminate misleading financial projections, costs are strictly partitioned:
* **Bucket A: Studio OPEX** — Studio domain, Bitwarden Teams ($12/mo for 3 founders), GitHub Team ($12/mo when triggered), internal AI tool subscriptions, Zoho Books (Free).
* **Bucket B: Managed Client Infrastructure** — Workers Paid ($5/mo), Resend Pro ($20/mo), Better Stack Paid ($29/mo), R2 overages. Funded entirely by recurring Care Plan MRR.
* **Bucket C: Client-Direct Infrastructure** — Client domains, dedicated client Supabase Pro ($25/mo), client payment gateway fees. Billed directly to clients, never on Algoryxz P&L.

#### 3. Provider Verdicts Summary
* **Cloudflare Pages:** **USE (Default)** — Commercial use explicitly permitted on free tier, unmetered bandwidth, global edge CDN.
* **Vercel:** **USE WITH LIMITS** — Hobby tier strictly bans commercial client sites. Pro plan ($20/seat/mo = $60/mo for 3 founders) used only if a client explicitly funds a complex Next.js SSR architecture.
* **Netlify:** **AVOID** — Hard credit caps (300 credits/mo) create catastrophic mid-month downtime risk.

---

## 7. COMPETITIVE DIFFERENTIATION MATRIX

| Alternative | What They Offer | Why Prospects Choose Them | Where They Fail / The Client Pain | The Algoryxz Differentiation |
|---|---|---|---|---|
| **Wix / Squarespace** | All-in-one DIY drag-and-drop website builders | Cheap upfront; perceived ease of setup | Template look; clunky mobile layouts; rigid logic; steep recurring subscription traps; client must build it themselves | *"We build it properly while you run your business. Custom design, zero template bloat, full asset ownership."* |
| **Framer / Webflow** | Designer-oriented visual web publishing | High-end visual interactions; modern typography | Framer lacks backend/India payment depth; Webflow has steep learning curve and expensive CMS tiers; client must still maintain it | *"Agency-grade design execution with bespoke backend logic (RSVP, auth, custom bookings) that no-code builders cannot touch."* |
| **Fiverr / Cheap Freelancers (₹3k–8k)** | Low-cost gig marketplace development | Lowest headline sticker price | Fragmented talent (designer who can't code or developer who can't design); zero accountability; vanishes post-launch | *"A dedicated, named 3-founder studio. Design direction, engineering rigor, and QA in lockstep. Written contracts and reliable support."* |
| **Local Agencies (Bhubaneswar)** | Full-service traditional digital agencies (10+ yrs) | Perceived safety of established corporate entity | Slow turnaround (4–8 weeks); junior staff relay; bloated WordPress stacks; opaque pricing; generic corporate templates | *"Founder-direct collaboration. Modern edge-hosted stack (loads in milliseconds). Delivered in 3–14 days at productized pricing."* |
| **DIY Prompting (Claude / Codex / ChatGPT)** | Raw AI coding models and scaffolding tools | Free or cheap for tech-savvy founders | Prompting is not the bottleneck: judgment, responsive QA, cross-browser debugging, DNS cutover, and maintenance are | *"Prompting generates code, not a business asset. We supply the judgment, aesthetic taste, system integration, and accountability."* |

---

## 8. CUSTOMER PERSONAS & TARGET MODELS

### Persona 1: The Milestone Celebration Buyer
* **Profile:** Couples planning weddings, individuals organizing proposals, milestone anniversaries, or curated birthdays.
* **Core Problem:** Standard wedding paper cards lack dynamic scheduling; WhatsApp PDF invites look cheap; foreign wedding builders (Zola/The Knot) do not fit Indian multi-day events (Mehendi, Sangeet, Pheras) or WhatsApp sharing.
* **Desired Outcome:** An elegant, bespoke mobile experience that wows guests, tracks RSVPs with dietary/event breakdown, and works flawlessly on WhatsApp link previews.
* **Budget Sensitivity:** Moderate to Low (weddings are high-budget emotional milestones).
* **Trust Barrier:** *"Will this be ready before our event date? Is my personal media safe?"*
* **What to Show:** Live, clickable wedding demo with multi-event tabs, RSVP CSV export, countdown timer, and photo gallery.
* **What NOT to Sell:** Complex technical dashboards, multi-year maintenance retainers, or generic corporate CMS features.
* **Recurring Opportunity:** Light archiving (Care Lite ₹499/mo after Year 1) or anniversary microsites.

### Persona 2: The Local Hospitality / Retail Owner (Café, Salon, Gym, Clinic)
* **Profile:** Independent business owner in Bhubaneswar with a strong local physical presence, active Instagram, but no proper website or broken Google Maps presence.
* **Core Problem:** Instagram bio says *"DM to order/book"*; losing discovery to competitors; menu only exists as a blurry photo or WhatsApp PDF.
* **Desired Outcome:** A fast, gorgeous mobile-first storefront that displays services/menus, features reviews, links Google Maps directions, and drives direct phone/WhatsApp booking inquiries.
* **Budget Sensitivity:** High initially (protecting immediate cash flow); willing to pay once local ROI is obvious.
* **Trust Barrier:** *"I don't understand technology. What if I need to change my menu prices?"*
* **What to Show:** Mobile demo of a local café with instant tap-to-call, tap-for-directions, clean categorized menu, and 90+ Lighthouse speed.
* **What NOT to Sell:** Over-engineered custom web apps, complex self-hosted headless CMSs, or enterprise SEO packages.
* **Recurring Opportunity:** High (Care ₹999/mo for menu updates and Google Business Profile maintenance).

### Persona 3: The High-Ticket Custom System Buyer (Startup / Growing Business)
* **Profile:** Founder of a service business, boutique clinic, or funded event requiring automated client intake, custom bookings, client portals, or member dashboards.
* **Core Problem:** Off-the-shelf SaaS tools (Calendly, Shopify, generic booking plugins) charge high monthly seat fees, lack Indian payment integration, or don't fit unique operational workflows.
* **Desired Outcome:** A tailored web application with user authentication, custom database storage, Razorpay payment capture, and an administrative dashboard.
* **Budget Sensitivity:** Low (evaluated against business efficiency and software replacement cost).
* **Trust Barrier:** *"Can three college founders handle security, database integrity, and production uptime?"*
* **What to Show:** Architecture diagrams, database schemas, Row Level Security (RLS) policies, staging deployment workflows, and clean code repositories.
* **What NOT to Sell:** Fixed-price commodity website packages without written technical specifications.
* **Recurring Opportunity:** High (Grow ₹2,499/mo or custom support retainers).

---

## 9. OFFER ARCHITECTURE & SCOPING ENGINE

```
                            ALGORYXZ OFFER MENU
                            
  ┌───────────────────────────┐     ┌───────────────────────────┐
  │   CLASS C: CELEBRATIONS   │     │ CLASS B: BUSINESS & BRAND │
  ├───────────────────────────┤     ├───────────────────────────┤
  │ Essential   ─► ₹2.5k–₹3.5k│     │ Personal/Creator─► ₹5k–₹8k│
  │ Complete    ─► ₹5k–₹7.5k  │     │ Local Business  ─► ₹10k–18│
  │ Full Wedding─► ₹8k–₹15k   │     │ Brand / Startup ─► ₹18k–35│
  │ (Productized, Fast Turn)  │     │ (Base Package + Add-ons)  │
  └───────────────────────────┘     └───────────────────────────┘
                │                                 │
                └────────────────┬────────────────┘
                                 ▼
                ┌─────────────────────────────────┐
                │     CLASS X: CUSTOM SYSTEMS     │
                ├─────────────────────────────────┤
                │ Custom Booking / Auth / App     │
                │ Individually Scoped (₹50,000+)  │
                │ Milestone-Based Payments Only   │
                └─────────────────────────────────┘
```

### The 8-Axis Complexity Scoring Engine
Before issuing any quote, the Client Owner and Smarak score the project across 8 axes (1 to 5 points each). The composite score ($8–40$) determines the pricing band within the category:

$$\text{Project Complexity Score} = \sum_{i=1}^{8} \text{Axis}_i \quad (8 \le \text{Score} \le 40)$$

1. **Design Depth (1–5):** Template-adjacent (1) to Bespoke Art Direction & Motion (5).
2. **Functionality (1–5):** Static informational (1) to Multi-step dynamic calculators/forms (5).
3. **Integrations (1–5):** Basic link/embed (1) to Razorpay, SMS, WhatsApp API, Calendar sync (5).
4. **Content Burden (1–5):** Client supplies complete copy/media (1) to Studio must write, curate, edit (5).
5. **Backend / Data (1–5):** No database (1) to Relational Postgres, RLS, Admin panel, Auth (5).
6. **Risk & Data Sensitivity (1–5):** Public brochure (1) to PII guest data, customer transaction logs (5).
7. **Urgency & Turnaround (1–5):** Standard 3-week timeline (1) to Sub-5-day rush turnaround (5).
8. **Client Business Value (1–5):** Personal hobby (1) to Core revenue-generating business asset (5).

---

## 10. UNIT ECONOMICS & METRIC FORMULAS

### Theoretical Economic Baseline per Project Class

| Project Tier | Target Price | Direct Costs (PG, Hosting Share) | Budgeted AI Spend | Budgeted Founder Hours | Blended Hourly Yield Target |
|---|---|---|---|---|---|
| **Class C: Micro (Proposal)** | ₹3,000 | ~₹71 (PG fee) | ₹100 | 4.0 hrs | **₹707 / hr** |
| **Class C: Full Wedding** | ₹10,000 | ~₹236 (PG fee) | ₹250 | 12.0 hrs | **₹792 / hr** |
| **Class B: Local Business** | ₹15,000 | ~₹354 (PG fee) | ₹400 | 18.0 hrs | **₹791 / hr** |
| **Class B: Brand / E-commerce** | ₹30,000 | ~₹708 (PG fee) | ₹800 | 32.0 hrs | **₹890 / hr** |
| **Class X: Custom Web App** | ₹60,000 | ~₹1,416 (PG fee) | ₹1,500 | 65.0 hrs | **₹878 / hr** |

### The 5 Studio Health KPI Formulas

1. **Effective Blended Hourly Return ($R_{\text{eff}}$):**
   $$R_{\text{eff}} = \frac{\text{Project Revenue} - \text{Direct Expenses} - \text{AI Spend}}{\text{Total Human Founder Hours}}$$
   *Target:* $\ge ₹500/\text{hr}$. If this drops below ₹400/hr, scope control failed.

2. **AI Cost Ratio ($C_{\text{AI}}$):**
   $$C_{\text{AI}} = \frac{\text{AI API \& Subscription Costs}}{\text{Project Revenue}} \times 100$$
   *Target:* $< 5\%$. If $C_{\text{AI}} > 8\%$, agent context windows or model routing require intervention.

3. **AI Rework Rate ($W_{\text{rework}}$):**
   $$W_{\text{rework}} = \frac{\text{Human Hours Spent Fixing AI Output}}{\text{Total Human Dev Hours}} \times 100$$
   *Target:* $< 15\%$. If human developers spend $> 20\%$ of their time rewriting AI hallucinated code, switch the task to manual coding or smaller, constrained prompts.

4. **Revision Burden Index ($B_{\text{rev}}$):**
   $$B_{\text{rev}} = \frac{\text{Hours Spent on Revisions}}{\text{Budgeted Build Hours}} \times 100$$
   *Target:* $< 25\%$. If $B_{\text{rev}} > 35\%$, discovery alignment was deficient.

5. **Post-Launch Defect Rate ($D_{\text{post}}$):**
   $$D_{\text{post}} = \text{Bugs Reported in First 30 Days Post-Launch}$$
   *Target:* $\le 2$ minor bugs per project; 0 critical production bugs.

---

## 11. CARE & RECURRING REVENUE OPERATING MODEL

### Tier Comparison Matrix

| Policy Dimension | Care Lite (₹499/mo) | Care (₹999/mo) | Grow (₹2,499/mo) |
|---|---|---|---|
| **Intended Customer** | Past wedding clients, dormant seasonal landing pages | Cafés, salons, clinics, active local businesses | Growing startups, high-traffic creator storefronts |
| **Infrastructure Included** | Cloudflare Pages management, SSL auto-renewal, 3-min Better Stack uptime monitoring | Care Lite + Pooled Resend transactional mail + monthly form health check | Care + 1-min priority uptime monitoring + quarterly SEO/Search Console review |
| **Included Developer Time** | **0 Minutes (Zero human touch)** | **Up to 30 minutes / month** | **Up to 2 hours / month** |
| **Eligible Edits** | None (Any manual edit quoted at ₹800/hr) | Text changes, phone/hours updates, single image swap, menu price edit | New promotional section, landing page tweak, seasonal banner, analytics setup |
| **Explicit Exclusions** | Any manual development or content editing | No layout redesigns, no new pages, no DB alterations, no complex forms | No multi-page overhauls, no custom app feature development |
| **Response SLA** | 48–72 hours (Business days) | 24–48 hours (Business days) | 24 hours (Business days) |
| **Rollover Rule** | **Zero rollover** | **Zero rollover (Use-it-or-lose-it)** | **Zero rollover (Use-it-or-lose-it)** |
| **Overage Billing** | Quoted upfront at ₹800/hr | ₹400 per 30-min block (Client approval required) | ₹400 per 30-min block (Client approval required) |

### Why "Unlimited Maintenance" is Strictly Prohibited
Unlimited support retainers create catastrophic asymmetric risk for small teams. A single demanding client requesting daily color tweaks and font experiments consumes 15 hours in a month, destroying the team's capacity for coursework and new client delivery. Maintenance must remain bounded, capped, and predictable.

---

## 12. LEGAL, TAX & BUSINESS STRUCTURE

*The following reflects research and operational strategy as of September 2026. Items requiring professional certification are explicitly marked.*

1. **Founding Entity Pathway:**
   * **Stage 0 (Validation / Clients 1–5):** Formal written **Partnership Deed under the Indian Partnership Act, 1932** executed among Smarak, Deeptiman, and Akriti. Establishes profit/loss splits, IP assignment to Algoryxz, and dispute resolution. Avoids the tax ambiguity of informal personal accounts.
   * **Stage 1 (Scaling / 5+ Clients):** Incorporation as a **Limited Liability Partnership (LLP)** via MCA SPICe+ / FiLLiP. Offers limited liability protection, lower annual compliance overhead (~₹10,000/yr) compared to a Pvt Ltd, and zero dividend distribution tax.
2. **GST Thresholds & Strategy:**
   * In Odisha (Normal Category State), mandatory GST registration applies to service providers once annual turnover crosses **₹20 Lakhs**.
   * *Decision:* **Defer voluntary GST registration** until reaching ~₹15 Lakhs turnover or until an enterprise client explicitly demands GST input tax credit (ITC). Early registration creates monthly filing overhead with zero early benefit.
3. **Udyam / MSME Registration:**
   * Free self-declaration portal. Register immediately once the Partnership Deed/LLP is formalized. Unlocks priority sector protection and statutory interest protection on delayed client payments under the MSMED Act.
4. **Data Protection & DPDP Act Alignment:**
   * While substantive provisions of the Digital Personal Data Protection Act (DPDP) 2023 have a phased rollout in 2026, operational data hygiene is mandatory from Day 1:
     * Clear, plain-language Privacy Notice on `algoryxz.com` and all client forms.
     * Express consent checkboxes for contact and RSVP data capture.
     * Defined data retention limits: wedding guest lists and personal photos purged or archived 12 months post-event.
5. **[PROFESSIONAL REVIEW REQUIRED] Items for CA/CS Consultation:**
   * Verification that informal cost-sharing prior to formal registration does not trigger Section 2(31) Association of Persons (AOP) assessment.
   * Review of the founder partnership deed and capital contribution clauses.
   * GST treatment for potential future international or inter-state cross-border clients.

---

## 13. BRAND IDENTITY & AESTHETIC PRINCIPLES

### The Brand: ALGORYXZ

The name balances mathematical precision (`Algorithm`) with modern subcultural edge (`XZ`). 

* **What We Are:** A high-craft modern software studio. Focused, sharp, technically authoritative, visually exceptional.
* **What We Are Not:** An "AI agency", a generic B2B IT consultancy, a cheap freelance gig collective, or a corporate systems integrator.

### Visual Design Rules (Anti-Vibe-Code)
1. **No Purple AI Gradients:** Banned. The default purple/violet/cyan radial blur gradient screams "low-effort AI-generated template."
2. **No Generic Glassmorphism:** Glass blur cards with washed-out borders reduce readability on mid-range mobile displays under outdoor sunlight.
3. **Typography-First Authority:** Pair one expressive, deliberate display typeface with a razor-sharp, readable modern sans-serif body typeface. High contrast, precise tracking, intentional typographic hierarchy.
4. **Intentional Motion:** Motion must serve comprehension (collapsible accordions, page transitions, smooth drawer menus). Gratuitous cursor followers, floating particle spheres, and physics-heavy canvas animations are prohibited on production sites.
5. **Authentic Imagery:** Never publish AI-generated fake human portraits or uncanny stock photography. Use authentic founder photos, client assets, or high-end curated vector art.

---

## 14. PROJECT 000 — THE STUDIO EMBASSY

`ALGORYXZ / 000` is the studio's primary digital asset: `algoryxz.com`. It is our first portfolio piece and the benchmark of our design and engineering standards.

### Non-Negotiable Technical Mandates
* **Mobile-First Reality:** Must perform flawlessly on actual mid-range Android devices on 4G networks (reflecting 64.8% of India's web traffic per StatCounter August 2026 data).
* **Engineering Performance Target:** Target Lighthouse score $\ge 90$ across Performance, Accessibility, and Best Practices on mobile profiles. Sub-2.5s Largest Contentful Paint (LCP).
* **WCAG 2.1 AA Compliance:** Minimum 4.5:1 contrast ratio on all body copy; complete keyboard accessibility; explicit touch targets $\ge 44 \times 44\text{ px}$.
* **Commercial Purpose:** Project 000 is a **sales engine first**, an art piece second. The path from landing to viewing work to submitting a qualified inquiry must take fewer than 3 clicks.

### Homepage Architecture
1. **Hero:** One sharp, falsifiable positioning statement + subline. Direct visual preview of real studio work.
2. **Lane Self-Selection:** Distinct visual cards routing visitors to *Celebrations* or *Business & Brand*.
3. **Selected Work:** 3–4 high-impact portfolio case studies with live demo links.
4. **The Algoryxz Process:** 5-step transparent workflow (Discover $\rightarrow$ Design $\rightarrow$ Build $\rightarrow$ QA $\rightarrow$ Launch) with explicit turnaround commitments.
5. **Starting-From Pricing:** Clear pricing anchors per category. No hidden pricing games.
6. **Founders Strip:** Real photos, real names, real roles of Smarak, Deeptiman, and Akriti.
7. **Qualified Inquiry Flow:** Compact 7-field form redirecting high-intent leads to discovery scheduling.

---

## 15. PORTFOLIO ARCHITECTURE

Algoryxz numbers every public and concept project sequentially to convey systematic engineering rigor:

```
[000] ──► ALGORYXZ STUDIO EMBASSY (algoryxz.com)
[001] ──► CELEBRATIONS: "The Grand Odisha Wedding" (Interactive Multi-Event Portal)
[002] ──► BUSINESS & BRAND: "Amber House Café" (Artisanal Coffee & Direct Ordering)
[003] ──► BUSINESS & BRAND / CREATOR: "Prism Photography" (Visual Portfolio & Booking)
[004] ──► CUSTOM SYSTEM TEASER: "Studio Desk" (Booking & Client Intake System Demo)
```

### Portfolio Standards
* **Classification Badges:** Every project card clearly displays one of three status tags:
  * `REAL CLIENT` — Live commercial project delivered for a client.
  * `CONCEPT PROJECT` — In-house build designed to demonstrate specific design and technical capabilities.
  * `INTERNAL TOOL` — Infrastructure built for studio operations.
* **Celebrations Requirement:** Must have a **fully interactive live deployment**. Couples will not buy wedding websites from static screenshots; they must navigate the RSVP, view the schedule, and test the mobile gallery.
* **Subdomain Strategy:** All concept projects are hosted on subdomains of the studio: `demo.algoryxz.com/amber-cafe` or `wedding-concept.algoryxz.com`. Standard `<meta name="robots" content="noindex">` tags prevent demo URLs from cannibalizing client SEO.

---

## 16. CLIENT EXPERIENCE SYSTEM & EARLY TOOLING

For Clients 1 to 15, Algoryxz relies on a lean, mature operational toolchain. We do not build custom CRM or client portal software prematurely.

```
                         CLIENT LIFECYCLE TOOLCHAIN
                         
  [Inbound Inquiry Form] (algoryxz.com via Cloudflare Worker)
            │
            ▼
  [Shared Pipeline Sheet] (Google Sheets + Drive Folder Auto-Created)
            │
            ▼
  [Discovery & SOW] (Templated Google Doc SOW ──► PDF via Email/WhatsApp)
            │
            ▼
  [Invoice & Deposit] (Zoho Books Free Tier + Razorpay Payment Link)
            │
            ▼
  [Asset Intake] (Shared Google Drive Folder with Structured Subfolders)
            │
            ▼
  [Dev & Staging] (GitHub Private Repo ──► Cloudflare Pages Preview URL)
            │
            ▼
  [QA & Approval] (Akriti Physical Device Check ──► Client WhatsApp Sign-off)
            │
            ▼
  [DNS Launch / Handover] (Cloudflare DNS Cutover + Bitwarden Send Credential Packet)
```

---

## 17. FOUNDER OPERATING MODEL & DIVISION OF LABOR

```
                            FOUNDER GOVERNANCE TRIANGLE
                            
                                    SMARAK
                           [Engineering & Systems]
                            • Cloudflare & Backend
                            • AI Tooling & CI/CD
                            • Tech Feasibility Gate
                                   ▲      ▲
                                  /        \
                                 /          \
                                ▼            ▼
            DEEPTIMAN ◄──────────────────────────────► AKRITI
        [Design & Creative]                        [Operations & QA]
        • Visual Identity & UI                     • Client Schedules & SOWs
        • Motion & Micro-interactions              • Real-Device Mobile QA
        • Design Approval Gate                     • Final Launch Gate
```

### The Three Absolute Gates
1. **Design Gate (Deeptiman):** Code implementation cannot begin until Deeptiman signs off on the layout, token mapping, and typography.
2. **Technical Feasibility Gate (Smarak):** No quote or contract involving custom auth, database models, or third-party APIs may be sent to a client without Smarak’s sign-off.
3. **QA & Launch Gate (Akriti):** No site may be connected to a client's live production custom domain until Akriti has executed the physical-device QA protocol and confirmed 100% cleared balance.

---

## 18. ENGINEERING PHILOSOPHY & REUSABLE PRACTICES

Derived from extensive multi-agent project histories:

1. **Evidence Over Reports:** Never trust a terminal summary or agent checkpoint claiming *"tests pass."* Inspect the test runner output, verify the preview build URL, and check the network tab.
2. **Diagnose Before Editing:** Read the file, read adjacent modules, check `git diff` against HEAD, and identify the root cause before altering code.
3. **Smallest Correct Architecture:** Always prefer static HTML/JS on Cloudflare Pages over server-side containers. Always prefer Cloudflare D1 or Neon over a dedicated cloud server.
4. **Static First:** If a site’s content only changes once a month, it should be built as a static site generated from markdown or simple JSON, not a heavy dynamic database application.
5. **Reversible Deployments:** Cloudflare Pages provides instantaneous rollback to any previous deployment hash. Keep builds deterministic so rollbacks are reliable.
6. **Strict Secret Hygiene:** No secrets in code, no secrets in git history, no plaintext credentials in WhatsApp or Google Docs. Always use Bitwarden Send for client exchanges.

---

## 19. REPOSITORY CONVENTIONS & GIT HYGIENE

All studio and client codebases follow a standardized, predictable repository layout:

```
algoryxz-project/
├── .github/
│   └── workflows/          # GitHub Actions (lint, typecheck, build)
├── docs/                   # Authoritative project specifications & contracts
├── public/                 # Static assets, fonts, icons, favicon
├── src/
│   ├── assets/             # Raw visual media
│   ├── components/         # Modular UI components
│   ├── layouts/            # Page shell layouts
│   ├── styles/             # Global CSS & semantic design tokens (tokens.css)
│   └── utils/              # Pure utility functions & API helpers
├── .env.example            # Documented environment variable schema
├── .gitignore              # Standard gitignore (node_modules, .env, dist)
├── README.md               # Quickstart, architecture overview, and deploy runbook
└── package.json            # Exact dependency definitions
```

### Git Branching Rules
* `main`: Protected production branch. Deploys to live production domain.
* `develop`: Integration staging branch. Deploys to staging preview URL.
* `feature/*` or `fix/*`: Ephemeral feature branches. Generates Cloudflare preview deployments for review.

---

## 20. AGENTS.MD SPECIFICATION TEMPLATE

Every Algoryxz repository includes a root `AGENTS.md` file that governs the behavior of AI coding assistants working in that repository:

```markdown
# AGENTS.md — Algoryxz Agent Operating Rules

## Authority & Source of Truth
1. Read `docs/SPEC.md` and `docs/CONTRACT.md` before proposing code changes.
2. Code and verified test runs override outdated documentation comments.

## Operational Constraints
- NEVER push or merge directly to `main`.
- NEVER execute destructive database migrations without human sign-off.
- NEVER alter `src/styles/tokens.css` without explicit approval from Deeptiman.
- NEVER embed API keys, secrets, or database URLs in source code.

## Verification Requirements
- All code must pass `npm run lint` and `npm run typecheck` cleanly.
- Include before/after test output or preview deployment URL in every PR.
- When blocked, stop and ask the Client Owner rather than inventing requirements.
```

---

## 21. REUSABLE SKILLS LIBRARY SPECIFICATION

Algoryxz standardizes on 7 high-leverage agent skills:

1. **`repo-forensics`:** Pre-work repository inspection. Scans working tree, uncommitted diffs, package dependencies, and recent git history before modifying code.
2. **`safe-git`:** Branch management and PR drafting. Ensures feature branch isolation, structured semantic commit messages, and automated prevention of direct pushes to `main`.
3. **`design-token-enforcer`:** Audits CSS and JSX to ensure styling uses semantic tokens (e.g., `var(--color-surface-primary)`) rather than arbitrary hardcoded hex codes.
4. **`responsive-qa`:** Automated verification of viewport layouts across 320px, 375px, 768px, 1024px, and 1440px break points, flagging horizontal scroll overflow and clipped text.
5. **`accessibility-audit`:** Executes automated `axe-core` passes against markup, verifying image alt tags, ARIA attributes, semantic landmarks, and WCAG contrast.
6. **`cloudflare-deploy`:** Wrangler-based deployment scripts for deploying static Pages, Worker functions, and binding D1/R2 resources cleanly.
7. **`handover-packager`:** Generates sanitized client documentation, inventory lists of DNS/assets, and prepares Bitwarden Send credential transfer payloads.

---

## 22. MULTI-AGENT DEVELOPMENT WORKFLOW

Algoryxz uses AI coding agents as **parallel asynchronous implementers**, with human founders acting as architects, reviewers, and quality gates:

```
[Human Founder: Smarak/Deeptiman]
                │
         Creates Task & SOW Spec
                │
                ▼
      [Agent: Feature Branch]
  (Reads repo, implements code, runs local tests)
                │
                ▼
     [Automated CI Check] ──► Fails? ──► [Agent Auto-Fixes]
                │
              Passes
                ▼
  [Cloudflare Preview URL Generated]
                │
                ▼
     [Human Founder Review]
  (Deeptiman: Design QA | Akriti: Mobile QA | Smarak: Code Review)
                │
            Approved?
           /        \
         YES         NO ──► [Feedback to Agent]
         /
        ▼
[Human Merges to Main ──► Production Deploy]
```

---

## 23. SHARED FILE COLLISION POLICY

To prevent parallel agents and founders from clobbering critical infrastructure, key shared files are assigned strict single ownership:

| Shared File / Directory | Primary Owner | Reviewer | Modification Rule |
|---|---|---|---|
| `src/styles/tokens.css` (Design Tokens) | **Deeptiman** | Smarak | Only Deeptiman may modify; agents may only reference existing tokens. |
| `src/styles/global.css` (Global Styles) | **Deeptiman** | Smarak | Edits require Deeptiman PR approval. |
| `package.json` / Lockfile (Dependencies) | **Smarak** | Akriti | No new external dependencies added without Smarak feasibility review. |
| `wrangler.toml` / Cloudflare Config | **Smarak** | Akriti | Only Smarak may alter bindings (D1, R2, Workers). |
| Database Schemas / Migrations | **Smarak** | Deeptiman | Direct migrations prohibited. Smarak must dry-run SQL. |
| Navigation / Route Hierarchy | **Deeptiman** | Akriti | Route additions must align with approved site structure. |

---

## 24. DESIGN-TO-ENGINEERING HANDOFF CONTRACT

To eliminate visual misinterpretation and friction between design and engineering:

```
[Deeptiman: Figma / Art Direction]
                 │
                 ▼
  [Design Tokens Defined: Color, Type, Spacing, Radius]
                 │
                 ▼
  [Component Rules: States (Default, Hover, Active, Disabled, Loading)]
                 │
                 ▼
  [Smarak: Code Implementation on Feature Branch]
                 │
                 ▼
  [Preview Deploy URL Generated]
                 │
                 ▼
  [Deeptiman Visual QA Review: 1:1 Pixel & Typography Audit]
                 │
                 ▼
  [Akriti Real-Device Physical Mobile QA Review]
                 │
                 ▼
  [Design Acceptance Confirmed ──► Ready for Client Review]
```

---

## 25. THREE-TIER QA SYSTEM

| Quality Dimension | Class C: Celebrations | Class B: Business & Brand | Class X: Custom Systems |
|---|---|---|---|
| **Mobile Viewport QA** | Physical iPhone + Android device pass | Physical iPhone + Android device pass | Physical iPhone + Android device pass |
| **Cross-Browser Check** | Safari iOS, Chrome Android, Chrome Desktop | Safari iOS, Chrome Android, Desktop Safari/Chrome | Full cross-browser + Edge + Firefox |
| **Interactive Form Test** | Submit real RSVP; verify confirmation screen | Submit contact form; verify email inbox receipt | Verify form validation, rate limits, edge failure cases |
| **Performance Gate** | Fast visual load (< 3.0s on 4G) | Mobile Lighthouse Performance $\ge 90$ | Mobile Lighthouse $\ge 90$ + DB query latency $< 150\text{ ms}$ |
| **Accessibility Gate** | High text contrast; readable typography | Automated axe-core check (0 critical/serious errors) | Complete WCAG 2.1 AA keyboard & screen-reader pass |
| **Backend & Data QA** | Verify CSV export of RSVP submissions | Verify email delivery via Resend event logs | Automated unit test suite + RLS tenant isolation test |
| **Staging Environment** | Cloudflare Preview URL | Cloudflare Preview URL | Dedicated isolated staging database + preview build |

---

## 26. DEPLOYMENT PIPELINE & ROLLBACK PROTOCOL

1. **Preview Deployments:** Every Git push to a feature branch automatically deploys an isolated Cloudflare Pages preview URL (`https://<commit-hash>.project.pages.dev`).
2. **Production Gate:** Automatic merges to `main` are disabled. Only Smarak or Client Owner may trigger a production merge.
3. **Post-Deploy Smoke Test:** Immediately upon production cutover, Akriti executes a 3-minute smoke test:
   * Load homepage on mobile 4G.
   * Submit test entry through contact/RSVP form.
   * Verify SSL certificate badge in browser address bar.
4. **Emergency Rollback Procedure:**
   * If a critical bug is discovered post-launch, Smarak opens the Cloudflare Pages dashboard $\rightarrow$ Deployments $\rightarrow$ selects previous working deployment $\rightarrow$ clicks **"Rollback to this deployment"**.
   * Production traffic reverts instantly (< 5 seconds) across global edge nodes without waiting for a new Git build.

---

## 27. CLIENT HANDOVER PROTOCOL (MIGRATION & SOVEREIGNTY)

When a client finishes a project or terminates a maintenance agreement, Algoryxz executes a complete sovereignty handover:

```
                      MIGRATION HANDOVER SEQUENCE
                      
  1. REPOSITORY   ──► Transfer GitHub repo ownership to Client GitHub account.
  2. CLOUDFLARE   ──► Delete Pages project in Algoryxz CF account (unbinds Git repo).
  3. CLIENT CF    ──► Recreate Pages project in Client CF account; reconnect repo.
  4. ENVIRONMENT  ──► Input client environment variables & database connection strings.
  5. DNS CUTOVER  ──► Repoint custom domain CNAME/A records to client's new Pages endpoint.
  6. BACKUP FILE  ──► Deliver full static export and database SQL dump via Bitwarden Send.
  7. CREDENTIALS  ──► Transfer registrar & service logins via 48-hr expiring Bitwarden Send.
  8. ACCESS REVOKE──► Algoryxz removes all internal tokens, keys, and management access.
```

---

## 28. OBSERVABILITY & UPTIME ARCHITECTURE

Algoryxz monitors production services proportionately to client SLA commitments:

* **Base Layer (Cloudflare Analytics):** Passive, built-in edge telemetry. Tracks unique visitors, pageviews, geographic requests, and Core Web Vitals without client-side cookies or privacy banner requirements.
* **Uptime Monitoring (Better Stack Free Tier):** Configured for `algoryxz.com`, Control V0, and active Care client websites. Checks HTTP status every 3 minutes from multi-region locations. Alerts routed to founders' phones via email/Slack.
* **Upgrade Triggers:**
  * *Better Stack Paid ($29/mo):* Triggered when active monitored Care clients exceed 10.
  * *Sentry Error Tracking ($26/mo):* Triggered only when a Custom System web app with active authenticated users is deployed to production.

---

## 29. AI TOOLCHAIN STRATEGY (PROVIDER-AGNOSTIC)

Algoryxz is deliberately **provider-agnostic**. We do not bind our development workflow or client solutions to any single AI vendor:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        ALGORYXZ AI ROUTING MODEL                       │
├───────────────────────┬────────────────────────────────────────────────┤
│ High-Context / Arch   │ Claude Sonnet 5 (Anthropic) — Deep reasoning,  │
│ Complex Debugging     │ refactors, security audits, nuanced copy       │
├───────────────────────┼────────────────────────────────────────────────┤
│ High-Speed / Routine  │ GPT-4o mini (OpenAI) or Claude Haiku 4.5       │
│ Boilerplate / Linting │ Component scaffolding, unit tests, utility AST │
├───────────────────────┼────────────────────────────────────────────────┤
│ Interactive Coding    │ Claude Pro Subscription ($20/seat/mo) via CLI  │
│ Dev Environment       │ Claude Code interactive terminal workflows     │
├───────────────────────┼────────────────────────────────────────────────┤
│ Offline / Batch Work  │ Anthropic / OpenAI Batch API (50% cost discount│
│ Audits & Doc Gen      │ for non-urgent overnight code & doc passes)    │
└───────────────────────┴────────────────────────────────────────────────┘
```

---

## 30. AI COST CONTROL & REWORK POLICIES

To prevent agent token burn from eating studio profit:

1. **Per-Project AI Budget Caps:**
   * Class C (Celebration): **₹200** cap.
   * Class B (Business & Brand): **₹500** cap.
   * Class X (Custom System): **₹1,500** cap.
2. **Context Window Discipline:** Never dump the entire project repository into an agent context prompt. Feed only relevant component files, interfaces, and CSS tokens.
3. **Agent Loop Circuit Breaker:** Any autonomous coding agent script is hard-capped at **10 execution iterations**. If an agent cannot resolve a test failure or build error in 10 attempts, it must halt and request human intervention.
4. **Prompt Caching:** Anthropic prompt caching is enabled on all large system prompts, reducing recurring input token costs by 90%.
5. **The Delivery Cost Maxim:** Never optimize for the cheapest API call if it creates hours of human developer rework. The goal is *lowest total delivery cost at required quality*.

---

## 31. ALGORYXZ CONTROL: BOUNDARY & EVOLUTION

### Control V0 (The Bounded MVP)
* **Status:** Permitted, strictly time-boxed to **maximum 5 combined founder-days**.
* **Permitted Scope:** Single-screen internal web dashboard tracking:
  1. Founder status/presence ("Smarak: building API on Prism").
  2. Idea backlog.
  3. Active project pipeline & stage.
  4. Bounded checklist tasks per project.
  5. Agent log checkpoints.
* **Technical Stack:** Cloudflare Pages + Supabase Free Tier (Auth & 1 Postgres DB) + Cloudflare Access SSO.
* **Strict Exclusions:** No billing, no client portal, no autonomous agent orchestration, no Slack/Linear replication.

### Future Evolution (Phase 4 — Deferred)
Any evolution toward an automated client portal, agent bridge, task leasing, or real-time event streaming requires:
* $\ge 10$ active paying clients.
* Documented proof that manual Google Sheets/Drive operations are causing client delivery errors.

---

## 32. WHAT WE ARE EXPLICITLY NOT BUILDING (DEFERRED COMPLEXITY)

To protect focus and capital, Algoryxz explicitly prohibits building or adopting the following technologies until explicit validation triggers are met:

| Complex Technology | Why It Is Prohibited Today | Re-evaluation Trigger |
|---|---|---|
| **Kubernetes / Docker Clusters** | Massive DevOps overhead; Cloudflare serverless runs globally for free. | When a custom client explicitly pays for isolated enterprise bare-metal hosting. |
| **Custom Invoicing / Accounting Software** | Mature tools (Zoho Books Free) already solve GST compliance, invoicing, and reconciliation. | Never. Algoryxz is a studio, not an accounting software vendor. |
| **Custom Headless CMS Engine** | Markdown/JSON static data and Sanity/Contentful free tiers solve this cleanly. | When $\ge 5$ clients demand a specific bespoke inline editing workflow. |
| **Self-Hosted Monitoring (Uptime Kuma VPS)**| Adds a server to manage and monitor; single point of failure if VPS drops. | Never. Better Stack Free Tier provides superior global multi-region checks at ₹0. |
| **Full Agent Mesh & MCP Task Leases** | Premature optimization before handling real client work. | When studio runs $\ge 5$ concurrent projects and founder handoffs fail repeatedly. |
| **Client-Facing Portal App** | Simple Google Drive folders and WhatsApp groups provide lower friction for small clients. | When client onboarding requests exceed 10/month and manual file chasing breaks. |

---

## 33. CLIENT #1 OPERATIONAL WALKTHROUGH (ZERO TOOLING BUILD)

This workflow demonstrates that Algoryxz can deliver, bill, and support its first paying client with zero custom internal tooling:

```
[Inbound Lead: Local Café Owner reaches out via WhatsApp / algoryxz.com form]
                               │
                               ▼
[Client Owner (Deeptiman) opens Discovery call; fills Lead row in Google Sheets]
                               │
                               ▼
[Smarak scores project on 8-Axis Engine (Score: 16) ──► Quotes ₹14,000 for 6 pages]
                               │
                               ▼
[Akriti sends templated 1-page SOW PDF (includes 2-revision limit & payment schedule)]
                               │
                               ▼
[Client pays ₹7,000 (50% deposit) via Razorpay payment link ──► Logged in Zoho Books]
                               │
                               ▼
[Client Owner shares Google Drive link: /Logo, /Photos, /Menu_Copy]
                               │
                               ▼
[Deeptiman designs layout in Figma ──► Smarak spins up GitHub private repo: client-cafe]
                               │
                               ▼
[Smarak & AI agent build static site on Cloudflare Pages ──► Preview URL shared]
                               │
                               ▼
[Client reviews; submits Batched Revision List 1 ──► Tweaks implemented within 24h]
                               │
                               ▼
[Akriti completes Physical Mobile QA Checklist ──► Approves build]
                               │
                               ▼
[Client pays final ₹7,000 balance ──► Smarak points client domain DNS to Cloudflare]
                               │
                               ▼
[Site Live! ──► Akriti pitches Care Plan (₹999/mo) for ongoing menu updates]
```

---

## 34. FIRST 30 DAYS IMPLEMENTATION TIMELINE

*Calibrated to part-time university schedules (15–20 hours/week per founder).*

```
WEEK 1: FOUNDATION & BRAND
• Deeptiman: Finalize Algoryxz brand identity, typography, and Project 000 design tokens.
• Smarak: Initialize GitHub Org, Bitwarden Teams, Cloudflare root account, and Resend domain.
• Akriti: Execute 3-founder Partnership Deed; setup Zoho Books and shared financial ledger.

WEEK 2: PROJECT 000 & FIRST CELEBRATION CONCEPT
• Smarak + Deeptiman: Build & deploy Project 000 (algoryxz.com) shell to Cloudflare Pages.
• Deeptiman: Design & build Concept 001 (Interactive Wedding Portal: "The Grand Odisha Wedding").
• Akriti: Shortlist 15 warm prospects (cafés, event photographers, family businesses).

WEEK 3: BUSINESS CONCEPT & OPERATIONAL DRILL
• Smarak + Deeptiman: Build Concept 002 (Local Café & Roastery: "Amber House Café").
• Akriti: Conduct physical mobile QA passes on Project 000, Concept 001, and Concept 002.
• All: Test full client intake pipeline (contact form submit ──► email alert ──► Razorpay link).

WEEK 4: SOFT LAUNCH & FIRST OUTREACH
• All: Publish algoryxz.com publicly on founder social channels and personal networks.
• Client Owners: Initiate personalized outreach to first 5 warm prospects with tailored mockups.
• Goal: Secure Client #1 deposit before Day 30.
```

---

## 35. FIRST 90 DAYS LEARNING AGENDA

Over the first quarter of operations, the studio gathers empirical data to validate core business hypotheses:

1. **Segment Conversion Rate:** Does the Celebrations wedge convert faster than Business & Brand outreach?
2. **True Effective Hourly Yield:** Across the first 5 delivered projects, does blended founder return remain $\ge ₹500/\text{hr}$?
3. **AI Rework Reality:** What percentage of agent-generated code requires human refactoring in production?
4. **Care Plan Attachment:** What percentage of one-time build clients convert to recurring monthly Care (₹999/mo)?
5. **Maintenance Burden:** Do Care clients respect the 30-minute monthly limit, or does support creep occur?
6. **Tooling Friction:** At what exact project volume does Google Sheets + Drive become painful enough to warrant building Control V0?

---

## 36. DECISION TRIGGERS MATRIX

| Component | Initial Day 0 State | Threshold / Trigger to Upgrade | Upgraded State |
|---|---|---|---|
| **Repository Management** | GitHub Organization (Free Tier) | When a private repo requires automated branch rulesets or required PR reviews | GitHub Team Plan ($4/user/mo = $12/mo) |
| **Credential Management** | Bitwarden Free Individual Vaults | When Client #1 production shared logins are collected and stored | Bitwarden Teams ($4/user/mo = $12/mo) |
| **Transactional Email** | Resend Free Tier (3,000/mo, 100/day) | When pooled monthly email volume across all managed sites exceeds 3,000 | Resend Pro Plan ($20/mo = ~₹1,660/mo) |
| **Uptime Monitoring** | Better Stack Free (10 monitors) | When active Care plan monitored endpoints exceed 10 | Better Stack Paid ($29/mo = ~₹2,400/mo) |
| **Database Tier** | Cloudflare D1 / Neon Free Tier | When a custom application requires zero-inactivity-pause and point-in-time recovery | Supabase Pro ($25/mo — Billed to Client Bucket C) |
| **Client Pipeline** | Google Sheets Shared Ledger | When leads exceed 25/month or manual lead chasing results in a missed project | Zoho CRM Free Tier (3 users, 5,000 contacts) |
| **Internal Operations** | Google Sheets + Drive Folders | When concurrent active projects exceed 5 and task status causes confusion | Algoryxz Control V0 (5-day build) |
| **Legal Entity** | Registered Partnership Firm | When cumulative annual revenue approaches ₹15–20 Lakhs or liability warrants | Limited Liability Partnership (LLP) |

---

## 37. RISK REGISTER & MITIGATION MATRIX

| Risk Description | Probability | Impact | Mitigation Strategy | Early Warning Indicator |
|---|---|---|---|---|
| **Scope Creep & Margin Collapse** | High | High | Strict 2-revision limit written in SOW; formal change quotes for any new feature. | Client sends unbatched voice notes or asks for "just one quick page." |
| **Founder Exam / College Crunch** | High | High | Transparent client communication; add 7-day buffers to delivery estimates during exams. | University exam timetable released; 2 founders studying simultaneously. |
| **Underpricing & Low-Price Trap** | Medium | High | Enforce minimum price floors (₹2.5k Celebrations, ₹10k Business); track hourly return. | Blended hourly return drops below ₹400/hr on any project. |
| **Cloudflare Pages Handover Confusion**| Medium | Medium | Follow verified recreation protocol (unbind Git repo $\rightarrow$ recreate in client account). | Client unable to link repository due to existing binding conflict. |
| **AI Agent Production Regressions** | Medium | Critical | Prohibit agents from merging to `main` or altering schemas. All prod deploys human-gated. | Agent PR modifies `wrangler.toml` or touches production database connection strings. |
| **Secret / Key Leakage in Git** | Medium | Critical | Pre-commit git hooks; scan repos with `trufflehog`; all keys stored in Bitwarden & CF env. | GitHub secret scanning alert triggered on commit. |
| **Client Domain Lock-in Disputes** | Low | Critical | Client must always own domain registrar; Algoryxz only manages DNS records. | Client asks Algoryxz to buy domain on founder personal credit card. |
| **Overbuilding Internal Tooling** | High | High | Hard 5-day time-box on Control V0; zero custom software built without client validation. | Founders spending weekend coding internal dashboards while 0 client proposals are out. |

---

## 38. SOURCE-OF-TRUTH MAP

To prevent circular arguments and contradictory documentation:

```
                            AUTHORITY HIERARCHY
                            
  LEVEL 1: REPOSITORY EVIDENCE (Working Code, Tests, Cloudflare Edge)
           ▲
           │ (Overrides planning when in conflict)
  LEVEL 2: OPERATING CONTRACT V1 (ALGORYXZ_OPERATING_CONTRACT_V1.md)
           ▲
           │ (Canonical business & operational rules)
  LEVEL 3: MASTER HANDBOOK (docs/ALGORYXZ_MASTER_RESEARCH_AND_IMPLEMENTATION_HANDBOOK.md)
           ▲
           │ (Knowledge context, research reasoning, and how-to guides)
  LEVEL 4: HISTORICAL RESEARCH ARCHIVES (algoryxz-phase1-*, algoryxz-phase2-*, etc.)
             (Contextual historical record only; non-authoritative)
```

---

## 39. IMPLEMENTATION READINESS AUDIT

*Strict evidence-based assessment. Items are checked only if concrete evidence exists.*

### Verified Ready (Complete)
* [x] Operating Contract V1 finalized and ratified (`ALGORYXZ_OPERATING_CONTRACT_V1.md`).
* [x] Master Research & Implementation Handbook synthesized.
* [x] Three-founder role division and governance gates locked.
* [x] Core technology stack selected and verified against September 2026 limits.
* [x] Three-bucket cost accounting architecture established.
* [x] Pricing floors and 8-axis scoping engine defined.
* [x] Canonical handover protocol verified against Cloudflare documentation.

### Needs Setup (Immediate Next Steps)
* [ ] Initialize GitHub Organization (`algoryxz`) and repository `algoryxz-000`.
* [ ] Provision studio Cloudflare account and configure nameservers for `algoryxz.com`.
* [ ] Configure Bitwarden shared vault and enroll all three founders with MFA.
* [ ] Verify Resend sending domain records (`mail.algoryxz.com`).
* [ ] Draft standard 1-page Client SOW and Revision Contract template.
* [ ] Set up Google Sheets shared accounting ledger and project tracker.

### Needs Human Founder Decision
* [ ] Confirm official primary business address and designated partner for bank account opening.
* [ ] Review and sign the informal 3-founder Partnership Agreement.
* [ ] Finalize the foundational brand palette and typography for Project 000 (Deeptiman).

### Professional Review Required
* [ ] Consult chartered accountant (CA) on AOP classification risk and informal cost-sharing hygiene.
* [ ] Confirm timeline and state stamp duty for Odisha Partnership Deed / LLP conversion.

---

## 40. FINAL IMPLEMENTATION ROADMAP

```
┌────────────────────────────────────────────────────────────────────────┐
│                              NOW: WAVE 0                               │
│  • Bootstrap `algoryxz-000` repository with standard structure.       │
│  • Setup Cloudflare, Bitwarden, Resend, and GitHub Organization.       │
│  • Build Project 000 (algoryxz.com) shell & core design tokens.        │
│  • Build Concept 001 (The Grand Odisha Wedding) live interactive demo. │
│  • Prepare Client SOW template & Google Sheet accounting ledger.       │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│                              NEXT: WAVE 1                              │
│  • Build Concept 002 (Amber House Café) live business demo.            │
│  • Deploy algoryxz.com to production custom domain.                    │
│  • Initiate targeted outreach to first 15 warm prospects.              │
│  • Onboard Clients #1, #2, and #3; execute deliveries; measure yield.  │
│  • Validate Care Plan (₹999/mo) attachment and support time.           │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│                             LATER: WAVE 2                              │
│  • Transition from warm orbit to Google Maps & vendor partnerships.    │
│  • If active concurrent projects reach 5, execute Control V0 build.    │
│  • Formalize LLP incorporation once cumulative revenue hits ₹5–10L.    │
│  • Calibrate pricing floors based on empirical hourly return data.     │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│                            NOT YET: PHASE 4                            │
│  • Autonomous multi-agent orchestration, MCP task bridges, leases.     │
│  • Custom client portal web application.                               │
│  • Self-serve template purchasing funnel.                              │
└────────────────────────────────────────────────────────────────────────┘
```

---

## APPENDICES

### Appendix A — Research Decision Ledger

| Topic | Original Research Question | Final Synthesized Decision | Status | Source | Core Operational Rationale |
|---|---|---|---|---|---|
| **Studio Model** | Freelance agency vs SaaS product? | Productized Digital Studio | **LOCKED** | Phase 1 | Captures immediate cash flow without SaaS product lead times or agency bloat. |
| **Initial Lanes** | Target weddings or businesses? | Celebrations (Wedge) + Business (MRR) | **LOCKED** | Phase 1 | Occasions generate fast cash and viral word-of-mouth; businesses yield recurring Care. |
| **Pricing Basis** | Price by page count? | Rejected. 8-Axis Complexity Scoring | **LOCKED** | Phase 1 Addendum | Page count ignores custom logic, third-party APIs, and design complexity. |
| **Care Floor** | Can Care plan run at ₹499/mo? | ₹499 is Infra-only; ₹999 min for Human Touch | **LOCKED** | Phase 1 Addendum | Founder labor at ₹500/hr erodes ₹499 margin with just 20 minutes of support. |
| **Public Lanes** | Is Custom Systems a headline lane? | No. Internal capability layer | **LOCKED** | Phase 2 | Custom systems lack early case studies; café owners are confused by database talk. |
| **Concept Work** | Build 6 concepts before launch? | No. Project 000 + 2 concepts sufficient | **LOCKED** | Phase 2 v2 | Selling must start early; waiting for 6 concepts delays market feedback. |
| **Primary Host** | Vercel vs Netlify vs Cloudflare? | Cloudflare Pages (Default) | **LOCKED** | Phase 3 | Vercel Hobby bans commercial use; Netlify has hard credit caps; CF is unmetered & free. |
| **Domain Asset** | Should studio own client domains? | No. Client is always legal registrant | **LOCKED** | Phase 3 | Eliminates hostage disputes, liability, and unpaid renewal friction. |
| **Pages Handover**| Native Cloudflare project transfer? | No native transfer; manual recreation | **LOCKED** | Phase 3 Closure | Cloudflare docs confirm Pages projects cannot be transferred natively across accounts. |
| **Cost Model** | Combine all client infra in OPEX? | 3-Bucket Model (OPEX vs Managed vs Direct)| **LOCKED** | Phase 3 Closure | Prevents client domains and Supabase Pro instances from artificially inflating studio burn. |

---

### Appendix B — Tooling Matrix

| Tool / Platform | Operational Purpose | When Used | Free Tier Limits | Paid Upgrade Trigger | Owner | Fallback Alternative |
|---|---|---|---|---|---|---|
| **Cloudflare Pages** | Static & JAMstack Hosting | Every web project | 500 builds/mo, unmetered bandwidth | None needed for static sites | Smarak | Vercel Pro (if SSR funded) |
| **Cloudflare Workers** | Edge API & Form Handling | Form posts, webhooks | 100,000 req/day, 10ms CPU | Workers Paid ($5/mo) if complex CPU | Smarak | Node.js serverless |
| **Cloudflare R2** | Object Media Storage | Photos, PDFs, assets | 10 GB-mo, 1M Class A, 10M Class B | $0.015/GB-mo (Pass through to Care) | Smarak | Supabase Storage / S3 |
| **Cloudflare D1** | Serverless Edge Database | RSVP, contact forms | 5 GB storage, 5M reads/day | Workers Paid standard rates | Smarak | Neon Postgres |
| **Neon** | Serverless Postgres | Dynamic web backends | 100 projects, 0.5 GB/project | Compute usage ($0.106/CU-hr) | Smarak | Cloudflare D1 / Supabase |
| **Supabase** | Auth, Database, Storage | Custom Systems & V0 | 2 free projects, 500 MB DB | Supabase Pro ($25/mo — Client Bucket C)| Smarak | Neon + Clerk Auth |
| **Resend** | Transactional Email | Forms & RSVP alerts | 3,000 emails/mo, 100/day, 3 domains | Resend Pro ($20/mo = ~₹1,660/mo) | Smarak | Amazon SES direct |
| **GitHub** | Codebase & Version Control| All projects | Unlimited private repos & collaborators| GitHub Team ($4/user/mo) on branch rules| Smarak | GitLab |
| **Bitwarden** | Centralized Credential Vault| Studio secrets & logins| Free individual / 2-person org | Teams ($4/user/mo) before Client #1 | All | 1Password Teams |
| **Better Stack** | Uptime & Heartbeat Monitor| Production monitoring | 10 monitors, 3-min check interval | Paid ($29/mo) when monitors > 10 | Akriti | Cloudflare Health Checks |
| **Zoho Books** | Invoicing & Bookkeeping | Client billing & GST | Free for turnover < ₹25 Lakhs | Standard Plan (~₹749/mo) when > ₹25L | Akriti | Razorpay Invoices |
| **Razorpay** | Payment Gateway Capture | Invoicing & Deposits | Standard 2.36% effective transaction fee| Enterprise custom rates | Akriti | Direct UPI / Cashfree |

---

### Appendix C — Skill Adoption Matrix

| Skill / Protocol | Source Project | Classification | Algoryxz Purpose | Operational Adaptation |
|---|---|---|---|---|
| **`repo-forensics`** | O-TRAVELZ V4 | **ADOPT** | Pre-work codebase inspection | Mandated in `AGENTS.md` before any agent or founder modifies code. |
| **`evidence-first-qa`** | O-TRAVELZ V4 | **ADOPT** | Hardware validation gate | Akriti performs real-device testing on Android and iPhone before prod cutover. |
| **`token-governance`** | O-TRAVELZ V4 | **ADOPT** | Single-source styling tokens | Deeptiman owns `tokens.css`; parallel workstreams cannot alter variables. |
| **`anti-vibe-filter`** | O-TRAVELZ V4 | **ADOPT** | Design quality benchmark | Rejects purple AI gradients, washed-out glassmorphism, and fake metric widgets. |
| **`safe-git-protocol`** | O-TRAVELZ V4 | **ADOPT** | Branch & PR protection | Enforces feature branching; agents forbidden from pushing directly to `main`. |
| **`handover-packager`** | O-TRAVELZ V4 | **ADAPT** | Client offboarding workflow | Adapted to package DNS records, repo exports, and Bitwarden Send credential links. |
| **`db-migration-dryrun`**| O-TRAVELZ V4 | **ADAPT** | Custom Systems schema updates | Scaled down: Smarak dry-runs SQL migrations on staging before prod execution. |
| **`kmp-parity-core`** | O-TRAVELZ V4 | **REJECT** | N/A | Rejected as too complex; Algoryxz builds modern web, not native KMP apps. |
| **`agent-mesh-leases`** | O-TRAVELZ V4 | **DEFER** | Multi-agent task orchestration | Deferred to Phase 4; simple branch-per-task model is sufficient for launch. |

---

### Appendix D — Founder Responsibility Matrix

| Operational Area | Primary Final Authority | Secondary Reviewer | Tertiary Reviewer |
|---|---|---|---|
| **Technical Feasibility & Architecture** | **Smarak** | Deeptiman | Akriti |
| **Hosting & Cloudflare Deployments** | **Smarak** | Akriti | Deeptiman |
| **Backend, Database & Migrations** | **Smarak** | Deeptiman | Akriti |
| **AI Tooling & Agent Configurations** | **Smarak** | Akriti | Deeptiman |
| **Visual Identity & Brand Direction** | **Deeptiman** | Smarak | Akriti |
| **UI/UX Layouts & Component Design** | **Deeptiman** | Akriti | Smarak |
| **Design Tokens & Typography Rules** | **Deeptiman** | Smarak | Akriti |
| **Project Scheduling & Milestone Tracking** | **Akriti** | Client Owner | All |
| **Content Intake & Asset Readiness** | **Akriti** | Client Owner | Deeptiman |
| **Physical Mobile Device QA Gate** | **Akriti** | Deeptiman | Smarak |
| **Billing, Invoicing & Financial Ledger** | **Akriti** | Smarak | Deeptiman |
| **Legal Agreements & SOW Generation** | **Akriti** | Client Owner | All |

---

### Appendix E — Agent Permission Matrix

| Action / Capability | Autonomous Permission | Human Gate Required | Forbidden |
|---|---|---|---|
| Read source code, documentation, and issues | ✅ Allowed | — | — |
| Create and edit feature branches | ✅ Allowed | — | — |
| Run local test suites, linters, and typechecks | ✅ Allowed | — | — |
| Propose Pull Requests with structured notes | ✅ Allowed | — | — |
| Trigger ephemeral preview builds | ✅ Allowed | — | — |
| Draft database migration scripts | ✅ Allowed | — | — |
| **Push or merge directly to `main`** | ❌ Prohibited | ⚠️ Requires Smarak | — |
| **Execute production database migrations** | ❌ Prohibited | ⚠️ Requires Smarak | — |
| **Modify production DNS or domain records** | ❌ Prohibited | ⚠️ Requires Smarak | — |
| **Alter payment gateway credentials or logic** | ❌ Prohibited | ⚠️ Requires Smarak/Akriti | — |
| **Delete production storage files or databases**| ❌ Prohibited | — | 🚫 **STRICTLY BANNED** |
| **Escalate or grant administrative permissions**| ❌ Prohibited | — | 🚫 **STRICTLY BANNED** |

---

### Appendix F — QA Matrix by Project Class

| Verification Step | Class C: Celebrations | Class B: Business & Brand | Class X: Custom Systems |
|---|---|---|---|
| **1. Lint & Typecheck** | Optional | `npm run lint` & `tsc --noEmit` | Mandatory automated CI block |
| **2. Unit Test Suite** | None | None | `vitest` unit & integration tests pass |
| **3. Mobile Viewport Test**| Physical device inspection | Physical device inspection | Physical device inspection |
| **4. Form Submission** | Real RSVP submit to D1/Sheet | Real contact submit to Resend | Multi-step validation & error states |
| **5. Performance Target** | Visual load $< 3.0\text{ s}$ on 4G | Mobile Lighthouse $\ge 90$ | Mobile Lighthouse $\ge 90$ + API $< 150\text{ ms}$ |
| **6. Accessibility** | Manual contrast & tap targets | axe-core automated pass (0 critical) | WCAG 2.1 AA keyboard & screen-reader |
| **7. Security & Isolation**| Signed upload URL verification | Webhook HMAC verification | Row Level Security cross-tenant test |
| **8. Staging Verification**| Cloudflare Preview URL | Cloudflare Preview URL | Dedicated staging DB + preview URL |
| **9. Final Sign-off** | Akriti + Deeptiman | Akriti + Deeptiman | Akriti + Smarak + Deeptiman |

---

### Appendix G — Infrastructure Ownership Matrix

| Infrastructure Asset | Default Legal Registrant | Technical Manager | Handover Action on Termination |
|---|---|---|---|
| **Client Domain Name** | **Client** | Algoryxz (DNS only) | Release Cloudflare DNS zone; client retains registrar. |
| **`algoryxz.com` Studio Domain**| **Algoryxz** | Smarak | Studio internal asset; never transferred. |
| **Client Cloudflare Pages** | **Algoryxz** (at launch) | Smarak | Recreate project in client's Cloudflare account. |
| **Client Cloudflare DNS** | **Algoryxz** or **Client** | Smarak | Transfer nameservers or delegate zone to client. |
| **Client Media Storage (R2)** | **Algoryxz** (pooled) | Smarak | Bulk export assets via AWS CLI/R2 API; transfer to client. |
| **RSVP Database (D1/Neon)** | **Algoryxz** | Smarak | Deliver full SQL dump file via Bitwarden Send. |
| **Custom App DB (Supabase Pro)**| **Client** (Bucket C) | Smarak (Invited Admin) | Algoryxz resigns admin role; client remains sole owner. |
| **Client Payment Gateway** | **Client** (Razorpay) | Client | Algoryxz never touches client revenue collection. |
| **Transactional Mail (Resend)**| **Algoryxz** (pooled) | Smarak | Export email logs; client configures own SMTP if exiting. |
| **Uptime Monitor (Better Stack)**| **Algoryxz** | Akriti | Remove endpoint from Better Stack dashboard. |

---

### Appendix H — Decision Trigger Matrix

| System Component | Current Launch State | Metric / Condition Trigger | Upgraded Target State |
|---|---|---|---|
| **GitHub Organization** | Free Org Tier | Private repo requires branch protection rulesets | GitHub Team ($4/user/mo = $12/mo) |
| **Credential Manager** | Free Individual Vaults | Client #1 shared production credentials collected | Bitwarden Teams ($4/user/mo = $12/mo) |
| **Email Delivery** | Resend Free (3k/mo, 100/day)| Pooled client emails exceed 3,000 in a month | Resend Pro ($20/mo = ~₹1,660/mo) |
| **Uptime Monitoring** | Better Stack Free (10 monitors)| Active Care monitored endpoints exceed 10 | Better Stack Paid ($29/mo = ~₹2,400/mo) |
| **Application Database** | Neon / D1 Free Tier | Custom app requires zero-pause & daily PITR | Supabase Pro ($25/mo — Client Bucket C) |
| **Sales Pipeline** | Google Sheets Ledger | Inbound leads exceed 25/mo or manual follow-up drops | Zoho CRM Free Tier |
| **Internal Operations** | Sheets + Google Drive | Concurrent active client projects exceed 5 | Algoryxz Control V0 (5-day build) |
| **Legal Structure** | Formal Partnership Deed | Annual studio turnover approaches ₹15–20 Lakhs | Limited Liability Partnership (LLP) |
| **Care Plan Pricing** | Care at ₹999/mo | Average support time per client exceeds 25 min/mo | Raise floor to ₹1,499/mo or strictly enforce cap |

---

### Appendix I — Research Source Inventory

| Code | Original File Name | Relative Path | Core Subject Matter | Historical Audit Role |
|---|---|---|---|---|
| `SRC-P1` | `algoryxz-phase1-research.md` | `algoryxz-phase1-research.md` | Business model, early pricing, founder roles | Phase 1 baseline research. |
| `SRC-P1A`| `algoryxz-phase1-addendum.md` | `algoryxz-phase1-addendum.md` | FiLLiP PAN/TAN, AOP tax, Care ₹999 floor | Phase 1 corrections and labor modeling. |
| `SRC-P2` | `algoryxz-phase2-gtm.md` | `algoryxz-phase2-gtm.md` | GTM draft, channel ranking, sales calls | Phase 2 initial GTM exploration. |
| `SRC-P2V2`| `algoryxz-phase2-gtm-v2.md` | `brain/.../algoryxz-phase2-gtm-v2.md`| GTM expansion, positioning, website spec | Phase 2 consolidated GTM framework. |
| `SRC-P3` | `algoryxz-phase3-infra.md` | `brain/.../algoryxz-phase3-infra.md` | Infrastructure, hosting verdicts, security | Phase 3 technical draft. |
| `SRC-P3CR`| Phase 3 Final Decision Record | Conversation Step Record | Pages migration, 3-bucket costs, triggers | Phase 3 verified closure pass. |
| `SRC-OTR`| O-TRAVELZ V4 Suite | `C:\Users\smara\Desktop\o-travelz\*` | Multi-agent rules, QA evidence, anti-vibe | Source of reusable engineering practices. |
| `SRC-VOC`| Operating Contract V1 | `ALGORYXZ_OPERATING_CONTRACT_V1.md` | Canonical operating constitution | **Highest Active Operating Authority.** |

---

**RATIFIED AND RATIFIED FOR IMPLEMENTATION:**  
*Algoryxz Master Research & Implementation Handbook is complete. Ready for Project 000 Bootstrap.*
