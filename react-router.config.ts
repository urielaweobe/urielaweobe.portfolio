import type { Config } from "@react-router/dev/config";

export default {
  async prerender() {
    return [
      "/",
      "/about",
      "/contact",
      "/projects",
      "/certifications",
      "/experience",
    ];
  },
} satisfies Config;
