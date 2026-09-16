# TEAM WORKSTREAMS & FILE OWNERSHIP

This document establishes the functional responsibilities and primary file ownership for Algoryxz's three founding partners. While all team members may contribute across disciplines, critical shared files and architectural boundaries have a single authoritative owner to eliminate merge collisions and governance drift.

---

## 1. Founder Responsibilities

### Smarak — Engineering & Architecture
* **Core Responsibilities:**
  * Application architecture and technical foundation.
  * Deployment pipelines, edge infrastructure (Cloudflare Pages, Workers, DNS).
  * Build tooling, TypeScript configuration, code quality gates (ESLint, Astro check).
  * Third-party technical integrations (APIs, forms, storage).
  * Technical shared configurations and dependency auditing.
* **Final Authority Gate:** Must sign off on any new dependency, build configuration change, deployment workflow, or data schema.

### Deeptiman — Art Direction & Creative
* **Core Responsibilities:**
  * Visual identity, brand expression, and editorial aesthetics.
  * Design token definitions (palette, surfaces, spacing, elevation, radii).
  * Typography scales, font pairing, and editorial contrast.
  * Motion language, easing curves, and micro-interaction states.
  * Component styling and responsive visual presentation.
* **Final Authority Gate:** Must sign off on all UI components, visual tokens, and responsive layout fidelity before client review or release.

### Akriti — Operations, Delivery & QA
* **Core Responsibilities:**
  * Project milestone tracking, schedules, and delivery verification.
  * Content readiness, copywriting accuracy, and placeholder tracking.
  * Asset intake, media optimization, and metadata organization.
  * Cross-browser and real-device mobile QA (iOS Safari, Android Chrome).
  * Accessibility and functional link verification.
* **Final Authority Gate:** Must sign off on the real-device QA checklist and content completeness before any production deployment or client handoff.

---

## 2. Shared File Collision Policy

High-contention shared files must not be modified in parallel without explicit authorization from their primary owner.

| File / Directory | Primary Owner | Secondary Reviewer | Scope of Control |
|---|---|---|---|
| `package.json` & lockfile | **Smarak** | Akriti | Dependency additions, script changes, version updates. |
| `src/styles/tokens.css` | **Deeptiman** | Smarak | Color palette, semantic surfaces, spacing scale, radii, typography tokens. |
| `src/styles/global.css` | **Deeptiman** | Smarak | CSS reset, base typography rules, focus rings, layout constraints. |
| `src/styles/motion.css` | **Deeptiman** | Smarak | Transition timing, keyframe animations, prefers-reduced-motion definitions. |
| `src/components/Navigation.astro` | **Deeptiman** | Smarak | Header, mobile drawer, navigation links, and interactive menus. |
| `src/data/projects.ts` (Data Schema) | **Smarak** | Akriti | TypeScript types (`Project`, `ProjectStatus`) and static data structure. |
| `src/data/projects.ts` (Content) | **Akriti** | Deeptiman | Project metadata, client categorization, descriptions, and media links. |
| `astro.config.mjs` | **Smarak** | Deeptiman | Build settings, static export, site URL, Astro integrations. |
| `.github/workflows/*` | **Smarak** | Akriti | CI/CD automation, lint/typecheck/build pipeline definitions. |
| `wrangler.toml` (if added) | **Smarak** | Akriti | Cloudflare Pages/Workers routing and edge resource bindings. |

---

## 3. Collaboration Protocol
1. **Feature Branching:** All new work proceeds on isolated branches (`feature/<lane>-<description>` or `fix/<description>`).
2. **Conflict Avoidance:** Agents and contributors must verify whether a shared file is open for modification before committing changes.
3. **No Stealth Refactors:** Do not reformat or reorganize shared files (such as `tokens.css` or `global.css`) unless specifically tasked with doing so.
