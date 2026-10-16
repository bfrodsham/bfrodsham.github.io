# 001 Landing Page — Plan

- `src/App.jsx` composes `<Header />`, `<main>` containing `<Introduction />` and `<RecentCommits />`.
- Remove Vite template demo content/assets from `src/` and replace `index.html` metadata.
- Add `bootstrap` dependency and import `bootstrap/dist/css/bootstrap.min.css` in `src/main.jsx`; `src/index.css` only for minimal overrides.
- Layout with Bootstrap `container` and responsive utilities (Bootstrap's mobile-first breakpoints).
- Theme: inline script in `index.html` (and a `matchMedia` change listener) sets `data-bs-theme` on `<html>` to `dark` or `light` from `prefers-color-scheme`.
- Skip link uses Bootstrap's `visually-hidden-focusable`.
