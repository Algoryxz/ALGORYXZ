# ALGORYXZ Theatre — Gate 04.2A Report
**Seat Hover / Focus Practical-Light Correction**

---

## 1. Starting Git Provenance & Working-Tree State

- **Branch:** `feature/theatre-cinematic-proof`
- **HEAD:** `b1a27e2b270b23fcb117cc48afe3c57ef985e5b7`
- **Working Tree:** Dirty by design; all Gate 03, Gate 04.1, Gate 04.1A, and Gate 04.2 evidence, plans, and reports remain strictly preserved.
- **Autonomous Actions:** Zero unauthorized git mutations; no commit, push, merge, or deployment performed.

---

## 2. Problem Statement & The New Rule

During human review of Gate 04.2, one specific weakness was identified:
> *The hover "beam wake" attempted to brighten the projector beam while leaving the current film unchanged. In runtime evidence, this was semantically confused: the gold chair outline read like a UI selection box, hover and selected states were insufficiently distinct, and a projector beam is not the physical mechanism that illuminates audience seats.*

### The New Rule
```
PROJECTOR LIGHT = SCREEN / FILM
SEAT HOVER LIGHT = AUDITORIUM PRACTICAL LIGHT
```
Hovering a project seat physically models a small, warm house practical lamp illuminating that specific chair in the dark auditorium:
- A visitor approaches a seat.
- A restrained, warm practical catches the upholstery, plaque, and floor immediately around that chair.
- The visitor understands: *"This seat is available to inspect."*
- The projector beam and currently screening film remain 100% stable and undisturbed.

---

## 3. Implementation Details

### A. Removal of Projector Beam Wake
- In `src/pages/work/theatre.astro`:
  - Removed `igniteBeam()` and `relaxBeam()` from seat hover (`pointerenter`), mouse leave (`pointerleave`), focus (`focus`), and blur (`blur`).
  - Hovering and focusing project seats now produces **zero disruption** to the projector beam, screen exposure, or room-wide illumination.

### B. Localized Practical Illumination (CSS Architecture)
In `src/styles/theatre-cinematic.css`:
1. **Upper Upholstery Downlight Catch:**
   - Evaluated via `radial-gradient(ellipse 95% 65% at 50% -8%, rgba(255, 228, 185, 0.28) 0%, rgba(185, 140, 85, 0.1) 45%, transparent 75%)` combined with warm wool base `#2d2620` fading to deep mineral darkness.
   - Generates natural, directional light with rapid spatial falloff rather than a diffuse, flat component background.
2. **Top Roll Cushion & Brass Edge Catch:**
   - `.chair-top-roll` catches a fine crest highlight (`inset 0 1px 0 rgba(255, 240, 215, 0.55)` and `border-top: 1px solid rgba(255, 235, 200, 0.45)`).
   - Casts a subtle 3px contact shadow onto the recessed material slot below.
3. **Plaque Clarity & Warm Luster:**
   - `.chair-brass-plaque` shifts from dim brass to clear polished brass `#f7e2c0` with a subtle luster text-shadow (`text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9), 0 0 8px rgba(255, 225, 175, 0.35)`).
4. **Floor Contact Pool:**
   - Below the cast-iron stanchion base, `.theatre-cinema-chair::after` casts a soft, warm elliptical contact pool onto the floor riser (`box-shadow: 0 11px 16px rgba(0, 0, 0, 0.98), 0 16px 30px -4px rgba(255, 215, 160, 0.28)`).
5. **Substantially Reduced Border:**
   - Replaced the previous full gold border (`var(--theatre-brass)`) with an extremely restrained bronze edge catch (`rgba(185, 148, 100, 0.38)`). The primary cue is light on material, not a UI bounding rectangle.
6. **Timing & Motion:**
   - `transition: transform 0.2s cubic-bezier(0.2, 0.8, 0.4, 1), box-shadow 0.2s cubic-bezier(0.2, 0.8, 0.4, 1), border-color 0.2s ease, background 0.2s ease;`
   - On hover entry: ~200ms fade-up (simulating practical filament warmth).
   - On hover exit: ~240ms graceful decay.
   - Zero bouncing, zero sweeping spotlight cone.

### C. Selected vs. Hovered State Distinction
- **Selected Project (Canonical Screen State):**
  - Stable, dignified architectural presence (`.theatre-cinema-chair.is-active`).
  - No temporary hover spotlight or floor pool beneath it.
  - The screen establishes which project is actually screening.
- **Hovered Non-Selected Project (Inspection State):**
  - Catches the warm practical lamp and floor contact pool.
  - Screen remains 100% stable on the current screening.
- Verified in `06-selected-vs-hovered.png`: Project 002 is screening, Seat 002 is in its steady selected state, Seat 000 is locally illuminated by the practical downlight, and screen stays on Project 002.

### D. Keyboard Accessibility
- `:focus-visible` receives the identical practical downlight and floor contact pool as hover.
- Additionally renders an explicit, crisp accessible focus ring:
  `outline: 2px solid rgba(225, 185, 130, 0.85); outline-offset: 4px; border-color: rgba(200, 160, 110, 0.55);`
- Provides unambiguous WCAG keyboard focus visibility without generic browser defaults.

---

## 4. Regression Matrix Verification

All mandatory acceptance and regression criteria were tested and passed:

| # | Requirement | Status | Evidence / Verification Method |
|---|---|:---:|---|
| 1 | **Hover does not alter screen/beam exposure** | **PASS** | Automated check in `capture_gate_04_2a.js`: screen remains 002 while Seat 000 is hovered. |
| 2 | **Local chair light is visually obvious** | **PASS** | `02-hover-seat-000.png` and `06-selected-vs-hovered.png` demonstrate warm downlight and floor pool. |
| 3 | **Hover does not look like selection** | **PASS** | `06-selected-vs-hovered.png` visually contrasts steady active seat vs practical-lit hovered seat. |
| 4 | **Keyboard focus remains explicit** | **PASS** | `05-keyboard-focus-seat.png` confirms practical downlight + 2px offset accessible outline. |
| 5 | **Hover exit restores exact rest state** | **PASS** | `07-hover-exit-restored.png` confirms exact return to calm resting state. |
| 6 | **Project selection changeover preserved** | **PASS** | `08-project-changeover-regression.png` confirms Gate 04.2 physical changeover runs on click. |
| 7 | **Premium lodge regression preserved** | **PASS** | `09-premium-regression.png` confirms lodge-focused dimming and folio display intact. |
| 8 | **1024x768 Viewport audit** | **PASS** | `10-1024-hover.png` confirms `sw=1024, cw=1024` (0px overflow) and 0 console errors. |
| 9 | **1280x800 Viewport audit** | **PASS** | `sw=1280, cw=1280` (0px overflow) and 0 console errors. |
| 10 | **Continuous walkthrough video** | **PASS** | `gate-04-2a-hover-walkthrough-1440x900.webm` recorded and encoded at 30fps VP9. |

---

## 5. Verification Evidence Registry

All evidence is preserved in `design/theatre-gate-04-2a/`:

### A. Walkthrough Video
- **File:** `design/theatre-gate-04-2a/gate-04-2a-hover-walkthrough-1440x900.webm`
- **Format:** VP9 webm, 1440x900, 30fps constant framerate, 5.87s duration (0.29 MB).
- **Sequence:** Rest on Project 002 → hover Seat 000 (practical downlight) → leave hover → hover Seat 001 → leave hover → hover Seat 002 → select Seat 001 → Gate 04.2 physical changeover → settled on Project 001.

### B. Verification Screenshots (10 Required)
1. `01-project-002-rest.png`: Project 002 active on screen, Seat 002 active in resting auditorium.
2. `02-hover-seat-000.png`: Hovering Seat 000: warm downlight, plaque luster, floor pool, screen unchanged.
3. `03-hover-seat-001.png`: Hovering Seat 001: warm downlight on wedding folio fragment and floor pool.
4. `04-hover-seat-002.png`: Hovering Seat 002 (currently selected seat catches practical light).
5. `05-keyboard-focus-seat.png`: Keyboard focus on Seat 000: practical downlight + accessible 2px offset outline.
6. `06-selected-vs-hovered.png`: **Key human-review frame:** Project 002 on screen, Seat 002 selected, Seat 000 hovered with practical downlight.
7. `07-hover-exit-restored.png`: Mouse left auditorium, returning all seats to exact calm rest state.
8. `08-project-changeover-regression.png`: Click on Seat 001 executed full Gate 04.2 physical changeover to 001.
9. `09-premium-regression.png`: Click on lodge armchair executed `.lodge-focused` dimming and folio display.
10. `10-1024-hover.png`: 1024x768 viewport audit demonstrating practical hover with 0px overflow and 0 console errors.

---

## 6. QA & Codebase Health Summary

- **`npm run lint`:** Exited 0 (0 errors, 0 warnings).
- **`npm run typecheck` (`astro check`):** Exited 0 (0 errors, 0 warnings, 0 hints across 22 files).
- **`npm run build` (`astro build`):** Exited 0 (13 static pages generated in 6.96s).
- **Working Tree:** Intentionally dirty. Only `src/pages/work/theatre.astro` and `src/styles/theatre-cinematic.css` modified. Zero git commits or pushes.

---

## 7. Gate 04.2A Conclusion & Handoff

Gate 04.2A resolves the semantic ambiguity of chair interaction: the projector beam remains exclusively dedicated to the cinema screen, while audience seats respond to a localized, architectural practical light.

The experience is verified, free of regressions, and ready for human review.
