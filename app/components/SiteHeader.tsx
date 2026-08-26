'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { Locale } from '../i18n';
import { localeHome, navigation as navigationCopy } from '../i18n';
import LanguageSwitcher from './LanguageSwitcher';

const navigation = [
  { id: 'work', label: navigationCopy.work },
  { id: 'capabilities', label: navigationCopy.capabilities },
  { id: 'achievements', label: navigationCopy.achievements },
  { id: 'about', label: navigationCopy.about },
  { id: 'contact', label: navigationCopy.contact },
];

export default function SiteHeader({ home = false, locale = 'en' }: { home?: boolean; locale?: Locale }) {
  const [active, setActive] = useState(home ? 'work' : '');

  useEffect(() => {
    if (!home) return;
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: '-18% 0px -64% 0px', threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [home]);

  return (
    <header className="site-header">
      <Link className="wordmark" href={`${localeHome(locale)}#top`} aria-label={locale === 'vi' ? 'Trang chủ Nguyen Gia Bach' : 'Nguyen Gia Bach home'}>
        <span className="wordmark-mark">GB</span>
        <span className="wordmark-name">Nguyen Gia Bach</span>
      </Link>
      <div className="site-header-actions">
        <nav aria-label={locale === 'vi' ? 'Điều hướng chính' : 'Primary navigation'}>
          {navigation.map((item) => (
            <Link
              key={item.id}
              href={`${localeHome(locale)}#${item.id}`}
              className={home && active === item.id ? 'active' : ''}
              aria-current={home && active === item.id ? 'location' : undefined}
            >
              {item.label[locale]}
            </Link>
          ))}
        </nav>
        <LanguageSwitcher locale={locale} />
      </div>
    </header>
  );
}
