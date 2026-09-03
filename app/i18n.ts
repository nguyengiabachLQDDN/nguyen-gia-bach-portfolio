export const navigation = {
  work: 'Work',
  capabilities: 'Capabilities',
  achievements: 'Achievements',
  programs: 'Programs',
  community: 'Community',
} as const;

// TODO(profile): Add the current grade / expected graduation year and a more
// specific intended field once confirmed.
const heroImageSrc = '/images/profile/nguyen-gia-bach-formal.webp';

export const homeIntro = {
  eyebrow: 'Student profile',
  name: 'Nguyen Gia Bach',
  role: 'Engineering student, experienced in Physics and robotics',
  facts: [
    ['School', 'Le Quy Don High School for the Gifted'],
    ['Location', 'Da Nang, Vietnam'],
    ['Focus', 'Aerospace Engineering · Electrical Engineering'],
  ],
  image: {
    src: heroImageSrc,
    alt: 'Portrait of Nguyen Gia Bach wearing a dark suit and blue tie against a blue background.',
  },
  imageLabel: 'Project portrait',
  work: 'View projects',
  socialLabel: 'Social profiles',
} as const;

export interface ProgramItem {
  date: string;
  title: string;
  organization: string;
  summary: string;
  credential?: {
    src: string;
    alt: string;
  };
}

export interface CommunityItem {
  date: string;
  title: string;
  summary: string;
  href: string;
  image?: {
    src: string;
    alt: string;
  };
}

interface HomeCopy {
  workIndex: string;
  workTitle: string;
  workDeck: string;
  capabilitiesIndex: string;
  capabilitiesTitle: string;
  currentlyLearning: string;
  achievementsIndex: string;
  achievementsTitle: string;
  achievementsDeck: string;
  evidence: string;
  evidenceFor: string;
  recordedAchievement: string;
  programsIndex: string;
  programsTitle: string;
  programsDeck: string;
  educationLabel: string;
  educationLine: string;
  programItems: ProgramItem[];
  viewCredential: string;
  communityIndex: string;
  communityTitle: string;
  communityEmpty: string;
  communityItems: CommunityItem[];
  viewPost: string;
  backToTop: string;
  projectTechnologies: string;
}

export const homeCopy: HomeCopy = {
  workIndex: '01 / Selected work',
  workTitle: 'Projects.',
  workDeck: 'Selected work in astronomy software and student-led robotics.',
  capabilitiesIndex: '03 / Capabilities',
  capabilitiesTitle: 'Technical toolkit.',
  currentlyLearning: 'Currently learning',
  achievementsIndex: '02 / Evidence',
  achievementsTitle: 'Achievements built on the work.',
  achievementsDeck: 'Selected competition results, academic recognition, and evidence behind the work.',
  evidence: 'Evidence ↗',
  evidenceFor: 'Evidence for',
  recordedAchievement: 'Recorded achievement',
  programsIndex: '04 / Programs',
  programsTitle: 'Academic programs & credentials.',
  programsDeck: 'Selected learning programs, technical communities, and academic contributions.',
  educationLabel: 'Education',
  educationLine: 'Le Quy Don High School for the Gifted · Da Nang, Vietnam',
  programItems: [
    {
      date: '2026',
      title: 'Fulbright STEM Mentorship',
      organization: 'STEM mentorship program',
      summary: 'Participated in a mentorship program focused on STEM learning and academic development.',
    },
    {
      date: '2025',
      title: 'Crack the Vibe Code',
      organization: 'GDG DevFest Mien Trung',
      summary: 'Completed a hands-on codelab session on AI-assisted application development.',
      credential: {
        src: '/images/programs/devfest-crack-the-vibe-code.webp',
        alt: 'Certificate of Appreciation for completing the Crack the Vibe Code workshop at GDG DevFest Mien Trung 2025.',
      },
    },
    {
      date: '2025',
      title: 'Google I/O Extended Codelab',
      organization: 'GDG MienTrung',
      summary: 'Completed a technical codelab during Google I/O Extended MienTrung 2025.',
      credential: {
        src: '/images/programs/google-io-extended-codelab.webp',
        alt: 'Certificate of Appreciation for completing the Google I/O Extended MienTrung 2025 codelab.',
      },
    },
    {
      date: 'Generations 4–6',
      title: 'PIRL Technical Committee',
      organization: 'PIRL Physics Club',
      summary: 'Contributed technical work across three consecutive cohorts of the school physics club.',
      credential: {
        src: '/images/programs/pirl-technical-committee.webp',
        alt: 'Certificate of Contribution for serving on the PIRL Physics Club academic committee.',
      },
    },
    {
      date: 'Participation',
      title: 'PIRL Glider Physics Tournament',
      organization: 'PIRL Physics Club',
      summary: 'Took part in a student physics tournament centred on glider design and experimentation.',
      credential: {
        src: '/images/programs/pirl-glider-tournament.webp',
        alt: 'Certificate of Attendance for the PIRL Glider Physics Tournament.',
      },
    },
  ],
  viewCredential: 'View credential ↗',
  communityIndex: '05 / Community',
  communityTitle: 'Community & volunteering.',
  communityEmpty: 'Selected community work and reflections will be added here with source links.',
  communityItems: [],
  viewPost: 'View post ↗',
  backToTop: 'Back to top ↑',
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
  title: 'Nguyen Gia Bach — Engineering Student',
  description: 'Portfolio of Nguyen Gia Bach, an engineering student experienced in physics and robotics, with interests in aerospace and electrical engineering.',
  shortDescription: 'Aerospace Engineering · Electrical Engineering',
  imageAlt: 'Nguyen Gia Bach — Aerospace and Electrical Engineering',
  personDescription: 'Engineering student experienced in physics and robotics, with interests in aerospace and electrical engineering.',
  school: 'Le Quy Don High School for the Gifted, Da Nang',
} as const;

export function projectPath(slug: string) {
  return `/projects/${slug}`;
}
