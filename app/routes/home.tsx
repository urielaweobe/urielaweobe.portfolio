import { FaGithub, FaThreads, FaXTwitter } from "react-icons/fa6";

export function meta() {
  return [
    { title: "Uriel Awe-Obe" },
    { name: "description", content: "Welcome to Uriel Awe-Obe's portfolio!" },
  ];
}

export default function Home() {
  return (
    <main>
      <nav className="w-dvw flex items-center justify-center text-sm md:text-base">
        <ul className="flex space-x-4">
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <body>
        <section className="w-dvw h-[calc(100dvh-55px)] flex flex-row items-center justify-center">
          <div className="flex flex-col w-full gap-4 max-w-xs sm:w-80 wrap-balance text-sm md:text-base lg:max-w-lg">
            <p>
              Hi, I’m Uriel Awe-Obe, a <strong>Frontend Developer</strong>,
              turning complex ideas into smooth, engaging web experiences.
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
      </body>
      <footer className="w-dvw flex items-center justify-center text-sm md:text-base">
        <div className="flex items-center justify-between w-full max-w-xs px-4">
          <div className="flex items-center space-x-2">
            <a
              href="https://github.com/urielaweobe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size="20" />
            </a>
            <a
              href="https://www.threads.com/@urielaweobe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaThreads size="20" />
            </a>
            <a
              href="https://x.com/urielaweobe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size="20" />
            </a>
          </div>
          <div>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
