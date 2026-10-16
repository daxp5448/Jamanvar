import { Plus } from "lucide-react";
import type { FaqItem } from "@/content/products";

// Native <details> keeps the accordion keyboard- and screen-reader-friendly
// without extra JavaScript; globals.css adds a short open animation.
export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.question} className="faq-item group">
          <summary className="flex min-h-[3.75rem] cursor-pointer list-none items-center justify-between gap-6 py-4 text-left text-base font-bold text-ink transition-colors hover:text-brand-text sm:text-[1.0625rem]">
            <span>{item.question}</span>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line-strong bg-surface text-ink transition-[transform,background-color] duration-200 group-open:rotate-45 group-open:border-brand group-open:bg-brand">
              <Plus className="h-4 w-4" aria-hidden="true" />
            </span>
          </summary>
          <div className="faq-body max-w-3xl pb-6 pr-12 text-[0.98rem] leading-7 text-ink-muted">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
