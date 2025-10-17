import { PiArrowUpRightThin } from "react-icons/pi";
import { Link } from "react-router";
import { BreadcrumbComponent } from "~/components/BreadcrumbComponent";
import { certifications } from "~/utils";

export function meta() {
  return [
    { title: "Uriel Awe-Obe" },
    {
      name: "description",
      content:
        "Explore Uriel Awe-Obe's certifications and courses in frontend development.",
    },
  ];
}

export default function Certifications() {
  return (
    <section className="h-[calc(100dvh-55px)] flex flex-row items-center justify-center">
      <div className="flex flex-col w-full gap-4 max-w-xs sm:w-[350px] wrap-balance text-sm md:text-base lg:max-w-1/3">
        <BreadcrumbComponent page="certifications & courses" />
        <ul className="mt-6">
          <li className="space-y-2">
            {certifications.map((certification) => (
              <Link
                to={certification.url}
                target="_blank"
                className="flex hover:underline items-center group gap-x-1.5"
                key={certification.id}
              >
                {certification.name}
                <PiArrowUpRightThin className="transition-transform duration-200 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            ))}
          </li>
        </ul>
      </div>
    </section>
  );
}
