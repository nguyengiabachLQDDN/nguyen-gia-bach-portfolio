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
  presentation?: 'standard' | 'press-profile';
  meta?: string;
  objectPosition?: string;
  objectFit?: 'cover' | 'contain';
  sourceHref?: string;
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
  id: string;
  year: string;
  title: string;
  context: string;
  description: string;
  evidence?: string;
  evidenceLabel?: string;
  priority: 'primary' | 'supporting';
  media: [MediaAsset, ...MediaAsset[]];
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
      { href: 'https://www.spaceappschallenge.org/2025/awards/' },
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
    coverSrc: '/images/projects/esight/buzzer-alert-system.webp',
    gallerySrc: [
      '/images/projects/esight/prototype-to-product.webp',
      '/images/projects/esight/iteration-and-award.webp',
      '/images/projects/esight/signal-pipeline.webp',
      '/images/projects/esight/computer-vision.webp',
      '/images/projects/esight/arduino-controller.webp',
    ],
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
    label: 'Assistive technology · Smart cane',
    status: 'Ongoing',
    date: 'Ongoing',
    role: 'Project Lead',
    summary: 'A student-led smart cane using ultrasonic sensing, computer vision, and graduated audio feedback to support safer navigation for people with visual impairments.',
    featuredHighlights: [
      'Combines ultrasonic sensing and computer vision to detect nearby obstacles.',
      'Translates distance and risk into graduated buzzer patterns, from slow alerts to continuous warnings.',
      'Developed through repeated prototyping, testing, and redesign; awarded Third Prize at the school Science & Engineering Competition.',
    ],
    challenge: 'For people with visual impairments, navigating an unfamiliar space means detecting obstacles early without adding confusing or intrusive feedback. A useful smart cane must sense the environment reliably and translate changing distance into signals the user can understand immediately.',
    approach: 'eSight combines ultrasonic sensing and computer vision with an Arduino-based controller. Sensor data is interpreted as levels of risk, then communicated through graduated buzzer patterns: silence in a safe path, slow alerts at distance, faster pulses as an obstacle approaches, and a continuous warning in the danger zone.',
    contributions: [
      'Led the project from problem framing through prototyping, testing, and presentation.',
      'Coordinated the integration of sensing, Arduino control logic, and user feedback.',
      'Applied physics reasoning to translate distance measurements into graduated warning behaviour.',
      'Documented the engineering process and presented the working smart cane at the school Science & Engineering Competition.',
    ],
    decisions: [
      { title: 'Layer the warning', description: 'Use graduated audio patterns instead of a single alarm so urgency increases with proximity.' },
      { title: 'Combine sensing methods', description: 'Pair ultrasonic distance sensing with computer vision to extend awareness beyond one source of environmental data.' },
      { title: 'Design around the user', description: 'Keep the system quiet in safe conditions and make alerts clear without drawing unnecessary attention.' },
    ],
    outcomes: [
      'Built and demonstrated a working student-designed smart cane.',
      'Awarded Third Prize at the Le Quy Don High School for the Gifted Science & Engineering Competition.',
      'Created an assistive-technology platform that can continue through further testing and refinement.',
    ],
    lessons: 'Assistive technology is strongest when every technical choice begins with the user. eSight taught me to connect sensing, physical behaviour, and feedback into one understandable system—and to treat every prototype as evidence for the next iteration.',
    stack: ['Arduino', 'Computer vision', 'Ultrasonic sensing', 'Buzzer feedback', 'Embedded systems', 'Assistive technology'],
    linkLabels: ['Visit eSight on Facebook'],
    cover: {
      alt: 'eSight smart cane graphic illustrating graduated buzzer and vibration feedback.',
      caption: 'Graduated audio feedback communicates obstacle distance without overwhelming the user.',
      credit: 'eSight Project / Facebook',
      objectPosition: 'center 50%',
      objectFit: 'cover',
    },
    gallery: [
      {
        alt: 'eSight project journey showing the smart cane demonstration and hands-on electronics prototyping.',
        caption: 'From early experiments to a working smart cane presented at the school Science & Engineering Competition.',
        credit: 'eSight Project / Facebook',
        objectFit: 'contain',
      },
      {
        alt: 'eSight development poster showing circuit prototyping and the project’s Third Prize recognition.',
        caption: 'Repeated research, testing, and redesign led to Third Prize at the school fair.',
        credit: 'eSight Project / Facebook',
        objectFit: 'contain',
      },
      {
        alt: 'eSight infographic showing sensor waves flowing through Arduino control to buzzer feedback.',
        caption: 'Sensor measurements become control decisions before the buzzer communicates risk.',
        credit: 'eSight Project / Facebook',
        objectFit: 'contain',
      },
      {
        alt: 'eSight computer-vision graphic showing a smart cane sensing obstacles through sound and visual processing.',
        caption: 'Computer vision extends environmental awareness beyond distance sensing alone.',
        credit: 'eSight Project / Facebook',
        objectFit: 'contain',
      },
      {
        alt: 'eSight Arduino graphic showing the controller used to coordinate sensing and feedback.',
        caption: 'Arduino coordinates sensing, decision logic, and user feedback.',
        credit: 'eSight Project / Facebook',
        objectFit: 'contain',
      },
    ],
  },
];

const achievements: Achievement[] = [
  {
    id: 'nasa-space-apps-global-nominee',
    year: '2025',
    title: 'Global Nominee · NASA Space Apps Challenge',
    context: 'JWST Space Explorer',
    description: 'Advanced from local judging to the Global Judging stage of the 2025 NASA Space Apps Challenge.',
    evidence: 'https://www.spaceappschallenge.org/2025/awards/',
    evidenceLabel: 'NASA selection process',
    priority: 'primary',
    media: [
      {
        src: '/images/achievements/nguyen-gia-bach-press-feature.webp',
        alt: 'Portrait of Nguyen Gia Bach featured in an ASEAN News article about JWST Space Explorer.',
        caption: 'Nguyen Gia Bach',
        credit: 'ASEAN News · 09 Nov 2025',
        presentation: 'press-profile',
        meta: 'JWST Space Explorer',
        sourceHref: 'https://tapchidongnama.vn/hoc-sinh-chuyen-le-quy-don-da-nang-hoan-thanh-thu-thach-ung-dung-khong-gian-nasa-space-apps-challenge-2025/',
        objectFit: 'cover',
        objectPosition: 'center 35%',
      },
      {
        src: '/images/projects/jwst/overview.webp',
        alt: 'JWST Space Explorer interface with a deep-space background and astronomical target search.',
        caption: 'The Global Nominee project built during the 48-hour challenge.',
        credit: 'JWST Space Explorer',
        objectFit: 'cover',
        objectPosition: 'center 48%',
      },
    ],
  },
  {
    id: 'da-nang-city-physics-second-prize',
    year: '2024',
    title: 'Second Prize · Da Nang City Physics Competition',
    context: 'Physics · City level',
    description: 'Recognised at city level in the Excellent Student Competition in Physics.',
    priority: 'primary',
    media: [{ alt: 'Reserved image for the Da Nang City Physics Competition Second Prize.' }],
  },
  {
    id: 'rmit-tech-camp-second-prize',
    year: '2026',
    title: 'Second Prize · RMIT Tech Camp',
    context: 'Team Lead',
    description: 'Led a team from problem framing to a competition-ready technical solution.',
    priority: 'primary',
    media: [{ alt: 'Reserved image for the RMIT Tech Camp Second Prize achievement.' }],
  },
  {
    id: 'school-science-engineering-third-prize',
    year: '25–26',
    title: 'Third Prize · School Science & Engineering Competition',
    context: 'eSight · Assistive Technology',
    description: 'Developed and presented the eSight smart cane through an iterative school-level research process.',
    priority: 'primary',
    media: [
      {
        src: '/images/achievements/science-engineering-third-prize.webp',
        alt: 'Certificate awarding Nguyen Gia Bach Third Prize in the engineering category of the school Science and Engineering Competition.',
        caption: 'Third Prize in the engineering category, academic year 2025–2026.',
        credit: 'Le Quy Don High School for the Gifted',
        objectFit: 'contain',
      },
      {
        src: '/images/projects/esight/prototype-to-product.webp',
        alt: 'eSight project journey showing the smart cane demonstration and hands-on electronics prototyping.',
        caption: 'Presenting the working smart cane after repeated prototyping and testing.',
        credit: 'eSight Project / Facebook',
        sourceHref: 'https://www.facebook.com/esightproject',
        objectFit: 'contain',
      },
      {
        src: '/images/projects/esight/iteration-and-award.webp',
        alt: 'eSight development poster showing circuit prototyping and the project’s Third Prize recognition.',
        caption: 'The award marked the beginning of the project’s next research cycle.',
        credit: 'eSight Project / Facebook',
        sourceHref: 'https://www.facebook.com/esightproject',
        objectFit: 'contain',
      },
    ],
  },
  {
    id: 'fast-maze-runner-third-prize',
    year: 'STEM',
    title: 'Third Prize · FAST Maze Runner',
    context: 'Robotics Team Lead',
    description: 'Led the team in a robotics challenge organised by FAST, University of Science and Technology – UD.',
    priority: 'primary',
    media: [{ alt: 'Reserved image for the FAST Maze Runner Third Prize.' }],
  },
  {
    id: 'school-physics-honorable-mention',
    year: '25–26',
    title: 'Honorable Mention · School Physics Competition',
    context: 'Physics · School level',
    description: 'Received an Honorable Mention in the school-level Excellent Student Competition in Physics.',
    priority: 'supporting',
    media: [{
      src: '/images/achievements/school-physics-honorable-mention.webp',
      alt: 'Certificate awarding Nguyen Gia Bach an Honorable Mention in the school Physics Competition for 2025–2026.',
      caption: 'Honorable Mention in Physics, academic year 2025–2026.',
      credit: 'Le Quy Don High School for the Gifted',
      objectFit: 'contain',
    }],
  },
  {
    id: 'excellent-student-2025-2026',
    year: '25–26',
    title: 'Excellent Student · 2025–2026',
    context: 'Academic standing',
    description: 'Recognised for excellent academic performance during the 2025–2026 school year.',
    priority: 'supporting',
    media: [{
      src: '/images/achievements/excellent-student-2025-2026.webp',
      alt: 'Certificate recognising Nguyen Gia Bach as an Excellent Student for the 2025–2026 academic year.',
      caption: 'Excellent Student recognition for the 2025–2026 academic year.',
      credit: 'Le Quy Don High School for the Gifted',
      objectFit: 'contain',
    }],
  },
];

const skillGroups: SkillGroupList = [
  { code: 'A01', title: 'Software engineering', summary: 'Building clear, interactive products from first interface to deployment.', used: ['Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'React', 'Vite'], exploring: ['Deeper testing', 'System design'] },
  { code: 'A02', title: 'Scientific computing & data', summary: 'Turning scientific sources and models into tools people can question and explore.', used: ['Astropy', 'NASA data', 'OpenSeadragon', 'APIs', 'Scientific imaging'], exploring: ['Scientific ML', 'Data visualisation'] },
  { code: 'A03', title: 'Robotics & prototyping', summary: 'Connecting physical reasoning, iterative testing, and reliable system behaviour.', used: ['Arduino', 'Computer vision', 'Ultrasonic sensing', 'Embedded systems', 'System testing'], exploring: ['Sensor fusion', 'Accessibility testing'] },
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
