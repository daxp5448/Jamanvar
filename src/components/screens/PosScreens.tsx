import { Banknote, CreditCard, QrCode, RefreshCw, Search, WalletCards, WifiOff } from "lucide-react";
import { MENU_ITEMS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { AppBar, Card, DESIGN_WIDTH, Label, Pill, PrimaryButton, ScreenRoot, VegMark } from "./ui";

const BILL = [
  ["2 × Paneer Tikka", 680],
  ["1 × Butter Naan", 80],
  ["1 × Dal Makhani", 300],
  ["2 × Masala Chaas", 180],
] as const;

function BillCard({ className }: { className?: string }) {
  return (
    <Card className={cn("flex flex-col p-[1.2em]", className)}>
      <Label>Table 07 · Dine-in · Amit P.</Label>
      <div className="mt-[0.6em] divide-y divide-dashed divide-[#ECE4DA]">
        {BILL.map(([name, price]) => (
          <div key={name} className="flex justify-between py-[0.55em] text-[1.05em]">
            <span>{name}</span>
            <span className="font-mono font-semibold">₹{price}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto space-y-[0.2em] pt-[0.8em] text-[0.85em] text-[#7A6F66]">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-mono">₹1,240</span>
        </div>
        <div className="flex justify-between">
          <span>CGST + SGST</span>
          <span className="font-mono">₹62</span>
        </div>
      </div>
      <div className="mt-[0.6em] flex items-baseline justify-between border-t border-[#ECE4DA] pt-[0.6em]">
        <span className="text-[1.5em] font-extrabold">Total</span>
        <span className="font-mono text-[1.7em] font-extrabold text-[#B44C14]">₹1,302</span>
      </div>
    </Card>
  );
}

/** POS settlement for Table 07. */
export function PosSettlementScreen() {
  const modes = [
    { icon: QrCode, name: "UPI QR", note: "Table-specific · verified instantly", active: true },
    { icon: CreditCard, name: "Card" },
    { icon: Banknote, name: "Cash" },
    { icon: WalletCards, name: "Khaata (credit)" },
  ];
  return (
    <ScreenRoot designWidth={DESIGN_WIDTH.desktop}>
      <AppBar title="Jamanvar POS" subtitle="Payment" status="Online" />
      <div className="grid min-h-0 flex-1 grid-cols-[1.1fr_1fr] gap-[1.1em] p-[1.3em]">
        <BillCard />
        <div className="flex flex-col gap-[0.6em]">
          <Label>Settle with</Label>
          {modes.map(({ icon: Icon, name, note, active }) => (
            <div
              key={name}
              className={cn(
                "flex items-center gap-[0.8em] rounded-[0.8em] border bg-white px-[1em] py-[0.8em]",
                active ? "border-[#F47B35] bg-[#FFF3EA] ring-[0.15em] ring-[#F47B35]/25" : "border-[#ECE4DA]"
              )}
            >
              <Icon className={cn("h-[1.4em] w-[1.4em]", active ? "text-[#B44C14]" : "text-[#7A6F66]")} />
              <span>
                <span className="block text-[1.05em] font-bold">{name}</span>
                {note && <span className="block text-[0.75em] text-[#7A6F66]">{note}</span>}
              </span>
            </div>
          ))}
          <PrimaryButton className="mt-auto text-[1.15em]">SETTLE &amp; PAY ₹1,302</PrimaryButton>
        </div>
      </div>
    </ScreenRoot>
  );
}

/** POS billing grid: categories, dishes and the running bill. */
export function PosMenuScreen() {
  const dishes = MENU_ITEMS.slice(0, 9);
  return (
    <ScreenRoot designWidth={DESIGN_WIDTH.desktop}>
      <AppBar title="Jamanvar POS" subtitle="Billing · Counter 1" status="Online" />
      <div className="grid min-h-0 flex-1 grid-cols-[1.5fr_1fr] gap-[1.1em] p-[1.3em]">
        <div className="flex min-h-0 flex-col">
          <div className="flex items-center gap-[0.6em] rounded-[0.7em] border border-[#ECE4DA] bg-white px-[0.9em] py-[0.6em] text-[0.9em] text-[#7A6F66]">
            <Search className="h-[1.1em] w-[1.1em]" /> Short code or dish… <span className="font-mono font-bold text-[#B44C14]">PT01</span>
          </div>
          <div className="mt-[0.7em] flex gap-[0.4em] text-[0.8em] font-bold">
            {["Popular", "Starters", "Mains", "Breads", "Drinks"].map((c, i) => (
              <span key={c} className={cn("rounded-full px-[0.9em] py-[0.35em]", i === 0 ? "bg-[#F47B35] text-[#1E1916]" : "bg-white text-[#5A5049] ring-1 ring-[#ECE4DA]")}>
                {c}
              </span>
            ))}
          </div>
          <div className="mt-[0.8em] grid flex-1 grid-cols-3 gap-[0.6em]">
            {dishes.map((d, i) => (
              <Card key={d.id} className={cn("flex flex-col justify-between p-[0.7em]", i === 0 && "border-[#F47B35] ring-[0.12em] ring-[#F47B35]/30")}>
                <span className="flex items-center justify-between text-[0.7em] font-bold text-[#7A6F66]">
                  <span className="flex items-center gap-[0.4em]">
                    <VegMark /> {d.code}
                  </span>
                </span>
                <span className="mt-[0.3em] text-[0.88em] font-bold leading-tight">{d.name}</span>
                <span className="mt-[0.3em] font-mono text-[0.9em] font-bold text-[#B44C14]">₹{d.price}</span>
              </Card>
            ))}
          </div>
        </div>
        <BillCard />
      </div>
    </ScreenRoot>
  );
}

/** POS keeps billing while offline, with a count of what is waiting to sync. */
export function OfflinePosScreen() {
  return (
    <ScreenRoot designWidth={DESIGN_WIDTH.desktop}>
      <AppBar title="Jamanvar POS" subtitle="Table 07" status="Offline" tone="amber" />
      <div className="flex shrink-0 items-center gap-[0.7em] border-b border-[#F2D3A4] bg-[#FFF1DC] px-[1.3em] py-[0.7em] text-[1.05em] font-bold text-[#8A5200]">
        <WifiOff className="h-[1.2em] w-[1.2em]" /> No internet · billing continues locally
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-[1.5fr_1fr] gap-[1.1em] p-[1.3em]">
        <BillCard />
        <div className="flex flex-col gap-[0.8em]">
          <Card className="p-[1.2em]">
            <Label>Waiting to sync</Label>
            <p className="mt-[0.3em] font-mono text-[3em] font-extrabold leading-none text-[#B44C14]">14</p>
            <p className="mt-[0.3em] text-[0.85em] text-[#7A6F66]">orders &amp; bills</p>
          </Card>
          <Card className="flex items-center gap-[0.7em] p-[1em] text-[0.85em] text-[#5A5049]">
            <RefreshCw className="h-[1.3em] w-[1.3em] text-[#2F7D4F]" /> Syncs automatically when the connection returns
          </Card>
          <PrimaryButton className="mt-auto text-[1.15em]">SETTLE</PrimaryButton>
          <Pill tone="green" className="self-center">KOTs still reaching the kitchen</Pill>
        </div>
      </div>
    </ScreenRoot>
  );
}
