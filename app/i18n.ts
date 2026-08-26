export const navigation = {
  work: 'Work',
  capabilities: 'Capabilities',
  achievements: 'Achievements',
  about: 'About',
  contact: 'Contact',
} as const;

// TODO(profile): Add the final project-working portrait, current grade / expected
// graduation year, a professional email, and a more specific intended field once confirmed.
const heroImageSrc: string | undefined = undefined;

export const homeIntro = {
  eyebrow: 'Student profile',
  name: 'Nguyen Gia Bach',
  role: 'Student engineer · Physics, software & robotics',
  summary: 'I build astronomy tools, scientific software, and robotics prototypes.',
  facts: [
    ['School', 'Le Quy Don High School for the Gifted'],
    ['Location', 'Da Nang, Vietnam'],
    ['Focus', 'Physics · Software · Robotics'],
  ],
  image: {
    src: heroImageSrc,
    alt: 'Nguyen Gia Bach working on a student engineering project',
  },
  imageLabel: 'Project portrait',
  work: 'View projects',
  contact: 'Contact',
  socialLabel: 'Social profiles',
} as const;

interface HomeCopy {
  workIndex: string;
  workTitle: string;
  workDeck: string;
  capabilitiesIndex: string;
  capabilitiesTitle: string;
  capabilitiesDeck: string;
  usedInProjects: string;
  exploringNext: string;
  achievementsIndex: string;
  achievementsTitle: string;
  achievementsDeck: string;
  evidence: string;
  evidenceFor: string;
  recordedAchievement: string;
  aboutIndex: string;
  aboutTitle: string;
  aboutBio: string;
  aboutNote: string;
  education: string;
  school: string;
  schoolLocation: string;
  focus: string;
  focusValue: string;
  interests: string;
  interestsValue: string;
  leadershipIndex: string;
  leadershipTitle: string;
  leadership: Array<{ number: string; title: string; copy: string }>;
  programs: string;
  credentials: Array<[string, string]>;
  contactEyebrow: string;
  contactTitle: string;
  contactDeck: string;
  footerTagline: string;
  backToTop: string;
  projectTechnologies: string;
}

export const homeCopy: HomeCopy = {
  workIndex: '01 / Selected work',
  workTitle: 'Selected projects.',
  workDeck: 'Two selected projects in astronomy software and student-led robotics.',
  capabilitiesIndex: '02 / Capabilities',
  capabilitiesTitle: 'How I turn ideas into working systems.',
  capabilitiesDeck: 'Organised by what I can do—not by a wall of technology logos.',
  usedInProjects: 'Used in projects',
  exploringNext: 'Exploring next',
  achievementsIndex: '03 / Evidence',
  achievementsTitle: 'Achievements built on the work.',
  achievementsDeck: 'A short record of competitions, nominations, and research experiences.',
  evidence: 'Evidence ↗',
  evidenceFor: 'Evidence for',
  recordedAchievement: 'Recorded achievement',
  aboutIndex: '04 / About',
  aboutTitle: 'Curiosity is the starting point. Building is how I test it.',
  aboutBio: 'I’m Nguyen Gia Bach, a student at Le Quy Don High School for the Gifted in Da Nang, Vietnam. Physics taught me to ask precise questions; programming gave me a way to turn those questions into tools; robotics made me test every assumption against the physical world. I enjoy building products that help people explore difficult ideas—from deep-space imagery and astronomy simulations to student-led prototypes. I’m now deepening my skills in scientific computing, product engineering, and embedded systems while looking for ambitious STEM teams and problems worth learning from.',
  aboutNote: 'My favourite projects sit at the intersection: scientifically grounded, technically challenging, and clear enough for someone else to use.',
  education: 'Education',
  school: 'Le Quy Don High School for the Gifted',
  schoolLocation: 'Da Nang, Vietnam',
  focus: 'Focus',
  focusValue: 'Physics · STEM',
  interests: 'Interests',
  interestsValue: 'Scientific software · Robotics',
  leadershipIndex: '05 / Leadership',
  leadershipTitle: 'Engineering is a team sport.',
  leadership: [
    { number: 'L01', title: 'eSight Project Lead', copy: 'Guiding a student engineering project from problem definition through prototyping, testing, and team integration.' },
    { number: 'L02', title: 'PIRL Technical Committee', copy: 'Contributing technical work across three consecutive cohorts of the school physics club — Generations 4, 5, and 6.' },
    { number: 'L03', title: 'Competition Team Lead', copy: 'Coordinating small teams under time pressure for NASA Space Apps, RMIT Tech Camp, and robotics challenges.' },
  ],
  programs: 'Programs & credentials',
  credentials: [['2026', 'Fulbright STEM Mentorship'], ['07.25', 'Google Developer Groups Codelab'], ['08.25', 'Google Developer Groups Vibecoding']],
  contactEyebrow: 'Open channel / 06',
  contactTitle: 'Have a problem worth exploring?',
  contactDeck: 'I’m open to student research, STEM programs, hackathons, and early technology opportunities.',
  footerTagline: 'Built from first principles in Da Nang.',
  backToTop: 'Back to orbit ↑',
  projectTechnologies: 'technologies',
};

interface CaseCopy {
  selectedWork: string;
  role: string;
  when: string;
  mode: string;
  physicalSystems: string;
  digitalProduct: string;
  contextIndex: string;
  problem: string;
  approach: string;
  contributionIndex: string;
  contributionTitle: string;
  decisionsIndex: string;
  decisionsTitle: string;
  galleryIndex: string;
  galleryTitle: string;
  evidenceIndex: string;
  outcome: string;
  lesson: string;
  stack: string;
  nextSystem: string;
  frame: string;
}

export const caseCopy: CaseCopy = {
  selectedWork: 'Selected work', role: 'Role', when: 'When', mode: 'Mode', physicalSystems: 'Physical systems', digitalProduct: 'Digital product',
  contextIndex: '01 / Context', problem: 'The problem', approach: 'Approach', contributionIndex: '02 / Contribution', contributionTitle: 'What I contributed',
  decisionsIndex: '03 / Decisions', decisionsTitle: 'Technical decisions', galleryIndex: '04 / Project gallery', galleryTitle: 'Evidence, interfaces, and process.',
  evidenceIndex: '05 / Evidence', outcome: 'Outcome', lesson: 'What changed in my thinking', stack: 'System stack', nextSystem: 'Next system', frame: 'Frame',
};

export const mediaComingSoon = 'Image coming soon';

export const notFoundCopy = {
  eyebrow: 'Error / 404',
  title: 'Signal lost.',
  message: 'This coordinate does not exist in the current observation map.',
  action: 'Return home',
} as const;

export const metadataCopy = {
  title: 'Nguyen Gia Bach — Student Engineer',
  description: 'Portfolio of Nguyen Gia Bach, a student engineer working across physics, scientific software, astronomy, and robotics.',
  shortDescription: 'Physics · Software · Robotics',
  imageAlt: 'Nguyen Gia Bach — Physics, Software, Robotics',
  personDescription: 'Student engineer working across physics, software, and robotics.',
  school: 'Le Quy Don High School for the Gifted, Da Nang',
} as const;

export function projectPath(slug: string) {
  return `/projects/${slug}`;
}
