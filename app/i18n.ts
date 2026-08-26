export type Locale = 'en' | 'vi';

export type LocalizedString = Record<Locale, string>;

export const navigation = {
  work: { en: 'Work', vi: 'Dự án' },
  capabilities: { en: 'Capabilities', vi: 'Năng lực' },
  achievements: { en: 'Achievements', vi: 'Thành tích' },
  about: { en: 'About', vi: 'Giới thiệu' },
  contact: { en: 'Contact', vi: 'Liên hệ' },
} satisfies Record<string, LocalizedString>;

// TODO(profile): Add the final project-working portrait, current grade / expected
// graduation year, a professional email, and a more specific intended field once confirmed.
const heroImageSrc: string | undefined = undefined;

export const homeIntro = {
  en: {
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
  },
  vi: {
    eyebrow: 'Hồ sơ cá nhân',
    name: 'Nguyễn Gia Bách',
    role: 'Học sinh kỹ thuật · Vật lý, phần mềm & robotics',
    summary: 'Tôi xây dựng công cụ thiên văn, phần mềm khoa học và các nguyên mẫu robotics.',
    facts: [
      ['Trường', 'THPT Chuyên Lê Quý Đôn'],
      ['Địa điểm', 'Đà Nẵng, Việt Nam'],
      ['Lĩnh vực', 'Vật lý · Phần mềm · Robotics'],
    ],
    image: {
      src: heroImageSrc,
      alt: 'Nguyễn Gia Bách đang thực hiện một dự án kỹ thuật học sinh',
    },
    imageLabel: 'Ảnh dự án',
    work: 'Xem dự án',
    contact: 'Liên hệ',
    socialLabel: 'Hồ sơ trực tuyến',
  },
} as const;

export function localeHome(locale: Locale) {
  return locale === 'vi' ? '/vi' : '/';
}

export function switchLocalePath(pathname: string, target: Locale) {
  if (target === 'vi') {
    if (pathname === '/vi' || pathname.startsWith('/vi/')) return pathname;
    return pathname === '/' ? '/vi' : `/vi${pathname}`;
  }

  if (pathname === '/vi') return '/';
  if (pathname.startsWith('/vi/')) return pathname.slice(3) || '/';
  return pathname;
}

interface HomeCopy {
  signalLabel: string;
  signalItems: Array<[string, string]>;
  workIndex: string;
  workTitle: string;
  workDeck: string;
  openCaseStudy: string;
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

export const homeCopy: Record<Locale, HomeCopy> = {
  en: {
    signalLabel: 'Selected facts',
    signalItems: [['NASA 2025', 'Global Nominee'], ['48H', 'JWST build'], ['03', 'PIRL cohorts']],
    workIndex: '01 / Selected work',
    workTitle: 'Systems made to be explored.',
    workDeck: 'Three projects, each showing a different way I connect science, software, and physical engineering.',
    openCaseStudy: 'Open case study',
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
  },
  vi: {
    signalLabel: 'Một vài dấu mốc',
    signalItems: [['NASA 2025', 'Đề cử Toàn cầu'], ['48H', 'Xây dựng JWST'], ['03', 'Nhiệm kỳ PIRL']],
    workIndex: '01 / Dự án tiêu biểu',
    workTitle: 'Những hệ thống được tạo ra để khám phá.',
    workDeck: 'Ba dự án thể hiện ba cách khác nhau để tôi kết nối khoa học, phần mềm và kỹ thuật vật lý.',
    openCaseStudy: 'Xem case study',
    capabilitiesIndex: '02 / Năng lực',
    capabilitiesTitle: 'Cách tôi biến ý tưởng thành hệ thống hoạt động được.',
    capabilitiesDeck: 'Được tổ chức theo năng lực thực tế—không phải một bức tường logo công nghệ.',
    usedInProjects: 'Đã dùng trong dự án',
    exploringNext: 'Đang học tiếp',
    achievementsIndex: '03 / Bằng chứng',
    achievementsTitle: 'Thành tích được xây dựng từ quá trình làm việc.',
    achievementsDeck: 'Ghi lại ngắn gọn các cuộc thi, đề cử và trải nghiệm nghiên cứu.',
    evidence: 'Bằng chứng ↗',
    evidenceFor: 'Bằng chứng cho',
    recordedAchievement: 'Thành tích đã ghi nhận',
    aboutIndex: '04 / Giới thiệu',
    aboutTitle: 'Tò mò là điểm bắt đầu. Kiến tạo là cách tôi kiểm chứng.',
    aboutBio: 'Tôi là Nguyễn Gia Bách, học sinh Trường THPT Chuyên Lê Quý Đôn tại Đà Nẵng. Vật lý dạy tôi đặt những câu hỏi chính xác; lập trình cho tôi cách biến các câu hỏi đó thành công cụ; robotics buộc tôi kiểm chứng mọi giả định trong thế giới vật lý. Tôi thích xây dựng những sản phẩm giúp mọi người khám phá các ý tưởng khó—từ ảnh không gian sâu và mô phỏng thiên văn đến nguyên mẫu do học sinh dẫn dắt. Hiện tôi đang phát triển sâu hơn về tính toán khoa học, kỹ thuật sản phẩm và hệ thống nhúng, đồng thời tìm kiếm những đội STEM giàu tham vọng và những vấn đề xứng đáng để học hỏi.',
    aboutNote: 'Những dự án tôi yêu thích nhất nằm ở giao điểm: có nền tảng khoa học, đủ thách thức về kỹ thuật và đủ rõ ràng để người khác sử dụng.',
    education: 'Học vấn',
    school: 'Trường THPT Chuyên Lê Quý Đôn',
    schoolLocation: 'Đà Nẵng, Việt Nam',
    focus: 'Trọng tâm',
    focusValue: 'Vật lý · STEM',
    interests: 'Quan tâm',
    interestsValue: 'Phần mềm khoa học · Robotics',
    leadershipIndex: '05 / Lãnh đạo',
    leadershipTitle: 'Kỹ thuật là một môn thể thao đồng đội.',
    leadership: [
      { number: 'L01', title: 'Trưởng dự án eSight', copy: 'Dẫn dắt một dự án kỹ thuật học sinh từ xác định vấn đề đến tạo mẫu, kiểm thử và tích hợp đội nhóm.' },
      { number: 'L02', title: 'Ban Kỹ thuật PIRL', copy: 'Đóng góp công việc kỹ thuật trong ba nhiệm kỳ liên tiếp của câu lạc bộ vật lý tại trường — Thế hệ 4, 5 và 6.' },
      { number: 'L03', title: 'Trưởng nhóm thi đấu', copy: 'Điều phối các đội nhỏ dưới áp lực thời gian tại NASA Space Apps, RMIT Tech Camp và các thử thách robotics.' },
    ],
    programs: 'Chương trình & chứng nhận',
    credentials: [['2026', 'Fulbright STEM Mentorship'], ['07.25', 'Google Developer Groups Codelab'], ['08.25', 'Google Developer Groups Vibecoding']],
    contactEyebrow: 'Kênh kết nối / 06',
    contactTitle: 'Bạn có một vấn đề đáng để khám phá?',
    contactDeck: 'Tôi sẵn sàng tham gia nghiên cứu học sinh, chương trình STEM, hackathon và các cơ hội công nghệ sớm.',
    footerTagline: 'Được xây dựng từ những nguyên lý gốc tại Đà Nẵng.',
    backToTop: 'Trở lại quỹ đạo ↑',
    projectTechnologies: 'công nghệ',
  },
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

export const caseCopy: Record<Locale, CaseCopy> = {
  en: {
    selectedWork: 'Selected work', role: 'Role', when: 'When', mode: 'Mode', physicalSystems: 'Physical systems', digitalProduct: 'Digital product',
    contextIndex: '01 / Context', problem: 'The problem', approach: 'Approach', contributionIndex: '02 / Contribution', contributionTitle: 'What I contributed',
    decisionsIndex: '03 / Decisions', decisionsTitle: 'Technical decisions', galleryIndex: '04 / Project gallery', galleryTitle: 'Evidence, interfaces, and process.',
    evidenceIndex: '05 / Evidence', outcome: 'Outcome', lesson: 'What changed in my thinking', stack: 'System stack', nextSystem: 'Next system', frame: 'Frame',
  },
  vi: {
    selectedWork: 'Dự án tiêu biểu', role: 'Vai trò', when: 'Thời gian', mode: 'Loại dự án', physicalSystems: 'Hệ thống vật lý', digitalProduct: 'Sản phẩm số',
    contextIndex: '01 / Bối cảnh', problem: 'Vấn đề', approach: 'Cách tiếp cận', contributionIndex: '02 / Đóng góp', contributionTitle: 'Những gì tôi đã đóng góp',
    decisionsIndex: '03 / Quyết định', decisionsTitle: 'Các quyết định kỹ thuật', galleryIndex: '04 / Thư viện dự án', galleryTitle: 'Bằng chứng, giao diện và quá trình.',
    evidenceIndex: '05 / Bằng chứng', outcome: 'Kết quả', lesson: 'Điều đã thay đổi trong tư duy của tôi', stack: 'Công nghệ hệ thống', nextSystem: 'Dự án tiếp theo', frame: 'Khung',
  },
};

export const mediaComingSoon: Record<Locale, string> = {
  en: 'Image coming soon',
  vi: 'Hình ảnh sẽ được cập nhật',
};

export const notFoundCopy = {
  en: { eyebrow: 'Error / 404', title: 'Signal lost.', message: 'This coordinate does not exist in the current observation map.', action: 'Return home' },
  vi: { eyebrow: 'Lỗi / 404', title: 'Mất tín hiệu.', message: 'Tọa độ này không tồn tại trong bản đồ quan sát hiện tại.', action: 'Về trang chủ' },
} satisfies Record<Locale, { eyebrow: string; title: string; message: string; action: string }>;

export const metadataCopy = {
  en: {
    title: 'Nguyen Gia Bach — Student Engineer',
    description: 'Portfolio of Nguyen Gia Bach, a student engineer working across physics, scientific software, astronomy, and robotics.',
    shortDescription: 'Physics · Software · Robotics',
    imageAlt: 'Nguyen Gia Bach — Physics, Software, Robotics',
    personDescription: 'Student engineer working across physics, software, and robotics.',
    school: 'Le Quy Don High School for the Gifted, Da Nang',
  },
  vi: {
    title: 'Nguyen Gia Bach — Học sinh kỹ thuật',
    description: 'Portfolio của Nguyễn Gia Bách, một học sinh kỹ thuật theo đuổi vật lý, phần mềm khoa học, thiên văn và robotics.',
    shortDescription: 'Vật lý · Phần mềm · Robotics',
    imageAlt: 'Nguyen Gia Bach — Vật lý, Phần mềm, Robotics',
    personDescription: 'Học sinh kỹ thuật hoạt động tại giao điểm của vật lý, phần mềm và robotics.',
    school: 'Trường THPT Chuyên Lê Quý Đôn, Đà Nẵng',
  },
} satisfies Record<Locale, { title: string; description: string; shortDescription: string; imageAlt: string; personDescription: string; school: string }>;

export function projectPath(locale: Locale, slug: string) {
  return `${locale === 'vi' ? '/vi' : ''}/projects/${slug}`;
}
