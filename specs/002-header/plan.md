# 002 Header — Plan

- Component `src/components/Header.jsx` with `src/data/navLinks.js` exporting `[{ label, href }]`.
- Treat a link as external when `href` starts with `http`; apply FR-005 only then.
- Bootstrap `navbar` with `navbar-brand` and `nav`/`nav-link` items using `flex-wrap`; no collapsing toggler, so no Bootstrap JS needed (FR-007 satisfied by wrapping).
- Bootstrap's default focus ring satisfies FR-006; do not remove it.
