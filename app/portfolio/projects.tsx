import { CgArrowLongDown, CgArrowLongUp, CgArrowsV } from "react-icons/cg";
import { PiArrowUpRightThin } from "react-icons/pi";
import { Link } from "react-router";
import { Card, CardContent } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { projects } from "~/utils";

export function meta() {
  return [
    { title: "Uriel Awe-Obe" },
    {
      name: "description",
      content:
        "Explore the projects created by Uriel Awe-Obe. Tech used included React, TypeScript, Tailwind CSS and other modern web technologies.",
    },
  ];
}

export default function Projects() {
  const projectIcons = (projectId: number) => {
    switch (true) {
      case projectId === projects.length:
        return <CgArrowLongUp className="animate-bounce" />;
      case projectId === 1:
        return <CgArrowLongDown className="animate-bounce" />;
      default:
        return <CgArrowsV className="animate-bounce" />;
    }
  };

  return (
    <section className="h-[calc(100dvh-55px)] flex flex-row items-center justify-center">
      <div className="flex flex-col w-full gap-4 max-w-xs wrap-balance text-sm md:text-base lg:max-w-[500px]">
        {/* Desktop view */}
        <Carousel className="w-full  sm:inline hidden mx-auto">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id}>
                <div className="p-1 space-y-4">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p>{project.tech_used}</p>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {project.id}
                      </span>
                    </CardContent>
                  </Card>
                  <Link
                    to={project.url}
                    target="_blank"
                    className="flex hover:underline items-center group gap-x-1.5"
                    key={project.id}
                  >
                    {project.domain}{" "}
                    <PiArrowUpRightThin className="transition-transform duration-200 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Mobile view */}
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full max-w-xs sm:hidden inline"
        >
          <CarouselContent className="-mt-1 h-[220px]">
            {projects.map((project) => (
              <CarouselItem key={project.id}>
                <div className="flex">
                  <div className="p-1 space-y-4">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p>{project.tech_used}</p>
                    <Link
                      to={project.url}
                      target="_blank"
                      className="flex hover:underline items-center group gap-x-1.5"
                      key={project.id}
                    >
                      {project.domain}{" "}
                      <PiArrowUpRightThin className="transition-transform duration-200 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </div>
                  <div className="my-auto">
                    {projectIcons(project.id)}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
