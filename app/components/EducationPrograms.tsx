import type { ProgramItem } from '../i18n';
import SectionHeader from './SectionHeader';

function ProgramRow({ program }: { program: ProgramItem }) {
  return (
    <li className="program-compact-row">
      <span className="program-date">{program.date}</span>
      <div className="program-main">
        <h4>{program.title}</h4>
        <p className="program-org">{program.organization}</p>
        <p className="program-desc">{program.summary}</p>
      </div>
      {program.credential ? (
        <a className="program-cred-link" href={program.credential.src} target="_blank" rel="noreferrer">
          Credential ↗
        </a>
      ) : null}
    </li>
  );
}

export default function EducationPrograms({
  education,
  programs,
}: {
  education: string;
  programs: ProgramItem[];
}) {
  const selected = programs.slice(0, 4);
  const additional = programs.slice(4);

  return (
    <section className="section education-section" id="education" aria-labelledby="education-title" data-reveal>
      <SectionHeader
        index="06"
        label="Education & selected programs"
        title="Academic foundation and continued learning."
        description="Core high school institution, specialized physics curriculum, and independent university-level coursework."
      />
      <h3 className="sr-only" id="education-title">Education and training</h3>

      <div className="education-compact-card">
        <div className="education-compact-grid">
          {/* Left Column: Academic Foundation */}
          <div className="education-school-column">
            <span className="technical-label">Academic Institution</span>
            <h4 className="school-name">Le Quy Don High School for the Gifted</h4>
            <p className="school-detail">{education}</p>
            <div className="school-specs-box">
              <div>
                <dt>Curriculum</dt>
                <dd>Specialized Physics Class (Lớp chuyên Vật lý)</dd>
              </div>
              <div>
                <dt>Academic Standing</dt>
                <dd>GPA 9.5 / 10.0 · Excellent Student</dd>
              </div>
              <div>
                <dt>Focus Field</dt>
                <dd>Aerospace & Electrical Engineering</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>Da Nang, Vietnam</dd>
              </div>
            </div>
          </div>

          {/* Right Column: Selected Programs */}
          <div className="education-programs-column">
            <span className="technical-label">Selected Coursework & Programs</span>
            <ol className="programs-compact-list">
              {selected.map((program) => (
                <ProgramRow program={program} key={program.title} />
              ))}
            </ol>
            {additional.length ? (
              <details className="programs-additional-details">
                <summary>
                  <span>Additional technical coursework (+{additional.length})</span>
                  <span className="toggle-symbol">+</span>
                </summary>
                <ol className="programs-compact-list">
                  {additional.map((program) => (
                    <ProgramRow program={program} key={program.title} />
                  ))}
                </ol>
              </details>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
