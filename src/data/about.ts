// ==================[ about image ]================== //
export const about_image = "/images/about.jpg";
//

// ==================[ How do I work]================== //
export const how_do_i_work = [
  "I focus on clarity, performance, and user experience — starting with your goals.",
  "Then crafting sleek, functional designs through research, design, development, and refinement.",
];

//

// ==================[ Stack ]================== //
export const tool_images = [
  // 1
  "/images/tools/html.svg",
  // 2
  "/images/tools/css.svg",
  // 3
  "/images/tools/js.svg",
  // 4
  "/images/tools/tailwind.svg",
  // 5
  "/images/tools/ts.svg",
  // 6
  "/images/tools/reactjs.svg",
  // 7
  "/images/tools/nextjs.svg",
  // 8
  "/images/tools/figma.svg",
] as const;
//

// ==================[ Skills ]================== //
export const skills = [
  // 1
  {
    skill: "Responsive Design",
    progress: 100,
  },

  // 2
  {
    skill: "Coding",
    progress: 90,
  },

  // 3
  {
    skill: "Problem Solving",
    progress: 88,
  },

  // 4
  {
    skill: "Communication",
    progress: 92,
  },

  // 5
  {
    skill: "Project Management",
    progress: 79,
  },

  // 6
  {
    skill: "Database",
    progress: 75,
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
    event: "Front-end developer",
    location: "freelancer",
    years: "2024 - 2025",
  },
  {
    event: "Full-stack developer",
    location: "software company",
    years: "2022 - 2023",
  },
  {
    event: "desktop developer",
    location: "development company",
    years: "2021 - 2022",
  },
  {
    event: "Degree in Computer Science",
    location: "Harvard university",
    years: "2017 - 2021",
  },
];
//

// ==================[ achievements ]================== //
export const achievements = [
  { title: "projects", count: "110+" },
  { title: "years of experience", count: "5+" },
  { title: "happy clients", count: "100+" },
];
//

// ==================[ What's Client says ]================== //
export const average_rating = 4.5;

export const clients = [
  // 1
  {
    name: "John William",
    image: "/images/clients/1.jpg",
    rate: 5,
    role: "upwork client",
    comment:
      "I've been using for over a 3 monthes now, The user interface is intuitive and the feature",
  },

  // 2
  {
    name: "James Mark",
    image: "/images/clients/2.jpg",
    rate: 4.7,
    role: "CEO of company",
    comment:
      "You are really professional one and i am so happy of working with you, Thanks",
  },

  // 3
  {
    name: "Ahmed Belal",
    image: "/images/clients/3.jpg",
    rate: 5,
    role: "front-end dev",
    comment:
      "Your themes really amazing and inspiring me, I am goning to work with you again",
  },

  // 3
  {
    name: "Olivia Michael",
    image: "",
    rate: 5,
    role: "freelancer client",
    comment:
      "High quality support and work I am so happy of working with you, Thank you a lot!",
  },

  // 4
  {
    name: "Emma Daniel",
    image: "/images/clients/4.jpg",
    rate: 4.5,
    role: "UI/UX designer",
    comment:
      "Sleek work, time saver, and really inspiring me, I am goning to work with you again, Thanks",
  },
] as const;
//
