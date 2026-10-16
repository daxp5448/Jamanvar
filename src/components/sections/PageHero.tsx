import React from "react";
import { cn } from "@/lib/utils";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

interface PageHeroProps {
  /** Short label above the title. */
  badge: string;
  title: React.ReactNode;
  description: React.ReactNode;
  /** Buttons or links under the description. */
  children?: React.ReactNode;
  breadcrumbs?: Crumb[];
  /** Optional visual or panel shown beside the text on large screens. */
  aside?: React.ReactNode;
  className?: string;
}

export function PageHero({ badge, title, description, children, breadcrumbs, aside, className }: PageHeroProps) {
  const actions = children && <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">{children}</div>;
  return (
    <section className={cn("border-b border-line bg-ivory", className)}>
      {aside ? (
        <div className="shell grid items-center gap-12 pb-14 pt-10 sm:pb-16 sm:pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="max-w-3xl">
            {breadcrumbs && <Breadcrumbs items={breadcrumbs} className="mb-8" />}
            <p className="eyebrow">{badge}</p>
            <h1 className="display-xl mt-4">{title}</h1>
            <div className="lead mt-6 max-w-2xl">{description}</div>
            {actions}
          </div>
          <div className="min-w-0">{aside}</div>
        </div>
      ) : (
        // Text-only heroes split title and description so the width is used on large screens.
        <div className="shell pb-12 pt-10 sm:pb-16 sm:pt-12">
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} className="mb-8" />}
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-14">
            <div>
              <p className="eyebrow">{badge}</p>
              <h1 className="display-xl mt-4">{title}</h1>
            </div>
            <div className="lg:pb-2">
              <div className="lead max-w-2xl">{description}</div>
              {actions}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
