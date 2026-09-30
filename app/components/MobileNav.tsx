import { useEffect, useId, useRef, useState } from "react";
import { NavLink } from "react-router";
import { cn } from "~/lib/utils";
import { navLinks } from "~/utils";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [revealOrigin, setRevealOrigin] = useState("100% 0%");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    const wideScreen = window.matchMedia("(min-width: 40rem)");
    const onWiden = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    wideScreen.addEventListener("change", onWiden);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      wideScreen.removeEventListener("change", onWiden);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggle = () => {
    const button = buttonRef.current;
    if (button) {
      const { left, top, width, height } = button.getBoundingClientRect();
      setRevealOrigin(`${left + width / 2}px ${top + height / 2}px`);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center sm:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={menuId}
        className="relative z-40 cursor-pointer rounded-md -m-2 p-3 leading-none transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        <span className="grid overflow-hidden text-right">
          <span
            className={cn(
              "col-start-1 row-start-1 motion-safe:transition-[translate,visibility] motion-safe:duration-300",
              isOpen && "invisible -translate-y-full",
            )}
          >
            menu
          </span>
          <span
            className={cn(
              "col-start-1 row-start-1 motion-safe:transition-[translate,visibility] motion-safe:duration-300",
              !isOpen && "invisible translate-y-full",
            )}
          >
            close
          </span>
        </span>
      </button>
      <div
        id={menuId}
        inert={!isOpen}
        style={{
          clipPath: `circle(${isOpen ? "150vmax" : "0px"} at ${revealOrigin})`,
        }}
        className={cn(
          "fixed inset-0 z-30 flex flex-col justify-end bg-background px-3 pb-16 motion-safe:transition-[clip-path,visibility] motion-safe:duration-500 motion-safe:ease-in-out",
          !isOpen && "invisible",
        )}
      >
        <ul className="border-t">
          {navLinks.map((navLink, index) => (
            <li
              key={navLink.id}
              style={{
                transitionDelay: isOpen ? `${200 + index * 60}ms` : "0ms",
              }}
              className={cn(
                "border-b motion-safe:transition-[translate,opacity] motion-safe:duration-500 motion-safe:ease-out",
                !isOpen && "translate-y-6 opacity-0",
              )}
            >
              <NavLink
                to={navLink.url}
                onClick={() => setIsOpen(false)}
                className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-2 py-5"
              >
                <span className="text-xs tabular-nums text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-4xl">{navLink.name}</span>
                <span
                  aria-hidden
                  className="hidden size-2 self-center rounded-full bg-foreground group-aria-[current=page]:block"
                />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
