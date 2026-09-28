import React from "react";
import Image from "next/image";
import type { DetailPhoto } from "@/content/productDetails";

export function PhotoFrame({ photo, priority = false }: { photo: DetailPhoto; priority?: boolean }) {
  return (
    <figure className="relative overflow-hidden rounded-3xl border border-jamanvar-navy-900/10 bg-jamanvar-navy-950 shadow-elevated">
      <Image
        src={photo.src}
        alt={photo.alt}
        width={1200}
        height={896}
        priority={priority}
        sizes="(min-width: 1024px) 560px, 100vw"
        className="w-full h-auto object-cover aspect-[4/3]"
      />
      <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5 pointer-events-none" />
    </figure>
  );
}
