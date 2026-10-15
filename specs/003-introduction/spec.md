# 003 Introduction — Spec

## Summary
An introductory section with a title and paragraph. Content is placeholder until the owner supplies real copy.

## User Stories
- **US1 (P1)** As a recruiter, I want a short introduction so I understand who the owner is.
- **US2 (P2)** As the owner, I want to replace the copy by editing one place without touching layout.

## Scenarios
- Given the page loads, When I view the section below the header, Then I see an `<h1>` and one paragraph.
- Given I edit the intro content constant, When I rebuild, Then the new text appears with no other code changes.

## Functional Requirements
- **FR-001** The section MUST appear directly below the header.
- **FR-002** The section MUST contain one `<h1>` title and one paragraph.
- **FR-003** Title and paragraph MUST come from a single content module (`src/data/intro.js`).
- **FR-004** Initial content MUST be clearly placeholder text.
- **FR-005** The text MUST wrap correctly at all widths (320px–1920px).

## Edge Cases
- Very long titles or multi-sentence paragraphs do not break layout.

## Success Criteria
- **SC-001** Exactly one `<h1>` on the page.
