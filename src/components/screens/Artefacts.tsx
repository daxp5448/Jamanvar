import Image from "next/image";
import { LOGO } from "@/content/brand";
import { cn } from "@/lib/utils";
import { CaptainScreen } from "./OrderingScreens";
import { KdsScreen } from "./FloorKitchenScreens";
import { PosSettlementScreen } from "./PosScreens";
import { Handheld, Monitor, Tablet } from "@/components/devices/Devices";

// Physical items from the product story (a printed KOT, a GST receipt, a table
// QR stand, a tested hardware kit), drawn in code. Sizes use container-query
// units so each scales with its wrapper.

function Paper({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("[container-type:inline-size]", className)}>
      <div
        className="relative bg-white px-[8cqw] pb-[9cqw] pt-[8cqw] font-mono text-[#1E1916] shadow-lift"
        style={{ fontSize: "3.6cqw", lineHeight: 1.45, clipPath: "polygon(0 0,100% 0,100% 97%,95% 100%,90% 97%,85% 100%,80% 97%,75% 100%,70% 97%,65% 100%,60% 97%,55% 100%,50% 97%,45% 100%,40% 97%,35% 100%,30% 97%,25% 100%,20% 97%,15% 100%,10% 97%,5% 100%,0 97%)" }}
      >
        {children}
      </div>
    </div>
  );
}

const Rule = () => <div className="my-[0.6em] border-b border-dashed border-[#8A7D72]" />;

/** A kitchen order ticket printed at the tandoor station. */
export function KotTicket({ className }: { className?: string }) {
  return (
    <Paper className={className}>
      <Image src={LOGO.small.src} alt="" width={LOGO.small.width} height={LOGO.small.height} className="mx-auto h-[4.2em] w-auto" />
      <p className="mt-[0.4em] text-center font-sans text-[0.95em] font-extrabold tracking-widest">KITCHEN ORDER TICKET</p>
      <Rule />
      <div className="flex justify-between font-bold">
        <span>KOT #142</span>
        <span>T-07</span>
      </div>
      <p>Captain: Amit P. · 20:14</p>
      <p>Station: TANDOOR</p>
      <Rule />
      <p className="text-[1.15em] font-bold">2 × Paneer Tikka Angara</p>
      <p className="pl-[1em] text-[0.9em]">» spicy, extra mint dip</p>
      <p className="mt-[0.4em] text-[1.15em] font-bold">1 × Butter Naan</p>
      <p className="pl-[1em] text-[0.9em]">» crispy</p>
      <Rule />
      <p className="text-center text-[0.85em]">Fired from captain handheld</p>
    </Paper>
  );
}

const RECEIPT = [
  ["Paneer Tikka Angara", 2, 680],
  ["Butter Naan", 1, 80],
  ["Dal Makhani Handi", 1, 300],
  ["Masala Chaas", 2, 180],
] as const;

/** A GST receipt with the restaurant's own header. */
export function ReceiptPaper({ className }: { className?: string }) {
  return (
    <Paper className={className}>
      <p className="text-center font-sans text-[1.15em] font-extrabold uppercase">Your Restaurant</p>
      <p className="text-center text-[0.8em] text-[#564C44]">Your address, phone and GSTIN</p>
      <Rule />
      <div className="flex justify-between text-[0.9em]">
        <span>Table: T-07 (Terrace)</span>
        <span>Bill: 8942</span>
      </div>
      <Rule />
      {RECEIPT.map(([name, qty, amt]) => (
        <div key={name} className="flex justify-between">
          <span>
            {qty} × {name}
          </span>
          <span>{amt}.00</span>
        </div>
      ))}
      <Rule />
      {[
        ["Subtotal", "1,240.00"],
        ["CGST @ 2.5%", "31.00"],
        ["SGST @ 2.5%", "31.00"],
      ].map(([k, v]) => (
        <div key={k} className="flex justify-between text-[0.9em]">
          <span>{k}</span>
          <span>{v}</span>
        </div>
      ))}
      <div className="my-[0.5em] flex justify-between border-y-[0.15em] border-[#1E1916] py-[0.3em] font-sans text-[1.15em] font-extrabold">
        <span>TOTAL</span>
        <span>₹1,302.00</span>
      </div>
      <p className="text-center text-[0.85em]">Paid by UPI QR · Thank you</p>
      <Image src={LOGO.small.src} alt="" width={LOGO.small.width} height={LOGO.small.height} className="mx-auto mt-[0.8em] h-[3em] w-auto opacity-80" />
    </Paper>
  );
}

// A fixed, QR-like pattern for illustration (not a scannable code).
const QR_SIZE = 21;
function qrCell(x: number, y: number): boolean {
  const finder = (fx: number, fy: number) => {
    const dx = x - fx;
    const dy = y - fy;
    if (dx < 0 || dy < 0 || dx > 6 || dy > 6) return null;
    return dx === 0 || dy === 0 || dx === 6 || dy === 6 || (dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4);
  };
  const f = finder(0, 0) ?? finder(QR_SIZE - 7, 0) ?? finder(0, QR_SIZE - 7);
  if (f !== null) return f;
  return ((x * 7 + y * 13 + x * y) % 5) < 2;
}

/** The table tent guests scan to order. */
export function QrTableTent({ className }: { className?: string }) {
  return (
    <div className={cn("[container-type:inline-size]", className)}>
      <div className="rounded-[6cqw] bg-white px-[9cqw] pb-[8cqw] pt-[7cqw] text-center text-[#1E1916] shadow-lift ring-1 ring-black/5" style={{ fontSize: "4.4cqw" }}>
        <Image src={LOGO.small.src} alt="" width={LOGO.small.width} height={LOGO.small.height} className="mx-auto h-[4.6em] w-auto" />
        <p className="mt-[0.4em] text-[1.6em] font-extrabold">Scan to order</p>
        <div className="mx-auto mt-[0.6em] w-[78%] rounded-[0.6em] p-[0.5em] ring-[0.25em] ring-[#F47B35]">
          <div className="grid aspect-square w-full" style={{ gridTemplateColumns: `repeat(${QR_SIZE}, 1fr)` }}>
            {Array.from({ length: QR_SIZE * QR_SIZE }, (_, i) => (
              <span key={i} className={qrCell(i % QR_SIZE, Math.floor(i / QR_SIZE)) ? "bg-[#1E1916]" : ""} />
            ))}
          </div>
        </div>
        <p className="mt-[0.6em] font-mono text-[1.4em] font-bold tracking-[0.3em] text-[#B44C14]">TABLE 07</p>
        <p className="mt-[0.2em] text-[0.8em] text-[#564C44]">Browse the menu · Order from your phone</p>
      </div>
      <div aria-hidden="true" className="mx-auto h-[5cqw] w-[70%] rounded-b-[2cqw] bg-[#E6DED4]" />
    </div>
  );
}

/** Thermal receipt printer with a printed slip. */
function ThermalPrinter({ className }: { className?: string }) {
  return (
    <div className={cn("[container-type:inline-size]", className)}>
      <div className="mx-auto h-[34cqw] w-[56%] rounded-t-[3cqw] bg-white shadow-card ring-1 ring-black/5">
        <span className="mx-[10%] block h-[1.2cqw] translate-y-[8cqw] rounded bg-[#E6DCD2]" />
        <span className="mx-[10%] block h-[1.2cqw] translate-y-[12cqw] rounded bg-[#E6DCD2]" />
        <span className="mx-[10%] block h-[1.2cqw] w-[50%] translate-y-[16cqw] rounded bg-[#E6DCD2]" />
      </div>
      <div className="rounded-[5cqw] bg-[linear-gradient(180deg,#3B3734,#1E1B19)] px-[8cqw] pb-[8cqw] pt-[6cqw] shadow-device">
        <span className="block h-[2cqw] rounded-full bg-black/60" />
        <span className="mt-[8cqw] block h-[3cqw] w-[3cqw] rounded-full bg-[#2F9E5B] shadow-[0_0_2cqw_#2F9E5B]" />
      </div>
    </div>
  );
}

/** The tested hardware kit: POS terminal, kitchen tablet, captain handheld, printer. */
export function HardwareKit({ className }: { className?: string }) {
  return (
    <div className={cn("relative aspect-[4/3] w-full", className)}>
      <div className="absolute left-[18%] top-[2%] w-[58%]">
        <Monitor aspect={1.6}>
          <PosSettlementScreen />
        </Monitor>
      </div>
      <div className="absolute left-0 top-[44%] w-[34%]">
        <Tablet aspect={1.74}>
          <KdsScreen />
        </Tablet>
      </div>
      <div className="absolute bottom-0 right-[20%] w-[16%]">
        <Handheld aspect={0.53}>
          <CaptainScreen />
        </Handheld>
      </div>
      <div className="absolute bottom-[2%] right-0 w-[19%]">
        <ThermalPrinter />
      </div>
    </div>
  );
}
