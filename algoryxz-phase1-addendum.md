# Algoryxz — Phase 1 Addendum / Corrections
Audit response. Tags as before: **[FACT] [REC] [ASSUMPTION] [PRO ADVICE]**

---

## 1. LLP PAN/TAN — CORRECTION

**Original claim (Phase 1):** "PAN/TAN are applied for post-incorporation" for an LLP.

**This was wrong.** **[FACT]** Since the **LLP (Second Amendment) Rules, 2022**, the FiLLiP form itself includes a PAN/TAN application section (Field/Section 9), and MCA allots PAN and TAN **together with the Certificate of Incorporation** — not as a separate post-incorporation step. This is confirmed by MCA's own FiLLiP instruction kit and a CBDT notification (26 July 2022) establishing the integrated PAN-allotment procedure via FiLLiP. Practically: you download the COI and your PAN/TAN together from the MCA dashboard on the same day incorporation completes.
**Corrected line for Phase 1, Section 2:** *"PAN and TAN are allotted automatically as part of LLP incorporation via FiLLiP — no separate post-incorporation application needed, same as the Pvt Ltd/SPICe+ process."*

---

## 2. Unincorporated Three-Founder Operation — REVISED, MORE CAUTIOUS

**Original claim was too casual** ("one founder invoices, privately split proceeds") given three people jointly operating one brand. Here's the actual risk picture:

**[FACT]** Under India's Income Tax Act, an **Association of Persons (AOP)** can be found to exist whenever two or more people **combine voluntarily to earn income together for a common purpose** — no written agreement, no registration, and no formal "partnership" is required for this characterization to apply. This is settled by Supreme Court precedent (*CIT v. Indira Balkrishna*, 1960) and remains the standing test.
**[FACT]** An AOP is a distinct taxable unit under the Income Tax Act (files its own return, typically ITR-5). If a tax officer later concludes that Smarak, Deeptiman and Akriti were jointly carrying on Algoryxz's business (which — three people, one brand, shared profits — is a fairly natural reading), the *group's income* could be assessed as an AOP rather than as one founder's personal freelance income, even if only one founder's name is on the invoices. That creates real exposure for the invoicing founder if they've been reporting 100% of the income as personal freelance income and privately transferring shares to the other two informally.
**[FACT]** Informal transfers from the invoicing founder to the other two, if not clearly documented as their agreed share of a joint business, risk being characterized as something else entirely (e.g., undisclosed income to the recipient, or scrutiny-triggering unexplained credits) rather than a clean cost/profit split.

**Does this mean "one founder invoices, splits privately" is unusable?** Not entirely — but it should not be your default framing.

**[REC] Safest minimal arrangement for the first few validation projects, ranked by simplicity:**
1. **Best option if timeline allows even a few days:** register a simple **Partnership Firm under the Indian Partnership Act, 1932** (a registered or even unregistered partnership deed — cheap, same-week, far less overhead than an LLP) covering just the three of you, with a basic deed stating profit shares and roles. This gives you a real, documented entity for the validation phase, avoids the AOP ambiguity, and is a natural stepping-stone to LLP conversion later. The trade-off is unlimited personal liability for all three partners — acceptable for a few small web-design contracts, not something you'd want to carry once contract values or client risk (e.g., handling payments, data) go up.
2. **If you want zero paperwork for literally the first 1–3 projects:** have each project genuinely correspond to whichever founder actually did most of the hands-on work invoice as an individual for *that specific project* — real individual freelance work, not a joint-business fiction. This only works cleanly if the work really is attributable to one person's effort per project (e.g., Deeptiman does a solo design gig); it stops being clean the moment all three routinely contribute to every project, which your brief describes as the normal case.
3. **What to avoid:** treating "one founder invoices everything, then we split it however" as a long-term default. That's exactly the pattern most likely to be read as an informal AOP with undocumented internal transfers — the worst combination for both of you and the tax authority's ability to make sense of it later.

**[PRO ADVICE]** A CA should confirm, specifically for your situation: (a) whether your actual joint-working pattern already meets the AOP test regardless of what you call it, (b) whether a quick partnership deed is worth it for validation-phase protection given your expected volumes, and (c) how to cleanly treat any money already exchanged between founders before you get this advice. Get this input **before**, not after, your first real payment lands — it's cheap to get right early and awkward to unwind later.

---

## 3. Razorpay — CONFIRMED, SOURCING TIGHTENED

**[FACT]** The 2% + 18% GST domestic rate is confirmed directly on Razorpay's own 2026 blog and terms pages. **The ₹199 + applicable-tax one-time KYC processing fee is also confirmed directly by Razorpay's own material** (razorpay.com/blog, and razorpay.com/terms/90-day-free-pg-offer — official T&Cs), specifically documented in the context of the current 2026 new-merchant activation/KYC flow. No correction needed — original figure stands, now with a first-party source rather than a secondary blog.
**[REC]** Note for your records: this fee is tied to the current (2026) onboarding process and the active new-merchant 0% platform-fee promotion; confirm it's still current when you actually onboard, since promo-period terms are the most likely thing to change.

---

## 4. Founder Labour in Unit Economics — CORRECTED (major omission fixed)

**[ASSUMPTION]** Plausible human-hour ranges per project tier (design + dev + client communication + QA, combined across founders, *excluding* AI agent runtime which is separate):

| Project | Revenue | Contribution before founder labour* | Plausible hours (low–high) | Effective ₹/hour (high hrs–low hrs) |
|---|---|---|---|---|
| ₹3,000 proposal/personal | 3,000 | 2,679 | 3–6 hrs | ₹447–893/hr |
| ₹7,000 small-biz | 7,000 | 6,285 | 8–15 hrs | ₹419–786/hr |
| ₹15,000 larger biz | 15,000 | 13,696 | 15–30 hrs | ₹456–913/hr |
| ₹30,000 custom | 30,000 | 27,492 | 30–60 hrs | ₹458–916/hr |

*from Phase 1 Section 6, before the 15% studio reserve.

**[REC] Reading this honestly:** the *baseline* economics are genuinely decent — roughly ₹420–915/hour blended across the team, which sits mid-to-upper range against the ₹400–2,000/hr Indian freelance market cited in Phase 1. This is the good news, and it's a reasonable check that your pricing table isn't underpriced *if* hours stay near the low end of each range.

**How revisions erode this — the part Phase 1 missed:** the hour ranges above already assume 2 included revision rounds are *priced in* (they're part of the base hours). The real risk is **unbilled extra revisions**, which don't show up in revenue at all:
- A ₹3,000 project budgeted at 6 hrs, if it absorbs 3 extra unbilled revision hours (a client who "just wants one more small tweak" three times), becomes 9 hrs → **₹298/hr**, roughly a third of the top-end rate.
- The same pattern at ₹7,000 (15 hrs → 19 hrs with 4 unbilled extra hours) drops effective rate from ₹419/hr to **₹331/hr**.

**[REC]** This is the strongest quantitative argument yet for actually enforcing the "extra revisions are billed, not absorbed" rule from Phase 1 Section 3 — it isn't just a margin-protection nicety, it's the difference between a ₹900/hr business and a ₹300/hr one on the same project.

---

## 5. AI Leverage Metric — NEW

**[REC]** A lightweight measurement model, trackable per project in your shared ledger/spreadsheet from day one (no tooling needed):

**Inputs to log per project:**
- Human hours (design + dev + QA + client comms, by founder)
- AI/API spend (₹, actual)
- Agent runtime (wall-clock minutes/hours agents ran, even roughly)
- Human rework hours *caused by* correcting AI output (separate from normal iteration)
- Revenue
- Revision hours (billed + unbilled)
- Post-launch support hours (first 30 days)

**[REC] 5 KPIs to actually track:**
1. **Effective Blended Hourly Rate** = (Revenue − AI/API spend) ÷ total human hours. This is your real north star — it should trend *up* over time if AI genuinely helps; if it's flat or falling as you use AI more, the workflow isn't paying for itself yet.
2. **AI Cost as % of Revenue** = AI/API spend ÷ Revenue. Watch this per project type — if it creeps up on larger/custom projects, your agent workflow may need better cost controls (model routing, caching) before you scale it, not just "use less AI."
3. **AI Rework Rate** = human hours spent fixing AI output ÷ total human hours. This is the single most important honesty check — if a meaningful chunk of "time saved by AI" is actually being spent re-doing what AI got wrong, your headline hours-saved number is inflated. Track it explicitly rather than folding it into general "dev hours."
4. **Revision Hours Trend (per project, over time)** — if AI-assisted builds genuinely produce better first drafts, client revision hours should trend down across your first 10–20 projects. Flat or rising revision hours despite more AI usage is a signal the AI isn't improving *client-facing* quality, only internal typing speed.
5. **Post-Launch Support Hours per Client (first 30 days)** — a proxy for whether AI-built sites are as robust as hand-built ones. If AI-heavy projects generate more early bug-fix/support tickets than founder-reviewed-carefully ones, that's a real signal to add a QA gate specifically for AI-generated code before shipping (which Section 5 of Phase 1 already recommends generally — this KPI tells you if it's actually necessary).

**[REC]** Review these monthly for the first 3 months, not per-project — with low project counts early on, per-project noise will be high; trends across 5–10 projects are what actually tell you something.

---

## 6. Recurring Plans — ₹499 STRESS-TESTED, FLOOR RAISED

**[ASSUMPTION]** Stress test of the ₹499 "Care" tier, assuming the client actually uses what's included (1 content tweak/month + baseline support):

| Cost component | Assumption | ₹/month |
|---|---|---|
| Infra (hosting/SSL/monitoring, shared/amortized) | Low-tier shared infra | ₹80–150 |
| 1 included content tweak, actually used | 15–20 min founder time @ ₹400–500/hr shadow rate | ₹100–170 |
| Baseline support/communication (messages, "is it down?" checks) | 15–30 min/month @ same rate | ₹100–250 |
| **Total real cost if tier is actually used as described** | | **₹280–570/month** |

**Verdict:** at ₹499, margin is at best thin (~₹150–200) and at worst **negative** the moment support time exceeds ~30 minutes in a given month — which is easy to hit with one slightly-longer troubleshooting exchange (a broken contact form, a DNS question, "can you also change this one photo"). **₹499 is not a sustainable floor if it includes any human-touch item.** It only works as a near-zero-touch, "we just keep the lights on" tier.

**Comparison:**
- **₹499** — sustainable *only* as a pure-infra tier: hosting, SSL, uptime monitoring, security patching, **no included content changes, no proactive support** beyond a monthly automated status email. Anything beyond that is billed separately.
- **₹799** — more headroom (~₹230–520 after the same cost model) but still fails under a month of genuine sustained engagement (two support touches instead of one erases the margin).
- **₹999** — comfortably covers ~1.5–2 hrs/month of blended founder time at realistic shadow rates plus infra, leaving real margin even in an above-average-usage month.

**[REC]** Split the entry tier into two:
- **Care Lite — ₹499/mo**: infra + monitoring only, zero included human-touch work, email support at standard turnaround (not "included," billed if it takes more than a trivial reply).
- **Care — ₹999/mo**: adds the 1 included content tweak and responsive support, replacing the ₹499–999 single tier from Phase 1.

This changes the Phase 1 recurring table's entry point from ₹499–999 to a firm two-tier split, with **₹999 as the minimum sustainable floor for any plan that includes actual human-touch work.**

---

## 7. Founder Roles — Client Owner Model Revised

**[REC]** Accepted correction: client ownership should not default to Akriti by virtue of owning ops/QA. Revised model:

- **Default tendencies** (starting point, not a rule): creative-led projects lean toward **Deeptiman** as Client Owner; technically-led projects (booking systems, custom apps, integrations) lean toward **Smarak**; steady-state delivery/QA-heavy engagements (recurring maintenance clients, post-launch support) lean toward **Akriti**.
- **Actual assignment per project** is based on **who the client already has rapport with, who scoped the deal, and which discipline dominates that specific project's risk/complexity** — not a fixed rule and not rotation. E.g., a wedding site (relationship-heavy, low technical risk) might default to Deeptiman or Akriti depending on who's talked to the client already; a booking-system build (technical risk dominant) defaults to Smarak even if Akriti sourced the lead.
- **The one hard rule:** exactly one named Client Owner per project, decided at kickoff and written down (even just in the shared ledger), so the "three people editing everything" problem doesn't recur regardless of who it is.

---

## 8. College/Student Customers — Differentiated

**[REC]** Correcting the blanket "treat as free/discounted" framing:

**Treat as free/heavily discounted portfolio work:**
- Individual student projects, personal club flyers/pages with no real budget, first-time favors for close friends.

**Treat as real paying clients at standard (or modest "local-network") rates:**
- **Funded fests and events** (major cultural/tech fests with sponsorship budgets — these often have five- or six-figure INR budgets and expect to pay vendors professionally).
- **Registered student societies/clubs with an actual treasury** (many have a real annual budget line for design/tech vendors, not personal founder money).
- **College-affiliated or incubator-backed startups** — these are startups first, "college" is incidental; price them as startups, not as students.
- **Any paid third-party event-management or student-run business** operating with real revenue.

**[REC]** The distinguishing question to ask before quoting: *"Is this person spending their own limited personal money, or an organization's/sponsor's budget?"* — the former gets the friendly/discounted rate, the latter gets standard pricing regardless of "student" being in the description anywhere.

---

## 9. Pricing Basis — Why Not Page Count

**[REC]** Page count is a poor primary metric because it measures *volume of content*, not *effort or risk* — a 3-page site with custom booking logic, payment integration, and a client-managed backend is far more work than a 10-page static brochure with no logic at all. Anchoring price to page count systematically underprices functionally complex small sites and overprices simple large ones, and it gives clients an easy (wrong) way to negotiate ("but it's only 4 pages").

**[REC] Proposed internal scoping model** — score each project 1–5 on each axis, use the sum (or a weighted sum, tune weights after ~10 real projects) to place it in a pricing band rather than reading price off a page count:

| Axis | What it captures |
|---|---|
| Design complexity | Custom illustration/animation/branding work vs. templated layout |
| Functionality | Interactive features, forms, dynamic content, client-editable CMS |
| Integrations | Payment gateways, booking/calendar systems, third-party APIs, auth |
| Content burden | Who supplies/edits copy and images — client-supplied vs. you writing/sourcing it (page count is a minor input *here*, not the whole model) |
| Data/backend complexity | Databases, user accounts, admin panels, data migrations |
| Risk | Handling payments, personal/guest data (weddings), compliance exposure |
| Urgency | Rush timelines — justifies a surcharge, not a discount |
| Business value to client | What the site is worth to *them* (a revenue-generating booking system for a gym vs. a static portfolio) — this can justify pricing toward the top of a band even when the raw build effort is moderate, but should never justify pricing *below* the effort-based floor |

**[REC]** Use this internally as a quick 5-minute scoring exercise before every quote — not a client-facing document — so pricing stays consistent across founders instead of each of you gut-feeling a number differently.

---

## 10. Internal Platform V0 — Bounded Version ASSESSED AS REASONABLE, WITH A HARD TIME-BOX

**[REC]** The bounded "Algoryxz Control V0" as scoped (Ideas / Projects / Tasks / founder status-presence / simple agent checkpoints / client feedback — explicitly excluding accounting, invoicing, complex orchestration, event sourcing, autonomous agents, deployment control, and any GitHub/Linear/Slack replacement) is **a reasonable exception to the "no internal platform before 5 clients" rule from Phase 1's pre-mortem**, for three reasons:
1. The exclusion list is doing the real work — it rules out everything that made the original Section 5/6 brief look like a multi-month product build, leaving something closer to a weekend-to-one-week project for a team with your technical strength.
2. It has genuine dual value: usable internally *and* directly usable as portfolio/capability proof for prospective clients evaluating whether "three college students using AI agents" is a credible claim or a marketing line — this is real business value, not just internal tooling.
3. It lays groundwork for the eventual agent-bridge work without committing to any of the hard architectural decisions (MCP vs REST vs event bus, permission models, task-claiming/leases) that the full Phase 4 vision requires — those stay deferred.

**[REC] The risk isn't the concept, it's scope drift** — the exact failure mode flagged in the original pre-mortem. Mitigate with a **hard, written time-box**: agree upfront (e.g., "V0 gets a maximum of 5 combined founder-days, done before or in parallel with pursuing Client #1, not instead of it") and if the excluded-features list starts getting negotiated back in ("well, just simple invoicing would help..."), that's the signal to stop and treat it as deferred Phase 4 work. Revised pre-mortem item #1 (Phase 1): the risk is not "build zero internal tooling," it's "let internal tooling expand past its time-box" — track hours spent on V0 the same way you'll track hours on client work.

---

# PHASE 1 — FINAL LOCKED RECOMMENDATIONS

### ACCEPT
- Productized service studio as launch model, two customer segments (occasion sites as wedge, local business as recurring-revenue engine)
- One brand, segmented portfolio (not two brands)
- Staged evolution path (Stage 0 → 1 → 2)
- LLP as target structure once past validation (Pvt Ltd only if funding plans emerge)
- GST registration deferred until near ₹20L threshold
- Zoho Books for bookkeeping; Razorpay for payments (2% + 18% GST + ₹199 one-time KYC — confirmed)
- Pricing table from Phase 1 Section 3, with the scoring model (Section 9 here) replacing page-count as the internal method for placing a project within its band
- Two included revision rounds, extra rounds billed — now backed by the per-hour economics in Section 4
- Revised Client Owner model (Section 7 here) replacing the original fixed-role assumption
- College/student segment split into funded-vs-personal (Section 8 here)
- Bounded, time-boxed Algoryxz Control V0, built alongside (not before) pursuing Client #1

### CHANGE
- LLP PAN/TAN: corrected to "allotted automatically with incorporation," not applied for separately
- Unincorporated founder operation: replaced "one founder invoices, split privately" with the ranked options in Section 2 here (partnership deed preferred; per-project individual invoicing as fallback only when genuinely attributable to one person)
- Recurring "Care" tier: split into Care Lite (₹499, infra-only, no human touch) and Care (₹999, includes the human-touch work) — ₹999 is now the floor for any plan with included support/content work
- Unit economics: founder labour now explicitly modeled; effective hourly rate (~₹420–915/hr baseline) is the real metric to track, not raw project revenue

### DEFER
- Full internal agent-orchestration platform (Phase 4 scope) — until 5+ paying clients and a concrete pain point V0/spreadsheets can't solve
- AI leverage KPI dashboarding/tooling — start tracking the 5 metrics in a spreadsheet now; build any visualization later if it earns its place

### REQUIRES PROFESSIONAL ADVICE
- Whether your actual joint-working pattern already constitutes an AOP regardless of documentation, and how to treat any money already exchanged between founders (CA, before first real payment if possible)
- Whether a partnership deed or a faster path to LLP is better given your realistic timeline to first revenue (CA/CS)
- LLP vs Pvt Ltd tax structuring once profit extraction plans are clearer (CA)
- GST treatment of any inter-state or future international clients (CA)

---
Ready for Phase 2 (go-to-market) on your confirmation.
