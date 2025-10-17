import { NavLink, Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <nav className="w-dvw flex items-center justify-between text-sm md:text-base px-3 mb-4 sm:mb-0">
        <NavLink to="/" className="hover:underline">
          urielaweobe
        </NavLink>
        <ul className="flex space-x-2">
          <li>
            <NavLink to="/projects" className="hover:underline">
              projects
            </NavLink>
          </li>
        </ul>
      </nav>
      <main className="flex-1 overflow-auto">
        <body>
          <Outlet />
        </body>
      </main>
      <footer className="w-dvw flex items-center justify-center text-sm md:text-base">
        <div className="flex items-center justify-center w-full max-w-xs">
          <div>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
