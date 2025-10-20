import { Link } from "react-router";

export function meta() {
  return [
    { title: "Uriel Awe-Obe" },
    { name: "description", content: "Welcome to Uriel Awe-Obe's portfolio!" },
  ];
}

export default function Home() {
  return (
    <section className="h-[calc(100dvh-55px)] flex flex-row items-center justify-center">
      <div className="flex flex-col w-full gap-4 max-w-xs sm:w-[350px] wrap-balance text-sm md:text-base lg:max-w-1/3">
        <p>
          Hi, I’m{" "}
          <Link to="/about" className="underline">
            Uriel Awe-Obe
          </Link>
          , a <strong>Frontend Developer</strong>, turning complex ideas into
          smooth, engaging{" "}
          <Link to="/projects" className="underline">
            web experiences
          </Link>
          .
        </p>
        <p>
          Currently{" "}
          <Link to="/experience" className="underline">
            building
          </Link>{" "}
          at&nbsp;
          <a
            href="https://paystack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-bold"
          >
            Paystack.
          </a>
        </p>
      </div>
    </section>
  );
}
