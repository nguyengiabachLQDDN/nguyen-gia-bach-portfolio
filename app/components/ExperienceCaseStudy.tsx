import Image from 'next/image';
import type { EngineeringExperience } from '../content';
import SectionHeader from './SectionHeader';

export default function ExperienceCaseStudy({ experience }: { experience: EngineeringExperience }) {
  const featuredPhotos = experience.media.slice(0, 2);
  const remainingPhotos = experience.media.slice(2);

  return (
    <section className="section experience-section" id="experience" aria-labelledby="experience-title" data-reveal>
      <SectionHeader
        index="04"
        label="Engineering experience"
        title="Field Engineering Intern: IoT telemetry & municipal infrastructure."
      />
      <h3 className="sr-only" id="experience-title">Engineering experience — {experience.company}</h3>

      <div className="experience-compact-card">
        {/* Left Column: Organization, Context & Visual Proof */}
        <div className="experience-left-column">
          <div className="experience-org-badge">
            <span className="experience-period-badge">{experience.period}</span>
            <span className="experience-type-badge">6-Month Placement</span>
          </div>

          <div className="experience-org-info">
            <h4 className="experience-company-name">{experience.company}</h4>
            <p className="experience-role-title">{experience.role}</p>
          </div>

          <div className="experience-project-box">
            <span className="technical-label">Project Focus</span>
            <strong>{experience.project}</strong>
            <p>{experience.projectContext}</p>
          </div>

          {featuredPhotos.length > 0 ? (
            <div className="experience-featured-photos">
              <span className="technical-label">On-site Field Documentation</span>
              <div className="experience-photo-pair">
                {featuredPhotos.map((photo, index) => (
                  <figure className="experience-compact-photo" key={photo.src}>
                    <div className="experience-compact-frame">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 860px) 100vw, 240px"
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                      />
                    </div>
                    <figcaption>
                      <span>0{index + 1}</span>
                      <p>{photo.caption}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>

              {remainingPhotos.length > 0 ? (
                <details className="experience-more-photos">
                  <summary>
                    View additional site documentation (+{remainingPhotos.length}) <span>+</span>
                  </summary>
                  <div className="experience-photo-pair" style={{ marginTop: '12px' }}>
                    {remainingPhotos.map((photo, index) => (
                      <figure className="experience-compact-photo" key={photo.src}>
                        <div className="experience-compact-frame">
                          <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            sizes="(max-width: 860px) 100vw, 240px"
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                          />
                        </div>
                        <figcaption>
                          <span>0{index + 3}</span>
                          <p>{photo.caption}</p>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </details>
              ) : null}
            </div>
          ) : null}
        </div>

        {/* Right Column: Work, Skills & Outcomes */}
        <div className="experience-right-column">
          <p className="experience-lead-summary">{experience.summary}</p>

          <div className="experience-workflow-compact" aria-label="Supervised workflow">
            <span className="technical-label">Observed Deployment Workflow</span>
            <div className="workflow-steps-row">
              {experience.workflow.map((step, index) => (
                <div className="workflow-step-pill" key={step}>
                  <span>0{index + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-content-block">
            <h5>Key Responsibilities</h5>
            <ul className="experience-checklist">
              {experience.keyResponsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="experience-content-block">
            <h5>Competencies & Field Skills</h5>
            <ul className="experience-tags-list">
              {experience.skillsLearned.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="experience-outcomes-compact">
            <h5>Verified Outcomes</h5>
            <ul>
              {experience.concreteOutcomes.map((item) => (
                <li key={item}>
                  <strong>{item}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
