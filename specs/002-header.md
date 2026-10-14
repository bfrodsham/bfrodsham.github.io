# 002 Header

## Requirements
- Appears at the top of the page inside a `<header>` with a `<nav>` landmark.
- Contains a site name/brand plus a list of links to external sites.
- Initial links are stubs (`href="#"`), defined in a single data array so real URLs are easy to swap in:
  - Blog
  - Projects
  - GitHub
  - LinkedIn
- External links open with `target="_blank" rel="noopener noreferrer"` once real URLs exist.
- On narrow screens the nav wraps or collapses without horizontal scroll.

## Acceptance
- All four links render, are focusable, and have visible focus styles.
