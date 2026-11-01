import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  BadgeIndianRupee,
  Check,
  ChefHat,
  ClipboardList,
  Download,
  Laptop,
  MonitorSmartphone,
  Network,
  Settings2,
  ShieldCheck,
  UtensilsCrossed,
} from "lucide-react";
import { FaqList } from "@/components/sections/FaqList";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { APPLICATIONS, type ApplicationId } from "@/content/applications";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "JAMANVAAR Apps | Download Restaurant Applications",
  description:
    "Download the official JAMANVAAR Windows applications for restaurant billing, administration, captain service, kitchen display and self-service ordering.",
  alternates: { canonical: "/apps" },
};

const APP_ICONS: Record<ApplicationId, LucideIcon> = {
  kiosk: MonitorSmartphone,
  pos: BadgeIndianRupee,
  "restaurant-admin": Settings2,
  captain: ClipboardList,
  kds: ChefHat,
};

const INSTALLATION_POINTS = [
  {
    icon: Laptop,
    title: "Easy installation",
    body: "Download and install the application on your Windows device.",
  },
  {
    icon: Network,
    title: "Connected operations",
    body: "Different applications support different parts of your restaurant workflow.",
  },
  {
    icon: ShieldCheck,
    title: "Dedicated support",
    body: "Our team can help with setup, configuration and installation.",
  },
] as const;

const FAQS = [
  {
    question: "Which operating system is supported?",
    answer: "All listed installers are Windows .exe applications.",
  },
  {
    question: "Are these official JAMANVAAR applications?",
    answer: "Yes, these are the official installers distributed through the JAMANVAAR GitHub release.",
  },
  {
    question: "Which application should I install?",
    answer: "Choose the application based on your role and restaurant workflow.",
  },
  {
    question: "Do I need assistance installing the applications?",
    answer: "Contact the JAMANVAAR team for installation and configuration assistance.",
  },
];

function WorkstationPanel() {
  return (
    <div className="relative mx-auto max-w-lg" aria-hidden="true">
      <div className="absolute -inset-3 rounded-panel border border-brand-100 bg-brand-50/60 sm:-inset-5" />
      <div className="relative overflow-hidden rounded-panel border border-line-strong bg-surface shadow-card">
        <div className="flex items-center justify-between border-b border-line bg-ivory-deep px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-btn bg-brand text-ink">
              <UtensilsCrossed className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-extrabold text-ink">JAMANVAAR workstation</p>
              <p className="text-xs text-ink-muted">One restaurant, connected</p>
            </div>
          </div>
          <span className="flex items-center gap-1.5 text-xs font-bold text-ink-soft">
            <span className="h-2 w-2 rounded-full bg-success" /> Ready
          </span>
        </div>
        <div className="grid grid-cols-2 gap-px bg-line sm:grid-cols-5">
          {APPLICATIONS.map((app) => {
            const Icon = APP_ICONS[app.id];
            return (
              <div key={app.id} className="flex min-h-28 flex-col justify-between bg-surface p-4 last:col-span-2 sm:min-h-32 sm:p-3.5 sm:last:col-span-1">
                <Icon className="h-5 w-5 text-brand-deep" />
                <div>
                  <p className="text-sm font-bold leading-tight text-ink">{app.shortName}</p>
                  <p className="mt-1 text-[0.6875rem] text-ink-muted">Windows app</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-2 border-t border-line px-5 py-3 text-xs text-ink-muted">
          <Check className="h-3.5 w-3.5 text-success" strokeWidth={3} /> Five tools, one operating flow
        </div>
      </div>
    </div>
  );
}

export default function AppsPage() {
  return (
    <>
      <PageHero
        badge="JAMANVAAR applications"
        title="Everything you need to run your restaurant."
        description="Download the official JAMANVAAR applications for your restaurant. From billing and kitchen operations to self-service ordering, every application works together to simplify your daily operations."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Apps" }]}
        aside={<WorkstationPanel />}
      />

      <section className="section bg-surface" aria-labelledby="applications-heading">
        <div className="shell">
          <SectionHeading
            id="applications-heading"
            title="Download our applications"
            description="Choose the application you need and install it on your Windows device."
            className="max-w-2xl"
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-6 lg:gap-6">
            {APPLICATIONS.map((app, index) => {
              const Icon = APP_ICONS[app.id];
              return (
                <article
                  key={app.id}
                  className={cn(
                    "group reveal flex min-h-full flex-col rounded-card border border-line bg-surface-white p-6 shadow-subtle transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-card sm:p-7 lg:col-span-2",
                    index === 3 && "lg:col-start-2"
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-card border border-brand-200 bg-brand-50 text-brand-text">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="rounded-full border border-line bg-ivory px-3 py-1 text-xs font-bold text-ink-soft">{app.version}</span>
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold tracking-[-0.02em] text-ink">
                    {app.name}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.9375rem] leading-7 text-ink-muted">{app.description}</p>

                  <div className="mt-6 flex items-center gap-3 border-t border-line pt-5 text-sm text-ink-soft">
                    <Laptop className="h-4 w-4 text-brand-deep" aria-hidden="true" />
                    <span className="font-semibold">{app.platform}</span>
                    <span className="text-line-strong" aria-hidden="true">/</span>
                    <span className="truncate text-xs text-ink-muted">.exe installer</span>
                  </div>

                  <a
                    href={app.downloadUrl}
                    download={app.installer}
                    className="btn btn-primary btn-block mt-5"
                    aria-label={`${app.downloadLabel} for Windows, version ${app.version}`}
                  >
                    {app.downloadLabel}
                    <Download className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
                  </a>
                  <p className="mt-3 text-center text-xs text-ink-muted">Windows installer · Direct download</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-tight border-y border-line bg-ivory-deep" aria-labelledby="installation-heading">
        <div className="shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-14">
          <div>
            <h2 id="installation-heading" className="display-md">Built for your restaurant. Ready to install.</h2>
            <p className="mt-4 max-w-xl text-[0.98rem] leading-7 text-ink-muted">
              JAMANVAAR applications are designed to work together as part of a connected restaurant management ecosystem.
            </p>
          </div>
          <ul className="grid gap-6 sm:grid-cols-3 sm:gap-4">
            {INSTALLATION_POINTS.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-4 sm:block">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-200 bg-brand-50 text-brand-text">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold text-ink sm:mt-4">{title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-ink-muted">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-ivory" aria-labelledby="apps-faq-heading">
        <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <SectionHeading id="apps-faq-heading" as="h2" title="Application questions" eyebrow="Downloads and installation" className="lg:sticky lg:top-28 lg:self-start" />
          <div>
            <FaqList items={FAQS} />
          </div>
        </div>
      </section>
    </>
  );
}
