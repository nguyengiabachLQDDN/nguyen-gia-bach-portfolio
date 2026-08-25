import type { MetadataRoute } from 'next';
import { projects } from './content';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://nguyen-gia-bach-portfolio.invalid';
  return [
    { url: base, priority: 1 },
    ...projects.map((project) => ({ url: `${base}/projects/${project.slug}`, priority: 0.8 })),
  ];
}
