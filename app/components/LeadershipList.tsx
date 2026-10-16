import type { LeadershipActivity } from '../content';
import SectionHeader from './SectionHeader';
import CommunityCarousel from './CommunityCarousel';

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
  const featuredCommunity = items.find((item) => item.category === 'extracurricular' && item.featured);
  const standardCommunity = items.filter((item) => item.category === 'extracurricular' && !item.featured);

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

        {/* Card 2: Community Service */}
        <div className="leadership-compact-card">
          <div className="leadership-compact-header">
            <span className="technical-label">Group 02</span>
            <h4>Community Service</h4>
            <p>Social responsibility, student mentorship, and charitable stewardship</p>
          </div>

          {/* Featured Large Technical Card with Carousel */}
          {featuredCommunity ? (
            <div className="community-featured-card">
              <div className="community-featured-grid">
                {/* Left Column: Carousel Viewer */}
                <div className="community-carousel-column">
                  <div className="carousel-column-header">
                    <span className="technical-label">Field Documentation</span>
                    <span className="carousel-photo-count">{featuredCommunity.images?.length || 0} Photographs</span>
                  </div>
                  {featuredCommunity.images && featuredCommunity.images.length > 0 ? (
                    <CommunityCarousel
                      images={featuredCommunity.images}
                      campaignTitle={featuredCommunity.organization}
                    />
                  ) : null}
                </div>

                {/* Right Column: Campaign Dossier */}
                <div className="community-info-column">
                  <div className="leadership-item-header">
                    <span className="leadership-year">{featuredCommunity.year}</span>
                    <strong className="leadership-role">{featuredCommunity.role}</strong>
                    <h4>{featuredCommunity.organization}</h4>
                    <p className="leadership-scope">Scope: {featuredCommunity.scope}</p>
                  </div>
                  <p className="leadership-work">{featuredCommunity.coreWork}</p>
                  <div className="leadership-impact">
                    <span className="leadership-metric-badge">Metric & Impact</span>
                    <p><strong>{featuredCommunity.metrics}</strong></p>
                  </div>
                  {featuredCommunity.href ? (
                    <a
                      className="leadership-evidence-link"
                      href={featuredCommunity.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View evidence for ${featuredCommunity.organization}`}
                    >
                      Evidence ↗
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}

          {/* Other Community Activities */}
          {standardCommunity.length > 0 ? (
            <ol className="leadership-compact-grid">
              {standardCommunity.map((item) => (
                <LeadershipCard item={item} key={`${item.organization}-${item.role}`} />
              ))}
            </ol>
          ) : null}
        </div>
      </div>
    </section>
  );
}
