import React from "react";
import { Check, X, BookOpen, LayoutGrid, Wrench, Users } from "lucide-react";
import type { BeforeAfterRow, UseCase } from "@/content/productDetails";

export function BeforeAfter({ productName, rows }: { productName: string; rows: BeforeAfterRow[] }) {
  return (
    <section className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <span className="text-xs font-bold uppercase tracking-widest text-jamanvar-saffron-600 mb-3 block">
        BEFORE AND AFTER
      </span>
      <h2 className="text-2xl sm:text-4xl font-extrabold text-jamanvar-navy-950 tracking-tight mb-8 max-w-3xl">
        What changes when {productName} is on the job
      </h2>

      <div className="hidden sm:grid grid-cols-[10rem_1fr_1fr] gap-x-6 pb-3 text-[11px] font-bold uppercase tracking-widest">
        <span />
        <span className="text-jamanvar-navy-900/50">Without it</span>
        <span className="text-jamanvar-saffron-700">With Jamanvar</span>
      </div>
      <div className="divide-y divide-jamanvar-navy-900/10 border-y border-jamanvar-navy-900/10">
        {rows.map((row) => (
          <div key={row.topic} className="grid grid-cols-1 sm:grid-cols-[10rem_1fr_1fr] gap-x-6 gap-y-2 py-5">
            <span className="text-sm font-bold text-jamanvar-navy-950">{row.topic}</span>
            <span className="flex items-start gap-2 text-xs sm:text-sm text-jamanvar-navy-900/60 leading-relaxed">
              <X className="w-4 h-4 shrink-0 mt-0.5 text-jamanvar-navy-900/30" />
              <span>{row.without}</span>
            </span>
            <span className="flex items-start gap-2 text-xs sm:text-sm text-jamanvar-navy-950 font-medium leading-relaxed">
              <Check className="w-4 h-4 shrink-0 mt-0.5 text-jamanvar-green-600" />
              <span>{row.with}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function UseCases({ items }: { items: UseCase[] }) {
  return (
    <section className="py-12 sm:py-16 bg-white border-y border-jamanvar-navy-900/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-bold uppercase tracking-widest text-jamanvar-saffron-600 mb-3 block">
          WHERE IT FITS
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-jamanvar-navy-950 tracking-tight mb-8 max-w-3xl">
          Restaurants that get the most out of it
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item, i) => (
            <div key={item.title} className="p-6 rounded-3xl bg-jamanvar-cream-50 border border-jamanvar-navy-900/10">
              <span className="inline-block text-[11px] font-mono font-bold text-jamanvar-saffron-700 bg-jamanvar-saffron-50 px-2 py-0.5 rounded-md border border-jamanvar-saffron-500/20 mb-3">
                0{i + 1}
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-jamanvar-navy-950 tracking-tight mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-jamanvar-navy-900/70 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SETUP_STEPS = [
  {
    icon: BookOpen,
    title: "Send us your menu",
    body: "A PDF, a photo or the paper menu itself. We set up your dishes, categories, spice levels, Jain options and prices.",
  },
  {
    icon: LayoutGrid,
    title: "Share your tables",
    body: "Tell us your table count and sections, and we configure your floor and your database around them.",
  },
  {
    icon: Wrench,
    title: "Pair your hardware",
    body: "We help configure ESC/POS thermal printers, USB and LAN connections, cash drawers and kitchen tablets.",
  },
  {
    icon: Users,
    title: "Train the team",
    body: "Captains, kitchen staff and cashiers are trained by video or on-site, and we run a test billing cycle before you open.",
  },
];

export function GettingStarted({ setupNote }: { setupNote: string }) {
  return (
    <section className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <span className="text-xs font-bold uppercase tracking-widest text-jamanvar-saffron-600 mb-3 block">
        GETTING STARTED
      </span>
      <h2 className="text-2xl sm:text-4xl font-extrabold text-jamanvar-navy-950 tracking-tight mb-3 max-w-3xl">
        Most restaurants are live within 24 to 48 hours
      </h2>
      <p className="text-sm sm:text-base text-jamanvar-navy-900/75 leading-relaxed mb-8 max-w-3xl">{setupNote}</p>
      <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {SETUP_STEPS.map((step, i) => {
          const Icon = step.icon;
          return (
            <li key={step.title} className="flex gap-4 p-5 rounded-2xl bg-white border border-jamanvar-navy-900/10 shadow-subtle">
              <span className="shrink-0 w-10 h-10 rounded-xl bg-jamanvar-navy-900 text-jamanvar-saffron-400 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </span>
              <div>
                <span className="block text-[10px] font-mono font-bold text-jamanvar-saffron-700 mb-0.5">STEP 0{i + 1}</span>
                <span className="block text-sm sm:text-base font-bold text-jamanvar-navy-950">{step.title}</span>
                <span className="block text-xs sm:text-sm text-jamanvar-navy-900/70 leading-relaxed mt-1">{step.body}</span>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
