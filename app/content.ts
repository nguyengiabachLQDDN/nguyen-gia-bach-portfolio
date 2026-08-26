import type { Locale } from './i18n';

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

const projectCopy: Record<Locale, ProjectCopyList> = {
  en: [
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
  ],
  vi: [
    {
      title: 'JWST Deep Space Explorer',
      label: 'NASA Space Apps 2025 · Đề cử Toàn cầu',
      date: 'Tháng 10, 2025',
      role: 'Trưởng nhóm & Lập trình viên',
      summary: 'Nền tảng khoa học công dân tương tác, giúp người dùng khám phá những ảnh khổng lồ từ Kính viễn vọng Không gian James Webb ngay trên trình duyệt thông thường.',
      challenge: 'Thử thách “Embiggen Your Eyes!” của NASA yêu cầu các đội đưa những ảnh thiên văn cực lớn đến gần hơn với công chúng. Dữ liệu thô có thể lên tới hàng trăm gigabyte—vượt xa khả năng tải xuống và quan sát thuận tiện của phần lớn người học.',
      approach: 'Chúng tôi xem mỗi quan sát vừa là dữ liệu khoa học, vừa là một không gian có thể khám phá. Pipeline Python xử lý ảnh, còn giao diện bản đồ trên trình duyệt cho phép người dùng phóng to từng chi tiết và đóng góp các quan sát có cấu trúc.',
      contributions: [
        'Dẫn dắt phạm vi, thứ tự ưu tiên và tiến độ hoàn thiện của đội trong hackathon 48 giờ.',
        'Phát triển quy trình xử lý dữ liệu khoa học bằng Python và Astropy.',
        'Thiết kế trình xem ảnh dạng tile bằng Leaflet.js để khám phá ảnh siêu lớn một cách mượt mà.',
        'Tích hợp quy trình gắn nhãn có AI hỗ trợ để thúc đẩy sự tham gia của cộng đồng vào khoa học công dân.',
      ],
      decisions: [
        { title: 'Chia tile thay vì tải toàn bộ', description: 'Chỉ tải mức chi tiết cần thiết ở độ phóng hiện tại, thay vì buộc người dùng tải toàn bộ tệp khoa học có độ phân giải đầy đủ.' },
        { title: 'Tách xử lý khoa học khỏi giao diện', description: 'Giữ phần chuẩn bị dữ liệu trong pipeline Python và trải nghiệm khám phá trên trình duyệt để mỗi lớp tập trung đúng nhiệm vụ.' },
        { title: 'Biến quan sát thành sự tham gia', description: 'Biến việc xem thụ động thành quan sát và gắn nhãn, tạo cầu nối từ sự tò mò của công chúng đến khoa học công dân.' },
      ],
      outcomes: [
        'Được chọn vào hơn 1.290 Đề cử Toàn cầu từ hơn 11.500 dự án trên toàn thế giới.',
        'Hoàn thiện một trải nghiệm dữ liệu khoa học hoạt động được trong thời gian 48 giờ của sự kiện.',
        'Được Trường THPT Chuyên Lê Quý Đôn ghi nhận là một thành tích nổi bật của học sinh.',
      ],
      lessons: 'Giải pháp kỹ thuật hiệu quả nhất không phải là giản lược khoa học, mà là thay đổi cách dữ liệu đến trình duyệt. Kiến trúc rõ ràng giúp một ý tưởng tham vọng trở nên khả thi dưới giới hạn khắt khe về thời gian và kết nối.',
      stack: ['Python', 'Astropy', 'Leaflet.js', 'JavaScript', 'Gắn nhãn có AI hỗ trợ', 'Ảnh khoa học'],
      linkLabels: ['Xem mã nguồn', 'Xem bằng chứng'],
      cover: { alt: 'Vị trí dành cho ảnh bìa giao diện JWST Deep Space Explorer.', caption: 'Trình khám phá ảnh không gian sâu dạng tile khi hoạt động.' },
      gallery: [
        { alt: 'Vị trí dành cho ảnh trình xem JWST dạng tile và quy trình gắn nhãn khoa học công dân.', caption: 'Xem ảnh dạng tile trên trình duyệt và gắn nhãn có AI hỗ trợ.' },
        { alt: 'Vị trí dành cho ảnh quy trình xử lý ảnh khoa học bằng Python và Astropy.', caption: 'Pipeline dữ liệu khoa học từ ảnh nguồn đến các tile sẵn sàng cho trình duyệt.' },
      ],
    },
    {
      title: 'AstroVerse',
      label: 'Nền tảng học thiên văn',
      date: '2026',
      role: 'Nhà phát triển sản phẩm',
      summary: 'Nền tảng học thiên văn để quan sát bầu trời, khám phá dữ liệu không gian, thực hiện thí nghiệm và ghi lại quá trình học khoa học.',
      challenge: 'Tài nguyên thiên văn thường bị chia tách giữa bài đọc thụ động, công cụ chuyên biệt và các bài kiểm tra rời rạc. Mục tiêu là kết nối khám phá, thử nghiệm và phản tư thành một hành trình học tập liên tục.',
      approach: 'AstroVerse tổ chức trải nghiệm thành năm chế độ: Quan sát qua bản đồ bầu trời tương tác, Khám phá nội dung thiên văn đã kiểm chứng, Thử nghiệm trong phòng lab ngoại hành tinh có thể ở được, Ghi nhớ bằng lặp lại ngắt quãng và Phản tư trong nhật ký khoa học riêng tư.',
      contributions: [
        'Phát triển bản đồ bầu trời tương tác với điều khiển thời gian, hành trình có hướng dẫn và bảy góc nhìn bầu trời theo văn hóa.',
        'Kết nối dữ liệu NASA APOD và ảnh Sao Hỏa với nguồn được hiển thị rõ ràng.',
        'Xây dựng phòng lab ngoại hành tinh với phản hồi vật lý theo thời gian thực và chấm điểm nhiệm vụ.',
        'Thiết kế ôn tập lặp lại ngắt quãng và nhật ký đánh giá phương pháp khoa học thay vì chỉ chấm đúng hoặc sai.',
      ],
      decisions: [
        { title: 'Một vòng lặp học tập', description: 'Kết nối quan sát, giải thích, thử nghiệm, ghi nhớ và phản tư thay vì biến chúng thành những trang rời rạc.' },
        { title: 'Bằng chứng quan trọng hơn chuỗi ngày', description: 'Đánh giá giả thuyết, quan sát, kết luận và bước tiếp theo—không chỉ đếm lượt nhấp hay bài kiểm tra hoàn thành.' },
        { title: 'Riêng tư theo mặc định', description: 'Lưu nhật ký và tiến độ trên thiết bị của người học, cho phép luyện tập mà không cần tài khoản hay hồ sơ trên máy chủ.' },
      ],
      outcomes: [
        'Phát hành một sản phẩm học thiên văn nhiều mô-đun đang hoạt động.',
        'Kết hợp nguồn khoa học thực với mô phỏng tương tác và công cụ chủ động ghi nhớ.',
        'Tạo luồng portfolio biến mỗi phiên học thành bằng chứng sẵn sàng để nhận phản hồi.',
      ],
      lessons: 'Một tính năng trở nên hữu ích hơn khi dẫn người học tự nhiên đến hành động tiếp theo. Dự án giúp tôi học cách thiết kế hệ thống xoay quanh vòng lặp học tập, thay vì một danh sách màn hình cần hoàn thành.',
      stack: ['React', 'TypeScript', 'Vite', 'Dữ liệu NASA', 'Mô hình hóa khoa học', 'Vercel'],
      linkLabels: ['Mở sản phẩm'],
      cover: { alt: 'Vị trí dành cho ảnh bìa nền tảng học thiên văn AstroVerse.', caption: 'AstroVerse kết nối quan sát, thử nghiệm, ghi nhớ và phản tư.' },
      gallery: [
        { alt: 'Vị trí dành cho ảnh bản đồ bầu trời tương tác của AstroVerse.', caption: 'Bản đồ bầu trời tương tác với các hành trình quan sát có hướng dẫn.' },
        { alt: 'Vị trí dành cho ảnh phòng lab ngoại hành tinh có thể ở được của AstroVerse.', caption: 'Phòng lab ngoại hành tinh với phản hồi vật lý theo thời gian thực.' },
      ],
    },
    {
      title: 'Dự án eSight',
      label: 'Dự án robotics học sinh',
      date: 'Đang phát triển',
      role: 'Trưởng dự án · Trưởng nhóm Robotics',
      summary: 'Dự án robotics do học sinh dẫn dắt, biến ý tưởng vật lý thành nguyên mẫu hoạt động qua thử nghiệm lặp và phối hợp kỹ thuật.',
      challenge: 'Hệ thống vật lý gặp những lỗi mà mô hình phần mềm không thể hiện: cảm biến bị trôi, các cơ cấu tác động lẫn nhau và mỗi thay đổi đều ảnh hưởng đến phần còn lại. Công việc đòi hỏi cả phán đoán kỹ thuật lẫn một quy trình đội nhóm có thể tiến nhanh.',
      approach: 'Chia hệ thống thành các mô-đun có thể kiểm thử, xác định hành vi mỗi mô-đun cần chứng minh, rồi chỉ tích hợp khi bằng chứng đã rõ ràng. Giới hạn của cuộc thi khiến tốc độ lặp thử và giao tiếp quan trọng không kém cơ cấu cuối cùng.',
      contributions: [
        'Dẫn dắt dự án học sinh eSight và điều phối định hướng kỹ thuật trong toàn đội.',
        'Dẫn dắt đội đạt Giải Ba tại cuộc thi Maze Runner do FAST, Trường Đại học Bách khoa – Đại học Đà Nẵng tổ chức.',
        'Vận dụng tư duy vật lý vào hành vi nguyên mẫu, kiểm thử và xử lý sự cố.',
        'Xây dựng nhịp làm việc lặp lại rõ ràng để phân chia nhiệm vụ, xem xét thất bại và tích hợp thay đổi.',
      ],
      decisions: [
        { title: 'Kiểm thử mô-đun trước', description: 'Chứng minh từng hành vi trước khi tích hợp để khi lỗi xảy ra, phạm vi tìm kiếm nhỏ hơn và dễ hiểu hơn.' },
        { title: 'Xem thất bại là dữ liệu', description: 'Ghi lại điều đã thay đổi, phản ứng của hệ thống và yếu tố cần cô lập ở lần thử tiếp theo, thay vì điều chỉnh không có dấu vết.' },
        { title: 'Thiết kế cho cả đội', description: 'Xác định quyền sở hữu và giao diện rõ ràng để công việc cơ khí, điện và phần mềm có thể tiến triển mà không cản trở lẫn nhau.' },
      ],
      outcomes: [
        'Giải Ba tại cuộc thi FAST Maze Runner.',
        'Ba nhiệm kỳ liên tiếp trong Ban Kỹ thuật của Câu lạc bộ Vật lý PIRL.',
        'Năng lực thực hành kỹ thuật ngày càng phát triển trên phần mềm, vật lý và hệ thống vật lý.',
      ],
      lessons: 'Robotics khiến sự bất định trở nên hữu hình. Tiến bộ đến từ việc đặt ra những giả định nhỏ hơn, kiểm thử nhanh và cung cấp đủ bối cảnh để mỗi thành viên đưa ra quyết định tiếp theo một cách tốt nhất.',
      stack: ['Robotics', 'Tạo mẫu nhanh', 'Vật lý', 'Kiểm thử hệ thống', 'Lãnh đạo đội nhóm'],
      linkLabels: ['Truy cập eSight'],
      cover: { alt: 'Vị trí dành cho ảnh bìa eSight và hoạt động robotics của học sinh.', caption: 'Nguyên mẫu robotics do học sinh dẫn dắt trong giai đoạn tích hợp và kiểm thử.' },
      gallery: [
        { alt: 'Vị trí dành cho ảnh kiểm thử mô-đun và tạo mẫu robotics.', caption: 'Kiểm thử từng hành vi vật lý trước khi tích hợp.' },
        { alt: 'Vị trí dành cho ảnh đội robotics Maze Runner và kết quả cuộc thi.', caption: 'Kỹ thuật đội nhóm dưới các giới hạn của cuộc thi.' },
      ],
    },
  ],
};

const achievementsByLocale: Record<Locale, AchievementList> = {
  en: [
    { year: '2026', title: 'Second Prize · RMIT Tech Camp', context: 'Team Lead', description: 'Led a team from problem framing to a competition-ready technical solution.', image: { alt: 'Reserved image for the RMIT Tech Camp Second Prize achievement.' } },
    { year: '2025', title: 'Global Nominee · NASA Space Apps Challenge', context: 'JWST Deep Space Explorer', description: 'Selected among 1,290+ Global Nominees from more than 11,500 worldwide projects.', evidence: 'https://lqddn.edu.vn/tin-tuc/hoc-sinh-nguyen-gia-bach-xuat-sac-lot-vao-danh-sach-de-cu-toan-cau-tai-cuoc-thi-nasa-space-apps-challenge-2025', image: { alt: 'Reserved image for the NASA Space Apps Global Nominee recognition.' } },
    { year: '2024', title: 'Second Prize · Da Nang City Physics Competition', context: 'Physics', description: 'Recognised at city level in the Excellent Student Competition in Physics.', image: { alt: 'Reserved image for the Da Nang City Physics Competition Second Prize.' } },
    { year: 'STEM', title: 'Third Prize · FAST Maze Runner', context: 'Robotics Team Lead', description: 'Led the team in a robotics challenge organised by FAST, University of Science and Technology – UD.', image: { alt: 'Reserved image for the FAST Maze Runner Third Prize.' } },
    { year: '25–26', title: 'Third Prize · School Science & Engineering Fair', context: 'Research & Engineering', description: 'Developed and presented a technical project through the school-level research process.', image: { alt: 'Reserved image for the School Science and Engineering Fair Third Prize.' } },
  ],
  vi: [
    { year: '2026', title: 'Giải Nhì · RMIT Tech Camp', context: 'Trưởng nhóm', description: 'Dẫn dắt đội từ xác định vấn đề đến một giải pháp kỹ thuật sẵn sàng cho cuộc thi.', image: { alt: 'Vị trí dành cho ảnh thành tích Giải Nhì RMIT Tech Camp.' } },
    { year: '2025', title: 'Đề cử Toàn cầu · NASA Space Apps Challenge', context: 'JWST Deep Space Explorer', description: 'Được chọn vào hơn 1.290 Đề cử Toàn cầu từ hơn 11.500 dự án trên thế giới.', evidence: 'https://lqddn.edu.vn/tin-tuc/hoc-sinh-nguyen-gia-bach-xuat-sac-lot-vao-danh-sach-de-cu-toan-cau-tai-cuoc-thi-nasa-space-apps-challenge-2025', image: { alt: 'Vị trí dành cho ảnh ghi nhận Đề cử Toàn cầu NASA Space Apps.' } },
    { year: '2024', title: 'Giải Nhì · Kỳ thi Vật lý cấp Thành phố Đà Nẵng', context: 'Vật lý', description: 'Đạt thành tích cấp thành phố trong Kỳ thi Học sinh Giỏi môn Vật lý.', image: { alt: 'Vị trí dành cho ảnh Giải Nhì Kỳ thi Vật lý cấp Thành phố Đà Nẵng.' } },
    { year: 'STEM', title: 'Giải Ba · FAST Maze Runner', context: 'Trưởng nhóm Robotics', description: 'Dẫn dắt đội trong thử thách robotics do FAST, Trường Đại học Bách khoa – Đại học Đà Nẵng tổ chức.', image: { alt: 'Vị trí dành cho ảnh Giải Ba FAST Maze Runner.' } },
    { year: '25–26', title: 'Giải Ba · Hội thi Khoa học & Kỹ thuật cấp Trường', context: 'Nghiên cứu & Kỹ thuật', description: 'Phát triển và trình bày một dự án kỹ thuật theo quy trình nghiên cứu cấp trường.', image: { alt: 'Vị trí dành cho ảnh Giải Ba Hội thi Khoa học và Kỹ thuật cấp Trường.' } },
  ],
};

const skillGroupsByLocale: Record<Locale, SkillGroupList> = {
  en: [
    { code: 'A01', title: 'Software engineering', summary: 'Building clear, interactive products from first interface to deployment.', used: ['Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'React', 'Vite'], exploring: ['Deeper testing', 'System design'] },
    { code: 'A02', title: 'Scientific computing & data', summary: 'Turning scientific sources and models into tools people can question and explore.', used: ['Astropy', 'NASA data', 'Leaflet.js', 'APIs', 'Scientific imaging'], exploring: ['Scientific ML', 'Data visualisation'] },
    { code: 'A03', title: 'Robotics & prototyping', summary: 'Connecting physical reasoning, iterative testing, and reliable system behaviour.', used: ['Robotics', 'Rapid prototyping', 'System testing', 'Team integration'], exploring: ['Embedded systems', 'Computer vision'] },
    { code: 'A04', title: 'Tools & delivery', summary: 'Making work reproducible, reviewable, and available beyond my own laptop.', used: ['Git', 'GitHub', 'Vercel', 'Technical documentation'], exploring: ['CI workflows', 'Open-source practice'] },
  ],
  vi: [
    { code: 'A01', title: 'Kỹ thuật phần mềm', summary: 'Xây dựng sản phẩm rõ ràng và tương tác từ giao diện đầu tiên đến triển khai.', used: ['Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'React', 'Vite'], exploring: ['Kiểm thử chuyên sâu', 'Thiết kế hệ thống'] },
    { code: 'A02', title: 'Tính toán khoa học & dữ liệu', summary: 'Biến nguồn dữ liệu và mô hình khoa học thành công cụ để mọi người đặt câu hỏi và khám phá.', used: ['Astropy', 'Dữ liệu NASA', 'Leaflet.js', 'API', 'Ảnh khoa học'], exploring: ['Machine learning khoa học', 'Trực quan hóa dữ liệu'] },
    { code: 'A03', title: 'Robotics & tạo mẫu', summary: 'Kết nối tư duy vật lý, kiểm thử lặp và hành vi hệ thống đáng tin cậy.', used: ['Robotics', 'Tạo mẫu nhanh', 'Kiểm thử hệ thống', 'Tích hợp đội nhóm'], exploring: ['Hệ thống nhúng', 'Thị giác máy tính'] },
    { code: 'A04', title: 'Công cụ & triển khai', summary: 'Giúp sản phẩm có thể tái lập, xem xét và sử dụng ngoài máy tính cá nhân.', used: ['Git', 'GitHub', 'Vercel', 'Tài liệu kỹ thuật'], exploring: ['Quy trình CI', 'Thực hành mã nguồn mở'] },
  ],
};

export function getProjects(locale: Locale): Project[] {
  return projectBases.map((base, index) => {
    const copy = projectCopy[locale][index];
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

export function getFeaturedProjects(locale: Locale): Project[] {
  const projects = getProjects(locale);
  return featuredProjectSlugs.map((slug) => {
    const project = projects.find((item) => item.slug === slug);
    if (!project) throw new Error(`Missing featured project: ${slug}`);
    return project;
  });
}

export function getProject(slug: string, locale: Locale): Project | undefined {
  return getProjects(locale).find((project) => project.slug === slug);
}

export function getAchievements(locale: Locale): Achievement[] {
  return achievementsByLocale[locale];
}

export function getSkillGroups(locale: Locale): SkillGroup[] {
  return skillGroupsByLocale[locale];
}

export const projectSlugs = projectBases.map((project) => project.slug);
