import type { Metadata } from 'next';
import type { Project } from './content';
import type { Locale } from './i18n';
import { metadataCopy, projectPath } from './i18n';

export const SITE_ORIGIN = 'https://nguyen-gia-bach-portfolio.gbachnguyen.chatgpt.site';

function localizedAlternates(locale: Locale, englishPath: string) {
  const vietnamesePath = englishPath === '/' ? '/vi' : `/vi${englishPath}`;
  return {
    canonical: locale === 'vi' ? vietnamesePath : englishPath,
    languages: { en: englishPath, vi: vietnamesePath, 'x-default': englishPath },
  };
}

export function getRootMetadata(locale: Locale): Metadata {
  const copy = metadataCopy[locale];
  const path = locale === 'vi' ? '/vi' : '/';
  return {
    metadataBase: new URL(SITE_ORIGIN),
    title: { default: copy.title, template: '%s' },
    description: copy.description,
    keywords: ['Nguyen Gia Bach', 'student engineer', 'physics', 'software', 'robotics', 'astronomy'],
    authors: [{ name: 'Nguyen Gia Bach' }],
    creator: 'Nguyen Gia Bach',
    alternates: localizedAlternates(locale, '/'),
    openGraph: {
      type: 'website',
      locale: locale === 'vi' ? 'vi_VN' : 'en_US',
      url: `${SITE_ORIGIN}${path === '/' ? '' : path}`,
      title: copy.title,
      description: copy.shortDescription,
      images: [{ url: `${SITE_ORIGIN}/og.png`, width: 1200, height: 630, alt: copy.imageAlt }],
    },
    twitter: { card: 'summary_large_image', title: copy.title, description: copy.shortDescription, images: [`${SITE_ORIGIN}/og.png`] },
  };
}

export function getProjectMetadata(project: Project, locale: Locale): Metadata {
  const title = `${project.title} — Nguyen Gia Bach`;
  const englishPath = `/projects/${project.slug}`;
  const path = projectPath(locale, project.slug);
  const image = project.cover.src ? `${SITE_ORIGIN}${project.cover.src}` : undefined;
  return {
    metadataBase: new URL(SITE_ORIGIN),
    title,
    description: project.summary,
    alternates: localizedAlternates(locale, englishPath),
    openGraph: {
      type: 'article',
      locale: locale === 'vi' ? 'vi_VN' : 'en_US',
      url: `${SITE_ORIGIN}${path}`,
      title,
      description: project.summary,
      images: image ? [{ url: image, alt: project.cover.alt }] : [],
    },
    twitter: { card: image ? 'summary_large_image' : 'summary', title, description: project.summary, images: image ? [image] : [] },
  };
}

export function getPersonJsonLd(locale: Locale) {
  const copy = metadataCopy[locale];
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nguyen Gia Bach',
    description: copy.personDescription,
    inLanguage: locale,
    affiliation: { '@type': 'EducationalOrganization', name: copy.school },
    sameAs: [
      'https://github.com/nguyengiabachLQDDN',
      'https://www.linkedin.com/in/nguyen-gia-bach-996333386',
    ],
  };
}
