# ALGORYXZ THEATRE — GATE 04.3 REPORT
## Premium Lodge / Next Commission Ritual

**Branch:** `feature/theatre-cinematic-proof`  
**Base Commit:** `b1a27e2`  
**Working Directory:** Dirty by design (preserving Gates 03.3, 04.1, 04.1A, 04.2, 04.2A, 04.2A-R)  
**Status:** Verification complete; ready for human review  
**Verdict:** **PASS**

---

## 1. Executive Summary

Gate 04.3 establishes the **Premium Lodge** not merely as another project seat, but as the **theatre's architectural ritual for client commission**:
- **ALGORYXZ = Structure.**
- **Client = Material.**
- Regular chairs browse films already made.
- The **Premium Lodge** reserves the next film yet to be created: *"Your Project Could Screen Here"*.

Entering this state is materially, optically, and narratively distinct from standard project changeovers:
1. **Inspection Light (Hover/Focus):** A private reading/service lamp activates over the lodge, warming the upholstery, brass nameplate, side table, and physical printed folio. **The projection screen and projector beam remain 100% pixel-stable (`screenDiffs = 0`).**
2. **Reservation Ritual:**
   - **Phase 2A (Lodge Acknowledgement, 0–360ms):** The lodge sconce lamp brightens with intense warm-amber light, the printed ecru folio shifts/presents forward revealing `ADMIT: THE NEXT IDEA`, and the regular seating rows quiet down to focus attention on the lodge.
   - **Phase 2B (Screen Changeover, 360–1220ms):** The projection system executes an authentic optical changeover (mechanical shutter close -> warm-black auditorium drop -> carbon arc bloom -> settles into the conversion canvas).
3. **Sparse Editorial Canvas:** The screen displays `NOW SCREENING · NEXT COMMISSION`, `YOUR PROJECT COULD SCREEN HERE.`, editorial invitation copy, and a semantic CTA button routing directly to `/contact`.
4. **Clean Bidirectional Recovery:** Selecting any regular chair settles the lodge back to rest, restores regular seating illumination, and performs the Gate 04.2 projection changeover seamlessly.

---

## 2. Git Status & Code Scope

```text
On branch feature/theatre-cinematic-proof
Changes not staged for commit:
	modified:   src/pages/work/theatre.astro
	modified:   src/styles/theatre-cinematic.css
Untracked files:
	design/theatre-gate-04-3/
	docs/THEATRE_GATE_04_3_REPORT.md
```

### Files Modified:
1. `src/pages/work/theatre.astro`:
   - Enriched the physical printed reservation folio with `<span class="lodge-folio-slip">ADMIT: THE NEXT IDEA</span>`.
   - Wired the two-phase reservation ritual into `selectScreening(targetId, options)`: Phase 2A lodge acknowledgement (sconce illumination, folio presentation, regular seating dimming) followed by Phase 2B optical changeover (1220ms total duration).
   - Ensured atomic timer cancellation (`changeoverTimerLodgeA`) to guarantee idempotency and zero state corruption under rapid user clicks.
   - Preserved clean return navigation from lodge to regular project chairs with un-dimming and state resets.
2. `src/styles/theatre-cinematic.css`:
   - Formatted physical printed folio typography, paper highlights, and presentation transform (`rotate(-2deg) translateY(-6px) scale(1.03)`).
   - Enriched multi-tier sconce lamp (`.lodge-sconce-lamp`) and side service table light (`.lodge-service-stem::after`) for resting, inspection, and reservation states.
   - Established regular seating quieted/dimmed rules (`opacity: 0.62; filter: brightness(0.82)`) during lodge reservation.
   - Enforced strict reduced-motion overrides (immediate crossfades, suppressed folio travel).

---

## 3. Semantic Light & Interaction Architecture

| Interaction Tier | Semantics | Physical Mechanism | Screen & Projector Status |
| :--- | :--- | :--- | :--- |
| **State 0: House Rest** | Project screening (e.g. 002), lodge vacant | Calm ambient downlight, folio rests flat on chair | Active project projection (002 Roastery) |
| **State 1: Inspection (Hover/Focus)** | Visitor considers the lodge seat | Private sconce lamp warms, side table tip catches amber light, folio paper catches highlight, explicit brass focus outline on keyboard | **Pixel-stable (`screenDiffs = 0`)** |
| **State 2A: Acknowledgement (0–360ms)** | Lodge accepts commission intent | Sconce lamp flares brilliant amber, folio tilts and lifts revealing admission slip, regular seating quiets down | Screen holds current projection |
| **State 2B: Optical Changeover (360–1220ms)** | Projectionist shifts to Next Commission reel | Shutter closure (260ms) -> warm-black threshold (180ms) -> carbon arc strike & bloom (420ms) -> settle | Full optical changeover executed |
| **State 4: Next Commission Settled** | Invitation to reserve the next premiere | Lodge remains illuminated, folio presented, regular seats quieted | Sparse editorial commission canvas with `/contact` CTA |
| **State 5: Return to Project** | Visitor chooses an existing film | Sconce dims to rest, folio settles, regular seating un-dims | Gate 04.2 changeover back to selected project |

---

## 4. Acceptance Criteria Checklist (Section 14)

| # | Acceptance Criterion | Result | Evidence / Implementation Detail |
| :--- | :--- | :---: | :--- |
| 1 | **Frozen Baselines Intact** | **YES** | Entrance (ticket, threshold, graphite curtain, ignition) and regular chair changeovers untouched. |
| 2 | **Physical Folio Presence** | **YES** | Cream/ecru printed folio rests visibly on the lodge armchair in rest state. |
| 3 | **Inspection Light Distinction** | **YES** | Hover/focus illuminates private sconce and folio; does not imitate regular seat badge glow. |
| 4 | **Optical Isolation on Inspection** | **YES** | `screenDiffs = 0` between rest, hover, and keyboard focus states. |
| 5 | **Explicit Keyboard Focus Ring** | **YES** | `outline: 2px solid var(--theatre-brass-bright)` with `outline-offset: 4px` renders crisply around armchair. |
| 6 | **Two-Phase Ritual Hierarchy** | **YES** | Phase 2A acknowledges lodge in room first; Phase 2B drives screen changeover 360ms later. |
| 7 | **Physical Folio Presentation** | **YES** | Folio translates, scales, and reveals printed slip `ADMIT: THE NEXT IDEA`. |
| 8 | **Regular Seating Quieted** | **YES** | Regular chair bank dims to `opacity: 0.62` and `brightness(0.82)` during lodge state. |
| 9 | **Sparse Editorial Screen** | **YES** | Sparse conversion layout: `NOW SCREENING · NEXT COMMISSION`, `YOUR PROJECT COULD SCREEN HERE.`, editorial body, and CTA. |
| 10 | **Semantic CTA Destination** | **YES** | CTA button `#cta-LODGE` links directly to `/contact`. |
| 11 | **Clean Return Path** | **YES** | Clicking Seat 001/000 un-dims seating, settles folio, and runs standard Gate 04.2 changeover. |
| 12 | **Reversible & Idempotent** | **YES** | Switching repeatedly between projects and lodge exhibits zero state desynchronization. |
| 13 | **Drawer & Controls Unaffected** | **YES** | Programme drawer opens and closes without layout shifts or stacking context errors. |
| 14 | **Reduced Motion Compliant** | **YES** | `prefers-reduced-motion: reduce` suppresses mechanical folio motions and executes immediate transitions. |
| 15 | **Responsive Viewports** | **YES** | Verified at 1440x900, 1280x800, and 1024x768 with zero clipping or misalignment. |

---

## 5. Visual Evidence Artifact Index

All visual artifacts are located in `design/theatre-gate-04-3/`:

1. `01-premium-rest-1440.png`: Resting auditorium state showing Seat 002 screening and the physical ecru folio resting on the empty premium armchair.
2. `02-premium-hover.png`: State 1 Inspection hover showing private sconce lamp warming, folio paper highlight, and side table tip glow with zero screen change.
3. `03-premium-keyboard-focus.png`: State 1 Keyboard focus showing explicit high-contrast theatre brass accessibility outline around the armchair.
4. `04-premium-activation-folio.png`: State 2 Phase 2A acknowledgement showing sconce flaring, folio presentation shift, and regular seating dimming.
5. `05-premium-changeover-threshold.png`: State 3 optical changeover shutter threshold in flight.
6. `06-premium-commission-screen.png`: State 4 Next Commission settled screen at 1440x900.
7. `07-premium-settled-lodge.png`: Focus on settled armchair with presented folio and bright sconce lamp.
8. `08-premium-to-project-return.png`: Return path execution: Seat 001 selected, lodge returned to rest, regular seating brightness restored.
9. `09-project-to-premium.png`: Idempotent re-activation of the premium lodge from Project 001.
10. `10-regular-seat-regression.png`: Return to Seat 000 with Seat 002 hovered, confirming zero regression in Gate 04.2A-R regular chair lighting.
11. `11-programme-regression.png`: Tonight's Programme drawer opened over the auditorium, confirming zero z-index or modal regressions.
12. `12-reduced-motion-premium.png`: Instantaneous transition into Next Commission state under `prefers-reduced-motion: reduce`.
13. `13-premium-1280.png`: Next Commission state at 1280x800 desktop viewport.
14. `14-premium-1024.png`: Next Commission state at 1024x768 small desktop/tablet viewport.
15. `15-premium-screen-stability-control.png`: Control capture used for mathematical diffing against hover and focus.
16. `gate-04-3-premium-ritual-1440x900.webm`: High-fidelity continuous 25fps walkthrough video of the entire ritual and return flows.

---

## 6. Pixel Stability Audit (Section 15)

Using Playwright image buffer pixel-by-pixel comparisons bounded to the projection screen canvas (`[x: 250, y: 80, w: 940, h: 440]`):

```text
=== RUNNING SECTION 15 PIXEL AUDIT ===
Audit A (Rest vs Premium Hover): {
  screenDiffs: 0,
  lodgeDiffs:  18527,
  otherDiffs:  5811
}
Audit B (Rest vs Premium Keyboard Focus): {
  screenDiffs: 0,
  lodgeDiffs:  19129,
  otherDiffs:  6179
}
```

- **Screen Diffs:** **EXACTLY 0 PIXELS.** Neither pointer hover nor keyboard focus causes any pixel drift, beam flicker, or chromatic aberration on the projected screen canvas.
- **Lodge Diffs:** Over 18,500 pixels change locally on the lodge armchair, confirming distinct physical illumination feedback.

---

## 7. Human Verification Guide

To verify Gate 04.3 interactively:

1. **Launch Preview Server:**
   ```bash
   npm run preview -- --port 4321 --host 127.0.0.1
   ```
2. **Open in Browser:**
   Navigate to `http://127.0.0.1:4321/work/theatre`.
3. **Entrance:**
   Click the ticket to admit and watch the graphite curtain open into the auditorium.
4. **Test State 1 (Inspection):**
   - Move the mouse over the **Premium Lodge** armchair on the right side of the lower tier.
   - Verify: The small brass sconce lamp warms up and illuminates the armchair; the screen does **NOT** flicker or change.
   - Tab with the keyboard onto the Premium Lodge armchair.
   - Verify: A crisp gold/brass outline appears around the chair.
5. **Test State 2 (Reservation Ritual):**
   - Click the Premium Lodge armchair (or press `Enter`/`Space`).
   - Observe the choreography:
     1. The sconce lamp flares up brightly; the printed folio lifts slightly to reveal `ADMIT: THE NEXT IDEA`; the regular chairs dim back.
     2. The screen shutters down into warm-black darkness.
     3. An optical carbon-arc bloom strikes the screen and settles into the sparse editorial slide: `YOUR PROJECT COULD SCREEN HERE.`.
     4. The `START A PROJECT ↗` button appears and links to `/contact`.
6. **Test State 5 (Return Path):**
   - Click Seat 001 (Courtyard Wedding) or Seat 000 (Algoryxz Studio).
   - Observe: The regular chairs brighten up; the lodge sconce softens back to rest; the screen executes the projectionist changeover back to the selected project.
7. **Test Programme Drawer:**
   - Click the `PROGRAMME` button in the top navigation.
   - Verify: The drawer slides out smoothly without graphical glitches. Close with the `×` button.

---

## 8. Self-Critique & Nuances

- **Material Distinction:** By pairing the physical printed folio with a dedicated warm sconce lamp, the lodge avoids feeling like a generic "call-to-action button" masquerading as furniture. It reads as a reserved physical box in an actual cinema.
- **Pacing:** The 360ms delay before the screen shutters gives the human eye time to register that the room acknowledged the reservation before the projectionist took action.
- **Accessible & Clean:** The keyboard focus outline is crisp and meets WCAG contrast criteria while strictly preventing screen disruption.

---

## 9. Deterministic Recommendation

**PASS.**  
Gate 04.3 fulfills all technical, design, and accessibility requirements without disturbing any frozen prior gates.

---
READY FOR HUMAN GATE 04.3 REVIEW
