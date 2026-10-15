import type { ProgramItem } from '../i18n';
import SectionHeader from './SectionHeader';

function ProgramRow({ program }: { program: ProgramItem }) {
  return (
    <li>
      <span>{program.date}</span>
      <div><h3>{program.title}</h3><p>{program.organization}</p></div>
      <p>{program.summary}</p>
      {program.credential ? <a href={program.credential.src} target="_blank" rel="noreferrer">Credential ↗</a> : null}
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
        index="07"
        label="Education & selected programs"
        title="Academic foundation and continued learning."
      />
      <div className="education-line">
        <span>Education</span>
        <h3 id="education-title">{education}</h3>
      </div>
      <div className="programs-compact">
        <p className="technical-label">Selected programs</p>
        <ol>{selected.map((program) => <ProgramRow program={program} key={program.title} />)}</ol>
        {additional.length ? (
          <details>
            <summary>Additional technical activities <span>+</span></summary>
            <ol>{additional.map((program) => <ProgramRow program={program} key={program.title} />)}</ol>
          </details>
        ) : null}
      </div>
    </section>
  );
}
