import Link from 'next/link';
import type { Locale } from '../i18n';
import { localeHome, notFoundCopy } from '../i18n';
import SiteHeader from './SiteHeader';

export default function NotFoundPage({ locale }: { locale: Locale }) {
  const copy = notFoundCopy[locale];
  return (
    <main>
      <SiteHeader locale={locale} />
      <section className="not-found">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p>{copy.message}</p>
        <Link className="button button-primary" href={localeHome(locale)}>{copy.action} <span>↗</span></Link>
      </section>
    </main>
  );
}
