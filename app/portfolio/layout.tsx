import type { ReactNode } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { CommandMenu } from "~/components/CommandMenu";
import { ErrorMessage } from "~/components/ErrorMessage";
import { MobileNav } from "~/components/MobileNav";
import { ThemeToggle } from "~/components/ThemeToggle";
import { navLinks } from "~/utils";
import type { Route } from "./+types/layout";

export default function Layout() {
  return (
    <SiteShell>
      <Outlet />
    </SiteShell>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  return (
    <SiteShell>
      <ErrorMessage error={error} />
    </SiteShell>
  );
}

function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col">
      <nav className="sticky top-0 z-30 w-full flex items-center gap-x-3 bg-background text-sm md:text-base px-3 mb-4 sm:mb-0 after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:h-8 after:bg-linear-to-b after:from-background after:to-transparent">
        <NavLink
          to="/"
          prefetch="intent"
          viewTransition
          className="relative z-40 link-highlight link-sweep py-2.5 sm:py-1"
        >
          urielaweobe
        </NavLink>
        <ul className="hidden sm:flex items-center ml-auto gap-x-3">
          {navLinks.map((navLink) => (
            <li key={navLink.id}>
              <NavLink
                to={navLink.url}
                prefetch="intent"
                viewTransition
                className="link-highlight link-sweep py-1 aria-[current=page]:font-semibold"
              >
                {navLink.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="ml-auto flex items-center gap-x-5 sm:ml-0 sm:gap-x-3">
          <CommandMenu />
          <ThemeToggle />
          <MobileNav />
        </div>
      </nav>
      <main className="flex-1 flex items-center justify-center py-8">
        {children}
      </main>
      <footer className="sticky bottom-0 z-20 w-full flex items-center justify-center bg-background py-2 text-sm md:text-base before:pointer-events-none before:absolute before:inset-x-0 before:bottom-full before:h-8 before:bg-linear-to-t before:from-background before:to-transparent">
        <div className="flex items-center justify-center w-full max-w-xs">
          <div>
            <span>
              © {new Date().getFullYear()} -{" "}
              <Link to="/contact" viewTransition className="font-normal">
                urielaweobe
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
