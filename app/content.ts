export type ProjectVariant = 'jwst' | 'astroverse' | 'robotics';

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectDecision {
  title: string;
  description: string;
}

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
}

export interface Achievement {
  year: string;
  title: string;
  context: string;
  description: string;
  evidence?: string;
}

export interface SkillGroup {
  code: string;
  title: string;
  summary: string;
  used: string[];
  exploring: string[];
}

export const projects: Project[] = [
  {
    number: '01',
    slug: 'jwst-deep-space-explorer',
    title: 'JWST Deep Space Explorer',
    label: 'NASA Space Apps 2025 · Global Nominee',
    date: 'October 2025',
    role: 'Team Lead & Developer',
    summary:
      'An interactive citizen-science platform that makes massive James Webb Space Telescope imagery explorable in an ordinary browser.',
    challenge:
      'NASA’s “Embiggen Your Eyes!” challenge asked teams to bring extremely large astronomical images closer to the public. The raw data can reach hundreds of gigabytes—far beyond what most learners can download or inspect comfortably.',
    approach:
      'We treated each observation as both scientific data and a navigable place. A Python pipeline prepared the imagery, while a browser-based map interface let people zoom through the details and contribute structured observations.',
    contributions: [
      'Led the team’s scope, priorities, and delivery through a 48-hour hackathon.',
      'Developed the scientific processing workflow with Python and Astropy.',
      'Designed a tiled Leaflet.js viewer for smooth exploration of ultra-large images.',
      'Integrated an AI-assisted labelling workflow to support citizen-science participation.',
    ],
    decisions: [
      {
        title: 'Tile, don’t download',
        description:
          'Serve only the detail needed at the current zoom level instead of forcing users to load a full-resolution scientific file.',
      },
      {
        title: 'Separate science from interface',
        description:
          'Keep data preparation in a Python pipeline and the exploration experience in the browser so each layer stays focused.',
      },
      {
        title: 'Make looking participatory',
        description:
          'Turn passive viewing into observation and labelling, creating a path from public curiosity to citizen science.',
      },
    ],
    outcomes: [
      'Selected among 1,290+ Global Nominees from 11,500+ worldwide submissions.',
      'Completed a working scientific-data experience inside the 48-hour event window.',
      'Recognised by Le Quy Don High School for the Gifted as a notable student achievement.',
    ],
    lessons:
      'The strongest technical shortcut was not reducing the science—it was changing how the data reached the browser. Clear architecture made an ambitious idea possible under severe time and connectivity constraints.',
    stack: ['Python', 'Astropy', 'Leaflet.js', 'JavaScript', 'AI-assisted labelling', 'Scientific imaging'],
    links: [
      { label: 'View source', href: 'https://github.com/nguyengiabachLQDDN/Final-Backend-JWST-project' },
      {
        label: 'Read evidence',
        href: 'https://lqddn.edu.vn/tin-tuc/hoc-sinh-nguyen-gia-bach-xuat-sac-lot-vao-danh-sach-de-cu-toan-cau-tai-cuoc-thi-nasa-space-apps-challenge-2025',
      },
    ],
    variant: 'jwst',
  },
  {
    number: '02',
    slug: 'astroverse',
    title: 'AstroVerse',
    label: 'Astronomy learning platform · Live',
    date: '2026',
    role: 'Product Developer',
    summary:
      'A digital observatory where learners can observe the sky, experiment with physical models, build recall, and record evidence of learning.',
    challenge:
      'Astronomy resources are often split between passive articles, specialist tools, and disconnected quizzes. The goal was to make exploration, experimentation, and reflection feel like one continuous learning journey.',
    approach:
      'AstroVerse organises the experience into five modes: Observe through an interactive sky map, Explore verified astronomy content, Experiment in a habitable-exoplanet lab, Recall through spaced repetition, and Reflect in a private science journal.',
    contributions: [
      'Developed an interactive sky map with time controls, guided journeys, and seven cultural sky views.',
      'Connected NASA APOD and Mars imagery with visible source attribution.',
      'Built an exoplanet laboratory with real-time physical feedback and mission scoring.',
      'Designed spaced-repetition review and a journal that scores scientific methodology rather than right-or-wrong answers.',
    ],
    decisions: [
      {
        title: 'One learning loop',
        description:
          'Connect observation, explanation, experimentation, recall, and reflection instead of treating them as unrelated pages.',
      },
      {
        title: 'Evidence over streaks',
        description:
          'Measure hypotheses, observations, conclusions, and next steps—not just clicks or quiz completion.',
      },
      {
        title: 'Private by default',
        description:
          'Keep journals and progress on the learner’s device, allowing practice without requiring an account or server-side profile.',
      },
    ],
    outcomes: [
      'Shipped a live, multi-module astronomy learning product.',
      'Combined real scientific sources with interactive simulations and active-recall tools.',
      'Created a portfolio flow that turns each learning session into feedback-ready evidence.',
    ],
    lessons:
      'A feature becomes more useful when it hands the learner naturally to the next action. The project taught me to design systems around a learning loop, not a checklist of screens.',
    stack: ['React', 'TypeScript', 'Vite', 'NASA data', 'Scientific modelling', 'Vercel'],
    links: [{ label: 'Open live site', href: 'https://astroverse-m8wl.vercel.app/' }],
    variant: 'astroverse',
  },
  {
    number: '03',
    slug: 'esight-or-robotics',
    title: 'eSight & Robotics Practice',
    label: 'Hardware · Leadership · Iteration',
    date: 'Ongoing',
    role: 'Project Lead / Robotics Team Lead',
    summary:
      'Student-led engineering work that turns physics into reliable physical behaviour through prototyping, testing, and team coordination.',
    challenge:
      'Physical systems fail in ways software mock-ups do not: sensors drift, mechanisms interact, and every change affects the rest of the system. The work demanded both engineering judgement and a team process that could move quickly.',
    approach:
      'Break the system into testable modules, define the behaviour each module must prove, then integrate only after the evidence is clear. Competition constraints made iteration speed and communication as important as the final mechanism.',
    contributions: [
      'Led the eSight student project and coordinated technical direction across the team.',
      'Led a team to Third Prize in the Maze Runner competition organised by FAST, University of Science and Technology – The University of Danang.',
      'Applied physics reasoning to prototype behaviour, testing, and troubleshooting.',
      'Created a repeatable rhythm for dividing work, reviewing failures, and integrating changes.',
    ],
    decisions: [
      {
        title: 'Test modules first',
        description:
          'Prove one behaviour at a time before integration so a failure has a smaller and more understandable search space.',
      },
      {
        title: 'Treat failures as data',
        description:
          'Record what changed, what the system did, and what the next test should isolate rather than making untracked adjustments.',
      },
      {
        title: 'Design for the team',
        description:
          'Use clear ownership and interfaces so mechanical, electrical, and software work can progress without blocking one another.',
      },
    ],
    outcomes: [
      'Third Prize at the FAST Maze Runner competition.',
      'Three consecutive cohorts serving on PIRL Physics Club’s Technical Committee.',
      'A growing engineering practice spanning software, physics, and physical systems.',
    ],
    lessons:
      'Robotics made uncertainty visible. Progress came from making smaller claims, testing them quickly, and giving every teammate enough context to make the next decision well.',
    stack: ['Robotics', 'Rapid prototyping', 'Physics', 'System testing', 'Team leadership'],
    links: [{ label: 'Visit eSight', href: 'https://www.facebook.com/esightproject' }],
    variant: 'robotics',
  },
];

export const achievements: Achievement[] = [
  {
    year: '2026',
    title: 'Second Prize · RMIT Tech Camp',
    context: 'Team Lead',
    description: 'Led a team from problem framing to a competition-ready technical solution.',
  },
  {
    year: '2025',
    title: 'Global Nominee · NASA Space Apps Challenge',
    context: 'JWST Deep Space Explorer',
    description: 'Selected among 1,290+ Global Nominees from more than 11,500 worldwide projects.',
    evidence:
      'https://lqddn.edu.vn/tin-tuc/hoc-sinh-nguyen-gia-bach-xuat-sac-lot-vao-danh-sach-de-cu-toan-cau-tai-cuoc-thi-nasa-space-apps-challenge-2025',
  },
  {
    year: '2024',
    title: 'Second Prize · Da Nang City Physics Competition',
    context: 'Physics',
    description: 'Recognised at city level in the Excellent Student Competition in Physics.',
  },
  {
    year: 'STEM',
    title: 'Third Prize · FAST Maze Runner',
    context: 'Robotics Team Lead',
    description: 'Led the team in a robotics challenge organised by FAST, University of Science and Technology – UD.',
  },
  {
    year: '25–26',
    title: 'Third Prize · School Science & Engineering Fair',
    context: 'Research & Engineering',
    description: 'Developed and presented a technical project through the school-level research process.',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    code: 'A01',
    title: 'Software engineering',
    summary: 'Building clear, interactive products from first interface to deployment.',
    used: ['Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'React', 'Vite'],
    exploring: ['Deeper testing', 'System design'],
  },
  {
    code: 'A02',
    title: 'Scientific computing & data',
    summary: 'Turning scientific sources and models into tools people can question and explore.',
    used: ['Astropy', 'NASA data', 'Leaflet.js', 'APIs', 'Scientific imaging'],
    exploring: ['Scientific ML', 'Data visualisation'],
  },
  {
    code: 'A03',
    title: 'Robotics & prototyping',
    summary: 'Connecting physical reasoning, iterative testing, and reliable system behaviour.',
    used: ['Robotics', 'Rapid prototyping', 'System testing', 'Team integration'],
    exploring: ['Embedded systems', 'Computer vision'],
  },
  {
    code: 'A04',
    title: 'Tools & delivery',
    summary: 'Making work reproducible, reviewable, and available beyond my own laptop.',
    used: ['Git', 'GitHub', 'Vercel', 'Technical documentation'],
    exploring: ['CI workflows', 'Open-source practice'],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
