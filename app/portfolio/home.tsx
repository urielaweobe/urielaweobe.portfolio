import { Link } from "react-router";
import { getMeta, siteName, siteUrl } from "~/lib/meta";
import { email, socials } from "~/utils";

export function meta() {
  return [
    ...getMeta({
      path: "/",
      description:
        "Uriel Awe-Obe is a frontend engineer at Paystack, building fast, accessible web experiences with React, TypeScript and Remix.",
    }),
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "Person",
        name: siteName,
        url: siteUrl,
        jobTitle: "Frontend Engineer",
        email,
        worksFor: {
          "@type": "Organization",
          name: "Paystack",
          url: "https://paystack.com/",
        },
        sameAs: socials.map((social) => social.url),
      },
    },
  ];
}

export default function Home() {
  return (
    <section className="w-full flex flex-row justify-center">
      <div className="flex flex-col w-full gap-6 max-w-xs text-xl leading-snug font-light md:text-2xl lg:max-w-125">
        <h1>
          Hi, I’m{" "}
          <Link to="/about" viewTransition className="underline link-highlight">
            Uriel Awe-Obe
          </Link>
          , a <strong className="font-bold">Frontend Engineer</strong>, turning
          complex ideas into smooth, engaging{" "}
          <Link
            to="/projects"
            viewTransition
            className="underline link-highlight"
          >
            web experiences
          </Link>
          .
        </h1>
        <p className="text-muted-foreground">
          Currently{" "}
          <Link
            to="/experience"
            viewTransition
            className="underline link-highlight"
          >
            building
          </Link>{" "}
          at{" "}
          <a
            href="https://paystack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-bold link-highlight"
          >
            Paystack
          </a>
          .
        </p>
      </div>
    </section>
  );
}
