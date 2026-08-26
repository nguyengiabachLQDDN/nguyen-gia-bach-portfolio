'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import type { Locale } from '../i18n';
import { switchLocalePath } from '../i18n';

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [hash, setHash] = useState('');

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  return (
    <div className="language-switcher" role="group" aria-label={locale === 'vi' ? 'Chọn ngôn ngữ' : 'Choose language'}>
      {(['en', 'vi'] as const).map((target) => (
        <Link
          key={target}
          href={`${switchLocalePath(pathname, target)}${hash}`}
          lang={target}
          hrefLang={target}
          aria-current={locale === target ? 'page' : undefined}
        >
          {target.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
