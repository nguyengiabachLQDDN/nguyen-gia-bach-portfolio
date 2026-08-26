import Link from 'next/link';
import MediaFrame from './MediaFrame';
import RevealController from './RevealController';
import SiteHeader from './SiteHeader';
import { getAchievements, getProjects, getSkillGroups } from '../content';
import type { Locale } from '../i18n';
import { homeCopy, homeIntro, projectPath } from '../i18n';

export default function HomePage({ locale = 'en' }: { locale?: Locale }) {
  const intro = homeIntro[locale];
  const copy = homeCopy[locale];
  const projects = getProjects(locale);
  const achievements = getAchievements(locale);
  const skillGroups = getSkillGroups(locale);

  return (
    <main id="top">
      <SiteHeader home locale={locale} />
      <RevealController />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy hero-enter">
          <p className="eyebrow">{intro.eyebrow}</p>
          <h1 id="hero-title">
            {intro.titleBefore} <span>{intro.titlePhysics}</span>{intro.titleAfter}
          </h1>
          <p className="hero-deck">
            {intro.deck}
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#work">{intro.work} <span>↘</span></Link>
            <Link className="button button-secondary" href="#contact">{intro.contact} <span>↘</span></Link>
          </div>
          <div className="hero-links" aria-label={intro.socialLabel}>
            <a href="https://github.com/nguyengiabachLQDDN" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            <a href="https://www.linkedin.com/in/nguyen-gia-bach-996333386" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          </div>
        </div>

        <div className="hero-observatory hero-orbit-enter" aria-hidden="true">
          <div className="observatory-ring ring-one" />
          <div className="observatory-ring ring-two" />
          <div className="observatory-ring ring-three" />
          <div className="observatory-axis axis-x" />
          <div className="observatory-axis axis-y" />
          <div className="observatory-core"><span>GB</span></div>
          <span className="coordinate coordinate-a">16.0544° N</span>
          <span className="coordinate coordinate-b">108.2022° E</span>
          <span className="coordinate coordinate-c">OBS / 2026</span>
        </div>

        <dl className="hero-telemetry">
          {intro.telemetry.map(([label, value], index) => (
            <div key={label}><dt>{label}</dt><dd>{index === 2 ? <i /> : null}{value}</dd></div>
          ))}
        </dl>
      </section>

      <section className="signal-strip" aria-label={copy.signalLabel} data-reveal>
        {copy.signalItems.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </section>

      <section className="section-shell" id="work" aria-labelledby="work-title" data-reveal>
        <header className="section-heading">
          <div><p className="section-index">{copy.workIndex}</p><h2 id="work-title">{copy.workTitle}</h2></div>
          <p>{copy.workDeck}</p>
        </header>

        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card project-${project.variant}`} key={project.slug} data-reveal>
              <MediaFrame asset={project.cover} label={`${locale === 'vi' ? 'Dự án' : 'Project'} / ${project.number}`} variant={project.variant} locale={locale} />
              <div className="project-card-body">
                <div className="project-meta"><span>{project.number}</span><span>{project.role}</span></div>
                <p className="kicker">{project.label}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul className="mini-stack" aria-label={`${project.title} ${copy.projectTechnologies}`}>
                  {project.stack.slice(0, 2).map((item) => <li key={item}>{item}</li>)}
                </ul>
                <Link className="text-link" href={projectPath(locale, project.slug)}>{copy.openCaseStudy} <span>↗</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell capabilities" id="capabilities" aria-labelledby="capabilities-title" data-reveal>
        <header className="section-heading">
          <div><p className="section-index">{copy.capabilitiesIndex}</p><h2 id="capabilities-title">{copy.capabilitiesTitle}</h2></div>
          <p>{copy.capabilitiesDeck}</p>
        </header>
        <div className="capability-grid">
          {skillGroups.map((group) => (
            <article className="capability-card" key={group.code} data-reveal>
              <span className="capability-code">{group.code}</span>
              <h3>{group.title}</h3>
              <p>{group.summary}</p>
              <div className="capability-list"><h4>{copy.usedInProjects}</h4><ul>{group.used.map((item) => <li key={item}>{item}</li>)}</ul></div>
              <div className="capability-list learning"><h4>{copy.exploringNext}</h4><ul>{group.exploring.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" id="achievements" aria-labelledby="achievements-title" data-reveal>
        <header className="section-heading">
          <div><p className="section-index">{copy.achievementsIndex}</p><h2 id="achievements-title">{copy.achievementsTitle}</h2></div>
          <p>{copy.achievementsDeck}</p>
        </header>
        <ol className="achievement-grid">
          {achievements.map((achievement) => (
            <li className="achievement-card" key={`${achievement.year}-${achievement.title}`} data-reveal>
              <MediaFrame asset={achievement.image} label={achievement.year} ratio="compact" locale={locale} />
              <div className="achievement-card-copy">
                <div className="achievement-meta"><span>{achievement.year}</span><span>{achievement.context}</span></div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
                {achievement.evidence ? <a href={achievement.evidence} target="_blank" rel="noreferrer" aria-label={`${copy.evidenceFor} ${achievement.title}`}>{copy.evidence}</a> : <span className="achievement-verified">{copy.recordedAchievement}</span>}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-shell about" id="about" aria-labelledby="about-title" data-reveal>
        <div className="about-main">
          <p className="section-index">{copy.aboutIndex}</p>
          <h2 id="about-title">{copy.aboutTitle}</h2>
          <p className="about-bio">{copy.aboutBio}</p>
          <p className="about-note">{copy.aboutNote}</p>
        </div>
        <aside className="education-card">
          <p className="kicker">{copy.education}</p>
          <span className="education-mark">LQD</span>
          <h3>{copy.school}</h3>
          <p>{copy.schoolLocation}</p>
          <dl><div><dt>{copy.focus}</dt><dd>{copy.focusValue}</dd></div><div><dt>{copy.interests}</dt><dd>{copy.interestsValue}</dd></div></dl>
        </aside>
      </section>

      <section className="section-shell leadership" aria-labelledby="leadership-title" data-reveal>
        <header className="section-heading compact">
          <div><p className="section-index">{copy.leadershipIndex}</p><h2 id="leadership-title">{copy.leadershipTitle}</h2></div>
        </header>
        <div className="leadership-grid">
          {copy.leadership.map((item) => <article key={item.number} data-reveal><span>{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}
        </div>
        <div className="credentials">
          <p className="kicker">{copy.programs}</p>
          <ul>{copy.credentials.map(([year, title]) => <li key={title}><span>{year}</span><strong>{title}</strong></li>)}</ul>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title" data-reveal>
        <div>
          <p className="eyebrow">{copy.contactEyebrow}</p>
          <h2 id="contact-title">{copy.contactTitle}</h2>
          <p>{copy.contactDeck}</p>
        </div>
        <div className="contact-links">
          <a className="contact-link" href="https://www.linkedin.com/in/nguyen-gia-bach-996333386" target="_blank" rel="noreferrer"><span>01</span><strong>LinkedIn</strong><i>↗</i></a>
          <a className="contact-link" href="https://github.com/nguyengiabachLQDDN" target="_blank" rel="noreferrer"><span>02</span><strong>GitHub</strong><i>↗</i></a>
        </div>
      </section>

      <footer className="site-footer">
        <span>Nguyen Gia Bach © 2026</span><span>{copy.footerTagline}</span><a href="#top">{copy.backToTop}</a>
      </footer>
    </main>
  );
}
