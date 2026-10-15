import Image from 'next/image';
import Link from 'next/link';
import {
  getAdditionalRecognitionItems,
  getCapabilityGroups,
  getEngineeringExperience,
  getFlagshipProject,
  getLeadershipActivities,
  getRecognitionItems,
  getSelectedEngineeringWork,
} from '../content';
import { homeCopy, homeIntro } from '../i18n';
import EducationPrograms from './EducationPrograms';
import EngineeringProfile from './EngineeringProfile';
import ExperienceCaseStudy from './ExperienceCaseStudy';
import FlagshipProject from './FlagshipProject';
import LeadershipList from './LeadershipList';
import RecognitionList from './RecognitionList';
import RevealController from './RevealController';
import SelectedEngineeringWork from './SelectedEngineeringWork';
import SiteHeader from './SiteHeader';

const proofPoints = [
  { label: 'NASA Space Apps', value: 'Global Nominee (Top 10%)', href: '#honors' },
  { label: 'RMIT Tech Camp', value: 'National Second Place', href: '#honors' },
  { label: 'eSight Cane', value: 'Assistive hardware prototype', href: '#work' },
  { label: 'Engineering internship', value: 'D&D · ENSURE Da Nang', href: '#experience' },
] as const;

export default function HomePage() {
  const flagship = getFlagshipProject();
  const projects = getSelectedEngineeringWork();
  const experience = getEngineeringExperience();
  const recognition = getRecognitionItems();
  const additionalRecognition = getAdditionalRecognitionItems();
  const capabilities = getCapabilityGroups();
  const leadership = getLeadershipActivities();

  return (
    <main id="top">
      <SiteHeader home />
      <RevealController />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy hero-enter">
          <p className="eyebrow">Engineering portfolio · Da Nang, Vietnam</p>
          <h1 id="hero-title">Nguyen Gia Bach</h1>
          <p className="hero-discipline">Engineering <span>·</span> Physics <span>·</span> Computing</p>
          <p className="hero-statement">Building physical and computational systems through sensing, robotics, and scientific computing.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#honors">Academic Honors <span>↓</span></Link>
            <Link className="button button-secondary" href="#work">Explore Projects <span>↓</span></Link>
            <a className="text-link" href="https://github.com/nguyengiabachLQDDN" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            <a className="text-link" href="https://www.linkedin.com/in/nguyengiabach/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          </div>
        </div>

        <aside className="hero-profile hero-orbit-enter" aria-label="Student profile">
          <div className="hero-portrait">
            <Image src={homeIntro.image.src} alt={homeIntro.image.alt} fill preload sizes="(max-width: 760px) 132px, 220px" />
          </div>
          <dl>
            <div><dt>School</dt><dd>Le Quy Don High School for the Gifted</dd></div>
            <div><dt>Direction</dt><dd>Aerospace & electrical engineering</dd></div>
          </dl>
        </aside>

        <nav className="proof-strip" aria-label="Portfolio highlights">
          {proofPoints.map((item, index) => (
            <a href={item.href} key={item.label}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item.label}</strong>
              <small>{item.value}</small>
            </a>
          ))}
        </nav>
      </section>

      {/* 01. Academic Honors & Awards */}
      <RecognitionList items={recognition} additionalItems={additionalRecognition} />

      {/* 02. Featured Engineering Projects */}
      <FlagshipProject project={flagship} />
      <SelectedEngineeringWork projects={projects} />

      {/* 03. Leadership & Extracurricular Activities */}
      <LeadershipList items={leadership} />

      {/* 04. Engineering Experience, Capabilities & Education */}
      <ExperienceCaseStudy experience={experience} />
      <EngineeringProfile groups={capabilities} />
      <EducationPrograms education={homeCopy.educationLine} programs={homeCopy.programItems} />

      <footer className="site-footer" id="contact">
        <div className="footer-intro"><span>Contact</span><strong>Let’s discuss engineering, research, or a technical collaboration.</strong></div>
        <a href="mailto:gbachnguyen@gmail.com"><span>Email</span><strong>gbachnguyen@gmail.com</strong></a>
        <a href="tel:+84795551811"><span>Phone</span><strong>0795 551 811</strong></a>
        <div className="footer-social">
          <a href="https://github.com/nguyengiabachLQDDN" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/nguyengiabach/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://www.facebook.com/gbachnguyen/" target="_blank" rel="noreferrer">Facebook ↗</a>
        </div>
        <a className="footer-back" href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
