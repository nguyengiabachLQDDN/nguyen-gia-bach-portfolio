import Link from 'next/link';
import type { Project } from '../content';
import MediaFrame from './MediaFrame';
import RevealController from './RevealController';
import SiteHeader from './SiteHeader';

const architecture = [
  ['01', 'Sense', 'Ultrasonic distance sensing and computer vision'],
  ['02', 'Interpret', 'Arduino-based control logic evaluates distance and risk'],
  ['03', 'Decide', 'The system maps changing risk to warning levels'],
  ['04', 'Communicate', 'Graduated buzzer patterns provide immediate feedback'],
] as const;

export default function ESightCaseStudy({ project, nextProject }: { project: Project; nextProject: Project }) {
  return (
    <main>
      <SiteHeader />
      <RevealController />
      <article className="case-study esight-case">
        <header className="case-hero hero-enter">
          <div className="case-breadcrumb"><Link href="/#work">Flagship project</Link><span>/</span><span>eSight</span></div>
          <p className="eyebrow">Independent engineering project · {project.status}</p>
          <h1>eSight</h1>
          <p className="case-deck">{project.summary}</p>
          <dl className="case-facts">
            <div><dt>Role</dt><dd>{project.role}</dd></div>
            <div><dt>System</dt><dd>Assistive smart cane</dd></div>
            <div><dt>Current stage</dt><dd>Working prototype · ongoing refinement</dd></div>
          </dl>
        </header>

        <div className="case-cover-wrap" data-reveal>
          <MediaFrame asset={project.cover} label="eSight / Prototype" variant={project.variant} ratio="cover" eager showCaption />
        </div>

        <section className="design-document-section" data-reveal>
          <p className="section-index">00 / Overview</p>
          <div className="design-document-copy">
            <h2>Assistive feedback as an engineering system.</h2>
            <p>{project.approach}</p>
          </div>
        </section>

        <section className="design-document-section" data-reveal>
          <p className="section-index">01 / Problem</p>
          <div className="design-document-copy two-column-copy">
            <div><h2>The problem</h2><p>{project.challenge}</p></div>
            <div>
              <h3>Design priorities</h3>
              <ul>
                <li>Detect nearby obstacles early enough to support safer navigation.</li>
                <li>Make urgency understandable through changing feedback patterns.</li>
                <li>Keep the system quiet when the path is safe.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="design-document-section" data-reveal>
          <p className="section-index">02 / System architecture</p>
          <div className="design-document-copy">
            <h2>From environmental input to user feedback.</h2>
            <ol className="architecture-flow">
              {architecture.map(([number, title, description]) => (
                <li key={title}><span>{number}</span><strong>{title}</strong><p>{description}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="design-document-section" data-reveal>
          <p className="section-index">03 / Contribution</p>
          <div className="design-document-copy">
            <h2>My contribution</h2>
            <ol className="contribution-list">
              {project.contributions.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></li>)}
            </ol>
          </div>
        </section>

        <section className="design-document-section" data-reveal>
          <p className="section-index">04 / Engineering decisions</p>
          <div className="design-document-copy">
            <h2>Decisions that shaped the prototype.</h2>
            <div className="engineering-decisions">
              {project.decisions.map((decision, index) => <article key={decision.title}><span>0{index + 1}</span><h3>{decision.title}</h3><p>{decision.description}</p></article>)}
            </div>
          </div>
        </section>

        <section className="case-gallery-section" data-reveal aria-labelledby="esight-gallery-title">
          <div className="case-gallery-heading"><p className="section-index">05 / Prototype evidence</p><h2 id="esight-gallery-title">Build, integration, and presentation.</h2></div>
          <div className="case-gallery">
            {project.gallery.map((asset, index) => <MediaFrame key={asset.alt} asset={asset} label={`eSight / ${String(index + 1).padStart(2, '0')}`} variant={project.variant} ratio="gallery" showCaption />)}
          </div>
        </section>

        <section className="design-document-section" data-reveal>
          <p className="section-index">06 / Current evidence</p>
          <div className="design-document-copy outcome-layout">
            <div><h2>Current result</h2><ul className="outcome-list">{project.outcomes.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <aside><p className="technical-label">Next development cycle</p><p>Continue testing and refining how sensing, control logic, and feedback behave together in realistic navigation contexts.</p></aside>
          </div>
        </section>

        <section className="case-footer-section" data-reveal>
          <div><p className="technical-label">System stack</p><ul className="technical-tags">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div className="case-actions">{project.links.map((link) => <a className="button button-primary" key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}<span>↗</span></a>)}</div>
        </section>

        <Link className="next-project" href={`/projects/${nextProject.slug}`}><span>Next project / {nextProject.number}</span><strong>{nextProject.title}</strong><i>↗</i></Link>
      </article>
    </main>
  );
}
