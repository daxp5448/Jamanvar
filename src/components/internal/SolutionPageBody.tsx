import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { InternalNavbar } from "./InternalNavbar";
import { Footer } from "@/components/Footer";
import { WatermarkOverlay } from "@/components/WatermarkOverlay";
import { Breadcrumbs } from "./Breadcrumbs";
import { ProductMedia } from "./ProductMedia";
import { PhotoFrame } from "./PhotoFrame";
import { FaqList } from "./FaqList";
import { PageCTA } from "./PageCTA";
import { SOLUTIONS, type Solution } from "@/content/solutions";

export function SolutionPageBody({ solution }: { solution: Solution }) {
  const idx = SOLUTIONS.findIndex((s) => s.id === solution.id);
  const prev = SOLUTIONS[(idx - 1 + SOLUTIONS.length) % SOLUTIONS.length];
  const next = SOLUTIONS[(idx + 1) % SOLUTIONS.length];

  return (
    <main className="min-h-screen bg-jamanvar-cream-100 text-jamanvar-navy-950 selection:bg-jamanvar-saffron-200 selection:text-jamanvar-navy-900 relative">
      <WatermarkOverlay />
      <InternalNavbar />

      {/* Hero */}
      <section className="pt-28 pb-14 sm:pt-36 sm:pb-20 bg-jamanvar-navy-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-jamanvar-saffron-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Solutions" },
                { label: solution.navTitle },
              ]}
            />
          </div>
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-mono font-bold text-jamanvar-saffron-400 bg-white/10 border border-white/15 px-3 py-1 rounded-full mb-4">
              {solution.index} / {solution.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-4">
              {solution.name}
            </h1>
            <p className="text-sm sm:text-lg text-white/75 leading-relaxed font-normal mb-8">
              {solution.heroDescription}
            </p>
            <Link
              href="/book-a-demo"
              className="inline-flex w-full sm:w-auto px-6 py-3 rounded-xl bg-jamanvar-saffron-500 hover:bg-jamanvar-saffron-600 text-white font-bold text-xs sm:text-sm shadow-saffron items-center justify-center gap-2"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-jamanvar-navy-950 tracking-tight mb-4">
          {solution.problemTitle}
        </h2>
        {solution.problemParagraphs.map((p, i) => (
          <p key={i} className="text-sm sm:text-base text-jamanvar-navy-900/75 leading-relaxed mb-4 max-w-3xl">
            {p}
          </p>
        ))}
      </section>

      {/* The approach + outcomes */}
      <section className="py-12 sm:py-20 bg-jamanvar-cream-50 border-y border-jamanvar-navy-900/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-2">
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-jamanvar-navy-950 tracking-tight mb-4">
                {solution.approachTitle}
              </h2>
              {solution.approachParagraphs.map((p, i) => (
                <p key={i} className="text-sm sm:text-base text-jamanvar-navy-900/75 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </div>
            <div className="lg:col-span-5">
              <PhotoFrame photo={solution.approachPhoto} />
            </div>
          </div>
          <p className="text-xs sm:text-sm text-jamanvar-navy-900/55 italic mt-4 mb-8">{solution.bestFor}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 pt-6 border-t border-jamanvar-navy-900/10">
            {solution.outcomes.map((o) => (
              <div key={o.term}>
                <span className="block text-sm font-bold text-jamanvar-navy-950">{o.term}</span>
                <span className="block text-xs sm:text-sm text-jamanvar-navy-900/70 leading-relaxed mt-0.5">
                  {o.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Walkthrough */}
      <section className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-bold uppercase tracking-widest text-jamanvar-saffron-600 mb-6 block">
          {solution.walkthroughLabel}
        </span>
        <ol className="space-y-6">
          {solution.walkthrough.map((step, i) => (
            <li key={step.title} className="flex gap-4 sm:gap-6">
              <span className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-jamanvar-navy-900 text-white text-xs sm:text-sm font-mono font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <div className="pt-0.5 sm:pt-1.5">
                <span className="block text-sm sm:text-base font-bold text-jamanvar-navy-950">{step.title}</span>
                <span className="block text-xs sm:text-sm text-jamanvar-navy-900/70 leading-relaxed mt-1 max-w-2xl">
                  {step.description}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Showcase */}
      <section className="py-12 sm:py-16 bg-jamanvar-cream-50 border-y border-jamanvar-navy-900/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          <span className="text-xs font-bold uppercase tracking-widest text-jamanvar-saffron-600 block">
            WHAT IT LOOKS LIKE
          </span>
          {solution.showcase.map((item, i) => {
            const reversed = i % 2 === 1;
            return (
              <div key={item.label} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
                <div className={reversed ? "lg:col-span-5 lg:order-2" : "lg:col-span-5"}>
                  <span className="inline-block text-xs font-mono font-bold text-jamanvar-saffron-700 bg-jamanvar-saffron-50 px-2.5 py-0.5 rounded-md border border-jamanvar-saffron-500/20 mb-3">
                    0{i + 1} / {item.label}
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-jamanvar-navy-900/85 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
                <div className={reversed ? "lg:col-span-7 lg:order-1" : "lg:col-span-7"}>
                  <ProductMedia variant={item.mockup} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Connected modules */}
      <section className="py-12 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-jamanvar-navy-950 tracking-tight mb-6">
          The products behind it
        </h2>
        <div className="flex flex-wrap gap-2.5">
          {solution.connectedModules.map((m) => (
            <Link
              key={m.name}
              href={m.href}
              className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-jamanvar-navy-900/10 hover:border-jamanvar-saffron-500/50 text-xs sm:text-sm font-semibold text-jamanvar-navy-900 transition-colors"
            >
              <span>{m.name}</span>
              <ArrowRight className="w-3.5 h-3.5 text-jamanvar-saffron-500 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-12 sm:pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-jamanvar-navy-950 tracking-tight mb-6">
          Questions owners ask
        </h2>
        <FaqList items={solution.faqs} />
      </section>

      {/* Pager */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-6 border-t border-jamanvar-navy-900/10">
          <Link
            href={`/solutions/${prev.id}`}
            className="group flex items-center gap-2 text-xs sm:text-sm font-semibold text-jamanvar-navy-900/70 hover:text-jamanvar-navy-950 min-w-0"
          >
            <ArrowLeft className="w-3.5 h-3.5 shrink-0 text-jamanvar-saffron-600 group-hover:-translate-x-0.5 transition-transform" />
            <span className="truncate">{prev.navTitle}</span>
          </Link>
          <Link
            href={`/solutions/${next.id}`}
            className="group flex items-center gap-2 text-xs sm:text-sm font-semibold text-jamanvar-navy-900/70 hover:text-jamanvar-navy-950 min-w-0 text-right"
          >
            <span className="truncate">{next.navTitle}</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0 text-jamanvar-saffron-600 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      <PageCTA
        title="Which of these sounds like your restaurant?"
        description="Tell us what's slowing you down and we'll show you exactly which modules fix it, and which you can leave alone."
        secondaryLabel="See How It Works"
        secondaryHref="/how-it-works"
      />

      <Footer />
    </main>
  );
}
