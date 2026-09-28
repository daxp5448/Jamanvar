import React from "react";
import {
  CheckCircle2,
  Clock,
  AlertTriangle,
  QrCode,
  Smartphone,
  TrendingUp,
  WifiOff,
  Printer,
  Monitor,
  CreditCard,
  Wallet,
  Banknote,
} from "lucide-react";
import { MENU_ITEMS, RESTAURANT_TABLES, KITCHEN_TICKETS, INVENTORY_ITEMS } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { MockupVariant } from "@/content/products";

interface ProductMediaProps {
  variant: MockupVariant;
}

function Frame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="bg-jamanvar-navy-950 text-white rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between px-4 sm:px-5 py-3 bg-jamanvar-navy-900/90 border-b border-white/10 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <div className="h-3.5 w-px bg-white/15" />
          <span className="font-bold tracking-wider text-white uppercase text-[10px] sm:text-[11px]">
            {label}
          </span>
        </div>
        <span className="font-mono text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/20 text-[9px] sm:text-[10px]">
          LIVE
        </span>
      </div>
      <div className="p-4 sm:p-6">{children}</div>
    </div>
  );
}

function OrderingMockup() {
  return (
    <Frame label="Captain & QR Ordering">
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3.5 rounded-2xl bg-jamanvar-navy-900 border border-white/10 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-jamanvar-saffron-400">
            <Smartphone className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Captain Handheld</span>
          </div>
          <span className="text-xs text-white font-semibold">Table T-07 · 3 items punched</span>
          <span className="text-[10px] text-white/50">Sent to kitchen 4 sec ago</span>
        </div>
        <div className="p-3.5 rounded-2xl bg-jamanvar-navy-900 border border-white/10 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-jamanvar-saffron-400">
            <QrCode className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-wider">QR Table Order</span>
          </div>
          <span className="text-xs text-white font-semibold">Table T-12 · Guest self-order</span>
          <span className="text-[10px] text-white/50">Awaiting kitchen confirmation</span>
        </div>
      </div>
    </Frame>
  );
}

function CaptainOrderingMockup() {
  return (
    <Frame label="Captain Handheld · Table T-07">
      <div className="flex items-center gap-3 mb-3.5">
        <div className="w-10 h-10 rounded-xl bg-jamanvar-saffron-500 text-white flex items-center justify-center shrink-0">
          <Smartphone className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs font-bold text-white block">Amit P. · Table T-07 (Terrace)</span>
          <span className="text-[10px] text-white/50">Order punched 4 sec ago</span>
        </div>
      </div>
      <div className="space-y-2 pb-3 border-b border-white/10">
        {MENU_ITEMS.slice(0, 3).map((item) => (
          <div key={item.id} className="flex items-center justify-between text-xs">
            <span className="text-white font-medium">{item.name}</span>
            <span className="text-[10px] text-jamanvar-saffron-300 font-mono">1× fired</span>
          </div>
        ))}
      </div>
      <div className="pt-3 flex items-center justify-between text-[11px]">
        <span className="text-white/50">Sent to kitchen</span>
        <span className="font-bold text-emerald-400">Confirmed</span>
      </div>
    </Frame>
  );
}

function QrOrderingMockup() {
  return (
    <Frame label="QR Table Order · Table T-12">
      <div className="flex items-center gap-3 mb-3.5">
        <div className="w-10 h-10 rounded-xl bg-jamanvar-saffron-500 text-white flex items-center justify-center shrink-0">
          <QrCode className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs font-bold text-white block">Guest self-order · Table T-12</span>
          <span className="text-[10px] text-white/50">Scanned from personal phone</span>
        </div>
      </div>
      <div className="space-y-2 pb-3 border-b border-white/10">
        {MENU_ITEMS.slice(3, 6).map((item) => (
          <div key={item.id} className="flex items-center justify-between text-xs">
            <span className="text-white font-medium">{item.name}</span>
            <span className="font-mono text-white/70">₹{item.price}</span>
          </div>
        ))}
      </div>
      <div className="pt-3 flex items-center justify-between text-[11px]">
        <span className="text-white/50">Awaiting kitchen confirmation</span>
        <span className="font-bold text-amber-300">Pending</span>
      </div>
    </Frame>
  );
}

function PosMockup() {
  const items = MENU_ITEMS.slice(0, 3);
  const subtotal = items.reduce((s, i) => s + i.price, 0);
  const gst = Math.round(subtotal * 0.05);
  return (
    <Frame label="Jamanvar POS · Invoice #JAM-8924">
      <div className="space-y-2 pb-3 border-b border-white/10">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center text-xs">
            <span className="font-semibold text-white">{item.name}</span>
            <span className="font-mono text-white/80">₹{item.price}</span>
          </div>
        ))}
      </div>
      <div className="pt-3 space-y-1 text-xs text-white/60">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-mono">₹{subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>GST (5%)</span>
          <span className="font-mono">₹{gst}</span>
        </div>
        <div className="flex justify-between text-sm font-extrabold text-white pt-2 border-t border-white/10">
          <span>Total Payable</span>
          <span className="text-jamanvar-saffron-400 font-mono">₹{subtotal + gst}</span>
        </div>
      </div>
    </Frame>
  );
}

function PaymentMockup() {
  const modes = [
    { icon: Banknote, label: "Cash", value: "₹1,240" },
    { icon: QrCode, label: "UPI QR", value: "₹3,860" },
    { icon: CreditCard, label: "Card", value: "₹2,100" },
    { icon: Wallet, label: "Khaata (Credit)", value: "₹560" },
  ];
  return (
    <Frame label="Multi-Tender Settlement">
      <div className="grid grid-cols-2 gap-2.5">
        {modes.map((m) => {
          const Icon = m.icon;
          return (
            <div key={m.label} className="p-3 rounded-xl bg-jamanvar-navy-900 border border-white/10 flex flex-col gap-1.5">
              <Icon className="w-4 h-4 text-jamanvar-saffron-400" />
              <span className="text-[10px] text-white/60">{m.label}</span>
              <span className="text-sm font-bold text-white font-mono">{m.value}</span>
            </div>
          );
        })}
      </div>
      <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-emerald-400 font-semibold">
        <span>Reconciled in real time</span>
        <CheckCircle2 className="w-3.5 h-3.5" />
      </div>
    </Frame>
  );
}

function KdsMockup() {
  const ticket = KITCHEN_TICKETS[0];
  return (
    <Frame label="Kitchen Display · Tandoor Pass">
      <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-jamanvar-saffron-500 text-white font-mono text-[10px] font-bold">
            {ticket.orderNumber}
          </span>
          <span className="font-bold text-white text-xs">{ticket.tableNumber}</span>
        </div>
        <span className="flex items-center gap-1 text-[10px] text-amber-300 font-mono">
          <Clock className="w-3 h-3" />
          {ticket.elapsedMinutes}m elapsed
        </span>
      </div>
      <div className="py-2.5 space-y-2">
        {ticket.items.map((item, i) => (
          <div key={i} className="flex items-center justify-between text-xs">
            <span className="text-white font-medium">
              {item.qty} × {item.name}
            </span>
            <span
              className={cn(
                "text-[9px] font-bold px-1.5 py-0.5 rounded uppercase",
                item.status === "cooking" ? "bg-amber-500/20 text-amber-300" : "bg-emerald-500/20 text-emerald-300"
              )}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function KdsQueueMockup() {
  return (
    <Frame label="Kitchen Queue · All Stations">
      <div className="space-y-2.5">
        {KITCHEN_TICKETS.map((kot) => (
          <div key={kot.id} className="flex items-center justify-between p-2.5 rounded-xl bg-jamanvar-navy-900 border border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="px-2 py-0.5 rounded bg-jamanvar-saffron-500/80 text-white font-mono text-[10px] font-bold">
                {kot.orderNumber}
              </span>
              <span className="text-xs font-semibold text-white">{kot.tableNumber}</span>
            </div>
            <span
              className={cn(
                "text-[10px] font-bold px-2 py-0.5 rounded uppercase",
                kot.status === "ready" ? "bg-emerald-500/20 text-emerald-300" : "bg-amber-500/20 text-amber-300"
              )}
            >
              {kot.status}
            </span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function TablesMockup() {
  const tables = RESTAURANT_TABLES.slice(0, 6);
  const colorFor = (status: string) =>
    status === "occupied"
      ? "bg-jamanvar-navy-900 border-jamanvar-saffron-500/50 text-white"
      : status === "billing"
      ? "bg-emerald-950/60 border-emerald-500/50 text-white"
      : status === "reserved"
      ? "bg-amber-950/40 border-amber-500/40 text-white"
      : "bg-white/5 border-white/10 text-white/60";

  return (
    <Frame label="Main Dining · Floor Plan">
      <div className="grid grid-cols-3 gap-2.5">
        {tables.map((t) => (
          <div key={t.id} className={cn("p-2.5 rounded-xl border text-left flex flex-col gap-0.5", colorFor(t.status))}>
            <span className="font-mono font-bold text-xs">{t.number}</span>
            <span className="text-[10px] uppercase opacity-80">{t.status}</span>
            <span className="font-mono text-[10px] font-bold">{t.currentBill ? `₹${t.currentBill}` : "Ready"}</span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function TableSectionsMockup() {
  const sections = Array.from(new Set(RESTAURANT_TABLES.map((t) => t.section))).map((section) => {
    const inSection = RESTAURANT_TABLES.filter((t) => t.section === section);
    const occupied = inSection.filter((t) => t.status === "occupied" || t.status === "billing").length;
    return { section, total: inSection.length, occupied };
  });

  return (
    <Frame label="Sections · Live Capacity">
      <div className="space-y-2.5">
        {sections.map((s) => (
          <div key={s.section} className="flex items-center justify-between p-2.5 rounded-xl bg-jamanvar-navy-900 border border-white/10">
            <span className="text-xs font-semibold text-white">{s.section}</span>
            <span className="text-[11px] font-mono text-jamanvar-saffron-300">
              {s.occupied}/{s.total} occupied
            </span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function InventoryMockup() {
  const items = INVENTORY_ITEMS.slice(0, 3);
  const statusColor = (status: string) =>
    status === "optimal"
      ? "bg-emerald-500/20 text-emerald-300"
      : status === "low"
      ? "bg-amber-500/20 text-amber-300"
      : "bg-red-500/20 text-red-300";

  return (
    <Frame label="Raw Inventory · Live Stock">
      <div className="space-y-2.5">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between text-xs">
            <span className="font-semibold text-white truncate">{item.name}</span>
            <span className="font-mono text-white/60 shrink-0 mx-2">
              {item.currentStock} {item.unit}
            </span>
            <span className={cn("text-[9px] font-bold px-2 py-0.5 rounded-full inline-flex items-center gap-1 shrink-0", statusColor(item.status))}>
              {item.status === "optimal" && <CheckCircle2 className="w-2.5 h-2.5" />}
              {item.status === "low" && <Clock className="w-2.5 h-2.5" />}
              {item.status === "critical" && <AlertTriangle className="w-2.5 h-2.5" />}
              {item.status.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function CustomersMockup() {
  return (
    <Frame label="Guest Profile · Loyalty">
      <div className="flex items-center gap-3 pb-3 border-b border-white/10">
        <div className="w-10 h-10 rounded-full bg-jamanvar-saffron-500 text-white font-bold flex items-center justify-center text-sm shrink-0">
          RD
        </div>
        <div className="min-w-0">
          <div className="font-bold text-white text-sm flex items-center gap-1.5">
            <span className="truncate">Rohan Desai</span>
            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-jamanvar-saffron-500/20 text-jamanvar-saffron-300 shrink-0">
              GOLD VIP
            </span>
          </div>
          <span className="text-[10px] text-white/50">14 visits · ₹28,400 spent</span>
        </div>
      </div>
      <div className="pt-3 space-y-1.5 text-[11px] text-white/70">
        <div className="flex justify-between">
          <span className="text-white/50">Favorite Dish</span>
          <span className="font-medium text-white">Paneer Tikka Angara</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/50">Loyalty Balance</span>
          <span className="font-bold text-jamanvar-saffron-400 font-mono">420 Pts</span>
        </div>
      </div>
    </Frame>
  );
}

function AnalyticsMockup() {
  const bars = [35, 45, 60, 80, 50, 40, 65, 95, 100, 75, 45];
  return (
    <Frame label="Live Business Intelligence">
      <div className="flex justify-between items-center mb-3">
        <div>
          <span className="text-[10px] text-white/50 uppercase tracking-wider block">Today's Revenue</span>
          <span className="text-xl font-black text-white">₹48,250</span>
        </div>
        <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded flex items-center gap-1">
          <TrendingUp className="w-3 h-3" /> +18.4%
        </span>
      </div>
      <div className="flex items-end gap-1.5 h-16 pt-2 border-b border-white/10 pb-2">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
            <div style={{ height: `${h}%` }} className={cn("w-full rounded-t", i === 8 ? "bg-jamanvar-saffron-500" : "bg-white/20")} />
          </div>
        ))}
      </div>
    </Frame>
  );
}

function HardwareMockup() {
  return (
    <Frame label="Hardware · Offline Resilience">
      <div className="flex items-center gap-3 p-3 rounded-2xl bg-jamanvar-navy-900 border border-white/10 mb-3">
        <WifiOff className="w-5 h-5 text-jamanvar-saffron-400 shrink-0" />
        <div>
          <span className="text-xs font-bold text-white block">100% Offline Capable</span>
          <span className="text-[10px] text-white/50">Bills and KOTs print without internet</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2.5 text-[11px]">
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-white/80">
          <Monitor className="w-4 h-4 text-jamanvar-saffron-400 shrink-0" />
          <span>15.6&quot; Touch POS</span>
        </div>
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-white/80">
          <Printer className="w-4 h-4 text-jamanvar-saffron-400 shrink-0" />
          <span>Thermal KOT Printer</span>
        </div>
      </div>
    </Frame>
  );
}

const VARIANT_MAP: Record<MockupVariant, React.ComponentType> = {
  ordering: OrderingMockup,
  captainOrdering: CaptainOrderingMockup,
  qrOrdering: QrOrderingMockup,
  pos: PosMockup,
  payment: PaymentMockup,
  kds: KdsMockup,
  kdsQueue: KdsQueueMockup,
  tables: TablesMockup,
  tableSections: TableSectionsMockup,
  inventory: InventoryMockup,
  customers: CustomersMockup,
  analytics: AnalyticsMockup,
  hardware: HardwareMockup,
};

export function ProductMedia({ variant }: ProductMediaProps) {
  const Component = VARIANT_MAP[variant];
  return <Component />;
}
