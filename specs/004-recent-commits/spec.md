# 004 Recent Commits ("What am I up to?") — Spec

## Summary
A section presenting a table of the owner's latest public GitHub commits so visitors can quickly see recent work.

## User Stories
- **US1 (P1)** As a recruiter, I want to see recent commits so I can gauge the owner's current activity.
- **US2 (P1)** As a visitor, I want to click a commit message to view the commit on GitHub.
- **US3 (P2)** As a visitor, I want a clear message if the data cannot be shown.

## Scenarios
- Given commit data is available, When the section renders, Then a table lists commits newest first with Date, Commit, Repository columns.
- Given a row, When I click the commit message, Then the commit page on GitHub opens in a new tab.
- Given the data failed to load or is empty, When the section renders, Then I see "Recent activity is unavailable right now" with a link to the GitHub profile and the rest of the page is unaffected.
- Given a commit message longer than the available width, Then the first line is shown, truncated with an ellipsis.

## Functional Requirements
- **FR-001** The section MUST have the heading "What am I up to?" and appear below the introduction.
- **FR-002** The table MUST have columns Date, Commit, Repository.
- **FR-003** The table MUST show the latest N public commits authored by the owner, newest first. N = 10 (configurable constant in the fetch script).
- **FR-004** Date MUST render in a `<time datetime>` element formatted `YYYY-MM-DD` in the US Eastern time zone (`America/New_York`, DST-aware), converted from the commit's UTC timestamp. The `datetime` attribute keeps the full ISO-8601 value.
- **FR-005** Commit MUST show the first line of the message and link to the commit URL on GitHub (`target="_blank"`, `rel="noopener noreferrer"`).
- **FR-006** Repository MUST show `owner/name` and link to the repository.
- **FR-007** Data MUST be at most 2 days old (live data not required).
- **FR-008** Only public repository data MUST be exposed.
- **FR-009** The section MUST provide loading, empty, and error states.
- **FR-010** Commit data MUST conform to the schema below.
- **FR-011** Inclusion rules: commits MUST be authored by the GitHub login `bfrodsham`; merge commits MUST be included; commits in forked repositories MUST be excluded (fork commits are largely upstream work and GitHub's commit search does not reliably index them).
- **FR-012** Data source: the GitHub commit search REST API, called from a scheduled GitHub Actions workflow at most once per day (plus manual dispatch), which writes a static JSON file served with the site. Visitors' browsers MUST NOT call the GitHub API, so API rate limits do not affect visitors.

## Data Schema
`[ { "sha": string, "message": string, "date": ISO-8601 string, "repo": "owner/name", "url": string } ]`

## Edge Cases
- Zero commits, API rate limiting, malformed JSON, missing fields, very long messages, repos renamed/deleted.

## Success Criteria
- **SC-001** Given sample JSON, rows render in order with correct links.
- **SC-002** Given empty/failed data, the fallback message shows.
- **SC-003** Data in production is never older than 2 days.
