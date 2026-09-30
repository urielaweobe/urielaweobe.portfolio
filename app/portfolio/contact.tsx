import { BreadcrumbComponent } from "~/components/BreadcrumbComponent";
import { LinkIndex } from "~/components/LinkIndex";
import { getMeta } from "~/lib/meta";
import { socials } from "~/utils";

export function meta() {
  return getMeta({
    page: "connect",
    path: "/contact",
    description: "Get in touch with Uriel Awe-Obe through the contact page.",
  });
}

export default function Contact() {
  return (
    <section className="w-full flex flex-row justify-center">
      <div className="flex flex-col w-full gap-4 max-w-xs text-sm md:text-base lg:max-w-125">
        <BreadcrumbComponent
          previousPage="about me"
          previousPageUrl="/about"
          currentPage="connect"
        />
        <LinkIndex
          links={socials.map((social) => ({
            ...social,
            detail: social.url
              .replace(/^https:\/\/(www\.)?/, "")
              .replace(/\/$/, ""),
          }))}
        />
      </div>
    </section>
  );
}
