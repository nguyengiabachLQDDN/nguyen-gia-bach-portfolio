import Link from 'next/link';
import MediaFrame from './components/MediaFrame';
import RevealController from './components/RevealController';
import SiteHeader from './components/SiteHeader';
import { achievements, projects, skillGroups } from './content';

const leadership = [
  {
    number: 'L01',
    title: 'eSight Project Lead',
    copy: 'Guiding a student engineering project from problem definition through prototyping, testing, and team integration.',
  },
  {
    number: 'L02',
    title: 'PIRL Technical Committee',
    copy: 'Contributing technical work across three consecutive cohorts of the school physics club — Generations 4, 5, and 6.',
  },
  {
    number: 'L03',
    title: 'Competition Team Lead',
    copy: 'Coordinating small teams under time pressure for NASA Space Apps, RMIT Tech Camp, and robotics challenges.',
  },
];

const credentials = [
  ['2026', 'Fulbright STEM Mentorship'],
  ['07.25', 'Google Developer Groups Codelab'],
  ['08.25', 'Google Developer Groups Vibecoding'],
];

export default function Home() {
  return (
    <main id="top">
      <SiteHeader home />
      <RevealController />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy hero-enter">
          <p className="eyebrow">Student engineer · Da Nang, Vietnam</p>
          <h1 id="hero-title">
            I build where <span>physics</span>, software, and robotics meet.
          </h1>
          <p className="hero-deck">
            I turn scientific ideas into useful, interactive systems—from exploring deep-space imagery to building astronomy tools and physical prototypes.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#work">View my work <span>↘</span></Link>
            <Link className="button button-secondary" href="#contact">Contact <span>↘</span></Link>
          </div>
          <div className="hero-links" aria-label="Social profiles">
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
          <div><dt>Field</dt><dd>STEM</dd></div>
          <div><dt>Mode</dt><dd>Build</dd></div>
          <div><dt>Status</dt><dd><i /> Curious</dd></div>
        </dl>
      </section>

      <section className="signal-strip" aria-label="Selected facts" data-reveal>
        <div><strong>1,290+</strong><span>NASA Global Nominees</span></div>
        <div><strong>48H</strong><span>Hackathon build</span></div>
        <div><strong>03</strong><span>PIRL cohorts</span></div>
        <div><strong>PHY</strong><span>First principles</span></div>
      </section>

      <section className="section-shell" id="work" aria-labelledby="work-title" data-reveal>
        <header className="section-heading">
          <div><p className="section-index">01 / Selected work</p><h2 id="work-title">Systems made to be explored.</h2></div>
          <p>Three projects, each showing a different way I connect science, software, and physical engineering.</p>
        </header>

        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card project-${project.variant}`} key={project.slug} data-reveal>
              <MediaFrame asset={project.cover} label={`Project / ${project.number}`} variant={project.variant} />
              <div className="project-card-body">
                <div className="project-meta"><span>{project.number}</span><span>{project.role}</span></div>
                <p className="kicker">{project.label}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul className="mini-stack" aria-label={`${project.title} technologies`}>
                  {project.stack.slice(0, 2).map((item) => <li key={item}>{item}</li>)}
                </ul>
                <Link className="text-link" href={`/projects/${project.slug}`}>Open case study <span>↗</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell capabilities" id="capabilities" aria-labelledby="capabilities-title" data-reveal>
        <header className="section-heading">
          <div><p className="section-index">02 / Capabilities</p><h2 id="capabilities-title">How I turn ideas into working systems.</h2></div>
          <p>Organised by what I can do—not by a wall of technology logos.</p>
        </header>
        <div className="capability-grid">
          {skillGroups.map((group) => (
            <article className="capability-card" key={group.code} data-reveal>
              <span className="capability-code">{group.code}</span>
              <h3>{group.title}</h3>
              <p>{group.summary}</p>
              <div className="capability-list"><h4>Used in projects</h4><ul>{group.used.map((item) => <li key={item}>{item}</li>)}</ul></div>
              <div className="capability-list learning"><h4>Exploring next</h4><ul>{group.exploring.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" id="achievements" aria-labelledby="achievements-title" data-reveal>
        <header className="section-heading">
          <div><p className="section-index">03 / Evidence</p><h2 id="achievements-title">Achievements built on the work.</h2></div>
          <p>A short record of competitions, nominations, and research experiences.</p>
        </header>
        <ol className="achievement-grid">
          {achievements.map((achievement) => (
            <li className="achievement-card" key={`${achievement.year}-${achievement.title}`} data-reveal>
              <MediaFrame asset={achievement.image} label={achievement.year} ratio="compact" />
              <div className="achievement-card-copy">
                <div className="achievement-meta"><span>{achievement.year}</span><span>{achievement.context}</span></div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
                {achievement.evidence ? <a href={achievement.evidence} target="_blank" rel="noreferrer" aria-label={`Evidence for ${achievement.title}`}>Evidence ↗</a> : <span className="achievement-verified">Recorded achievement</span>}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-shell about" id="about" aria-labelledby="about-title" data-reveal>
        <div className="about-main">
          <p className="section-index">04 / About</p>
          <h2 id="about-title">Curiosity is the starting point. Building is how I test it.</h2>
          <p className="about-bio">
            I’m Nguyen Gia Bach, a student at Le Quy Don High School for the Gifted in Da Nang, Vietnam. Physics taught me to ask precise questions; programming gave me a way to turn those questions into tools; robotics made me test every assumption against the physical world. I enjoy building products that help people explore difficult ideas—from deep-space imagery and astronomy simulations to student-led prototypes. I’m now deepening my skills in scientific computing, product engineering, and embedded systems while looking for ambitious STEM teams and problems worth learning from.
          </p>
          <p className="about-note">My favourite projects sit at the intersection: scientifically grounded, technically challenging, and clear enough for someone else to use.</p>
        </div>
        <aside className="education-card">
          <p className="kicker">Education</p>
          <span className="education-mark">LQD</span>
          <h3>Le Quy Don High School for the Gifted</h3>
          <p>Da Nang, Vietnam</p>
          <dl><div><dt>Focus</dt><dd>Physics · STEM</dd></div><div><dt>Interests</dt><dd>Scientific software · Robotics</dd></div></dl>
        </aside>
      </section>

      <section className="section-shell leadership" aria-labelledby="leadership-title" data-reveal>
        <header className="section-heading compact">
          <div><p className="section-index">05 / Leadership</p><h2 id="leadership-title">Engineering is a team sport.</h2></div>
        </header>
        <div className="leadership-grid">
          {leadership.map((item) => <article key={item.number} data-reveal><span>{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}
        </div>
        <div className="credentials">
          <p className="kicker">Programs & credentials</p>
          <ul>{credentials.map(([year, title]) => <li key={title}><span>{year}</span><strong>{title}</strong></li>)}</ul>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title" data-reveal>
        <div>
          <p className="eyebrow">Open channel / 06</p>
          <h2 id="contact-title">Have a problem worth exploring?</h2>
          <p>I’m open to student research, STEM programs, hackathons, and early technology opportunities.</p>
        </div>
        <div className="contact-links">
          <a className="contact-link" href="https://www.linkedin.com/in/nguyen-gia-bach-996333386" target="_blank" rel="noreferrer"><span>01</span><strong>LinkedIn</strong><i>↗</i></a>
          <a className="contact-link" href="https://github.com/nguyengiabachLQDDN" target="_blank" rel="noreferrer"><span>02</span><strong>GitHub</strong><i>↗</i></a>
        </div>
      </section>

      <footer className="site-footer">
        <span>Nguyen Gia Bach © 2026</span><span>Built from first principles in Da Nang.</span><a href="#top">Back to orbit ↑</a>
      </footer>
    </main>
  );
}
