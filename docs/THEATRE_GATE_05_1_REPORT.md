# ALGORYXZ THEATRE — GATE 05.1 REPORT
## Mobile House / Spatial Translation

**Branch:** `feature/theatre-cinematic-proof`  
**Starting HEAD:** `b1a27e2b270b23fcb117cc48afe3c57ef985e5b7`  
**Working Directory:** Dirty by design (preserving accepted Gates 03.3, 04.1, 04.1A, 04.2, 04.2A, 04.2A-R, 04.3)  
**Status:** Verification complete; ready for human review  
**Verdict:** **PASS**

---

## 1. Git Provenance & Starting HEAD

- **Active Branch:** `feature/theatre-cinematic-proof`
- **Starting HEAD Commit:** `b1a27e2b270b23fcb117cc48afe3c57ef985e5b7`
- **Working-Tree State Before Work:** Working tree contained uncommitted changes to `src/pages/work/theatre.astro` and `src/styles/theatre-cinematic.css` reflecting the accepted and frozen baselines of Gates 03.3 through 04.3.
- **Safety Invariant Maintained:** No reset, no stash drop, no branch switching, no commit, no push, no merge, and no production deployment.

---

## 2. Files Changed

1. `src/layouts/TheatreLayout.astro`:
   - Wrapped escape text in `<span class="theatre-escape-label">Work / Archive</span>` to enable responsive hierarchy adjustments on small phone screens without touching desktop layout.
2. `src/pages/work/theatre.astro`:
   - Enhanced `.theatre-marquee-badge` with `<span class="marquee-brand">` and `<span class="marquee-sub">` so desktop displays the full title `ALGORYXZ PICTURES · HOUSE 01 · PRIVATE SCREENING` while mobile displays a crisp, compact `HOUSE 01`.
   - Added `centerSeatInRow(seatElement)` to center the active chair smoothly inside `.theatre-seat-row` on mobile upon admission, project selection, or keyboard focus.
   - Added `body.drawer-locked` class toggling to `openProgramme()` and `closeProgramme()` to eliminate background body scroll leakage on touch devices.
3. `src/styles/theatre-cinematic.css`:
   - Completely replaced the temporary mobile fallback with the definitive Gate 05.1 mobile house translation system inside `@media (max-width: 768px)`.
   - Guaranteed desktop freeze by keeping all desktop rules outside media queries completely untouched.
   - Guarded horizontal page overflow with `overflow-x: clip;` across viewport boundaries.

---

## 3. Mobile Composition Strategy

- **Design Thesis:**
  - **Desktop:** Auditorium overview — the visitor is seated in the audience looking across the raked rows toward the proscenium arch.
  - **Mobile:** Intimate aisle view — the visitor feels standing inside the same House 01, positioned closer to the aisle and screen.
- **Spatial Hierarchy:**
  ```text
  TOP / HOUSE CHROME (Fixed/Compact Architectural Marquee)
  ↓
  PROJECTION SCREEN (The Living Poster Hero in 16:10 Arch)
  ↓
  PROJECT SEATING / AISLE (Horizontal Snap Track with Neighboring Flanks)
  ↓
  PREMIUM LODGE (Intimate Foreground Armchair & Folio)
  ↓
  SUBTLE HOUSE DEPTH / FLOOR RISERS
  ```
- The auditorium is **not** scaled down into an illegible miniature or flattened into generic mobile cards. It remains recognizably the physical House 01 private screening room.

---

## 4. House Chrome Translation

- **Top Navigation Controls:**
  - **Left:** Minimal escape hatch `.theatre-escape` (`← WORK / ARCHIVE`) styled at 9px mono with backdrop blur.
  - **Center:** Architectural marquee badge `.theatre-marquee-badge` (`HOUSE 01`) at 8px mono.
  - **Right:** Printed programme trigger `.theatre-programme-toggle` (`≡ PROGRAMME`) at 9px mono.
- **Collision Immunity:** Tested from 375px through 430px. Total header footprint is ~245px, leaving over 130px of breathing room on 375px screens. Zero overlap, no microscopic type, and no generic hamburger menus.

---

## 5. Projection Screen Responsive Strategy

- **Hero Surface:** The proscenium arch retains its physical 2-layer velvet/brass beveling (`border: 1px solid rgba(163, 128, 83, 0.25)`).
- **Proportions:** Aspect ratio set to `16 / 10` with `min-height: 224px; max-height: 260px;`.
- **Art Direction Preserved:**
  - **Project 000 (Studio Platform):** Structural XZ fold graphic watermark positioned on the right background, clean 21px Playfair title, mono tags, and notched ticket `ENTER PROJECT ↗` button anchored within screen bounds.
  - **Project 001 (Wedding Portal):** Full photographic bleed with sepia/monsoon vignette, 21px serif title, italic caption *"after the rain — a day. a lifetime."*, and `ENTER PROJECT ↗`.
  - **Project 002 (Roastery):** Graphic specimen card with spine accent showing *"FORM FOLLOWS FEELING."*, 21px title, and `ENTER PROJECT ↗`.
  - **LODGE (Next Commission):** `NOW SCREENING · NEXT COMMISSION`, `YOUR PROJECT COULD SCREEN HERE.`, editorial invitation copy, and `START A PROJECT ↗` CTA routing to `/contact`.
- **Zero Clipping:** No typography collides with visual artwork or spills outside the proscenium frame.

---

## 6. Seat-Row / Aisle Interaction Model

- **No Tiny 5-Chair Squeeze:** Rather than shrinking 5 chairs across 390px, the row translates into an authentic aisle-oriented horizontal scroll track.
- **Physical Geometry:**
  - Each `.theatre-cinema-chair` is sculpted at `220px` width with `scroll-snap-align: center`.
  - Padding: `10px calc(50vw - 110px) 14px` ensures any chair snaps perfectly to the center of the mobile screen.
  - Neighboring chairs visibly enter the composition from the left and right flanks (~85px exposed), signaling naturally: *"There are more seats in this row."*
  - No carousel dots, no chevron arrows, no card containers. The physical cinema chairs themselves are the navigation.
- **Tactile Elements:** Retains top rolls, brass plaques (`000`, `001`, `002`, `003`, `005`), seat numbers (`B3`, `A2`, `A4`, `C1`, `C4`), and embedded physical materials (fold plate, photo frame, pressed olive paper, reserved plaque).

---

## 7. Touch & Interaction Behavior

- **Single Tap Activation:** Tapping any visible neighboring project chair immediately:
  1. Centering the chair smoothly in the row.
  2. Activating its local practical downlight and floor glow.
  3. Commencing the optical projection changeover.
  4. Updating the screen to the newly chosen film.
- **Separation of Concerns:** `ENTER PROJECT ↗` on the screen remains the distinct intentional link to view the full project.
- **Disabled Chairs:** Reserved seats (C1, C4) are visually dimmed and non-interactive (`disabled`).
- **Focus Auto-Center:** Tabbing via keyboard or screen reader automatically scrolls the focused chair into the aisle center.

---

## 8. Mobile Project Changeover

- Preserves the Gate 04.2 optical grammar without generic UI sliding:
  1. Immediate chair tactile acknowledgment.
  2. Projector shutter closes into warm-black threshold.
  3. Arc strike and bloom catch the new living poster.
  4. Settles cleanly into the projection canvas.

---

## 9. Premium Lodge Mobile Behavior

- **Positioning:** Situated in its own closer foreground terrace (`.theatre-lodge-terrace`) directly beneath the regular seating row.
- **Materiality:** Centered interactive red upholstered armchair (`.lodge-armchair-interactive`, width 270–280px), brass plaque `PREMIUM LODGE · CLIENT SEAT`, physical printed ecru reservation folio, and dedicated amber sconce lamp. Beside it sits the brass service side table.
- **Ritual Execution:** Tapping the lodge armchair triggers the accepted Gate 04.3 ritual:
  - Phase 2A (0–360ms): Sconce flares in brilliant warm amber, folio tilts and lifts revealing `ADMIT: THE NEXT IDEA`, and regular seating rows dim (`opacity: 0.62; brightness: 0.82`).
  - Phase 2B (360–1220ms): Screen shutters down, blooms, and settles into `NOW SCREENING · NEXT COMMISSION`.
- **Return Path:** Tapping Seat 001, 002, or 000 settles the lodge back to rest and restores regular seating illumination.

---

## 10. Programme Mobile Behavior

- **Full-Width Editorial Overlay:** On mobile, the drawer expands to a full-screen house folio overlay (`width: 100vw`).
- **Body Scroll Lock:** Opening the drawer applies `body.drawer-locked` (`overflow: hidden !important; touch-action: none;`), eliminating background scrolling leaks.
- **Accessible Close Button:** Touch target expanded to `44 × 44px`. Focus shifts to close button on open, and returns to the toggle button on close. Escape key closes cleanly.
- **Card Selection:** Tapping any project card in the drawer closes the drawer and changes the screening to that film.

---

## 11. Admission Mobile Behavior

- **Portrait Admission Ticket:** Formatted at `width: min(350px, 88vw); min-height: 142px;` with stub, perforation, and full-width `ENTER THE HOUSE →` button (44px min-height).
- **Architectural Curtain Threshold:** The graphite drapes fit naturally within the portrait aperture (`width: min(330px, 84vw); height: 38vh;`). Upon clicking admit, the drapes part smoothly from center with authentic curved geometry, allowing the projector beam to ignite through the gap into House 01.
- **Skip Control:** Accessible `SKIP TO AUDITORIUM` button reachable in the top-right corner.

---

## 12. Session Behavior

- Session persistence via `sessionStorage['algoryxz-house-01-admitted']` functions identically across mobile and desktop.
- Re-visiting the page within the same session immediately displays House 01 with the physical ticket stub resting in the lower-left corner (`01-mobile-session-revisit-390.png`).

---

## 13. Reduced Motion Behavior

- `prefers-reduced-motion: reduce` honored:
  - Ticket admission transitions immediately without sweeping threshold travel.
  - Foliage/folio mechanical transforms and proscenium scale animations suppressed.
  - Project changeovers and lodge reservation execute instant crossfades.

---

## 14. Accessibility & Focus Behavior

- Semantic `<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, `<button>`, and `<a>` elements intact.
- Accessible focus-visible outlines (`outline: 2px solid var(--theatre-brass-bright)`) verified on ticket admit button, regular chairs, lodge armchair, programme cards, and CTA buttons.
- Focus order flows logically from header chrome $\to$ projection screen CTA $\to$ regular seating $\to$ premium lodge $\to$ programme.

---

## 15. Viewport & Overflow Audit Measurements

Checked across all primary and regression viewports:

| Viewport | innerWidth | innerHeight | clientWidth | scrollWidth | clientHeight | scrollHeight | Page Overflow? |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **390 × 844 (Ticket)** | 390 | 844 | 390 | 390 | 844 | 844 | **NO (false)** |
| **390 × 844 (Arrived)** | 390 | 844 | 390 | 390 | 844 | 844 | **NO (false)** |
| **430 × 932 (Arrived)** | 430 | 932 | 430 | 430 | 932 | 932 | **NO (false)** |
| **375 × 812 (Arrived)** | 375 | 812 | 375 | 375 | 812 | 812 | **NO (false)** |
| **393 × 852 (Audit)** | 393 | 852 | 393 | 393 | 852 | 852 | **NO (false)** |
| **1440 × 900 (Desktop)** | 1440 | 900 | 1440 | 1440 | 900 | 900 | **NO (false)** |

`document.documentElement.scrollWidth === document.documentElement.clientWidth` across all tested viewports. **Zero accidental horizontal page overflow.**

---

## 16. Desktop Freeze / Regression Contract

- Desktop at `1440 × 900` was independently verified:
  - `17-desktop-1440-project-regression.png`: Studio Platform screening, proscenium arch, 5 raked chairs, lodge armchair, ticket stub, and full marquee text 100% identical to Gate 04.3.
  - `18-desktop-1440-premium-regression.png`: Next Commission state identical to Gate 04.3.
  - `19-desktop-1440-programme-regression.png`: Right-side drawer open identical to Gate 04.3.

---

## 17. Performance, Build & Console Findings

- `npm run lint`: **0 errors, 0 warnings**
- `npm run typecheck`: **0 errors, 0 warnings, 0 hints across 22 files**
- `npm run build`: **13 static pages built successfully**
- Runtime browser console errors: **0**
- Runtime network request failures: **0**
- Dependencies added: **0**

---

## 18. Evidence Artifact Index

All visual artifacts are recorded in `design/theatre-gate-05-1/`:

| Artifact Name | Description |
| :--- | :--- |
| `01-mobile-ticket-390.png` | Portrait admission ticket at 390×844 |
| `02-mobile-ticket-focus-390.png` | Accessible keyboard focus on ticket enter button |
| `03-mobile-threshold-390.png` | Curtain reveal parting at threshold |
| `04-mobile-arrived-390.png` | Auditorium arrived state (Seat 000 screening, active chair centered) |
| `05-mobile-project-seat-selection-390.png` | Seat 001 tapped and centered in the row with practical light |
| `06-mobile-project-screen-390.png` | Settled Courtyard Wedding living poster projection |
| `07-mobile-seat-row-context-390.png` | Aisle row context showing neighboring chair flanks |
| `08-mobile-premium-rest-390.png` | Premium Lodge resting presence in foreground |
| `09-mobile-premium-activated-390.png` | Phase 2A lodge acknowledgement (sconce flare, presented folio) |
| `10-mobile-commission-screen-390.png` | Settled Next Commission screen with `/contact` CTA |
| `11-mobile-programme-open-390.png` | Full-width mobile Programme drawer open with body scroll lock |
| `12-mobile-project-return-390.png` | Return to regular Seat 002 (Roastery) settled |
| `13-mobile-session-revisit-390.png` | Immediate session revisit in House 01 with ticket stub |
| `14-mobile-reduced-motion-arrived-390.png` | Reduced-motion instant admission arrival |
| `15-mobile-430.png` | Full composition on 430×932 (iPhone Pro Max) |
| `16-mobile-375.png` | Full composition on 375×812 (iPhone Mini / SE) |
| `17-desktop-1440-project-regression.png` | Desktop 1440×900 baseline verification (Project 000) |
| `18-desktop-1440-premium-regression.png` | Desktop 1440×900 baseline verification (Premium Lodge) |
| `19-desktop-1440-programme-regression.png` | Desktop 1440×900 baseline verification (Programme open) |
| `gate-05-1-mobile-house-390x844.webm` | Continuous walkthrough video of full mobile flow |

---

## 19. Known Non-Blocking Nuances

- The non-blocking nuance noted from Gate 04.3 (the *"ADMIT: THE NEXT IDEA"* slip on the premium folio being slightly visible at rest) remains undisturbed as instructed.

---

## 20. Scope Attestations

| Question | Answer |
| :--- | :---: |
| Canonical `/work` modified? | **NO** |
| Canonical project data modified? | **NO** |
| Accepted desktop auditorium materially redesigned? | **NO** |
| Gate 04.3 Premium Lodge materially redesigned? | **NO** |
| Commission copy rewritten? | **NO** |
| External assets added? | **NO** |
| Dependencies added? | **NO** |
| Audio added? | **NO** |
| Attendant/waiter added? | **NO** |
| Production deployment performed? | **NO** |
| Main branch modified? | **NO** |
| Commit created? | **NO** |
| Push performed? | **NO** |

---

## 21. Deterministic Recommendation

**PASS.**  
Gate 05.1 translates the theatrical architecture of House 01 into an intimate, tactile mobile aisle experience without compromising the desktop baseline or introducing unnecessary abstraction.

---
READY FOR HUMAN GATE 05.1 REVIEW
