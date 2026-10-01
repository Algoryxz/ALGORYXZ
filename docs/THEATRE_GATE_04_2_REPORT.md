# ALGORYXZ Theatre — Gate 04.2 Report
**Projectionist / Project-Selection Choreography**

---

## 1. Starting Git Provenance & Working-Tree State

- **Branch:** `feature/theatre-cinematic-proof`
- **HEAD:** `b1a27e2b270b23fcb117cc48afe3c57ef985e5b7`
- **Working Tree:** Dirty by design; all Gate 03, Gate 04.1, Gate 04.1A evidence, plans, and reports remain strictly preserved.
- **Autonomous Actions:** Zero unauthorized git mutations; no commit, push, merge, or deployment performed.

---

## 2. Change Request & Architectural Scope

The goal of **Gate 04.2** is to bridge project selection in the physical auditorium with the large proscenium screen, fulfilling the core ALGORYXZ thesis:
> **ALGORYXZ = STRUCTURE. CLIENT = MATERIAL.**  
> *Algoryxz is the theatre. The projects are the films.*  
> *Changing projects is a physical act of the projection system, not a generic website UI crossfade.*

### Frozen Baselines Preserved
- **Gate 03.3 (Auditorium):** Screen dimensions, raked seating geometry, centre aisle, regular chair construction, brass plaques, premium patron lodge, folio card, and Programme drawer layout are 100% frozen.
- **Gate 04.1A (Curtain Substitution):** Ticket admission, vestibule threshold, graphite drapery parting, warm amber light leak, projector ignition, and auditorium arrival choreography are 100% frozen.

### New Capability Introduced
When a visitor selects another project seat, an authoritative physical projection changeover sequence occurs:
1. **Seat Acknowledgment:** The pressed cinema chair depresses physically with a warm brass catch.
2. **Optical Shutter Collapse:** The aperture vignette closes down, slide contrast/exposure drops, and the projector light beam dips.
3. **Changeover Threshold:** The screen cloth falls into deep warm-black / graphite changeover darkness while outgoing film is unmounted and incoming film staged.
4. **Arc Strike & Film Catch:** The carbon arc flashes, the aperture blooms outward, and the incoming film catches the beam with a micro-flutter bloom before settling to full clarity.
5. **Settled State:** Light and image settle into the new project poster with active CTAs ready for focus.

---

## 3. Physical Projectionist State Machine & Timing

The sequence is tuned to an authoritative, deliberate **860ms total duration** (comfortably within the specified 700ms–1400ms target):

| Stage | Absolute Timeline | Duration | State Classes | Mechanical / Visual Choreography |
|---|---:|---:|---|---|
| **1. Seat Acknowledgment** | `0ms` – `180ms` | 180ms | Chair `.is-selecting` | Selected chair physically depresses (`translateY(1.5px) scale(0.985)`), top roll shadow deepens, brass plaque catches warm amber luster (`#fff2db`). |
| **2. Shutter Closure & Beam Dip** | `0ms` – `260ms` | 260ms | Screen `.is-shuttering`<br>Beam `.is-shuttering` | Aperture vignette closes down (`radial-gradient`), outgoing slide contracts in scale (`scale(0.992)`) and brightness (`brightness(0.35)`), projector beam dips to optical idle (`opacity: 0.16`). |
| **3. Warm-Black Changeover** | `260ms` – `440ms` | 180ms | Screen `.is-changeover` | Screen canvas reaches deep warm-black (`#0a0807`), outgoing slide unmounted, incoming slide staged in darkness (`opacity: 0`). Beam rests at idle. |
| **4. Film Catch & Arc Bloom** | `440ms` – `860ms` | 420ms | Screen `.is-catching`<br>Beam `.is-catching` | Arc lamp strikes: aperture blooms open (`@keyframes apertureBloom`), incoming film catches beam (`@keyframes projectionCatch`, blooming to `brightness(1.22)` and settling to `1.0`), beam blooms to `opacity: 0.88`. |
| **5. Settled Projection** | `860ms`+ | Persistent | Screen `.is-settled`<br>Beam `.is-lit` | Temporary changeover classes cleanly stripped; slide stable at 100% clarity; beam rests at lit level (`0.72`); project CTAs active. |

---

## 4. Interaction Modes & Boundary Behaviors

### A. Hover vs. Committed Selection
- **Hover (`pointerenter` / mouse over seat):**
  - Awakens the ambient projector beam (`.theatre-beam-svg.is-lit`) and illuminates the chair's warm brass rim highlight (`.theatre-cinema-chair:hover`).
  - **Does NOT trigger project changeover.** The currently projected film remains untouched on screen (verified in test: hovering Seat 000 while Project 002 is screening leaves 002 active).
- **Focus (`focus` via keyboard Tab):**
  - Displays high-contrast accessible brass outline (`outline: 2px solid var(--theatre-brass-bright)`) and awakens beam.
  - **Does NOT trigger project changeover.**
- **Committed Selection (`click` or keyboard `Enter` / `Space`):**
  - Commits canonical project selection and triggers the physical projection changeover state machine.

### B. Rapid Selection & Interruption Handling
- If a visitor clicks a new seat while a previous changeover is still in-flight:
  - All pending timers (`changeoverTimerA`, `changeoverTimerB`, `changeoverTimerC`, `selectingChairTimer`) are immediately cancelled.
  - Target seat switches immediately with tactile acknowledgement.
  - The state machine does not restart from the beginning or queue up animations. It cuts directly to the changeover threshold for the newest target, ensuring deterministic, glitch-free arrival.
  - Verified by rapid double-clicking (Seat 001 at 0ms, Seat 000 at 120ms): cleanly arrived on Project 000 with zero stuck classes.

### C. Programme Drawer Synchronization
- Clicking any active screening card inside the Programme Drawer (`.theatre-folio-card[data-programme-id]`):
  - Closes the drawer immediately (`closeProgramme()`).
  - Updates canonical seat selection in the physical auditorium (`.theatre-cinema-chair.is-active`).
  - Runs the physical projection changeover to the chosen project.
  - Verified by automated test: clicking 001 inside drawer closes drawer and changes screen to Courtyard Wedding 001.

### D. Premium Patron Lodge (`LODGE`)
- The client invitation folio in the rear lodge is not a projected project film.
- When Seat `LODGE` is clicked:
  - Armchair is highlighted, lodge sconce lamp illuminates, and the entire hall dims into `.lodge-focused`.
  - The living poster transitions directly to the Next Commission poster without a film changeover shutter.
  - When returning from LODGE to a regular project seat (000, 001, 002), the projectionist strikes the arc and loads the film via standard changeover.

### E. Reduced Motion Accessibility
- When `prefers-reduced-motion: reduce` is active:
  - Shutter closure, aperture collapse, transform scaling, and keyframe flutter bloom are disabled.
  - Selection collapses to a clean, rapid ~150ms opacity crossfade.
  - Verified by automated Playwright test with reduced-motion emulation.

### F. Session Revisit
- On subsequent page visits where `algoryxz-house-01-admitted` is already present in `sessionStorage`:
  - Directly renders the accepted auditorium at Project 000 rest without replaying the admission sequence.
  - All projection changeover interactions function identically.

---

## 5. Regression Matrix Verification

All mandatory acceptance and regression criteria were tested and passed:

| # | Requirement | Status | Evidence / Verification Method |
|---|---|:---:|---|
| 1 | **Curtain sequence preserved** | **PASS** | Gate 04.1A curtain markup, CSS, and timing in `theatre-entry` untouched. Full entrance walkthrough verified in video. |
| 2 | **Auditorium layout preserved** | **PASS** | Raked seating, proscenium, lodge, and folio layout pixel-identical to Gate 03.3 baseline. |
| 3 | **Physical shutter collapse visible** | **PASS** | Frame 172 (`03-shutter-closure-optical-collapse.png`) shows aperture closing down and beam dipping. |
| 4 | **Deep warm-black changeover** | **PASS** | Frame 176 (`04-warm-black-changeover-threshold.png`) shows clean changeover darkness (#0a0807). |
| 5 | **Arc strike & film catch bloom** | **PASS** | Frame 180 (`05-project-001-film-catch-bloom.png`) shows optical bloom and film catch. |
| 6 | **Chair tactile depression** | **PASS** | Frame 168 (`02-seat-001-click-acknowledgment.png`) demonstrates physical depression and brass plaque glow. |
| 7 | **Hover does not switch screening** | **PASS** | `09-chair-hover-beam-wake-no-change.png` confirms hover wakes beam without film switch. |
| 8 | **Keyboard Tab does not switch screening** | **PASS** | `10-keyboard-focus-beam-wake.png` confirms Tab focus wakes beam without film switch. |
| 9 | **Rapid interruption handling** | **PASS** | `11-rapid-selection-interruption-settled.png` confirms deterministic settling without queueing. |
| 10 | **Programme drawer integration** | **PASS** | `12-programme-drawer-selection-handoff.png` confirms drawer closes and seat syncs. |
| 11 | **Lodge folio bypasses film shutter** | **PASS** | `13-premium-lodge-selection-no-shutter.png` confirms smooth folio activation and `.lodge-focused`. |
| 12 | **Reduced motion direct cut** | **PASS** | `14-reduced-motion-direct-cut.png` confirms rapid crossfade with 0 transforms. |
| 13 | **Session revisit stability** | **PASS** | `15-session-revisit-project-interaction.png` confirms immediate auditorium arrival and full interactivity. |
| 14 | **Zero desktop horizontal overflow** | **PASS** | Viewports 1440x900, 1280x800, 1024x768 all report `sw <= cw` (0px overflow). |
| 15 | **Zero console errors** | **PASS** | 0 errors across all interaction cycles and viewports. |

---

## 6. Verification Evidence Registry

All evidence is preserved in `design/theatre-gate-04-2/`:

### A. Walkthrough Video
- **File:** `design/theatre-gate-04-2/gate-04-2-projection-changeover-1440x900.webm`
- **Format:** VP9 webm, 1440x900, 30fps constant framerate, 14.56s duration (1.31 MB).
- **Contents:** Full admission sequence → Project 000 rest → click Seat A2 (001) changeover → hover Seat A4 (002) beam wake → click Seat A4 (002) changeover → click Seat B3 (000) changeover → open Programme drawer → click Project 001 inside drawer → click Lodge armchair → return to Seat 000.

### B. Verification Screenshots (15 Required)
1. `01-auditorium-project-000-rest.png`: Initial auditorium settled on Project 000 after admission.
2. `02-seat-001-click-acknowledgment.png`: Seat A2 clicked: chair depression, brass plaque luster catch.
3. `03-shutter-closure-optical-collapse.png`: Optical aperture closing down, slide brightness contracting, beam dipping.
4. `04-warm-black-changeover-threshold.png`: Deep warm-black changeover threshold, previous film unmounted.
5. `05-project-001-film-catch-bloom.png`: Projector arc strikes, aperture blooms, Project 001 catches beam.
6. `06-project-001-settled.png`: Project 001 fully settled, beam at resting lit state, CTA ready.
7. `07-seat-002-changeover-in-flight.png`: Seat A4 clicked, shutter collapse in flight towards Project 002.
8. `08-project-002-settled.png`: Project 002 settled on screen.
9. `09-chair-hover-beam-wake-no-change.png`: Hovering Seat 000: beam awakens, chair highlights, Project 002 stays on screen.
10. `10-keyboard-focus-beam-wake.png`: Tabbing to Seat 000: brass outline, beam awakens, Project 002 stays on screen.
11. `11-rapid-selection-interruption-settled.png`: Rapid clicking between seats: clean interruption, settles on last clicked (000).
12. `12-programme-drawer-selection-handoff.png`: Programme card clicked: drawer closes, canonical seat syncs, screen changes.
13. `13-premium-lodge-selection-no-shutter.png`: Lodge armchair selected: lodge-focused lighting, invitation folio active without film shutter.
14. `14-reduced-motion-direct-cut.png`: Reduced motion mode: clean direct crossfade without shuttering.
15. `15-session-revisit-project-interaction.png`: Page reloaded with session admitted: immediate auditorium arrival, changeover intact.

---

## 7. QA & Codebase Health Summary

- **`npm run lint`:** Exited 0 (0 errors, 0 warnings).
- **`npm run typecheck` (`astro check`):** Exited 0 (0 errors, 0 warnings, 0 hints across 22 files).
- **`npm run build` (`astro build`):** Exited 0 (13 static pages generated in 5.59s).
- **Working Tree:** Intentionally dirty. Only `src/pages/work/theatre.astro` and `src/styles/theatre-cinematic.css` modified. Zero git commits or pushes.

---

## 8. Gate 04.2 Conclusion & Handoff

Gate 04.2 is fully verified and ready for human review. The projectionist choreography transforms project selection into a tactile, cinematic event while strictly honoring the Algoryxz architectural restraint.
