import { PiArrowRightThin, PiArrowUpRightThin } from "react-icons/pi";
import { data, Link } from "react-router";
import { BreadcrumbComponent } from "~/components/BreadcrumbComponent";
import { getMeta } from "~/lib/meta";
import NotFound, { meta as getNotFoundMeta } from "~/portfolio/not-found";
import { projects } from "~/utils";
import type { Route } from "./+types/project";

export function loader({ params }: Route.LoaderArgs) {
  const index = projects.findIndex((project) => project.slug === params.slug);
  if (index === -1) {
    return data({ project: null }, { status: 404 });
  }
  return {
    project: projects[index],
    nextProject: projects[(index + 1) % projects.length],
  };
}

export function meta({ loaderData }: Route.MetaArgs) {
  const project = loaderData?.project;
  if (!project) return getNotFoundMeta();
  return getMeta({
    page: project.title,
    path: `/projects/${project.slug}`,
    description: project.caseStudy.problem,
  });
}

export default function Project({ loaderData }: Route.ComponentProps) {
  if (!loaderData.project) return <NotFound />;
  const { project, nextProject } = loaderData;

  return (
    <section className="w-full flex flex-row justify-center">
      <article className="flex flex-col w-full gap-4 max-w-xs text-sm md:text-base lg:max-w-125">
        <BreadcrumbComponent
          currentPage={project.title}
          headingTransitionName="project-title"
          previousPage="projects"
          previousPageUrl="/projects"
        />
        <p className="text-xs text-muted-foreground md:text-sm">
          {project.tech_used.join(" · ")}
        </p>
        <img
          src={project.img}
          alt={`${project.title} screenshot`}
          width={1440}
          height={967}
          style={{ viewTransitionName: "project-shot" }}
          className="w-full h-auto rounded-lg border"
        />

        <h2 className="mt-4 text-xs text-muted-foreground md:text-sm">
          the problem
        </h2>
        <p>{project.caseStudy.problem}</p>

        <h2 className="mt-4 text-xs text-muted-foreground md:text-sm">
          what I decided
        </h2>
        <ol className="border-t">
          {project.caseStudy.decisions.map((decision, index) => (
            <li
              key={decision.id}
              className="grid grid-cols-[2.5rem_1fr] gap-x-2 gap-y-1 border-b py-4"
            >
              <span className="text-xs tabular-nums text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-semibold">{decision.title}</h3>
              <p className="col-start-2">{decision.detail}</p>
            </li>
          ))}
        </ol>

        <h2 className="mt-4 text-xs text-muted-foreground md:text-sm">
          the outcome
        </h2>
        <p>{project.caseStudy.outcome}</p>

        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
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
          <Link
            to={project.repo}
            target="_blank"
            className="link-highlight flex w-fit items-center group gap-x-1.5 py-0.5"
          >
            <span className="link-sweep">view the code</span>
            <PiArrowUpRightThin className="transition-transform duration-200 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <Link
          to={`/projects/${nextProject.slug}`}
          prefetch="intent"
          viewTransition
          className="group mt-6 flex items-baseline justify-between gap-x-4 border-t pt-4"
        >
          <span className="text-xs text-muted-foreground md:text-sm">next</span>
          <span className="flex items-center gap-x-1.5 text-base md:text-lg">
            {nextProject.title}
            <PiArrowRightThin className="transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
          </span>
        </Link>
      </article>
    </section>
  );
}
