"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SiteIntroVideo() {
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Only lock body scroll while intro is visible
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }

    // Play video muted
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    // Auto-dismiss smoothly when video finishes or max 8 seconds fallback
    timerRef.current = setTimeout(() => {
      handleComplete();
    }, 8000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, []);

  const handleComplete = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
    // Note: NEVER call window.scrollTo here so user's manual scroll is never disrupted!
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[999999] pointer-events-none flex items-center justify-center p-4 sm:p-8 select-none"
          style={{
            background: "radial-gradient(circle at 50% 50%, #F5F5F5 0%, #E3E3E3 100%)",
            backgroundColor: "#E3E3E3",
          }}
        >
          {/* Natural, Sharp, Unzoomed Centered Video */}
          <div className="relative w-full max-w-2xl sm:max-w-3xl flex items-center justify-center pointer-events-auto">
            <video
              ref={videoRef}
              src="/videos/brand-animation.mp4"
              autoPlay
              muted
              playsInline
              preload="auto"
              // @ts-ignore
              defaultMuted
              // @ts-ignore
              webkit-playsinline="true"
              onEnded={handleComplete}
              style={{
                transform: "translateZ(0)",
                willChange: "transform",
              }}
              className="w-auto h-auto max-w-full max-h-[70vh] sm:max-h-[75vh] object-contain rounded-xl"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
