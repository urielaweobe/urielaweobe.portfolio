import { PiArrowUpRightThin } from "react-icons/pi";
import { Link } from "react-router";

type LinkIndexProps = {
  links: {
    id: number;
    name: string;
    url: string;
    detail?: string;
    target?: string;
  }[];
};

export function LinkIndex({ links }: LinkIndexProps) {
  return (
    <ul className="group/list">
      {links.map((link, index) => (
        <li
          key={link.id}
          className="border-b motion-safe:transition-opacity motion-safe:duration-300 group-hover/list:opacity-35 hover:opacity-100 focus-within:opacity-100"
        >
          <Link
            to={link.url}
            target={link.target ?? "_blank"}
            className="group/row grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-2 gap-y-1 py-4 outline-offset-4"
          >
            <span className="text-xs tabular-nums text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-base md:text-lg motion-safe:transition-transform motion-safe:duration-300 group-hover/row:translate-x-2">
              {link.name}
            </span>
            <PiArrowUpRightThin
              aria-hidden
              className="size-4 self-center motion-safe:transition-transform motion-safe:duration-200 group-hover/row:translate-x-1 group-hover/row:-translate-y-1"
            />
            {link.detail && (
              <span className="col-start-2 text-xs text-muted-foreground break-all md:text-sm">
                {link.detail}
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
