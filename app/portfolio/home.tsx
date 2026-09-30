import { Link } from "react-router";
import { KineticText, Letters } from "~/components/KineticText";
import { getMeta, siteName, siteUrl } from "~/lib/meta";
import { socials } from "~/utils";

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
      <KineticText className="flex flex-col w-full gap-6 max-w-xs text-3xl leading-tight font-light md:text-4xl lg:max-w-125">
        <h1>
          <Letters text="Hi, I’m " />
          <Link to="/about" className="underline link-highlight">
            <Letters text="Uriel Awe-Obe" />
          </Link>
          <Letters text=", a " />
          <strong className="font-bold">
            <Letters text="Frontend Engineer" />
          </strong>
          <Letters text=", turning complex ideas into smooth, engaging " />
          <Link to="/projects" className="underline link-highlight">
            <Letters text="web experiences" />
          </Link>
          <Letters text="." />
        </h1>
        <p className="text-muted-foreground">
          <Letters text="Currently " />
          <Link to="/experience" className="underline link-highlight">
            <Letters text="building" />
          </Link>
          <Letters text=" at " />
          <a
            href="https://paystack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-bold link-highlight"
          >
            <Letters text="Paystack" />
          </a>
          <Letters text="." />
        </p>
      </KineticText>
    </section>
  );
}
