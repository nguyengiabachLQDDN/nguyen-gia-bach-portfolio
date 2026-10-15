import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '../content';

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

function SupportingProjectCard({ project }: { project: Project }) {
  return (
    <article className="supporting-compact-card" data-reveal>
      <div className="supporting-card-media">
        <ProjectImage project={project} sizes="(max-width: 860px) 100vw, 50vw" />
      </div>
      <div className="supporting-card-content">
        <div className="work-meta">
          <span className="project-role-badge">{project.role}</span>
          <span className="project-status-tag">{project.status}</span>
        </div>
        <h4 className="supporting-card-title">{project.title}</h4>
        <p className="supporting-card-summary">{project.summary}</p>
        <div className="project-ownership-callout">
          <strong>My Ownership:</strong> <span>{project.formula.personalOwnership}</span>
        </div>
        <ul className="technical-tags" aria-label={`${project.title} technology`}>
          {project.stack.slice(0, 4).map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="supporting-card-footer">
          <ExternalLinks project={project} />
        </div>
      </div>
    </article>
  );
}

export default function SelectedEngineeringWork({ projects }: { projects: Project[] }) {
  const [jwst, ...supporting] = projects;

  return (
    <section className="section selected-work-section" id="projects" aria-labelledby="selected-work-title" data-reveal>
      {jwst ? (
        <article className="jwst-compact-card" data-reveal>
          <div className="jwst-compact-grid">
            <div className="jwst-media-column">
              <div className="jwst-badge-row">
                <span className="flagship-primary-tag">Scientific Computing</span>
                <span className="flagship-status-tag">{jwst.status} · Global Nominee</span>
              </div>
              <div className="jwst-image-frame">
                <ProjectImage project={jwst} sizes="(max-width: 900px) 100vw, 50vw" />
              </div>
              <div className="jwst-actions">
                <ExternalLinks project={jwst} />
              </div>
            </div>

            <div className="jwst-info-column">
              <div className="jwst-header-block">
                <p className="technical-label">{jwst.label}</p>
                <h3 id="selected-work-title">{jwst.title}</h3>
                <p className="jwst-summary">{jwst.summary}</p>
              </div>

              <dl className="jwst-dossier-compact">
                <div>
                  <dt>Role & Ownership</dt>
                  <dd>{jwst.formula.personalOwnership}</dd>
                </div>
                <div>
                  <dt>Result & Impact</dt>
                  <dd>{jwst.formula.teamOutcome}</dd>
                </div>
              </dl>

              <div className="jwst-pipeline-compact">
                <p className="technical-label">Data & AI Pipeline</p>
                <div className="jwst-pipeline-steps">
                  {['NASA MAST', 'FastAPI + FITS', 'Deep Zoom tiles', 'OpenSeadragon + Gemini'].map((step, index) => (
                    <div className="pipeline-step-pill" key={step}>
                      <span>0{index + 1}</span>
                      <strong>{step}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      ) : null}

      <div className="supporting-compact-grid">
        {supporting.map((project) => <SupportingProjectCard key={project.slug} project={project} />)}
      </div>
    </section>
  );
}
