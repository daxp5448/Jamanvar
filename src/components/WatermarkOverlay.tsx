"use client";

import React from "react";
import Image from "next/image";

export function WatermarkOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Top right subtle background watermark */}
      <div className="hidden sm:block absolute -top-16 -right-24 w-[400px] lg:w-[500px] h-[300px] lg:h-[350px] opacity-[0.025] rotate-12">
        <Image
          src="/images/jamanvar/watermark-emblem.png"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Middle left subtle background watermark */}
      <div className="hidden md:block absolute top-[45%] -left-32 w-[500px] lg:w-[600px] h-[350px] lg:h-[400px] opacity-[0.02] -rotate-12">
        <Image
          src="/images/jamanvar/watermark-emblem.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Bottom right subtle background watermark */}
      <div className="hidden sm:block absolute -bottom-20 -right-20 w-[450px] lg:w-[650px] h-[320px] lg:h-[420px] opacity-[0.025] rotate-6">
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
