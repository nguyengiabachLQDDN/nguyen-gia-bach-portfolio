import Link from 'next/link';
import type { Project } from '../content';
import ProjectMediaMosaic from './ProjectMediaMosaic';
import SectionHeader from './SectionHeader';

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
      <SectionHeader
        index="02"
        label="Featured engineering project · Hardware & embedded"
        title="eSight: Assistive Hardware Prototype"
        description="Independent hardware developed through rapid prototyping, sensor fusion, and field testing for visually impaired users."
      />
      <h3 className="sr-only" id="flagship-title">eSight assistive smart cane</h3>

      <div className="flagship-compact-card">
        <div className="flagship-compact-grid">
          {/* Left Column: Media & Quick links */}
          <div className="flagship-compact-media">
            <div className="flagship-badge-row">
              <span className="flagship-primary-tag">Flagship Build</span>
              <span className="flagship-status-tag">{project.status} · {project.date}</span>
            </div>
            <ProjectMediaMosaic cover={project.cover} gallery={project.gallery} />
            <div className="flagship-action-links">
              <Link className="button button-primary" href={`/projects/${project.slug}`}>
                Explore Case Study <span>↗</span>
              </Link>
              {external ? (
                <a className="button button-secondary" href={external.href} target="_blank" rel="noreferrer">
                  {external.label} <span>↗</span>
                </a>
              ) : null}
            </div>
          </div>

          {/* Right Column: Dossier & Engineering flow */}
          <div className="flagship-compact-details">
            <div className="flagship-overview-block">
              <p className="technical-label">Project Dossier</p>
              <p className="flagship-lead-summary">{project.summary}</p>
            </div>

            <dl className="flagship-dossier-compact">
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
              <div className="flagship-ownership-row">
                <dt>Gia Bach’s Direct Ownership</dt>
                <dd>{project.formula.personalOwnership}</dd>
              </div>
            </dl>

            <div className="flagship-flow-compact">
              <p className="technical-label">Signal Path & Control Flow</p>
              <div className="flagship-flow-steps">
                {systemFlow.map(([label, value], index) => (
                  <div className="flagship-flow-pill" key={label}>
                    <div className="flow-pill-head">
                      <span>0{index + 1}</span>
                      <strong>{label}</strong>
                    </div>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
