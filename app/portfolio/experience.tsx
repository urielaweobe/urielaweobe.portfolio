import { PiArrowUpRightThin, PiDownloadSimple } from "react-icons/pi";
import { Link } from "react-router";
import { BreadcrumbComponent } from "~/components/BreadcrumbComponent";
import { experiences } from "~/utils";

export function meta() {
  return [
    { title: "Uriel Awe-Obe" },
    {
      name: "description",
      content:
        "Discover Uriel Awe-Obe's professional journey and experience in frontend development.",
    },
  ];
}

export default function Experience() {
  return (
    <section className="h-[calc(100dvh-55px)] flex flex-row items-center justify-center">
      <div className="flex flex-col w-full gap-4 max-w-xs wrap-balance text-sm md:text-base lg:max-w-1/3 mt-auto sm:mt-0">
        <BreadcrumbComponent page="career" />
        <div>
          {experiences.map((experience) => (
            <div key={experience.id} className="space-y-2 mb-4">
              <h3 className="font-semibold">
                {experience.company} - {experience.role}
              </h3>
              <p className="text-sm font-light">{experience.period}</p>

              <p className="text-sm md:text-base">
                {experience.description.line_one}
              </p>
              <p className="text-sm md:text-base">
                {experience.description.line_two}
              </p>
              <p className="text-sm md:text-base">
                {experience.description.line_three}
              </p>

              <Link
                to={experience.url || ""}
                target="_blank"
                className="underline font-semibold flex items-center group "
              >
                {experience.domainName}
                {experience.domainName && (
                  <PiArrowUpRightThin className="transition-transform duration-200 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1" />
                )}
              </Link>
            </div>
          ))}
        </div>

        <a
          href="https://drive.google.com/uc?export=download&id=1C4jxukLpoP9B_X5zRjQz5UzVdT3R5ygo"
          className="group inline-flex items-center space-x-2 underline ml-auto mb-4"
        >
          <span>download my cv</span>
          <PiDownloadSimple className="transition-transform duration-200 ease-in-out group-hover:translate-y-1" />
        </a>
      </div>
    </section>
  );
}
