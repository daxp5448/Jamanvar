"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SiteIntroVideo() {
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Lock scroll to absolute top of first section
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    // Play video muted
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    // Auto-dismiss smoothly at 8 seconds
    const timer = setTimeout(() => {
      handleComplete();
    }, 8000);

    return () => {
      clearTimeout(timer);
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, []);

  const handleComplete = () => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[999999] pointer-events-none flex items-center justify-center p-4 sm:p-8"
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
              // @ts-ignore
              defaultMuted
              onEnded={handleComplete}
              style={{
                transform: "translateZ(0)",
                willChange: "transform",
              }}
              className="w-auto h-auto max-w-full max-h-[75vh] object-contain rounded-xl"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
