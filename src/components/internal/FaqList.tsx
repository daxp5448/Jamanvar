import React from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/content/products";

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-jamanvar-navy-900/10 border-y border-jamanvar-navy-900/10">
      {items.map((item) => (
        <details key={item.question} className="group py-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm sm:text-base font-bold text-jamanvar-navy-950 [&::-webkit-details-marker]:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-jamanvar-saffron-500 rounded-lg">
            <span>{item.question}</span>
            <ChevronDown className="w-4 h-4 shrink-0 text-jamanvar-saffron-600 transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <p className="pb-5 pr-8 text-xs sm:text-sm text-jamanvar-navy-900/70 leading-relaxed max-w-3xl">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
