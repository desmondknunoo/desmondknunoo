# Portfolio page conventions

- On every route except Home and Contact, wrap each content section in `CollapsibleSection` from `src/components/collapsible-section.tsx`. Keep sections expanded initially unless the page has a clear reason to start condensed.
- Use `SectionPage` for standard page headers. Its header section is collapsible by default; Contact opts out.
- `ScrollReveal` in the root layout automatically animates sections and articles as they enter the viewport, including content added during client-side navigation. Add `data-scroll-reveal` to non-section/article blocks that should animate. Do not add a second reveal system.
- Preserve the `prefers-reduced-motion` behavior for all scroll animations.