import { data } from "react-router";
import { BreadcrumbComponent } from "~/components/BreadcrumbComponent";
import { siteName } from "~/lib/meta";

export function loader() {
  return data(null, { status: 404 });
}

export function meta() {
  return [{ title: `not found — ${siteName}` }];
}

export default function NotFound() {
  return (
    <section className="w-full flex flex-row justify-center">
      <div className="flex flex-col w-full gap-4 max-w-xs text-sm md:text-base lg:max-w-125">
        <BreadcrumbComponent
          currentPage="not found"
          previousPage="home"
          previousPageUrl="/"
        />
        <p>this page doesn't exist.</p>
      </div>
    </section>
  );
}
