"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CreditCard,
  LayoutGrid,
  ChefHat,
  Boxes,
  TrendingUp,
  Search,
  Plus,
  Minus,
  CheckCircle2,
  Clock,
  Printer,
  Receipt,
  User,
  ShieldAlert,
  ArrowRight,
  Filter,
  DollarSign,
  Users,
} from "lucide-react";
import {
  MENU_ITEMS,
  RESTAURANT_TABLES,
  KITCHEN_TICKETS,
  INVENTORY_ITEMS,
  TableInfo,
} from "@/lib/data";
import { cn, formatINR } from "@/lib/utils";
import { BillData, BillItem } from "./ThermalBillModal";

type TabKey = "pos" | "tables" | "kitchen" | "inventory" | "analytics";

interface TabItem {
  key: TabKey;
  label: string;
  subtitle: string;
  icon: React.ElementType;
}

const TABS: TabItem[] = [
  { key: "pos", label: "POS Billing", subtitle: "3-Sec Checkouts", icon: CreditCard },
  { key: "tables", label: "Table Floor", subtitle: "Live Occupancy", icon: LayoutGrid },
  { key: "kitchen", label: "Kitchen KDS", subtitle: "Zero Order Delay", icon: ChefHat },
  { key: "inventory", label: "Inventory", subtitle: "Recipe Tracking", icon: Boxes },
  { key: "analytics", label: "Live Analytics", subtitle: "Real-time P&L", icon: TrendingUp },
];

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<TabKey>("pos");

  // State for interactive POS tab
  const [cartItems, setCartItems] = useState<BillItem[]>([
    { id: 1, name: "Paneer Tikka Angara", unitPrice: 340, qty: 2, total: 680 },
    { id: 2, name: "Butter Garlic Naan", unitPrice: 80, qty: 3, total: 240 },
    { id: 3, name: "Dal Makhani Handi", unitPrice: 380, qty: 1, total: 380 },
    { id: 4, name: "Masala Chaas", unitPrice: 90, qty: 2, total: 180 },
  ]);

  const [selectedTable, setSelectedTable] = useState<TableInfo>(RESTAURANT_TABLES[6]); // T-07

  const addItemToCart = (item: typeof MENU_ITEMS[0]) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) =>
          i.name === item.name
            ? { ...i, qty: i.qty + 1, total: (i.qty + 1) * i.unitPrice }
            : i
        );
      }
      return [
        ...prev,
        {
          id: Date.now(),
          name: item.name,
          unitPrice: item.price,
          qty: 1,
          total: item.price,
        },
      ];
    });
  };

  const removeItem = (id: string | number) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.total, 0);
  const gst = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + gst;

  const handleOpenBill = () => {
    if (typeof window !== "undefined") {
      const billPayload: BillData = {
        billNo: "ORD-8942-A" + Math.floor(100 + Math.random() * 900),
        tableNumber: selectedTable?.number || "Table 07",
        tableSection: selectedTable?.section || "Terrace",
        captain: selectedTable?.server || "Amit P.",
        cashier: "Head Cashier",
        items: cartItems.length > 0 ? cartItems : [
          { id: 1, name: "Paneer Tikka Angara", qty: 1, unitPrice: 340, total: 340 }
        ],
        subtotal: subtotal || 340,
        gst: gst || 17,
        total: grandTotal || 357,
        paymentMode: "CASH (PAID)",
      };

      window.dispatchEvent(
        new CustomEvent("open-bill-modal", { detail: billPayload })
      );
    }
  };

  return (
    <section id="product-showcase" className="py-20 md:py-32 bg-jamanvar-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-jamanvar-saffron-600 block mb-2">
            INTERACTIVE SYSTEM EXPLORER
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-jamanvar-navy-950 tracking-tight leading-tight">
            See Jamanvar in action.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-jamanvar-navy-900/70">
            Switch between views to experience how Jamanvar unites every department of your restaurant in real time.
          </p>
        </div>

        {/* Tab Controls Bar */}
        <div className="flex justify-center mb-8 overflow-x-auto no-scrollbar py-1">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-jamanvar-navy-900/10 shadow-subtle gap-1.5">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={cn(
                    "flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer",
                    isActive
                      ? "bg-jamanvar-navy-900 text-white shadow-sm"
                      : "text-jamanvar-navy-900/70 hover:text-jamanvar-navy-950 hover:bg-jamanvar-cream-100"
                  )}
                >
                  <Icon
                    className={cn(
                      "w-4 h-4",
                      isActive ? "text-jamanvar-saffron-400" : "text-jamanvar-navy-900/50"
                    )}
                  />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Central Product Showcase Container */}
        <div className="bg-jamanvar-navy-950 text-white rounded-3xl border border-white/10 shadow-2xl overflow-hidden min-h-[580px] flex flex-col justify-between">
          {/* Top Mock Window Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-jamanvar-navy-900/90 border-b border-white/10 text-xs">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="h-4 w-px bg-white/15" />
              <span className="font-bold tracking-wider text-white uppercase text-[11px]">
                JAMANVAR RESTAURANT SUITE • 2026 EDITION
              </span>
            </div>

            <div className="flex items-center gap-4 text-white/60 text-xs">
              <span className="hidden sm:inline text-white/40">Active Session: Manager (Rajesh P.)</span>
              <span className="font-mono text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/20">
                LIVE CLOUD SYNC
              </span>
            </div>
          </div>

          {/* Active Screen Transition */}
          <div className="p-4 sm:p-6 lg:p-8 flex-1">
            <AnimatePresence mode="wait">
              {/* TAB 1: POS BILLING SCREEN */}
              {activeTab === "pos" && (
                <motion.div
                  key="pos-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full"
                >
                  {/* Left Menu Selection (7 cols) */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-white">Touch POS Quick Billing</h4>
                        <p className="text-xs text-white/50">Click any dish to add to live order</p>
                      </div>
                      <span className="text-[11px] bg-white/10 px-2.5 py-1 rounded-lg text-white/70">
                        Category: Popular Starters, Kebabs & Mains
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {MENU_ITEMS.slice(0, 6).map((item) => (
                        <button
                          key={item.id}
                          onClick={() => addItemToCart(item)}
                          className="p-3 bg-jamanvar-navy-900 hover:bg-jamanvar-navy-800 border border-white/10 hover:border-jamanvar-saffron-500/50 rounded-xl text-left transition-all group cursor-pointer"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span className="text-[10px] font-mono text-white/40">{item.code}</span>
                          </div>
                          <div className="font-semibold text-xs text-white group-hover:text-jamanvar-saffron-300 transition-colors line-clamp-1">
                            {item.name}
                          </div>
                          <div className="flex justify-between items-center mt-2">
                            <span className="font-bold text-xs text-jamanvar-saffron-400">₹{item.price}</span>
                            <span className="text-[10px] bg-white/5 group-hover:bg-jamanvar-saffron-500 group-hover:text-white px-1.5 py-0.5 rounded transition-colors text-white/60">
                              + Add
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between text-xs text-white/70">
                      <span>💡 <strong>Pro Tip:</strong> Click &quot;Print KOT / Bill&quot; to see real-time calculated receipt with tax breakdown!</span>
                    </div>
                  </div>

                  {/* Right Cart Summary (5 cols) */}
                  <div className="lg:col-span-5 bg-jamanvar-navy-900 rounded-2xl p-4 sm:p-5 border border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center pb-3 border-b border-white/10">
                        <div>
                          <span className="font-bold text-sm text-white">{selectedTable.number} ({selectedTable.section})</span>
                          <span className="text-[10px] text-white/40 block">Bill #ORD-8942 • Server: {selectedTable.server || "Amit"}</span>
                        </div>
                        <span className="text-[10px] bg-jamanvar-saffron-500/20 text-jamanvar-saffron-300 px-2 py-0.5 rounded font-bold">
                          Dine-In
                        </span>
                      </div>

                      <div className="divide-y divide-white/5 max-h-48 overflow-y-auto no-scrollbar py-2 space-y-1">
                        {cartItems.map((item) => (
                          <div key={item.id} className="py-2 flex items-center justify-between text-xs">
                            <div>
                              <span className="text-white font-medium">{item.name}</span>
                              <div className="text-[10px] text-white/40">
                                {item.qty} × ₹{item.unitPrice}
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="font-mono font-semibold text-white">₹{item.total}</span>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="text-white/30 hover:text-red-400 text-xs p-1"
                              >
                                ×
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/10 space-y-1.5 text-xs">
                      <div className="flex justify-between text-white/60">
                        <span>Subtotal</span>
                        <span>₹{subtotal}</span>
                      </div>
                      <div className="flex justify-between text-white/60">
                        <span>GST (5.0%)</span>
                        <span>₹{gst}</span>
                      </div>
                      <div className="flex justify-between text-base font-extrabold text-white pt-2 border-t border-white/10">
                        <span>Total Payable</span>
                        <span className="text-jamanvar-saffron-400 font-mono text-lg">₹{grandTotal}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-2">
                        <button
                          onClick={handleOpenBill}
                          className="py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Printer className="w-3.5 h-3.5" />
                          <span>Print KOT / Bill</span>
                        </button>
                        <button
                          onClick={handleOpenBill}
                          className="py-2.5 rounded-lg bg-jamanvar-saffron-500 hover:bg-jamanvar-saffron-600 text-white font-bold text-xs shadow-saffron-sm flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <CreditCard className="w-3.5 h-3.5" />
                          <span>Settle & Pay</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: TABLES FLOOR PLAN */}
              {activeTab === "tables" && (
                <motion.div
                  key="tables-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-bold text-white">Visual Floor & Table Management</h4>
                      <p className="text-xs text-white/50">Real-time status of 42 tables across 4 sections</p>
                    </div>

                    <div className="flex items-center gap-3 text-xs">
                      <span className="flex items-center gap-1 text-white/70">
                        <span className="w-2.5 h-2.5 rounded bg-jamanvar-navy-900 border border-white/20" /> Available
                      </span>
                      <span className="flex items-center gap-1 text-white/70">
                        <span className="w-2.5 h-2.5 rounded bg-jamanvar-saffron-500" /> Occupied
                      </span>
                      <span className="flex items-center gap-1 text-white/70">
                        <span className="w-2.5 h-2.5 rounded bg-emerald-500" /> Billed
                      </span>
                      <span className="flex items-center gap-1 text-white/70">
                        <span className="w-2.5 h-2.5 rounded bg-amber-400" /> Reserved
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {RESTAURANT_TABLES.map((table) => {
                      const isSelected = selectedTable?.id === table.id;
                      return (
                        <button
                          key={table.id}
                          onClick={() => setSelectedTable(table)}
                          className={cn(
                            "p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between h-28",
                            table.status === "occupied" && "bg-jamanvar-navy-900 border-jamanvar-saffron-500/50 text-white",
                            table.status === "available" && "bg-white/5 border-white/10 text-white/60 hover:bg-white/10",
                            table.status === "billing" && "bg-emerald-950/60 border-emerald-500/50 text-white",
                            table.status === "reserved" && "bg-amber-950/40 border-amber-500/40 text-white",
                            isSelected && "ring-2 ring-jamanvar-saffron-400 shadow-lg scale-105"
                          )}
                        >
                          <div className="flex justify-between items-start">
                            <span className="font-mono font-black text-sm text-white">{table.number}</span>
                            <span className="text-[10px] text-white/40">{table.capacity} Seats</span>
                          </div>

                          <div>
                            <span
                              className={cn(
                                "text-[10px] font-bold uppercase block",
                                table.status === "occupied" && "text-jamanvar-saffron-400",
                                table.status === "available" && "text-white/40",
                                table.status === "billing" && "text-emerald-400",
                                table.status === "reserved" && "text-amber-300"
                              )}
                            >
                              {table.status}
                            </span>
                            <div className="font-mono font-bold text-xs text-white">
                              {table.currentBill ? `₹${table.currentBill}` : "Ready"}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {selectedTable && (
                    <div className="p-4 bg-jamanvar-navy-900 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
                      <div>
                        <span className="text-[10px] text-white/40 uppercase tracking-wider block">Selected Table Details</span>
                        <span className="font-bold text-sm text-white">{selectedTable.number} • {selectedTable.section}</span>
                        <span className="text-white/60 ml-2">({selectedTable.capacity} Seats, Server: {selectedTable.server || "Unassigned"})</span>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium">
                          Merge Table
                        </button>
                        <button
                          onClick={handleOpenBill}
                          className="px-3 py-1.5 rounded-lg bg-jamanvar-saffron-500 hover:bg-jamanvar-saffron-600 text-white font-bold"
                        >
                          View Active Bill
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* TAB 3: KITCHEN DISPLAY KDS */}
              {activeTab === "kitchen" && (
                <motion.div
                  key="kitchen-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-white">Live Kitchen Order Display (KDS)</h4>
                      <p className="text-xs text-white/50">Station: Main Hot Line & Tandoor Pass</p>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-500/20">
                      Average Prep Time: 11.4 mins
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {KITCHEN_TICKETS.map((kot) => (
                      <div
                        key={kot.id}
                        className="bg-jamanvar-navy-900 rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between"
                      >
                        <div className="p-3.5 bg-jamanvar-navy-800 border-b border-white/10 flex items-center justify-between">
                          <div>
                            <span className="font-bold text-white font-mono text-sm">{kot.orderNumber}</span>
                            <span className="text-xs text-jamanvar-saffron-300 font-bold ml-2">{kot.tableNumber}</span>
                          </div>
                          <span
                            className={cn(
                              "text-[10px] font-bold px-2 py-0.5 rounded font-mono",
                              kot.elapsedMinutes > 15
                                ? "bg-red-500/20 text-red-300"
                                : "bg-amber-500/20 text-amber-300"
                            )}
                          >
                            ⏱ {kot.elapsedMinutes}m ago
                          </span>
                        </div>

                        <div className="p-4 space-y-2.5 flex-1">
                          {kot.items.map((item, idx) => (
                            <div key={idx} className="flex items-start justify-between text-xs pb-2 border-b border-white/5">
                              <div>
                                <div className="font-bold text-white">
                                  {item.qty} × {item.name}
                                </div>
                                {item.notes && (
                                  <div className="text-[10px] text-amber-300 italic font-mono">
                                    Note: {item.notes}
                                  </div>
                                )}
                              </div>
                              <span
                                className={cn(
                                  "text-[9px] font-bold px-1.5 py-0.5 rounded uppercase",
                                  item.status === "cooking" ? "bg-amber-500/20 text-amber-300" : "bg-emerald-500/20 text-emerald-300"
                                )}
                              >
                                {item.status}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="p-3 bg-jamanvar-navy-950/80 border-t border-white/10 flex justify-between items-center">
                          <span className="text-[10px] text-white/50">Captain: {kot.server}</span>
                          <button className="px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors cursor-pointer">
                            Mark Ready
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* TAB 4: INVENTORY & RECIPES */}
              {activeTab === "inventory" && (
                <motion.div
                  key="inventory-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-white">Raw Material & Ingredient Inventory</h4>
                      <p className="text-xs text-white/50">Live stock auto-deducted with every POS transaction</p>
                    </div>
                    <button className="px-3 py-1.5 bg-jamanvar-saffron-500 hover:bg-jamanvar-saffron-600 text-white rounded-lg text-xs font-bold transition-colors">
                      + Add Purchase Entry
                    </button>
                  </div>

                  <div className="bg-jamanvar-navy-900 rounded-2xl border border-white/10 overflow-hidden">
                    <div className="grid grid-cols-12 text-[10px] font-bold uppercase tracking-wider text-white/40 p-4 border-b border-white/10">
                      <span className="col-span-4">Ingredient</span>
                      <span className="col-span-2">Category</span>
                      <span className="col-span-2 text-right">Available Stock</span>
                      <span className="col-span-2 text-right">Threshold</span>
                      <span className="col-span-2 text-right">Health Status</span>
                    </div>

                    <div className="divide-y divide-white/5 text-xs">
                      {INVENTORY_ITEMS.map((item) => (
                        <div key={item.id} className="grid grid-cols-12 p-4 items-center hover:bg-white/5 transition-colors">
                          <span className="col-span-4 font-semibold text-white">{item.name}</span>
                          <span className="col-span-2 text-white/50 text-[11px]">{item.category}</span>
                          <span className="col-span-2 text-right font-mono font-bold text-white">
                            {item.currentStock} {item.unit}
                          </span>
                          <span className="col-span-2 text-right font-mono text-white/40">
                            {item.threshold} {item.unit}
                          </span>
                          <div className="col-span-2 flex justify-end">
                            <span
                              className={cn(
                                "text-[10px] font-bold px-2 py-0.5 rounded-full inline-flex items-center gap-1",
                                item.status === "optimal" && "bg-emerald-500/20 text-emerald-300",
                                item.status === "low" && "bg-amber-500/20 text-amber-300",
                                item.status === "critical" && "bg-red-500/20 text-red-300"
                              )}
                            >
                              {item.status === "optimal" && <CheckCircle2 className="w-2.5 h-2.5" />}
                              {item.status === "low" && <Clock className="w-2.5 h-2.5" />}
                              {item.status === "critical" && <ShieldAlert className="w-2.5 h-2.5" />}
                              {item.status.toUpperCase()}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 5: ANALYTICS & INSIGHTS */}
              {activeTab === "analytics" && (
                <motion.div
                  key="analytics-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-white">Live Business Intelligence & P&L</h4>
                      <p className="text-xs text-white/50">Comprehensive overview of revenue, labor, and food costs</p>
                    </div>
                    <span className="text-xs font-mono text-white/50 bg-white/5 px-3 py-1 rounded-lg">
                      Date: Today (Live Stream)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-jamanvar-navy-900 rounded-2xl border border-white/10">
                      <span className="text-[10px] uppercase text-white/50 font-bold block">Gross Sales</span>
                      <div className="text-2xl font-black text-white mt-1">₹48,250</div>
                      <span className="text-[11px] text-emerald-400 font-semibold mt-1 block">
                        +18.4% vs Previous Friday
                      </span>
                    </div>

                    <div className="p-4 bg-jamanvar-navy-900 rounded-2xl border border-white/10">
                      <span className="text-[10px] uppercase text-white/50 font-bold block">Food Cost Ratio</span>
                      <div className="text-2xl font-black text-jamanvar-saffron-400 mt-1">28.4%</div>
                      <span className="text-[11px] text-emerald-400 font-semibold mt-1 block">
                        -2.1% (Optimal Margin)
                      </span>
                    </div>

                    <div className="p-4 bg-jamanvar-navy-900 rounded-2xl border border-white/10">
                      <span className="text-[10px] uppercase text-white/50 font-bold block">Top Performing Item</span>
                      <div className="text-lg font-black text-white mt-1">Paneer Tikka Angara</div>
                      <span className="text-[11px] text-white/60 mt-1 block">
                        48 orders • ₹16,320 gross
                      </span>
                    </div>
                  </div>

                  {/* Hourly Breakdown Visual */}
                  <div className="p-5 bg-jamanvar-navy-900 rounded-2xl border border-white/10">
                    <span className="text-xs font-bold text-white block mb-3">
                      Hourly Guest Rush & Revenue Curve
                    </span>
                    <div className="flex items-end gap-2 h-28 pt-4 pb-2 border-b border-white/10">
                      {[20, 30, 45, 70, 85, 40, 30, 50, 80, 100, 90, 60].map((val, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                          <div
                            style={{ height: `${val}%` }}
                            className={cn(
                              "w-full rounded-t transition-all",
                              val >= 90 ? "bg-jamanvar-saffron-500" : "bg-white/20 hover:bg-white/40"
                            )}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-white/40 pt-2">
                      <span>12 PM</span>
                      <span>2 PM (Lunch Rush)</span>
                      <span>5 PM</span>
                      <span className="text-jamanvar-saffron-400 font-bold">8:30 PM (Dinner Peak)</span>
                      <span>11 PM</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
