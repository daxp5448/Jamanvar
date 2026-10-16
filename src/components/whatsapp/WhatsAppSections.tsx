import Link from "next/link";
import {
  ArrowRight,
  ArrowLeftRight,
  BadgeCheck,
  Bell,
  CheckCheck,
  ChefHat,
  Home,
  MessageCircle,
  PauseCircle,
  PenLine,
  RefreshCw,
  ShoppingBag,
  Store,
  UserRound,
} from "lucide-react";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FaqList } from "@/components/sections/FaqList";
import { BrandPanel } from "@/components/site/BrandPanel";
import { ScreenCaption } from "@/components/site/DeviceFrame";
import { WhatsAppChat } from "@/components/site/WhatsAppChat";
import {
  BENEFITS,
  CHAT_SCENES,
  CUSTOMER_STEPS,
  FAQS,
  OWNER_CONTROLS,
  REQUIREMENTS,
  TEAM_STEPS,
} from "@/content/whatsappOrdering";

const CHAT_NOTE = "Illustration of the ordering chat with a sample menu. Your restaurant's own name, photos and prices appear in the real conversation.";

const HERO_POINTS = [
  { icon: ShoppingBag, label: "Takeaway" },
  { icon: Home, label: "Home delivery" },
  { icon: MessageCircle, label: "No app to install" },
];

/** WhatsApp's own green, used only as a small recognisable accent. */
function WhatsAppDot() {
  return <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-[#25D366]" />;
}

export function WhatsAppHero() {
  return (
    <section className="overflow-hidden border-b border-line bg-ivory">
      <div className="shell grid items-center gap-12 pb-16 pt-10 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-20">
        <div>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Products", href: "/features" }, { label: "WhatsApp Ordering" }]} className="mb-8" />
          <p className="eyebrow">
            <WhatsAppDot /> WhatsApp Ordering
          </p>
          <h1 className="display-xl mt-4 lg:text-[3.3rem] xl:text-[4.15rem]">Your restaurant. Your menu. Right inside WhatsApp.</h1>
          <p className="lead mt-6">
            Let customers order takeaway or home delivery on WhatsApp. They browse your menu, build a cart and pay with a secure
            link, and the order reaches your Jamanvar order desk and kitchen.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/book-a-demo" className="btn btn-primary">
              Book a demo <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href="#how-it-works" className="btn btn-secondary">
              See how it works
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-6 text-[0.9375rem] font-semibold text-ink-soft">
            {HERO_POINTS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-brand-deep" aria-hidden="true" /> {label}
              </li>
            ))}
          </ul>
        </div>
        <figure>
          <BrandPanel>
            <WhatsAppChat
              tall
              messages={CHAT_SCENES.browse}
              label="WhatsApp chat with Your Restaurant: the customer says hi, gets the welcome menu, adds Paneer Tikka Angara from a product card and sees a cart totalling ₹760 with a Checkout button."
            />
          </BrandPanel>
          <ScreenCaption className="mt-5">{CHAT_NOTE}</ScreenCaption>
        </figure>
      </div>
    </section>
  );
}

export function WhatsAppBenefits() {
  return (
    <section className="section bg-surface">
      <div className="shell">
        <SectionHeading eyebrow="Why WhatsApp" title="Ordering that feels like messaging." />
        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {BENEFITS.map((b, i) => (
            <li key={b.title} className="reveal border-t-2 border-ink pt-5">
              <span className="text-sm font-bold text-brand-text">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-bold leading-snug text-ink">{b.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-6 text-ink-muted">{b.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function WhatsAppHowItWorks() {
  return (
    <section id="how-it-works" className="section border-t border-line bg-ivory">
      <div className="shell">
        <SectionHeading
          eyebrow="How it works"
          title="Simple for the customer. One order desk for your team."
          description="The customer orders in the chat. Your team sees a paid order in Jamanvar, ready to accept."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="reveal rounded-panel border border-line bg-surface p-7 sm:p-10">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-ink">
              <UserRound className="h-4 w-4 text-brand-text" aria-hidden="true" /> For customers
            </h3>
            <StepList steps={CUSTOMER_STEPS} />
          </div>
          <div className="reveal rounded-panel border border-brand-200 bg-brand-50 p-7 text-ink sm:p-10">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em]">
              <ChefHat className="h-4 w-4 text-brand-text" aria-hidden="true" /> For your team
            </h3>
            <StepList steps={TEAM_STEPS} />
          </div>
        </div>
      </div>
    </section>
  );
}

function StepList({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="mt-8 space-y-7">
      {steps.map((s, i) => (
        <li key={s.title} className="grid grid-cols-[2.25rem_1fr] gap-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-ink-950">{i + 1}</span>
          <div>
            <p className="font-bold text-ink">{s.title}</p>
            <p className="mt-1 text-[0.9375rem] leading-6 text-ink-muted">{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function WhatsAppFulfilment() {
  return (
    <section className="section bg-ivory-deep">
      <div className="shell">
        <SectionHeading
          eyebrow="Takeaway and home delivery"
          title="Collect it or have it delivered. Same chat."
          description="The address step decides it: share an address for delivery, or skip it to collect."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="reveal grid items-center gap-8 rounded-panel bg-surface p-7 sm:grid-cols-[1fr_15.5rem] sm:p-10">
            <div>
              <ShoppingBag className="h-6 w-6 text-brand-deep" aria-hidden="true" />
              <h3 className="display-md mt-4">Takeaway</h3>
              <p className="mt-3 text-[0.98rem] leading-7 text-ink-soft">
                Customers order before they leave home or the office. At the address step they tap Skip, place the order and pay
                with the link. A WhatsApp message tells them when it&apos;s ready to collect.
              </p>
            </div>
            <WhatsAppChat
              messages={CHAT_SCENES.pickup}
              className="max-w-[15.5rem]"
              label="WhatsApp chat: the customer taps Skip at the address step, the order is placed with reference ORD-1043, and a later message says it is ready for pickup."
            />
          </article>
          <article className="reveal grid items-center gap-8 rounded-panel border border-brand-200 bg-brand-50 p-7 sm:grid-cols-[1fr_15.5rem] sm:p-10">
            <div>
              <Home className="h-6 w-6 text-brand-deep" aria-hidden="true" />
              <h3 className="display-md mt-4">Home delivery</h3>
              <p className="mt-3 text-[0.98rem] leading-7 text-ink-soft">
                Customers type their address or share their WhatsApp location. It appears on the order summary before they place
                the order, so they can check it.
              </p>
              <p className="mt-4 text-sm leading-6 text-ink-muted">
                Your own team handles the delivery. Jamanvar doesn&apos;t provide delivery riders or live tracking.
              </p>
            </div>
            <WhatsAppChat
              messages={CHAT_SCENES.delivery}
              className="max-w-[15.5rem]"
              label="WhatsApp chat: the customer shares their location, reviews the order summary with the delivery location, places the order and receives a payment link."
            />
          </article>
        </div>
        <ScreenCaption className="mt-6">{CHAT_NOTE}</ScreenCaption>
      </div>
    </section>
  );
}

const FLOWS = [
  { icon: RefreshCw, text: "Menu, prices and sold-out dishes come from Jamanvar", route: "Jamanvar → WhatsApp menu" },
  { icon: BadgeCheck, text: "Paid orders arrive in POS Admin's order desk", route: "WhatsApp → Jamanvar" },
  { icon: Bell, text: "Accepted, preparing and ready updates go back to the customer", route: "Jamanvar → customer's chat" },
];

export function WhatsAppEcosystem() {
  return (
    <section className="section bg-brand-50 text-ink">
      <div className="shell">
        <SectionHeading eyebrow="Part of Jamanvar"
          title="WhatsApp orders join the same kitchen."
          description="Connect your WhatsApp ordering account to your Jamanvar restaurant once, with a key generated in POS Admin. After that, the two stay in step."
        />

        <div className="mt-12 grid items-center gap-4 lg:grid-cols-[1fr_auto_1.2fr_auto_1fr]">
          <Node icon={MessageCircle} title="Customer on WhatsApp" body="Browses, orders and pays in the chat." />
          <ArrowLeftRight className="mx-auto h-6 w-6 rotate-90 text-brand-text lg:rotate-0" aria-hidden="true" />
          <div className="rounded-card border-2 border-brand bg-surface p-6 shadow-card">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-brand-text">Jamanvar POS Admin</p>
            <p className="mt-2 text-xl font-bold">Order desk</p>
            <p className="mt-2 text-[0.9375rem] leading-6 text-ink-soft">
              WhatsApp orders appear with their own badge. Accept them, or switch on auto-accept, and pause online orders when you
              need to.
            </p>
          </div>
          <ArrowRight className="mx-auto h-6 w-6 rotate-90 text-brand-text lg:rotate-0" aria-hidden="true" />
          <Node icon={ChefHat} title="Kitchen display" body="Accepted orders become tickets, like every other order." href="/products/kds" />
        </div>

        <ul className="mt-10 grid gap-px overflow-hidden rounded-card border border-brand-200 bg-brand-200 md:grid-cols-3">
          {FLOWS.map(({ icon: Icon, text, route }) => (
            <li key={text} className="bg-surface p-6">
              <Icon className="h-5 w-5 text-brand-text" aria-hidden="true" />
              <p className="mt-3 font-semibold text-ink">{text}</p>
              <p className="mt-1 text-sm text-ink-muted">{route}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-3xl text-[0.98rem] leading-7 text-ink-soft">
          The same kitchen also takes orders from the{" "}
          <Link href="/products/pos" className="font-semibold text-ink underline decoration-brand underline-offset-4">
            counter POS
          </Link>
          ,{" "}
          <Link href="/products/captain" className="font-semibold text-ink underline decoration-brand underline-offset-4">
            captain handhelds
          </Link>
          ,{" "}
          <Link href="/products/qr-ordering" className="font-semibold text-ink underline decoration-brand underline-offset-4">
            table QR codes
          </Link>{" "}
          and the{" "}
          <Link href="/products/kiosk" className="font-semibold text-ink underline decoration-brand underline-offset-4">
            self-ordering kiosk
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

function Node({ icon: Icon, title, body, href }: { icon: typeof ChefHat; title: string; body: string; href?: string }) {
  const content = (
    <>
      <Icon className="h-6 w-6 text-brand-text" aria-hidden="true" />
      <p className="mt-3 text-lg font-bold">{title}</p>
      <p className="mt-1.5 text-[0.9375rem] leading-6 text-ink-soft">{body}</p>
    </>
  );
  return href ? (
    <Link href={href} className="block rounded-card border border-line bg-surface p-6 transition-colors hover:border-brand">
      {content}
    </Link>
  ) : (
    <div className="rounded-card border border-line bg-surface p-6">{content}</div>
  );
}

const OWNER_ICONS = [PauseCircle, CheckCheck, UserRound, RefreshCw, Store, PenLine];

export function WhatsAppOwnerControls() {
  return (
    <section className="section bg-ivory">
      <div className="shell">
        <SectionHeading eyebrow="For the owner" title="Stay in control of a new channel." />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {OWNER_CONTROLS.map((c, i) => {
            const Icon = OWNER_ICONS[i] ?? CheckCheck;
            return (
              <li key={c.title} className="reveal bg-surface p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-text ring-1 ring-brand-200">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{c.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-6 text-ink-muted">{c.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function WhatsAppFaq() {
  return (
    <section className="section border-t border-line bg-surface">
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <div>
          <SectionHeading eyebrow="Before you start" title="What you need" />
          <ul className="mt-8 space-y-4">
            {REQUIREMENTS.map((r) => (
              <li key={r} className="flex gap-3 text-[0.98rem] leading-7 text-ink-soft">
                <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-brand-text" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-6 text-ink-muted">We&apos;ll go through these with you in the demo.</p>
        </div>
        <div>
          <h2 className="display-md">Questions owners ask</h2>
          <div className="mt-6">
            <FaqList items={FAQS} />
          </div>
        </div>
      </div>
    </section>
  );
}
