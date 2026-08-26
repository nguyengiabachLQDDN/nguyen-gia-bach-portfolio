import type { MetadataRoute } from 'next';
import { projectSlugs } from './content';
import { SITE_ORIGIN } from './metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_ORIGIN;
  const projects: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${base}/projects/${slug}`,
    priority: 0.8,
  }));
  return [{ url: base, priority: 1 }, ...projects];
}
