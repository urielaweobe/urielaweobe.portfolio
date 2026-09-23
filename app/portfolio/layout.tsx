import { Link, NavLink, Outlet } from "react-router";
import { ThemeToggle } from "~/components/ThemeToggle";

export default function Layout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <nav className="w-full flex items-center justify-between text-sm md:text-base px-3 mb-4 sm:mb-0">
        <NavLink to="/" className="link-highlight link-sweep py-1">
          urielaweobe
        </NavLink>
        <ul className="flex items-center space-x-2">
          <li>
            <NavLink to="/projects" className="link-highlight link-sweep py-1">
              projects
            </NavLink>
          </li>
          <li className="flex items-center">
            <ThemeToggle />
          </li>
        </ul>
      </nav>
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
      <footer className="w-full flex items-center justify-center text-sm md:text-base">
        <div className="flex items-center justify-center w-full max-w-xs">
          <div>
            <span>
              © {new Date().getFullYear()} -{" "}
              <Link to="/contact" className="font-normal">
                urielaweobe
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
