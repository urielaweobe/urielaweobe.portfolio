import { FaGithub, FaThreads, FaXTwitter } from "react-icons/fa6";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <nav className="w-dvw flex items-center justify-between text-sm md:text-base px-3">
        <a href="/" className="hover:underline">
          urielaweobe
        </a>
        <ul className="flex space-x-2">
          <li>
            <a href="/about" className="hover:underline">
              about
            </a>
          </li>
          <li>
            <a href="/projects" className="hover:underline">
              projects
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              contact
            </a>
          </li>
        </ul>
      </nav>
      <main>
        <body>
          <Outlet />
        </body>
      </main>
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
    </>
  );
}
