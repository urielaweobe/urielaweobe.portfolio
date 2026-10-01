import type { Config } from "@react-router/dev/config";
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
    ];
  },
} satisfies Config;
