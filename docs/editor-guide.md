# Website Editor Guide

This site is an Astro project. Most day-to-day edits are content or data changes; page layout and styling live separately.

## Main Locations

- `src/content/activity/`: homepage activity cards. Add one Markdown file per activity item.
- `src/content/catalogue/`: services and resources catalogue entries. Add one Markdown file per catalogue item.
- `src/content/partner-contributions/`: partner contribution cards. Add one Markdown file per partner project.
- `src/data/home.ts`: homepage section headings, introductory copy, and CTA labels.
- `src/data/about.ts`: About page copy and related links.
- `src/data/site.ts`: site metadata, acknowledgement text, and contact email addresses.
- `src/data/vocabularies.ts`: controlled values used by content frontmatter, including organisations, capability areas, output types, status values, and intended users.
- `src/data/logos.ts`: logo lists and logo presentation classes.
- `src/data/navigation.ts`: top navigation links.
- `src/pages/`: page templates.
- `src/components/`: reusable cards, header, footer, icons, and catalogue filters.
- `src/styles/global.css`: site-wide styling.

## Adding Or Updating Content

For activity, catalogue, and partner contribution items, copy an existing Markdown file in the matching `src/content/...` directory and edit the frontmatter values.

Use controlled vocabulary values exactly as defined in `src/data/vocabularies.ts`. The build will fail if values such as `capabilities`, `primaryCapability`, `primaryOutputType`, `outputTypes`, `status`, `leadOrganisations`, or `intendedUsers` do not match the allowed lists.

For contributor-facing workflows, templates, and the current controlled vocabulary list, see `docs/content-contribution-guide.md`.

Homepage activity items are sorted by `date`, newest first, and the homepage shows the latest three.

Partner contribution items are sorted by the numeric `order` field.

Catalogue entries can set `featured: true`; this promotes them in filter result ordering but does not currently add a visual badge.

When replacing logo assets, use tightly cropped transparent-background files where available. The detailed logo handling approach is documented in `docs/design/02.implementation-brief.md`.

## Local Checks

Run:

```bash
pnpm install
pnpm dev
pnpm build
```

Use `pnpm dev` for local preview and `pnpm build` before committing. The GitHub Pages workflow also runs the build on push.
