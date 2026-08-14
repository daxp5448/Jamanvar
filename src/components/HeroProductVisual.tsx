"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Receipt,
  Printer,
  CreditCard,
  ChefHat,
  TrendingUp,
  Clock,
  CheckCircle2,
  Search,
  Plus,
  Minus,
  Trash2,
  Sparkles,
} from "lucide-react";
import { BillData, BillItem } from "./ThermalBillModal";

interface MenuItem {
  id: string;
  name: string;
  price: number;
  code: string;
  category: "Kebabs" | "Mains" | "Breads" | "Drinks" | "Dessert";
}

const MENU_DATABASE: MenuItem[] = [
  { id: "kb1", name: "Paneer Tikka Angara", price: 340, code: "PT01", category: "Kebabs" },
  { id: "kb2", name: "Hara Bhara Kebab", price: 260, code: "HK02", category: "Kebabs" },
  { id: "kb3", name: "Veg Seekh Kebab", price: 290, code: "SK03", category: "Kebabs" },
  { id: "br1", name: "Butter Naan", price: 80, code: "BN01", category: "Breads" },
  { id: "mn1", name: "Dal Makhani Handi", price: 300, code: "DM01", category: "Mains" },
  { id: "mn2", name: "Hyderabadi Dum Biryani", price: 380, code: "HB03", category: "Mains" },
  { id: "dr1", name: "Masala Chaas", price: 90, code: "MC01", category: "Drinks" },
  { id: "ds1", name: "Gulab Jamun Rabdi", price: 180, code: "GJ01", category: "Dessert" },
];

export function HeroProductVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax Tilt State
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Interactive live cart items state
  const [cartItems, setCartItems] = useState<BillItem[]>([
    { id: 1, name: "Paneer Tikka Angara", qty: 2, unitPrice: 340, total: 680 },
    { id: 2, name: "Butter Naan", qty: 1, unitPrice: 80, total: 80 },
    { id: 3, name: "Dal Makhani Handi", qty: 1, unitPrice: 300, total: 300 },
    { id: 4, name: "Masala Chaas", qty: 2, unitPrice: 90, total: 180 },
  ]);

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSettled, setIsSettled] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + item.total, 0);
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + gst;

  const handleAddItem = (dish: { name: string; price: number }) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.name === dish.name);
      if (existingIndex > -1) {
        const updated = [...prev];
        const newQty = updated[existingIndex].qty + 1;
        updated[existingIndex] = {
          ...updated[existingIndex],
          qty: newQty,
          total: newQty * updated[existingIndex].unitPrice,
        };
        return updated;
      }
      return [
        ...prev,
        {
          id: Date.now(),
          name: dish.name,
          qty: 1,
          unitPrice: dish.price,
          total: dish.price,
        },
      ];
    });
  };

  const handleIncreaseQty = (id: string | number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + 1, total: (item.qty + 1) * item.unitPrice }
          : item
      )
    );
  };

  const handleDecreaseQty = (id: string | number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty - 1;
            return newQty > 0
              ? { ...item, qty: newQty, total: newQty * item.unitPrice }
              : null;
          }
          return item;
        })
        .filter(Boolean) as BillItem[]
    );
  };

  const handleRemoveItem = (id: string | number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleOpenBill = () => {
    if (typeof window !== "undefined") {
      const billPayload: BillData = {
        billNo: "ORD-19FC8D08FC491",
        tableNumber: "Table 07",
        tableSection: "Terrace",
        captain: "Amit P.",
        cashier: "Head Cashier",
        items: cartItems.length > 0 ? cartItems : [
          { id: 1, name: "Paneer Tikka Angara", qty: 1, unitPrice: 340, total: 340 }
        ],
        subtotal: subtotal || 340,
        gst: gst || 17,
        total: total || 357,
        paymentMode: "CASH (PAID)",
      };

      window.dispatchEvent(
        new CustomEvent("open-bill-modal", { detail: billPayload })
      );
    }
  };

  const filteredMenu = MENU_DATABASE.filter((item) => {
    const matchesCat = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-5xl mx-auto perspective-1000 py-4 sm:py-6"
    >
      {/* Ambient background glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-jamanvar-saffron-500/15 via-jamanvar-navy-900/10 to-jamanvar-saffron-500/20 rounded-3xl blur-2xl -z-10 pointer-events-none" />

      {/* Main Terminal Frame */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative bg-jamanvar-navy-950 text-white rounded-2xl sm:rounded-3xl border border-white/15 shadow-2xl overflow-hidden"
      >
        {/* Terminal Top Titlebar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-jamanvar-navy-900 border-b border-white/10 text-xs">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            </div>
            <div className="h-4 w-px bg-white/15" />
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-wide text-white">JAMANVAR POS</span>
              <span className="text-[10px] bg-jamanvar-saffron-500/25 text-jamanvar-saffron-300 px-2 py-0.5 rounded font-mono font-bold">
                TERMINAL #01 (DINE-IN)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-white/70">
            <div className="hidden sm:flex items-center gap-1.5 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/80 font-medium">Sync Live: Cloud Connected</span>
            </div>
            <div className="font-mono text-[11px] text-white/90 font-bold">20:18:44 IST</div>
          </div>
        </div>

        {/* Top Metric Bar (Revenue, Orders, Tables, Avg Order) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border-b border-white/10">
          <div className="bg-jamanvar-navy-900/80 p-3.5 sm:p-4">
            <span className="text-[10px] uppercase tracking-wider text-white/60 block font-bold">
              Today's Revenue
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-lg sm:text-2xl font-black text-white">₹48,250</span>
              <span className="text-[11px] font-bold text-emerald-400">
                +18.4%
              </span>
            </div>
          </div>

          <div className="bg-jamanvar-navy-900/80 p-3.5 sm:p-4">
            <span className="text-[10px] uppercase tracking-wider text-white/60 block font-bold">
              Total Orders
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-lg sm:text-2xl font-black text-white">127</span>
              <span className="text-[11px] text-white/50">bills settled</span>
            </div>
          </div>

          <div className="bg-jamanvar-navy-900/80 p-3.5 sm:p-4">
            <span className="text-[10px] uppercase tracking-wider text-white/60 block font-bold">
              Active Tables
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-lg sm:text-2xl font-black text-jamanvar-saffron-400">
                34 <span className="text-sm font-normal text-white/50">/ 42</span>
              </span>
              <span className="text-[11px] text-amber-300 font-bold">81% full</span>
            </div>
          </div>

          <div className="bg-jamanvar-navy-900/80 p-3.5 sm:p-4">
            <span className="text-[10px] uppercase tracking-wider text-white/60 block font-bold">
              Current Cart Total
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-lg sm:text-2xl font-black text-emerald-400">₹{total}</span>
              <span className="text-[11px] text-white/50">{cartItems.length} items</span>
            </div>
          </div>
        </div>

        {/* POS Workstation: Left Menu Grid + Right Order Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
          {/* LEFT: Menu / Quick Touch Grid (7 cols) */}
          <div className="lg:col-span-7 p-4 sm:p-5 border-b lg:border-b-0 lg:border-r border-white/10 bg-jamanvar-navy-900/40">
            {/* Quick search and category pill bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mb-4">
              <div className="relative flex-1">
                <Search className="w-3.5 h-3.5 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search Kebab, Biryani, Naan..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white/90 placeholder:text-white/40 focus:outline-none focus:border-jamanvar-saffron-500"
                />
              </div>
              <div className="flex gap-1 overflow-x-auto no-scrollbar py-0.5">
                {["All", "Kebabs", "Mains", "Breads", "Drinks", "Dessert"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-colors cursor-pointer shrink-0 ${
                      activeCategory === cat
                        ? "bg-jamanvar-saffron-500 text-white"
                        : "bg-white/10 text-white/70 hover:bg-white/15"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Menu Touch Tiles */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[300px] overflow-y-auto pr-1">
              {filteredMenu.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleAddItem(item)}
                  className="p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-jamanvar-saffron-500/60 transition-all text-left group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm border border-emerald-400 flex items-center justify-center p-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-[10px] font-mono text-white/40">{item.code}</span>
                  </div>
                  <div className="font-bold text-xs text-white group-hover:text-jamanvar-saffron-300 transition-colors truncate">
                    {item.name}
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs font-black text-jamanvar-saffron-400">₹{item.price}</span>
                    <span className="text-[10px] text-white/60 bg-white/10 group-hover:bg-jamanvar-saffron-500 group-hover:text-white px-1.5 py-0.5 rounded font-bold transition-colors">
                      + Add
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Quick Status Bar */}
            <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-white/80">
              <div className="flex items-center gap-2">
                <ChefHat className="w-4 h-4 text-jamanvar-saffron-400" />
                <span className="text-[11px]">Click any dish above — Cart &amp; Bill recalculate automatically!</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full">
                Auto Sync
              </span>
            </div>
          </div>

          {/* RIGHT: Live Order Panel (5 cols) */}
          <div className="lg:col-span-5 p-4 sm:p-5 flex flex-col justify-between bg-jamanvar-navy-950">
            <div>
              {/* Order Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-jamanvar-saffron-500 text-white flex items-center justify-center font-black text-xs shadow-saffron-sm">
                    07
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white flex items-center gap-1.5">
                      <span>Table 07</span>
                      <span className="text-[10px] font-normal text-white/50">(Terrace)</span>
                    </div>
                    <span className="text-[10px] text-white/50">Captain: Amit P. • 4 Guests</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold bg-amber-400/20 text-amber-300 px-2.5 py-1 rounded-full">
                  Live Cart
                </span>
              </div>

              {/* Order Item List with Add/Remove Controls */}
              <div className="divide-y divide-white/5 max-h-48 overflow-y-auto no-scrollbar py-2 space-y-1 text-xs">
                {cartItems.length === 0 ? (
                  <div className="py-8 text-center text-white/40 text-xs">
                    Cart is empty. Tap any dish on left to add!
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.id} className="py-2 flex items-center justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="text-white font-semibold truncate">{item.name}</div>
                        <div className="text-[10px] text-white/40">
                          ₹{item.unitPrice} each
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1.5 bg-white/10 rounded-lg p-0.5">
                        <button
                          onClick={() => handleDecreaseQty(item.id)}
                          className="w-5 h-5 rounded flex items-center justify-center hover:bg-white/20 text-white/80 transition-colors"
                          title="Decrease"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-mono font-bold text-xs text-white px-1">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => handleIncreaseQty(item.id)}
                          className="w-5 h-5 rounded flex items-center justify-center hover:bg-white/20 text-white/80 transition-colors"
                          title="Increase"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-mono font-bold text-white w-14 text-right">
                        ₹{item.total}
                      </span>

                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-white/30 hover:text-red-400 transition-colors p-1"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Calculations & Settle Bar */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <div className="flex justify-between text-xs text-white/70">
                <span>Subtotal ({cartItems.length} items)</span>
                <span className="font-mono">₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-xs text-white/70">
                <span>GST (CGST 2.5% + SGST 2.5%)</span>
                <span className="font-mono">₹{gst}</span>
              </div>
              <div className="flex justify-between text-sm sm:text-base font-extrabold text-white pt-1.5 border-t border-white/10">
                <span className="flex items-center gap-1.5">
                  <Receipt className="w-4 h-4 text-jamanvar-saffron-400" />
                  Total Bill
                </span>
                <span className="text-jamanvar-saffron-400 text-lg font-black font-mono">
                  ₹{total}
                </span>
              </div>

              {/* Quick Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  onClick={handleOpenBill}
                  className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-white/10 hover:border-jamanvar-saffron-500/50"
                >
                  <Printer className="w-3.5 h-3.5 text-white/80" />
                  <span>Print KOT / Bill</span>
                </button>
                <button
                  onClick={() => {
                    setIsSettled(true);
                    handleOpenBill();
                    setTimeout(() => setIsSettled(false), 2500);
                  }}
                  className="py-2.5 px-3 rounded-xl bg-jamanvar-saffron-500 hover:bg-jamanvar-saffron-600 text-white font-black text-xs shadow-saffron-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>{isSettled ? "Settled ✓" : "Settle & Pay"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Micro-Badges */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:flex absolute -bottom-3 -left-4 bg-jamanvar-cream-50 border border-jamanvar-navy-900/10 p-3.5 rounded-2xl shadow-xl items-center gap-3 z-20 text-jamanvar-navy-900"
      >
        <div className="w-9 h-9 rounded-xl bg-jamanvar-green-100 text-jamanvar-green-700 flex items-center justify-center">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs font-bold text-jamanvar-navy-950">100% Offline Capable</div>
          <div className="text-[10px] text-jamanvar-navy-900/70">Bills print even without internet</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden md:flex absolute -top-4 -right-4 bg-jamanvar-cream-50 border border-jamanvar-navy-900/10 p-3.5 rounded-2xl shadow-xl items-center gap-3 z-20 text-jamanvar-navy-900"
      >
        <div className="w-9 h-9 rounded-xl bg-jamanvar-saffron-100 text-jamanvar-saffron-700 flex items-center justify-center">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs font-bold text-jamanvar-navy-950">3.2x Faster Table Turns</div>
          <div className="text-[10px] text-jamanvar-navy-900/70">Instant kitchen routing</div>
        </div>
      </motion.div>
    </div>
  );
}
