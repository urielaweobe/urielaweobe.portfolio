import { PiArrowUpRightThin } from "react-icons/pi";
import { Link } from "react-router";
import { Card, CardContent } from "~/components/ui/card";
import { getMeta } from "~/lib/meta";
import { projects } from "~/utils";

export function meta() {
  return getMeta({
    page: "projects",
    path: "/projects",
    description:
      "Explore the projects created by Uriel Awe-Obe. Tech used included React, TypeScript, Tailwind CSS and other modern web technologies.",
  });
}

export default function Projects() {
  return (
    <section className="w-full flex flex-row justify-center">
      <div className="flex flex-col w-full gap-4 max-w-xs wrap-balance text-sm md:text-base lg:max-w-125">
        <ul className="space-y-10">
          {projects.map((project) => (
            <li key={project.id} className="p-1 space-y-4">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>{project.tech_used}</p>
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <img
                    src={project.img}
                    alt={`${project.title} screenshot`}
                    width={2880}
                    height={1934}
                    loading="lazy"
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>
              {project.url && (
                <Link
                  to={project.url}
                  target="_blank"
                  className="link-highlight flex w-fit items-center group gap-x-1.5 py-0.5"
                >
                  <span className="link-sweep">{project.domain}</span>
                  <PiArrowUpRightThin className="transition-transform duration-200 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
