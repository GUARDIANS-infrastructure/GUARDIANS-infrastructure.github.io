GUARDIANS website resources.

## Info

This repo is the source of the GUARDIANS website. It is an [astro](https://astro.build/) project.

The [deploy-pages](https://github.com/GUARDIANS-infrastructure/website/actions/workflows/deploy-pages.yml) action builds the site and deploys to GitHub pages.

Use `feature branch` → `develop` → `main`: create a feature branch from the latest `origin/develop`, validate changes locally, and open a pull request targeting `develop`. Cloudflare Pages publishes the development preview at <https://guardians-infrastructure-github-io.pages.dev/>. After preview review and approval, merge a separate pull request from `develop` into `main` to deploy production through GitHub Pages. See the [contributor workflow](docs/content-contribution-guide.md#branch-and-release-workflow) for details.

## Structure

- Website source lives in `/src`
- Editor and maintainer notes live in `/docs`
- Content contribution instructions live in `/docs/content-contribution-guide.md`
- Design documentation lives in `/docs/design`
