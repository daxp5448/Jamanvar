import { cn } from "@/lib/utils";

// Realistic, pure-CSS device frames. Every measurement inside a device is in
// container-query units (cqw) of the device's own width, so a frame looks the
// same at 120px or 1200px wide. The screen area is itself a size container,
// so the coded screens inside scale with it.

interface DeviceProps {
  className?: string;
  children: React.ReactNode;
  /** Screen aspect ratio, width / height. */
  aspect: number;
}

/** Subtle glass reflection over a screen. */
function Glare() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(118deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.06)_28%,transparent_42%)]"
    />
  );
}

function Screen({ aspect, className, children }: { aspect: number; className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("relative overflow-hidden bg-[#F7F3EE] [container-type:inline-size]", className)} style={{ aspectRatio: aspect }}>
      {children}
      <Glare />
    </div>
  );
}

/** Smartphone: graphite titanium edge, black bezel, dynamic island, side keys. */
export function Phone({ className, children, aspect }: DeviceProps) {
  return (
    <div className={cn("relative [container-type:inline-size]", className)}>
      <span aria-hidden="true" className="absolute -left-[1.1cqw] top-[22%] h-[7%] w-[1.4cqw] rounded-l-full bg-gradient-to-r from-[#6F6A66] to-[#3A3633]" />
      <span aria-hidden="true" className="absolute -left-[1.1cqw] top-[31%] h-[11%] w-[1.4cqw] rounded-l-full bg-gradient-to-r from-[#6F6A66] to-[#3A3633]" />
      <span aria-hidden="true" className="absolute -right-[1.1cqw] top-[26%] h-[14%] w-[1.4cqw] rounded-r-full bg-gradient-to-l from-[#6F6A66] to-[#3A3633]" />
      <div className="relative rounded-[15cqw] bg-[linear-gradient(145deg,#8C8681_0%,#3B3734_22%,#24211F_50%,#3B3734_78%,#8C8681_100%)] p-[1.6cqw] shadow-device">
        <div className="rounded-[13.6cqw] bg-[#0B0B0C] p-[3.2cqw]">
          <Screen aspect={aspect} className="rounded-[10.6cqw]">
            {children}
          </Screen>
        </div>
        <span aria-hidden="true" className="absolute left-1/2 top-[3.6cqw] z-20 h-[7.4cqw] w-[27cqw] -translate-x-1/2 rounded-full bg-[#0B0B0C]" />
      </div>
    </div>
  );
}

/** Rugged Android captain handheld: thick bezel, orange corner bumpers. */
export function Handheld({ className, children, aspect }: DeviceProps) {
  return (
    <div className={cn("relative [container-type:inline-size]", className)}>
      <div className="relative rounded-[12cqw] bg-[linear-gradient(160deg,#3E3935,#1E1B19_55%,#2D2926)] p-[6cqw] pb-[11cqw] shadow-device ring-1 ring-black/40">
        {(["left-0 top-0 rounded-tl-[12cqw]", "right-0 top-0 rounded-tr-[12cqw]", "left-0 bottom-0 rounded-bl-[12cqw]", "right-0 bottom-0 rounded-br-[12cqw]"] as const).map((pos) => (
          <span key={pos} aria-hidden="true" className={cn("absolute h-[16cqw] w-[16cqw] bg-brand/90", pos)} />
        ))}
        <div className="relative rounded-[5cqw] bg-[#0B0B0C] p-[1.6cqw]">
          <Screen aspect={aspect} className="rounded-[3.6cqw]">
            {children}
          </Screen>
        </div>
        <span aria-hidden="true" className="absolute bottom-[3.6cqw] left-1/2 h-[3.4cqw] w-[24cqw] -translate-x-1/2 rounded-full bg-[#141210] ring-1 ring-white/10" />
      </div>
    </div>
  );
}

/** Tablet: thin even bezel, front camera, aluminium edge. */
export function Tablet({ className, children, aspect }: DeviceProps) {
  return (
    <div className={cn("relative [container-type:inline-size]", className)}>
      <div className="relative rounded-[3.4cqw] bg-[linear-gradient(145deg,#C9C5C0,#8E8984_45%,#C9C5C0)] p-[0.45cqw] shadow-device">
        <div className="relative rounded-[3cqw] bg-[#0B0B0C] p-[2.2cqw]">
          <Screen aspect={aspect} className="rounded-[1.1cqw]">
            {children}
          </Screen>
          <span aria-hidden="true" className="absolute left-1/2 top-[0.75cqw] h-[0.7cqw] w-[0.7cqw] -translate-x-1/2 rounded-full bg-[#2A2A2E] ring-1 ring-white/10" />
        </div>
      </div>
    </div>
  );
}

/** Laptop: black-bezel lid on a silver aluminium deck with a thumb notch. */
export function Laptop({ className, children, aspect }: DeviceProps) {
  return (
    <div className={cn("relative [container-type:inline-size]", className)}>
      <div className="mx-[7.5%] rounded-t-[2.4cqw] bg-[linear-gradient(180deg,#5B5753,#2B2826)] p-[0.35cqw] pb-0 shadow-device">
        <div className="relative rounded-t-[2.1cqw] bg-[#0B0B0C] px-[1.6cqw] pb-[2.2cqw] pt-[2.2cqw]">
          <span aria-hidden="true" className="absolute left-1/2 top-[0.75cqw] h-[0.6cqw] w-[0.6cqw] -translate-x-1/2 rounded-full bg-[#26262A]" />
          <Screen aspect={aspect} className="rounded-[0.4cqw]">
            {children}
          </Screen>
        </div>
      </div>
      <div aria-hidden="true" className="relative h-[2.6cqw] rounded-b-[1.6cqw] bg-[linear-gradient(180deg,#E7E4E0_0%,#CFCBC6_45%,#A8A39E_100%)] shadow-[0_2.2cqw_3cqw_-1.6cqw_rgba(41,35,31,0.45)]">
        <span className="absolute left-1/2 top-0 h-[1cqw] w-[14%] -translate-x-1/2 rounded-b-[1cqw] bg-[#B9B4AF]" />
      </div>
    </div>
  );
}

/** Desktop POS terminal: slim black bezel, chin, brushed stand and base. */
export function Monitor({ className, children, aspect }: DeviceProps) {
  return (
    <div className={cn("relative [container-type:inline-size]", className)}>
      <div className="relative rounded-[2cqw] bg-[linear-gradient(180deg,#2B2826,#141210)] p-[1.3cqw] pb-[3.4cqw] shadow-device ring-1 ring-black/50">
        <Screen aspect={aspect} className="rounded-[0.5cqw]">
          {children}
        </Screen>
        <span aria-hidden="true" className="absolute bottom-[1.2cqw] left-1/2 h-[0.9cqw] w-[0.9cqw] -translate-x-1/2 rounded-full bg-brand/80" />
      </div>
      <div
        aria-hidden="true"
        className="mx-auto h-[9cqw] w-[16%] bg-[linear-gradient(90deg,#9E9893,#DAD6D1_45%,#B4AFAA_60%,#8E8984)]"
        style={{ clipPath: "polygon(12% 0, 88% 0, 100% 100%, 0 100%)" }}
      />
      <div aria-hidden="true" className="mx-auto h-[1.8cqw] w-[38%] rounded-[50%] bg-[linear-gradient(180deg,#DCD8D3,#9C9792)] shadow-[0_1.4cqw_2.4cqw_-0.8cqw_rgba(41,35,31,0.45)]" />
    </div>
  );
}

/** Kitchen wall display: industrial black frame with a wall-mount shadow. */
export function WallDisplay({ className, children, aspect }: DeviceProps) {
  return (
    <div className={cn("relative [container-type:inline-size]", className)}>
      <span aria-hidden="true" className="absolute -top-[2.6cqw] left-1/2 h-[2.8cqw] w-[10%] -translate-x-1/2 rounded-t-[0.6cqw] bg-[linear-gradient(180deg,#8E8984,#4A4542)]" />
      <div className="relative rounded-[1.2cqw] bg-[linear-gradient(180deg,#24211F,#0E0D0C)] p-[1cqw] shadow-device ring-1 ring-black/50">
        <Screen aspect={aspect} className="rounded-[0.4cqw]">
          {children}
        </Screen>
      </div>
    </div>
  );
}

/** Self-ordering kiosk: portrait screen in a pedestal housing. */
export function KioskStand({ className, children, aspect }: DeviceProps) {
  return (
    <div className={cn("relative [container-type:inline-size]", className)}>
      <div className="relative rounded-[6cqw] bg-[linear-gradient(160deg,#F4F1ED,#D3CEC8_60%,#BDB7B1)] p-[3.5cqw] shadow-device ring-1 ring-black/10">
        <div className="rounded-[3.2cqw] bg-[#0B0B0C] p-[1.6cqw]">
          <Screen aspect={aspect} className="rounded-[2cqw]">
            {children}
          </Screen>
        </div>
        <div aria-hidden="true" className="mx-auto mt-[3cqw] h-[6cqw] w-[44%] rounded-[1.4cqw] bg-[#2B2826] ring-1 ring-black/30">
          <span className="mx-auto mt-[2.4cqw] block h-[1.2cqw] w-[70%] rounded-full bg-black/70" />
        </div>
      </div>
      <div aria-hidden="true" className="mx-auto h-[22cqw] w-[24%] bg-[linear-gradient(90deg,#B4AFAA,#E6E2DE_45%,#C9C4BF_60%,#9E9893)]" />
      <div aria-hidden="true" className="mx-auto h-[4cqw] w-[62%] rounded-[50%] bg-[linear-gradient(180deg,#DCD8D3,#9C9792)] shadow-[0_2cqw_3cqw_-1cqw_rgba(41,35,31,0.4)]" />
    </div>
  );
}
