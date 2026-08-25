import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import MediaFrame from '../../components/MediaFrame';
import RevealController from '../../components/RevealController';
import SiteHeader from '../../components/SiteHeader';
import { getProject, projects } from '../../content';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.title} — Nguyen Gia Bach`;
  const image = project.cover.src
    ? `https://nguyen-gia-bach-portfolio.gbachnguyen.chatgpt.site${project.cover.src}`
    : undefined;
  return {
    title,
    description: project.summary,
    openGraph: { title, description: project.summary, images: image ? [{ url: image, alt: project.cover.alt }] : [] },
    twitter: { card: image ? 'summary_large_image' : 'summary', title, description: project.summary, images: image ? [image] : [] },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main>
      <SiteHeader />
      <RevealController />
      <article className="case-study">
        <header className="case-hero hero-enter">
          <div className="case-breadcrumb"><Link href="/#work">Selected work</Link><span>/</span><span>{project.number}</span></div>
          <p className="eyebrow">{project.label}</p>
          <h1>{project.title}</h1>
          <p className="case-deck">{project.summary}</p>
          <dl className="case-facts">
            <div><dt>Role</dt><dd>{project.role}</dd></div>
            <div><dt>When</dt><dd>{project.date}</dd></div>
            <div><dt>Mode</dt><dd>{project.variant === 'robotics' ? 'Physical systems' : 'Digital product'}</dd></div>
          </dl>
        </header>

        <div className="case-cover-wrap" data-reveal>
          <MediaFrame asset={project.cover} label={`Project / ${project.number}`} variant={project.variant} ratio="cover" eager showCaption />
        </div>

        <section className="case-section case-intro" data-reveal>
          <p className="section-index">01 / Context</p>
          <div><h2>The problem</h2><p className="large-copy">{project.challenge}</p></div>
          <div><h3>Approach</h3><p>{project.approach}</p></div>
        </section>

        <section className="case-section" data-reveal>
          <p className="section-index">02 / Contribution</p>
          <div className="case-wide">
            <h2>What I contributed</h2>
            <ol className="contribution-list">
              {project.contributions.map((contribution, index) => (
                <li key={contribution}><span>{String(index + 1).padStart(2, '0')}</span><p>{contribution}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="case-section" data-reveal>
          <p className="section-index">03 / Decisions</p>
          <div className="case-wide">
            <h2>Technical decisions</h2>
            <div className="decision-grid">
              {project.decisions.map((decision, index) => (
                <article key={decision.title}><span>0{index + 1}</span><h3>{decision.title}</h3><p>{decision.description}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-gallery-section" data-reveal aria-labelledby="gallery-title">
          <div className="case-gallery-heading">
            <p className="section-index">04 / Project gallery</p>
            <h2 id="gallery-title">Evidence, interfaces, and process.</h2>
          </div>
          <div className="case-gallery">
            {project.gallery.map((asset, index) => (
              <MediaFrame
                key={asset.alt}
                asset={asset}
                label={`${project.number} / Frame ${String(index + 1).padStart(2, '0')}`}
                variant={project.variant}
                ratio="gallery"
                showCaption
              />
            ))}
          </div>
        </section>

        <section className="case-section" data-reveal>
          <p className="section-index">05 / Evidence</p>
          <div><h2>Outcome</h2><ul className="outcome-list">{project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul></div>
          <aside className="lesson-card"><p className="kicker">What changed in my thinking</p><p>{project.lessons}</p></aside>
        </section>

        <section className="case-footer-section" data-reveal>
          <div><p className="kicker">System stack</p><ul className="stack-list">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div className="case-actions">{project.links.map((link) => <a className="button button-primary" key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}<span>↗</span></a>)}</div>
        </section>

        <Link className="next-project" href={`/projects/${nextProject.slug}`}>
          <span>Next system / {nextProject.number}</span><strong>{nextProject.title}</strong><i>↗</i>
        </Link>
      </article>
    </main>
  );
}
