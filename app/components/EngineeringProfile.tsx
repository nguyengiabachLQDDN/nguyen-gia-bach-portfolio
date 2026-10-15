import Link from 'next/link';
import type { CapabilityGroup } from '../content';
import SectionHeader from './SectionHeader';

export default function EngineeringProfile({ groups }: { groups: CapabilityGroup[] }) {
  return (
    <section className="section profile-section" id="profile" aria-labelledby="profile-title" data-reveal>
      <SectionHeader
        index="05"
        label="Engineering profile"
        title="Capabilities, connected to evidence."
        description="Tools are useful here because they make a system possible—not as isolated proficiency claims."
      />
      <h3 className="sr-only" id="profile-title">Engineering capabilities</h3>
      <div className="capability-list">
        {groups.map((group, index) => (
          <article key={group.title}>
            <div className="capability-copy">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{group.title}</h3>
              <p>{group.statement}</p>
            </div>
            <ul className="capability-skills">{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            <div className="capability-evidence">
              <small>Evidence</small>
              {group.evidence.map((item) => <Link href={item.href} key={item.href}>{item.label} <span>↗</span></Link>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
