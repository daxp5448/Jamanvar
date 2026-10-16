import Link from "next/link";
import { ArrowRight, Printer, ReceiptText, WifiOff } from "lucide-react";
import { DeviceFrame } from "@/components/site/DeviceFrame";

const PROOF = [
  { icon: WifiOff, title: "Offline billing", body: "Orders, KOTs and bills keep working without internet." },
  { icon: ReceiptText, title: "GST invoices", body: "CGST and SGST worked out on every bill." },
  { icon: Printer, title: "Your printers", body: "Standard 58mm and 80mm ESC/POS printers." },
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="shell grid items-center gap-14 pb-16 pt-10 sm:pt-14 lg:grid-cols-[1fr_1.2fr] lg:gap-8 lg:pb-20 lg:pt-14">
        <div className="relative z-10 max-w-2xl">
          <p className="eyebrow">POS · Kitchen display · Kiosk · QR &amp; WhatsApp ordering</p>
          <h1 className="display-xl mt-5 lg:text-[3.3rem] xl:text-[4.15rem]">
            Run the counter, kitchen and floor from{" "}
            <span className="relative inline-block">
              one live order
              <svg
                aria-hidden="true"
                viewBox="0 0 300 14"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full text-brand"
              >
                <path d="M3 9c60-6 150-8 294-3" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>
            .
          </h1>
          <p className="lead mt-7 max-w-xl">
            Counter billing, the kitchen display, captain, kiosk, QR and WhatsApp ordering, inventory and owner reports, in one
            system. An order entered once is everywhere it needs to be, and billing keeps going when the internet doesn&apos;t.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/book-a-demo" className="btn btn-primary">
              Book a demo <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/how-it-works" className="btn btn-secondary">
              See how it works
            </Link>
          </div>

          <ul className="mt-12 grid gap-5 border-t border-line pt-7 sm:grid-cols-3 sm:gap-6">
            {PROOF.map(({ icon: Icon, title, body }) => (
              <li key={title}>
                <Icon className="h-5 w-5 text-brand-deep" aria-hidden="true" />
                <p className="mt-3 text-[0.9375rem] font-bold text-ink">{title}</p>
                <p className="mt-1 text-sm leading-6 text-ink-muted">{body}</p>
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative mx-auto w-full max-w-[40rem] lg:max-w-none">
          {/* Brand arc, echoing the cloche in the Jamanvar mark. */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-[46%] aspect-square w-[96%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[18px] border-brand/20 sm:border-[26px]"
          />
          <div aria-hidden="true" className="absolute left-1/2 top-[46%] aspect-square w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-50" />

          <div className="relative pb-[11%] pr-[17%] pt-[2%]">
            <DeviceFrame screen="pos" />
          </div>
          <div className="absolute bottom-0 right-0 w-[27%]">
            <DeviceFrame screen="qr" className="max-w-none" />
          </div>
          <figcaption className="relative mt-6 max-w-[70%] text-[0.8125rem] text-ink-muted">
            Jamanvar POS settlement and guest QR ordering, with sample data.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
