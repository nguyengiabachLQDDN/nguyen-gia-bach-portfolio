import Link from 'next/link';
import SiteHeader from './components/SiteHeader';

export default function NotFound() {
  return (
    <main>
      <SiteHeader />
      <section className="not-found">
        <p className="eyebrow">Error / 404</p>
        <h1>Signal lost.</h1>
        <p>This coordinate does not exist in the current observation map.</p>
        <Link className="button button-primary" href="/">Return home <span>↗</span></Link>
      </section>
    </main>
  );
}
