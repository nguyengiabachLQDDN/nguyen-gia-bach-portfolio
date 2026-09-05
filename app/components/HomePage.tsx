import Link from 'next/link';
import Image from 'next/image';
import AchievementCard from './AchievementCard';
import MediaFrame from './MediaFrame';
import ProjectRail from './ProjectRail';
import RevealController from './RevealController';
import SiteHeader from './SiteHeader';
import Toolkit from './Toolkit';
import { getAchievements, getFeaturedProjects, getLearningFocus, getSkillGroups } from '../content';
import { homeCopy, homeIntro } from '../i18n';

export default function HomePage() {
  const intro = homeIntro;
  const copy = homeCopy;
  const projects = getFeaturedProjects();
  const achievements = getAchievements();
  const skillGroups = getSkillGroups();
  const learningFocus = getLearningFocus();

  return (
    <main id="top">
      <SiteHeader home />
      <RevealController />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy hero-enter">
          <p className="eyebrow">{intro.eyebrow}</p>
          <h1 id="hero-title">{intro.name}</h1>
          <p className="hero-role">{intro.role}</p>
          <dl className="hero-facts">
            {intro.facts.map(([label, value]) => (
              <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
            ))}
          </dl>
          <div className="hero-actions">
            <Link className="button button-primary" href="#work">{intro.work} <span>↘</span></Link>
            <div className="hero-links" aria-label={intro.socialLabel}>
              <a href="https://github.com/nguyengiabachLQDDN" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
              <a href="https://www.linkedin.com/in/nguyengiabach/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
              <a href="https://www.facebook.com/gbachnguyen/" target="_blank" rel="noreferrer">Facebook <span>↗</span></a>
            </div>
          </div>
        </div>

        <div className="hero-portrait hero-orbit-enter">
          <MediaFrame
            asset={intro.image}
            label={intro.imageLabel}
            ratio="portrait"
            eager
          />
        </div>
      </section>

      <section className="section-shell" id="work" aria-labelledby="work-title" data-reveal>
        <header className="section-heading">
          <div><p className="section-index">{copy.workIndex}</p><h2 id="work-title">{copy.workTitle}</h2></div>
          <p>{copy.workDeck}</p>
        </header>

        <ProjectRail projects={projects} />
      </section>

      <section className="section-shell" id="achievements" aria-labelledby="achievements-title" data-reveal>
        <header className="section-heading">
          <div><p className="section-index">{copy.achievementsIndex}</p><h2 id="achievements-title">{copy.achievementsTitle}</h2></div>
          <p>{copy.achievementsDeck}</p>
        </header>
        <ol className="achievement-grid">
          {achievements.map((achievement) => <AchievementCard achievement={achievement} key={achievement.id} />)}
        </ol>
      </section>

      <section className="section-shell capabilities" id="capabilities" aria-labelledby="capabilities-title" data-reveal>
        <header className="section-heading compact">
          <div><p className="section-index">{copy.capabilitiesIndex}</p><h2 id="capabilities-title">{copy.capabilitiesTitle}</h2></div>
        </header>
        <Toolkit groups={skillGroups} learning={learningFocus} learningLabel={copy.currentlyLearning} />
      </section>

      <section className="section-shell programs" id="programs" aria-labelledby="programs-title" data-reveal>
        <header className="section-heading programs-heading">
          <div><p className="section-index">{copy.programsIndex}</p><h2 id="programs-title">{copy.programsTitle}</h2></div>
          <p>{copy.programsDeck}</p>
        </header>

        <div className="programs-education">
          <span>{copy.educationLabel}</span>
          <strong>{copy.educationLine}</strong>
        </div>

        <ol className="program-list">
          {copy.programItems.map((program) => (
            <li className={program.credential ? '' : 'program-without-media'} key={program.title} data-reveal>
              <div className="program-meta">
                <span>{program.date}</span>
                <strong>{program.organization}</strong>
              </div>
              <div className="program-copy">
                <h3>{program.title}</h3>
                <p>{program.summary}</p>
                {program.credential && (
                  <a href={program.credential.src} target="_blank" rel="noreferrer">{copy.viewCredential}</a>
                )}
              </div>
              {program.credential && (
                <div className="program-media">
                  <Image
                    src={program.credential.src}
                    alt={program.credential.alt}
                    fill
                    sizes="(max-width: 600px) 96px, 168px"
                  />
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="section-shell community" id="community" aria-labelledby="community-title" data-reveal>
        <header className="section-heading compact">
          <div><p className="section-index">{copy.communityIndex}</p><h2 id="community-title">{copy.communityTitle}</h2></div>
        </header>
        {copy.communityItems.length > 0 ? (
          <ol className="community-list">
            {copy.communityItems.slice(0, 3).map((item) => (
              <li key={item.title}>
                <span>{item.date}</span>
                <div className="community-entry">
                  {item.image && (
                    <div className="community-media">
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        sizes="(max-width: 600px) 92px, 112px"
                        style={{ objectPosition: item.image.objectPosition ?? 'center' }}
                      />
                    </div>
                  )}
                  <div>
                    <span className="community-role">{item.role}</span>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                  </div>
                </div>
                <a href={item.href} target="_blank" rel="noreferrer">{copy.viewPost}</a>
              </li>
            ))}
          </ol>
        ) : (
          <div className="community-empty"><p>{copy.communityEmpty}</p></div>
        )}
      </section>

      <footer className="site-footer">
        <a className="footer-contact" href="mailto:gbachnguyen@gmail.com">
          <span>Email</span>
          <strong>gbachnguyen@gmail.com</strong>
        </a>
        <a className="footer-contact" href="tel:+84795551811">
          <span>Phone</span>
          <strong>0795 551 811</strong>
        </a>
        <a className="footer-back" href="#top">{copy.backToTop}</a>
      </footer>
    </main>
  );
}
