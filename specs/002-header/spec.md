# 002 Header — Spec

## Summary
A top header with a brand and navigation links to external sites (blog, projects, etc.). Links are stubs for now.

## User Stories
- **US1 (P1)** As a visitor, I want navigation links to the owner's other sites so I can explore more of their work.

## Scenarios
- Given the page loads, When I view the header, Then I see the brand and the links Blog, Projects, GitHub, LinkedIn.
- Given I tab through the page, When focus reaches a link, Then a visible focus indicator is shown.
- Given a link has a real URL, When I click it, Then it opens in a new tab.

## Functional Requirements
- **FR-001** The header MUST be a `<header>` containing a `<nav aria-label="Primary">`.
- **FR-002** The nav MUST list: Blog, Projects, GitHub, LinkedIn.
- **FR-003** Links MUST be defined in a single data array (label, href) so URLs can be changed in one place.
- **FR-004** Stub links MUST use `href="#"` until real URLs are supplied.
- **FR-005** Links with real external URLs MUST use `target="_blank"` and `rel="noopener noreferrer"`.
- **FR-006** Links MUST have visible focus styles.
- **FR-007** On narrow screens the nav MUST wrap or collapse without horizontal scrolling.
- **FR-008** The brand text MUST be "Benjamin Frodsham" (text only, no logo) and MAY link to `#`/top of page.

## Edge Cases
- Very long labels wrap rather than overflow.

## Success Criteria
- **SC-001** All four links render and are keyboard reachable.
