import Image from "next/image";
import { cn } from "@/lib/utils";
import type { DetailPhoto, VisualId } from "@/content/productDetails";
import { SCREENS } from "@/content/screens";
import { DeviceFrame } from "@/components/site/DeviceFrame";
import { HardwareKit, KotTicket, QrTableTent, ReceiptPaper } from "@/components/screens/Artefacts";

const ARTEFACT_LABEL: Record<Exclude<VisualId, keyof typeof SCREENS>, string> = {
  "kot-ticket": "A printed Jamanvar kitchen order ticket: KOT #142 for table T-07 at the tandoor station, with each dish and its kitchen note",
  receipt: "A printed GST receipt for Table 07 with itemised dishes, CGST and SGST at 2.5% each, and a total of ₹1,302",
  "qr-tent": "A table stand with the Jamanvar logo, the words Scan to order, a QR code and table number 07",
  "hardware-kit": "A Jamanvar hardware kit: POS terminal, kitchen display tablet, captain handheld and receipt printer, each showing the Jamanvar interface",
};

function isScreen(id: VisualId): id is keyof typeof SCREENS {
  return id in SCREENS;
}

/** Phones and handhelds are taller than wide, so they get a portrait panel. */
function isPortrait(id: VisualId) {
  return isScreen(id) && (SCREENS[id].device === "phone" || SCREENS[id].device === "handheld");
}

function Visual({ id }: { id: VisualId }) {
  if (isScreen(id)) {
    return <DeviceFrame screen={id} className={isPortrait(id) ? "w-[52%] max-w-[16rem]" : "w-[88%]"} />;
  }
  const art = {
    "kot-ticket": <KotTicket className="w-[52%]" />,
    receipt: <ReceiptPaper className="w-[56%]" />,
    "qr-tent": <QrTableTent className="w-[44%]" />,
    "hardware-kit": <HardwareKit className="w-[94%]" />,
  }[id];
  return (
    <div role="img" aria-label={ARTEFACT_LABEL[id]} className="flex w-full justify-center">
      <div aria-hidden="true" className="contents">
        {art}
      </div>
    </div>
  );
}

/** A detail-row visual: a real photograph, or a coded product visual on a soft panel. */
export function PhotoFrame({ photo, priority = false, className }: { photo: DetailPhoto; priority?: boolean; className?: string }) {
  if ("visual" in photo) {
    return (
      <figure className={cn("flex items-center justify-center overflow-hidden rounded-card bg-gradient-to-br from-ivory-deep to-[#EFE3D6] p-[5%]", isPortrait(photo.visual) ? "aspect-[4/5]" : "aspect-[4/3]", className)}>
        <Visual id={photo.visual} />
      </figure>
    );
  }
  return (
    <figure className={cn("relative overflow-hidden rounded-card bg-ivory-deep shadow-card ring-1 ring-ink/5", className)}>
      <Image
        src={photo.src}
        alt={photo.alt}
        width={1200}
        height={896}
        priority={priority}
        sizes="(min-width: 1024px) 560px, 92vw"
        className="aspect-[4/3] h-auto w-full object-cover"
      />
    </figure>
  );
}
