# ALGORYXZ Theatre — Gate 04.1 Report

## 1. Starting Git provenance

- Branch: `feature/theatre-cinematic-proof`
- HEAD: `b1a27e2b270b23fcb117cc48afe3c57ef985e5b7`
- Recent history began with `b1a27e2 feat(theatre): build physical seat archive and cinematic projection`.
- No branch switch, reset, clean, merge, commit, push, or deployment was performed.

## 2. Pre-existing working-tree state

The working tree already contained the preserved, uncommitted Gate 03.1–03.3 theatre implementation: modified `src/pages/work/theatre.astro` and `src/styles/theatre-cinematic.css`; Gate 03.1 evidence, Gate 03.2/03.3 evidence, and their reports were untracked. Those files and directories were retained in place.

## 3. Exact files changed for this gate

- `src/pages/work/theatre.astro`
- `src/styles/theatre-cinematic.css`
- `design/theatre-gate-04-1/` (new evidence)
- `docs/THEATRE_GATE_04_1_REPORT.md`

## 4–8. Admission, ticket, threshold, doors, and ignition

The theatre route now begins behind a focused admission layer. It presents a printed ecru `ALGORYXZ PICTURES` / `ADMIT ONE` / `HOUSE 01` ticket with a single keyboard-accessible `ENTER THE HOUSE` control. Admission removes the ticket via a short forward/fade gesture, then exposes a graphite vestibule: perspective wall planes, convergent floor, restrained brass outline, `HOUSE 01` signage, and paired dark doors.

The door sequence is state-driven rather than a page fade: closed doors, a warmed centre seam, separated leaves, then a dim view into the existing auditorium. Projector ignition progressively removes the temporary stage dimming and restores the pre-existing beam and room. Measured scripted post-click duration is approximately 3.0 seconds before the arrived state.

## 9. Ticket persistence/session behavior

Successful arrival stores `algoryxz-house-01-admitted` in `sessionStorage`. A same-tab reload restores the auditorium immediately and displays the small fixed `ADMIT ONE / HOUSE 01` ticket stub. If storage is absent or inaccessible, the normal ticket is shown; there is no trapped state. No cookie, account, backend, or tracking was added.

## 10–12. Skip, reduced motion, focus, and accessibility

- Escape during threshold/door/ignition transitions immediately reveals the accepted auditorium and moves focus to `#cta-000`.
- Underlying header, stage, programme drawer, and pre-existing skip/escape links are `inert` until admission completes, preventing hidden focus targets.
- Ticket admission is the first tabbable control on a fresh visit; native Enter activation was verified.
- On arrival, existing controls regain their prior keyboard behavior. Programme open/close with Escape, regular seat selection, and premium lodge selection were exercised.
- `prefers-reduced-motion: reduce` takes a short 180ms conceptual handoff from ticket activation to the arrived auditorium; no door sweep or staged spatial movement is required.

## 13. Auditorium-preservation attestation

The accepted Gate 03.3 screen, project slides, project/seat IDs, physical seats, aisle/risers, rear lodge, premium folio, programme IA, projector implementation, selection logic, and desktop composition were not materially redesigned. The only auditorium integration is a temporary brightness class during entry plus the unobtrusive ticket stub after admission.

## 14. Performance implications

The entry uses semantic DOM, CSS transitions, pseudo-elements/gradients, and short timeout-driven state changes. It introduces no images, video, audio, canvas loop, package, external asset, or new 3D runtime. Entry elements become non-interactive after completion. The existing Three.js chunk-size warning remains unchanged and outside this gate.

## 15. Lint/typecheck/build

- `npm run lint`: passed.
- `npm run typecheck`: passed with 0 errors, 0 warnings, 0 hints when run outside the filesystem sandbox. The sandboxed first attempt could not traverse dependency directories; this was environmental rather than a source diagnostic.
- `npm run build`: passed. Existing Vite warning remains: `three.module` is 746.88 kB minified / 191.78 kB gzip.

## 16. Console/network results

Live CDP interaction testing produced no application exceptions. The development server logged two 404s for its internal dev-only `@vite/client` and Astro toolbar module URLs during a HEAD-based audit; these did not occur as route/application asset failures and the theatre route, local project images, and interactions loaded successfully. Production build completed successfully.

## 17. Desktop viewport measurements

Arrived state measurements from the live local route:

| Viewport | scrollWidth | clientWidth | scrollHeight | clientHeight |
| --- | ---: | ---: | ---: | ---: |
| 1440 x 900 | 1440 | 1440 | 900 | 900 |
| 1280 x 800 | 1280 | 1280 | 800 | 800 |
| 1024 x 768 | 1024 | 1024 | 768 | 768 |

There was no horizontal or vertical overflow at the accepted desktop viewports.

## 18. Evidence registry

All screenshots are authentic browser states in `design/theatre-gate-04-1/`:

1. `01-ticket-rest-1440.png`
2. `02-ticket-focus-1440.png`
3. `03-ticket-admission-state.png`
4. `04-threshold-closed-doors.png`
5. `05-threshold-door-seam.png`
6. `06-threshold-doors-opening.png`
7. `07-projector-ignition.png`
8. `08-auditorium-arrived.png`
9. `09-ticket-rest-1280.png`
10. `10-ticket-rest-1024.png`
11. `11-keyboard-ticket-focus.png`
12. `12-keyboard-auditorium-arrived.png`
13. `13-reduced-motion-ticket.png`
14. `14-reduced-motion-arrived.png`
15. `15-session-revisit.png`

Continuous fresh-session walkthrough video: `design/theatre-gate-04-1/gate-04-1-entry-walkthrough-1440x900.webm`.

- **Video resolution:** 1440 x 900
- **Codec:** VP9 (`libvpx-vp9`, `yuv420p`, CRF 16, bitrate ~602 kbps)
- **Framerate:** 30 fps
- **Total duration:** 6.567 seconds (197 frames)
- **File size:** 494,416 bytes (~483 KB)

### Measured Encoded Timeline & State Timings

| Milestone / State | Timestamp (Encoded) | Delta from Activation | Description |
| --- | ---: | ---: | --- |
| **Ticket rest** | `0.000s – 1.024s` | — | Initial ecru `ALGORYXZ PICTURES` / `HOUSE 01` ticket at rest (`1.024s` continuous duration) |
| **Activation timestamp** | `1.024s` | `+0.000s` | Pointer activation of `ENTER THE HOUSE` (`#theatre-entry-admit`) |
| **Admission gesture** | `1.061s` | `+0.037s` | Ticket begins forward translation and fade (`is-admitting`) |
| **Closed-door threshold** | `1.601s` | `+0.577s` | Vestibule wall planes, floor convergence, and closed doors revealed (`is-threshold`) |
| **Door opening** | `2.267s` | `+1.243s` | Centre seam warms and dark paired door leaves separate outward (`is-opening`) |
| **Projector ignition** | `3.218s` | `+2.194s` | Projector beam ignites through opened doors; stage brightness lifts (`is-igniting`) |
| **Auditorium arrival** | `4.130s` | `+3.106s` | Arrival transition begins; ticket stub appears; stage reaches `entry-arrived` (`is-complete`) |
| **Overlay fully settled** | `4.680s` | `+3.656s` | 550ms entry overlay fade completes; ticket layer strictly suppressed with zero ghosting |
| **Clean final rest duration** | `4.680s – 6.567s` | — | Completely settled Gate 03 auditorium (`1.887s` clean continuous rest) |

## 19. Known remaining issues

- Mobile remains the existing fallback and was not redesigned.
- The existing Three.js chunk-size warning remains outside this gate.
- A visitor who wants to replay the arrival in the same session must clear session storage; no visible replay control was added to avoid new auditorium chrome.

## 20. Scope attestations

- Canonical `/work` touched: **NO**
- Canonical project data touched: **NO**
- Accepted auditorium materially redesigned: **NO**
- External assets introduced: **NO**
- New dependencies introduced: **NO**
- Audio introduced: **NO**
- Attendant introduced: **NO**
- `main` touched: **NO**
- Commit made: **NO**
- Push made: **NO**
- Deployment performed: **NO**
