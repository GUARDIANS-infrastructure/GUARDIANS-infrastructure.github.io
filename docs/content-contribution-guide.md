# Content Contribution Guide

This guide is for contributors adding or updating website content. The goal is to end with one or more valid Markdown files in `src/content/` that can be reviewed, committed, and built without schema errors.

## Contribution Paths

### Technical contributors

Use this path if you are comfortable with Git and can run the site locally.

1. Clone the repository and create a branch.
2. Run `pnpm install` if dependencies are not installed.
3. Copy an existing Markdown file from the matching `src/content/...` directory.
4. Rename the file using a short lowercase slug, for example `new-tool-name.md`.
5. Edit only the frontmatter between the opening and closing `---` lines.
6. Use controlled vocabulary values exactly as listed in this guide or in `src/data/vocabularies.ts`.
7. Run `pnpm build`.
8. Commit the new or updated Markdown file.
9. Open a pull request or ask a maintainer to review and merge.

Use `pnpm dev` if you want to preview the page locally while editing.

### Non-technical contributors

Use this path if you do not want to clone or run the website.

1. Choose the relevant content type: activity item, catalogue item, or partner contribution.
2. Fill in the matching template below in a plain text document, email, issue, or shared document.
3. Use the controlled vocabulary values exactly where possible.
4. If a controlled value is missing, write the closest value and add a note explaining the new value needed.
5. Send the draft to a website maintainer.
6. The maintainer will convert the draft into a Markdown file, run `pnpm build`, and commit it.

Do not worry about exact file naming if you are not editing the repository directly. The maintainer can choose the final slug.

## Content Locations

- Activity items: `src/content/activity/`
- Catalogue items: `src/content/catalogue/`
- Partner contribution cards: `src/content/partner-contributions/`

Each item is one Markdown file. These files currently use frontmatter only; no body text is required below the closing `---`.

## Activity Items

Activity items appear in the homepage Activity section. The homepage shows the three most recent items by `date`.

Use this for news posts, meetings, releases, and program outputs.

```md
---
title: Short activity title
summary: One sentence describing the activity and why it matters.
date: 2026-06-17
type: News
href: https://example.org/relevant-page
---
```

Required fields:

- `title`: short display title.
- `summary`: one concise sentence.
- `date`: use `YYYY-MM-DD`.
- `type`: one of `Meeting`, `News`, `Output`, `Release`.
- `href`: public URL or internal site path.

## Catalogue Items

Catalogue items appear on the Services & resources page.

Use this for services, software, data resources, infrastructure components, documentation, guidance, publications, and reports.

```md
---
title: Short catalogue item title
summary: One sentence describing what the item is.
userValue: One sentence explaining what this helps users do.
capabilities:
  - Data access management
outputType: Software / tool
status: Available
visibility: Public
leadOrganisations:
  - Australian BioCommons
contributingOrganisations:
  - National Computational Infrastructure
contributionTypes:
  - Technical delivery
  - Standards / interoperability
intendedUsers:
  - Researchers
  - Product owners and engineers
partnerContributions:
  - trust-and-identity
href: https://example.org/item
featured: false
---
```

Required fields:

- `title`: short display title.
- `summary`: what the item is.
- `userValue`: what the item helps users do.
- `capabilities`: one or more controlled capability values.
- `outputType`: one controlled output type.
- `status`: one controlled status.
- `visibility`: one controlled visibility/access value.
- `leadOrganisations`: one or more controlled organisation names.
- `contributionTypes`: one or more controlled contribution types.
- `partnerContributions`: one or more `projectSlug` values from existing files in `src/content/partner-contributions/`.

Optional fields:

- `contributingOrganisations`: controlled organisation names.
- `intendedUsers`: controlled intended user values.
- `href`: public URL, internal path, or `mailto:` link.
- `featured`: `true` or `false`; featured items sort higher in catalogue results.

## Partner Contributions

Partner contribution cards appear on the Partners & contributions page.

Use this for project-level descriptions of partner work contributing to GUARDIANS capabilities.

```md
---
projectSlug: trust-and-identity
title: Partner project title
order: 10
leadOrganisations:
  - Australian Access Federation
deliveryUnits:
  - Bio21 Institute
collaboratingOrganisations:
  - Australian BioCommons
description: One sentence describing the partner contribution.
capabilityAreas:
  - Trusted researcher identity
  - Data access management
---
```

Required fields:

- `title`: project or contribution title.
- `projectSlug`: a unique kebab-case slug for this partner contribution entry.
- `order`: number controlling display order.
- `leadOrganisations`: one or more controlled organisation names.
- `description`: one concise sentence.
- `capabilityAreas`: one or more controlled capability values.

Optional fields:

- `deliveryUnits`: controlled delivery unit names.
- `collaboratingOrganisations`: controlled organisation names.

## Controlled Vocabulary

Values must match exactly, including capitalisation, punctuation, slashes, and apostrophes. The source of truth is `src/data/vocabularies.ts`.

Partner contribution slugs are defined by the `projectSlug` values present in `src/content/partner-contributions/`. The build will fail if a catalogue entry references a slug that does not exist, or if two partner contribution entries reuse the same slug.

### Capability Values

- `Data discovery`
- `Data commons and repositories`
- `Scalable analysis environments`
- `Trusted researcher identity`
- `Data access management`
- `Governance, policy and operations`

### Output Types

- `Service`
- `Software / tool`
- `Data resource`
- `Infrastructure component`
- `Documentation / guidance`
- `Publication / report`

### Status Values

- `Available`
- `Pilot`
- `In development`

### Visibility / Access Values

- `Public`
- `Controlled access`
- `Internal`

### Contribution Types

- `Technical delivery`
- `Infrastructure operations`
- `Data stewardship`
- `Governance / expertise`
- `Standards / interoperability`
- `Training / capability building`
- `Community engagement`
- `Program coordination`

### Organisations

- `Australian BioCommons`
- `Australian Access Federation`
- `Bioplatforms Australia`
- `Centre for Population Genomics`
- `Children's Cancer Institute / Zero Childhood Cancer`
- `Garvan Institute of Medical Research`
- `Murdoch Children's Research Institute`
- `National Collaborative Research Infrastructure Strategy`
- `National Computational Infrastructure`
- `QIMR Berghofer Medical Research Institute`
- `University of Melbourne`
- `University of Sydney`

### Delivery Units

- `Bio21 Institute`
- `Collaborative Centre for Genomic Cancer Medicine`
- `Melbourne School of Psychological Sciences`

### Intended Users

- `Clinician researchers`
- `Data owners`
- `Data stewards and custodians`
- `Funders and media`
- `Funding agencies`
- `Infrastructure operators`
- `Infrastructure providers`
- `Partners`
- `Product owners and engineers`
- `Researchers`
- `Software developers`

## Writing Guidelines

- Keep titles short and specific.
- Use Australian English.
- Prefer one clear sentence for summaries and descriptions.
- Start `userValue` with a verb such as `Helps`, `Enables`, `Supports`, or `Provides`.
- Avoid internal acronyms unless they are already familiar to the intended audience.
- Do not invent status, access, organisation, or capability labels.
- If a required value is unknown, leave a note for the maintainer rather than guessing.

## Validation

Technical contributors should run:

```bash
pnpm build
```

The build validates content against the Astro schemas in `src/content.config.ts`. If a controlled vocabulary value is misspelled or missing, the build will fail and identify the field that needs fixing.
