"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Printer,
  Copy,
  X,
  Send,
} from "lucide-react";

export interface BillItem {
  id: string | number;
  name: string;
  qty: number;
  unitPrice: number;
  total: number;
}

export interface BillData {
  billNo?: string;
  tableNumber?: string;
  tableSection?: string;
  dateStr?: string;
  cashier?: string;
  captain?: string;
  items: BillItem[];
  subtotal: number;
  gst: number;
  total: number;
  paymentMode?: string;
}

interface ThermalBillModalProps {
  isOpen: boolean;
  onClose: () => void;
  billData?: BillData | null;
}

export function ThermalBillModal({
  isOpen,
  onClose,
  billData,
}: ThermalBillModalProps) {
  const [phone, setPhone] = useState("");
  const [copied, setCopied] = useState(false);
  const [waSent, setWaSent] = useState(false);

  // Fallback items if none provided
  const items: BillItem[] = billData?.items && billData.items.length > 0
    ? billData.items
    : [
        { id: 1, name: "Paneer Tikka Angara", qty: 2, unitPrice: 340, total: 680 },
        { id: 2, name: "Butter Naan", qty: 1, unitPrice: 80, total: 80 },
        { id: 3, name: "Dal Makhani Handi", qty: 1, unitPrice: 300, total: 300 },
        { id: 4, name: "Masala Chaas", qty: 2, unitPrice: 90, total: 180 },
      ];

  const subtotal = billData?.subtotal ?? items.reduce((sum, i) => sum + i.total, 0);
  const gst = billData?.gst ?? Math.round(subtotal * 0.05);
  const total = billData?.total ?? subtotal + gst;
  const billNo = billData?.billNo || "ORD-19FC8D08FC491";
  const tableNumber = billData?.tableNumber || "Table 07";
  const tableSection = billData?.tableSection ? ` (${billData.tableSection})` : "";
  const captain = billData?.captain || "Amit P.";
  const cashier = billData?.cashier || "Head Cashier";
  const paymentMode = billData?.paymentMode || "CASH (PAID)";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://kelviontech.in/");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendWA = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setWaSent(true);
    setTimeout(() => setWaSent(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          {/* High-Z Dark Blurred Backdrop covering whole viewport & navbar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-jamanvar-navy-950/90 backdrop-blur-md z-0"
          />

          {/* Modal Container - 100% In View */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl border border-white/20 overflow-hidden z-10 my-auto flex flex-col max-h-[92vh]"
          >
            {/* Top Action Bar (Print, Copy Link, Close) */}
            <div className="p-3 bg-jamanvar-cream-50 border-b border-jamanvar-navy-900/10 flex items-center justify-between gap-1.5 shrink-0">
              <button
                onClick={handlePrint}
                className="py-1.5 px-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-[11px] shadow-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>PRINT / DOWNLOAD PDF</span>
              </button>

              <button
                onClick={handleCopyLink}
                className="py-1.5 px-3 rounded-xl bg-jamanvar-navy-900 hover:bg-jamanvar-navy-800 text-white font-bold text-[11px] flex items-center gap-1 transition-colors cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? "COPIED ✓" : "COPY LINK"}</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-xl text-jamanvar-navy-900/60 hover:text-jamanvar-navy-950 hover:bg-jamanvar-cream-200 transition-colors cursor-pointer"
                aria-label="Close bill preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* WhatsApp E-Bill Quick Input Bar */}
            <div className="px-3.5 py-2.5 bg-white border-b border-jamanvar-navy-900/8 shrink-0">
              <form
                onSubmit={handleSendWA}
                className="flex items-center gap-2 border border-emerald-500/40 rounded-xl p-1 bg-emerald-50/40"
              >
                <input
                  type="tel"
                  placeholder="Customer Phone (e.g. 98...)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 px-2.5 py-1 text-xs text-jamanvar-navy-950 bg-transparent placeholder:text-jamanvar-navy-900/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="py-1.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] flex items-center gap-1 transition-colors shrink-0 shadow-sm cursor-pointer"
                >
                  <Send className="w-3 h-3" />
                  <span>{waSent ? "SENT ✓" : "SEND WA E-BILL"}</span>
                </button>
              </form>
            </div>

            {/* Thermal Receipt Paper Card (Scrollable) */}
            <div className="p-5 overflow-y-auto font-mono text-[11px] leading-snug text-slate-800 bg-white">
              {/* Brand Logo Header Banner */}
              <div className="text-center mb-3">
                {/* 100% Transparent Kelvion Logo Frame */}
                <div className="relative h-12 w-auto mx-auto mb-2 flex items-center justify-center">
                  <Image
                    src="/images/jamanvar/kelvion-logo-transparent.png"
                    alt="KelvionTech"
                    width={200}
                    height={55}
                    className="h-11 w-auto object-contain"
                  />
                </div>

                <div className="font-extrabold text-sm text-slate-950 tracking-wider uppercase font-sans">
                  KELVIONTECH
                </div>
                <div className="text-[10px] text-slate-600">
                  Isanpur Branch, Ahmedabad
                </div>
                <div className="text-[9.5px] text-slate-500">
                  Near Rameshwar Shopping Center, Vatva Road
                </div>
                <div className="text-[9.5px] text-slate-500">
                  Ph: +91 98250 12345 | GSTIN: 24AAAFP1234F1Z9
                </div>
                <div className="text-[9.5px] text-slate-500">
                  FSSAI Lic No: 10721001000456
                </div>
              </div>

              {/* Dotted Divider */}
              <div className="border-b border-dashed border-slate-400 my-2.5" />

              {/* Order Meta */}
              <div className="text-[10px] space-y-0.5 text-slate-700">
                <div className="flex justify-between">
                  <span>Bill No: <strong>{billNo}</strong></span>
                  <span>Table: <strong>{tableNumber}{tableSection}</strong></span>
                </div>
                <div className="flex justify-between">
                  <span>Date: 14 Aug 2026, 08:30 pm</span>
                  <span>Type: <strong>DINE-IN</strong></span>
                </div>
                <div>Cashier: {cashier} • Captain: {captain}</div>
              </div>

              {/* Dotted Divider */}
              <div className="border-b border-dashed border-slate-400 my-2.5" />

              {/* Item Table Header */}
              <div className="grid grid-cols-12 font-bold text-[10px] text-slate-900 pb-1">
                <div className="col-span-6">ITEM</div>
                <div className="col-span-2 text-center">QTY</div>
                <div className="col-span-2 text-right">RATE</div>
                <div className="col-span-2 text-right">AMT</div>
              </div>

              {/* Dotted Divider */}
              <div className="border-b border-dashed border-slate-300 mb-1.5" />

              {/* Item Rows - Dynamically Calculated */}
              <div className="space-y-1.5 text-[10.5px]">
                {items.map((item, idx) => (
                  <div key={item.id || idx} className="grid grid-cols-12 items-center">
                    <div className="col-span-6 font-medium text-slate-900 truncate pr-1">
                      {item.name}
                    </div>
                    <div className="col-span-2 text-center text-slate-700 font-bold">
                      {item.qty}
                    </div>
                    <div className="col-span-2 text-right text-slate-700">
                      {item.unitPrice.toFixed(2)}
                    </div>
                    <div className="col-span-2 text-right font-bold text-slate-950">
                      {item.total.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Dotted Divider */}
              <div className="border-b border-dashed border-slate-400 my-2.5" />

              {/* Totals Breakdown */}
              <div className="space-y-1 text-[10.5px]">
                <div className="flex justify-between">
                  <span className="text-slate-600">Subtotal:</span>
                  <span className="font-bold text-slate-900">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>CGST (2.5%):</span>
                  <span>₹{(gst / 2).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>SGST (2.5%):</span>
                  <span>₹{(gst / 2).toFixed(2)}</span>
                </div>
              </div>

              {/* Solid Divider */}
              <div className="border-b-2 border-slate-900 my-2" />

              {/* Grand Total */}
              <div className="flex justify-between items-center text-sm font-black text-slate-950">
                <span>GRAND TOTAL:</span>
                <span className="text-base">₹{total.toFixed(2)}</span>
              </div>

              {/* Solid Divider */}
              <div className="border-b-2 border-slate-900 my-2" />

              {/* Payment Mode */}
              <div className="flex justify-between items-center text-[10.5px] font-bold">
                <span className="text-slate-700">Payment Mode:</span>
                <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  {paymentMode}
                </span>
              </div>

              {/* Scannable Kelviontech QR Code without text link */}
              <div className="text-center pt-4 pb-2">
                <a
                  href="https://kelviontech.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block p-2 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-jamanvar-saffron-500 transition-colors cursor-pointer"
                  title="Scan to open kelviontech.in"
                >
                  <div className="relative w-28 h-28 mx-auto">
                    <Image
                      src="/images/jamanvar/kelvion-qr.png"
                      alt="Scan QR"
                      width={112}
                      height={112}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </a>

                <div className="text-[9px] text-slate-500 font-semibold mt-1.5">
                  Scan for Digital E-Bill &amp; Feedback
                </div>
                <div className="text-[11px] font-black text-slate-900 uppercase tracking-wider mt-1.5 font-sans">
                  THANK YOU! VISIT AGAIN!
                </div>
                <div className="text-[8.5px] text-slate-400 mt-0.5">
                  KelvionTech — We build what others think
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
