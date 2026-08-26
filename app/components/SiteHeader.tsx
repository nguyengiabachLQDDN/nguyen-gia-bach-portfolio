'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { navigation as navigationCopy } from '../i18n';

const navigation = [
  { id: 'work', label: navigationCopy.work },
  { id: 'capabilities', label: navigationCopy.capabilities },
  { id: 'achievements', label: navigationCopy.achievements },
  { id: 'about', label: navigationCopy.about },
  { id: 'contact', label: navigationCopy.contact },
];

export default function SiteHeader({ home = false }: { home?: boolean }) {
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
      <nav aria-label="Primary navigation">
        {navigation.map((item) => (
          <Link
            key={item.id}
            href={`/#${item.id}`}
            className={home && active === item.id ? 'active' : ''}
            aria-current={home && active === item.id ? 'location' : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
