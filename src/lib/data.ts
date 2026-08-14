export interface MenuItem {
  id: string;
  name: string;
  nameHindi?: string;
  category: "Starters" | "Mains" | "Breads" | "Beverages" | "Desserts";
  price: number;
  isVeg: boolean;
  popular?: boolean;
  code: string;
}

export const MENU_ITEMS: MenuItem[] = [
  { id: "m1", name: "Paneer Tikka Angara", category: "Starters", price: 340, isVeg: true, popular: true, code: "PT01" },
  { id: "m2", name: "Hara Bhara Kebab", category: "Starters", price: 280, isVeg: true, code: "HB02" },
  { id: "m3", name: "Crispy Corn Pepper Salt", category: "Starters", price: 260, isVeg: true, code: "CC03" },
  { id: "m4", name: "Dal Makhani Handi", category: "Mains", price: 380, isVeg: true, popular: true, code: "DM01" },
  { id: "m5", name: "Paneer Butter Masala", category: "Mains", price: 420, isVeg: true, popular: true, code: "PB02" },
  { id: "m6", name: "Veg Hyderabadi Dum Biryani", category: "Mains", price: 390, isVeg: true, popular: true, code: "VB03" },
  { id: "m7", name: "Butter Garlic Naan", category: "Breads", price: 80, isVeg: true, popular: true, code: "BN01" },
  { id: "m8", name: "Tandoori Roti (Butter)", category: "Breads", price: 40, isVeg: true, code: "TR02" },
  { id: "m9", name: "Masala Chaas (Smoked)", category: "Beverages", price: 90, isVeg: true, popular: true, code: "MC01" },
  { id: "m10", name: "Fresh Mango Lassi", category: "Beverages", price: 140, isVeg: true, code: "ML02" },
  { id: "m11", name: "Gulab Jamun with Rabri", category: "Desserts", price: 180, isVeg: true, popular: true, code: "GJ01" },
  { id: "m12", name: "Saffron Kulfi Falooda", category: "Desserts", price: 210, isVeg: true, code: "KF02" },
];

export interface TableInfo {
  id: string;
  number: string;
  section: "Main Dining" | "Terrace" | "Family Hall" | "Bar Area";
  capacity: number;
  status: "occupied" | "available" | "billing" | "reserved";
  currentBill?: number;
  activeOrderCount?: number;
  timeOccupied?: string;
  server?: string;
}

export const RESTAURANT_TABLES: TableInfo[] = [
  { id: "t1", number: "T-01", section: "Main Dining", capacity: 4, status: "occupied", currentBill: 1840, activeOrderCount: 4, timeOccupied: "42 min", server: "Rajesh K." },
  { id: "t2", number: "T-02", section: "Main Dining", capacity: 2, status: "available" },
  { id: "t3", number: "T-03", section: "Main Dining", capacity: 6, status: "occupied", currentBill: 3420, activeOrderCount: 8, timeOccupied: "55 min", server: "Vikram S." },
  { id: "t4", number: "T-04", section: "Main Dining", capacity: 4, status: "billing", currentBill: 2160, activeOrderCount: 5, timeOccupied: "1h 10m", server: "Rajesh K." },
  { id: "t5", number: "T-05", section: "Terrace", capacity: 2, status: "occupied", currentBill: 1240, activeOrderCount: 3, timeOccupied: "28 min", server: "Amit P." },
  { id: "t6", number: "T-06", section: "Terrace", capacity: 4, status: "reserved", timeOccupied: "8:30 PM" },
  { id: "t7", number: "T-07", section: "Terrace", capacity: 6, status: "occupied", currentBill: 1302, activeOrderCount: 5, timeOccupied: "18 min", server: "Amit P." },
  { id: "t8", number: "T-08", section: "Family Hall", capacity: 8, status: "occupied", currentBill: 5890, activeOrderCount: 12, timeOccupied: "1h 25m", server: "Suresh M." },
  { id: "t9", number: "T-09", section: "Family Hall", capacity: 8, status: "available" },
  { id: "t10", number: "T-10", section: "Family Hall", capacity: 10, status: "occupied", currentBill: 7450, activeOrderCount: 16, timeOccupied: "48 min", server: "Suresh M." },
  { id: "t11", number: "T-11", section: "Bar Area", capacity: 2, status: "available" },
  { id: "t12", number: "T-12", section: "Bar Area", capacity: 4, status: "occupied", currentBill: 2980, activeOrderCount: 6, timeOccupied: "35 min", server: "Kavita N." },
];

export interface KitchenTicket {
  id: string;
  orderNumber: string;
  tableNumber: string;
  server: string;
  orderTime: string;
  elapsedMinutes: number;
  status: "preparing" | "ready" | "dispatched";
  items: { name: string; qty: number; notes?: string; status: "cooking" | "done" }[];
}

export const KITCHEN_TICKETS: KitchenTicket[] = [
  {
    id: "k1",
    orderNumber: "KOT-142",
    tableNumber: "T-07",
    server: "Amit P.",
    orderTime: "20:14",
    elapsedMinutes: 6,
    status: "preparing",
    items: [
      { name: "Paneer Tikka Angara", qty: 2, notes: "Spicy, extra mint dip", status: "cooking" },
      { name: "Butter Naan", qty: 1, notes: "Crispy", status: "cooking" },
      { name: "Masala Chaas", qty: 2, notes: "Chilled", status: "done" },
    ],
  },
  {
    id: "k2",
    orderNumber: "KOT-141",
    tableNumber: "T-03",
    server: "Vikram S.",
    orderTime: "20:08",
    elapsedMinutes: 12,
    status: "preparing",
    items: [
      { name: "Dal Makhani Handi", qty: 1, status: "cooking" },
      { name: "Paneer Butter Masala", qty: 1, notes: "Mild gravy", status: "cooking" },
      { name: "Butter Garlic Naan", qty: 3, status: "cooking" },
      { name: "Jeera Rice", qty: 1, status: "done" },
    ],
  },
  {
    id: "k3",
    orderNumber: "KOT-140",
    tableNumber: "T-01",
    server: "Rajesh K.",
    orderTime: "19:58",
    elapsedMinutes: 22,
    status: "ready",
    items: [
      { name: "Veg Hyderabadi Dum Biryani", qty: 2, notes: "With Mirchi Salan", status: "done" },
      { name: "Burani Raita", qty: 2, status: "done" },
    ],
  },
];

export interface InventoryItem {
  id: string;
  name: string;
  category: "Dairy" | "Spices & Pantry" | "Produce" | "Beverages";
  currentStock: number;
  unit: string;
  threshold: number;
  status: "optimal" | "low" | "critical";
  lastRestocked: string;
}

export const INVENTORY_ITEMS: InventoryItem[] = [
  { id: "i1", name: "Fresh Malai Paneer", category: "Dairy", currentStock: 14.5, unit: "kg", threshold: 8.0, status: "optimal", lastRestocked: "Today 7:00 AM" },
  { id: "i2", name: "Amul Butter Unsalted", category: "Dairy", currentStock: 4.2, unit: "kg", threshold: 5.0, status: "low", lastRestocked: "Yesterday" },
  { id: "i3", name: "Basmati Biryani Rice (Daawat)", category: "Spices & Pantry", currentStock: 82.0, unit: "kg", threshold: 30.0, status: "optimal", lastRestocked: "3 days ago" },
  { id: "i4", name: "Kashmiri Red Chilli (Whole)", category: "Spices & Pantry", currentStock: 1.8, unit: "kg", threshold: 2.0, status: "low", lastRestocked: "5 days ago" },
  { id: "i5", name: "Premium Saffron (Kesar)", category: "Spices & Pantry", currentStock: 45, unit: "grams", threshold: 20, status: "optimal", lastRestocked: "10 days ago" },
  { id: "i6", name: "Fresh Mint & Coriander", category: "Produce", currentStock: 0.8, unit: "kg", threshold: 2.5, status: "critical", lastRestocked: "Yesterday" },
  { id: "i7", name: "Cooking Cream (Rich)", category: "Dairy", currentStock: 12.0, unit: "litres", threshold: 6.0, status: "optimal", lastRestocked: "Today 8:30 AM" },
];

export interface PricingPlan {
  id: string;
  name: string;
  tier: "STARTER" | "PRO" | "CUSTOM";
  description: string;
  monthlyPrice: number | string;
  annualPrice: number | string;
  highlighted?: boolean;
  badge?: string;
  features: string[];
  cta: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    tier: "STARTER",
    description: "Ideal for small standalone cafés, food stalls, and single-counter outlets.",
    monthlyPrice: "₹1,499",
    annualPrice: "₹1,199",
    features: [
      "1 POS Terminal License",
      "GST Compliant Quick Invoicing",
      "Digital Menu & Table Orders",
      "Thermal KOT Printing (USB/LAN)",
      "Daily Sales & Payment Summary",
      "Email & WhatsApp Support",
    ],
    cta: "Start with Starter",
  },
  {
    id: "pro",
    name: "Pro",
    tier: "PRO",
    description: "Built for busy dine-in restaurants, bars, and multi-station kitchens requiring full operational control.",
    monthlyPrice: "₹2,999",
    annualPrice: "₹2,399",
    highlighted: true,
    badge: "MOST POPULAR",
    features: [
      "Unlimited POS & Captain Handhelds",
      "Live Kitchen Display System (KDS)",
      "Interactive Table & Floor Layout",
      "Real-Time Raw Material Inventory",
      "Customer CRM & Visit History",
      "Live Owner Mobile Analytics App",
      "Recipe Costing & Wastage Tracking",
      "Priority 24/7 Dedicated Support",
    ],
    cta: "Get Pro Experience",
  },
  {
    id: "custom",
    name: "Enterprise",
    tier: "CUSTOM",
    description: "Tailored for multi-outlet chains, franchises, and large luxury banquet operations.",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    features: [
      "Multi-Location Central Control",
      "Centralized Recipe & Menu Sync",
      "Warehouse & Commissary Transfers",
      "Custom ERP & Tally Integration",
      "Dedicated Account Manager",
      "Custom Hardware Provisioning",
      "SLA Guarantee with 99.9% Uptime",
    ],
    cta: "Speak with Enterprise Team",
  },
];
