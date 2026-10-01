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
    slug: "portfolio",
    title: "urielaweobe portfolio",
    description:
      "my personal portfolio website showcasing my projects, experience, and skills as a frontend developer.",
    tech_used: ["react", "typescript", "tailwind css", "react router"],
    url: "https://urielaweobe.com",
    domain: "visit portfolio",
    repo: "https://github.com/urielaweobe/urielaweobe.portfolio",
    img: "/images/portfolio.webp",
    caseStudy: {
      problem:
        "The projects page stacked identical cards, so every project carried the same weight and the site read like a document. I wanted the work to be quick to scan on a phone, memorable on a desktop, and easy for search engines to understand.",
      decisions: [
        {
          id: 1,
          title: "an index instead of cards",
          detail:
            "Projects became numbered rows. With a mouse, hovering a row floats its screenshot beside the cursor; on touch, rows open in place as native details elements. Pointer media queries decide which, rather than guessing from the device.",
        },
        {
          id: 2,
          title: "every page prerendered",
          detail:
            "React Router renders each page to static HTML at build time, each with its own title, canonical URL and share card, plus schema.org data on the home page describing who I am and where I work.",
        },
        {
          id: 3,
          title: "navigation that never waits",
          detail:
            "The phone menu's open state is tied to the current location, so any navigation closes it the moment the next page appears, and the pages it links to are prefetched before you tap.",
        },
        {
          id: 4,
          title: "lighter screenshots",
          detail:
            "The 2880px PNG screenshots became 1440px WebP, still sharper than any size they're shown at.",
        },
      ],
      outcome:
        "Screenshots dropped from 741 KB to 73 KB. In testing on a CPU slowed to phone speed, tapping a menu link shows the next page in under 50 ms with nothing left to download.",
    },
  },
  {
    id: 2,
    slug: "stock-ai",
    title: "stock-ai analysis tool",
    description:
      "a web application that uses AI to analyze stock market trends and provide investment insights.",
    tech_used: ["react", "mistral ai", "cloudflare", "typescript", "tailwind css"],
    url: "https://stock-ai-livid.vercel.app/",
    domain: "visit stock ai",
    repo: "https://github.com/urielaweobe/stock-ai",
    img: "/images/stock-ai.webp",
    caseStudy: {
      problem:
        "Most stock tools are built around US markets. I wanted a quick, plain-language read on Nigerian stocks: pick a company and a date range, and get a short verdict on how it has performed.",
      decisions: [
        {
          id: 1,
          title: "data that covers nigeria",
          detail:
            "I started on the Polygon API, but it doesn't list Nigerian stocks, so I moved to EODHD, which covers the Nigerian Exchange.",
        },
        {
          id: 2,
          title: "a short, opinionated report",
          detail:
            "Mistral is asked for a report of no more than 150 words that describes the stock's performance and recommends whether to buy, hold or sell, so the answer fits on one screen.",
        },
        {
          id: 3,
          title: "providers behind workers",
          detail:
            "Stock prices, the list of tickers and the AI report each come through their own Cloudflare Worker, rather than the app calling the data and AI providers directly.",
        },
      ],
      outcome:
        "A single-page tool: choose a Nigerian Exchange stock and a date range, and a report appears with a clear recommendation, with loading skeletons while it's generated.",
    },
  },
  {
    id: 3,
    slug: "handbook-agent",
    title: "employee handbook agent",
    description:
      "An AI-powered chatbot that helps employees quickly find information in the company handbook.",
    tech_used: ["react", "mistral ai", "node.js", "remix", "tailwind css", "shadcn"],
    repo: "https://github.com/urielaweobe/remix-shadcn-chat",
    img: "/images/handbook-agent.webp",
    caseStudy: {
      problem:
        "Company handbooks are long and rarely read end to end. I wanted employees to ask a question in plain words and get an answer grounded in the handbook itself, not in the model's general knowledge.",
      decisions: [
        {
          id: 1,
          title: "retrieval before generation",
          detail:
            "Each question is turned into an embedding with mistral-embed and matched against handbook passages stored in Supabase. Only the five closest passages above a 0.78 similarity threshold are given to the model as context.",
        },
        {
          id: 2,
          title: "answers you can scan",
          detail:
            "The model's replies are formatted into headings, numbered steps and bullet points before they're shown, so a policy answer reads like a policy.",
        },
        {
          id: 3,
          title: "room to grow into an agent",
          detail:
            "I also experimented with Mistral function calling, letting the model call tools such as a payment-status lookup over up to three rounds before answering.",
        },
      ],
      outcome:
        "A chat interface with saved conversations that answers handbook questions from the handbook's own text, and a base for trying agents that use tools.",
    },
  },
];
