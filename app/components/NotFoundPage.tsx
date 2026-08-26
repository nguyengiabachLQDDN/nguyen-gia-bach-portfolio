import Link from 'next/link';
import { notFoundCopy } from '../i18n';
import SiteHeader from './SiteHeader';

export default function NotFoundPage() {
  const copy = notFoundCopy;
  return (
    <main>
      <SiteHeader />
      <section className="not-found">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p>{copy.message}</p>
        <Link className="button button-primary" href="/">{copy.action} <span>↗</span></Link>
      </section>
    </main>
  );
}
