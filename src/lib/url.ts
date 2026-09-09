/**
 * Base-aware URL helper.
 *
 * Astro exposes the configured `base` as import.meta.env.BASE_URL (always ends
 * with a trailing slash, e.g. "/" or "/wira-digital/"). Root-relative links
 * ("/ranking") break when the site is served from a subpath (GitHub project
 * pages). Wrap every internal link with withBase() so it works everywhere.
 */
const RAW_BASE = import.meta.env.BASE_URL || '/';
const BASE = RAW_BASE.endsWith('/') ? RAW_BASE.slice(0, -1) : RAW_BASE; // strip trailing slash

export function withBase(path: string): string {
  if (!path.startsWith('/')) return path; // external, anchor, mailto, etc.
  return BASE + path;
}

/** Strip the base prefix from a pathname (for active-link comparison). */
export function stripBase(pathname: string): string {
  let p = pathname;
  if (BASE && p.startsWith(BASE)) p = p.slice(BASE.length);
  p = p.replace(/\/$/, '');
  return p || '/';
}
