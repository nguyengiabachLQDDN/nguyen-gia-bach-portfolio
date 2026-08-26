export type ProjectVariant = 'jwst' | 'astroverse' | 'robotics';

export interface ProjectLink { label: string; href: string; }
export interface ProjectDecision { title: string; description: string; }
export interface MediaAsset { src?: string; alt: string; caption?: string; credit?: string; }

export interface Project {
  number: string;
  slug: string;
  title: string;
  label: string;
  date: string;
  role: string;
  summary: string;
  challenge: string;
  approach: string;
  contributions: string[];
  decisions: ProjectDecision[];
  outcomes: string[];
  lessons: string;
  stack: string[];
  links: ProjectLink[];
  variant: ProjectVariant;
  cover: MediaAsset;
  gallery: MediaAsset[];
}

export interface Achievement {
  year: string;
  title: string;
  context: string;
  description: string;
  evidence?: string;
  image: MediaAsset;
}

export interface SkillGroup {
  code: string;
  title: string;
  summary: string;
  used: string[];
  exploring: string[];
}

interface ProjectBase {
  number: string;
  slug: string;
  variant: ProjectVariant;
  linkHrefs: string[];
  coverSrc?: string;
  gallerySrc: Array<string | undefined>;
}

interface ProjectCopy {
  title: string;
  label: string;
  date: string;
  role: string;
  summary: string;
  challenge: string;
  approach: string;
  contributions: string[];
  decisions: ProjectDecision[];
  outcomes: string[];
  lessons: string;
  stack: string[];
  linkLabels: string[];
  cover: Omit<MediaAsset, 'src'>;
  gallery: Array<Omit<MediaAsset, 'src'>>;
}

type ProjectCopyList = [ProjectCopy, ProjectCopy, ProjectCopy];
type AchievementList = [Achievement, Achievement, Achievement, Achievement, Achievement];
type SkillGroupList = [SkillGroup, SkillGroup, SkillGroup, SkillGroup];

const projectBases: [ProjectBase, ProjectBase, ProjectBase] = [
  {
    number: '01',
    slug: 'jwst-deep-space-explorer',
    variant: 'jwst',
    linkHrefs: [
      'https://github.com/nguyengiabachLQDDN/Final-Backend-JWST-project',
      'https://lqddn.edu.vn/tin-tuc/hoc-sinh-nguyen-gia-bach-xuat-sac-lot-vao-danh-sach-de-cu-toan-cau-tai-cuoc-thi-nasa-space-apps-challenge-2025',
    ],
    gallerySrc: [undefined, undefined],
  },
  {
    number: '02',
    slug: 'astroverse',
    variant: 'astroverse',
    linkHrefs: ['https://astroverse-m8wl.vercel.app/'],
    gallerySrc: [undefined, undefined],
  },
  {
    number: '03',
    slug: 'esight-or-robotics',
    variant: 'robotics',
    linkHrefs: ['https://www.facebook.com/esightproject'],
    gallerySrc: [undefined, undefined],
  },
];

const featuredProjectSlugs = ['astroverse', 'esight-or-robotics'] as const;

const projectCopy: ProjectCopyList = [
  {
    title: 'JWST Deep Space Explorer',
    label: 'NASA Space Apps 2025 · Global Nominee',
    date: 'October 2025',
    role: 'Team Lead & Developer',
    summary: 'An interactive citizen-science platform that makes massive James Webb Space Telescope imagery explorable in an ordinary browser.',
    challenge: 'NASA’s “Embiggen Your Eyes!” challenge asked teams to bring extremely large astronomical images closer to the public. The raw data can reach hundreds of gigabytes—far beyond what most learners can download or inspect comfortably.',
    approach: 'We treated each observation as both scientific data and a navigable place. A Python pipeline prepared the imagery, while a browser-based map interface let people zoom through the details and contribute structured observations.',
    contributions: [
      'Led the team’s scope, priorities, and delivery through a 48-hour hackathon.',
      'Developed the scientific processing workflow with Python and Astropy.',
      'Designed a tiled Leaflet.js viewer for smooth exploration of ultra-large images.',
      'Integrated an AI-assisted labelling workflow to support citizen-science participation.',
    ],
    decisions: [
      { title: 'Tile, don’t download', description: 'Serve only the detail needed at the current zoom level instead of forcing users to load a full-resolution scientific file.' },
      { title: 'Separate science from interface', description: 'Keep data preparation in a Python pipeline and the exploration experience in the browser so each layer stays focused.' },
      { title: 'Make looking participatory', description: 'Turn passive viewing into observation and labelling, creating a path from public curiosity to citizen science.' },
    ],
    outcomes: [
      'Selected among 1,290+ Global Nominees from 11,500+ worldwide submissions.',
      'Completed a working scientific-data experience inside the 48-hour event window.',
      'Recognised by Le Quy Don High School for the Gifted as a notable student achievement.',
    ],
    lessons: 'The strongest technical shortcut was not reducing the science—it was changing how the data reached the browser. Clear architecture made an ambitious idea possible under severe time and connectivity constraints.',
    stack: ['Python', 'Astropy', 'Leaflet.js', 'JavaScript', 'AI-assisted labelling', 'Scientific imaging'],
    linkLabels: ['View source', 'Read evidence'],
    cover: { alt: 'Reserved cover image for the JWST Deep Space Explorer interface.', caption: 'The tiled deep-space image explorer in use.' },
    gallery: [
      { alt: 'Reserved image for the JWST tiled viewer and citizen-science labelling workflow.', caption: 'Browser-based tiled viewing and AI-assisted labelling.' },
      { alt: 'Reserved image for the Python and Astropy scientific image processing workflow.', caption: 'The scientific data pipeline from source imagery to browser-ready tiles.' },
    ],
  },
  {
    title: 'AstroVerse',
    label: 'Astronomy learning platform',
    date: '2026',
    role: 'Product Developer',
    summary: 'An astronomy learning platform for observing the sky, exploring real space data, running experiments, and recording scientific learning.',
    challenge: 'Astronomy resources are often split between passive articles, specialist tools, and disconnected quizzes. The goal was to make exploration, experimentation, and reflection feel like one continuous learning journey.',
    approach: 'AstroVerse organises the experience into five modes: Observe through an interactive sky map, Explore verified astronomy content, Experiment in a habitable-exoplanet lab, Recall through spaced repetition, and Reflect in a private science journal.',
    contributions: [
      'Developed an interactive sky map with time controls, guided journeys, and seven cultural sky views.',
      'Connected NASA APOD and Mars imagery with visible source attribution.',
      'Built an exoplanet laboratory with real-time physical feedback and mission scoring.',
      'Designed spaced-repetition review and a journal that scores scientific methodology rather than right-or-wrong answers.',
    ],
    decisions: [
      { title: 'One learning loop', description: 'Connect observation, explanation, experimentation, recall, and reflection instead of treating them as unrelated pages.' },
      { title: 'Evidence over streaks', description: 'Measure hypotheses, observations, conclusions, and next steps—not just clicks or quiz completion.' },
      { title: 'Private by default', description: 'Keep journals and progress on the learner’s device, allowing practice without requiring an account or server-side profile.' },
    ],
    outcomes: [
      'Shipped a live, multi-module astronomy learning product.',
      'Combined real scientific sources with interactive simulations and active-recall tools.',
      'Created a portfolio flow that turns each learning session into feedback-ready evidence.',
    ],
    lessons: 'A feature becomes more useful when it hands the learner naturally to the next action. The project taught me to design systems around a learning loop, not a checklist of screens.',
    stack: ['React', 'TypeScript', 'Vite', 'NASA data', 'Scientific modelling', 'Vercel'],
    linkLabels: ['Open live site'],
    cover: { alt: 'Reserved cover image for the AstroVerse astronomy learning platform.', caption: 'AstroVerse connecting observation, experimentation, recall, and reflection.' },
    gallery: [
      { alt: 'Reserved image for the AstroVerse interactive sky map.', caption: 'The interactive sky map with guided observation journeys.' },
      { alt: 'Reserved image for the AstroVerse habitable exoplanet laboratory.', caption: 'The exoplanet laboratory with real-time physical feedback.' },
    ],
  },
  {
    title: 'eSight Project',
    label: 'Student robotics project',
    date: 'Ongoing',
    role: 'Project Lead · Robotics Team Lead',
    summary: 'A student-led robotics project that turns physics ideas into working prototypes through iterative testing and team engineering.',
    challenge: 'Physical systems fail in ways software mock-ups do not: sensors drift, mechanisms interact, and every change affects the rest of the system. The work demanded both engineering judgement and a team process that could move quickly.',
    approach: 'Break the system into testable modules, define the behaviour each module must prove, then integrate only after the evidence is clear. Competition constraints made iteration speed and communication as important as the final mechanism.',
    contributions: [
      'Led the eSight student project and coordinated technical direction across the team.',
      'Led a team to Third Prize in the Maze Runner competition organised by FAST, University of Science and Technology – The University of Danang.',
      'Applied physics reasoning to prototype behaviour, testing, and troubleshooting.',
      'Created a repeatable rhythm for dividing work, reviewing failures, and integrating changes.',
    ],
    decisions: [
      { title: 'Test modules first', description: 'Prove one behaviour at a time before integration so a failure has a smaller and more understandable search space.' },
      { title: 'Treat failures as data', description: 'Record what changed, what the system did, and what the next test should isolate rather than making untracked adjustments.' },
      { title: 'Design for the team', description: 'Use clear ownership and interfaces so mechanical, electrical, and software work can progress without blocking one another.' },
    ],
    outcomes: [
      'Third Prize at the FAST Maze Runner competition.',
      'Three consecutive cohorts serving on PIRL Physics Club’s Technical Committee.',
      'A growing engineering practice spanning software, physics, and physical systems.',
    ],
    lessons: 'Robotics made uncertainty visible. Progress came from making smaller claims, testing them quickly, and giving every teammate enough context to make the next decision well.',
    stack: ['Robotics', 'Rapid prototyping', 'Physics', 'System testing', 'Team leadership'],
    linkLabels: ['Visit eSight'],
    cover: { alt: 'Reserved cover image for eSight and student robotics practice.', caption: 'A student-led robotics prototype during integration and testing.' },
    gallery: [
      { alt: 'Reserved image for robotics module testing and prototyping.', caption: 'Testing one physical behaviour at a time before integration.' },
      { alt: 'Reserved image for the Maze Runner robotics team and competition result.', caption: 'Team engineering under competition constraints.' },
    ],
  },
];

const achievements: AchievementList = [
  { year: '2026', title: 'Second Prize · RMIT Tech Camp', context: 'Team Lead', description: 'Led a team from problem framing to a competition-ready technical solution.', image: { alt: 'Reserved image for the RMIT Tech Camp Second Prize achievement.' } },
  { year: '2025', title: 'Global Nominee · NASA Space Apps Challenge', context: 'JWST Deep Space Explorer', description: 'Selected among 1,290+ Global Nominees from more than 11,500 worldwide projects.', evidence: 'https://lqddn.edu.vn/tin-tuc/hoc-sinh-nguyen-gia-bach-xuat-sac-lot-vao-danh-sach-de-cu-toan-cau-tai-cuoc-thi-nasa-space-apps-challenge-2025', image: { alt: 'Reserved image for the NASA Space Apps Global Nominee recognition.' } },
  { year: '2024', title: 'Second Prize · Da Nang City Physics Competition', context: 'Physics', description: 'Recognised at city level in the Excellent Student Competition in Physics.', image: { alt: 'Reserved image for the Da Nang City Physics Competition Second Prize.' } },
  { year: 'STEM', title: 'Third Prize · FAST Maze Runner', context: 'Robotics Team Lead', description: 'Led the team in a robotics challenge organised by FAST, University of Science and Technology – UD.', image: { alt: 'Reserved image for the FAST Maze Runner Third Prize.' } },
  { year: '25–26', title: 'Third Prize · School Science & Engineering Fair', context: 'Research & Engineering', description: 'Developed and presented a technical project through the school-level research process.', image: { alt: 'Reserved image for the School Science and Engineering Fair Third Prize.' } },
];

const skillGroups: SkillGroupList = [
  { code: 'A01', title: 'Software engineering', summary: 'Building clear, interactive products from first interface to deployment.', used: ['Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'React', 'Vite'], exploring: ['Deeper testing', 'System design'] },
  { code: 'A02', title: 'Scientific computing & data', summary: 'Turning scientific sources and models into tools people can question and explore.', used: ['Astropy', 'NASA data', 'Leaflet.js', 'APIs', 'Scientific imaging'], exploring: ['Scientific ML', 'Data visualisation'] },
  { code: 'A03', title: 'Robotics & prototyping', summary: 'Connecting physical reasoning, iterative testing, and reliable system behaviour.', used: ['Robotics', 'Rapid prototyping', 'System testing', 'Team integration'], exploring: ['Embedded systems', 'Computer vision'] },
  { code: 'A04', title: 'Tools & delivery', summary: 'Making work reproducible, reviewable, and available beyond my own laptop.', used: ['Git', 'GitHub', 'Vercel', 'Technical documentation'], exploring: ['CI workflows', 'Open-source practice'] },
];

export function getProjects(): Project[] {
  return projectBases.map((base, index) => {
    const copy = projectCopy[index];
    return {
      ...copy,
      number: base.number,
      slug: base.slug,
      variant: base.variant,
      links: base.linkHrefs.map((href, linkIndex) => ({ href, label: copy.linkLabels[linkIndex] })),
      cover: { ...copy.cover, src: base.coverSrc },
      gallery: copy.gallery.map((asset, galleryIndex) => ({ ...asset, src: base.gallerySrc[galleryIndex] })),
    };
  });
}

export function getFeaturedProjects(): Project[] {
  const projects = getProjects();
  return featuredProjectSlugs.map((slug) => {
    const project = projects.find((item) => item.slug === slug);
    if (!project) throw new Error(`Missing featured project: ${slug}`);
    return project;
  });
}

export function getProject(slug: string): Project | undefined {
  return getProjects().find((project) => project.slug === slug);
}

export function getAchievements(): Achievement[] {
  return achievements;
}

export function getSkillGroups(): SkillGroup[] {
  return skillGroups;
}

export const projectSlugs = projectBases.map((project) => project.slug);
