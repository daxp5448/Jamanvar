import { cn } from "@/lib/utils";
import { SCREENS, type DeviceKind, type ScreenId } from "@/content/screens";
import { Handheld, Laptop, Monitor, Phone, Tablet, WallDisplay } from "@/components/devices/Devices";
import { SCREEN_COMPONENTS } from "@/components/screens/registry";

const DEVICES: Record<DeviceKind, typeof Phone> = {
  phone: Phone,
  handheld: Handheld,
  tablet: Tablet,
  laptop: Laptop,
  monitor: Monitor,
  wall: WallDisplay,
};

/** Natural width for portrait devices; callers can override with `className`. */
const DEFAULT_WIDTH: Partial<Record<DeviceKind, string>> = {
  phone: "mx-auto w-full max-w-[16.5rem]",
  handheld: "mx-auto w-full max-w-[17rem]",
};

// Shows a Jamanvar product screen, drawn in code, inside a realistic device.
// The screen is one labelled image for assistive technology.
export function DeviceFrame({ screen, className }: { screen: ScreenId; className?: string }) {
  const info = SCREENS[screen];
  const Device = DEVICES[info.device];
  const Screen = SCREEN_COMPONENTS[screen];
  return (
    <div role="img" aria-label={info.alt} className={cn(DEFAULT_WIDTH[info.device], className)}>
      <div aria-hidden="true">
        <Device aspect={info.aspect}>
          <Screen />
        </Device>
      </div>
    </div>
  );
}

export function ScreenCaption({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-[0.8125rem] leading-5 text-ink-muted", className)}>
      {children ?? "Jamanvar screens shown with sample restaurant data."}
    </p>
  );
}
