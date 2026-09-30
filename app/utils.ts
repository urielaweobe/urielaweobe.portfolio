export const certifications = [
  {
    id: 1,
    name: "functional programming: first steps, v2",
    url: "https://static.frontendmasters.com/ud/c/320f842bcf/ILBMAduteI/functional-first-steps-v2.pdf",
  },
  {
    id: 2,
    name: "javascript: the hard parts, v2",
    url: "https://static.frontendmasters.com/ud/c/320f842bcf/fjjCYVxYTO/javascript-hard-parts-v2.pdf",
  },
  {
    id: 3,
    name: "cloud infrastructure: startup to scale",
    url: "https://static.frontendmasters.com/ud/c/320f842bcf/vPhemeDrGg/cloud-infrastructure.pdf",
  },
  {
    id: 4,
    name: "the ai engineer path",
    url: "https://scrimba.com/certificate-cert24zAwJ77fGJc4uqn3annHSCJGkUZBXLrqKe9p",
  },
  {
    id: 5,
    name: "introduction to clean code",
    url: "https://scrimba.com/certificate-cert24zAwJ77fGJc4uqn3annHRvBQZDjXhjsLLNBM",
  },
  {
    id: 6,
    name: "introduction to mistral ai",
    url: "https://scrimba.com/certificate-cert24zAwJ77fGJc4uqn3annHT1fLaifMpyedrEmS",
  },
  {
    id: 7,
    name: "modern javascript from the beginning 2.0",
    url: "https://www.udemy.com/certificate/UC-c60ab338-6dbe-46e4-aac6-a26fc1546f01/",
  },
  {
    id: 8,
    name: "understanding typescript",
    url: "https://www.udemy.com/certificate/UC-298c2b69-3deb-4177-bf82-98bf2411237e/",
  },
  {
    id: 9,
    name: "the react bootcamp",
    url: "https://v1.scrimba.com/certificate/uQ7gM4hm/greact",
  },
  {
    id: 10,
    name: "responsive web design",
    url: "https://www.freecodecamp.org/certification/urielaweobe/responsive-web-design",
  },
];

export const experiences = [
  {
    id: 1,
    company: "paystack",
    url: "https://paystack.com/",
    roles: [
      {
        id: 1,
        title: "frontend engineer",
        period: "feb 2024 – present",
        highlights: [
          "Developed merchant-facing user interfaces for financial systems using React and TypeScript, with shipped features now serving 200,000+ merchants.",
          "Reviewed 10+ pull requests per sprint and helped reduce post-merge bugs by around 30% through consistent code review.",
          "Supported junior engineers through pairing and documentation, reducing onboarding time by a few weeks.",
        ],
      },
      {
        id: 2,
        title: "frontend engineer, contract",
        period: "feb 2023 – feb 2024",
        highlights: [
          "Built and localized the product for Ghana, Kenya, Egypt, and Côte d'Ivoire, handling localization edge cases and cross-market testing across the frontend.",
          "Six months after launch in those markets, the product had gained around 50,000 new users, indicating that the localization work effectively supported regional growth.",
          "Kept a 95%+ code review pass rate throughout the contract.",
        ],
      },
    ],
  },
  {
    id: 2,
    company: "buzzz",
    url: "https://www.yourbuzzz.com/",
    roles: [
      {
        id: 3,
        title: "frontend developer",
        period: "jun 2022 – feb 2023",
        highlights: [
          "Wired up 8+ REST endpoints using React Query — load times dropped by around 40% once I replaced the old fetch logic.",
          "Built 15+ responsive components with the designer; merge conflicts dropped by 60% after I set up a proper branching process.",
        ],
      },
    ],
  },
];

export const navLinks = [
  { id: 1, name: "about", url: "/about" },
  { id: 2, name: "career", url: "/experience" },
  { id: 3, name: "projects", url: "/projects" },
  { id: 4, name: "connect", url: "/contact" },
];

export const socials = [
  {
    id: 1,
    name: "github",
    url: "https://github.com/urielaweobe",
  },
  {
    id: 2,
    name: "threads",
    url: "https://www.threads.com/@urielaweobe",
  },
  {
    id: 3,
    name: "twitter",
    url: "https://x.com/urielaweobe",
  },
  {
    id: 4,
    name: "linkedin",
    url: "https://www.linkedin.com/in/uriel-awe-obe/",
  },
  {
    id: 5,
    name: "instagram",
    url: "https://www.instagram.com/urielaweobe/",
  },
];

export const projects = [
  {
    id: 1,
    title: "urielaweobe portfolio",
    description:
      "my personal portfolio website showcasing my projects, experience, and skills as a frontend developer.",
    tech_used: ["react", "typescript", "tailwind css", "react router"],
    url: "https://urielaweobe.com",
    domain: "visit portfolio",
    img: "/images/portfolio.webp",
  },
  {
    id: 2,
    title: "stock-ai analysis tool",
    description:
      "a web application that uses AI to analyze stock market trends and provide investment insights.",
    tech_used: ["react", "mistral ai", "cloudflare", "typescript", "tailwind css"],
    url: "https://stock-ai-livid.vercel.app/",
    domain: "visit stock ai",
    img: "/images/stock-ai.webp",
  },
  {
    id: 3,
    title: "employee handbook agent",
    description:
      "An AI-powered chatbot that helps employees quickly find information in the company handbook.",
    tech_used: ["react", "mistral ai", "node.js", "remix", "tailwind css", "shadcn"],
    img: "/images/handbook-agent.webp",
  },
];
