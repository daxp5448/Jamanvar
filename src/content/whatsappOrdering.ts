// Content for WhatsApp Ordering (/products/whatsapp-ordering and the home page).
//
// Verified against the WhatsApp ordering platform and its Jamanvar connector
// (October 2026): product cards with Add to cart (or a carousel once Meta
// approves the template), quantity and cart editing, a delivery address typed
// or shared as a WhatsApp location (skippable for pickup), an order summary,
// an online payment link, and status messages. With Jamanvar connected, menu,
// prices and sold-out status come from Jamanvar, and paid orders appear in
// POS Admin's order desk and reach the KDS once accepted.
//
// Not offered, so never claimed: delivery riders, live delivery tracking,
// cash on delivery for this flow, or results figures. Bot messages below use
// the real template copy; the restaurant and dishes are sample data.

import type { FaqItem } from "./products";

export type ChatMessage =
  | { kind: "customer"; text: string; time?: string }
  | { kind: "location"; label: string; time?: string }
  | { kind: "business"; text: string; buttons?: string[]; time?: string }
  | { kind: "product"; name: string; description: string; price: string; image: string; button: string }
  | { kind: "day"; text: string };

const PANEER = "/images/jamanvar/trail/dish.jpg";

export const CHAT_SCENES = {
  /** Welcome to cart: the browsing half of the journey. */
  browse: [
    { kind: "day", text: "Today" },
    { kind: "customer", text: "Hi", time: "7:42" },
    {
      kind: "business",
      text: "🍽 *Welcome to Your Restaurant!*\n\nOrder your favourites in seconds.",
      buttons: ["🛒 Order Now", "📍 Our Location"],
      time: "7:42",
    },
    {
      kind: "product",
      name: "Paneer Tikka Angara",
      description: "Smoky tandoor paneer with mint dip",
      price: "₹340",
      image: PANEER,
      button: "Add to cart",
    },
    {
      kind: "business",
      text: "🛒 *Your Cart*\n\n2 × Paneer Tikka Angara\n1 × Butter Garlic Naan\n\n💰 *Total: ₹760*",
      buttons: ["✅ Checkout", "➕ Add More Items"],
      time: "7:44",
    },
  ],
  /** The whole journey in one phone: menu card, cart, address, review. */
  journey: [
    {
      kind: "product",
      name: "Paneer Tikka Angara",
      description: "Smoky tandoor paneer with mint dip",
      price: "₹340",
      image: PANEER,
      button: "Add to cart",
    },
    {
      kind: "business",
      text: "🛒 *Your Cart* · 3 items\n💰 *Total: ₹760*",
      buttons: ["✅ Checkout"],
      time: "7:44",
    },
    {
      kind: "business",
      text: "📍 Please share your delivery address (or tap Skip for dine-in/pickup):",
      time: "7:45",
    },
    { kind: "location", label: "Location shared", time: "7:45" },
    {
      kind: "business",
      text: "🧾 *Review Your Order*\n💰 *Total:* ₹760\n📍 *Delivery:* Shared location",
      buttons: ["✅ Place Order"],
      time: "7:45",
    },
  ],
  /** Checkout for home delivery: location shared, summary, order placed. */
  delivery: [
    {
      kind: "business",
      text: "📍 Please share your delivery address (or tap Skip for dine-in/pickup):",
      time: "7:45",
    },
    { kind: "location", label: "Location shared", time: "7:45" },
    {
      kind: "business",
      text: "🧾 *Review Your Order*\n\n2 × Paneer Tikka Angara\n1 × Butter Garlic Naan\n\n💰 *Total:* ₹760\n📍 *Delivery:* Shared location",
      buttons: ["✅ Place Order"],
      time: "7:45",
    },
    {
      kind: "business",
      text: "✅ *Order placed!*\n\nReference: ORD-1042\n💰 *Total:* INR 760\npay.example/•••\n\nWe'll start preparing your order right away.",
      time: "7:46",
    },
  ],
  /** Checkout for pickup: the address step skipped. */
  pickup: [
    {
      kind: "business",
      text: "📍 Please share your delivery address (or tap Skip for dine-in/pickup):",
      buttons: ["Skip"],
      time: "12:10",
    },
    { kind: "customer", text: "Skip", time: "12:10" },
    {
      kind: "business",
      text: "✅ *Order placed!*\n\nReference: ORD-1043\n💰 *Total:* INR 420\npay.example/•••\n\nWe'll start preparing your order right away.",
      time: "12:11",
    },
    {
      kind: "business",
      text: "🎉 Order *ORD-1043* is on its way / ready for pickup. Thanks for shopping with Your Restaurant!",
      time: "12:24",
    },
  ],
} satisfies Record<string, ChatMessage[]>;

export const BENEFITS = [
  { title: "A channel customers already use", body: "No app to download and no website to find. They message you on WhatsApp, as they already do." },
  { title: "Takeaway or delivery in one chat", body: "Customers share an address or location for delivery, or skip it and collect the order." },
  { title: "Your real menu, checked at checkout", body: "Prices and availability are re-checked when the customer checks out, so a sold-out dish can't slip through." },
  { title: "Paid before the kitchen starts", body: "An online payment link goes out in the chat. The order reaches your kitchen once payment is confirmed." },
  { title: "Customers kept in the loop", body: "Status messages tell them when the order is accepted, being prepared and ready." },
];

export const CUSTOMER_STEPS = [
  { title: "Message your number", body: "The customer says hi to your restaurant's WhatsApp number and taps Order Now." },
  { title: "Browse and add", body: "Dishes appear as cards with photo and price. One tap adds to cart, and quantities can be changed." },
  { title: "Pickup or delivery", body: "They share a delivery address or their WhatsApp location, or tap Skip to collect the order." },
  { title: "Review, place and pay", body: "An order summary shows items and total. They place the order and pay with the secure link." },
];

export const TEAM_STEPS = [
  { title: "Connect once", body: "Generate a key in Jamanvar POS Admin and connect it to your WhatsApp ordering account. Menu, prices and sold-out status then come from Jamanvar." },
  { title: "Paid orders arrive", body: "Once payment is confirmed, the order appears in POS Admin's order desk, marked as a WhatsApp order." },
  { title: "Accept and cook", body: "Accept it, or switch on auto-accept, and the ticket goes to the kitchen display like any other order." },
  { title: "Updates go out on their own", body: "As the order moves from accepted to preparing to ready, the customer gets a WhatsApp message at each step." },
];

export const OWNER_CONTROLS = [
  { title: "Pause online orders", body: "Busy night? Pause WhatsApp orders from POS Admin, and new attempts are politely declined." },
  { title: "Auto-accept or review", body: "Accept every paid order automatically, or have staff review each one first." },
  { title: "Step into any chat", body: "If the bot can't help, customers can ask for a person, and staff reply from the live chat inbox." },
  { title: "One menu to maintain", body: "Change a price or mark a dish sold out in Jamanvar, and the WhatsApp menu follows." },
  { title: "More than one branch", body: "Restaurants with several branches can let customers pick a branch before the menu." },
  { title: "Editable automatic replies", body: "Order status, cart and stock messages come pre-written, and you can change the wording." },
];

export const REQUIREMENTS = [
  "A WhatsApp number registered on Meta's WhatsApp Business Platform (Cloud API)",
  "Meta business verification before going live with real customers",
  "WhatsApp Ordering included in your Jamanvar plan",
  "Online payments set up, so customers can pay with the link in the chat",
];

export const FAQS: FaqItem[] = [
  {
    question: "How does Jamanvar WhatsApp Ordering work?",
    answer:
      "Customers message your restaurant's WhatsApp number and order through buttons, menu cards and lists: they add dishes to a cart, choose delivery or pickup, review the order summary and pay with an online link. Once payment is confirmed, the order reaches your Jamanvar order desk and kitchen display.",
  },
  {
    question: "Can customers order for takeaway?",
    answer: "Yes. At the address step they tap Skip, and the order is placed for pickup.",
  },
  {
    question: "Can customers request home delivery?",
    answer:
      "Yes. They type a delivery address or share their WhatsApp location, and it appears on their order summary before they place the order. Delivery itself is handled by your own team: Jamanvar doesn't provide delivery riders or live tracking.",
  },
  {
    question: "Does the customer need to install another app?",
    answer: "No. The whole order happens inside WhatsApp, which they already have.",
  },
  {
    question: "How does the restaurant receive incoming orders?",
    answer:
      "Paid orders appear in Jamanvar POS Admin's order desk, marked as WhatsApp orders. Staff accept them, or you switch on auto-accept, and the ticket goes to the kitchen display. You can also pause online orders at any time.",
  },
  {
    question: "Does it work with Jamanvar POS?",
    answer:
      "Yes, once your WhatsApp ordering account is connected to your Jamanvar restaurant with a key generated in POS Admin. The WhatsApp menu then uses your Jamanvar menu, prices and sold-out status, and order status updates flow back to the customer.",
  },
  {
    question: "Does the restaurant need a WhatsApp Business setup?",
    answer:
      "Yes. You need a number on Meta's WhatsApp Business Platform (not just the WhatsApp Business app), and Meta business verification before going live. Some features, such as the swipe-able menu carousel, also need Meta to approve a message template first; until then the menu shows as individual dish cards. We'll go through the setup with you in the demo.",
  },
  {
    question: "How can a restaurant get started?",
    answer:
      "Book a demo. We'll walk through your menu, your WhatsApp number and your takeaway and delivery setup, and explain what's needed from Meta before you go live.",
  },
];
