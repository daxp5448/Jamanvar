"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Move, Eye, Utensils, ArrowRight } from "lucide-react";

interface TrailImageItem {
  id: number;
  src: string;
  alt: string;
  x: number;
  y: number;
  rotation: number;
  scale: number;
}

const TRAIL_IMAGES = [
  { src: "/images/jamanvar/trail/dish.jpg", alt: "Authentic Paneer Tikka Feast", label: "01. Authentic Cuisine" },
  { src: "/images/jamanvar/trail/pos.jpg", alt: "Modern Touch POS Terminal", label: "02. Quick Billing" },
  { src: "/images/jamanvar/trail/table.jpg", alt: "Warm Dining Ambience", label: "03. Table Floor" },
  { src: "/images/jamanvar/trail/kitchen.jpg", alt: "Chef Expediting at Pass", label: "04. Kitchen KDS" },
  { src: "/images/jamanvar/trail/receipt.jpg", alt: "Itemized GST Receipt", label: "05. GST Invoicing" },
  { src: "/images/jamanvar/trail/inventory.jpg", alt: "Whole Spices & Stock Ledger", label: "06. Raw Inventory" },
  { src: "/images/jamanvar/trail/analytics.jpg", alt: "Live Sales Growth Dashboard", label: "07. Live Insights" },
  { src: "/images/jamanvar/trail/customer.jpg", alt: "Delighted Guests Dining", label: "08. Guest Retention" },
];

export function CursorImageTrail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [trail, setTrail] = useState<TrailImageItem[]>([]);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const imageIndexRef = useRef(0);
  const counterRef = useRef(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCursorPos({ x, y });

    const dx = x - lastPosRef.current.x;
    const dy = y - lastPosRef.current.y;
    const distance = Math.hypot(dx, dy);

    // Responsive threshold for smooth cursor spawning
    if (distance > 45) {
      lastPosRef.current = { x, y };

      const currentImg = TRAIL_IMAGES[imageIndexRef.current % TRAIL_IMAGES.length];
      imageIndexRef.current += 1;
      counterRef.current += 1;

      // Calculate slight rotation based on cursor direction
      const rotation = Math.max(-12, Math.min(12, (dx / 6) + (Math.random() * 6 - 3)));

      const newItem: TrailImageItem = {
        id: counterRef.current,
        src: currentImg.src,
        alt: currentImg.alt,
        x,
        y,
        rotation,
        scale: 0.95 + Math.random() * 0.1,
      };

      setTrail((prev) => {
        const updated = [...prev, newItem];
        if (updated.length > 7) {
          return updated.slice(updated.length - 7);
        }
        return updated;
      });
    }
  }, []);

  // Fade out items over time
  useEffect(() => {
    const timer = setInterval(() => {
      setTrail((prev) => {
        if (prev.length === 0) return prev;
        return prev.slice(1);
      });
    }, 400);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="product"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setTrail([]);
      }}
      className="relative min-h-[580px] md:min-h-[660px] bg-jamanvar-navy-950 text-white overflow-hidden flex flex-col justify-center select-none py-20 cursor-crosshair border-y border-white/10"
    >
      {/* Background Subtle Ambient Glow & Pattern */}
      <div className="absolute inset-0 bg-subtle-pattern-dark pointer-events-none opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-jamanvar-saffron-500/12 rounded-full blur-[140px] pointer-events-none" />

      {/* Ambient background preview cards (faint aesthetic layers) */}
      <div className="hidden lg:grid absolute inset-0 grid-cols-4 gap-6 p-12 opacity-15 pointer-events-none">
        {TRAIL_IMAGES.slice(0, 4).map((item, idx) => (
          <div key={idx} className="relative rounded-2xl overflow-hidden border border-white/10 h-64 grayscale">
            <Image src={item.src} alt={item.alt} fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* Floating Dynamic Cursor Images Trail (Desktop) */}
      <div className="hidden md:block absolute inset-0 pointer-events-none z-20">
        {trail.map((item, index) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0.95, scale: 0.75, rotate: item.rotation }}
              animate={{ opacity: 0.9, scale: item.scale, rotate: item.rotation }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{
                left: `${item.x}px`,
                top: `${item.y}px`,
                transform: "translate(-50%, -50%)",
              }}
              className="absolute w-52 h-40 lg:w-64 lg:h-48 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/30 bg-jamanvar-navy-900"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="260px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-3 right-3 text-xs font-bold text-white truncate drop-shadow">
                {item.alt}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Cursor Badge (Desktop) */}
      {isHovered && (
        <motion.div
          animate={{
            x: cursorPos.x + 20,
            y: cursorPos.y + 20,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 260, mass: 0.4 }}
          className="hidden md:flex absolute z-30 pointer-events-none items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-jamanvar-saffron-500 text-white text-[11px] font-black tracking-wider uppercase shadow-saffron"
        >
          <Move className="w-3.5 h-3.5" />
          <span>EXPLORE</span>
        </motion.div>
      )}

      {/* Main Center Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-jamanvar-saffron-400 mb-6 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="uppercase tracking-widest text-[11px]">THE RESTAURANT MOMENTS</span>
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
          Move through Jamanvar.
        </h2>

        <p className="text-base sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
          See how one order moves through your restaurant — from sizzling tandoor pans to instant kitchen pass tickets, itemized GST bills, and delighted guests.
        </p>

        <div className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 text-xs text-white/70 backdrop-blur-sm shadow-subtle">
          <Eye className="w-4 h-4 text-jamanvar-saffron-400" />
          <span>Move your mouse cursor freely across this canvas to stream restaurant moments</span>
        </div>

        {/* Mobile Touch Gallery */}
        <div className="md:hidden mt-8 grid grid-cols-2 gap-3 text-left">
          {TRAIL_IMAGES.slice(0, 4).map((img, idx) => (
            <div
              key={idx}
              className="relative h-32 rounded-xl overflow-hidden border border-white/15 bg-white/5"
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="160px" />
              <div className="absolute inset-0 bg-gradient-to-t from-jamanvar-navy-950/90 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 text-[11px] font-bold text-white leading-tight">
                {img.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
