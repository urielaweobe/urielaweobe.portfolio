import { PiArrowUpRightThin, PiDownloadSimple } from "react-icons/pi";
import { Link } from "react-router";
import { BreadcrumbComponent } from "~/components/BreadcrumbComponent";
import { getMeta } from "~/lib/meta";
import { experiences } from "~/utils";

export function meta() {
  return getMeta({
    page: "career",
    path: "/experience",
    description:
      "Discover Uriel Awe-Obe's professional journey and experience in frontend development.",
  });
}

export default function Experience() {
  return (
    <section className="w-full flex flex-row justify-center">
      <div className="flex flex-col w-full gap-4 max-w-xs text-sm md:text-base lg:max-w-125">
        <BreadcrumbComponent
          currentPage="career"
          previousPage="about me"
          previousPageUrl="/about"
        />
        <ol>
          {experiences.map((experience, index) => (
            <li
              key={experience.id}
              className="grid grid-cols-[2.5rem_1fr] gap-x-2 border-b py-6"
            >
              <span className="pt-2 text-xs tabular-nums text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-xl font-medium md:text-2xl">
                  <Link
                    to={experience.url}
                    target="_blank"
                    className="link-highlight group inline-flex items-center gap-x-1.5"
                  >
                    {experience.company}
                    <PiArrowUpRightThin
                      aria-hidden
                      className="size-4 transition-transform duration-200 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>
                </h2>
                <ol className="mt-4 space-y-6 border-l pl-5">
                  {experience.roles.map((role) => (
                    <li key={role.id} className="relative">
                      <span
                        aria-hidden
                        className="absolute top-1.5 -left-[24.5px] size-2 rounded-full bg-foreground ring-4 ring-background"
                      />
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                        <h3 className="font-semibold">{role.title}</h3>
                        <p className="text-xs text-muted-foreground md:text-sm">
                          {role.period}
                        </p>
                      </div>
                      <ul className="mt-2 space-y-2">
                        {role.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>
            </li>
          ))}
        </ol>

        <a
          href="/uriel-awe-obe-cv.pdf"
          download
          className="group inline-flex items-center space-x-2 underline link-highlight ml-auto mb-4"
        >
          <span>download my cv</span>
          <PiDownloadSimple className="transition-transform duration-200 ease-in-out group-hover:translate-y-1" />
        </a>
      </div>
    </section>
  );
}
