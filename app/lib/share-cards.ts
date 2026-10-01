import { siteName } from "./meta";
import { projects } from "../utils";

type ShareCard = {
  title: string;
  subtitle: string;
  footer: string;
  label?: string;
};

const role = "Frontend Engineer";

export const shareCards: Record<string, ShareCard> = {
  home: {
    title: siteName,
    subtitle:
      "Frontend Engineer, turning complex ideas into smooth, engaging web experiences.",
    footer: "currently building at Paystack",
  },
  about: {
    title: "about me",
    subtitle: "A curious problem-solver with 5+ years of frontend experience.",
    footer: role,
  },
  experience: {
    title: "career",
    subtitle:
      "Building merchant-facing products at Paystack for 200,000+ businesses across Africa.",
    footer: role,
  },
  projects: {
    title: "projects",
    subtitle:
      "An AI stock analyst, an employee handbook chatbot, and this portfolio.",
    footer: role,
  },
  certifications: {
    title: "certifications & courses",
    subtitle:
      "Courses from Frontend Masters, Scrimba, Udemy and freeCodeCamp.",
    footer: role,
  },
  contact: {
    title: "connect",
    subtitle: "Find me on GitHub, LinkedIn, X, Threads and Instagram.",
    footer: role,
  },
  ...Object.fromEntries(
    projects.map((project) => [
      `projects/${project.slug}`,
      {
        title: project.title,
        subtitle: project.caseStudy.problem.split(/(?<=\.)\s/)[0],
        footer: project.tech_used.join(" · "),
        label: "case study",
      },
    ]),
  ),
};
