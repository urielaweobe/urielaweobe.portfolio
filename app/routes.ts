import {
  index,
  layout,
  type RouteConfig,
  route,
} from "@react-router/dev/routes";

export default [
  layout("portfolio/layout.tsx", [
    index("portfolio/home.tsx"),
    route("about", "portfolio/about.tsx"),
    route("projects", "portfolio/projects.tsx"),
    route("contact", "portfolio/contact.tsx"),
  ]),
] satisfies RouteConfig;
