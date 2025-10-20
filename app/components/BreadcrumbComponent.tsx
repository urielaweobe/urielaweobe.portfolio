import { SlashIcon } from "lucide-react";
import { CgArrowLongLeft } from "react-icons/cg";
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
  className?: string;
  previousPageUrl?: string;
  previousPage?: string;
};

export function BreadcrumbComponent({currentPage, className, previousPageUrl, previousPage}: BreadcrumbProps) {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={`${previousPageUrl}`} className="font-light flex items-center gap-1 group">
          <CgArrowLongLeft className="transition-transform duration-200 ease-in-out group-hover:-translate-x-1" />
            {previousPage}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage className="font-semibold">{currentPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
