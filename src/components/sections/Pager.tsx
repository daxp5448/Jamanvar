import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface PagerItem {
  href: string;
  name: string;
}

export function Pager({ prev, next, label }: { prev: PagerItem; next: PagerItem; label: string }) {
  return (
    <nav aria-label={label} className="shell">
      <div className="grid grid-cols-2 gap-4 border-t border-line py-8">
        <Link href={prev.href} className="group min-w-0">
          <span className="flex items-center gap-1.5 text-sm text-ink-muted">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" /> Previous
          </span>
          <span className="mt-1 block truncate font-bold text-ink group-hover:text-brand-text">{prev.name}</span>
        </Link>
        <Link href={next.href} className="group min-w-0 text-right">
          <span className="flex items-center justify-end gap-1.5 text-sm text-ink-muted">
            Next <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
          <span className="mt-1 block truncate font-bold text-ink group-hover:text-brand-text">{next.name}</span>
        </Link>
      </div>
    </nav>
  );
}
