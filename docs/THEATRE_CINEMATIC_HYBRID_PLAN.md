# ALGORYXZ Theatre Archive — Cinematic Hybrid Plan

## Decision

Do not continue the current low-poly realtime auditorium as the primary art direction.

The next proof uses a **hybrid cinematic architecture**:

- high-fidelity 2D/film-like environment for the theatre shell;
- lightweight DOM interaction for seats, projector targeting, project selection, premium seating and accessibility;
- project previews rendered on the theatre screen;
- no mandatory heavy WebGL path;
- current /work remains untouched until the theatre passes review.

The goal is to prove the feeling before building the full ticket/corridor/attendant/red-carpet sequence.

## Why

The current greybox proves routing and seat interaction but not atmosphere. Its visual hierarchy is wrong: seats and HUD dominate while the screen/projector relationship is weak. Realtime 3D is not valuable if it forces us into a game-prototype look.

The hybrid approach gives:
- stronger art direction;
- lower GPU cost;
- easier mobile adaptation;
- deterministic accessibility;
- easier project-screen integration;
- freedom to replace the environment later with a Blender/Higgsfield/video render without changing interaction architecture.

## Visual Direction

Private screening room × fashion editorial × architectural cinema.

Scoped palette:
- Cinema black: #080706
- Warm charcoal: #141210
- Deep velvet: #211511
- Ivory: #F0E8D8
- Muted parchment: #CFC1A7
- Antique brass: #A88457
- Oxblood: #5D201B
- Projection glow: #FFE7BC

Typography:
- Cormorant Garamond for cinematic display language
- Hanken Grotesk for interface/project labels
- JetBrains Mono only for tiny seat/house metadata

## Proof Scope

This branch implements only the first high-fidelity visual proof:

1. Entry ticket overlay
2. Auditorium arrival
3. Project screen
4. Interactive project seats
5. Projector beam reaction
6. Three current truthful projects
7. Reserved unreleased seats
8. Premium rear lodge
9. “Your project could screen here” conversion
10. Mobile-specific composition
11. Reduced-motion static equivalent

No:
- downloaded theatre model
- waiters/attendants
- corridor
- door animation
- red-carpet ending
- donation flow
- final cinematic video asset
- replacing /work

## Route

Use /work/theatre as an isolated alternate archive proof.

Current /work is preserved exactly as rollback and production reference.

## Interaction Model

### Entry
A physical-looking admit ticket overlays the viewport.

Action:
ENTER HOUSE 01

### Auditorium
The screen is dominant.

Seat groups:
- Studio / 000
- Celebrations / 001
- Business & Brand / 002
- Reserved / 003–006
- Premium / YOUR PROJECT

### Seat Focus
Hover/focus/tap:
- selected seat warms from ivory to brass;
- projector beam re-aims;
- screen switches to the selected project;
- plaque copy updates;
- accessible status text updates.

### Project Entry
Active public projects link to their existing case study routes.

### Premium
Premium lodge is materially different:
- oxblood upholstery
- brass framing
- side table/lamp cues
- larger spacing

Selecting premium changes the screen to:
YOUR PROJECT COULD SCREEN HERE.

CTA:
START A PROJECT

## Accessibility

All project seats are real buttons/links in the DOM.

The visual theatre is not the sole navigation mechanism.

Keyboard:
- Tab between available seats
- Enter/Space selects
- case-study link remains a normal anchor

Screen reader:
- clear seat label
- category
- status
- project title

Reduced motion:
- no entrance animation
- no beam movement
- no seat lift
- instant screen switching

## Mobile

Do not shrink desktop.

Mobile changes to a portrait center-aisle composition:
- screen top 38–42%
- seat controls below
- larger 44px+ hit targets
- premium lodge becomes a dedicated final block
- no hover dependency

## Performance Budget

For this proof:
- zero new JS dependencies
- zero new WebGL dependencies
- no video downloaded yet
- < 15 KB route JS target
- project preview assets reuse existing repository assets
- no continuous requestAnimationFrame loop
- CSS transitions only

Later cinematic assets:
- entrance video target <= 4–6 MB
- poster frame supplied
- muted-by-default or no audio
- lazy-load after explicit entry
- AV1/WebM + H.264 fallback if needed

## Future Asset Pipeline

If this proof is approved:

1. Select licensed theatre reference/model
2. Bring into Blender
3. Replace materials with Algoryxz palette
4. Render:
   - auditorium hero plate
   - entrance film
   - projector ignition
   - premium lodge
   - red carpet
5. Export compressed media
6. Keep seat/project interaction in the DOM layer

The browser should consume the cinematic result, not render a production-scale theatre from scratch.

## Acceptance Gate

This proof passes only if a reviewer can understand, without explanation:

“I am inside an Algoryxz cinema. The seats are projects. Selecting a seat changes what the projector screens. The premium seats represent future client work.”

## Next Wave Only After Approval

- ticket persistence
- entrance film
- corridor/doors
- premium attendant
- service programmes
- premiere invitation
- red carpet/contact ending
