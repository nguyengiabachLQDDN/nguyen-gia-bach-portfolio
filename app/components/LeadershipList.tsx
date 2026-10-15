import type { LeadershipActivity } from '../content';
import SectionHeader from './SectionHeader';

function LeadershipCard({ item }: { item: LeadershipActivity }) {
  return (
    <li>
      <div className="leadership-heading">
        <span>{item.year}</span>
        <strong>{item.role}</strong>
        <h3>{item.organization}</h3>
        <p className="leadership-scope">Scope: {item.scope}</p>
      </div>
      <p className="leadership-work">{item.coreWork}</p>
      <div className="leadership-impact">
        <span className="leadership-metric-badge">Metric & Impact</span>
        <p><strong>{item.metrics}</strong></p>
      </div>
      {item.href ? (
        <a href={item.href} target="_blank" rel="noreferrer" aria-label={`View evidence for ${item.organization}`}>
          Evidence ↗
        </a>
      ) : null}
    </li>
  );
}

export default function LeadershipList({ items }: { items: LeadershipActivity[] }) {
  const leadershipItems = items.filter((item) => item.category === 'leadership');
  const communityItems = items.filter((item) => item.category === 'extracurricular');

  return (
    <section className="section leadership-section" id="leadership" aria-labelledby="leadership-title" data-reveal>
      <SectionHeader
        index="03"
        label="Leadership & extracurricular activities"
        title="Technical leadership and community stewardship."
        description="Structured by: Role — Scope/Target — Key Responsibilities — Quantified Impact & Metrics."
      />
      <h3 className="sr-only" id="leadership-title">Leadership and extracurricular activities</h3>

      <div className="leadership-group-wrapper">
        <div className="leadership-group-header">
          <p className="technical-label">Technical & Team Leadership</p>
          <h4>Accountability in competitive engineering sprints & robotics challenges</h4>
        </div>
        <ol className="leadership-list">
          {leadershipItems.map((item) => (
            <LeadershipCard item={item} key={`${item.organization}-${item.role}`} />
          ))}
        </ol>
      </div>

      <div className="leadership-group-wrapper" style={{ marginTop: '48px' }}>
        <div className="leadership-group-header">
          <p className="technical-label">Community & Academic Service</p>
          <h4>Social responsibility, student mentorship, and charitable stewardship</h4>
        </div>
        <ol className="leadership-list">
          {communityItems.map((item) => (
            <LeadershipCard item={item} key={`${item.organization}-${item.role}`} />
          ))}
        </ol>
      </div>
    </section>
  );
}
