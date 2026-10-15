# 004 Recent Commits — Plan (proposed; pending clarifications)

## Approach
Scheduled GitHub Actions workflow generates `public/data/recent-commits.json`; the app fetches it at runtime (satisfies FR-007, FR-008, no client rate limits).

## Components
- `.github/workflows/update-commits.yml`: daily cron + `workflow_dispatch`; runs `scripts/fetch-commits.mjs`; commits the JSON only if changed.
- `scripts/fetch-commits.mjs`: calls GitHub commit search (`author:<login> is:public`, sorted by author-date desc, per_page N) using `GITHUB_TOKEN`; maps results to the schema; applies FR-011 filters.
- `src/hooks/useRecentCommits.js`: fetches `${import.meta.env.BASE_URL}data/recent-commits.json`; returns `{status, commits}` (loading | ready | empty | error).
- `src/components/RecentCommits.jsx`: heading, table, state messages.
- Commit seed file checked in so the app works before the first workflow run.

## Risks
- Commit search indexes only default branches and may lag; Events API doesn't reliably list commits. Revisit once FR-011/FR-012 are clarified.
