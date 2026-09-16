# ALGORYXZ / 000

The public digital studio website and flagship portfolio project for **Algoryxz**.

Algoryxz is an AI-native digital studio founded by three engineering and design partners (Smarak, Deeptiman, Akriti) based in Bhubaneswar, Odisha, India. We deliver high-craft, high-velocity digital experiences across three operational lanes:
1. **Celebrations:** Occasion and milestone portals (weddings, proposals, birthdays).
2. **Business & Brand:** Digital storefronts for cafés, salons, gyms, creators, and local businesses.
3. **Custom Systems:** Bespoke booking workflows, authenticated portals, and custom web applications.

Externally, AI is our internal engine room—not the sales pitch. Clients buy taste, engineering rigor, founder directness, and reliable accountability.

---

## Project 000

`ALGORYXZ / 000` is the studio's primary public web presence and Project 0 in our numbered catalog. It serves as:
* The commercial entry point for prospective clients (Celebrations, Business, Custom).
* The living showcase of our design system, editorial typography, and motion standards.
* The static portfolio catalog for all subsequent numbered studio releases (`ALGORYXZ / 001`, `002`, etc.).

---

## Canonical Authority & Source of Truth

This repository is governed by the following hierarchy:
1. **Repository Code & Runtime Evidence** (Ground truth of what is built and verified).
2. `ALGORYXZ_OPERATING_CONTRACT_V1.md` (Constitutional operating authority for governance, pricing, and client lifecycle).
3. `docs/ALGORYXZ_MASTER_RESEARCH_AND_IMPLEMENTATION_HANDBOOK.md` (Engineering and operational reference handbook).
4. `AGENTS.md` (Rules of engagement for AI coding assistants).
5. `docs/TEAM_WORKSTREAMS.md` (Shared file ownership and functional leadership).
6. `docs/DESIGN_IMPLEMENTATION_CONTRACT.md` (Design-to-engineering handoff contract).

---

## Technology Stack

* **Framework:** [Astro 5](https://astro.build/) (Static Site Generation)
* **Language:** TypeScript (Strict mode)
* **Styling:** Vanilla CSS with 3-tier Semantic Design Tokens (`src/styles/tokens.css` & `global.css`)
* **Linting & Code Quality:** ESLint with `eslint-plugin-astro` & `astro check`
* **Deployment Target:** [Cloudflare Pages](https://pages.cloudflare.com/) (Edge-hosted static assets, unmetered bandwidth, commercial use approved)
* **Runtime Overhead:** 0kb client JavaScript by default (pure semantic HTML/CSS).

---

## Getting Started

### Prerequisites
* Node.js `>= 20.0.0`
* npm `>= 10.0.0`

### Local Setup
```bash
# Clone the repository
git clone <repo-url>
cd Algoryxz

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Available Scripts
* `npm run dev`: Starts the local development server at `http://localhost:4321`.
* `npm run build`: Generates the production static bundle in `dist/`.
* `npm run preview`: Locally previews the production build.
* `npm run typecheck`: Runs Astro and TypeScript typechecking (`astro check`).
* `npm run lint`: Runs ESLint across all `.astro`, `.ts`, and `.js` files.

---

## Repository Structure

```
Algoryxz/
├── .agents/                 # Workspace agent rules & customizations
├── .github/
│   └── workflows/ci.yml     # Automated CI verification (lint, typecheck, build)
├── docs/                    # Architectural contracts and documentation
│   ├── ALGORYXZ_MASTER_RESEARCH_AND_IMPLEMENTATION_HANDBOOK.md
│   ├── DESIGN_IMPLEMENTATION_CONTRACT.md
│   ├── PROJECT_000_WAVE_0_REPORT.md
│   └── TEAM_WORKSTREAMS.md
├── public/                  # Static public assets (favicon, icons)
├── src/
│   ├── assets/              # Raw media and vectors
│   ├── components/          # Reusable UI components
│   ├── data/                # Typed static data models (projects, studio metadata)
│   ├── layouts/             # Shared page layouts
│   ├── pages/               # Route definitions (file-based routing)
│   │   ├── index.astro      # Homepage
│   │   ├── work/
│   │   │   ├── index.astro  # Work portfolio index
│   │   │   └── [project].astro # Dynamic project case study routes
│   │   ├── services.astro   # Studio offerings & packages
│   │   ├── process.astro    # Studio process & lifecycle
│   │   ├── about.astro      # Founders & studio philosophy
│   │   └── contact.astro    # Inquiries & direct contact
│   └── styles/              # Semantic tokens and global styling
│       ├── tokens.css       # Design tokens (Owned by Deeptiman)
│       └── global.css       # CSS reset & baseline styling
├── AGENTS.md                # Agent constraints and permissions
├── ALGORYXZ_OPERATING_CONTRACT_V1.md # Constitutional operating contract
├── astro.config.mjs         # Astro configuration (Static output)
├── package.json             # Dependencies and scripts
└── tsconfig.json            # TypeScript strict configuration
```

---

## Deployment Target

The application builds to static assets in `dist/` and is deployed directly to **Cloudflare Pages**.
Production domain: `https://algoryxz.com`.
Cloudflare configuration: Free tier, edge CDN, unmetered bandwidth, commercial use enabled.
