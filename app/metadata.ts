import type { Metadata } from 'next';
import type { Project } from './content';
import { metadataCopy, projectPath } from './i18n';

function normalizeOrigin(origin: string) {
  return origin.replace(/\/+$/, '');
}

export function getSiteOrigin() {
  const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL;
  const vercelProductionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

  if (configuredOrigin) return normalizeOrigin(configuredOrigin);
  if (vercelProductionHost) return `https://${normalizeOrigin(vercelProductionHost)}`;
  return 'http://localhost:3000';
}

export const SITE_ORIGIN = getSiteOrigin();

export function getRootMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_ORIGIN),
    title: { default: metadataCopy.title, template: '%s' },
    description: metadataCopy.description,
    keywords: ['Nguyen Gia Bach', 'student engineer', 'physics', 'software', 'robotics', 'astronomy'],
    authors: [{ name: 'Nguyen Gia Bach' }],
    creator: 'Nguyen Gia Bach',
    alternates: { canonical: '/' },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: SITE_ORIGIN,
      title: metadataCopy.title,
      description: metadataCopy.shortDescription,
      images: [{ url: `${SITE_ORIGIN}/og.png`, width: 1200, height: 630, alt: metadataCopy.imageAlt }],
    },
    twitter: { card: 'summary_large_image', title: metadataCopy.title, description: metadataCopy.shortDescription, images: [`${SITE_ORIGIN}/og.png`] },
  };
}

export function getProjectMetadata(project: Project): Metadata {
  const title = `${project.title} — Nguyen Gia Bach`;
  const path = projectPath(project.slug);
  const image = project.cover.src ? `${SITE_ORIGIN}${project.cover.src}` : undefined;
  return {
    metadataBase: new URL(SITE_ORIGIN),
    title,
    description: project.summary,
    alternates: { canonical: path },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: `${SITE_ORIGIN}${path}`,
      title,
      description: project.summary,
      images: image ? [{ url: image, alt: project.cover.alt }] : [],
    },
    twitter: { card: image ? 'summary_large_image' : 'summary', title, description: project.summary, images: image ? [image] : [] },
  };
}

export function getPersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nguyen Gia Bach',
    url: SITE_ORIGIN,
    description: metadataCopy.personDescription,
    inLanguage: 'en',
    affiliation: { '@type': 'EducationalOrganization', name: metadataCopy.school },
    sameAs: [
      'https://github.com/nguyengiabachLQDDN',
      'https://www.linkedin.com/in/nguyen-gia-bach-996333386',
    ],
  };
}
