import { Link } from "react-router";
import { BreadcrumbComponent } from "~/components/BreadcrumbComponent";

export function meta() {
  return [
    { title: "Uriel Awe-Obe" },
    {
      name: "description",
      content: "Learn more about Uriel Awe-Obe's journey and experience.",
    },
  ];
}

export default function About() {
  return (
    <section className="h-[calc(100dvh-55px)] overflow-auto flex flex-row items-center justify-center">
      <div className="flex flex-col w-full gap-4 max-w-xs wrap-balance text-sm md:text-base lg:max-w-1/3">
        <BreadcrumbComponent
          previousPageUrl="/"
          previousPage="home"
          currentPage="about me"
        />
        <p>
          Hi, I’m <span className="font-semibold">Uriel Awe-Obe</span>, a
          curious problem-solver and&nbsp;
          <span className="font-semibold">Frontend Engineer&nbsp;</span>
          who enjoys bringing digital ideas to life
        </p>
        <p>
          <Link to="/experience" className="font-semibold underline">
            My journey
          </Link>{" "}
          began with curiosity about how things work on the web, and over time,
          it’s grown into a passion for building interfaces that feel effortless
          and human. With hands-on experience across frameworks like&nbsp;
          <Link
            to="https://react.dev/"
            target="_blank"
            className="underline font-semibold"
          >
            React
          </Link>
          ,{" "}
          <Link
            to="https://nextjs.org/"
            target="_blank"
            className="underline font-semibold"
          >
            Next.js
          </Link>
          , and{" "}
          <Link
            to="https://remix.run/"
            target="_blank"
            className="underline font-semibold"
          >
            Remix
          </Link>
          , I focus on building scalable interfaces that blend performance with
          clean design.
        </p>
        <p>
          <Link to="/contact" className="underline font-semibold">
            Outside of work
          </Link>
          , I love exploring new tools, experimenting with UI animations, and
          occasionally writing about what I learn in frontend development
        </p>

        <p>
          I’ve also earned several{" "}
          <Link to="/certifications" className="underline font-semibold">
            certifications
          </Link>{" "}
          to strengthen my skills and broaden my perspective as a frontend
          engineer.
        </p>
      </div>
    </section>
  );
}
