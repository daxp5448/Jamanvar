"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, UtensilsCrossed, Calendar, Phone, User, Store, ArrowRight } from "lucide-react";
import Image from "next/image";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    restaurantName: "",
    outletType: "Dine-in Restaurant",
    tableCount: "10-25 Tables",
    city: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const confettiModule = await import("canvas-confetti");
      const confetti = confettiModule.default || confettiModule;
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#E88515", "#091528", "#22C55E", "#FCD692"],
      });
    } catch (err) {
      // Fallback
    }

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      restaurantName: "",
      outletType: "Dine-in Restaurant",
      tableCount: "10-25 Tables",
      city: "",
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-jamanvar-navy-950/70 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xl bg-jamanvar-cream-50 rounded-2xl shadow-2xl border border-jamanvar-navy-900/10 overflow-hidden z-10 my-8"
          >
            {/* Top Accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-jamanvar-navy-900 via-jamanvar-saffron-500 to-jamanvar-navy-900" />

            <div className="p-6 sm:p-8">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 p-2 text-jamanvar-navy-900/50 hover:text-jamanvar-navy-900 hover:bg-jamanvar-cream-200 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {!isSubmitted ? (
                <div>
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-jamanvar-navy-900 text-white flex items-center justify-center shadow-sm">
                      <UtensilsCrossed className="w-5 h-5 text-jamanvar-saffron-400" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-jamanvar-saffron-600">
                        1-on-1 Product Walkthrough
                      </span>
                      <h3 className="text-2xl font-bold text-jamanvar-navy-900 tracking-tight">
                        Experience Jamanvar POS
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-jamanvar-navy-900/70 mb-6 leading-relaxed">
                    See how Jamanvar streamlines your billing, kitchen tickets, table floor, and real-time sales reports. No commitment required.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold text-jamanvar-navy-900 uppercase tracking-wider mb-1.5">
                          Your Name
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-jamanvar-navy-900/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Rajesh Patel"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full pl-10 pr-3 py-2.5 bg-white border border-jamanvar-navy-900/15 rounded-xl text-sm text-jamanvar-navy-900 placeholder:text-jamanvar-navy-900/40 focus:outline-none focus:ring-2 focus:ring-jamanvar-saffron-500/50 focus:border-jamanvar-saffron-500 transition-all"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-semibold text-jamanvar-navy-900 uppercase tracking-wider mb-1.5">
                          WhatsApp / Phone
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-jamanvar-navy-900/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full pl-10 pr-3 py-2.5 bg-white border border-jamanvar-navy-900/15 rounded-xl text-sm text-jamanvar-navy-900 placeholder:text-jamanvar-navy-900/40 focus:outline-none focus:ring-2 focus:ring-jamanvar-saffron-500/50 focus:border-jamanvar-saffron-500 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Restaurant Name */}
                      <div>
                        <label className="block text-xs font-semibold text-jamanvar-navy-900 uppercase tracking-wider mb-1.5">
                          Restaurant Name
                        </label>
                        <div className="relative">
                          <Store className="w-4 h-4 text-jamanvar-navy-900/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Saffron Kitchen"
                            value={formData.restaurantName}
                            onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                            className="w-full pl-10 pr-3 py-2.5 bg-white border border-jamanvar-navy-900/15 rounded-xl text-sm text-jamanvar-navy-900 placeholder:text-jamanvar-navy-900/40 focus:outline-none focus:ring-2 focus:ring-jamanvar-saffron-500/50 focus:border-jamanvar-saffron-500 transition-all"
                          />
                        </div>
                      </div>

                      {/* City */}
                      <div>
                        <label className="block text-xs font-semibold text-jamanvar-navy-900 uppercase tracking-wider mb-1.5">
                          City / Location
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ahmedabad, Mumbai, Surat"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-white border border-jamanvar-navy-900/15 rounded-xl text-sm text-jamanvar-navy-900 placeholder:text-jamanvar-navy-900/40 focus:outline-none focus:ring-2 focus:ring-jamanvar-saffron-500/50 focus:border-jamanvar-saffron-500 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Outlet Type */}
                      <div>
                        <label className="block text-xs font-semibold text-jamanvar-navy-900 uppercase tracking-wider mb-1.5">
                          Outlet Format
                        </label>
                        <select
                          value={formData.outletType}
                          onChange={(e) => setFormData({ ...formData, outletType: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-white border border-jamanvar-navy-900/15 rounded-xl text-sm text-jamanvar-navy-900 focus:outline-none focus:ring-2 focus:ring-jamanvar-saffron-500/50 focus:border-jamanvar-saffron-500 transition-all"
                        >
                          <option>Dine-in Restaurant</option>
                          <option>Café & Bakery</option>
                          <option>Fine Dining & Lounge</option>
                          <option>Quick Service / Fast Food</option>
                          <option>Cloud Kitchen / Takeaway</option>
                          <option>Multi-Outlet Chain</option>
                        </select>
                      </div>

                      {/* Table Count */}
                      <div>
                        <label className="block text-xs font-semibold text-jamanvar-navy-900 uppercase tracking-wider mb-1.5">
                          Table Capacity
                        </label>
                        <select
                          value={formData.tableCount}
                          onChange={(e) => setFormData({ ...formData, tableCount: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-white border border-jamanvar-navy-900/15 rounded-xl text-sm text-jamanvar-navy-900 focus:outline-none focus:ring-2 focus:ring-jamanvar-saffron-500/50 focus:border-jamanvar-saffron-500 transition-all"
                        >
                          <option>1 - 10 Tables</option>
                          <option>10 - 25 Tables</option>
                          <option>25 - 50 Tables</option>
                          <option>50+ Tables</option>
                          <option>Counter Only (No Dine-in)</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 px-6 rounded-xl bg-jamanvar-saffron-500 hover:bg-jamanvar-saffron-600 text-white font-semibold shadow-saffron flex items-center justify-center gap-2 text-sm transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                      >
                        {loading ? (
                          <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Confirm & Schedule Free Demo</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-center text-[11px] text-jamanvar-navy-900/50">
                      Our restaurant onboarding specialist will connect within 2 hours.
                    </p>
                  </form>
                </div>
              ) : (
                <div className="py-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-jamanvar-green-100 text-jamanvar-green-600 mx-auto flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-jamanvar-navy-900 mb-2">
                    Demo Scheduled Successfully!
                  </h3>
                  <p className="text-sm text-jamanvar-navy-900/70 max-w-md mx-auto mb-6">
                    Thank you, <span className="font-semibold text-jamanvar-navy-900">{formData.name}</span>. Our specialist has received the details for <span className="font-semibold text-jamanvar-navy-900">{formData.restaurantName || "your restaurant"}</span> and will reach out to you on <span className="font-semibold text-jamanvar-navy-900">{formData.phone}</span> shortly.
                  </p>

                  <button
                    onClick={handleReset}
                    className="py-2.5 px-6 rounded-xl bg-jamanvar-navy-900 text-white text-xs font-semibold hover:bg-jamanvar-navy-800 transition-colors"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
