import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { PageCTA } from "@/components/sections/PageCTA";
import { PhotoFrame } from "@/components/sections/PhotoFrame";
import { DeviceFrame, ScreenCaption } from "@/components/site/DeviceFrame";
import { WORKFLOW_STAGES, stageName } from "@/content/workflow";
import type { ScreenId } from "@/content/screens";
import { cn } from "@/lib/utils";
import { OG_IMAGE } from "@/content/brand";

export const metadata: Metadata = {
  title: "How It Works | Jamanvar Restaurant Workflow",
  description:
    "One order, one connected flow: captain and QR ordering, POS billing, kitchen display routing, the live floor plan, settlement and owner reports.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How It Works | Jamanvar Restaurant Workflow",
    description: "One order. One connected flow. See how a Jamanvar restaurant runs, stage by stage.",
    type: "website",
    images: [OG_IMAGE],
  },
};

const STAGE_SCREEN: Record<string, ScreenId | "receipt"> = {
  order: "qr",
  pos: "pos",
  kitchen: "kds",
  table: "tables",
  bill: "receipt",
  insight: "reports",
};

function StageVisual({ id }: { id: string }) {
  const s = STAGE_SCREEN[id];
  if (s === "receipt") {
    return <PhotoFrame photo={{ visual: "receipt" }} />;
  }
  if (s === "qr") {
    return (
      <div className="grid grid-cols-2 items-end gap-5 rounded-panel bg-ivory-deep p-6 sm:gap-8 sm:p-10">
        <DeviceFrame screen="qr" />
        <DeviceFrame screen="captain" className="mb-6" />
      </div>
    );
  }
  return <DeviceFrame screen={s} />;
}

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        badge="How it works"
        title="One order. One connected flow."
        description="Follow a single order from the table to the owner's phone. At every stage, the people doing the work see what they need, and nobody types the same thing twice."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "How it works" }]}
      >
        <ol className="flex flex-wrap gap-2" aria-label="Stages">
          {WORKFLOW_STAGES.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="flex items-center gap-2 rounded-full border border-line-strong bg-surface px-3.5 py-2 text-sm font-semibold text-ink-soft transition-colors hover:border-brand hover:text-ink"
              >
                <span className="text-brand-text">{s.step}</span>
                {stageName(s.label)}
              </a>
            </li>
          ))}
        </ol>
      </PageHero>

      <section className="section bg-surface">
        <ol className="shell relative">
          {WORKFLOW_STAGES.map((stage, i) => (
            <li
              key={stage.id}
              id={stage.id}
              className={cn("grid gap-10 lg:grid-cols-[5rem_1fr_1.1fr] lg:gap-12", i > 0 && "mt-20 border-t border-line pt-20 sm:mt-24 sm:pt-24")}
            >
              <div className="flex items-center gap-4 lg:block">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-lg font-extrabold text-ink-950">
                  {stage.step}
                </span>
                <span className="text-sm font-bold uppercase tracking-[0.08em] text-ink-muted lg:mt-4 lg:block">{stage.label}</span>
              </div>
              <div className="reveal">
                <h2 className="display-lg">{stage.title}</h2>
                <p className="mt-5 text-[1.0625rem] leading-[1.75] text-ink-soft">{stage.description}</p>
                <p className="mt-4 text-[0.98rem] leading-7 text-ink-muted">{stage.detail}</p>
                {stage.metric && (
                  <p className="mt-7 inline-flex items-baseline gap-3 rounded-card border border-brand-200 bg-brand-50 px-5 py-3">
                    <span className="text-2xl font-extrabold text-ink">{stage.metric}</span>
                    <span className="text-sm text-ink-soft">{stage.metricLabel}</span>
                  </p>
                )}
                <div className="mt-7">
                  <Link href={stage.href} className="link-arrow text-[0.9375rem]">
                    See the product behind this stage <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
              <figure className="reveal">
                <StageVisual id={stage.id} />
              </figure>
            </li>
          ))}
        </ol>
        <div className="shell">
          <ScreenCaption className="mt-16 border-t border-line pt-6">
            Product screens shown with sample restaurant data. Timings are the product&apos;s design targets, not measured customer
            results.
          </ScreenCaption>
        </div>
      </section>

      <PageCTA
        title="See this flow run on your own menu."
        description="We'll set up a walkthrough with your actual tables, dishes and printer hardware."
        secondaryLabel="Explore solutions"
        secondaryHref="/solutions/operations"
      />
    </>
  );
}
