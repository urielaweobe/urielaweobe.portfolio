export function meta() {
  return [
    { title: "Uriel Awe-Obe" },
    { name: "description", content: "Welcome to Uriel Awe-Obe's portfolio!" },
  ];
}

export default function Home() {
  return (
    <section className="w-dvw h-[calc(100dvh-55px)] flex flex-row items-center justify-center">
      <div className="flex flex-col w-full gap-4 max-w-xs sm:w-80 wrap-balance text-sm md:text-base lg:max-w-lg">
        <p>
          Hi, I’m Uriel Awe-Obe, a <strong>Frontend Developer</strong>, turning
          complex ideas into smooth, engaging web experiences.
        </p>
        <p>
          Currently building at{" "}
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
