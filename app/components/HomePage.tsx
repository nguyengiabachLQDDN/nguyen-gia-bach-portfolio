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

      {/* 00. Hero Engineering Identity Card */}
      <section className="section hero-section" aria-labelledby="hero-title">
        <div className="hero-identity-card">
          <div className="hero-identity-main">
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

            <aside className="hero-profile-card hero-orbit-enter" aria-label="Student profile">
              <div className="hero-portrait-frame">
                <Image src={homeIntro.image.src} alt={homeIntro.image.alt} fill preload sizes="(max-width: 760px) 140px, 180px" />
              </div>
              <dl className="hero-profile-meta">
                <div><dt>School</dt><dd>Le Quy Don High School for the Gifted</dd></div>
                <div><dt>Direction</dt><dd>Aerospace & electrical engineering</dd></div>
              </dl>
            </aside>
          </div>

          <nav className="hero-proof-strip" aria-label="Portfolio highlights">
            {proofPoints.map((item, index) => (
              <a href={item.href} key={item.label}>
                <span>0{index + 1}</span>
                <strong>{item.label}</strong>
                <small>{item.value}</small>
              </a>
            ))}
          </nav>
        </div>
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

      {/* 07. Contact & Collaboration Card */}
      <footer className="section footer-section" id="contact">
        <div className="contact-compact-card">
          <div className="contact-header">
            <span className="contact-index">07 / Contact & Collaboration</span>
            <h3 className="contact-title">Let’s discuss engineering, research, or a technical collaboration.</h3>
            <p className="contact-desc">Open for research partnerships, technical internships, and aerospace/robotics initiatives.</p>
          </div>
          <div className="contact-channels-grid">
            <a className="contact-channel-item" href="mailto:gbachnguyen@gmail.com">
              <span className="channel-label">Email</span>
              <strong className="channel-value">gbachnguyen@gmail.com</strong>
              <span className="channel-arrow">↗</span>
            </a>
            <a className="contact-channel-item" href="tel:+84795551811">
              <span className="channel-label">Phone</span>
              <strong className="channel-value">0795 551 811</strong>
              <span className="channel-arrow">↗</span>
            </a>
            <a className="contact-channel-item" href="https://github.com/nguyengiabachLQDDN" target="_blank" rel="noreferrer">
              <span className="channel-label">GitHub</span>
              <strong className="channel-value">nguyengiabachLQDDN</strong>
              <span className="channel-arrow">↗</span>
            </a>
            <a className="contact-channel-item" href="https://www.linkedin.com/in/nguyengiabach/" target="_blank" rel="noreferrer">
              <span className="channel-label">LinkedIn</span>
              <strong className="channel-value">nguyengiabach</strong>
              <span className="channel-arrow">↗</span>
            </a>
            <a className="contact-channel-item" href="https://www.facebook.com/gbachnguyen/" target="_blank" rel="noreferrer">
              <span className="channel-label">Facebook</span>
              <strong className="channel-value">gbachnguyen</strong>
              <span className="channel-arrow">↗</span>
            </a>
          </div>
          <div className="contact-card-footer">
            <span className="contact-status-indicator"><span className="status-dot"></span> Based in Da Nang, Vietnam · Available worldwide</span>
            <a className="footer-back" href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
