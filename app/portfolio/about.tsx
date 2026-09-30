import { Link } from "react-router";
import { BreadcrumbComponent } from "~/components/BreadcrumbComponent";
import { getMeta } from "~/lib/meta";

export function meta() {
  return getMeta({
    page: "about",
    path: "/about",
    description: "Learn more about Uriel Awe-Obe's journey and experience.",
  });
}

export default function About() {
  return (
    <section className="w-full flex flex-row justify-center">
      <div className="flex flex-col w-full gap-4 max-w-xs text-sm md:text-base lg:max-w-125">
        <BreadcrumbComponent
          previousPageUrl="/"
          previousPage="home"
          currentPage="about me"
        />
        <div className="space-y-4">
          <p>
            Hi, I’m <span className="font-semibold">Uriel Awe-Obe</span>, a
            curious problem-solver and{" "}
            <span className="font-semibold">Frontend Engineer</span> with 5+
            years of experience bringing digital ideas to life.
          </p>
          <p>
            Right now I’m at{" "}
            <Link
              to="https://paystack.com/"
              target="_blank"
              className="underline link-highlight"
            >
              Paystack
            </Link>
            , building merchant-facing products and payment experiences for
            200,000+ businesses across Africa.
          </p>
          <p>
            <Link to="/experience" className="underline link-highlight">
              My journey
            </Link>{" "}
            began with curiosity about how things work on the web, and over
            time, it’s grown into a passion for building interfaces that feel
            effortless and human. With hands-on experience across frameworks
            like{" "}
            <Link
              to="https://react.dev/"
              target="_blank"
              className="underline link-highlight"
            >
              React
            </Link>
            ,{" "}
            <Link
              to="https://nextjs.org/"
              target="_blank"
              className="underline link-highlight"
            >
              Next.js
            </Link>
            , and{" "}
            <Link
              to="https://remix.run/"
              target="_blank"
              className="underline link-highlight"
            >
              Remix
            </Link>
            , I focus on building scalable interfaces that blend performance
            with clean design.
          </p>
          <p>
            Outside of work, I love exploring new tools, experimenting with UI
            animations, and occasionally writing about what I learn in frontend
            development. Lately that means{" "}
            <Link to="/projects" className="underline link-highlight">
              building with AI
            </Link>
            , from a stock analysis tool to an employee handbook chatbot, both
            powered by Mistral AI.
          </p>
          <p>
            I’ve also earned several{" "}
            <Link to="/certifications" className="underline link-highlight">
              certifications
            </Link>{" "}
            to strengthen my skills and broaden my perspective as a frontend
            engineer.
          </p>
          <p>
            Want to build something together?{" "}
            <Link to="/contact" className="underline link-highlight">
              Let’s connect
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
