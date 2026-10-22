# desmondknunoo — To do

_Last updated: 2026-10-22_

Personal portfolio site for Desmond Kwame Nunoo, built with Next.js 16, React 19, Tailwind CSS 4 and framer-motion. The homepage is live in code; uncommitted work adds per-project `/work/[slug]` pages, but every project entry still has placeholder content.

## Done
- Replaced the old static HTML site (index.html, work.html, about.html) with a Next.js project (Jan 2026)
- Built the landing page: hero, portfolio, contact (mailto link) and footer sections, plus shared UI utilities
- Replaced the old hero with a hero parallax and an infinite logo slider; added hydration-warning suppression (Jan 2026)
- Added portfolio thumbnails and site icons under `public/images` and `public/icons`, including two new images in Jul 2026
- Rewrote `README.md` as a profile of Desmond Kwame Nunoo and moved the stock Next.js readme to `project-readme.md` (Aug 2026)
- Added the Innova Labs Ghana Senior Software Engineer role to the README experience table (Aug 2026)

## To do
- [ ] Review and commit the uncommitted work: `src/lib/work.ts`, `src/app/work/[slug]/page.tsx` and the `src/app/page.tsx` change that points the hero parallax at `/work/<slug>`
- [x] Add `.claude/` to `.gitignore` (the folder exists locally and the repo ignore file does not list it)
- [ ] Write the summary and body for all 15 entries in `src/lib/work.ts` (each is still "Content coming soon." with an empty body)
- [ ] Replace the placeholder thumbnail `/images/header.jpg`, used by 13 of the 15 work entries, with a real image per project
- [ ] Re-add the external links the old homepage had (smartsaleerp.com, Kampuze Figma prototype, U4nor Behance) through the `externalLinks` field where those projects still belong
- [ ] Replace the default `Create Next App` title and description in `src/app/layout.tsx` with real site metadata
- [ ] Wire the favicons and `site.webmanifest` in `public/icons` into the layout metadata (nothing references them yet)
- [ ] Remove or use `src/components/portfolio-section.tsx` and `src/components/ui/hero-section-5.tsx` (neither is imported anywhere)
- [ ] Run `npm run build` and `npm run lint` to confirm the 15 static work pages generate cleanly

## Notes
- Branch `main`, in sync with `origin/main` (github.com/desmondknunoo/desmondknunoo); last commit 2026-08-14.
- Uncommitted: modified `src/app/page.tsx`; new untracked `src/app/work/` and `src/lib/work.ts`.
- README lists desmondknunoo.com as the portfolio URL; no deploy config is checked in.
