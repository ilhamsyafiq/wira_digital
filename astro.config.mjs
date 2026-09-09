// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// ---------------------------------------------------------------------------
// GitHub Pages support.
//
// Set these two env vars at build time (the included GitHub Action does this
// automatically). Locally they default to a root deploy so `npm run dev`
// and `npm run build` work with no config.
//
//   SITE      full site origin, e.g. https://yourname.github.io
//   BASE_PATH the sub-path the site is served from:
//               - user/org page  (repo = yourname.github.io) -> "/"
//               - project page   (repo = wira-digital)       -> "/wira-digital"
// ---------------------------------------------------------------------------
const SITE = process.env.SITE || 'https://wiradigital.my';
const BASE = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});
