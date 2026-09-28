import React from "react";
import Link from "next/link";
import type { WorkflowStep } from "@/content/products";

export function WorkflowChips({ steps }: { steps: WorkflowStep[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
      {steps.map((step, idx) => {
        const chip = (
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-jamanvar-cream-100 border border-jamanvar-navy-900/10 text-[11px] sm:text-xs font-bold text-jamanvar-navy-900 whitespace-nowrap">
            {step.label}
          </span>
        );
        return (
          <div key={`${step.label}-${idx}`} className="flex items-center gap-2 sm:gap-3">
            {step.href ? (
              <Link href={step.href} className="hover:opacity-80 transition-opacity">
                {chip}
              </Link>
            ) : (
              chip
            )}
            {idx < steps.length - 1 && <span className="text-jamanvar-saffron-500 text-sm">→</span>}
          </div>
        );
      })}
    </div>
  );
}
