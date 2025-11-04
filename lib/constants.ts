/**
 * Content types that represent actual pages (not components/configuration)
 * These are used for sitemap generation and routing
 */
export const pagesContentTypes = [
  'home',
  'project', 
] as const;

export type PageContentType = typeof pagesContentTypes[number];