import { useRef, useState } from "react";
import {
  PiArrowRightThin,
  PiArrowUpRightThin,
  PiPlusThin,
} from "react-icons/pi";
import { Link, useNavigation } from "react-router";
import { BreadcrumbComponent } from "~/components/BreadcrumbComponent";
import { getMeta } from "~/lib/meta";
import { cn } from "~/lib/utils";
import { projects } from "~/utils";

export function meta() {
  return getMeta({
    page: "projects",
    path: "/projects",
    description:
      "Explore the projects created by Uriel Awe-Obe. Tech used includes React, TypeScript, Tailwind CSS and other modern web technologies.",
  });
}

const CURSOR_GAP = 24;
const VIEWPORT_GUTTER = 16;

export default function Projects() {
  const [previewedId, setPreviewedId] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const navigation = useNavigation();
  const isOpening = (slug: string) =>
    navigation.location?.pathname === `/projects/${slug}`;

  const followCursor = (event: React.PointerEvent) => {
    const preview = previewRef.current;
    if (!preview) return;
    const { offsetWidth: width, offsetHeight: height } = preview;
    const fitsRight =
      event.clientX + CURSOR_GAP + width < window.innerWidth - VIEWPORT_GUTTER;
    const x = fitsRight
      ? event.clientX + CURSOR_GAP
      : event.clientX - CURSOR_GAP - width;
    const y = Math.min(
      Math.max(event.clientY - height / 2, VIEWPORT_GUTTER),
      window.innerHeight - height - VIEWPORT_GUTTER,
    );
    preview.style.translate = `${x}px ${y}px`;
  };

  return (
    <section className="w-full flex flex-row justify-center">
      <div className="flex flex-col w-full gap-4 max-w-xs text-sm md:text-base lg:max-w-125">
        <BreadcrumbComponent
          currentPage="projects"
          previousPage="home"
          previousPageUrl="/"
        />
        <ul
          className="group/list"
          onPointerMove={followCursor}
          onPointerLeave={() => setPreviewedId(null)}
        >
          {projects.map((project, index) => (
            <li
              key={project.id}
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") setPreviewedId(project.id);
              }}
              className="border-b motion-safe:transition-opacity motion-safe:duration-300 group-hover/list:opacity-35 hover:opacity-100 focus-within:opacity-100"
            >
              <details className="project-details group/row">
                <summary className="grid cursor-pointer list-none grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-2 gap-y-1 py-5 outline-offset-4 [&::-webkit-details-marker]:hidden">
                  <span className="text-xs tabular-nums text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2
                    style={{
                      viewTransitionName:
                        isOpening(project.slug) ? "project-title" : undefined,
                    }}
                    className="justify-self-start text-xl font-medium leading-tight md:text-2xl lg:text-3xl motion-safe:transition-transform motion-safe:duration-300 group-hover/row:translate-x-2">
                    {project.title}
                  </h2>
                  <PiPlusThin
                    aria-hidden
                    className="size-5 self-center motion-safe:transition-transform motion-safe:duration-300 group-open/row:rotate-45"
                  />
                  <span className="col-start-2 text-xs text-muted-foreground md:text-sm">
                    {project.tech_used.join(" · ")}
                  </span>
                </summary>
                <div className="space-y-4 pb-6 pl-12">
                  <p>{project.description}</p>
                  <img
                    src={project.img}
                    alt={`${project.title} screenshot`}
                    width={1440}
                    height={967}
                    loading="lazy"
                    style={{
                      viewTransitionName:
                        isOpening(project.slug) ? "project-shot" : undefined,
                    }}
                    className="w-full h-auto rounded-lg border pointer-fine:hidden"
                  />
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    <Link
                      to={`/projects/${project.slug}`}
                      prefetch="intent"
                      viewTransition
                      className="link-highlight flex w-fit items-center group gap-x-1.5 py-0.5 font-semibold"
                    >
                      <span className="link-sweep">read the case study</span>
                      <PiArrowRightThin className="transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
                    </Link>
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
                  </div>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
      <div
        ref={previewRef}
        aria-hidden
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-20 hidden w-80 overflow-hidden rounded-lg border bg-card shadow-xl pointer-fine:grid motion-safe:transition-[opacity,scale] motion-safe:duration-300 motion-safe:ease-out",
          previewedId === null ? "scale-90 opacity-0" : "scale-100 opacity-100",
        )}
      >
        {projects.map((project) => (
          <img
            key={project.id}
            src={project.img}
            alt=""
            width={1440}
            height={967}
            style={{
              viewTransitionName:
                isOpening(project.slug) ? "project-shot" : undefined,
            }}
            className={cn(
              "col-start-1 row-start-1 w-full h-auto motion-safe:transition-opacity motion-safe:duration-300",
              project.id !== previewedId && "opacity-0",
            )}
          />
        ))}
      </div>
    </section>
  );
}
