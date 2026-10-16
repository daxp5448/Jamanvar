import { SectionHeading } from "@/components/sections/SectionHeading";
import { CONTACT } from "@/content/navigation";
import { GO_LIVE_NOTE, SETUP_STEPS } from "@/content/onboarding";

export function GettingStartedSection() {
  return (
    <section className="section bg-ivory">
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading eyebrow="Getting started" title="Set up with you, around your menu and tables." description={GO_LIVE_NOTE} />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <ol className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
            {SETUP_STEPS.map((step, i) => (
              <li key={step.title} className="reveal bg-surface p-6 sm:p-8">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-text ring-1 ring-brand/30">{i + 1}</span>
                <h3 className="mt-5 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-6 text-ink-muted">{step.body}</p>
              </li>
            ))}
          </ol>

          <aside className="reveal flex flex-col justify-between rounded-card border border-brand-200 bg-brand-50 p-7 text-ink sm:p-9">
            <div>
              <p className="eyebrow">Who you work with</p>
              <p className="mt-4 text-2xl font-bold leading-snug">The team that builds Jamanvar is the team that sets it up.</p>
              <p className="mt-4 leading-7 text-ink-soft">
                Jamanvar is made by {CONTACT.company} in Ahmedabad. You talk directly to the people who configure your menu,
                pair your printers and train your staff.
              </p>
            </div>
            <div className="mt-8 space-y-2 border-t border-line pt-6 text-[0.9375rem]">
              {CONTACT.phones.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} className="block font-bold text-ink hover:text-brand-text">
                  {p.display}
                </a>
              ))}
              <a href={`mailto:${CONTACT.email}`} className="block text-ink-soft hover:text-brand-text">
                {CONTACT.email}
              </a>
              <p className="pt-1 text-sm text-ink-muted">{CONTACT.hours}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
