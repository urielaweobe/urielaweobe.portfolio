import { useEffect, useId, useRef, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { useNavigate } from "react-router";
import { toggleTheme } from "~/components/ThemeToggle";
import { cn } from "~/lib/utils";
import { navLinks, projects, socials } from "~/utils";

type Command = {
  id: string;
  group: string;
  label: string;
  hint: string;
  run: () => void;
};

export function CommandMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [shortcutLabel, setShortcutLabel] = useState("⌘K");
  const navigate = useNavigate();
  const listId = useId();

  const commands: Command[] = [
    ...[
      { name: "home", url: "/" },
      ...navLinks,
      { name: "certifications", url: "/certifications" },
    ].map((page) => ({
      id: `page-${page.url}`,
      group: "pages",
      label: page.name,
      hint: page.url,
      run: () => navigate(page.url),
    })),
    ...projects.map((project) => ({
      id: `project-${project.slug}`,
      group: "case studies",
      label: project.title,
      hint: project.tech_used.slice(0, 2).join(" · "),
      run: () => navigate(`/projects/${project.slug}`),
    })),
    ...socials.map((social) => ({
      id: `social-${social.name}`,
      group: "elsewhere",
      label: social.name,
      hint: "↗",
      run: () => window.open(social.url, "_blank", "noopener"),
    })),
    {
      id: "download-cv",
      group: "actions",
      label: "download my cv",
      hint: "pdf",
      run: () => {
        const link = document.createElement("a");
        link.href = "/uriel-awe-obe-cv.pdf";
        link.download = "";
        link.click();
      },
    },
    {
      id: "toggle-theme",
      group: "actions",
      label: "switch theme",
      hint: "light / dark",
      run: toggleTheme,
    },
  ];

  const normalisedQuery = query.trim().toLowerCase();
  const matches = commands.filter((command) =>
    `${command.label} ${command.hint}`.toLowerCase().includes(normalisedQuery),
  );
  const groups = [...new Set(matches.map((command) => command.group))];
  const activeCommand = matches[activeIndex];

  const open = () => {
    setQuery("");
    setActiveIndex(0);
    dialogRef.current?.showModal();
  };

  const close = () => dialogRef.current?.close();

  const runCommand = (command: Command) => {
    close();
    command.run();
  };

  useEffect(() => {
    if (/Mac|iPhone|iPad/.test(navigator.userAgent)) return;
    setShortcutLabel("ctrl K");
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!(event.metaKey || event.ctrlKey) || event.key.toLowerCase() !== "k")
        return;
      event.preventDefault();
      if (dialogRef.current?.open) close();
      else open();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  });

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onBackdropClick = (event: MouseEvent) => {
      if (event.target === dialog) dialog.close();
    };
    dialog.addEventListener("click", onBackdropClick);
    return () => dialog.removeEventListener("click", onBackdropClick);
  }, []);

  useEffect(() => {
    if (!activeCommand) return;
    listRef.current
      ?.querySelector(`[data-command="${activeCommand.id}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [activeCommand]);

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, matches.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter" && activeCommand) {
      event.preventDefault();
      runCommand(activeCommand);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label="open command menu"
        className="cursor-pointer rounded-md -m-2 p-3 transition-colors hover:bg-accent hover:text-accent-foreground sm:m-0 sm:border sm:px-1.5 sm:py-0.5 sm:text-xs sm:text-muted-foreground"
      >
        <LuSearch className="sm:hidden" />
        <span className="hidden sm:inline">{shortcutLabel}</span>
      </button>
      <dialog
        ref={dialogRef}
        aria-label="command menu"
        className="mx-auto mt-4 w-[calc(100%-2rem)] sm:mt-[15vh] max-w-md overflow-hidden rounded-xl border bg-background/80 p-0 text-sm text-foreground shadow-2xl backdrop-blur-md backdrop-saturate-150 backdrop:bg-black/20 dark:backdrop:bg-black/50 md:text-base"
      >
        <input
          type="text"
          aria-controls={listId}
          aria-label="search pages and actions"
          placeholder="search pages and actions…"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActiveIndex(0);
          }}
          onKeyDown={onInputKeyDown}
          className="w-full border-b bg-transparent px-4 py-3 text-base outline-none placeholder:text-muted-foreground"
        />
        <ul
          ref={listRef}
          id={listId}
          aria-label="results"
          className="max-h-[40vh] overflow-y-auto overscroll-contain p-2 sm:max-h-[50vh]"
        >
          {groups.map((group) => (
            <li key={group}>
              <p className="px-2 pt-2 pb-1 text-xs text-muted-foreground">
                {group}
              </p>
              <ul>
                {matches
                  .filter((command) => command.group === group)
                  .map((command) => (
                    <li key={command.id}>
                      <button
                        type="button"
                        data-command={command.id}
                        onMouseMove={() =>
                          setActiveIndex(matches.indexOf(command))
                        }
                        onFocus={() => setActiveIndex(matches.indexOf(command))}
                        onClick={() => runCommand(command)}
                        className={cn(
                          "flex w-full cursor-pointer items-baseline justify-between gap-x-4 rounded-md px-2 py-2 text-left outline-none",
                          command === activeCommand &&
                            "bg-accent text-accent-foreground",
                        )}
                      >
                        <span>{command.label}</span>
                        <span className="text-xs text-muted-foreground">
                          {command.hint}
                        </span>
                      </button>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
          {matches.length === 0 && (
            <li className="px-2 py-6 text-center text-muted-foreground">
              nothing matches “{query}”
            </li>
          )}
        </ul>
      </dialog>
    </>
  );
}
