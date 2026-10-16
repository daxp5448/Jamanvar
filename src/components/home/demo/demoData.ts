import { BarChart3, ChefHat, LayoutGrid, Package, ReceiptText } from "lucide-react";
import { MENU_ITEMS, type MenuItem, type TableInfo } from "@/lib/data";
import type { BillItem } from "./ThermalBillModal";

// Static configuration and helpers for the interactive product demo.

export type TabKey = "pos" | "floor" | "kitchen" | "stock" | "reports";

export const TABS: { key: TabKey; label: string; icon: React.ElementType }[] = [
  { key: "pos", label: "Billing", icon: ReceiptText },
  { key: "floor", label: "Floor plan", icon: LayoutGrid },
  { key: "kitchen", label: "Kitchen", icon: ChefHat },
  { key: "stock", label: "Stock", icon: Package },
  { key: "reports", label: "Reports", icon: BarChart3 },
];

export const CATEGORIES = ["Popular", "Starters", "Mains", "Breads", "Beverages", "Desserts"] as const;
export type Category = (typeof CATEGORIES)[number];

type TableStatus = TableInfo["status"];

export const STATUS_LABEL: Record<TableStatus, string> = {
  occupied: "Seated",
  available: "Free",
  billing: "Billing",
  reserved: "Reserved",
};

export const STATUS_STYLE: Record<TableStatus, string> = {
  occupied: "border-[#F9A872] bg-[#FFF3EA]",
  available: "border-[#9DCBA9] bg-[#EEF7F0]",
  billing: "border-[#9FBBE6] bg-[#EEF3FB]",
  reserved: "border-[#C2B4EE] bg-[#F4F0FC]",
};

export const STATUS_TEXT: Record<TableStatus, string> = {
  occupied: "text-[#B44C14]",
  available: "text-[#256B41]",
  billing: "text-[#2B5FA8]",
  reserved: "text-[#5B43A8]",
};

/** Restaurant GST on food in the sample: 2.5% CGST + 2.5% SGST. */
export const GST_RATE = 0.05;

export function billLine(item: MenuItem, qty = 1): BillItem {
  return { id: item.id, name: item.name, unitPrice: item.price, qty, total: item.price * qty };
}

function menuItem(id: string): MenuItem {
  const item = MENU_ITEMS.find((m) => m.id === id);
  if (!item) throw new Error(`Sample menu item "${id}" is missing`);
  return item;
}

export const INITIAL_BILLS: Record<string, BillItem[]> = {
  t7: [billLine(menuItem("m1"), 2), billLine(menuItem("m7"), 1), billLine(menuItem("m4"), 1), billLine(menuItem("m9"), 2)],
  t1: [billLine(menuItem("m6"), 2), billLine(menuItem("m8"), 4)],
  t3: [billLine(menuItem("m4"), 1), billLine(menuItem("m5"), 1), billLine(menuItem("m7"), 3)],
};

/** Kitchen ticket timer bands: fresh to 10 min, warning to 18, overdue after. */
export function timerTone(minutes: number) {
  if (minutes <= 10) return { bar: "bg-[#25804A]", label: "On track" };
  if (minutes <= 18) return { bar: "bg-[#B0640C]", label: "Watch the clock" };
  return { bar: "bg-[#B42318]", label: "Overdue" };
}

/** Card surface used inside the app UI. */
export const PANEL = "rounded-xl border border-line bg-white shadow-subtle";
