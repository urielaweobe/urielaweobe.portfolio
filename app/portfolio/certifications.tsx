import { BreadcrumbComponent } from "~/components/BreadcrumbComponent";
import { LinkIndex } from "~/components/LinkIndex";
import { getMeta } from "~/lib/meta";
import { certifications } from "~/utils";

export function meta() {
  return getMeta({
    page: "certifications",
    path: "/certifications",
    description:
      "Explore Uriel Awe-Obe's certifications and courses in frontend development.",
  });
}

export default function Certifications() {
  return (
    <section className="w-full flex flex-row justify-center">
      <div className="flex flex-col w-full gap-4 max-w-xs text-sm md:text-base lg:max-w-125">
        <BreadcrumbComponent
          currentPage="certifications & courses"
          previousPage="about me"
          previousPageUrl="/about"
        />
        <LinkIndex links={certifications} />
      </div>
    </section>
  );
}
