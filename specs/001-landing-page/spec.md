# 001 Landing Page — Spec

## Summary
A single page that introduces the owner to recruiters and visitors, composed of header (002), introduction (003), and recent commits (004).

## User Stories
- **US1 (P1)** As a recruiter, I want to see who the owner is and where to learn more, so I can decide whether to explore further.
- **US2 (P1)** As a visitor on a phone, I want the page to be readable without horizontal scrolling.

## Scenarios
- Given a visitor opens `/`, When the page loads, Then header, introduction, and recent commits appear in that order.
- Given a viewport of 360px width, When the page renders, Then no horizontal scrollbar appears.

## Functional Requirements
- **FR-001** The page MUST render the sections in order: header, introduction, recent commits.
- **FR-002** The page MUST be a single route; no client-side routing.
- **FR-003** The document MUST set a `<title>`, `lang="en"`, meta description, and favicon. Title: "Bfrodsham Portfolio". Description: "What is Benjamin Frodsham up to these days?".
- **FR-004** The layout MUST be responsive from 320px to 1920px wide.
- **FR-005** The page MUST have exactly one `<h1>` and use landmarks (`header`, `main`).

## Edge Cases
- JavaScript disabled: the page SHOULD show a `<noscript>` notice.

## Success Criteria
- **SC-001** `npm run build` and `npm run lint` pass.
- **SC-002** Lighthouse accessibility score >= 95 and best-practices >= 90.

## Out of Scope
i18n, analytics, and a manual theme toggle.

## Theming
- **FR-006** The page MUST support light and dark themes following `prefers-color-scheme`, meeting AA contrast in both.
- **FR-007** The page MUST include a visually-hidden-until-focused skip link to `main`, and MUST respect `prefers-reduced-motion`.
