import type { Config } from "@react-router/dev/config";
import { shareCards } from "./app/lib/share-cards";
import { projects } from "./app/utils";

export default {
  async prerender() {
    return [
      "/",
      "/about",
      "/contact",
      "/projects",
      "/certifications",
      "/experience",
      ...projects.map((project) => `/projects/${project.slug}`),
      ...Object.keys(shareCards).map((key) => `/og/${key}.png`),
    ];
  },
} satisfies Config;
