# Algoryxz Theatre — Gate 04.2A-R Verification Report
**Date:** 2026-09-30  
**Branch:** `feature/theatre-cinematic-proof`  
**Scope:** Gate 04.2A-R (Human Review Correction)

---

## 1. Executive Summary

Human review of Gate 04.2A identified two isolated defects:
1. **Screen Optical Stability during Keyboard Focus:** In prior evidence `05-keyboard-focus-seat.png`, focusing Seat 000 introduced visible chromatic registration and subpixel color shifts on the projected typography. Keyboard focusing a chair must cause zero optical change to the screen or beam; it may alter only that chair, its local practical light, its floor contact pool, and its accessible focus ring.
2. **Selected Chair Practical Inspection Feedback:** In prior evidence `04-hover-seat-002.png`, the currently selected chair was nearly indistinguishable when hovered or focused compared to rest. The active chair must layer the temporary practical inspection downlight, upholstery crest highlight, plaque luster, and floor stanchion pool over its calm active state without disrupting the screen or projectionist state.

Both defects have been addressed, verified across DOM/CSS inspections, and confirmed via pixel-by-pixel differential canvas audits.

---

## 2. Engineering Changes

### A. Screen Isolation and Optical Invariance (`src/styles/theatre-cinematic.css`)
- Added `contain: paint;` and `isolation: isolate;` to `.theatre-screen-canvas`.
- This ensures that keyboard focus, outline rendering, or hover states across sibling rows in `.theatre-auditorium` never trigger subpixel layer recalculations, compositor de-promotions, or font-antialiasing mode switches on the projected screen.
- Verified that focusing Seat 000 introduces **0 pixel differences** on the projection screen canvas.

### B. Active Chair Practical Inspection Downlight (`src/styles/theatre-cinematic.css`)
- Structured the CSS cascade so that `.theatre-cinema-chair.is-active:hover`, `.theatre-cinema-chair.is-active:focus-visible`, `.theatre-cinema-chair.is-active.is-hovered`, and `.theatre-cinema-chair.is-active.is-focused` explicitly layer the warm practical illumination over the active chair:
  - **Upper upholstery downlight:** `radial-gradient(ellipse 95% 65% at 50% -8%, rgba(255, 228, 185, 0.32) 0%, rgba(185, 140, 85, 0.12) 45%, transparent 75%)`
  - **Top-roll crest highlight:** `rgba(255, 238, 205, 0.28)` crest reflection and `rgba(255, 235, 200, 0.5)` top-bead border
  - **Brass plaque luster:** `#faebd2` with `rgba(255, 225, 175, 0.45)` amber bloom
  - **Floor stanchion contact pool:** `0 16px 30px -4px rgba(255, 215, 160, 0.28)` on `::after`
  - **Accessible outline:** 2px solid `rgba(225, 185, 130, 0.85)` with 4px offset on `:focus-visible` / `.is-focused`
  - **Projection stability:** Zero disruption or re-triggering of screen slides or projector beam.

---

## 3. Pixel-Level Differential Verification

Runtime canvas comparison between `01-rest-control.png` and each evaluation state yielded deterministic evidence:

| Evaluated Frame | Condition | Screen Diff Pixels (y < 460) | Chair Plane Diff Pixels (y >= 460) | Status |
|:---|:---|:---:|:---:|:---:|
| `01-rest-control.png` | Project 002 screening at rest | Baseline | Baseline | PASS |
| `02-hover-inactive-seat.png` | Inactive Seat 000 hovered | **0 diffs** | 27,643 diffs (practical light active) | PASS |
| `03-hover-active-seat.png` | Active Seat 002 hovered | **0 diffs** | **22,005 diffs** (practical light layered) | PASS |
| `04-keyboard-focus-inactive-seat.png` | Inactive Seat 000 keyboard focused | **0 diffs** | **29,253 diffs** (outline + practical light) | PASS |
| `05-selected-vs-hovered.png` | Seat 002 active vs Seat 000 hovered | **0 diffs** | Clear dual-state contrast | PASS |

### Key Findings
1. **Frames 03 and 04 Screen Invariance:** The screen canvas pixels for both `03-hover-active-seat.png` and `04-keyboard-focus-inactive-seat.png` are **100% pixel-identical** (`screenDiffs: 0`) to `01-rest-control.png`. Chromatic registration and typography jitter are entirely eliminated.
2. **Active Seat Hover Distinguishability:** Hovering the active chair now produces **22,005 modified pixels** concentrated on Seat 002's top roll, plaque, body upholstery, and floor stanchion pool, rendering the hovered state immediately distinguishable from rest while retaining its active selection identity.

---

## 4. Quality Assurance & Regressions

- `npm run lint`: **0 errors, 0 warnings** across 22 files.
- `npm run typecheck`: **0 errors, 0 warnings, 0 hints**.
- `npm run build`: **13 static pages built successfully**.
- Console errors during runtime test: **0**.
- Git tree: Dirty working tree preserved without commits, pushes, merges, or deployments.

---

## 5. Artifact Directory

All 5 required frames have been recorded to `design/theatre-gate-04-2a-r/`:
- `01-rest-control.png`
- `02-hover-inactive-seat.png`
- `03-hover-active-seat.png`
- `04-keyboard-focus-inactive-seat.png`
- `05-selected-vs-hovered.png`
