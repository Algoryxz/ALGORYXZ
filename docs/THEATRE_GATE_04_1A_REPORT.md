# ALGORYXZ Theatre — Gate 04.1A Report
**Curtain Substitution Only**

---

## 1. Starting Git Provenance & Working-Tree State

- **Branch:** `feature/theatre-cinematic-proof`
- **HEAD:** `b1a27e2b270b23fcb117cc48afe3c57ef985e5b7`
- **Working tree:** Dirty by design; all Gate 03 and Gate 04.1 reports and evidence remain preserved.
- **Autonomous actions:** No commit, push, merge, or deployment performed.

---

## 2. Change Request & Architectural Scope

This gate implements **ONE tightly scoped visual substitution** within the accepted Gate 04.1 admission sequence:
- **Prior accepted sequence:** `ticket admission` → `vestibule threshold` → `closed double doors` → `doors open` → `projector ignition` → `accepted auditorium`
- **Gate 04.1A sequence:** `ticket admission` → `vestibule threshold` → `CLOSED CURTAIN` → `CURTAIN PARTS FROM CENTER` → `projector ignition through opening` → `accepted auditorium`

### Key Architectural Decisions:
1. **Curtain is the threshold:** The curtain completely replaces the door mechanism. Old door panels (`.entry-door`, `.entry-doors`, `.entry-door-left`, `.entry-door-right`, `.entry-door-seam`) were completely removed from the DOM and CSS; no residual doors open behind the drapery.
2. **Strict perspective preservation:** The curtain container (`.entry-curtain`) is mounted in the exact footprint and 2.5D perspective position of the accepted Gate 04.1 doorway (`width: min(44vw, 540px); height: min(62vh, 540px); left: 50%; top: 50%; transform: translate(-50%, -42%)`), bounded by the restrained bronze portal frame and drop shadow. It does not exist as a flat full-screen web overlay.
3. **Pure DOM/CSS implementation:** Zero external dependencies, zero Three.js modifications, zero runtime overhead.

---

## 3. Design Language & Palette Adherence

In strict adherence to the ALGORYXZ brand contract:
- **No generic red theatre curtains:** The curtain belongs exclusively to the accepted graphite and mineral palette.
- **Fabric palette:**
  - Base body: Dark graphite / warm near-black (`#0a0806` to `#18130f`) with subtle mineral warmth.
  - Fold shadows (creases): `#080605` (deep near-black trough).
  - Fold crests (highlights): `#221a14` (graphite-bronze luster).
  - Inner center edge rim light: Restrained bronze (`rgba(163, 128, 83, 0.35)` to `transparent 14px`).
  - Top architectural traverse track / pelmet: `#241a12` with bronze lower edge (`rgba(163, 128, 83, 0.38)`).
  - Center light leak: Warm amber illumination (`#FFE7BC` / `#d97736`).
- **No decorative ornaments:** No tassels, no fringe, no Victorian trim, no valances. Pure architectural drape geometry.

---

## 4. Fabric Geometry & Opening Choreography

### Static Form (Closed Threshold)
- Two symmetric drape halves meet flush at the vertical center seam (`width: 50%` each).
- Each half features 6 broad vertical drape folds rendered via repeating linear gradient structures (`period = 16.666%`).
- Restrained bronze rim illumination highlights the inner contact edges of the fabric at the center seam.

### Dynamic Parting & Gathering Motion
- As `is-opening` fires, both curtain halves part outward from the center seam:
  - Outer transform origin (`transform-origin: left center` on left half; `right center` on right half).
  - Horizontal scaling (`scaleX(0.38)`) visually compresses the fabric toward the architectural door jambs, naturally doubling the visual density of the folds near the outer edges.
  - Multi-point dynamic CSS `clip-path` shapes the inner fabric edges into a catenary/parabolic inward curve (`polygon(0 0, 100% 0, 93% 25%, 80% 50%, 93% 75%, 100% 100%, 0 100%)`), avoiding rigid panel wipes and capturing the physical behavior of gathered theatre velvet.
- In `is-igniting`, curtains achieve their final gathered rest against the side jambs (`scaleX(0.22)`), framing the ignited projector beam.

### Light Interaction
- **Closed:** Central seam emits only a subtle 2px warm hairline glow (`rgba(255, 231, 188, 0.16)`).
- **Opening:** Center gap widens to 200px with a soft radial amber leak (`radial-gradient(ellipse at 50% 50%, rgba(255, 231, 188, 0.45)...)`), catching the inner fabric edges.
- **Ignition:** Full 440px bloom illuminates the opening, smoothly bridging into the stage's projector cone.

---

## 5. Timing & State Machine (Gate 04.1 Preserved)

The underlying JavaScript admission sequence (`beginAdmission()`) in `src/pages/work/theatre.astro` was preserved exactly without retiming:

| Beat | Offset from Click | State Class | Choreography Action |
| --- | ---: | --- | --- |
| **Admission Trigger** | `0ms` | `is-admitting` | Ticket translates forward and fades out (540ms) |
| **Closed Threshold** | `540ms` | `is-threshold` | Vestibule wall/floor perspective and closed curtain appear (650ms) |
| **Curtain Opening** | `1190ms` | `is-opening` | Curtains part from center with curved silhouette; light leak expands (950ms) |
| **Projector Ignition** | `2140ms` | `is-igniting` | Curtains finish gathered at jambs; projector ignites; stage brightness lifts (900ms) |
| **Auditorium Arrival** | `3040ms` | `is-complete` | Entry overlay fades out; auditorium is live; ticket stub appears |
| **Fully Settled** | `3590ms` | `is-complete` | 550ms fade completes; stage fully interactive |

---

## 6. Regression Matrix Verification

All 11 mandatory regression criteria were verified:

| # | Regression Test Requirement | Status | Evidence / Verification Method |
|---|---|:---:|---|
| 1 | **No admission-ticket reappearance** | **PASS** | Verified across all frames (frames 120–195); `.theatre-entry.is-complete .theatre-entry-ticket-wrap { display: none; }` remains intact. |
| 2 | **No old door panels opening behind curtain** | **PASS** | Automated DOM audit confirmed 0 `.entry-door*` elements exist. Door styles completely purged. |
| 3 | **No bright rectangular flash** | **PASS** | Smooth radial gradient transitions; no sudden full-portal white/light rectangles. |
| 4 | **No curtain clipping outside architectural threshold** | **PASS** | `.entry-curtain` bounds are clamped within portal dimensions `min(44vw, 540px)` with `overflow: hidden`. |
| 5 | **No curtain snapping between states** | **PASS** | Verified smooth 1.05s `cubic-bezier(0.16, 1, 0.3, 1)` transitions on `transform` and `clip-path`. |
| 6 | **No flat-panel appearance during motion** | **PASS** | Curved multi-point `clip-path` and outer-origin `scaleX` compress the fold pattern during travel. |
| 7 | **No changed auditorium final composition** | **PASS** | Frame `08-auditorium-settled.png` is pixel-identical to Gate 03.3 / Gate 04.1 accepted state. |
| 8 | **No timing regression** | **PASS** | Scripted setTimeout chain is identical (540ms → 650ms → 950ms → 900ms). |
| 9 | **Repeated fresh sessions behave identically** | **PASS** | Tested with sessionStorage clears; deterministic execution confirmed across multiple test runs. |
| 10 | **Escape skip still works** | **PASS** | Automated Playwright test verified: pressing `Escape` during transition immediately calls `revealAuditorium()`. |
| 11 | **Reduced motion still works** | **PASS** | Automated Playwright test verified: `prefers-reduced-motion: reduce` triggers immediate 180ms collapse. |

---

## 7. Evidence Registry

### Screenshots (`design/theatre-gate-04-1a/`)

1. `01-ticket-rest.png` (84 KB) — Initial ecru admission ticket at rest before activation.
2. `02-activation.png` (84 KB) — Pointer focus/activation on `ENTER THE HOUSE →`.
3. `03-admitting.png` (28 KB) — Ticket forward-scale and opacity dissipation gesture.
4. `04-closed-curtain.png` (148 KB) — Vestibule threshold with closed graphite drapery and bronze seam.
5. `05-curtain-opening.png` (220 KB) — Parting drapes exhibiting smooth catenary silhouette arc and optical light leak.
6. `06-curtain-midopen.png` (220 KB) — Mid-opening drape gathering with intensified fold density against jambs.
7. `07-projector-ignition.png` (240 KB) — Projector bloom radiating through fully gathered side drapes.
8. `08-auditorium-settled.png` (491 KB) — Final settled auditorium with persistent ticket stub and zero ghosting.

### Replacement Walkthrough Video
- **Path:** `design/theatre-gate-04-1a/gate-04-1a-curtain-walkthrough-1440x900.webm`
- **Resolution:** 1440 × 900
- **Codec:** VP9 (`libvpx-vp9`, `yuv420p`, CRF 16, bitrate ~559 kbps)
- **Framerate:** 30 fps (uniform wall-clock resampled)
- **Total Duration:** 6.50 seconds (195 frames)
- **File Size:** 454,348 bytes (~444 KB)

### Measured Encoded Video Timeline

| Milestone / State | Timestamp (Encoded) | Delta from Activation | Description |
| --- | ---: | ---: | --- |
| **Ticket rest** | `0.00s – 1.21s` | — | Initial ticket held at rest (`1.21s` continuous duration) |
| **Activation timestamp** | `1.21s` | `+0.00s` | Pointer click on `ENTER THE HOUSE` |
| **Admission transition** | `1.21s – 1.75s` | `+0.54s` | Ticket departs forward and fades (`is-admitting`) |
| **Closed-curtain threshold** | `1.75s – 2.40s` | `+1.19s` | Vestibule architecture and closed graphite drape appear (`is-threshold`) |
| **Curtain opening** | `2.40s – 3.35s` | `+2.14s` | Drapes part from center with smooth curved arc and optical light leak (`is-opening`) |
| **Projector ignition** | `3.35s – 4.25s` | `+3.04s` | Curtains gathered at side jambs; projector ignites (`is-igniting`) |
| **Auditorium arrival** | `4.25s` | `+3.04s` | Stage brightness lifts to full; ticket stub appears (`is-complete`) |
| **Overlay fully settled** | `4.80s` | `+3.59s` | 550ms entry overlay transition completely finishes |
| **Clean final rest duration** | `4.80s – 6.50s` | — | Completely settled Gate 03 auditorium (`1.70s` continuous post-settle rest, `2.25s` post-arrival) |

---

## 8. Viewport & Overflow Audit

Verified via automated headless browser sweep across accepted desktop viewports:

| Viewport | Rest (w × h) | Arrived (w × h) | Overflow Status | Console Errors |
|:---:|:---:|:---:|:---:|:---:|
| **1440 × 900** | 1440 × 900 | 1440 × 900 | **0 overflow (PASS)** | **0 errors** |
| **1280 × 800** | 1280 × 800 | 1280 × 800 | **0 overflow (PASS)** | **0 errors** |
| **1024 × 768** | 1024 × 768 | 1024 × 768 | **0 overflow (PASS)** | **0 errors** |

---

## 9. Quality Assurance & Verification

- **Lint:** `npm run lint` → 0 errors.
- **Typecheck:** `npm run typecheck` → 0 errors, 0 warnings, 0 hints (22 files checked).
- **Build:** `npm run build` → 13 static pages built successfully in 5.3s.

---

## 10. Scope Attestations

- Canonical `/work` touched: **NO**
- Canonical project data touched: **NO**
- Accepted auditorium materially redesigned: **NO**
- External assets introduced: **NO**
- New dependencies introduced: **NO**
- Audio introduced: **NO**
- Attendant introduced: **NO**
- `main` branch touched: **NO**
- Commit made: **NO**
- Push made: **NO**
- Deployment performed: **NO**
