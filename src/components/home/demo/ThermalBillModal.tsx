"use client";

import { useEffect, useRef } from "react";
import { Printer, X } from "lucide-react";

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

// Preview of the GST receipt Jamanvar prints on 58mm/80mm thermal paper,
// built from the sample order in the interactive demo. The header shows where
// the restaurant's own details print; no real business details are invented.
export function ThermalBillModal({ isOpen, onClose, billData }: ThermalBillModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && dialogRef.current) {
        const f = dialogRef.current.querySelectorAll<HTMLElement>("button");
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen || !billData) return null;

  const { items, subtotal, gst, total } = billData;
  const half = gst / 2;
  const date = billData.dateStr ?? new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto p-4">
      <div className="fixed inset-0 animate-fade-in bg-night-deep/75" onClick={onClose} aria-hidden="true" />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="receipt-title"
        className="relative my-auto flex max-h-[92vh] w-full max-w-sm animate-fade-down flex-col overflow-hidden rounded-panel bg-ivory shadow-lift"
      >
        <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
          <p id="receipt-title" className="text-sm font-bold text-ink">
            Sample GST receipt
          </p>
          <div className="flex items-center gap-1">
            <button type="button" onClick={() => window.print()} className="btn btn-secondary btn-sm h-9 px-3">
              <Printer className="h-4 w-4" aria-hidden="true" /> Print
            </button>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-btn text-ink hover:bg-ivory-deep"
            >
              <X className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Close receipt</span>
            </button>
          </div>
        </div>

        <div className="overflow-y-auto bg-ivory-deep p-5">
          <div className="print-receipt mx-auto bg-white px-5 pb-4 pt-6 font-mono text-[0.75rem] leading-snug text-[#1E1916] shadow-card">
            <div className="text-center">
              <p className="font-sans text-sm font-extrabold uppercase tracking-wide">Your restaurant name</p>
              <p className="mt-1 text-[0.6875rem] text-[#564C44]">Your address, phone and GSTIN print here</p>
            </div>

            <Rule />
            <div className="space-y-0.5 text-[0.6875rem]">
              <div className="flex justify-between gap-2">
                <span>Bill: {billData.billNo ?? "SAMPLE"}</span>
                <span>
                  {billData.tableNumber}
                  {billData.tableSection ? ` · ${billData.tableSection}` : ""}
                </span>
              </div>
              <div className="flex justify-between gap-2">
                <span>{date}</span>
                <span>Dine-in</span>
              </div>
              <div>
                Cashier: {billData.cashier ?? "Counter 1"} · Captain: {billData.captain ?? "-"}
              </div>
            </div>
            <Rule />

            <div className="grid grid-cols-[1fr_2rem_3.5rem_3.75rem] gap-x-1 text-[0.6875rem] font-bold">
              <span>Item</span>
              <span className="text-center">Qty</span>
              <span className="text-right">Rate</span>
              <span className="text-right">Amt</span>
            </div>
            <div className="mt-1.5 space-y-1">
              {items.map((item) => (
                <div key={item.id} className="grid grid-cols-[1fr_2rem_3.5rem_3.75rem] gap-x-1">
                  <span className="break-words">{item.name}</span>
                  <span className="text-center">{item.qty}</span>
                  <span className="text-right">{item.unitPrice.toFixed(2)}</span>
                  <span className="text-right font-bold">{item.total.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <Rule />

            <div className="space-y-0.5">
              <Row label="Subtotal" value={subtotal} />
              <Row label="CGST @ 2.5%" value={half} />
              <Row label="SGST @ 2.5%" value={half} />
            </div>
            <div className="my-2 border-t-2 border-[#1E1916]" />
            <div className="flex justify-between font-sans text-sm font-extrabold">
              <span>TOTAL</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <div className="my-2 border-t-2 border-[#1E1916]" />
            <div className="flex justify-between text-[0.6875rem]">
              <span>Paid by</span>
              <span className="font-bold">{billData.paymentMode ?? "Cash"}</span>
            </div>
            <p className="mt-4 text-center text-[0.6875rem] text-[#564C44]">Thank you. Visit again.</p>
          </div>
          <p className="mt-4 text-center text-xs leading-5 text-ink-muted">
            Sample data. GST rates depend on your own tax configuration; confirm them with your accountant.
          </p>
        </div>
      </div>
    </div>
  );
}

function Rule() {
  return <div className="my-2.5 border-b border-dashed border-[#8A7D72]" />;
}

function Row({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex justify-between">
      <span>{label}</span>
      <span>₹{value.toFixed(2)}</span>
    </div>
  );
}
