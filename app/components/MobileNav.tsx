import { useEffect, useId, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { NavLink } from "react-router";
import { navLinks } from "~/utils";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <div className="flex items-center sm:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={isOpen ? "close menu" : "open menu"}
        className="cursor-pointer rounded-md -m-2 p-3 transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        {isOpen ? <LuX /> : <LuMenu />}
      </button>
      {isOpen && (
        <ul
          id={menuId}
          className="absolute inset-x-0 top-full z-10 border-b bg-background px-3 pb-2 shadow-sm"
        >
          {navLinks.map((navLink) => (
            <li key={navLink.id}>
              <NavLink
                to={navLink.url}
                onClick={() => setIsOpen(false)}
                className="link-highlight block py-3 aria-[current=page]:font-semibold"
              >
                {navLink.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
