import { Check, Plus, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { AppBar, Card, DESIGN_WIDTH, Label, Pill, PrimaryButton, ScreenRoot, StatusBar, VegMark } from "./ui";

const QR_MENU = [
  { name: "Paneer Tikka Angara", price: 340, added: 1 },
  { name: "Hara Bhara Kebab", price: 280 },
  { name: "Crispy Corn Pepper Salt", price: 260, added: 1 },
  { name: "Dal Makhani Handi", price: 380 },
  { name: "Paneer Butter Masala", price: 420 },
  { name: "Butter Garlic Naan", price: 80 },
];

/** Guest menu opened from the Table 07 QR code. */
export function QrMenuScreen() {
  return (
    <ScreenRoot designWidth={DESIGN_WIDTH.phone}>
      <StatusBar />
      <AppBar compact title="Order" subtitle="Table 07" status="Dine-in" tone="orange" />
      <div className="flex gap-[0.4em] px-[1em] pt-[0.9em] text-[0.82em] font-bold">
        {["All", "Starters", "Mains", "Breads"].map((c, i) => (
          <span key={c} className={cn("rounded-full px-[0.9em] py-[0.4em]", i === 0 ? "bg-[#F47B35] text-[#1E1916]" : "bg-white text-[#5A5049] ring-1 ring-[#ECE4DA]")}>
            {c}
          </span>
        ))}
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-[0.6em] p-[1em]">
        {QR_MENU.map((d) => (
          <Card key={d.name} className="flex items-center gap-[0.7em] p-[0.8em]">
            <VegMark />
            <span className="min-w-0 flex-1">
              <span className="block text-[1em] font-bold leading-tight">{d.name}</span>
              <span className="font-mono text-[0.85em] font-bold text-[#B44C14]">₹{d.price}</span>
            </span>
            {d.added ? (
              <span className="flex items-center gap-[0.2em] rounded-[0.5em] bg-[#F47B35] px-[0.6em] py-[0.35em] text-[0.85em] font-extrabold text-[#1E1916]">
                {d.added} <Check className="h-[1em] w-[1em]" strokeWidth={3} />
              </span>
            ) : (
              <span className="flex items-center gap-[0.2em] rounded-[0.5em] px-[0.6em] py-[0.3em] text-[0.8em] font-extrabold text-[#B44C14] ring-[0.12em] ring-[#F47B35]">
                <Plus className="h-[1em] w-[1em]" strokeWidth={3} /> ADD
              </span>
            )}
          </Card>
        ))}
        <PrimaryButton className="mt-auto">2 items · ₹600 · VIEW ORDER</PrimaryButton>
      </div>
    </ScreenRoot>
  );
}

const CAPTAIN_ORDER = [
  ["Paneer Tikka Angara", 2, 680],
  ["Butter Garlic Naan", 1, 80],
  ["Dal Makhani Handi", 1, 380],
  ["Masala Chaas", 2, 180],
] as const;

/** Captain handheld taking Table T-07's order. */
export function CaptainScreen() {
  return (
    <ScreenRoot designWidth={DESIGN_WIDTH.handheld}>
      <AppBar compact title="Captain" subtitle="Amit P." status="Online" />
      <div className="flex min-h-0 flex-1 flex-col gap-[0.8em] p-[1em]">
        <div className="flex gap-[0.4em] text-[0.85em] font-bold">
          {["T-03", "T-05", "T-07", "T-09"].map((t) => (
            <span key={t} className={cn("rounded-[0.5em] px-[0.7em] py-[0.4em]", t === "T-07" ? "bg-[#F47B35] text-[#1E1916]" : "bg-white ring-1 ring-[#ECE4DA]")}>
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-[0.5em] rounded-[0.6em] border border-[#ECE4DA] bg-white px-[0.8em] py-[0.55em] text-[0.85em] text-[#7A6F66]">
          <Search className="h-[1em] w-[1em]" /> Short code or dish… <span className="font-mono font-bold text-[#B44C14]">PT01</span>
        </div>
        <div>
          <p className="text-[1.5em] font-extrabold leading-none">Table T-07</p>
          <p className="mt-[0.25em] text-[0.8em] text-[#7A6F66]">Terrace · 4 guests</p>
        </div>
        <Card className="divide-y divide-[#ECE4DA] px-[0.9em]">
          {CAPTAIN_ORDER.map(([name, qty, price]) => (
            <div key={name} className="flex items-center gap-[0.5em] py-[0.6em] text-[0.92em]">
              <VegMark />
              <span className="flex-1 font-semibold">{name}</span>
              <span className="font-mono text-[#B44C14]">{qty}×</span>
              <span className="w-[3.4em] text-right font-mono font-semibold">₹{price}</span>
            </div>
          ))}
        </Card>
        <div className="flex justify-between font-extrabold">
          <span>Running total</span>
          <span className="font-mono text-[#B44C14]">₹1,320</span>
        </div>
        <Card className="p-[0.9em]">
          <Label>Kitchen notes</Label>
          <div className="mt-[0.5em] flex flex-wrap gap-[0.4em] text-[0.78em] font-bold">
            {["Paneer Tikka · Spicy", "Naan · Crispy", "Chaas · Chilled"].map((n) => (
              <span key={n} className="rounded-[0.5em] bg-[#FFF3EA] px-[0.6em] py-[0.35em] text-[#B44C14] ring-1 ring-[#FCCBA6]">
                {n}
              </span>
            ))}
          </div>
        </Card>
        <Pill tone="green" className="self-start">
          Goes straight to the kitchen
        </Pill>
        <PrimaryButton className="mt-auto text-[1.15em]">FIRE KOT · 1 TAP</PrimaryButton>
      </div>
    </ScreenRoot>
  );
}

const NOTES = [
  ["Spicy", true],
  ["Extra mint dip", true],
  ["Less oil", false],
  ["No onion / garlic (Jain)", false],
  ["Extra crispy", false],
] as const;

/** Captain adding kitchen notes to a dish before firing the KOT. */
export function CaptainNotesScreen() {
  return (
    <ScreenRoot designWidth={DESIGN_WIDTH.handheld}>
      <AppBar compact title="Add note" subtitle="Table T-07" status="Online" />
      <div className="flex min-h-0 flex-1 flex-col gap-[0.9em] p-[1em]">
        <Card className="flex items-center justify-between px-[0.9em] py-[0.8em] font-bold">
          <span className="flex items-center gap-[0.5em]">
            <VegMark /> Paneer Tikka Angara
          </span>
          <span className="font-mono text-[#B44C14]">×2</span>
        </Card>
        <Card className="flex items-center justify-between px-[0.9em] py-[0.6em]">
          <Label>Quantity</Label>
          <span className="flex items-center gap-[0.8em] font-mono font-extrabold">
            <span className="flex h-[1.8em] w-[1.8em] items-center justify-center rounded-[0.5em] ring-1 ring-[#ECE4DA]">−</span>2
            <span className="flex h-[1.8em] w-[1.8em] items-center justify-center rounded-[0.5em] bg-[#F47B35] text-[#1E1916]">+</span>
          </span>
        </Card>
        <Label>Kitchen notes</Label>
        <div className="flex flex-wrap gap-[0.5em] text-[0.95em] font-bold">
          {NOTES.map(([note, on]) => (
            <span key={note} className={cn("rounded-[0.5em] px-[0.7em] py-[0.45em]", on ? "bg-[#FFF3EA] text-[#B44C14] ring-[0.12em] ring-[#F47B35]" : "bg-white ring-1 ring-[#ECE4DA]")}>
              {on && "✓ "}
              {note}
            </span>
          ))}
        </div>
        <div className="rounded-[0.6em] border border-dashed border-[#DCCDBF] bg-white px-[0.8em] py-[0.7em] text-[0.85em] text-[#7A6F66]">Type a custom note…</div>
        <Pill tone="green" className="self-start">Shown next to the dish on the kitchen screen</Pill>
        <PrimaryButton className="mt-auto text-[1.15em]">ADD TO ORDER</PrimaryButton>
      </div>
    </ScreenRoot>
  );
}
