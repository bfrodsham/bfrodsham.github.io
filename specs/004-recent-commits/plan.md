# 004 Recent Commits — Plan

## Approach
Scheduled GitHub Actions workflow generates `public/data/recent-commits.json`; the app fetches it at runtime (satisfies FR-007, FR-008, no client rate limits).

## Components
- `.github/workflows/update-commits.yml`: daily cron + `workflow_dispatch`; runs `scripts/fetch-commits.mjs`; commits the JSON only if changed.
- `scripts/fetch-commits.mjs`: calls GitHub commit search (`author:<login> is:public`, sorted by author-date desc, per_page N) using `GITHUB_TOKEN`; maps results to the schema; applies FR-011 filters.
- `src/hooks/useRecentCommits.js`: fetches `${import.meta.env.BASE_URL}data/recent-commits.json`; returns `{status, commits}` (loading | ready | empty | error).
- `src/components/RecentCommits.jsx`: heading, table, state messages.
- Commit seed file checked in so the app works before the first workflow run.

## Notes
- Search query: `author:bfrodsham is:public` (add `merge:` filter none, so merges included), `sort=author-date&order=desc`, `per_page` larger than N (e.g. 30) so fork commits can be filtered out client-side in the script (`repository.fork === false`) before taking the first 10.
- Commit search indexes only default branches and may lag slightly; acceptable for the 1–2 day freshness goal.
- A commit by the scheduled workflow lands on `main` and triggers the Pages deploy, so data updates publish automatically. Because feature work goes through `develop`, the workflow runs against and commits to `main` only.
- Dates formatted in the UI with `Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York' })` (gives `YYYY-MM-DD`).
