import React from "react";
import { Sparkles } from "lucide-react";

interface PageHeroProps {
  badge: string;
  title: React.ReactNode;
  description: string;
  children?: React.ReactNode;
}

export function PageHero({ badge, title, description, children }: PageHeroProps) {
  return (
    <section className="pt-32 pb-14 sm:pt-40 sm:pb-20 bg-jamanvar-navy-950 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-jamanvar-saffron-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-jamanvar-saffron-400 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{badge}</span>
        </div>

        <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-4">
          {title}
        </h1>

        <p className="text-sm sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
          {description}
        </p>

        {children}
      </div>
    </section>
  );
}
