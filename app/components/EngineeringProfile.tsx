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
      <div className="profile-compact-card">
        <div className="capability-compact-grid">
          {groups.map((group, index) => (
            <article className="capability-mini-card" key={group.title}>
              <div className="capability-mini-header">
                <span className="capability-index">0{index + 1}</span>
                <h4>{group.title}</h4>
              </div>
              <p className="capability-mini-statement">{group.statement}</p>
              <ul className="capability-mini-tags">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <div className="capability-mini-evidence">
                <small>Validated in:</small>
                <div className="evidence-links-wrap">
                  {group.evidence.map((item) => (
                    <Link href={item.href} key={item.href}>
                      {item.label} <span>↗</span>
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
