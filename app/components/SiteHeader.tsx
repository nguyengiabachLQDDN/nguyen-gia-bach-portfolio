'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const navigation = [
  { id: 'honors', label: 'Honors' },
  { id: 'work', label: 'Projects' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function SiteHeader({ home = false }: { home?: boolean }) {
  const [active, setActive] = useState(home ? 'honors' : '');

  useEffect(() => {
    if (!home) return;
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));
    let frame = 0;

    const updateActive = () => {
      frame = 0;
      const readingLine = window.innerHeight * 0.3;
      let current = sections[0]?.id ?? 'honors';

      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= readingLine) current = section.id;
      });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = sections.at(-1)?.id ?? current;
      }
      setActive(current);
    };

    const queueUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateActive);
    };

    queueUpdate();
    window.addEventListener('scroll', queueUpdate, { passive: true });
    window.addEventListener('resize', queueUpdate);
    return () => {
      window.removeEventListener('scroll', queueUpdate);
      window.removeEventListener('resize', queueUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [home]);

  return (
    <header className="site-header">
      <nav aria-label="Primary navigation">
        <Link className="site-brand" href="/#top" aria-label="Nguyen Gia Bach — home">
          Bach Nguyen
        </Link>
        <div className="site-nav-links">
          {navigation.map((item) => (
            <Link
              key={item.id}
              href={`/#${item.id}`}
              className={home && active === item.id ? 'active' : ''}
              aria-current={home && active === item.id ? 'true' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
