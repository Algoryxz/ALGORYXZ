# ALGORYXZ THEATRE — GATE 03.1 DESKTOP CORRECTION PLAN
## LIGHTING DISCIPLINE, SCULPTED CHAIR SILHOUETTES & BESPOKE THEATRE CONTROLS

**Status:** Implementation Contract (Gate 03.1)  
**Author:** Antigravity (Engineering Architecture)  
**Branch:** `feature/theatre-cinematic-proof`  
**Route:** `/work/theatre` (strictly isolated; canonical `/work` remains untouched)  
**Scope:** Desktop Art Direction ONLY (`1440×900`, `1280×800`, `1024×768`). Mobile redesign deferred.  
**Commit Rule:** NO commit upon completion; leave changes uncommitted for human review.

---

## 1. CORE PHILOSOPHY: REST STATE = DARKNESS, INTERACTION = LIGHT

The primary flaw in Gate 03 is that the auditorium was permanently pre-lit like a themed UI card grid. 
Gate 03.1 establishes:
- **Rest State:** Darkness is the primary medium. The projector cone is effectively dark/invisible (`opacity: 0.04`), dust motes are hidden, seat outlines are dark graphite, and the premium sconce lamp is completely OFF. The screen provides the only gentle ambient source.
- **Hover / Focus:** As the pointer approaches a chair, projector light spills down from above, illuminating the chair's crest roll, warming the mounted material artifact, revealing the connecting beam and dust motes, and slightly elevating the chair.
- **Selection State:** Persistent indicator is minimal (small brass seat plaque highlight, slight dimensional elevation), NOT a permanent fluorescent glow.

---

## 2. ARCHITECTURAL & ART DIRECTION CHANGES

### A. Darkness & Dynamic Lighting
- Projector beam SVG defaults to `opacity: 0` at rest.
- Hovering any interactive seat or the premium armchair transitions `--beam-opacity` to `0.75` with a warm radial bloom.
- Surrounding ambient darkness deepens (`backdrop-filter` / radial dimming) when seats are engaged.
- Leaving hover gracefully returns the room to darkness over `450ms`.

### B. Chair Silhouette Sculpting
- Replace card-like outlines with anatomical cinema chair construction:
  - **Crest Roll (`.chair-top-roll`):** Distinct barrel cushion with top stitch piping and top-lit rim highlight.
  - **Wing Bolsters:** Lateral flared shoulders narrowing gracefully into the waist.
  - **Recessed Mount:** Upholstered central pocket physically holding the project specimen.
  - **Base Stanchion:** Dark cast-iron mounting bracket underneath with deep floor contact shadow.
  - Clear physical distinction between the structural chair and the mounted artifact.

### C. Auditorium Row Composition
- Break the flat 5-column web grid.
- Introduce subtle natural curvature and architectural raking:
  - Outer reserved chairs (C1, C4) are slightly smaller, lower contrast, and recessed into perspective.
  - Middle chairs (A2, A4) are angled slightly toward the central axis.
  - Centerpiece chair (B3) is subtly forward and dominant through placement rather than permanent neon glow.
- Foreground framing: Cropped silhouettes of authentic foreground cinema chair backs framing the lower corners, establishing raked perspective.

### D. Typography System Audit
Strict 3-voice hierarchy:
1. **Editorial Serif (`Playfair Display`):** Screen titles, living poster headlines, `YOUR PROJECT COULD SCREEN HERE`, Programme heading.
2. **Grotesque (`Hanken Grotesk`):** Buttons, editorial descriptions, readable UI copy.
3. **Mono (`JetBrains Mono`):** Project IDs (`000`, `001`), seat numbers (`A2`, `B3`), technical colophons (`NOW SCREENING`), statuses, coordinate data.
- Elimination of excessive uppercase mono tracking on secondary elements.

### E. Theatre Ticket Controls & Buttons
- **Primary Screen Action (`ENTER PROJECT ↗`):** Designed as an archival cinema admission ticket: warm ivory paper surface, crisp grotesque typography, chamfered ticket-notched geometry, thin warm brass keyline, slight tactile inset. On hover: warm light illuminates the surface and the arrow nudges.
- **Premium Client Action (`START A PROJECT ↗`):** Deep oxblood ticket surface, antique brass typography and keyline.
- **Programme Trigger:** Minimal, dark architectural button at rest; thin brass border catches light only on hover/focus.

### F. Premium Lounge Physicality & Sconce Correction
- Remove the floating orange notification orb.
- Convert it into a physical brass reading sconce lamp integrated into the armchair stanchion.
- **Lamp is OFF by default** at rest.
- Oversized oxblood armchairs sculpted with wider shoulders, tufted oxblood velvet, and substantial arm bolsters.
- Hovering/focusing the empty armchair switches the sconce lamp ON, warms the velvet, pulses the beam, and triggers the client screening on the main screen.

### G. Desktop Interaction States
- Rest: Dark, mysterious, atmospheric.
- Hover: Light spills dynamically onto the target object.
- Focus: Accessible, high-contrast brass perimeter integrated into the chair structure.
- Selected: Elegant physical elevation without garish outline glows.

### H. Desktop QA & Evidence
- Verify `scrollWidth === clientWidth` on `1440×900`, `1280×800`, `1024×768`.
- Capture all 15 required desktop evidence screenshots with real hover and focus pointer states.
- Run `npm run lint`, `npm run typecheck`, `npm run build`.
- Stop and leave changes uncommitted for human review.
