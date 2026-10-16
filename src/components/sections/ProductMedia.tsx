import { DeviceFrame } from "@/components/site/DeviceFrame";
import { SCREEN_FOR_MOCKUP } from "@/content/screens";
import type { MockupVariant } from "@/content/products";

// Renders the Jamanvar product screen that matches a content mockup id.
// Returns null when a mockup has no matching screen.
export function ProductMedia({ variant, className }: { variant: MockupVariant; className?: string }) {
  const screen = SCREEN_FOR_MOCKUP[variant];
  if (!screen) return null;
  return <DeviceFrame screen={screen} className={className} />;
}
