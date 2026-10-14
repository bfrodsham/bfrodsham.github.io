# 001 Landing Page

## Purpose
GitHub Pages site for the owner's GitHub profile; a landing page for recruiters and people interested in the owner's software engineering career.

## Layout (top to bottom)
1. Header (spec 002)
2. Introduction (spec 003)
3. "What am I up to?" recent commits (spec 004)

## Requirements
- Single static page, deployable to GitHub Pages (React + Vite, as in this repo).
- No backend; any dynamic data is prebuilt/fetched from public sources.
- Responsive (mobile through desktop), semantic HTML, keyboard accessible, WCAG AA contrast.
- Fast load; no blocking third-party scripts.

## Acceptance
- Page renders the three sections in order with no console errors.
- `npm run build` and `npm run lint` succeed.
