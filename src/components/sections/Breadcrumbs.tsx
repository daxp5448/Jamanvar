import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm text-ink-muted", className)}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
              {item.href && !last ? (
                <Link href={item.href} className="transition-colors hover:text-ink">
                  {item.label}
                </Link>
              ) : (
                <span className={cn(last && "font-semibold text-ink")} aria-current={last ? "page" : undefined}>
                  {item.label}
                </span>
              )}
              {!last && <ChevronRight className="h-3.5 w-3.5 text-ink-faint" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
