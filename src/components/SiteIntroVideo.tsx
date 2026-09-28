"use client";

import React, { useState, useEffect, useRef, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";

// The intro plays once per visit: the first time someone lands on the site.
// Clicking "Home" later in the same visit goes straight to the page.
const SEEN_KEY = "jamanvar-intro-seen";

const subscribe = () => () => {};

function readSeen(): boolean {
  try {
    return window.sessionStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

function markSeen() {
  try {
    window.sessionStorage.setItem(SEEN_KEY, "1");
  } catch {
    // Storage can be blocked (private mode); the intro then just plays again.
  }
}

export function SiteIntroVideo() {
  // Server snapshot is `false` so the intro is in the first HTML, and the
  // client snapshot is read directly on in-app navigation, so returning to
  // Home never flashes the overlay.
  const seen = useSyncExternalStore(subscribe, readSeen, () => false);
  const [dismissed, setDismissed] = useState(false);
  const isVisible = !seen && !dismissed;

  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (seen) return;

    markSeen();

    // Only lock body scroll while intro is visible
    document.body.style.overflow = "hidden";

    // Play video muted
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }

    // Auto-dismiss smoothly when video finishes or max 8 seconds fallback
    timerRef.current = setTimeout(() => {
      handleComplete();
    }, 8000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seen]);

  const handleComplete = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    document.body.style.overflow = "";
    // Note: NEVER call window.scrollTo here so user's manual scroll is never disrupted!
    setDismissed(true);
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
