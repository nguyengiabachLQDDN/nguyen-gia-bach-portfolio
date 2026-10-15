export const navigation = {
  work: 'Work',
  experience: 'Experience',
  profile: 'Profile',
  contact: 'Contact',
} as const;

// TODO(profile): Add the current grade / expected graduation year and a more
// specific intended field once confirmed.
const heroImageSrc = '/images/profile/nguyen-gia-bach-formal.webp';

export const homeIntro = {
  eyebrow: 'Student profile',
  name: 'Nguyen Gia Bach',
  role: 'Engineering student, experienced in Physics and robotics',
  introduction: 'I’m an engineering-oriented physics student interested in using engineering and computation to understand and build real-world systems. My work spans robotics, coding, and practical experiments, with a focus on solving real-life problems through a scientific mindset.',
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
  role: string;
  summary: string;
  href: string;
  image?: {
    src: string;
    alt: string;
    objectPosition?: string;
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
      date: '16 Aug 2026',
      title: 'Build with Google · AI Riser Vietnam',
      organization: 'GDG Cloud Da Nang',
      summary: 'Participated as an attendee in Build with Google – AI Riser Vietnam, a Google AI community program in Da Nang.',
      credential: {
        src: '/images/programs/build-with-google-ai-riser-vietnam.webp',
        alt: 'Certificate of Appreciation awarded to Nguyen Gia Bach as an attendee at Build with Google – AI Riser Vietnam on 16 August 2026.',
      },
    },
    {
      date: 'June 2026',
      title: 'Fulbright STEM Mentorship',
      organization: 'Fulbright Vietnam · U.S. Embassy Hanoi',
      summary: 'Participated as a mentee in the Fulbright Vietnam 2026 STEM Mentorship Program.',
      credential: {
        src: '/images/programs/fulbright-stem-mentorship.webp',
        alt: 'Certificate of Participation awarded to Nguyen Gia Bach as a mentee in the Fulbright Vietnam 2026 STEM Mentorship Program.',
      },
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
  communityItems: [
    {
      date: '04 Feb 2026',
      title: 'Nguyet Du Charity Campaign',
      role: 'Financial Manager',
      summary: 'Managed the budget and transparent fund allocation for a class bake sale that raised VND 4.2 million and funded 42 care packages for revolutionary veterans in Da Nang.',
      href: 'https://www.linkedin.com/feed/update/urn:li:activity:7453057296861102080/',
      image: {
        src: '/images/community/nguyet-du-charity-campaign.webp',
        alt: 'Nguyen Gia Bach and classmates visiting the Center for Nurturing People with Meritorious Services to the Revolution in Da Nang.',
        objectPosition: 'left center',
      },
    },
    {
      date: '16 Feb 2025',
      title: 'Son Tra Voluntary Blood Donation Program',
      role: 'Participant',
      summary: 'Participated in a Son Tra District voluntary blood donation program and contributed to its on-site community effort.',
      href: 'https://www.linkedin.com/feed/update/urn:li:activity:7405794459935895552/',
      image: {
        src: '/images/community/son-tra-blood-donation.webp',
        alt: 'Volunteers supporting the Son Tra District voluntary blood donation program.',
        objectPosition: 'center',
      },
    },
  ],
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
  eyebrow: '404 / Page not found',
  title: 'Nothing at this address.',
  message: 'The page may have moved, or the address may be incomplete.',
  action: 'Return to portfolio',
} as const;

export const metadataCopy = {
  title: 'Nguyen Gia Bach — Engineering, Physics & Computing',
  description: 'Engineering portfolio of Nguyen Gia Bach, featuring assistive robotics, scientific computing, astronomy software, and supervised engineering experience.',
  shortDescription: 'Engineering · Physics · Computing',
  imageAlt: 'Nguyen Gia Bach — Engineering, Physics and Computing portfolio',
  personDescription: 'Engineering-oriented physics student building physical and computational systems through sensing, robotics, and scientific computing.',
  school: 'Le Quy Don High School for the Gifted, Da Nang',
} as const;

export function projectPath(slug: string) {
  return `/projects/${slug}`;
}
