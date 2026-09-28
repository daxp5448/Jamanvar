import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-white/50">
      <ol className="flex items-center flex-wrap gap-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {item.href ? (
              <Link href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-white/80 font-medium">{item.label}</span>
            )}
            {i < items.length - 1 && <ChevronRight className="w-3 h-3 text-white/30" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}
