# AGENTS.md — Algoryxz Operating Rules for AI Agents

## 1. Authority Hierarchy
When instructions or documents appear to diverge, adhere strictly to this precedence hierarchy:
1. **Repository & Runtime Evidence** (Live working code, passing tests, real command output).
2. **`ALGORYXZ_OPERATING_CONTRACT_V1.md`** (Constitutional business and operational contract).
3. **`docs/ALGORYXZ_MASTER_RESEARCH_AND_IMPLEMENTATION_HANDBOOK.md`** (Engineering companion reference).
4. **Project Documentation & Contracts** (`docs/TEAM_WORKSTREAMS.md`, `docs/DESIGN_IMPLEMENTATION_CONTRACT.md`).
5. **Historical Research** (Phase 1–3 research documents are supporting background only).

---

## 2. Mandatory Agent Behaviors
* **Inspect Before Editing:** Perform thorough read-only repository forensics before touching code or configurations.
* **Never Fabricate Completion:** Never report a task as completed or tested unless verified by concrete command outputs and runtime evidence.
* **Run Relevant Verification:** Always run linting, typechecking, and production builds after making changes.
* **Respect File Ownership:** Adhere to ownership boundaries defined in `docs/TEAM_WORKSTREAMS.md`. Do not modify files owned by another founder/lane without authorization.
* **Avoid Unnecessary Architecture:** Choose the simplest correct, static-first solution. Do not introduce speculative libraries, databases, state machines, or complex runtimes.
* **Keep Secrets Out of Git:** Never commit API keys, connection strings, credentials, or personal machine paths.
* **Report Blockers Honestly:** If a requirement is ambiguous or an external dependency fails, pause and report it clearly rather than guessing.

---

## 3. Agent Permissions

### Allowed Autonomous Actions
Agents **MAY**:
* Inspect files, directories, Git logs, and dependency trees.
* Edit bounded application code within assigned task scope.
* Run local test suites, linters, formatters, typecheckers, and build scripts.
* Start local development or preview servers for verification.
* Capture browser screenshots or DOM states for layout and responsiveness audits.
* Create and commit to non-production Git branches (`feature/*`, `fix/*`).
* Propose Pull Requests with structured changelogs and verification evidence.

### Prohibited Autonomous Actions
Agents **MAY NOT** autonomously:
* Push directly to or merge into the `main` production branch.
* Deploy directly to live production environments.
* Alter DNS records, domain registrations, or SSL configurations.
* Execute destructive database alterations or live migrations.
* Access live banking, UPI, payment gateway (Razorpay), or customer financial accounts.
* Expose credentials or transfer secrets outside encrypted Bitwarden Send channels.
* Permanently delete client data, repository branches, or Cloudflare storage buckets.
* Self-assign or escalate administrative privileges.
