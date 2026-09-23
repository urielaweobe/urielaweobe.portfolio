import { Link, NavLink, Outlet } from "react-router";
import { ThemeToggle } from "~/components/ThemeToggle";
import { navLinks } from "~/utils";

export default function Layout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <nav className="w-full flex flex-wrap items-center gap-x-3 text-sm md:text-base px-3 mb-4 sm:mb-0">
        <NavLink to="/" className="link-highlight link-sweep py-2.5 sm:py-1">
          urielaweobe
        </NavLink>
        <ul className="order-last w-full flex items-center justify-between sm:order-none sm:w-auto sm:ml-auto sm:gap-x-3">
          {navLinks.map((navLink) => (
            <li key={navLink.id}>
              <NavLink
                to={navLink.url}
                className="link-highlight link-sweep block py-2.5 sm:py-1 aria-[current=page]:font-semibold"
              >
                {navLink.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="ml-auto flex items-center sm:ml-0">
          <ThemeToggle />
        </div>
      </nav>
      <main className="flex-1 flex items-center justify-center py-8">
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
