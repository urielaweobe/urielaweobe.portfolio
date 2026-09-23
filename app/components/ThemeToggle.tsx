import { useEffect } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

const STORAGE_KEY = "theme";

function applyTheme(isDark: boolean) {
  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.style.colorScheme = isDark ? "dark" : "light";
}

export const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("${STORAGE_KEY}");
    var isDark = stored
      ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
  } catch (e) {}
})();
`;

export function ThemeToggle() {
  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => {
      if (!localStorage.getItem(STORAGE_KEY)) applyTheme(event.matches);
    };

    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const isDark = !document.documentElement.classList.contains("dark");
    applyTheme(isDark);
    try {
      localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="toggle dark mode"
      title="toggle dark mode"
      className="cursor-pointer rounded-md p-1 transition-colors hover:bg-accent hover:text-accent-foreground"
    >
      <LuSun className="hidden dark:block" />
      <LuMoon className="block dark:hidden" />
    </button>
  );
}
