# 004 Recent Commits ("What am I up to?")

## Purpose
Let visitors quickly see recent work from the owner's public GitHub activity.

## Requirements
- Section titled "What am I up to?" below the introduction.
- Table with columns: **Date** (commit date), **Commit** (message, linking to the commit on GitHub), **Repository** (name, linking to the repo).
- Shows the latest N public commits authored by the owner (default N = 10, configurable constant), newest first.
- Only public repositories and commits authored by the owner (`bfrodsham`); exclude private data.
- Commit message: first line only, truncated with ellipsis if long; link opens in a new tab with `rel="noopener noreferrer"`.
- Dates shown in a readable, locale-independent format (e.g. `2026-10-14`) with a `<time datetime>` element.

## Data
- Freshness: data must be no more than ~1–2 days old; live data is not required.
- Preferred approach: a scheduled GitHub Actions workflow (e.g. daily) fetches commits via the GitHub API (public events/search commits for `author:bfrodsham`) and writes `public/data/recent-commits.json`; the site loads this file at runtime. The workflow commits only when data changes.
- Alternative (acceptable): client-side fetch from the GitHub public API with a fallback to the static JSON on failure/rate limit.
- JSON shape: array of `{ "sha": string, "message": string, "date": ISO-8601 string, "repo": "owner/name", "url": string }`.

## States
- Loading: placeholder text/skeleton.
- Error or empty: friendly message ("Recent activity is unavailable right now") with a link to the GitHub profile; page does not break.

## Acceptance
- Given sample JSON, the table renders rows in order with correct links.
- Given empty/failed data, the fallback message shows.
- Unit tests cover row rendering, message truncation, and error/empty states.
