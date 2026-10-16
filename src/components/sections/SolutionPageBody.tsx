import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "./Breadcrumbs";
import { PhotoFrame } from "./PhotoFrame";
import { FaqList } from "./FaqList";
import { PageCTA } from "./PageCTA";
import { Pager } from "./Pager";
import { SectionHeading } from "./SectionHeading";
import { ProductMedia } from "./ProductMedia";
import { DeviceFrame, ScreenCaption } from "@/components/site/DeviceFrame";
import { SOLUTIONS, type Solution } from "@/content/solutions";
import { SCREEN_FOR_MOCKUP, type ScreenId } from "@/content/screens";

// Hero screens are chosen so they don't repeat the showcase further down.
const HERO_SCREEN: Record<string, ScreenId> = {
  operations: "inventory",
  "guest-experience": "tables",
  "kitchen-ops": "kds",
  insights: "owner",
  reliability: "offline",
};

export function SolutionPageBody({ solution }: { solution: Solution }) {
  const idx = SOLUTIONS.findIndex((s) => s.id === solution.id);
  const prev = SOLUTIONS[(idx - 1 + SOLUTIONS.length) % SOLUTIONS.length];
  const next = SOLUTIONS[(idx + 1) % SOLUTIONS.length];
  const screen = HERO_SCREEN[solution.id] ?? "pos";
  const portrait = screen === "qr" || screen === "owner";
  const seen = new Set<ScreenId>([screen]);
  const showcase = solution.showcase.filter((item) => {
    const sc = SCREEN_FOR_MOCKUP[item.mockup];
    if (!sc || seen.has(sc)) return false;
    seen.add(sc);
    return true;
  });

  return (
    <>
      {/* Hero: problem-led headline beside the product that answers it */}
      <section className="overflow-hidden border-b border-line bg-ivory">
        <div className="shell pb-16 pt-10 sm:pt-14 lg:pb-20">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Solutions" }, { label: solution.navTitle }]}
            className="mb-8"
          />
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <p className="eyebrow">{solution.navTitle}</p>
              <h1 className="display-xl mt-4">{solution.name}</h1>
              <p className="lead mt-6">{solution.heroDescription}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/book-a-demo" className="btn btn-primary">
                  Book a demo <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a href="#walkthrough" className="btn btn-secondary">
                  See it play out
                </a>
              </div>
            </div>
            <figure>
              {portrait ? (
                <div className="rounded-panel border border-brand-200 bg-brand-50 px-6 py-10 sm:py-12">
                  <DeviceFrame screen={screen} />
                </div>
              ) : (
                <DeviceFrame screen={screen} />
              )}
              <ScreenCaption className="mt-5">{solution.tagline} Shown with sample data.</ScreenCaption>
            </figure>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="section bg-surface">
        <div className="shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <SectionHeading eyebrow="The problem" title={solution.problemTitle} />
          <div className="space-y-5 text-[1.0625rem] leading-[1.8] text-ink-soft lg:pt-10">
            {solution.problemParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* The approach + outcomes */}
      <section className="section border-t border-line bg-ivory">
        <div className="shell">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <SectionHeading eyebrow="How Jamanvar handles it" title={solution.approachTitle} />
              <div className="mt-6 space-y-4 text-[1.0313rem] leading-[1.75] text-ink-soft">
                {solution.approachParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <PhotoFrame photo={solution.approachPhoto} className="reveal" />
          </div>

          <dl className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {solution.outcomes.map((o) => (
              <div key={o.term} className="reveal bg-surface p-6">
                <dt className="font-bold text-ink">{o.term}</dt>
                <dd className="mt-2 text-[0.9375rem] leading-6 text-ink-muted">{o.description}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 max-w-3xl text-[0.98rem] leading-7 text-ink-muted">
            <span className="font-bold text-ink">A good fit for: </span>
            {solution.bestFor}
          </p>
        </div>
      </section>

      {/* Walkthrough */}
      <section id="walkthrough" className="section bg-brand-50 text-ink">
        <div className="shell">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeading eyebrow={solution.walkthroughLabel.toLowerCase()} title="How the workflow changes" />
            <p className="text-[0.9375rem] leading-6 text-ink-muted">An illustrative scene built from the product&apos;s real capabilities.</p>
          </div>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {solution.walkthrough.map((step, i) => (
              <li key={step.title} className="reveal rounded-card border border-brand-200 bg-surface p-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-ink-950">{i + 1}</span>
                <h3 className="mt-4 text-[1.0625rem] font-bold leading-snug text-ink">{step.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-6 text-ink-soft">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What the team sees */}
      {showcase.length > 0 && (
        <section className="section bg-ivory-deep">
          <div className="shell">
            <SectionHeading eyebrow="What the team sees" title={showcase.length > 1 ? "The screens behind it" : "The screen behind it"} />
            <div className={showcase.length > 1 ? "mt-12 grid gap-12 md:grid-cols-2 md:gap-10" : "mt-12"}>
              {showcase.map((item) => (
                <figure
                  key={item.label}
                  className={showcase.length > 1 ? "reveal flex flex-col" : "reveal grid items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14"}
                >
                  <div className="flex flex-1 items-center rounded-panel bg-ivory p-6 sm:p-10">
                    <ProductMedia variant={item.mockup} className="w-full" />
                  </div>
                  <figcaption className={showcase.length > 1 ? "mt-5" : undefined}>
                    <span className="block text-xs font-bold uppercase tracking-[0.08em] text-brand-text">{item.label.toLowerCase()}</span>
                    <span className="mt-1.5 block text-[0.98rem] leading-7 text-ink-soft">{item.caption}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <ScreenCaption className="mt-8">Screens shown with sample restaurant data.</ScreenCaption>
          </div>
        </section>
      )}

      {/* Products + FAQ */}
      <section className="section bg-ivory">
        <div className="shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div>
            <SectionHeading eyebrow="The products behind it" title="Modules that solve this" />
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {solution.connectedModules.map((m) => (
                <li key={m.href}>
                  <Link href={m.href} className="group flex min-h-[3.5rem] items-center justify-between gap-4 font-bold text-ink hover:text-brand-text">
                    {m.name}
                    <ArrowRight className="h-4 w-4 text-brand-text transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="display-md">Questions owners ask</h2>
            <div className="mt-6">
              <FaqList items={solution.faqs} />
            </div>
          </div>
        </div>
      </section>

      <Pager
        label="More solutions"
        prev={{ href: `/solutions/${prev.id}`, name: prev.navTitle }}
        next={{ href: `/solutions/${next.id}`, name: next.navTitle }}
      />

      <PageCTA
        title="Which of these sounds like your restaurant?"
        description="Tell us what's slowing you down. We'll show you which modules help, and which you can leave alone."
        secondaryLabel="See how it works"
        secondaryHref="/how-it-works"
      />
    </>
  );
}
