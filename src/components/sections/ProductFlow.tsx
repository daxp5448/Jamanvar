import React from "react";
import Link from "next/link";
import { BarChart3, ChefHat, LayoutGrid, ReceiptText, Smartphone, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";
import { WORKFLOW_STAGES, stageName } from "@/content/workflow";
import type { ProductFlow as ProductFlowContent } from "@/content/productDetails";
import { SectionHeading } from "./SectionHeading";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  order: Smartphone,
  pos: ReceiptText,
  kitchen: ChefHat,
  table: LayoutGrid,
  bill: Wallet,
  insight: BarChart3,
};

// Shows the six-stage restaurant flow with this product's stages highlighted,
// followed by what the product does at each of them.
export function ProductFlow({ productName, flow }: { productName: string; flow: ProductFlowContent }) {
  const mine = new Set(Object.keys(flow.stageNotes));
  const notes = WORKFLOW_STAGES.filter((s) => mine.has(s.id));

  return (
    <section className="section bg-brand-50 text-ink">
      <div className="shell">
        <SectionHeading eyebrow="Where it fits in the flow" title={flow.title} description={flow.intro} />

        <ol className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-brand-200 bg-brand-200 sm:grid-cols-3 lg:grid-cols-6">
          {WORKFLOW_STAGES.map((stage) => {
            const Icon = ICONS[stage.id] ?? Smartphone;
            const active = mine.has(stage.id);
            return (
              <li key={stage.id} className={cn("p-5", active ? "bg-brand text-ink-950" : "bg-surface text-ink-soft")}>
                <div className="flex items-center justify-between">
                  <span className={cn("text-xs font-bold", active ? "text-ink-950" : "text-ink-muted")}>{stage.step}</span>
                  <Icon className={cn("h-5 w-5", active ? "text-ink-950" : "text-ink-faint")} aria-hidden="true" />
                </div>
                <Link href={stage.href} className={cn("mt-6 block font-bold hover:underline", active ? "text-ink-950" : "text-ink")}>
                  {stageName(stage.label)}
                </Link>
                {active && <span className="mt-1 block text-xs font-semibold">{productName}</span>}
              </li>
            );
          })}
        </ol>

        <dl className="mt-10 grid gap-8 md:grid-cols-2">
          {notes.map((stage) => (
            <div key={stage.id} className="reveal border-l-2 border-brand pl-5">
              <dt className="font-bold text-ink">{stage.title}</dt>
              <dd className="mt-2 text-[0.98rem] leading-7 text-ink-soft">{flow.stageNotes[stage.id]}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
