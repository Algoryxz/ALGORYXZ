# ALGORYXZ / 000 — THEATRE ARCHIVE
## CINEMATIC HYBRID PROOF PLAN · GATE 01

**Document Status:** Implementation Contract (Gate 01)  
**Author:** Antigravity (Engineering Architecture)  
**Reviewer:** Smarak (Engineering & Architecture) · Deeptiman (Art Direction) · Akriti (QA)  
**Branch:** `feature/theatre-cinematic-proof` (cut from `feature/revision-03-experience`)  
**Route:** `/work/theatre` (isolated experiment; `/work` remains completely untouched)

---

## 1. REPOSITORY FORENSICS & BASELINE AUDIT

### 1.1 Git Provenance
- **Current Branch:** `feature/theatre-cinematic-proof`
- **Branch Origin:** Cut directly from `feature/revision-03-experience`
- **Baseline HEAD SHA:** `0a8dcd106c0aab3bda6bfee22841d1b213b05ed8`
- **Local `main` SHA:** `a83a3cfc3d500a4e616af595bb95928f246b3cc1` (untouched)
- **`origin/main` SHA:** `bdfe97b62aa17f396e3e7c0f9b8ae14f84f30f02` (untouched)
- **Working Tree:** Clean (zero uncommitted files)

### 1.2 Preservation & Routing Boundaries
- `src/pages/work/index.astro` is the approved canonical work archive. It must remain **100% untouched, unredirected, and visually unchanged**.
- The experiment resides strictly at `src/pages/work/theatre.astro` (`/work/theatre`).
- Production navigation (`src/components/Navigation.astro`) does NOT link to `/work/theatre`.

### 1.3 Data Model & Truthfulness
- `src/data/projects.ts` remains completely untouched.
- Truthful project mapping:
  - `000` — Algoryxz Studio Platform (`status: 'INTERNAL'`)
  - `001` — The Courtyard Wedding Portal (`status: 'CONCEPT_PROJECT'`)
  - `002` — Bhubaneswar Artisan Roastery (`status: 'CONCEPT_PROJECT'`)
- Unreleased slots:
  - `003` — Wedding Archive Slot (`status: 'RESERVED'`)
  - `004` — Proposal / Anniversary Slot (`status: 'RESERVED'`)
  - `005` — Photographer / Creator Slot (`status: 'RESERVED'`)
  - `006` — Platform / Systems Slot (`status: 'RESERVED'`)
- Rear Lodge:
  - Reserved for future client commissions (`/contact`).
- Zero fabricated client work. Zero fake testimonials.

### 1.4 Dependency Invariants
- **ZERO new JS dependencies** (no GSAP, no Framer Motion, no React, no R3F).
- **ZERO new WebGL dependencies** (no new Three.js runtime loops for this proof).
- **NO continuous requestAnimationFrame loop**.
- **NO autoplay video. NO audio.**

---

## 2. STRATEGIC CONTEXT & ARCHITECTURAL PIVOT

### 2.1 The Problem with the Realtime 3D Prototype
The low-poly Three.js greybox demonstrated that spatial seating and projector synchronization can serve as portfolio navigation. However, rendering an entire production-quality cinema inside browser WebGL created severe art-direction compromises:
- It looked like a crude game prototype or greybox CAD environment.
- The screen was subordinate to the surrounding 3D geometry rather than dominant.
- The HUD overlay felt like an external dashboard layered on top.
- High memory and draw-call overhead did not justify the aesthetic output.

### 2.2 The New Principle
> **ALGORYXZ should CONSUME cinematic imagery, not force the browser to RENDER an entire production-quality cinema.**

We adopt a **Cinematic Hybrid Architecture**:
- **High-Fidelity Cinematic Environment:** Crafted using pure CSS, multi-layered architectural gradients, proscenium masking, projection light cones, subtle filmic grain, and rich typography.
- **Lightweight DOM Interaction:** Real, semantic HTML buttons for seats, instant CSS state transitions, zero rAF overhead, sub-15KB client JS footprint.
- **Visual Dominance of the Screen:** The screen is the primary visual anchor (occupying ~50–60% of the viewport height on desktop), flanked by the dark architectural screening room and subordinate ivory/brass seating rows.

---

## 3. SCOPED VISUAL LANGUAGE & PALETTE

All tokens for this proof are scoped under `.theatre-cinematic` and do NOT pollute global styles:

| Token Name | Hex Value | Semantic Usage |
|---|---|---|
| `--theatre-black` | `#080706` | Deep cinema void, proscenium backdrop |
| `--theatre-charcoal` | `#141210` | Architectural screening room walls & ceiling |
| `--theatre-velvet` | `#211511` | Deep acoustic paneling & aisle shadow |
| `--theatre-ivory` | `#F0E8D8` | Standard project seat upholstery |
| `--theatre-parchment` | `#CFC1A7` | Printed ticket & programme surface |
| `--theatre-brass` | `#A88457` | Seat framing, architectural structural rules, numbering |
| `--theatre-oxblood` | `#5D201B` | Rear Lodge premium client upholstery |
| `--theatre-glow` | `#FFE7BC` | Projector beam, screen illumination, active glow |
| `--theatre-amber` | `#D97736` | Aisle floor illumination, status indicators |

### Typography Scale
- **Display / Cinema Wordmarks:** `'Playfair Display', Georgia, serif` (editorial cinematic serif).
- **Interface / Project Titles:** `'Hanken Grotesk', system-ui, sans-serif` (clean, contemporary Algoryxz grotesque).
- **Metadata / Programme Badges:** `'JetBrains Mono', monospace` (crisp house/seat colophons).

---

## 4. GATE 01 SCOPE (WHAT IS BUILT)

Gate 01 is strictly bounded to the following 11 components:

1. **A. Ticket Entry:** Physical admission ticket card on arrival (`ALGORYXZ PICTURES · HOUSE 01`). Clean entry action `ENTER HOUSE 01 →` or direct escape to programme.
2. **B. Auditorium Arrival:** Atmospheric private screening room with proscenium framing, angled architectural side walls, ceiling soffit, and floor aisle glow.
3. **C. The Screen:** Dominant projected canvas displaying the active project’s visual artifact (`MaterialArtifact` / SVG / typography), warm projection glow, subtle vignette, and live link to case study.
4. **D. Interactive Project Seats:** Real DOM buttons representing seats `000`, `001`, `002` with ivory upholstery, brass numbering, and instant hover/focus/tap feedback.
5. **E. Projector Reaction:** Angled CSS projection light cone emanating from above-rear, subtly shifting its focus and glow intensity when different seats are activated.
6. **F. Truthful Projects:**
   - `000` — Algoryxz Studio Platform (`INTERNAL`)
   - `001` — The Courtyard Wedding Portal (`CONCEPT`)
   - `002` — Bhubaneswar Artisan Roastery (`CONCEPT`)
7. **G. Reserved Future Seats:** Slots `003`, `004`, `005`, `006` styled as darkened, brass-numbered seats marked `RESERVED` (disabled, clearly unreleased).
8. **H. Premium Rear Lodge:** Elevated rear row with deep oxblood upholstery, warm lamp cues, and conversion CTA (`START A PROJECT ↗` -> `/contact`).
9. **I. Programme / Directory Fallback:** Slide-out drawer or overlay providing a full printed programme listing with keyboard navigation and Escape key dismissal.
10. **J. Mobile Composition (390×844 & 320×568):** Portrait cinema hierarchy: Screen -> Projector beam -> Aisle suggestion -> Large touch-friendly screening controls (≥44px) -> Premium Lodge -> Contact link.
11. **K. Reduced-Motion Mode:** Automatic bypass of entrance motion, instant project switching, zero moving beams, static editorial presentation with full semantic equivalence.

---

## 5. GATE 01 EXCLUSIONS (WHAT IS NOT BUILT)

The following items are deferred to future gates and will NOT be implemented in Gate 01:
- Animated cinema exterior marquee.
- Video corridor flythrough or 3D opening doors.
- Attendants, waiters, or humanoid characters.
- Food, beverage, or popcorn service mechanics.
- Red carpet exit sequence.
- Financial or ticket purchasing transactions.
- Audio or ambient sound design.
- Full cinematic video playback.
- Three.js or WebGL models / shaders.

---

## 6. PROPOSED IMPLEMENTATION FILES

| File Path | Action | Scope of Content |
|---|---|---|
| `docs/THEATRE_CINEMATIC_HYBRID_PLAN.md` | **NEW** | This authoritative architectural contract. |
| `src/layouts/TheatreLayout.astro` | **NEW** | Full-bleed HTML shell, fonts, skip link, escape hatch to `/work`. |
| `src/pages/work/theatre.astro` | **NEW** | The `/work/theatre` route containing the ticket, cinema room, screen, seats, lodge, and programme. |
| `src/styles/theatre-cinematic.css` | **NEW** | Scoped cinema styles: proscenium, lighting, projection beam, seat geometry, mobile portrait rules. |
| `src/data/theatre-projects.ts` | **NEW** | Presentation join layer linking canonical `projects.ts` to seat indices without altering canonical schemas. |

**Existing files touched: ZERO.**  
`src/pages/work/index.astro` and `src/data/projects.ts` remain completely untouched.

---

## 7. FUTURE CINEMATIC PRODUCTION PIPELINE (DOCUMENTATION ONLY)

If Gate 01 passes human visual review, the production asset workflow for subsequent gates will be:
1. **Source References:** Architectural cinema references and photographic plate studies.
2. **Offline 3D Rendering (Blender):** Model lighting, materials, and camera angles offline in Blender using Algoryxz’s graphite/brass/oxblood material definitions.
3. **Plate Extraction:** Render high-resolution web-optimized cinematic backdrops (AVIF/WebP) and lightweight loop plates.
4. **Hybrid Assembly:** The browser layers real DOM interactive elements (seats, screen content, typography) over pre-rendered cinematic plates.
5. **No Client 3D Overhead:** The user’s GPU never renders polygons; it only composites beautiful 2D planes with native hardware acceleration.

---

## 8. QA VERIFICATION GATES

Following implementation, the proof must satisfy:
1. `npm run lint` — PASS (0 errors).
2. `npm run typecheck` — PASS (0 errors).
3. `npm run build` — PASS (0 errors).
4. `npm run preview` on `http://localhost:4321/work/theatre`.
5. Playwright screenshot verification across:
   - `01-ticket-desktop.png` (1440×900)
   - `02-auditorium-000-desktop.png` (1440×900)
   - `03-auditorium-001-desktop.png` (1440×900)
   - `04-auditorium-002-desktop.png` (1440×900)
   - `05-premium-lodge-desktop.png` (1440×900)
   - `06-programme-desktop.png` (1440×900)
   - `07-auditorium-mobile-390.png` (390×844)
   - `08-premium-mobile-390.png` (390×844)
   - `09-mobile-320.png` (320×568)
   - `10-reduced-motion.png` (prefers-reduced-motion: reduce)
   - `/work` before vs after comparison (guarantee zero alteration to canonical work page).
