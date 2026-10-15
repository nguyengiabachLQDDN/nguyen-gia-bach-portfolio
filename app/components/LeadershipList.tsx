import type { LeadershipActivity } from '../content';
import SectionHeader from './SectionHeader';

function LeadershipCard({ item }: { item: LeadershipActivity }) {
  return (
    <li className="leadership-compact-item">
      <div className="leadership-item-header">
        <span className="leadership-year">{item.year}</span>
        <strong className="leadership-role">{item.role}</strong>
        <h4>{item.organization}</h4>
        <p className="leadership-scope">Scope: {item.scope}</p>
      </div>
      <p className="leadership-work">{item.coreWork}</p>
      <div className="leadership-impact">
        <span className="leadership-metric-badge">Metric & Impact</span>
        <p><strong>{item.metrics}</strong></p>
      </div>
      {item.href ? (
        <a className="leadership-evidence-link" href={item.href} target="_blank" rel="noreferrer" aria-label={`View evidence for ${item.organization}`}>
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

      <div className="leadership-cards-wrapper">
        {/* Card 1: Technical & Team Leadership */}
        <div className="leadership-compact-card">
          <div className="leadership-compact-header">
            <span className="technical-label">Group 01</span>
            <h4>Technical & Team Leadership</h4>
            <p>Accountability in competitive engineering sprints & robotics challenges</p>
          </div>
          <ol className="leadership-compact-grid">
            {leadershipItems.map((item) => (
              <LeadershipCard item={item} key={`${item.organization}-${item.role}`} />
            ))}
          </ol>
        </div>

        {/* Card 2: Community & Academic Service */}
        <div className="leadership-compact-card">
          <div className="leadership-compact-header">
            <span className="technical-label">Group 02</span>
            <h4>Community & Academic Service</h4>
            <p>Social responsibility, student mentorship, and charitable stewardship</p>
          </div>
          <ol className="leadership-compact-grid">
            {communityItems.map((item) => (
              <LeadershipCard item={item} key={`${item.organization}-${item.role}`} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
