# Project Constitution

Project-wide principles. Every feature spec, plan, and task MUST comply. Keywords MUST/SHOULD/MAY follow RFC 2119.

## Purpose
GitHub Pages site for the owner's GitHub profile: a landing page for recruiters and people interested in the owner's software engineering career.

## Principles
- **P1 Static first.** The site MUST be a static build with no runtime backend. Dynamic data MUST be produced at build/schedule time or fetched from public APIs.
- **P2 Spec-driven.** Behavior changes MUST start with a spec change. Requirements are numbered (FR-xxx) and tests/tasks SHOULD reference them.
- **P3 Accessible.** Semantic HTML, keyboard operable, WCAG 2.1 AA contrast. Adopt low-complexity accessibility measures by default: skip link, visible focus, `prefers-reduced-motion` respected, sufficient contrast in both light and dark themes, descriptive link text, `lang` attribute, landmarks, and labeled regions. Lighthouse accessibility score MUST be >= 95.
- **P4 Simple.** Prefer the least dependencies (Bootstrap is the approved styling dependency); new runtime dependencies MUST be justified in a plan.
- **P5 Public data only.** No private repository data or secrets MUST ever be shipped to the client.

## Stack
- React 19 + Vite 8, JavaScript (no TypeScript currently), ESLint.
- Scripts: `npm run dev`, `npm run build`, `npm run lint`, `npm run preview`.
- Testing: Vitest + React Testing Library (+ jsdom, `@testing-library/jest-dom`, `@testing-library/user-event`). Script: `npm test` (runs `vitest run`).
- Styling: Bootstrap 5.3 (`bootstrap` npm package, CSS only; no `react-bootstrap` and no Bootstrap JS unless a plan justifies it), used for layout and components (container, navbar, table, utilities) to keep a minimalist look. Custom CSS SHOULD be limited to a small `src/index.css` for anything Bootstrap can't cover. Light and dark themes use Bootstrap's `data-bs-theme` attribute on `<html>`, set from `prefers-color-scheme` (follows the OS setting; no toggle).

## Repository conventions
- Source in `src/`, static assets and data in `public/`, specs in `specs/`.
- Branching: feature branches off `develop`; PRs into `develop`; `main` is the release branch and deploys to GitHub Pages.
- Each feature lives in `specs/NNN-name/` with `spec.md` (what/why), `plan.md` (how), `tasks.md` (ordered work).

## Quality gates
- `npm run lint` and `npm run build` MUST pass.
- `npm test` MUST pass.

## Deployment
- GitHub Pages via GitHub Actions. This repo is a user site (`bfrodsham.github.io`), served at the domain root, so Vite `base` MUST stay the default `/`. The deploy workflow triggers on push to `main`, runs lint, test, and build, then publishes `dist/` with the official Pages actions.

## Non-goals
- No CMS, auth, analytics, or server rendering (unless added by a later spec).
