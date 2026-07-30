/**
 * Prefix a site-relative path with the configured `base` so links keep working
 * when the site is served from a subpath (e.g. https://jeminpro.com/worksheets/).
 */
export function withBase(path = ""): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, "/");
  return `${base}${path.replace(/^\//, "")}`;
}
