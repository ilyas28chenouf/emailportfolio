// ==================[ Projects ]================== //
// note cols works in cards variant only
export const projects = [
  // 1
  {
    title: "Qiwash",
    description: {
      en: "A web and mobile application that connects users with cleaning service providers. It enables booking, service tracking, secure payments, and real-time communication, simplifying the process of finding and managing cleaning services.",
      ru: "Веб и Мобильное приложение для поиска и бронирования услуг уборки. Позволяет пользователям находить исполнителей, отслеживать заказы, оплачивать услуги и взаимодействовать с сервисом в режиме реального времени.",
    },
    whatIDid: {
      en: "Led the project team, designed the product interface in Figma, developed backend services with NestJS, and coordinated the mobile development process for Flutter applications.",
      ru: "Руководил командой проекта, разрабатывал дизайн продукта в Figma, создавал backend-сервисы на NestJS и координировал процесс мобильной разработки Flutter-приложений.",
    },
    image: "/images/projects/qiwash-mobile.png",
    tags: ["Team Leader", "front-end", "back-end", "Designer", "eCommerce"],
    tools: ["nestjs", "flutter", "postgressql" ,"Android", "Apple", "Firebase", "AWS", "Figma", "Stripe"],
    link: "https://client.qiwash.com/",
    figmaLink:"https://www.figma.com/design/mJcLdPDALeAEn2j0HJnBVt/My-Portfolio?node-id=170-5740&p=f&t=LXrCeZ9P0QAW6B4q-0",
    cols: 2,
  },
  // 2
  {
    title: "МЕГАПРОКАТ",
    description: {
      en: "An equipment rental platform with a large catalog of tools and machinery. The system allows users to browse, select, and request rental services, with additional features such as delivery options and customer interaction channels.",
      ru: "Платформа аренды инструментов и оборудования с большим каталогом. Пользователи могут просматривать, выбирать и оформлять аренду, а также пользоваться дополнительными функциями, такими как доставка и связь с менеджерами.",
    },
    whatIDid: {
      en: "Worked on both frontend and backend development, implemented platform functionality with WordPress and PHP, and supported business workflow integration.",
      ru: "Работал над frontend и backend частью проекта, реализовал функциональность платформы на WordPress и PHP, а также поддержал интеграцию бизнес-процессов.",
    },
    image: "/images/projects/megaprocat.png",
    tags: ["eCommerce", "front-end", "back-end"],
    tools: ["wordpress2", "php", "bitrix24"],
    link: "https://mega-prokat.com/",
    cols: 1,
  },

  // 3
  {
    title: "Beaty Safe",
    description: {
      en: "A mobile application that analyzes cosmetic products and provides users with safety insights based on ingredient data. It helps users make informed decisions about product usage.",
      ru: "Мобильное приложение для анализа косметических продуктов. Предоставляет информацию о безопасности ингредиентов и помогает пользователям принимать обоснованные решения.",
    },
    whatIDid: {
      en: "Designed the product interface in Figma and developed the application across mobile, web, and backend layers using React Native, Next.js, and NestJS.",
      ru: "Разработал дизайн продукта в Figma и реализовал приложение на мобильном, веб- и backend-уровнях с использованием React Native, Next.js и NestJS.",
    },
    image: "/images/projects/beautysafe.png",
    tags: ["Mobile developper", "Full stack", "Android"],
    tools: ["Expo", "NestJS", "nextjs", "postgressql", "TypeScript", "TailwindCSS",  "Figma"],
    link: "https://beautysafe.online/",
    figmaLink: "https://www.figma.com/design/mJcLdPDALeAEn2j0HJnBVt/My-Portfolio?node-id=137-820&p=f&t=LXrCeZ9P0QAW6B4q-0",
    cols: 1,
  },
  // 4

  {
    title: "пансионате «Высокая горка»",
    description: {
      en: "A corporate website for a senior care residence focused on presenting services, facilities, and living conditions. The platform highlights key information such as care services, accommodation, and daily activities, with an emphasis on clarity and accessibility for users.",
      ru: "Корпоративный сайт пансионата для пожилых людей, направленный на презентацию услуг, условий проживания и инфраструктуры. Платформа предоставляет ключевую информацию об уходе, размещении и повседневной жизни в удобном и понятном формате.",
    },
    whatIDid: {
      en: "Developed and customized the website backend using WordPress and PHP, and contributed to structuring the platform content and functionality.",
      ru: "Разработал и настроил backend сайта на WordPress и PHP, а также участвовал в построении структуры контента и функциональности платформы.",
    },
    image: "/images/projects/pansionatgorka.png",
    tags: ["Back-end", "e-commerce", "professional", "modern"],
    tools: ["wordpress2", "php"],
    link: "https://pansionatgorka.ru/",
    cols: 2,
  },

  // 5
  {
    title: "Пансионаты и сиделки",
    description: {
      en: "An informational platform designed to help users find and compare senior care facilities. It provides structured guidance, listings, and criteria-based selection tools to support decision-making.",
      ru: "Информационная платформа для поиска и сравнения пансионатов для пожилых людей. Предоставляет структурированную информацию, списки и критерии выбора для принятия решений.",
    },
    whatIDid: {
      en: "Worked on both frontend and backend implementation of the platform, developing the website structure and core functionality with WordPress and PHP.",
      ru: "Работал над frontend и backend реализацией платформы, разрабатывая структуру сайта и основную функциональность на WordPress и PHP.",
    },
    image: "/images/projects/pansiondelki.png",
    tags: ["Backend", "front-end"],
    tools: ["wordpress2", "php", "mysql"],
    link: "https://pansionisidelki.ru/",
    cols: 1,
  },

  // 6

  {
    title: "LightNess",
    description: {
      en: "LightNess is a conceptual digital product designed to combine spirituality and technology into a unified user experience. The application focuses on personal growth, offering tools for daily guidance, reflection, and life planning. It emphasizes mindful living, continuous support, and helping users stay present while maintaining control over important life decisions.",
      ru: "LightNess — это концептуальный цифровой продукт, объединяющий духовность и технологии в едином пользовательском опыте. Приложение направлено на личностное развитие, предлагая инструменты для ежедневной поддержки, саморефлексии и планирования жизненных этапов. Основной акцент сделан на осознанности, поддержке пользователя и контроле над важными решениями в жизни.",
    },
    whatIDid: {
      en: "Led the product direction, designed the user experience in Figma, and coordinated the mobile development process for the Flutter application.",
      ru: "Определял направление продукта, разрабатывал пользовательский опыт в Figma и координировал процесс мобильной разработки Flutter-приложения.",
    },
    image: "/images/projects/lightness.png",
    tags: ["Team Leader", "Designer"],
    tools: ["Flutter", "Supabase", "Figma"],
    link: "https://lightness.world/",
    figmaLink: "https://www.figma.com/design/mJcLdPDALeAEn2j0HJnBVt/My-Portfolio?node-id=170-1083&p=f&t=EwFj4bDDozqm6Ff0-0",
    cols: 2,
  },
  // 7
  {
    title: "МЭК",
    description: {
      en: "A corporate website for a company operating in the nuclear energy sector. The platform presents services such as technical auditing, safety compliance, and project support.",
      ru: "Корпоративный сайт компании, работающей в сфере атомной энергетики. Представляет услуги технического аудита, промышленной безопасности и сопровождения проектов.",
    },
    whatIDid: {
      en: "Developed the website using Next.js, TypeScript, and Tailwind CSS, implementing the frontend structure and delivering a modern corporate presentation.",
      ru: "Разработал сайт с использованием Next.js, TypeScript и Tailwind CSS, реализовав frontend-структуру и современную корпоративную подачу.",
    },
    image: "/images/projects/mek.png",
    tags: ["Professional", "front-end", "back-end"],
    tools: ["nextjs", "TypeScript", "TailwindCSS"],
    link: "https://mekexpert.ru/",
    cols: 1,
  },

  // 8

  {
    title: "OneNetwork",
    description: {
      en: "A service focused on language learning and communication support. It provides personalized solutions to help users improve their language skills and achieve communication goals in professional and personal contexts.",
      ru: "Oриентированная на изучение языков и развитие коммуникации. Предоставляет персонализированные решения для улучшения языковых навыков в профессиональной и личной сфере.",
    },
    whatIDid: {
      en: "Handled frontend and backend development of the website, including content presentation, functionality implementation, and interface enhancement.",
      ru: "Занимался frontend и backend разработкой сайта, включая подачу контента, реализацию функциональности и улучшение пользовательского интерфейса.",
    },
    image: "/images/projects/onetwork.png",
    tags: ["Learning", "front-end", "back-end", "animation"],
    tools: ["wordpress2", "php"],
    link: "https://onetworkinc.com/",
    cols: 1,
  },

  // 9
  {
    title: "Sababp",
    description: {
      en: "A design concept for a donation platform that connects users with charitable organizations. The system emphasizes transparency, allowing users to track how their contributions are used.",
      ru: "Концепт дизайна платформы для пожертвований, соединяющей пользователей с благотворительными организациями. Основной акцент сделан на прозрачности использования средств.",
    },
    whatIDid: {
      en: "Designed the product concept and user interface in Figma, focusing on a clear donation flow and transparent user experience.",
      ru: "Разработал концепцию продукта и пользовательский интерфейс в Figma, сделав акцент на понятном процессе пожертвования и прозрачном пользовательском опыте.",
    },
    image: "/images/projects/sababp.png",
    tags: ["Designer"],
    tools: ["Figma"],
    link: "https://www.figma.com/design/mJcLdPDALeAEn2j0HJnBVt/Safe-Beauty?node-id=305-11282&t=EwFj4bDDozqm6Ff0-0",
    figmaLink: "https://www.figma.com/design/mJcLdPDALeAEn2j0HJnBVt/My-Portfolio?node-id=170-11411&p=f&t=LXrCeZ9P0QAW6B4q-0",
    cols: 1,
  },
];
//
export const titles = {
  fearured: {
    en: "featured",
    ru: "избранная"
  },
  work: {
    en: "work",
    ru: "работа"
  },
  let_work: {
    en: "Let's work",
    ru: "Давайте работать"
  },
  project_tags:{
    en: "project tags",
    ru: "теги проекта",
  },
  about_work:{
    en: "About work",
    ru: "О работе",
  },
  tools:{
    en: "tools",
    ru: "Стеки"
  },
  what_i_did:{
    en:"What I did",
    ru:"Что я сделал"
  },
  view:{
    en: "View",
    ru: "Посмотреть"
  },
  visit_site: {
    en: "Check project",
    ru: "Проверьте проект"
  }
}