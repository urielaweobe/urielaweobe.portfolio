import { PiArrowUpRightThin } from "react-icons/pi";
import { Link } from "react-router";
import { BreadcrumbComponent } from "~/components/BreadcrumbComponent";
import { socials } from "~/utils";

export function meta() {
  return [
    { title: "Uriel Awe-Obe" },
    {
      name: "description",
      content: "Get in touch with Uriel Awe-Obe through the contact page.",
    },
  ];
}

export default function Contact() {
  return (
    <section className="h-[calc(100dvh-55px)] flex flex-row items-center justify-center">
      <div className="flex flex-col w-full gap-4 max-w-xs sm:w-[500px] wrap-balance text-sm md:text-base lg:max-w-1/2">
        <BreadcrumbComponent
          className="mx-auto sm:mx-0"
          previousPage="about me"
          previousPageUrl="/about"
          currentPage="connect"
        />
        <div className="flex items-center space-x-3 mx-auto sm:mx-0">
          <ul className="mt-6">
            <li className="space-y-2">
              {socials.map((social) => (
                <Link
                  to={social.url}
                  target="_blank"
                  className="flex hover:underline items-center group gap-x-1.5"
                  key={social.id}
                >
                  {social.name}{" "}
                  <span className="hidden sm:inline">- {social.url}</span>
                  <PiArrowUpRightThin className="transition-transform duration-200 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
