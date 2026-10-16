import Image from "next/image";
import { LOGO } from "@/content/brand";

/** The English Jamanvar wordmark. Size it with a height class, e.g. `h-12 w-auto`. */
export function Logo({ className, size = "small", priority = false }: { className?: string; size?: "small" | "large"; priority?: boolean }) {
  const img = LOGO[size];
  return <Image src={img.src} alt={LOGO.alt} width={img.width} height={img.height} priority={priority} className={className} />;
}
