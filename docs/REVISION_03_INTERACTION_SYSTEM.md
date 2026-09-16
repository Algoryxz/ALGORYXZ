# REVISION 03 INTERACTION SYSTEM & SPATIAL CONTRACT

**Branch:** `feature/revision-03-experience`  
**Review Route:** `/lab/revision-03`  
**Baseline Preserved Route:** `/lab/xz-object`  
**Authors:** Smarak (Engineering Lead) & Antigravity (AI System Architecture)  
**Art Direction & Creative:** Deeptiman (Design Lead)  
**QA & Mobile Gate:** Akriti  

---

## 1. Core Thesis & Philosophical Stance

> **ALGORYXZ provides the STRUCTURE.**  
> **Projects provide the MATERIAL.**

Algoryxz is not an agency portfolio showing screenshots inside mockups. Algoryxz is a digital atelier where the studio's geometric framework (the procedural XZ structure) holds, unfolds, and releases distinct digital worlds.

### The Physical Narrative
```
XZ STRUCTURE
   │
   ▼  (Continuous Scroll)
SCROLL UNFURLS IT
   │
   ▼  (Spatial Separation & Mechanical Rotation)
PROJECT FRAGMENTS EMERGE
   │
   ▼  (Intentional Selection / Keyboard / Tap)
SELECTION BECOMES A PORTAL
   │
   ▼  (Metamorphic Material Conversion)
PROJECT BECOMES ITS OWN WORLD
```

### Purposeful Interaction Physics
Every interaction must communicate physical meaning or cause a material state change:
* **Scroll OPENS:** Scroll is a continuous, physical timeline that translates, separates, and rotates geometry with inertial weight.
* **Pointer REVEALS:** Subtle directional lighting tilts and parallax disclose hidden faceted seams.
* **Hover MATERIALIZES:** Hovering over a fragment previews its internal material properties (e.g. warm resin, parchment, acoustic grain).
* **Click / Enter ENTERS:** Engages the portal sequence, pulling the camera into the facet until it consumes the viewport.
* **Velocity DISTORTS:** Fast scrolling creates subtle aerodynamic shear along diagonal facet vertices.
* **Drag EXAMINES:** Touch and pointer drag allow tactile examination of the sculptural mass within angular limits.
* **Selection CHANGES MATERIAL:** The neutral graphite/mineral surface transitions dynamically into client-specific textures (candlelight, wet stone, handwriting).

*No decorative motion. No arbitrary fades or generic SaaS slide-ins.*

---

## 2. Reference Adoption Matrix

| Reference | System Role | Architectural Adaptation | Explicit Anti-Patterns & Exclusions |
|---|---|---|---|
| **1. 3D Parallax Unfurling Gallery** | Core structural motion vocabulary | Folded geometry, unhinging facets, deep spatial parallax, continuous spatial transformation | Do NOT copy its graphic branding or surface colors. |
| **2. Robot Flyby** | Primary scrollytelling choreography | Scroll-driven physical events, cinematic camera fly-throughs, objects shearing past camera | Do NOT use robot parts, heavy sci-fi chrome, blast doors, or spaceship motifs. |
| **3. Project Showcase** | Work archive & fragment listing | Minimal semantic project manifest, cursor-following material preview, inertial artifact physics | Preview must be tactile *material* rather than a generic rectangular browser screenshot. |
| **4. Prisma Hero** | Compositional scale & typography | Dominant sculptural presence (35–55% hero volume), oversized typography sharing depth planes, recessive floating chrome | Do NOT copy the exact button layout or visual branding. |
| **5. 3D Gallery Photography** | `/001` Memory World space | Z-depth photo arrays, chiaroscuro depth fade, velocity response | NO `document.querySelector('canvas')`, no React `setState` inside render loops, no gimmicky waving flags. Clean Three.js loop. |
| **6. Image Reveal** | Material discovery | Geometric aperture mask deriving from the XZ silhouette | No generic circular lens or bubble wipes. |
| **7. Metal FX** | Material tactile accent | Precision mineral/bronze edge sheen along geometric seam thresholds | Do NOT make generic metallic pill buttons. |
| **8. Text Effect** | Kinetic typographic entrance | Typography entrance synchronized directly with scene spatial arrival | No disconnected CSS slide-ins. |
| **9. Velocity Text** | Dynamic typography | Subtle letter-spacing and shear reaction to scroll velocity | Keep legible; never degenerate into unreadable glitch. |
| **10. Text Rotate** | Narrative state progression | Scroll-driven phase and state changes | No timed carousel copy loops. |
| **11. Navbar / Recessive Chrome** | Minimal framework navigation | Recessive, unboxed studio coordinates | No enterprise mega-menus; no generic floating pill bars. |
| **12. Mouse Image Trail** | Supporting memory trail | Deferred to Wave 2/later phases | Excluded from Wave 1 spatial backbone. |

---

## 3. Wave 1 Spatial Backbone Architecture

Wave 1 focuses exclusively on proving the signature spatial backbone:

```
[A. ARRIVAL] ──► [B. XZ UNFURL] ──► [C. ARCHIVE EMERGENCE] ──► [D. /001 PORTAL] ──► [E. CLIENT WORLD THRESHOLD]
```

### Stage A: Arrival
- **Hero Stance:** Full viewport composition. Sculptural presence occupies 35–55% of the frame.
- **Palette:** Deep graphite (`#0d0e11`), matte charcoal (`#14161a`), warm mineral bronze (`#d97736`), soft ecru text (`#f5f2eb`).
- **Typography:**
  ```text
  WE MAKE
  THINGS FOR
  THE INTERNET.
  ```
  Typography sits in three-dimensional relation to the object—the object's foreground facets cast subtle depth shadows onto the plane behind.
- **Chrome:** Ultra-recessive unboxed navigation (`ALGORYXZ`, `/WORK`, `/SERVICES`, `/PROCESS`, `/CONTACT`). The debug card from previous iterations is strictly removed from the public view.

### The New Procedural XZ Sculpture
- **Form Generation:**
  - Opposing 45° and 30° structural diagonals defining an interlocking **X** armature.
  - Stepped, folded planar facets with defined thickness forming a faceted **Z** trajectory.
  - Distinct internal fissures revealing warm mineral ambient light (`#d97736`) along internal joints.
  - Modeled as modular articulated facet groups (`facetCore`, `wingLeft`, `wingRight`, `keystoneCenter`) that can physically unhinge and glide along defined vectors.
- **Materials:** High-roughness anisotropic matte graphite (`roughness: 0.42`, `metalness: 0.15`), precision chamfered bronze perimeter edges (`metalness: 0.85`, `roughness: 0.25`), and interior warm emissive seams (`#e8823a`).

### Stage B: Scroll Unfurl
- Continuous scroll progress `t ∈ [0, 1]` drives physical hinges:
  1. `t ∈ [0.00, 0.20]`: Resting monolithic sculpture. Slow auto-drift and pointer tilt.
  2. `t ∈ [0.20, 0.45]`: Internal core unlocks. The opposing diagonals slide outwards along their axes, exposing internal bronze surfaces and light channels.
  3. `t ∈ [0.45, 0.70]`: Facets unfold into 3 distinct spatial planes moving through camera Z-depth. A structural plane shears close to the camera (evoking the physical gravity of Robot Flyby).
  4. `t ∈ [0.70, 1.00]`: Spatial alignment into the 3 archive fragments.

### Stage C: Archive Emergence
The geometry arranges itself into 3 spatial focal points:
- **`000 / ALGORYXZ INTERNAL`** (Left/Back): Deep charcoal/anodized titanium facet.
- **`001 / FOR SOMEONE (CONCEPT HEIRLOOM)`** (Center/Forward): Dominant warm translucent resin & parchment facet.
- **`002 / FOR A BUSINESS (CONCEPT BRAND)`** (Right/Back): Precision structural obsidian facet.
- Accessible DOM buttons overlay each fragment position in screen-space, enabling native keyboard focus (`Tab`, `Enter`, `Space`) and screen-reader accessibility.

### Stage D: /001 Portal Transition
- Upon selecting `/001`:
  1. Non-selected fragments drift outwards and dissolve into atmospheric fog.
  2. The center `/001` fragment aligns perpendicular to camera and accelerates forward (`Z` translation).
  3. Real-time shader/material morph: Graphite roughness softens → warm amber luminescence intensifies → texture blends into living memory photographic grain and paper fibers.
  4. The fragment expands until its boundaries overtake the viewport frustum.

### Stage E: First Client-World Threshold (The Monsoon Vows)
- Transition completes into the intimate celebration realm:
  - Atmospheric dark chiaroscuro rain environment.
  - Recessive studio context anchor in upper header:
    `← ALGORYXZ / 001 · CONCEPT PROJECT`
  - Editorial headline: *Moments carved in light. Love preserved in time.*
  - Handwritten vow quotation on warm translucent paper substrate.
  - Acoustic tactile audio player for spoken vows with interactive soundwave telemetry.
  - Return control smoothly collapses the camera back into the archive state.

---

## 4. Technical Stack & Implementation Constraints

1. **Framework:** Astro 5 + TypeScript + Vanilla CSS. Zero React/Next.js runtime overhead required.
2. **3D Engine:** Three.js (`three` + `@types/three` already installed in `package.json`).
3. **Rendering Lifecycle:**
   - Single WebGL renderer instance.
   - Smooth lerped animation loop (`requestAnimationFrame`).
   - Passive scroll listener updating normalized target scroll progress (`scrollY / maxScroll`).
   - Pointer coordinates normalized (`[-1, 1]`) with dampening for organic camera tilt.
   - Visibility observer to pause the animation loop when off-screen.
4. **Accessibility (WCAG 2.1 AA):**
   - Full semantic DOM mirror behind the canvas.
   - Keyboard accessible `<button>` triggers for all three fragments with high-visibility focus indicators.
   - `prefers-reduced-motion` compliance: disables camera velocity distortion and provides clean, immediate state switches.
5. **Debug Suite:**
   - Enabled exclusively when `window.location.search` contains `?debug=1`.
   - Displays real-time scene phase (`ARRIVAL`, `UNFURL`, `ARCHIVE`, `PORTAL`, `CLIENT_WORLD`), normalized scroll progress, camera vectors, and FPS telemetry.

---

## 5. Viewport Calibration Matrix

- **Desktop Reference:** `1440 × 900` & `1280 × 800`.
- **Mobile Target:** `390 × 844` (iPhone 14/15/16).
  - Single-column spatial flow.
  - Camera `Z` pulled back from `14` to `20` to prevent FOV clipping.
  - Simplified facet geometry and light counts for 60fps mobile GPU budgets.
  - Touch swipe drives scroll timeline naturally without gesture traps.
