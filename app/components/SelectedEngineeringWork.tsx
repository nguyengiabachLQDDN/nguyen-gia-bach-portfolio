import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '../content';
import SectionHeader from './SectionHeader';

function ProjectImage({ project, sizes }: { project: Project; sizes: string }) {
  if (!project.cover.src) {
    return (
      <div className="work-image work-image-placeholder">
        <span>Image placeholder</span>
      </div>
    );
  }
  return (
    <div className="work-image">
      <Image
        src={project.cover.src}
        alt={project.cover.alt}
        fill
        sizes={sizes}
        style={{ objectFit: project.cover.objectFit ?? 'cover', objectPosition: project.cover.objectPosition ?? 'center' }}
      />
    </div>
  );
}

function ExternalLinks({ project }: { project: Project }) {
  const links = project.links.filter((link) => link.cardRole === 'primary' || link.cardRole === 'secondary');
  return (
    <div className="work-links">
      <Link href={`/projects/${project.slug}`}>Case study <span>↗</span></Link>
      {links.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} <span>↗</span></a>
      ))}
    </div>
  );
}

function SupportingProject({ project }: { project: Project }) {
  return (
    <article className="supporting-project" data-reveal>
      <ProjectImage project={project} sizes="(max-width: 760px) 100vw, 50vw" />
      <div className="supporting-project-copy">
        <div className="work-meta"><span>{project.status}</span><span>{project.role}</span></div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="project-ownership-callout">
          <strong>My Ownership:</strong> <span>{project.formula.personalOwnership}</span>
        </div>
        <ul className="technical-tags" aria-label={`${project.title} technology`}>
          {project.stack.slice(0, 4).map((item) => <li key={item}>{item}</li>)}
        </ul>
        <ExternalLinks project={project} />
      </div>
    </article>
  );
}

export default function SelectedEngineeringWork({ projects }: { projects: Project[] }) {
  const [jwst, ...supporting] = projects;

  return (
    <section className="section selected-work" id="projects" aria-labelledby="selected-work-title" data-reveal>
      <SectionHeader
        index="02"
        label="Selected engineering work"
        title="Scientific tools, physics platforms, and autonomous robotics."
        description="Core technical systems: Problem/Purpose — Product/Features — Application/Results — Direct Technical Ownership."
      />

      {jwst ? (
        <article className="major-project">
          <div className="major-project-media">
            <ProjectImage project={jwst} sizes="(max-width: 900px) 100vw, 62vw" />
          </div>
          <div className="major-project-copy">
            <p className="technical-label">{jwst.label}</p>
            <h3 id="selected-work-title">{jwst.title}</h3>
            <p>{jwst.summary}</p>
            <dl>
              <div><dt>Role & Ownership</dt><dd>{jwst.formula.personalOwnership}</dd></div>
              <div><dt>Result & Impact</dt><dd>{jwst.formula.teamOutcome}</dd></div>
            </dl>
            <div className="data-pipeline" aria-label="JWST Space Explorer data workflow">
              {['NASA MAST', 'FastAPI + FITS processing', 'Deep Zoom tiles', 'OpenSeadragon + Gemini'].map((step, index) => (
                <div key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></div>
              ))}
            </div>
            <ExternalLinks project={jwst} />
          </div>
        </article>
      ) : null}

      <div className="supporting-project-grid">
        {supporting.map((project) => <SupportingProject key={project.slug} project={project} />)}
      </div>
    </section>
  );
}
