// ==================[ about image ]================== //
export const about_image = "/images/about2.png";
//

// ==================[ How do I work ]================== //
export const how_do_i_work = {
  en: [
    "I build practical digital solutions with a strong focus on clarity, performance, and real business needs.",
    "My work usually combines infrastructure, web development, and process automation — from planning and design to implementation and continuous improvement.",
  ],
  ru: [
    "Я создаю практичные цифровые решения с упором на ясность, производительность и реальные задачи бизнеса.",
    "Моя работа обычно объединяет инфраструктуру, веб-разработку и автоматизацию процессов — от планирования и проектирования до внедрения и дальнейшего развития.",
  ],
} as const;
export const titles = {
  about: {
    en: "About",
    ru: "обо",
  },
  me: {
    en: "me",
    ru: "мне",
  },
  how: {
    en: "How",
    ru: "Как",
  },
  do_i_work: {
    en: "do I work",
    ru: "я работаю",
  },
  my: {
    en: "My",
    ru: "Мои",
  },
  skills: {
    en: "skills",
    ru: "навыки",
  },
  my2:{
    en: "My",
    ru: "Мой",
  },
  tech_stack: {
    en: "Tech Stack",
    ru: "технический стек",
  },
  experience: {
    en: "experience",
    ru: "опыт",
  },
  my_projects: {
    en: "My projects",
    ru: "Мои проекты",
  },
  my_clients: {
    en: "My clients",
    ru: "Мои клиенты",
  },
  available_for_work: {
    en: "available for work",
    ru: "доступен для работы",
  },
}
//

// ==================[ Stack ]================== //
export const tool_images = [
  // 1
  "/images/icons/typescript.svg",
  // 2
  "/images/icons/react.svg",
  // 3
  "/images/icons/nextjs.svg",
  // 4
  "/images/icons/nodejs.svg",
  // 5
  "/images/icons/nestjs.svg",
  "/images/icons/expo.svg",

  // 6
  "/images/icons/tailwindcss.svg",
  // 7
  "/images/icons/postgressql.svg",
  // 8
  "/images/icons/mysql.svg",
  // 9

  // 10
  "/images/icons/php.svg",
  // 11
  "/images/icons/laravel.svg",
  // 12
  "/images/icons/wordpress2.svg",
  "/images/icons/swagger.svg",
  // 10
  "/images/icons/firebase.svg",

  // 11
  "/images/icons/aws.svg",
  "/images/icons/vercel.svg",
  // 15  
  "/images/icons/github.svg",
  // 16
  "/images/icons/jira.svg",

] as const;
//

// ==================[ Skills ]================== //
export const skills = [
  {
    skill: {
      en: "Frontend Development",
      ru: "Frontend-разработка",
    },
    progress: 100,
  },
  {
    skill: {
      en: "Backend Development",
      ru: "Backend-разработка",
    },
    progress: 100,
  },
  {
    skill: {
      en: "Problem Solving",
      ru: "Решение проблем",
    },
    progress: 100,
  },
  {
    skill: {
      en: "Communication",
      ru: "Коммуникация",
    },
    progress: 100,
  },
  {
    skill: {
      en: "Automation & Systems",
      ru: "Автоматизация и системы",
    },
    progress: 100,
  },
  {
    skill: {
      en: "Database Management",
      ru: "Работа с базами данных",
    },
    progress: 100,
  },
] as const;
//

// ==================[ Cv file ]================== //
export const cv = {
  source: "/cv.pdf", // if you don't have just leave source: ""
  file_type: "pdf",
};
//

// ==================[ Experience ]================== //
export const experience = [
  {
    event: {
      en: "IT Engineer / Fullstack Developer",
      ru: "Инженер ИТ / Fullstack-разработчик",
    },
    location: {
      en: "MEC LLC, Russia",
      ru: "ООО «МЭК», Россия",
    },
    years: "2026 - Present",
  },
  {
    event: {
      en: "Fullstack Developer",
      ru: "Fullstack-разработчик",
    },
    location: {
      en: "Pansionisidelki, Russia",
      ru: "Pansionisidelki, Россия",
    },
    years: "2025 - 2026",
  },
  {
    event: {
      en: "Fullstack Developer",
      ru: "Fullstack-разработчик",
    },
    location: {
      en: "Lemsa Innovation, Turkey",
      ru: "Lemsa Innovation, Турция",
    },
    years: "2021 - 2025",
  },
  {
    event: {
      en: "Frontend Developer",
      ru: "Frontend-разработчик",
    },
    location: {
      en: "System Solution Teknoloji, Turkey",
      ru: "System Solution Teknoloji, Турция",
    },
    years: "2019 - 2021",
  },
  {
    event: {
      en: "Master’s Degree in Information Technology",
      ru: "Степень магистра в области информационных технологий",
    },
    location: {
      en: "Bahçeşehir University, Turkey",
      ru: "Университет Бахчешехир, Турция",
    },
    years: "2021",
  },
];
//

// ==================[ Achievements ]================== //
export const achievements = [
  {
    title: {
      en: "projects",
      ru: "проекты",
    },
    count: "10+",
  },
  {
    title: {
      en: "years of experience",
      ru: "лет опыта",
    },
    count: "6+",
  },
  {
    title: {
      en: "countries worked in",
      ru: "страны работы",
    },
    count: "3",
  },
] as const;
//

// ==================[ What's Client says ]================== //
export const average_rating = 4.9;

export const clients = [
  {
    name: "Corporate Client",
    image: "/images/clients/1.jpg",
    rate: 5,
    role: {
      en: "Business client",
      ru: "Бизнес-клиент",
    },
    comment: {
      en: "Reliable, fast, and highly professional. The work was delivered with strong technical understanding and clear communication.",
      ru: "Надёжно, быстро и профессионально. Работа была выполнена с глубоким техническим пониманием и чёткой коммуникацией.",
    },
  },
  {
    name: "Project Manager",
    image: "/images/clients/2.jpg",
    rate: 4.9,
    role: {
      en: "Project manager",
      ru: "Руководитель проекта",
    },
    comment: {
      en: "He quickly understands business requirements and turns them into practical, scalable solutions.",
      ru: "Он быстро понимает бизнес-требования и превращает их в практичные и масштабируемые решения.",
    },
  },
  {
    name: "Startup Founder",
    image: "/images/clients/3.jpg",
    rate: 5,
    role: {
      en: "Startup founder",
      ru: "Основатель стартапа",
    },
    comment: {
      en: "A strong fullstack developer with a good eye for structure, performance, and long-term maintainability.",
      ru: "Сильный fullstack-разработчик с хорошим пониманием структуры, производительности и долгосрочной поддержки проекта.",
    },
  },
  {
    name: "Operations Lead",
    image: "",
    rate: 4.8,
    role: {
      en: "Operations lead",
      ru: "Руководитель операционного направления",
    },
    comment: {
      en: "Helped improve internal processes and automate routine work, which saved time for the whole team.",
      ru: "Помог улучшить внутренние процессы и автоматизировать рутинную работу, что сэкономило время всей команде.",
    },
  },
  {
    name: "Design Partner",
    image: "/images/clients/4.jpg",
    rate: 4.8,
    role: {
      en: "UI/UX collaborator",
      ru: "Партнёр по UI/UX",
    },
    comment: {
      en: "Very easy to work with. Clean implementation, thoughtful details, and strong ownership of the final result.",
      ru: "С ним очень легко работать. Чистая реализация, внимание к деталям и высокая ответственность за конечный результат.",
    },
  },
] as const;