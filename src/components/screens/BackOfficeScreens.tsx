import { Check, Circle, Download } from "lucide-react";
import { INVENTORY_ITEMS, type InventoryItem } from "@/lib/data";
import { cn } from "@/lib/utils";
import { AppBar, Card, DESIGN_WIDTH, Label, Pill, PrimaryButton, ScreenRoot, StatusBar, type Tone } from "./ui";

const STOCK_TONE: Record<InventoryItem["status"], { tone: Tone; bar: string }> = {
  optimal: { tone: "green", bar: "bg-[#2F9E5B]" },
  low: { tone: "amber", bar: "bg-[#E08A1E]" },
  critical: { tone: "red", bar: "bg-[#D23B2E]" },
};

/** Recipe-linked stock with status per ingredient. */
export function InventoryScreen() {
  // The five lines that fit; still includes all three items needing attention.
  const items = INVENTORY_ITEMS.filter((i) => i.id !== "i3" && i.id !== "i7");
  return (
    <ScreenRoot designWidth={DESIGN_WIDTH.desktop}>
      <AppBar title="Recipe inventory" subtitle="Digital pantry" status="Synced" />
      <div className="grid min-h-0 flex-1 grid-cols-[1.75fr_1fr] gap-[1em] p-[1.2em]">
        <Card className="divide-y divide-[#ECE4DA] px-[1.1em]">
          {items.map((i) => {
            const fill = Math.min(100, Math.round((i.currentStock / (i.threshold * 2)) * 100));
            return (
              <div key={i.id} className="grid grid-cols-[2.1fr_0.9fr_0.8fr_auto] items-center gap-[0.8em] py-[0.62em]">
                <span className="min-w-0 leading-tight">
                  <span className="block truncate font-bold">{i.name}</span>
                  <span className="text-[0.75em] text-[#7A6F66]">{i.category}</span>
                </span>
                <span className="h-[0.5em] rounded-full bg-[#F1EAE2]">
                  <span className={cn("block h-full rounded-full", STOCK_TONE[i.status].bar)} style={{ width: `${fill}%` }} />
                </span>
                <span className="text-right font-mono text-[0.95em] font-semibold">
                  {i.currentStock} {i.unit}
                </span>
                <Pill tone={STOCK_TONE[i.status].tone}>{i.status}</Pill>
              </div>
            );
          })}
        </Card>
        <div className="flex flex-col gap-[1em]">
          <Card className="p-[1.1em]">
            <Label>Recipe · Paneer Tikka</Label>
            <ul className="mt-[0.5em] space-y-[0.25em] text-[0.95em]">
              <li>Malai paneer</li>
              <li>Marinade spices</li>
              <li>Oil · garnish</li>
            </ul>
            <p className="mt-[0.6em] text-[0.8em] font-bold text-[#B44C14]">Deducted on every KOT</p>
          </Card>
          <Card className="p-[1.1em]">
            <Label>Needs attention</Label>
            <p className="mt-[0.2em] font-mono text-[2.4em] font-extrabold leading-none text-[#B44C14]">3</p>
            <p className="mt-[0.3em] text-[0.8em] text-[#7A6F66]">2 low · 1 critical</p>
          </Card>
        </div>
      </div>
    </ScreenRoot>
  );
}

const PO_LINES = [
  ["Amul Butter Unsalted", "10 kg", true],
  ["Fresh Malai Paneer", "20 kg", true],
  ["Fresh Mint & Coriander", "5 kg", true],
  ["Cooking Cream", "12 litres", false],
] as const;

/** A vendor purchase order with goods received ticked off. */
export function PurchaseOrderScreen() {
  return (
    <ScreenRoot designWidth={DESIGN_WIDTH.desktop}>
      <AppBar title="Purchase order" subtitle="PO-0231 · Vendor order" status="3 / 4 received" tone="orange" />
      <div className="flex min-h-0 flex-1 flex-col gap-[1em] p-[1.3em]">
        <Card className="px-[1.2em]">
          <div className="grid grid-cols-[2fr_1fr_0.6fr] border-b border-[#ECE4DA] py-[0.7em]">
            <Label>Item</Label>
            <Label>Ordered</Label>
            <Label className="text-right">Received</Label>
          </div>
          {PO_LINES.map(([item, qty, received]) => (
            <div key={item} className="grid grid-cols-[2fr_1fr_0.6fr] items-center border-b border-[#ECE4DA] py-[0.85em] last:border-0">
              <span className="text-[1.05em] font-bold">{item}</span>
              <span className="font-mono">{qty}</span>
              <span className="flex justify-end">
                {received ? (
                  <span className="flex h-[1.5em] w-[1.5em] items-center justify-center rounded-full bg-[#E7F3EA] text-[#256B41]">
                    <Check className="h-[1em] w-[1em]" strokeWidth={3} />
                  </span>
                ) : (
                  <Circle className="h-[1.4em] w-[1.4em] text-[#DCCDBF]" />
                )}
              </span>
            </div>
          ))}
        </Card>
        <div className="grid grid-cols-2 gap-[1em]">
          <Card className="p-[1em]">
            <Label>Raised from</Label>
            <p className="mt-[0.3em] font-bold">Low-stock alert · Inventory</p>
            <p className="mt-[0.2em] text-[0.8em] text-[#7A6F66]">Butter and mint were below their levels</p>
          </Card>
          <Card className="p-[1em]">
            <Label>Still open</Label>
            <p className="mt-[0.3em] font-bold">Cooking Cream · 12 litres</p>
            <p className="mt-[0.2em] text-[0.8em] text-[#7A6F66]">Stays visible until it arrives</p>
          </Card>
        </div>
        <PrimaryButton className="ml-auto mt-auto w-[16em]">LOG GOODS RECEIVED</PrimaryButton>
      </div>
    </ScreenRoot>
  );
}

const SETTLEMENT = [
  ["Cash", "₹9,800"],
  ["UPI", "₹31,450"],
  ["Card", "₹7,000"],
] as const;

const BEST_SELLERS = [
  ["Paneer Butter Masala", 92],
  ["Dal Makhani Handi", 78],
  ["Butter Garlic Naan", 70],
  ["Veg Hyderabadi Dum Biryani", 58],
] as const;

const REPORT_TILES = [
  ["Bills settled", "127"],
  ["Average bill", "₹380"],
  ["Dine-in · takeaway", "98 · 29"],
] as const;

/** Daily reconciliation, best sellers and GST export. */
export function ReportsScreen() {
  return (
    <ScreenRoot designWidth={DESIGN_WIDTH.desktop}>
      <AppBar title="Reports" subtitle="Daily reconciliation" status="Export ready" tone="blue" />
      <div className="grid shrink-0 grid-cols-3 gap-[1em] px-[1.3em] pt-[1.3em]">
        {REPORT_TILES.map(([label, value]) => (
          <Card key={label} className="p-[0.9em]">
            <Label>{label}</Label>
            <p className="mt-[0.2em] font-mono text-[1.5em] font-extrabold leading-none">{value}</p>
          </Card>
        ))}
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-2 gap-[1em] p-[1.3em]">
        <Card className="flex flex-col p-[1.2em]">
          <Label>Settlement · matched to bills</Label>
          <div className="mt-[0.5em] divide-y divide-[#ECE4DA]">
            {SETTLEMENT.map(([mode, amount]) => (
              <div key={mode} className="flex items-center justify-between py-[0.7em] text-[1.1em]">
                <span className="font-bold">{mode}</span>
                <span className="font-mono">{amount}</span>
                <Pill tone="green">✓ Matched</Pill>
              </div>
            ))}
          </div>
          <div className="mt-auto flex items-baseline justify-between border-t border-[#ECE4DA] pt-[0.7em]">
            <span className="text-[1.3em] font-extrabold">Total</span>
            <span className="font-mono text-[1.5em] font-extrabold text-[#B44C14]">₹48,250</span>
          </div>
        </Card>
        <Card className="flex flex-col p-[1.2em]">
          <Label>Best sellers</Label>
          <div className="mt-[0.6em] space-y-[0.8em]">
            {BEST_SELLERS.map(([dish, pct]) => (
              <div key={dish}>
                <div className="flex justify-between text-[0.95em]">
                  <span>{dish}</span>
                  <span className="font-mono text-[#7A6F66]">{pct}%</span>
                </div>
                <span className="mt-[0.3em] block h-[0.5em] rounded-full bg-[#F1EAE2]">
                  <span className="block h-full rounded-full bg-[#F47B35]" style={{ width: `${pct}%` }} />
                </span>
              </div>
            ))}
          </div>
          <span className="mt-auto inline-flex items-center gap-[0.4em] self-start rounded-[0.5em] px-[0.8em] py-[0.45em] font-mono text-[0.8em] font-bold text-[#2B5FA8] ring-1 ring-[#C3D4EE]">
            <Download className="h-[1em] w-[1em]" /> GST REPORT · EXPORT
          </span>
        </Card>
      </div>
    </ScreenRoot>
  );
}

const HOURLY = [18, 26, 42, 70, 48, 30, 22, 28, 46, 78, 100, 86, 52, 30];
const HOURS = ["12 PM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM"];

function HourlyChart({ className }: { className?: string }) {
  const peak = HOURLY.indexOf(Math.max(...HOURLY));
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex flex-1 items-end gap-[0.35em]">
        {HOURLY.map((h, i) => (
          <span key={i} className={cn("flex-1 rounded-t-[0.25em]", i === peak ? "bg-[#F47B35]" : "bg-[#E6DCD2]")} style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="mt-[0.4em] flex justify-between font-mono text-[0.65em] text-[#7A6F66]">
        {HOURS.map((h) => (
          <span key={h}>{h}</span>
        ))}
      </div>
    </div>
  );
}

/** Live sales dashboard: revenue, orders, peak hour and the hourly curve. */
export function DashboardScreen() {
  const tiles = [
    ["Today's revenue", "₹48,250", "Settled bills"],
    ["Orders settled", "127", "98 dine-in · 29 takeaway"],
    ["Peak dining hour", "8:00 PM", "Busiest hour today"],
  ];
  return (
    <ScreenRoot designWidth={DESIGN_WIDTH.desktop}>
      <AppBar title="Live analytics" subtitle="Owner dashboard" status="Today · live" />
      <div className="flex min-h-0 flex-1 flex-col gap-[1em] p-[1.3em]">
        <div className="grid grid-cols-3 gap-[1em]">
          {tiles.map(([label, value, note]) => (
            <Card key={label} className="p-[1.1em]">
              <Label>{label}</Label>
              <p className="mt-[0.3em] font-mono text-[1.9em] font-extrabold leading-none">{value}</p>
              <p className="mt-[0.4em] text-[0.78em] text-[#7A6F66]">{note}</p>
            </Card>
          ))}
        </div>
        <Card className="flex min-h-0 flex-1 flex-col p-[1.1em]">
          <Label>Hourly sales · sample day</Label>
          <HourlyChart className="mt-[0.8em] min-h-0 flex-1" />
        </Card>
      </div>
    </ScreenRoot>
  );
}

/** The owner's view on a phone. */
export function OwnerPhoneScreen() {
  return (
    <ScreenRoot designWidth={DESIGN_WIDTH.phone}>
      <StatusBar time="9:15" />
      <AppBar compact title="Owner view" subtitle="Today" status="Live" />
      <div className="flex min-h-0 flex-1 flex-col gap-[0.7em] p-[1em]">
        <Card className="p-[1em]">
          <Label>Today&apos;s revenue</Label>
          <p className="mt-[0.2em] font-mono text-[2.3em] font-extrabold leading-none text-[#B44C14]">₹48,250</p>
          <p className="mt-[0.3em] text-[0.78em] text-[#7A6F66]">Updates as bills settle</p>
        </Card>
        <div className="grid grid-cols-2 gap-[0.7em]">
          <Card className="p-[0.9em]">
            <Label>Orders</Label>
            <p className="mt-[0.2em] text-[1.6em] font-extrabold">127</p>
          </Card>
          <Card className="p-[0.9em]">
            <Label>Tables</Label>
            <p className="mt-[0.2em] text-[1.6em] font-extrabold">
              34<span className="text-[0.55em] text-[#7A6F66]">/42</span>
            </p>
          </Card>
        </div>
        <Card className="divide-y divide-[#ECE4DA] px-[0.9em]">
          {SETTLEMENT.map(([mode, amount]) => (
            <div key={mode} className="flex justify-between py-[0.5em] text-[0.9em]">
              <span className="font-bold">{mode}</span>
              <span className="font-mono">{amount}</span>
            </div>
          ))}
        </Card>
        <Card className="flex min-h-0 flex-1 flex-col p-[0.9em]">
          <Label>Hourly sales · peak 8 PM</Label>
          <HourlyChart className="mt-[0.7em] min-h-0 flex-1" />
        </Card>
      </div>
    </ScreenRoot>
  );
}
