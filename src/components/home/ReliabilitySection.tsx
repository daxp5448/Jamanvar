import Link from "next/link";
import { ArrowRight, RefreshCw, WifiOff } from "lucide-react";
import { DeviceFrame, ScreenCaption } from "@/components/site/DeviceFrame";

export function ReliabilitySection() {
  return (
    <section className="section bg-ivory">
      <div className="shell">
        <div className="reveal grid items-center gap-12 overflow-hidden rounded-panel border border-brand-200 bg-brand-50 p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:p-12">
          <div>
            <p className="eyebrow">
              <WifiOff className="h-4 w-4" aria-hidden="true" /> Offline-first
            </p>
            <h2 className="display-lg mt-4">The internet drops. Service doesn&apos;t.</h2>
            <p className="mt-5 text-[1.0625rem] leading-[1.7] text-ink-soft">
              Orders, KOTs and bills are handled on the device in front of you, and kitchen routing carries on over the local
              network. When the connection returns, everything syncs to the cloud on its own. Nobody re-enters a thing.
            </p>
            <ul className="mt-8 space-y-3 text-[0.98rem] text-ink">
              {[
                "Billing, KOT printing and kitchen routing continue locally",
                "Automatic two-way sync when you are back online",
                "Runs on Windows, Android and iPad devices you may already own",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <RefreshCw className="mt-1 h-4 w-4 shrink-0 text-brand-text" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <Link href="/products/hardware" className="link-arrow mt-9 text-[0.9375rem]">
              Offline mode &amp; hardware <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <figure>
            <DeviceFrame screen="offline" />
            <ScreenCaption className="mt-5">POS in offline mode, with 14 orders and bills waiting to sync. Sample data.</ScreenCaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
