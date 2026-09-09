# Wiradigital

**Social Media Creator Ranking & Discovery Platform** — a static frontend MVP built with **Astro + TypeScript + Tailwind CSS**.

> Discover. Rank. Influence. — *Kenali. Nilai. Ranking.*

Wiradigital ranks Malaysian social media creators across multiple platforms
(Instagram, TikTok, Threads, Facebook, YouTube), scores them with the
**Wiradigital Score**, rewards **campaign performance** with bonus ranking
points, and features selected creators/content through **DailyMedia** before
wider social distribution.

## Tech

- [Astro](https://astro.build) — static site generation
- TypeScript
- Tailwind CSS v4 (CSS-first config in `src/styles/global.css`)
- Zero runtime framework — only tiny vanilla-JS progressive enhancement

This is a **static frontend only**. There is no database, auth, backend or real
social-media API. All data is local mock data in `src/data/` and is clearly
labelled as demo/illustrative. The data layer (`src/data/types.ts`) is designed
so a real API/DB can be connected later without touching UI components.

## Commands

```bash
npm install       # install dependencies
npm run dev       # local dev server at http://localhost:4321
npm run build     # static build into ./dist
npm run preview   # preview the production build
```

## Project structure

```
src/
  components/   reusable Astro components (CreatorCard, RankingExplorer, ...)
  data/         mock data + domain types (creators, campaigns, platforms, ...)
  layouts/      base Layout with SEO + progressive-enhancement scripts
  lib/          helpers (base-aware url())
  pages/        routes: /, /ranking, /creators, /creators/[slug],
                /campaigns, /campaigns/[slug], /dailymedia, /how-it-works
  styles/       global.css (design tokens + components)
public/         favicon and static assets
```

## Deploy to GitHub Pages

A ready-to-use workflow lives in `.github/workflows/deploy.yml`. It builds the
site and computes the correct base path automatically.

1. Push this project to a GitHub repository.
2. In the repo, go to **Settings → Pages → Build and deployment → Source** and
   choose **GitHub Actions**.
3. Push to `main` (or run the workflow manually). The site deploys to:
   - `https://<user>.github.io/` if the repo is named `<user>.github.io`, or
   - `https://<user>.github.io/<repo>/` for any other repo name.

The base path is handled by `withBase()` (`src/lib/url.ts`) + the `base` option
in `astro.config.mjs`, so internal links work at either location. No manual
edits required.

### Manual / other static hosts

`npm run build` outputs a fully static site to `dist/` that you can drop on any
static host (Netlify, Vercel, Cloudflare Pages, XAMPP `htdocs`, etc.). For a
sub-path deploy, set `BASE_PATH=/your-subpath` before building.
