"use client";

import React from "react";
import Image from "next/image";

export function WatermarkOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Top right subtle background watermark */}
      <div className="absolute -top-16 -right-24 w-[500px] h-[350px] opacity-[0.032] rotate-12">
        <Image
          src="/images/jamanvar/watermark-emblem.png"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Middle left subtle background watermark */}
      <div className="absolute top-[45%] -left-32 w-[600px] h-[400px] opacity-[0.025] -rotate-12">
        <Image
          src="/images/jamanvar/watermark-emblem.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Bottom right subtle background watermark */}
      <div className="absolute -bottom-20 -right-20 w-[650px] h-[420px] opacity-[0.035] rotate-6">
        <Image
          src="/images/jamanvar/watermark-emblem.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
