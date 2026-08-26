import type { MetadataRoute } from 'next';
import { projectSlugs } from './content';
import { SITE_ORIGIN } from './metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_ORIGIN;
  const homeLanguages = { en: base, vi: `${base}/vi` };
  const homes: MetadataRoute.Sitemap = [
    { url: base, priority: 1, alternates: { languages: homeLanguages } },
    { url: `${base}/vi`, priority: 1, alternates: { languages: homeLanguages } },
  ];
  const projects: MetadataRoute.Sitemap = projectSlugs.flatMap((slug) => {
    const en = `${base}/projects/${slug}`;
    const vi = `${base}/vi/projects/${slug}`;
    const languages = { en, vi };
    return [
      { url: en, priority: 0.8, alternates: { languages } },
      { url: vi, priority: 0.8, alternates: { languages } },
    ];
  });
  return [...homes, ...projects];
}
