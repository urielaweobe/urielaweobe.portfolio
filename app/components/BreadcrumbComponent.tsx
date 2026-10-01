import { SlashIcon } from "lucide-react";
import { CgArrowLongLeft } from "react-icons/cg";
import { Link } from "react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

type BreadcrumbProps = {
  currentPage: string;
  headingTransitionName?: string;
  className?: string;
  previousPageUrl?: string;
  previousPage?: string;
};

export function BreadcrumbComponent({
  currentPage,
  headingTransitionName,
  className,
  previousPageUrl,
  previousPage,
}: BreadcrumbProps) {
  return (
    <>
      <Breadcrumb className={className}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild className="font-light">
              <Link
                to={previousPageUrl || "/"}
                viewTransition
                className="flex items-center gap-1 group"
              >
                <CgArrowLongLeft className="transition-transform duration-200 ease-in-out group-hover:-translate-x-1" />
                {previousPage}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <h1 style={{ viewTransitionName: headingTransitionName }}>
              <BreadcrumbPage className="font-semibold">
                {currentPage}
              </BreadcrumbPage>
            </h1>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <hr />
    </>
  );
}
