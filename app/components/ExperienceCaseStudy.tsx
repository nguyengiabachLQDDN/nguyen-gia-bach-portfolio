import Image from 'next/image';
import type { EngineeringExperience } from '../content';

export default function ExperienceCaseStudy({ experience }: { experience: EngineeringExperience }) {
  return (
    <section className="experience-section" id="experience" aria-labelledby="experience-title" data-reveal>
      <div className="experience-shell">
        <header className="experience-heading">
          <p className="section-index">04 / Engineering experience</p>
          <h2>Supervised industrial practice & smart city infrastructure.</h2>
          <p>A 6-month placement focused on industrial telemetry, site assessment, equipment calibration, and operational acceptance.</p>
        </header>

        <div className="experience-case">
          <header>
            <p className="technical-label">{experience.project}</p>
            <h3 id="experience-title">{experience.company}</h3>
            <div className="experience-meta">
              <span>{experience.role}</span>
              <span>{experience.period}</span>
            </div>
            <p>{experience.summary}</p>
          </header>

          <div className="experience-project-note">
            <span>Project context</span>
            <strong>{experience.project}</strong>
            <p>{experience.projectContext}</p>
          </div>

          <div className="experience-workflow" aria-label="Engineering project workflow">
            <p>Supervised engineering workflow</p>
            <ol>
              {experience.workflow.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="experience-details">
            <div className="experience-exposure">
              <h4>Key Responsibilities (Nội dung công việc)</h4>
              <ul>
                {experience.keyResponsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Skills & Competencies Acquired (Kỹ năng tiếp thu)</h4>
              <ul>
                {experience.skillsLearned.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="experience-outcomes-block">
            <h4>Concrete Outcomes & Impact (Kết quả đạt được)</h4>
            <ul>
              {experience.concreteOutcomes.map((item) => (
                <li key={item}><strong>{item}</strong></li>
              ))}
            </ul>
          </div>

          {experience.media && experience.media.length > 0 ? (
            <div className="experience-gallery-wrap">
              <div className="experience-gallery-header">
                <p className="technical-label">Field Documentation & Photographic Evidence</p>
                <p>On-site equipment deployment, telemetry verification, and engineering supervision in Da Nang.</p>
              </div>
              <div className="experience-photo-grid">
                {experience.media.map((photo, index) => (
                  <figure className="experience-photo-item" key={photo.src}>
                    <div className="experience-photo-frame">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 760px) 100vw, 33vw"
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
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
