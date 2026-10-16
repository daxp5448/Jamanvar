import { CookingPot, CupSoda, Dessert, Flame, Plus, QrCode, Soup, Store, Wheat } from "lucide-react";
import Image from "next/image";
import { KioskStand } from "@/components/devices/Devices";
import { LOGO } from "@/content/brand";
import { cn } from "@/lib/utils";

// An illustration of the Jamanvar self-ordering kiosk's menu screen, styled
// after the real kiosk app (ivory, white cards, orange accents). It shows the
// verified flow: takeaway mode, categories, dish options, a combo deal and
// UPI or pay-at-counter checkout. Sizes use container-query units so it
// scales with the frame.

const CATEGORIES = ["Popular", "Starters", "Mains", "Breads", "Drinks", "Combos"];

const DISHES = [
  { name: "Paneer Tikka Angara", price: 340, icon: Flame, tone: "from-[#F9A872] to-[#E86C26]", options: true },
  { name: "Dal Makhani Handi", price: 380, icon: Soup, tone: "from-[#E9C89B] to-[#C98B4B]" },
  { name: "Butter Garlic Naan", price: 80, icon: Wheat, tone: "from-[#F4DDB4] to-[#D9A55E]" },
  { name: "Masala Chaas", price: 90, icon: CupSoda, tone: "from-[#CFE3D2] to-[#8DB596]" },
  { name: "Veg Dum Biryani", price: 390, icon: CookingPot, tone: "from-[#F6D28B] to-[#D9973A]" },
  { name: "Gulab Jamun", price: 180, icon: Dessert, tone: "from-[#F2C2B0] to-[#C9785E]" },
];

export function KioskMockup({ className, label }: { className?: string; label?: string }) {
  return (
    <div
      role="img"
      aria-label={
        label ??
        "Illustration of the Jamanvar kiosk menu: takeaway order, categories, dishes with prices, a combo deal, and a cart with UPI QR or pay-at-counter options"
      }
      className={cn("mx-auto w-full max-w-[19rem]", className)}
    >
      <KioskStand aspect={9 / 16}>
        <div aria-hidden="true" className="flex h-full flex-col bg-ivory text-ink" style={{ fontSize: "3.9cqw", lineHeight: 1.3 }}>
          <div className="flex items-center justify-between bg-white px-[0.8em] py-[0.6em] shadow-sm">
            <Image src={LOGO.small.src} alt="" width={LOGO.small.width} height={LOGO.small.height} className="h-[2.4em] w-auto" />
            <span className="flex gap-[0.35em] text-[0.75em] font-bold">
              <span className="rounded-full bg-brand-50 px-[0.6em] py-[0.2em] text-brand-text ring-1 ring-brand-200">Takeaway</span>
              <span className="rounded-full bg-ivory-deep px-[0.6em] py-[0.2em]">EN</span>
            </span>
          </div>

          <div className="flex min-h-0 flex-1">
            <ul className="w-[26%] space-y-[0.3em] bg-white/70 p-[0.4em] text-[0.78em] font-semibold">
              {CATEGORIES.map((c, i) => (
                <li key={c} className={cn("rounded-[0.5em] px-[0.5em] py-[0.55em]", i === 0 ? "bg-brand text-ink-950" : "text-ink-soft")}>
                  {c}
                </li>
              ))}
            </ul>

            <div className="flex min-w-0 flex-1 flex-col gap-[0.5em] p-[0.5em]">
              <div className="grid grid-cols-2 gap-[0.45em]">
                {DISHES.map(({ name, price, icon: Icon, tone, options }) => (
                  <div key={name} className="overflow-hidden rounded-[0.6em] bg-white shadow-sm ring-1 ring-line">
                    <div className={cn("flex aspect-[4/3] items-center justify-center bg-gradient-to-br text-white", tone)}>
                      <Icon className="h-[2em] w-[2em]" strokeWidth={1.6} />
                    </div>
                    <div className="p-[0.45em]">
                      <p className="text-[0.82em] font-bold leading-tight">{name}</p>
                      <div className="mt-[0.3em] flex items-center justify-between">
                        <span className="text-[0.85em] font-extrabold">₹{price}</span>
                        <span className="flex h-[1.6em] w-[1.6em] items-center justify-center rounded-full bg-brand text-ink-950">
                          <Plus className="h-[1em] w-[1em]" strokeWidth={3} />
                        </span>
                      </div>
                      {options && <p className="mt-[0.25em] text-[0.68em] font-semibold text-brand-text">Spice level · Extra dip</p>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-[0.6em] border border-dashed border-brand-300 bg-brand-50 p-[0.55em]">
                <p className="text-[0.68em] font-bold uppercase tracking-wide text-brand-text">Combo deal</p>
                <p className="text-[0.8em] font-semibold">Add naan &amp; chaas to your tikka</p>
              </div>
            </div>
          </div>

          <div className="space-y-[0.45em] bg-white p-[0.7em] shadow-[0_-4px_12px_-8px_rgba(41,35,31,0.3)]">
            <div className="flex items-baseline justify-between text-[0.85em]">
              <span className="font-semibold text-ink-soft">3 items</span>
              <span className="text-[1.1em] font-extrabold">₹760</span>
            </div>
            <div className="grid grid-cols-2 gap-[0.4em] text-[0.75em] font-bold">
              <span className="flex items-center justify-center gap-[0.3em] rounded-[0.5em] bg-ink py-[0.6em] text-ivory">
                <QrCode className="h-[1.2em] w-[1.2em]" /> Pay by UPI
              </span>
              <span className="flex items-center justify-center gap-[0.3em] rounded-[0.5em] bg-ivory-deep py-[0.6em]">
                <Store className="h-[1.2em] w-[1.2em]" /> Pay at counter
              </span>
            </div>
          </div>
        </div>
      </KioskStand>
    </div>
  );
}
