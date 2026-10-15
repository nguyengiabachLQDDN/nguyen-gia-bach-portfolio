import Link from 'next/link';
import type { Project } from '../content';
import ProjectMediaMosaic from './ProjectMediaMosaic';

const systemFlow = [
  ['Sense', 'Ultrasonic distance sensing and computer vision'],
  ['Interpret', 'Arduino-based control logic evaluates distance and risk'],
  ['Decide', 'The system maps changing risk to a warning level'],
  ['Communicate', 'Graduated buzzer patterns provide immediate feedback'],
] as const;

export default function FlagshipProject({ project }: { project: Project }) {
  const external = project.links.find((link) => link.cardRole === 'primary');

  return (
    <section className="section flagship-section" id="work" aria-labelledby="flagship-title" data-reveal>
      <header className="flagship-header">
        <p className="section-index">02 / Featured engineering project</p>
        <div>
          <h3 id="flagship-title">eSight</h3>
          <p>Independent assistive hardware developed through rapid prototyping and testing.</p>
        </div>
      </header>

      <div className="flagship-core">
        <ProjectMediaMosaic cover={project.cover} gallery={project.gallery} />
        <aside className="flagship-context" aria-label="eSight project context">
          <p className="technical-label">Project Dossier</p>
          <p className="flagship-summary">{project.summary}</p>
          <dl className="flagship-dossier">
            <div>
              <dt>Problem & Purpose</dt>
              <dd>{project.formula.problem}</dd>
            </div>
            <div>
              <dt>Product & Features</dt>
              <dd>{project.formula.product}</dd>
            </div>
            <div>
              <dt>Results & Application</dt>
              <dd>{project.formula.application}</dd>
            </div>
            <div>
              <dt>Gia Bach’s Direct Ownership</dt>
              <dd>{project.formula.personalOwnership}</dd>
            </div>
          </dl>
        </aside>
      </div>

      <div className="flow-heading">
        <p className="technical-label">System Architecture / Engineering Flow</p>
        <p>Documented signal path from environmental sensing to user feedback.</p>
      </div>
      <div className="engineering-flow" aria-label="eSight system flow">
        {systemFlow.map(([label, value], index) => (
          <div key={label}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{label}</strong>
            <p>{value}</p>
          </div>
        ))}
      </div>

      <div className="section-actions">
        <Link className="button button-primary" href="/projects/esight">
          Explore engineering process <span>↗</span>
        </Link>
        {external ? (
          <a className="text-link" href={external.href} target="_blank" rel="noreferrer">
            Project updates <span>↗</span>
          </a>
        ) : null}
      </div>
    </section>
  );
}
