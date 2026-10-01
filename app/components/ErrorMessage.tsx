import { PiArrowClockwiseThin, PiArrowRightThin } from "react-icons/pi";
import { isRouteErrorResponse } from "react-router";

export function ErrorMessage({ error }: { error: unknown }) {
  const status = isRouteErrorResponse(error) ? error.status : undefined;
  const isNotFound = status === 404;
  const developerDetails =
    import.meta.env.DEV && error instanceof Error
      ? (error.stack ?? error.message)
      : undefined;

  return (
    <section className="w-full flex flex-row justify-center">
      <div className="flex flex-col w-full gap-4 max-w-xs text-sm md:text-base lg:max-w-125">
        <p className="border-b pb-3 text-xs tabular-nums text-muted-foreground md:text-sm">
          {status ? `error ${status}` : "error"}
        </p>
        <h1 className="text-xl font-medium md:text-2xl">
          {isNotFound ? "not found" : "something went wrong"}
        </h1>
        <p>
          {isNotFound
            ? "this page doesn't exist."
            : "This page hit a problem while loading. It's not you, and trying again usually fixes it."}
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {!isNotFound && (
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="link-highlight group flex w-fit cursor-pointer items-center gap-x-1.5 py-0.5 font-semibold"
            >
              <span className="link-sweep">try again</span>
              <PiArrowClockwiseThin className="transition-transform duration-300 ease-in-out group-hover:rotate-180" />
            </button>
          )}
          <a
            href="/"
            className="link-highlight group flex w-fit items-center gap-x-1.5 py-0.5"
          >
            <span className="link-sweep">go home</span>
            <PiArrowRightThin className="transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
          </a>
        </div>
        {developerDetails && (
          <pre className="overflow-x-auto rounded-lg border p-4 text-xs text-muted-foreground">
            <code>{developerDetails}</code>
          </pre>
        )}
      </div>
    </section>
  );
}
