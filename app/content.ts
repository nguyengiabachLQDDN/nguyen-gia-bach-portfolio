export type ProjectVariant = 'jwst' | 'astroverse' | 'robotics' | 'vibe';

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

export interface ProjectFormula {
  problem: string;
  product: string;
  application: string;
  teamOutcome: string;
  personalOwnership: string;
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
  formula: ProjectFormula;
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

export type SkillIconKey =
  | 'python'
  | 'javascript'
  | 'typescript'
  | 'html'
  | 'css'
  | 'react'
  | 'nextjs'
  | 'vite'
  | 'tailwind'
  | 'astropy'
  | 'nasa'
  | 'arduino'
  | 'vision'
  | 'embedded'
  | 'git'
  | 'github'
  | 'vercel'
  | 'sandbox'
  | 'openseadragon';

export interface SkillItem {
  name: string;
  icon: SkillIconKey;
}

export interface SkillGroup {
  title: string;
  items: SkillItem[];
}

export interface ExperienceMediaAsset {
  src: string;
  alt: string;
  caption: string;
}

export interface EngineeringExperience {
  company: string;
  role: string;
  period: string;
  project: string;
  projectContext: string;
  summary: string;
  workflow: string[];
  exposure: string[];
  involvement: string[];
  keyResponsibilities: string[];
  skillsLearned: string[];
  concreteOutcomes: string[];
  media: ExperienceMediaAsset[];
}

export type RecognitionLevel = 'Global' | 'National' | 'City' | 'University' | 'School';

export interface RecognitionItem {
  year: string;
  level: RecognitionLevel;
  badge: string;
  title: string;
  result: string;
  context: string;
  scope?: string;
  evidenceHref?: string;
  evidenceLabel?: string;
}

export interface CapabilityEvidence {
  label: string;
  href: string;
}

export interface CapabilityGroup {
  title: string;
  statement: string;
  skills: string[];
  evidence: CapabilityEvidence[];
}

export interface LeadershipActivity {
  year: string;
  category: 'leadership' | 'extracurricular';
  role: string;
  scope: string;
  organization: string;
  coreWork: string;
  metrics: string;
  result: string;
  href?: string;
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
  formula: ProjectFormula;
}

type ProjectCopyList = [ProjectCopy, ProjectCopy, ProjectCopy, ProjectCopy, ProjectCopy];
type SkillGroupList = [SkillGroup, SkillGroup, SkillGroup, SkillGroup];

const projectBases: [ProjectBase, ProjectBase, ProjectBase, ProjectBase, ProjectBase] = [
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
    slug: 'esight',
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
  {
    number: '04',
    slug: 'fast-maze-runner',
    variant: 'robotics',
    linkTargets: [
      { href: '/images/achievements/fast-maze-runner/02-third-prize.webp', cardRole: 'primary' },
      { href: '/images/achievements/fast-maze-runner/01-team-award.webp', cardRole: 'secondary' },
    ],
    coverSrc: '/images/achievements/fast-maze-runner/05-robot-prototype.webp',
    gallerySrc: [
      '/images/achievements/fast-maze-runner/01-team-award.webp',
      '/images/achievements/fast-maze-runner/02-third-prize.webp',
      '/images/achievements/fast-maze-runner/03-maze-preparation.webp',
      '/images/achievements/fast-maze-runner/04-competition-maze.webp',
      '/images/achievements/fast-maze-runner/06-power-system.webp',
      '/images/achievements/fast-maze-runner/07-electronics-assembly.webp',
      '/images/achievements/fast-maze-runner/08-sensor-system.webp',
    ],
  },
  {
    number: '05',
    slug: 'vibe-coding-platform',
    variant: 'vibe',
    linkTargets: [
      { href: 'https://vibe-coding-platform-zeta-two-50.vercel.app/', cardRole: 'primary' },
      { href: 'https://github.com/nguyengiabachLQDDN/vibe-coding-platform', cardRole: 'secondary' },
    ],
    coverSrc: '/images/projects/vibe-coding-platform/product-overview.webp',
    gallerySrc: [
      '/images/projects/vibe-coding-platform/model-selector.webp',
      '/images/projects/vibe-coding-platform/sandbox-workspace.webp',
    ],
  },
];

const featuredProjectSlugs = [
  'esight',
  'jwst-deep-space-explorer',
  'astroverse',
  'fast-maze-runner',
] as const;

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
    formula: {
      problem: 'Public access to raw scientific JWST observations is obstructed by massive multi-gigabyte FITS file sizes and specialist desktop software requirements.',
      product: 'Full-stack astronomical explorer with automated NASA MAST retrieval, FastAPI tile conversion pipeline (Astropy + pyvips), and an OpenSeadragon viewer with contextual Gemini AI.',
      application: 'Enables high-resolution, interactive deep-space observation inspection in standard web browsers with instant AI-driven astronomical analysis.',
      teamOutcome: 'Honored as a 2025 NASA Space Apps Global Nominee (Top 10% worldwide from 11,500+ entries) developed within a 48-hour competitive sprint.',
      personalOwnership: 'Team Lead & Backend Architect: conceived system design, engineered the Python/FastAPI data ingestion and FITS-to-DeepZoom tiling pipeline, and wired the Gemini API context layer.',
    },
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
    formula: {
      problem: 'Science learners struggle to transition from passive reading to empirical inquiry due to fragmented tools lacking physical feedback or continuous review.',
      product: 'Integrated digital observatory combining dynamic celestial mapping, verified NASA NEO live feeds, an interactive habitable exoplanet simulation lab, and a spaced-repetition notebook.',
      application: 'Deployed production web application providing self-directed astrophysics exploration with local-first evidence tracking.',
      teamOutcome: 'Fully functional, multi-module astronomy learning platform deployed publicly on Vercel with responsive physics simulations.',
      personalOwnership: 'Solo Product Developer: engineered 100% of the TypeScript codebase, responsive interfaces, planetary atmospheric calculation models, and client-side data persistence.',
    },
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
    formula: {
      problem: 'Visually impaired pedestrians lack intuitive, non-startling early detection of overhead and ground obstacles during outdoor and indoor navigation.',
      product: 'Physical smart cane prototype integrating ultrasonic rangefinders and computer vision, processed via Arduino to generate 3-stage graduated buzzer feedback (safe silence, progressive pulses, continuous alert).',
      application: 'Tested across indoor corridor obstacle setups; demonstrated at the school Science & Engineering Fair.',
      teamOutcome: 'Completed working hardware-software cane prototype and earned Third Prize at the school Science & Engineering Competition.',
      personalOwnership: 'Project Lead & Embedded Developer: formulated the physical problem, built the Arduino circuitry, implemented the distance-to-frequency algorithm, and conducted hardware iteration tests.',
    },
  },
  {
    title: 'FAST Maze Runner',
    label: 'Autonomous robotics · Third Prize',
    status: 'Completed',
    date: 'April 2025',
    role: 'Robotics Team Lead · The Physicians',
    summary: 'An autonomous maze-solving differential-drive robot utilizing ultrasonic sensor arrays, dedicated power regulation, and dynamic pathfinding algorithms to solve unmapped mazes.',
    featuredHighlights: [
      'Multi-directional ultrasonic distance sensing for continuous obstacle and corridor detection.',
      'Custom power distribution protecting logic controller from DC motor stall-current voltage dips.',
      'Dynamic decision-tree algorithm solving unmapped grid mazes in competitive trial runs.',
    ],
    challenge: 'Solving an unmapped physical labyrinth requires real-time sensing, precise turning actuation, and collision-free path decision logic under aggressive battery and timing constraints.',
    approach: 'Our team built a differential-drive robot chassis with an Arduino controller, high-torque geared motors, and three ultrasonic sensors. The control software samples obstacle clearances, detects wall junctions, and executes a modified wall-following and junction-priority traversal algorithm.',
    contributions: [
      'Led Team “The Physicians” across hardware integration, electronic testing, and competition trials.',
      'Designed the multi-sensor placement layout and motor driver wiring to eliminate electromagnetic noise.',
      'Developed and calibrated the maze exploration and junction-selection state machine in C++.',
      'Secured Third Prize at the FAST Robotics Maze Solver Challenge 2025 at Danang University of Technology.',
    ],
    decisions: [
      { title: 'Separate motor and logic power', description: 'Used dual power lines and filtering capacitors to prevent MCU brownout resets when DC motors draw peak current during quick turns.' },
      { title: 'Three-point sensor array', description: 'Positioned front, left, and right ultrasonic sensors at 45-degree angled axes to detect diagonal corridors before committing to turns.' },
      { title: 'Dynamic speed throttling', description: 'Reduced forward drive speed when corridor margins narrowed below safe thresholds to maintain heading accuracy.' },
    ],
    outcomes: [
      'Awarded Third Prize at FAST Robotics Maze Solver Challenge 2025.',
      'Achieved zero collision faults across all official competition runs.',
      'Validated end-to-end autonomous navigation combining physical assembly, sensing, and real-time control.',
    ],
    lessons: 'In competitive robotics, mechanical symmetry and clean power delivery matter just as much as pathfinding code. Clean sensor inputs made the software logic trivial to tune on competition day.',
    stack: ['Arduino', 'C++', 'Ultrasonic Sensors', 'DC Motors', 'L298N Driver', 'Autonomous Navigation', 'Robotics'],
    linkLabels: ['View certificate', 'Team award'],
    cover: {
      alt: 'FAST Maze Runner autonomous robot prototype with ultrasonic sensors and electronics assembly.',
      caption: 'The completed maze-solving robot before official trial runs.',
      objectPosition: 'center 50%',
      objectFit: 'cover',
    },
    gallery: [
      { alt: 'Team The Physicians receiving Third Prize at FAST Maze Runner 2025.', caption: 'Award ceremony — Third Prize recognition for Team The Physicians.', objectFit: 'cover', objectPosition: 'center 47%' },
      { alt: 'Third Prize certificate presented by FAST, Danang University of Technology.', caption: 'Third Prize certificate of achievement.', objectFit: 'contain', objectPosition: 'center' },
      { alt: 'Calibrating the robot prototype beside the competition maze course.', caption: 'Testing sensor thresholds beside the official modular maze.', objectFit: 'cover', objectPosition: 'center' },
      { alt: 'The modular competition maze layout with intersections and turns.', caption: 'Official competition maze environment.', objectFit: 'cover', objectPosition: 'center' },
      { alt: 'Close-up of battery pack, motor drivers, and chassis wiring.', caption: 'Drivetrain, power regulation, and chassis mechanics.', objectFit: 'cover', objectPosition: 'center' },
      { alt: 'Top-down view of electronics layout and controller wiring.', caption: 'Controller wiring and board integration.', objectFit: 'cover', objectPosition: 'center' },
      { alt: 'Front-facing view of the ultrasonic sensor array.', caption: 'Front and angled ultrasonic sensor mounts.', objectFit: 'cover', objectPosition: 'center' },
    ],
    formula: {
      problem: 'Autonomous vehicle navigation and real-time corridor traversal in unmapped physical mazes under strict power and timing boundaries.',
      product: 'Differential-drive mobile robot chassis equipped with three ultrasonic sensor vectors, isolated dual-rail power distribution, and dynamic pathfinding firmware.',
      application: 'Deployed on competition courses at the FAST Robotics Maze Solver Challenge; successfully resolved complex junctions without human override.',
      teamOutcome: 'Awarded Third Prize at FAST Robotics Maze Solver Challenge 2025 (Faculty of Advanced Science and Technology, Danang University of Technology).',
      personalOwnership: 'Robotics Team Lead: led hardware construction, engineered noise-free power regulation for the MCU, and authored the C++ traversal state machine.',
    },
  },
  {
    title: 'Vibe Coding Platform',
    label: 'AI application builder · Sandboxed execution',
    status: 'Prototype',
    date: '2026',
    role: 'Developer · OSS Adaptation',
    summary: 'An adapted open-source coding workspace designed to turn natural-language prompts into full-stack projects with sandboxed execution, live preview, file browsing, and command logs.',
    featuredHighlights: [
      'Supports Claude, GPT, and Grok models through Vercel AI Gateway.',
      'Runs generated code inside Vercel Sandbox and presents the result through a real-time preview.',
      'Brings chat, file exploration, command logs, error monitoring, and deployment controls into one workspace.',
    ],
    challenge: 'AI-assisted application building involves more than returning source code. The interface must coordinate model selection, generated files, command execution, runtime feedback, and a preview while keeping untrusted code isolated from the main application.',
    approach: 'I adapted and deployed an open-source workspace that organises the workflow into four connected areas: an AI chat, a live preview, a sandbox file explorer, and command logs. Vercel AI Gateway provides a common model layer, while Vercel Sandbox defines the intended boundary for generated code execution.',
    contributions: [
      'Adapted the open-source application structure for a public portfolio prototype.',
      'Prepared a multi-model workflow for Claude, GPT, and Grok through Vercel AI Gateway.',
      'Organised the interface around chat, preview, remote files, command output, and error-recovery settings.',
      'Deployed the prototype and published its source while documenting that the public AI flow requires service credentials.',
    ],
    decisions: [
      { title: 'Keep execution isolated', description: 'Use Vercel Sandbox as the intended runtime boundary instead of executing generated code inside the portfolio or main application process.' },
      { title: 'Show the whole workflow', description: 'Keep conversation, preview, files, and logs visible together so users can follow how an application changes.' },
      { title: 'Label the limitation', description: 'Present the deployment as a prototype because the public interface does not currently expose the credentials required for AI generation.' },
    ],
    outcomes: [
      'Deployed a public prototype of the adapted coding workspace.',
      'Published the source code with the platform structure and required service configuration visible for review.',
      'Established a foundation for later API configuration, sandbox execution, and end-to-end validation.',
    ],
    lessons: 'Adapting an AI coding interface made the orchestration layer more visible: a useful product must communicate model state, execution state, files, errors, and preview results—not just provide a prompt box. It also reinforced the importance of separating a deployed interface from a production-ready service.',
    stack: ['Next.js', 'Vercel Sandbox', 'TypeScript', 'AI SDK v6', 'Vercel AI Gateway', 'Tailwind CSS', 'shadcn/ui'],
    linkLabels: ['Open prototype', 'Source'],
    cover: {
      alt: 'Vibe Coding Platform product overview explaining its full-stack generation workflow and Vercel AI services.',
      caption: 'Product overview — an AI coding workflow built around Gateway, Sandbox, Next.js, and the AI SDK.',
      objectFit: 'cover',
      objectPosition: 'center 50%',
    },
    gallery: [
      {
        alt: 'Vibe Coding Platform chat workspace with example prompts and an open selector listing Claude, GPT, and Grok models.',
        caption: 'Model selection — Claude, GPT, and Grok are available from the same prompt workspace.',
        objectFit: 'cover',
        objectPosition: 'center 50%',
      },
      {
        alt: 'Vibe Coding Platform panels for live preview, the sandbox remote filesystem, and sandbox command output.',
        caption: 'Sandbox workspace — preview, generated files, and command output remain visible in separate panels.',
        objectFit: 'cover',
        objectPosition: 'center 50%',
      },
    ],
    formula: {
      problem: 'Interactive AI web generation lacks isolated browser execution, preventing safe real-time previewing of multi-file codebases.',
      product: 'Sandboxed code playground connecting Vercel AI Gateway, cloud container runtimes, and real-time execution logs.',
      application: 'Public architectural prototype demonstrating isolated execution workflows.',
      teamOutcome: 'Engineered prototype deployed to Vercel showcasing multi-model selection and live sandbox containers.',
      personalOwnership: 'Developer: adapted open-source framework, configured deployment pipelines, and documented sandbox security parameters.',
    },
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
    media: [{
      src: '/images/achievements/da-nang-city-physics-second-prize.webp',
      alt: 'Certificate awarding Nguyen Gia Bach Second Prize in Physics at the Da Nang city-level Grade 9 Excellent Student Competition for 2023–2024.',
      caption: 'Second Prize in Physics at the Da Nang city-level Grade 9 Excellent Student Competition, academic year 2023–2024.',
      credit: 'Da Nang Department of Education and Training',
      objectFit: 'contain',
    }],
  },
  {
    id: 'rmit-tech-camp-second-prize',
    year: '2026',
    title: 'Second Prize · RMIT Tech Camp',
    context: 'Team Lead',
    description: 'Led Team LQD Da Nang through the RMIT Tech Camp 2026 Grand Finals and received Second Place.',
    priority: 'primary',
    media: [
      {
        src: '/images/achievements/rmit-tech-camp/01-award-team.webp',
        alt: 'Team LQD Da Nang holding their Second Place certificate and awards at the RMIT Tech Camp 2026 Grand Finals.',
        caption: 'Second Place — Team LQD Da Nang at the RMIT Tech Camp 2026 Grand Finals.',
        credit: 'RMIT Tech Camp 2026 / RMIT University Vietnam',
        objectFit: 'cover',
        objectPosition: 'center 50%',
      },
      {
        src: '/images/achievements/rmit-tech-camp/02-award-ceremony.webp',
        alt: 'Team LQD Da Nang receiving an award during the RMIT Tech Camp 2026 Grand Finals ceremony.',
        caption: 'Receiving the Grand Finals award at RMIT University Vietnam.',
        credit: 'RMIT Tech Camp 2026 / RMIT University Vietnam',
        objectFit: 'cover',
        objectPosition: 'center 50%',
      },
      {
        src: '/images/achievements/rmit-tech-camp/03-final-presentation.webp',
        alt: 'Two Team LQD Da Nang finalists presenting their solution during the RMIT Tech Camp final round.',
        caption: 'Presenting the team’s solution during the final round.',
        credit: 'RMIT Tech Camp 2026 / RMIT University Vietnam',
        objectFit: 'cover',
        objectPosition: 'center 50%',
      },
      {
        src: '/images/achievements/rmit-tech-camp/04-final-session.webp',
        alt: 'Team LQD Da Nang seated together during a session at the RMIT Tech Camp 2026 Grand Finals.',
        caption: 'Team LQD Da Nang during the Grand Finals session.',
        credit: 'RMIT Tech Camp 2026 / RMIT University Vietnam',
        objectFit: 'cover',
        objectPosition: 'center 50%',
      },
      {
        src: '/images/achievements/rmit-tech-camp/05-campus-group.webp',
        alt: 'RMIT Tech Camp finalists gathered outside the RMIT University Vietnam Saigon South campus.',
        caption: 'RMIT Tech Camp finalists at the Saigon South campus.',
        credit: 'RMIT Tech Camp 2026 / RMIT University Vietnam',
        objectFit: 'cover',
        objectPosition: 'center 50%',
      },
      {
        src: '/images/achievements/rmit-tech-camp/06-second-place-certificate.webp',
        alt: 'Certificate of Achievement awarding Second Place at the RMIT Tech Camp 2026 Grand Finals.',
        caption: 'Certificate of Achievement for Second Place at the 2026 Grand Finals.',
        credit: 'RMIT Tech Camp 2026 / RMIT University Vietnam',
        objectFit: 'contain',
        objectPosition: 'center',
      },
    ],
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
    description: 'Led Team “The Physicians” to Third Prize in the Robotics Maze Solver Challenge, organised by the Faculty of Advanced Science and Technology (FAST), The University of Danang – University of Science and Technology.',
    priority: 'primary',
    media: [
      {
        src: '/images/achievements/fast-maze-runner/01-team-award.webp',
        alt: 'Team The Physicians receiving Third Prize at the FAST Maze Runner robotics competition.',
        caption: 'Team “The Physicians” receiving Third Prize at FAST Maze Runner.',
        credit: 'FAST Maze Runner 2025',
        objectFit: 'cover',
        objectPosition: 'center 47%',
      },
      {
        src: '/images/achievements/fast-maze-runner/02-third-prize.webp',
        alt: 'Third Prize certificate and award envelope presented to Team The Physicians at FAST Maze Runner 2025.',
        caption: 'Third Prize recognition for Team “The Physicians”.',
        credit: 'FAST Maze Runner 2025',
        objectFit: 'contain',
        objectPosition: 'center',
      },
      {
        src: '/images/achievements/fast-maze-runner/03-maze-preparation.webp',
        alt: 'Participants preparing a maze-solving robot beside the FAST Maze Runner competition course.',
        caption: 'Preparing the robot beside the competition maze.',
        credit: 'FAST Maze Runner 2025',
        objectFit: 'cover',
        objectPosition: 'center',
      },
      {
        src: '/images/achievements/fast-maze-runner/04-competition-maze.webp',
        alt: 'The modular maze course used for the FAST Maze Runner robotics challenge.',
        caption: 'The modular maze used for the robotics challenge.',
        credit: 'FAST Maze Runner 2025',
        objectFit: 'cover',
        objectPosition: 'center',
      },
      {
        src: '/images/achievements/fast-maze-runner/05-robot-prototype.webp',
        alt: 'Maze-solving robot prototype surrounded by wheels, sensors, and electronic components during development.',
        caption: 'The robot prototype during iterative development.',
        credit: 'FAST Maze Runner 2025',
        objectFit: 'cover',
        objectPosition: 'center',
      },
      {
        src: '/images/achievements/fast-maze-runner/06-power-system.webp',
        alt: 'Close view of the maze-solving robot battery pack, motor driver, wiring, and wheels.',
        caption: 'Power delivery and drivetrain assembly.',
        credit: 'FAST Maze Runner 2025',
        objectFit: 'cover',
        objectPosition: 'center',
      },
      {
        src: '/images/achievements/fast-maze-runner/07-electronics-assembly.webp',
        alt: 'Top view of the robot electronics assembly with batteries, motor driver, controller board, and wiring.',
        caption: 'Controller wiring and electronics integration.',
        credit: 'FAST Maze Runner 2025',
        objectFit: 'cover',
        objectPosition: 'center',
      },
      {
        src: '/images/achievements/fast-maze-runner/08-sensor-system.webp',
        alt: 'Front view of the maze-solving robot showing ultrasonic sensors, controller board, and connected wiring.',
        caption: 'Ultrasonic sensing and the completed control assembly.',
        credit: 'FAST Maze Runner 2025',
        objectFit: 'cover',
        objectPosition: 'center',
      },
    ],
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

const achievementTimelineOrder = [
  'rmit-tech-camp-second-prize',
  'school-science-engineering-third-prize',
  'school-physics-honorable-mention',
  'excellent-student-2025-2026',
  'nasa-space-apps-global-nominee',
  'fast-maze-runner-third-prize',
  'da-nang-city-physics-second-prize',
] as const;

const skillGroups: SkillGroupList = [
  {
    title: 'Languages',
    items: [
      { name: 'Python', icon: 'python' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
    ],
  },
  {
    title: 'Web & frameworks',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Vite', icon: 'vite' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
  },
  {
    title: 'Science & robotics',
    items: [
      { name: 'Astropy', icon: 'astropy' },
      { name: 'NASA Data', icon: 'nasa' },
      { name: 'Arduino', icon: 'arduino' },
      { name: 'Computer Vision', icon: 'vision' },
      { name: 'Embedded Systems', icon: 'embedded' },
    ],
  },
  {
    title: 'Tools & delivery',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'Vercel Sandbox', icon: 'sandbox' },
      { name: 'OpenSeadragon', icon: 'openseadragon' },
    ],
  },
];

const learningFocus = ['System design', 'Scientific ML', 'Sensor fusion', 'CI workflows'];

const engineeringExperience: EngineeringExperience = {
  company: 'D&D Investment & Technology Development JSC',
  role: 'Engineering & Project Supervision Intern',
  period: '15 Feb — 20 Aug 2026',
  project: 'ENSURE Da Nang',
  projectContext: 'Smart urban resilience infrastructure · Da Nang People’s Committee + KOICA',
  summary: 'A 6-month supervised engineering placement focused on field deployment, equipment calibration, system integration, and data pipeline monitoring for Da Nang smart city infrastructure.',
  workflow: ['Site assessment & survey', 'Sensor & equipment deployment', 'System integration & data transmission', 'Operational monitoring & acceptance'],
  exposure: [
    'Monitoring infrastructure at the Da Nang Intelligent Operations Center (IOC) and field measurement sites.',
    'Connecting field sensors for real-time telemetry, transmission, storage, and automated anomaly alerts.',
    'Coordination between supervision engineers, contractors, technical blueprints, and on-site adjustments.',
  ],
  involvement: [
    'Assisted in inspecting and documenting meteorological and urban sensor installations under lead engineer guidance.',
    'Compiled, cross-checked, and logged field deployment acceptance records into monitoring databases.',
    'Attended technical team reviews, sharpening technical documentation and multi-stakeholder communication.',
  ],
  keyResponsibilities: [
    'Assisted on-site technical inspection and equipment mounting checks according to project blueprints.',
    'Verified sensor telemetry links transmitting field data to the Central Intelligent Operations Center (IOC).',
    'Maintained standardized technical logs and acceptance checklists across 6 active deployment locations.',
  ],
  skillsLearned: [
    'Industrial sensor telemetry & data logging workflows',
    'Reading and validating technical construction & electrical blueprints',
    'Real-time urban infrastructure monitoring protocols',
    'Professional technical documentation and field acceptance standards',
  ],
  concreteOutcomes: [
    'Successfully contributed to the completion of deployment records across 6 months of field supervision.',
    'Verified zero-data-loss telemetry transmission during IOC integration test runs.',
    'Gained direct exposure to public-sector smart infrastructure development (KOICA + Da Nang People’s Committee).',
  ],
  media: [
    {
      src: '/images/experience/ensure-internship-01.jpg',
      alt: 'Field site inspection and equipment deployment in Da Nang.',
      caption: 'Field site survey — assessing equipment deployment locations and environmental conditions.',
    },
    {
      src: '/images/experience/ensure-internship-02.jpg',
      alt: 'Engineering supervision and equipment checking.',
      caption: 'Technical supervision — validating installation blueprints and field hardware connections.',
    },
    {
      src: '/images/experience/ensure-internship-03.jpg',
      alt: 'On-site installation and hardware calibration.',
      caption: 'Hardware calibration — inspecting telemetry sensor units before field activation.',
    },
    {
      src: '/images/experience/ensure-internship-04.jpg',
      alt: 'Gia Bach during field operations in the ENSURE Da Nang project.',
      caption: 'Field operations — assisting lead engineers with on-site equipment verification.',
    },
    {
      src: '/images/experience/ensure-internship-05.jpg',
      alt: 'Sensor assembly and wiring check at deployment site.',
      caption: 'Telemetry setup — verifying signal lines and power cabling for continuous operation.',
    },
    {
      src: '/images/experience/ensure-internship-06.jpg',
      alt: 'Documenting site records and equipment checklist.',
      caption: 'Acceptance records — compiling deployment checklists for technical handover.',
    },
  ],
};

const recognitionItems: RecognitionItem[] = [
  {
    year: 'Oct 2025',
    level: 'Global',
    badge: 'Global Honor',
    result: 'Global Nominee',
    title: 'NASA Space Apps Challenge 2025',
    context: 'JWST Space Explorer · Team Lead & Lead Developer',
    scope: 'Top 10% worldwide from 11,500+ global project submissions',
    evidenceHref: 'https://www.spaceappschallenge.org/2025/awards/',
    evidenceLabel: 'View global nominee',
  },
  {
    year: 'Jan 2026',
    level: 'National',
    badge: 'National Honor',
    result: 'Second Place (National Grand Finals)',
    title: 'RMIT Tech Camp 2026 Grand Finals',
    context: 'Team Lead · Team LQD Da Nang · RMIT University Vietnam',
    scope: 'National Grand Finals competitive tech hackathon',
    evidenceHref: '/images/achievements/rmit-tech-camp/06-second-place-certificate.webp',
    evidenceLabel: 'View certificate',
  },
  {
    year: 'Mar 2024',
    level: 'City',
    badge: 'City Honor',
    result: 'Second Prize (City Physics Olympiad)',
    title: 'Da Nang City Excellent Student Competition',
    context: 'City-level Grade 9 Physics · Da Nang Dept of Education & Training',
    scope: 'City-wide specialized academic competition',
    evidenceHref: '/images/achievements/da-nang-city-physics-second-prize.webp',
    evidenceLabel: 'View certificate',
  },
  {
    year: 'Apr 2025',
    level: 'University',
    badge: 'University Honor',
    result: 'Third Prize (Tournament Finals)',
    title: 'FAST Robotics Maze Solver Challenge',
    context: 'Robotics Team Lead · The Physicians · Danang Univ. of Technology',
    scope: 'University & STEM autonomous robotics tournament',
    evidenceHref: '/images/achievements/fast-maze-runner/02-third-prize.webp',
    evidenceLabel: 'View certificate',
  },
  {
    year: '2025–2026',
    level: 'School',
    badge: 'School Honor',
    result: 'Third Prize (Science & Engineering Fair)',
    title: 'School Science & Engineering Competition',
    context: 'eSight Smart Cane · Le Quy Don High School for the Gifted',
    scope: 'Annual school science & engineering fair',
    evidenceHref: '/images/achievements/science-engineering-third-prize.webp',
    evidenceLabel: 'View certificate',
  },
];

const additionalRecognitionItems: RecognitionItem[] = [
  {
    year: '2025–2026',
    level: 'School',
    badge: 'School Honor',
    result: 'Honorable Mention (School Physics Competition)',
    title: 'School Physics Competition',
    context: 'Grade 10 Physics · Le Quy Don High School for the Gifted',
    scope: 'School-level Excellent Student Competition in Physics',
    evidenceHref: '/images/achievements/school-physics-honorable-mention.webp',
    evidenceLabel: 'View certificate',
  },
  {
    year: '2025–2026',
    level: 'School',
    badge: 'School Honor',
    result: 'Excellent Student (GPA 9.5/10.0)',
    title: 'Academic Standing Recognition',
    context: 'Le Quy Don High School for the Gifted',
    scope: 'Outstanding academic standing across all subjects',
    evidenceHref: '/images/achievements/excellent-student-2025-2026.webp',
    evidenceLabel: 'View certificate',
  },
];

const capabilityGroups: CapabilityGroup[] = [
  {
    title: 'Computational systems',
    statement: 'Build browser-based tools that connect interfaces, application logic, external services, and deployment.',
    skills: ['Python', 'TypeScript', 'React', 'Next.js', 'Vite'],
    evidence: [
      { label: 'JWST Space Explorer', href: '/projects/jwst-deep-space-explorer' },
      { label: 'AstroVerse', href: '/projects/astroverse' },
      { label: 'FAST Maze Runner', href: '/projects/fast-maze-runner' },
    ],
  },
  {
    title: 'Embedded & sensing',
    statement: 'Connect physical measurements, control logic, and feedback through iterative prototypes.',
    skills: ['Arduino', 'Ultrasonic sensing', 'Computer vision', 'Embedded systems'],
    evidence: [
      { label: 'eSight', href: '/projects/esight' },
      { label: 'FAST Maze Runner', href: '/projects/fast-maze-runner' },
    ],
  },
  {
    title: 'Scientific computing',
    statement: 'Turn public scientific data and specialist formats into explorable visual systems.',
    skills: ['NASA MAST', 'Astroquery', 'Astropy', 'FITS', 'pyvips', 'OpenSeadragon'],
    evidence: [{ label: 'JWST Space Explorer', href: '/projects/jwst-deep-space-explorer' }],
  },
  {
    title: 'Engineering practice',
    statement: 'Document systems, follow deployment information, and understand integration across field and operational contexts.',
    skills: ['Technical documentation', 'System integration exposure', 'Deployment monitoring', 'Project coordination'],
    evidence: [{ label: 'D&D internship', href: '#experience' }],
  },
];

const leadershipActivities: LeadershipActivity[] = [
  {
    year: '2026',
    category: 'leadership',
    role: 'Team Lead',
    organization: 'RMIT Tech Camp Grand Finals',
    scope: '5-member engineering team (Team LQD Da Nang)',
    coreWork: 'Spearheaded project architecture, delegated software and hardware workstreams, and pitched solution during live stage defense.',
    metrics: 'Ranked 2nd Place nationally in the Grand Finals among hundreds of teams.',
    result: 'Second Place · National Grand Finals',
    href: '/images/achievements/rmit-tech-camp/01-award-team.webp',
  },
  {
    year: '2025',
    category: 'leadership',
    role: 'Robotics Team Lead',
    organization: 'FAST Maze Runner · Danang Univ. of Technology',
    scope: '3-member robotics team (The Physicians)',
    coreWork: 'Managed chassis assembly, ultrasonic sensor alignment, motor driver power regulation, and traversal algorithm calibration.',
    metrics: 'Awarded Third Prize in the Robotics Maze Solver Challenge with zero collision faults.',
    result: 'Third Prize · Robotics Challenge',
    href: '/images/achievements/fast-maze-runner/01-team-award.webp',
  },
  {
    year: '2025',
    category: 'leadership',
    role: 'Team Lead & Lead Developer',
    organization: 'NASA Space Apps Challenge 2025',
    scope: '48-hour competitive sprint team',
    coreWork: 'Set technical product scope, coordinated UI and backend teams, and authored core Python FITS processing pipeline.',
    metrics: 'Nominated globally (Top 10% worldwide out of 11,500+ submissions).',
    result: 'Global Nominee · NASA Space Apps 2025',
    href: 'https://www.spaceappschallenge.org/2025/awards/',
  },
  {
    year: 'Feb 2026',
    category: 'extracurricular',
    role: 'Financial Manager',
    organization: 'Nguyet Du Charity Campaign',
    scope: 'Revolutionary veterans and heroic mothers at Da Nang nursing center',
    coreWork: 'Oversaw fundraising budget, managed revenue transparency, purchased essential supplies, and coordinated on-site gift distribution.',
    metrics: 'Managed VND 4,200,000 budget · 42 care packages delivered directly to veterans.',
    result: 'VND 4.2M budget · 42 care packages distributed',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7453057296861102080/',
  },
  {
    year: 'Gen 4–6',
    category: 'extracurricular',
    role: 'Academic & Technical Committee',
    organization: 'PIRL Physics Club (Le Quy Don High School for the Gifted)',
    scope: '50+ club members across 3 consecutive school years',
    coreWork: 'Designed experimental apparatus, supervised hands-on physics workshops, maintained laboratory measuring tools, and judged club science contests.',
    metrics: 'Stewardship spanning 3 club generations and 50+ students engaged in physics.',
    result: '3 consecutive years of academic stewardship',
    href: '/images/programs/pirl-technical-committee.webp',
  },
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
  return achievementTimelineOrder.map((id) => {
    const achievement = achievements.find((item) => item.id === id);
    if (!achievement) throw new Error(`Missing achievement: ${id}`);
    return achievement;
  });
}

export function getSkillGroups(): SkillGroup[] {
  return skillGroups;
}

export function getLearningFocus(): string[] {
  return learningFocus;
}

export function getFlagshipProject(): Project {
  const project = getProject('esight');
  if (!project) throw new Error('Missing flagship project: esight');
  return project;
}

export function getSelectedEngineeringWork(): Project[] {
  const order = ['jwst-deep-space-explorer', 'astroverse', 'fast-maze-runner'];
  const projects = getProjects();
  return order.map((slug) => {
    const project = projects.find((item) => item.slug === slug);
    if (!project) throw new Error(`Missing selected project: ${slug}`);
    return project;
  });
}

export function getEngineeringExperience(): EngineeringExperience {
  return engineeringExperience;
}

export function getRecognitionItems(): RecognitionItem[] {
  return recognitionItems;
}

export function getAdditionalRecognitionItems(): RecognitionItem[] {
  return additionalRecognitionItems;
}

export function getCapabilityGroups(): CapabilityGroup[] {
  return capabilityGroups;
}

export function getLeadershipActivities(): LeadershipActivity[] {
  return leadershipActivities;
}

export const projectSlugs = projectBases.map((project) => project.slug);
