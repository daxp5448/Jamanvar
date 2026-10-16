import { cn } from "@/lib/utils";

/** Warm orange-tinted panel with the brand arc, used behind portrait devices. */
export function BrandPanel({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("relative overflow-hidden rounded-panel border border-brand-200 bg-brand-50 px-6 py-10 sm:px-12 sm:py-12", className)}>
      <div aria-hidden="true" className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full border-[32px] border-brand/15" />
      <div className="relative">{children}</div>
    </div>
  );
}
