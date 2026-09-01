export type ProjectVariant = 'jwst' | 'astroverse' | 'robotics';

export interface ProjectLink {
  label: string;
  href: string;
  cardRole?: 'primary' | 'secondary';
}
export interface ProjectDecision { title: string; description: string; }
export interface MediaAsset {
  src?: string;
  alt: string;
  caption?: string;
  credit?: string;
  objectPosition?: string;
}

export interface Project {
  number: string;
  slug: string;
  title: string;
  label: string;
  status: string;
  date: string;
  role: string;
  summary: string;
  featuredHighlights: [string, string, string];
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
  linkTargets: Array<Omit<ProjectLink, 'label'>>;
  coverSrc?: string;
  gallerySrc: Array<string | undefined>;
}

interface ProjectCopy {
  title: string;
  label: string;
  status: string;
  date: string;
  role: string;
  summary: string;
  featuredHighlights: [string, string, string];
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
    linkTargets: [
      { href: 'https://finale-frontend-jwst-project.vercel.app', cardRole: 'primary' },
      { href: 'https://huggingface.co/spaces/gbachnguyen/jwst-backend-processor/tree/main', cardRole: 'secondary' },
      { href: 'https://github.com/nguyengiabachLQDDN/finale-frontend-jwst-project', cardRole: 'secondary' },
      { href: 'https://lqddn.edu.vn/tin-tuc/hoc-sinh-nguyen-gia-bach-xuat-sac-lot-vao-danh-sach-de-cu-toan-cau-tai-cuoc-thi-nasa-space-apps-challenge-2025' },
    ],
    coverSrc: '/images/projects/jwst/overview.webp',
    gallerySrc: [undefined, undefined],
  },
  {
    number: '02',
    slug: 'astroverse',
    variant: 'astroverse',
    linkTargets: [{ href: 'https://astroverse-m8wl.vercel.app/', cardRole: 'primary' }],
    coverSrc: '/images/projects/astroverse/overview.webp',
    gallerySrc: [
      '/images/projects/astroverse/sky-map.webp',
      '/images/projects/astroverse/encyclopedia.webp',
      '/images/projects/astroverse/space-news.webp',
      '/images/projects/astroverse/exoplanet-lab.webp',
      '/images/projects/astroverse/learning-portfolio.webp',
    ],
  },
  {
    number: '03',
    slug: 'esight-or-robotics',
    variant: 'robotics',
    linkTargets: [{ href: 'https://www.facebook.com/esightproject', cardRole: 'primary' }],
    gallerySrc: [undefined, undefined],
  },
];

const featuredProjectSlugs = ['jwst-deep-space-explorer', 'astroverse', 'esight-or-robotics'] as const;

const projectCopy: ProjectCopyList = [
  {
    title: 'JWST Space Explorer',
    label: 'NASA Space Apps 2025 · Global Nominee',
    status: 'Live',
    date: 'October 2025',
    role: 'Team Lead · Developer',
    summary: 'A full-stack explorer that retrieves public JWST observations from NASA MAST, processes FITS data into Deep Zoom imagery, and lets users inspect the results with an AI assistant.',
    featuredHighlights: [
      'Search astronomical targets and retrieve public JWST observations from NASA MAST.',
      'Process FITS imagery with Astroquery, Astropy, and pyvips into browser-ready Deep Zoom tiles.',
      'Inspect large observations with OpenSeadragon and a Gemini-powered assistant.',
    ],
    challenge: 'NASA’s “Embiggen Your Eyes!” challenge asked teams to make extremely large astronomical images accessible to the public. Raw FITS observations are difficult to retrieve, process, and inspect in an ordinary browser without specialist software.',
    approach: 'The application separates a React exploration interface from a FastAPI processing service. A user searches for a target, the backend retrieves public observations from NASA MAST, converts FITS data into Deep Zoom tiles, and the browser presents the result through OpenSeadragon with an AI assistant for guided inspection.',
    contributions: [
      'Led the team’s scope, priorities, and delivery through a 48-hour hackathon.',
      'Developed a Python and FastAPI workflow for querying NASA MAST and processing FITS observations.',
      'Prepared browser-ready Deep Zoom tiles with Astroquery, Astropy, and pyvips.',
      'Integrated OpenSeadragon for smooth inspection of large images and Gemini for guided analysis.',
    ],
    decisions: [
      { title: 'Tile, don’t download', description: 'Convert large FITS observations into Deep Zoom tiles so the browser loads only the detail required at the current zoom level.' },
      { title: 'Separate processing from viewing', description: 'Keep NASA retrieval and scientific image processing in FastAPI while React and OpenSeadragon remain focused on exploration.' },
      { title: 'Assist the investigation', description: 'Use Gemini as a contextual assistant beside the scientific viewer instead of replacing the underlying observation data.' },
    ],
    outcomes: [
      'Selected among 1,290+ Global Nominees from 11,500+ worldwide submissions.',
      'Completed a working scientific-data experience inside the 48-hour event window.',
      'Recognised by Le Quy Don High School for the Gifted as a notable student achievement.',
    ],
    lessons: 'The strongest technical shortcut was not reducing the science—it was changing how the data reached the browser. Clear architecture made an ambitious idea possible under severe time and connectivity constraints.',
    stack: ['React', 'Python', 'TypeScript', 'FastAPI', 'NASA MAST', 'Astroquery', 'Astropy', 'pyvips', 'Deep Zoom', 'OpenSeadragon', 'Gemini'],
    linkLabels: ['Open live app', 'Backend', 'Source', 'Read evidence'],
    cover: {
      alt: 'JWST Space Explorer landing page with a deep-space background and astronomical target search.',
      caption: 'Search a target before retrieving and processing public JWST observations.',
      objectPosition: 'center 48%',
    },
    gallery: [
      { alt: 'Reserved image for the JWST OpenSeadragon viewer and Gemini assistant.', caption: 'Deep Zoom exploration and AI-assisted inspection in the browser.' },
      { alt: 'Reserved image for the NASA MAST, FITS, and FastAPI processing workflow.', caption: 'The processing path from public observation to browser-ready tiles.' },
    ],
  },
  {
    title: 'AstroVerse',
    label: 'Astronomy learning platform',
    status: 'Live',
    date: '2026',
    role: 'Product Developer',
    summary: 'A browser-based astronomy learning environment that connects sky observation, verified space data, physical modelling, active recall, and scientific reflection in one continuous learning loop.',
    featuredHighlights: [
      'Explore an interactive sky map with time controls, cultural sky views, narrated journeys, and observation tools.',
      'Browse astronomy objects, space news, launch schedules, NASA imagery, and near-Earth object data with visible sources.',
      'Test exoplanet habitability, review concepts through spaced repetition, and record evidence in a private learning portfolio.',
    ],
    challenge: 'Astronomy resources are often split between passive articles, specialist tools, and disconnected quizzes. The goal was to make exploration, experimentation, and reflection feel like one continuous learning journey.',
    approach: 'AstroVerse organises the experience into five modes: Observe through an interactive sky map, Explore verified astronomy content, Experiment in a habitable-exoplanet lab, Recall through spaced repetition, and Reflect in a private science journal.',
    contributions: [
      'Developed an interactive sky map with time controls, guided journeys, and seven cultural sky views.',
      'Connected a searchable astronomy encyclopedia, space news, launch schedules, and NASA data with visible source attribution.',
      'Built an exoplanet laboratory with real-time physical feedback and mission scoring.',
      'Designed spaced-repetition review and a private learning portfolio that records evidence and scientific methodology.',
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
    cover: {
      alt: 'AstroVerse homepage introducing the astronomy learning environment with an illustrated planet and night-sky background.',
      caption: 'Product overview — a digital observatory for exploring the sky and recording scientific learning.',
      objectPosition: 'center 48%',
    },
    gallery: [
      {
        alt: 'AstroVerse interactive sky map showing constellations, observation controls, cultural views, and guided journeys.',
        caption: 'Interactive Sky Map — time controls, cultural sky views, narrated journeys, and observation tools.',
        objectPosition: 'center 51%',
      },
      {
        alt: 'AstroVerse astronomy encyclopedia with search, object filters, and celestial-body reference cards.',
        caption: 'Astronomy Encyclopedia — searchable, filterable reference content for celestial objects.',
        objectPosition: 'center 44%',
      },
      {
        alt: 'AstroVerse observatory and news page showing source status, space news search, and a SpaceX launch schedule.',
        caption: 'Space News & Data — source-aware news, launch schedules, and NASA near-Earth object data.',
        objectPosition: 'center 42%',
      },
      {
        alt: 'AstroVerse habitable exoplanet laboratory with experimental controls and a real-time physical model.',
        caption: 'Exoplanet Laboratory — test habitability hypotheses with a responsive physical model.',
        objectPosition: 'center 47%',
      },
      {
        alt: 'AstroVerse learning portfolio with observation progress, methodology scores, and a private science journal.',
        caption: 'Learning Portfolio — private evidence, methodology feedback, active recall, and science journaling.',
        objectPosition: 'center 45%',
      },
    ],
  },
  {
    title: 'eSight Project',
    label: 'Student robotics project',
    status: 'Ongoing',
    date: 'Ongoing',
    role: 'Project Lead · Robotics Team Lead',
    summary: 'A student-led robotics project that turns physics ideas into working prototypes through iterative testing and team engineering.',
    featuredHighlights: [
      'Module-based prototyping that isolates one behaviour at a time.',
      'Physics-driven testing, troubleshooting, and system integration.',
      'Student-team coordination from problem definition through trials.',
    ],
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
  { year: '2025', title: 'Global Nominee · NASA Space Apps Challenge', context: 'JWST Space Explorer', description: 'Selected among 1,290+ Global Nominees from more than 11,500 worldwide projects.', evidence: 'https://lqddn.edu.vn/tin-tuc/hoc-sinh-nguyen-gia-bach-xuat-sac-lot-vao-danh-sach-de-cu-toan-cau-tai-cuoc-thi-nasa-space-apps-challenge-2025', image: { alt: 'Reserved image for the NASA Space Apps Global Nominee recognition.' } },
  { year: '2024', title: 'Second Prize · Da Nang City Physics Competition', context: 'Physics', description: 'Recognised at city level in the Excellent Student Competition in Physics.', image: { alt: 'Reserved image for the Da Nang City Physics Competition Second Prize.' } },
  { year: 'STEM', title: 'Third Prize · FAST Maze Runner', context: 'Robotics Team Lead', description: 'Led the team in a robotics challenge organised by FAST, University of Science and Technology – UD.', image: { alt: 'Reserved image for the FAST Maze Runner Third Prize.' } },
  { year: '25–26', title: 'Third Prize · School Science & Engineering Fair', context: 'Research & Engineering', description: 'Developed and presented a technical project through the school-level research process.', image: { alt: 'Reserved image for the School Science and Engineering Fair Third Prize.' } },
];

const skillGroups: SkillGroupList = [
  { code: 'A01', title: 'Software engineering', summary: 'Building clear, interactive products from first interface to deployment.', used: ['Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'React', 'Vite'], exploring: ['Deeper testing', 'System design'] },
  { code: 'A02', title: 'Scientific computing & data', summary: 'Turning scientific sources and models into tools people can question and explore.', used: ['Astropy', 'NASA data', 'OpenSeadragon', 'APIs', 'Scientific imaging'], exploring: ['Scientific ML', 'Data visualisation'] },
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
      links: base.linkTargets.map((target, linkIndex) => ({ ...target, label: copy.linkLabels[linkIndex] })),
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
