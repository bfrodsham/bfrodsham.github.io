# Project Constitution

Project-wide principles. Every feature spec, plan, and task MUST comply. Keywords MUST/SHOULD/MAY follow RFC 2119.

## Purpose
GitHub Pages site for the owner's GitHub profile: a landing page for recruiters and people interested in the owner's software engineering career.

## Principles
- **P1 Static first.** The site MUST be a static build with no runtime backend. Dynamic data MUST be produced at build/schedule time or fetched from public APIs.
- **P2 Spec-driven.** Behavior changes MUST start with a spec change. Requirements are numbered (FR-xxx) and tests/tasks SHOULD reference them.
- **P3 Accessible.** Semantic HTML, keyboard operable, WCAG 2.1 AA contrast. [NEEDS CLARIFICATION: Lighthouse accessibility target, e.g. >= 95?]
- **P4 Simple.** Prefer the least dependencies; new runtime dependencies MUST be justified in a plan.
- **P5 Public data only.** No private repository data or secrets MUST ever be shipped to the client.

## Stack
- React 19 + Vite 8, JavaScript (no TypeScript currently), ESLint.
- Scripts: `npm run dev`, `npm run build`, `npm run lint`, `npm run preview`.
- Testing: [NEEDS CLARIFICATION: choose test stack; Vitest + React Testing Library proposed].
- Styling: [NEEDS CLARIFICATION: plain CSS / CSS modules proposed].

## Repository conventions
- Source in `src/`, static assets and data in `public/`, specs in `specs/`.
- Branching: feature branches off `develop`; PRs into `develop`. [NEEDS CLARIFICATION: which branch deploys to Pages]
- Each feature lives in `specs/NNN-name/` with `spec.md` (what/why), `plan.md` (how), `tasks.md` (ordered work).

## Quality gates
- `npm run lint` and `npm run build` MUST pass.
- Tests MUST pass once a test stack exists.

## Deployment
- GitHub Pages via GitHub Actions. [NEEDS CLARIFICATION: workflow details, Vite `base` path (user site = `/`)]

## Non-goals
- No CMS, auth, analytics, or server rendering (unless added by a later spec).
