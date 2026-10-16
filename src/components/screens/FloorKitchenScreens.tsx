import { ArrowRightLeft, ChevronRight, Combine, Split } from "lucide-react";
import { KITCHEN_TICKETS, RESTAURANT_TABLES, type TableInfo } from "@/lib/data";
import { cn } from "@/lib/utils";
import { AppBar, Card, DESIGN_WIDTH, Label, Pill, PrimaryButton, ScreenRoot, StatusBar, type Tone } from "./ui";

const TIMER = (minutes: number) =>
  minutes <= 10 ? { band: "bg-[#25804A]", tone: "green" as Tone, label: "Preparing" } : minutes <= 18 ? { band: "bg-[#B0640C]", tone: "amber" as Tone, label: "Watch the clock" } : { band: "bg-[#B42318]", tone: "red" as Tone, label: "Ready · overdue" };

/** Kitchen display at the tandoor pass: three tickets in timer colours. */
export function KdsScreen() {
  return (
    <ScreenRoot designWidth={DESIGN_WIDTH.desktop}>
      <AppBar title="Kitchen display" subtitle="Tandoor pass · 3 open tickets" status="Live" />
      <div className="grid min-h-0 flex-1 grid-cols-3 gap-[1em] p-[1.2em]">
        {KITCHEN_TICKETS.map((t) => {
          const timer = TIMER(t.elapsedMinutes);
          return (
            <Card key={t.id} className="flex flex-col overflow-hidden">
              <div className={cn("flex items-center justify-between px-[1em] py-[0.6em] font-mono font-bold text-white", timer.band)}>
                <span className="text-[1em]">{t.orderNumber}</span>
                <span className="text-[1.25em]">{t.tableNumber}</span>
                <span className="text-[0.9em]">{t.elapsedMinutes} min</span>
              </div>
              <div className="flex-1 space-y-[0.7em] p-[1em]">
                {t.items.map((it) => (
                  <div key={it.name} className="flex items-start justify-between gap-[0.6em]">
                    <span>
                      <span className="block text-[1.1em] font-semibold leading-tight">
                        {it.qty}× {it.name}
                      </span>
                      {it.notes && <span className="block text-[0.8em] text-[#B44C14]">{it.notes}</span>}
                    </span>
                    <Pill tone={it.status === "done" ? "green" : "amber"}>{it.status === "done" ? "Done" : "Cooking"}</Pill>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#ECE4DA] px-[1em] py-[0.6em]">
                <Pill tone={timer.tone}>{timer.label}</Pill>
              </div>
            </Card>
          );
        })}
      </div>
    </ScreenRoot>
  );
}

const STATE: Record<TableInfo["status"], { tone: Tone; label: string; tile: string }> = {
  occupied: { tone: "orange", label: "Seated", tile: "border-[#F9A872] bg-[#FFF3EA]" },
  available: { tone: "green", label: "Free", tile: "border-[#9DCBA9] bg-[#EEF7F0]" },
  billing: { tone: "blue", label: "Billing", tile: "border-[#9FBBE6] bg-[#EEF3FB]" },
  reserved: { tone: "purple", label: "Reserved", tile: "border-[#C2B4EE] bg-[#F4F0FC]" },
};

const SECTIONS: TableInfo["section"][] = ["Main Dining", "Terrace", "Family Hall", "Bar Area"];

/** Live floor plan with every section and table state. */
export function FloorPlanScreen() {
  return (
    <ScreenRoot designWidth={DESIGN_WIDTH.desktop}>
      <AppBar title="Floor plan" subtitle="12 tables · live" status="Live" />
      <div className="grid min-h-0 flex-1 grid-cols-2 gap-[1em] p-[1.2em]">
        {SECTIONS.map((section) => (
          <Card key={section} className="p-[1em]">
            <Label>{section}</Label>
            <div className="mt-[0.7em] grid grid-cols-4 gap-[0.5em]">
              {RESTAURANT_TABLES.filter((t) => t.section === section).map((t) => (
                <div key={t.id} className={cn("rounded-[0.7em] border-[0.13em] px-[0.55em] py-[0.7em]", STATE[t.status].tile)}>
                  <p className="text-[1.25em] font-extrabold leading-none">{t.number}</p>
                  <p className="mt-[0.25em] text-[0.75em] text-[#7A6F66]">{t.capacity} seats</p>
                  <p className="mt-[0.2em] text-[0.68em] font-bold uppercase tracking-wide">{STATE[t.status].label}</p>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </ScreenRoot>
  );
}

const TABLE_ACTIONS = [
  { icon: Combine, label: "Merge tables" },
  { icon: ArrowRightLeft, label: "Transfer order" },
  { icon: Split, label: "Split bill" },
];

const RUNNING_ORDER = [
  ["Dal Makhani Handi", 2, "Served"],
  ["Paneer Butter Masala", 1, "Cooking"],
  ["Butter Garlic Naan", 6, "Cooking"],
] as const;

/** Table T-08 opened on a phone, with merge and transfer actions. */
export function TableDetailScreen() {
  const facts = [
    ["Seated", "1h 25m"],
    ["Bill", "₹5,890"],
    ["Active orders", "12"],
    ["Status", "Dining"],
  ];
  return (
    <ScreenRoot designWidth={DESIGN_WIDTH.phone}>
      <StatusBar time="8:42" />
      <AppBar compact title="Table" subtitle="Family Hall" status="Seated" tone="orange" />
      <div className="flex min-h-0 flex-1 flex-col gap-[0.8em] p-[1em]">
        <div>
          <p className="text-[2.4em] font-extrabold leading-none">T-08</p>
          <p className="mt-[0.3em] text-[0.9em] text-[#7A6F66]">8 seats · Suresh M.</p>
        </div>
        <div className="grid grid-cols-2 gap-[0.6em]">
          {facts.map(([k, v]) => (
            <Card key={k} className="p-[0.8em]">
              <Label>{k}</Label>
              <p className={cn("mt-[0.2em] text-[1.35em] font-extrabold", k === "Bill" && "text-[#B44C14]")}>{v}</p>
            </Card>
          ))}
        </div>
        <Card className="divide-y divide-[#ECE4DA] px-[0.9em]">
          {RUNNING_ORDER.map(([name, qty, status]) => (
            <div key={name} className="flex items-center gap-[0.5em] py-[0.55em] text-[0.88em]">
              <span className="font-mono text-[#B44C14]">{qty}×</span>
              <span className="flex-1 font-semibold">{name}</span>
              <Pill tone={status === "Served" ? "green" : "amber"}>{status}</Pill>
            </div>
          ))}
        </Card>
        {TABLE_ACTIONS.map(({ icon: Icon, label }) => (
          <Card key={label} className="flex items-center gap-[0.7em] px-[1em] py-[0.75em] font-bold">
            <Icon className="h-[1.2em] w-[1.2em] text-[#B44C14]" /> <span className="flex-1">{label}</span>
            <ChevronRight className="h-[1.1em] w-[1.1em] text-[#7A6F66]" />
          </Card>
        ))}
        <PrimaryButton className="mt-auto text-[1.1em]">GENERATE BILL</PrimaryButton>
      </div>
    </ScreenRoot>
  );
}
