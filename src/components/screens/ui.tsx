import Image from "next/image";
import { LOGO } from "@/content/brand";
import { cn } from "@/lib/utils";

// Building blocks for the coded Jamanvar app screens. They follow the real
// app's light theme: ivory canvas, white cards, warm borders, orange accents.
// Every size is in `em`; ScreenRoot sets the base from the container width, so
// a screen scales like an image while staying sharp.

export const TONES = {
  green: "bg-[#E7F3EA] text-[#256B41] ring-[#BFDDC8]",
  amber: "bg-[#FFF1DC] text-[#8A5200] ring-[#F2D3A4]",
  red: "bg-[#FDECEA] text-[#A3271C] ring-[#F3C4BE]",
  blue: "bg-[#E6EEF9] text-[#2B5FA8] ring-[#C3D4EE]",
  purple: "bg-[#EFEAFB] text-[#5B43A8] ring-[#D5CBF2]",
  orange: "bg-[#FFF3EA] text-[#B44C14] ring-[#FCCBA6]",
  neutral: "bg-[#F3EEE8] text-[#5A5049] ring-[#E4DBD1]",
} as const;
export type Tone = keyof typeof TONES;

/** Layout width (in px at a 14px base) each screen family is drawn for. */
export const DESIGN_WIDTH = { desktop: 720, phone: 300, handheld: 320 } as const;

/** Sets the em base so `designWidth` px of layout fills the container. */
export function ScreenRoot({ designWidth, className, children }: { designWidth: number; className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("flex h-full w-full flex-col bg-[#F7F3EE] text-[#29231F]", className)} style={{ fontSize: `${1400 / designWidth}cqw`, lineHeight: 1.3 }}>
      {children}
    </div>
  );
}

export function AppBar({ title, subtitle, status, tone = "green", compact = false }: { title: string; subtitle?: string; status?: string; tone?: Tone; compact?: boolean }) {
  return (
    <div className={cn("flex shrink-0 items-center gap-[0.9em] border-b border-[#ECE4DA] bg-white", compact ? "px-[0.9em] py-[0.6em]" : "px-[1.3em] py-[0.8em]")}>
      <Image src={LOGO.small.src} alt="" width={LOGO.small.width} height={LOGO.small.height} className={cn("w-auto shrink-0", compact ? "h-[2.2em]" : "h-[2.8em]")} />
      <span className="h-[2em] w-px bg-[#ECE4DA]" />
      <span className="min-w-0 flex-1 leading-tight">
        <span className="block truncate text-[0.95em] font-extrabold uppercase tracking-wide">{title}</span>
        {subtitle && <span className="block truncate text-[0.72em] font-bold uppercase tracking-wider text-[#B44C14]">{subtitle}</span>}
      </span>
      {status && <Pill tone={tone}>{status}</Pill>}
    </div>
  );
}

export function Pill({ tone = "neutral", className, children }: { tone?: Tone; className?: string; children: React.ReactNode }) {
  return (
    <span className={cn("inline-flex shrink-0 items-center rounded-full px-[0.7em] py-[0.2em] text-[0.68em] font-bold uppercase tracking-wide ring-1", TONES[tone], className)}>
      {children}
    </span>
  );
}

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("rounded-[0.8em] border border-[#ECE4DA] bg-white shadow-[0_0.1em_0.3em_rgba(41,35,31,0.05)]", className)}>{children}</div>;
}

export function Label({ className, children }: { className?: string; children: React.ReactNode }) {
  return <p className={cn("text-[0.66em] font-bold uppercase tracking-[0.09em] text-[#7A6F66]", className)}>{children}</p>;
}

export function VegMark() {
  return (
    <span className="inline-flex h-[0.9em] w-[0.9em] shrink-0 items-center justify-center rounded-[0.15em] border-[0.1em] border-[#2F7D4F]">
      <span className="h-[0.42em] w-[0.42em] rounded-full bg-[#2F7D4F]" />
    </span>
  );
}

export function PrimaryButton({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span className={cn("flex items-center justify-center rounded-[0.7em] bg-[#F47B35] py-[0.75em] text-center font-extrabold text-[#1E1916] shadow-[0_0.3em_0.8em_-0.3em_rgba(244,123,53,0.8)]", className)}>
      {children}
    </span>
  );
}

/** Status bar for phone and handheld screens. */
export function StatusBar({ time = "7:42" }: { time?: string }) {
  return (
    <div className="flex shrink-0 items-center justify-between bg-white px-[1.4em] pb-[0.2em] pt-[0.9em] text-[0.8em] font-bold">
      <span>{time}</span>
      <span className="flex items-center gap-[0.3em]">
        <span className="flex items-end gap-[0.12em]">
          {[0.4, 0.6, 0.8, 1].map((h) => (
            <span key={h} className="w-[0.22em] rounded-[0.05em] bg-[#29231F]" style={{ height: `${h}em` }} />
          ))}
        </span>
        <span className="ml-[0.2em] h-[0.75em] w-[1.5em] rounded-[0.2em] border-[0.1em] border-[#29231F] p-[0.08em]">
          <span className="block h-full w-[78%] rounded-[0.08em] bg-[#29231F]" />
        </span>
      </span>
    </div>
  );
}
