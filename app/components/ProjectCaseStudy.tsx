import Link from 'next/link';
import MediaFrame from './MediaFrame';
import RevealController from './RevealController';
import SiteHeader from './SiteHeader';
import type { Project } from '../content';
import { caseCopy, projectPath } from '../i18n';

export default function ProjectCaseStudy({ project, nextProject }: { project: Project; nextProject: Project }) {
  const copy = caseCopy;

  return (
    <main>
      <SiteHeader />
      <RevealController />
      <article className="case-study">
        <header className="case-hero hero-enter">
          <div className="case-breadcrumb"><Link href="/#work">{copy.selectedWork}</Link><span>/</span><span>{project.number}</span></div>
          <p className="eyebrow">{project.label}</p>
          <h1>{project.title}</h1>
          <p className="case-deck">{project.summary}</p>
          <dl className="case-facts">
            <div><dt>{copy.role}</dt><dd>{project.role}</dd></div>
            <div><dt>{copy.when}</dt><dd>{project.date}</dd></div>
            <div><dt>{copy.mode}</dt><dd>{project.variant === 'robotics' ? copy.physicalSystems : copy.digitalProduct}</dd></div>
          </dl>
        </header>

        <div className="case-cover-wrap" data-reveal>
          <MediaFrame asset={project.cover} label={`Project / ${project.number}`} variant={project.variant} ratio="cover" eager showCaption />
        </div>

        <section className="case-section case-intro" data-reveal>
          <p className="section-index">{copy.contextIndex}</p>
          <div><h2>{copy.problem}</h2><p className="large-copy">{project.challenge}</p></div>
          <div><h3>{copy.approach}</h3><p>{project.approach}</p></div>
        </section>

        <section className="case-section" data-reveal>
          <p className="section-index">{copy.contributionIndex}</p>
          <div className="case-wide">
            <h2>{copy.contributionTitle}</h2>
            <ol className="contribution-list">
              {project.contributions.map((contribution, index) => (
                <li key={contribution}><span>{String(index + 1).padStart(2, '0')}</span><p>{contribution}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="case-section" data-reveal>
          <p className="section-index">{copy.decisionsIndex}</p>
          <div className="case-wide">
            <h2>{copy.decisionsTitle}</h2>
            <div className="decision-grid">
              {project.decisions.map((decision, index) => (
                <article key={decision.title}><span>0{index + 1}</span><h3>{decision.title}</h3><p>{decision.description}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-gallery-section" data-reveal aria-labelledby="gallery-title">
          <div className="case-gallery-heading">
            <p className="section-index">{copy.galleryIndex}</p>
            <h2 id="gallery-title">{copy.galleryTitle}</h2>
          </div>
          <div className="case-gallery">
            {project.gallery.map((asset, index) => (
              <MediaFrame
                key={asset.alt}
                asset={asset}
                label={`${project.number} / ${copy.frame} ${String(index + 1).padStart(2, '0')}`}
                variant={project.variant}
                ratio="gallery"
                showCaption
              />
            ))}
          </div>
        </section>

        <section className="case-section" data-reveal>
          <p className="section-index">{copy.evidenceIndex}</p>
          <div><h2>{copy.outcome}</h2><ul className="outcome-list">{project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul></div>
          <aside className="lesson-card"><p className="kicker">{copy.lesson}</p><p>{project.lessons}</p></aside>
        </section>

        <section className="case-footer-section" data-reveal>
          <div><p className="kicker">{copy.stack}</p><ul className="stack-list">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div className="case-actions">{project.links.map((link) => <a className="button button-primary" key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}<span>↗</span></a>)}</div>
        </section>

        <Link className="next-project" href={projectPath(nextProject.slug)}>
          <span>{copy.nextSystem} / {nextProject.number}</span><strong>{nextProject.title}</strong><i>↗</i>
        </Link>
      </article>
    </main>
  );
}
