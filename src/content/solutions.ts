// Content for every dedicated Jamanvar solution page (/solutions/[id]).
//
// A solution is organised around a problem a restaurant owner actually has,
// not around a product name. Each one links to the product pages that solve
// it. As with products.ts, every capability described here already exists in
// the product. The "walkthrough" steps are illustrative scenes built from
// those capabilities, and they don't quote performance figures.

import type { FaqItem, MockupVariant } from "./products";
import type { DetailPhoto } from "./productDetails";

export interface SolutionOutcome {
  term: string;
  description: string;
}

export interface SolutionStep {
  title: string;
  description: string;
}

export interface SolutionShowcase {
  label: string;
  caption: string;
  mockup: MockupVariant;
}

export interface Solution {
  id: string;
  index: string;
  eyebrow: string;
  // Short copy for the navbar dropdown
  navTitle: string;
  navDescription: string;
  // Hero
  name: string;
  tagline: string;
  heroDescription: string;
  // Body
  problemTitle: string;
  problemParagraphs: string[];
  approachTitle: string;
  approachParagraphs: string[];
  approachPhoto: DetailPhoto;
  outcomes: SolutionOutcome[];
  walkthroughLabel: string;
  walkthrough: SolutionStep[];
  showcase: SolutionShowcase[];
  bestFor: string;
  connectedModules: { name: string; href: string }[];
  faqs: FaqItem[];
  metaTitle: string;
  metaDescription: string;
}

export const SOLUTIONS: Solution[] = [
  {
    id: "operations",
    index: "01",
    eyebrow: "RESTAURANT OPERATIONS",
    navTitle: "Restaurant operations",
    navDescription: "Billing, tables, kitchen and stock as one workflow.",
    name: "One connected workflow, not five apps.",
    tagline: "Bring billing, tables, kitchen and inventory into a single system.",
    heroDescription:
      "Billing in one place, tables on a whiteboard, tickets on paper, stock in a notebook. Jamanvar ties them together, so an order entered once is already everywhere it needs to be.",
    problemTitle: "Most restaurants run on habits, not systems",
    problemParagraphs: [
      "Look closely at how a busy restaurant actually works and you'll find four or five separate routines held together by people remembering things. The cashier has one screen. The captain has a paper pad. The kitchen has a spike of slips. The host has a mental map of the floor, and the owner has a notebook of what was bought last week.",
      "Every gap between those routines is a place where something slips. An order gets punched twice. A table shows as free when it isn't. The kitchen finds out a dish is unavailable after the guest has already ordered it. And the stock count says one thing while the shelf says another, and nobody knows which to trust.",
    ],
    approachTitle: "Enter it once, and it goes everywhere it needs to",
    approachParagraphs: [
      "In Jamanvar, an order is one record that everything else reads from. When it's punched, the table on the floor plan updates, the kitchen ticket fires to the right station, the items land on the live bill, and the ingredients come out of stock according to each dish's recipe. Nobody re-types anything, so there's nothing to get out of step.",
      "It doesn't change how your team works so much as remove the moments where they had to pass information by hand. The captain still takes the order, the chef still cooks it, and the cashier still settles the bill. They just stop being each other's messengers.",
    ],
    approachPhoto: { src: "/images/jamanvar/trail/table.jpg", alt: "Guests dining at a busy restaurant table, the front of house that Jamanvar keeps in step with the kitchen" },
    outcomes: [
      { term: "No double entry", description: "An order is punched once. The bill, the ticket and the stock movement all come from that single entry." },
      { term: "A floor you can trust", description: "Table status follows real orders and real bills, so the floor plan is never a day behind." },
      { term: "A kitchen that's already informed", description: "Tickets reach the right station the instant they're fired, whether the order came from a captain or a guest." },
      { term: "Stock that matches the shelf", description: "Ingredients are deducted from recipes as dishes sell, so you're counting against a number that means something." },
    ],
    walkthroughLabel: "ONE ORDER, START TO FINISH",
    walkthrough: [
      { title: "The order is taken", description: "A captain punches a table's order on a handheld, with seat numbers and a note for \"no onion, no garlic\"." },
      { title: "The kitchen already has it", description: "The order splits across stations and appears on the kitchen screen or prints as a KOT, note included." },
      { title: "The floor updates itself", description: "The table changes colour on the floor plan and starts counting seated time. Nobody touches the screen." },
      { title: "The bill builds as they eat", description: "Everything ordered sits on the table's live tab in POS. When the guests ask for the bill, it's already there." },
      { title: "Stock moves on its own", description: "Each dish's ingredients are deducted from your digital pantry, and anything running low gets flagged." },
    ],
    showcase: [
      { label: "THE COUNTER", caption: "One POS screen shows every table's running tab, so no bill needs to be rebuilt from paper.", mockup: "pos" },
      { label: "THE FLOOR", caption: "A live plan of every section, driven by real orders rather than someone remembering to update it.", mockup: "tables" },
    ],
    bestFor: "Restaurants that have outgrown a single billing machine and a paper pad, but don't want to become a software company to fix it.",
    connectedModules: [
      { name: "Jamanvar POS", href: "/products/pos" },
      { name: "Table & Floor Management", href: "/products/tables" },
      { name: "Jamanvar KDS", href: "/products/kds" },
      { name: "Recipe-Level Inventory", href: "/products/inventory" },
    ],
    faqs: [
      {
        question: "Do we have to switch everything at once?",
        answer:
          "That's up to you. Many restaurants begin with POS and add the kitchen display, floor management and inventory as they get comfortable. Because the modules share one order record, adding each one is an extension rather than a restart.",
      },
      {
        question: "Will my staff need a lot of training?",
        answer:
          "Each person still does the job they do today, taking orders, cooking or billing. What changes is the tool in front of them. We'll walk through the setup with your actual menu and tables in the demo.",
      },
      {
        question: "What if our restaurant is small?",
        answer:
          "The connected workflow matters at every size. A one-counter café that stops re-entering orders and guessing stock gets the same benefit, and you only switch on the modules you need.",
      },
    ],
    metaTitle: "Restaurant Operations Software | Jamanvar Solutions",
    metaDescription:
      "Run billing, tables, kitchen tickets and inventory as one connected workflow. Enter an order once and Jamanvar updates the floor, kitchen and stock for you.",
  },
  {
    id: "guest-experience",
    index: "02",
    eyebrow: "ORDERING & GUEST EXPERIENCE",
    navTitle: "Ordering & guest experience",
    navDescription: "Captain handhelds and QR ordering on one live floor.",
    name: "Faster service, without rushing the guest.",
    tagline: "Captain handhelds, QR ordering and a live table floor working together.",
    heroDescription:
      "Guests shouldn't have to wave to be served, and they shouldn't feel processed either. Captains and QR ordering share one queue, so service is quicker and still feels personal.",
    problemTitle: "The wait between \"ready to order\" and \"order taken\"",
    problemParagraphs: [
      "Every guest has a moment when they close the menu and look up. What happens next decides the tone of the meal. If a captain is at the table within seconds, the evening starts warmly. If the guest is left waving and glancing around, it starts with a small irritation that no amount of good food quite removes.",
      "On a busy night, that gap is hard to close by adding staff. The captain has six other tables. Paper slips have to be carried to a counter. And a rushed order, taken in a noisy dining hall, is exactly the kind that comes out wrong.",
    ],
    approachTitle: "Two ways to order, one kitchen queue",
    approachParagraphs: [
      "Captains carry Android handhelds and take orders right at the table, firing the KOT to the kitchen with a single tap. Guests who'd rather order on their own can scan the QR code on the table and do it from their phone. Both go into exactly the same live queue, so the kitchen isn't watching two systems and the bill isn't split across two records.",
      "The floor plan follows along in real time, and repeat guests are recognised through loyalty tracking, so the team can greet a regular like a regular. The technology takes on the repetitive part of service, which leaves your people free to do the part guests remember.",
    ],
    approachPhoto: { src: "/images/jamanvar/trail/customer.jpg", alt: "A group of guests laughing over dinner at a lively restaurant" },
    outcomes: [
      { term: "Orders in seconds", description: "A captain can punch an order in under 15 seconds and send it to the kitchen with one tap." },
      { term: "Guests in control", description: "Guests who want to order without waiting can, and those who want a captain's advice still get it." },
      { term: "No lost slips", description: "There's no paper between the table and the kitchen to misplace or misread." },
      { term: "Regulars recognised", description: "Loyalty and repeat-visit tracking helps your team notice who has been here before." },
    ],
    walkthroughLabel: "A TABLE OF FOUR, ON A BUSY EVENING",
    walkthrough: [
      { title: "They sit down", description: "The table turns from available to occupied on the floor plan, and seated time starts." },
      { title: "Two ways to order", description: "One guest scans the QR code and orders drinks from their phone. The captain arrives, takes the food order on a handheld and adds it to the same table." },
      { title: "The kitchen gets one clean queue", description: "Drinks go to the bar, the tandoor items to the tandoor. Neither the captain nor the guest had to walk anything anywhere." },
      { title: "The captain stays with the table", description: "Because nobody's walking slips to a terminal, they can top up water, answer questions and check the table." },
      { title: "The bill is ready when they are", description: "Everything from both routes is on one live tab, and it settles in whichever way the guests prefer." },
    ],
    showcase: [
      { label: "CAPTAIN HANDHELD", caption: "Table-side ordering on a durable Android handheld, with a KOT that fires in one tap.", mockup: "captainOrdering" },
      { label: "QR ORDERING", caption: "Guests scan the table's QR code and order at their own pace, straight into the same queue.", mockup: "qrOrdering" },
    ],
    bestFor: "Full-service and fine-dining rooms that pride themselves on attentive service, and busy casual restaurants where a slow first order sets the tone.",
    connectedModules: [
      { name: "Captain Ordering", href: "/products/captain" },
      { name: "QR Ordering", href: "/products/qr-ordering" },
      { name: "Table & Floor Management", href: "/products/tables" },
    ],
    faqs: [
      {
        question: "Does QR ordering replace our captains?",
        answer:
          "It works alongside them. Guests who want to order themselves can, and captains keep doing the hospitality that guests value. Both use the same order flow.",
      },
      {
        question: "What if guests aren't comfortable ordering on their phones?",
        answer:
          "Then they don't have to. Captain ordering is always available at the table, and both routes lead to the same bill.",
      },
      {
        question: "How does the kitchen tell the difference between the two?",
        answer:
          "It doesn't need to. Orders from captains and from guest phones enter the same live queue and reach the right station the same way.",
      },
    ],
    metaTitle: "Restaurant Ordering & Guest Experience | Jamanvar Solutions",
    metaDescription:
      "Faster restaurant service with captain handhelds and QR table ordering feeding one live kitchen queue and floor plan, so guests are served quickly and still feel looked after.",
  },
  {
    id: "kitchen-ops",
    index: "03",
    eyebrow: "KITCHEN OPERATIONS",
    navTitle: "Kitchen operations",
    navDescription: "Station routing, live tickets and prep timers.",
    name: "A kitchen that never loses a ticket.",
    tagline: "Route every order to the right station, the instant it's punched.",
    heroDescription:
      "Orders split by station and appear where the food is made, with timers that warn a chef before a ticket goes late. No shouting, no lost slips.",
    problemTitle: "The kitchen is where service quietly falls apart",
    problemParagraphs: [
      "Front-of-house problems are visible. Kitchen problems usually aren't, until a guest asks where their food is. A paper KOT is easy to slide out of order. A shouted table number gets lost under the exhaust fan. A chef juggling twelve open tickets has no easy way to know which one has been waiting longest.",
      "And in a kitchen with several stations, the same order has to reach the tandoor, the curry section and the bar, each needing only its own part. Somebody ends up splitting one order into three verbal instructions, and any of the three can go wrong.",
    ],
    approachTitle: "Every station sees its own work, in order",
    approachParagraphs: [
      "Jamanvar splits each order by station the moment it's punched: Tandoor, Curry and Mains, Bar, Desserts. Each station sees only the items it has to make, in the order they were fired, with the table number and any special note attached. That could be on kitchen screens or on thermal-printed KOTs, whichever your kitchen is ready for.",
      "Every ticket carries a colour-coded timer: comfortable through the first ten minutes, a warning up to eighteen, overdue after that. The person running the pass can see at a glance what needs attention. It's not surveillance. It's the same instinct a good head chef already has, put on a screen everyone can read.",
    ],
    approachPhoto: { src: "/images/jamanvar/trail/kitchen.jpg", alt: "A chef plating a curry at the pass beneath a kitchen display showing live tickets" },
    outcomes: [
      { term: "Instant routing", description: "Orders reach the right station as soon as they're punched, with no walk to the kitchen." },
      { term: "Late tickets flagged early", description: "Colour-coded timers turn amber and red before a table starts asking." },
      { term: "Notes that survive the rush", description: "\"Extra spicy\" and \"no onion or garlic (Jain)\" stay attached to the order and appear on the ticket." },
      { term: "Screens or printers", description: "Use kitchen screens, thermal-printed KOTs, or a mix, depending on what each station is ready for." },
    ],
    walkthroughLabel: "ONE TICKET, THROUGH THE PASS",
    walkthrough: [
      { title: "A big order arrives", description: "Table 3 orders dal makhani, paneer butter masala, three naans and a jeera rice. The system splits it across stations before anyone has to think about it." },
      { title: "Each station gets its part", description: "The tandoor sees the naans, the curry section sees the gravies, and each ticket carries the table number and the server's name." },
      { title: "Chefs mark progress", description: "As items finish, they're tapped from cooking to done. The pass can see which parts of the table are ready and which are still on the fire." },
      { title: "The timer does the watching", description: "As the ticket ages, its colour shifts. The expeditor sees the amber one and knows exactly where to step in." },
      { title: "It goes out together", description: "When everything's done, the order is dispatched as a whole and the floor knows it's on its way." },
    ],
    showcase: [
      { label: "LIVE ORDERS", caption: "Tickets appear instantly, with the table, the items and every note in one place.", mockup: "kds" },
      { label: "QUEUE & STATUS", caption: "What's cooking, what's overdue and what's ready, across every station at once.", mockup: "kdsQueue" },
    ],
    bestFor: "Multi-station kitchens, high-volume restaurants and anywhere the KOT still travels on paper.",
    connectedModules: [
      { name: "Jamanvar KDS", href: "/products/kds" },
      { name: "Recipe-Level Inventory", href: "/products/inventory" },
    ],
    faqs: [
      {
        question: "Can we start with printed KOTs and add screens later?",
        answer:
          "Yes. Routing works the same either way, so you can begin with thermal printers at each station and add kitchen screens when you're ready.",
      },
      {
        question: "What do the timer colours mean?",
        answer:
          "They track how long a ticket has been open: 0 to 10 minutes, 10 to 18 minutes, and overdue past 18. A ticket's colour changes on its own as it ages.",
      },
      {
        question: "How does stock come into the kitchen picture?",
        answer:
          "As each order fires, the recipe quantities for those dishes are deducted from inventory, so the kitchen can be alerted before a key ingredient runs out.",
      },
    ],
    metaTitle: "Kitchen Operations & KDS for Restaurants | Jamanvar Solutions",
    metaDescription:
      "Route every order to the right kitchen station instantly, with colour-coded prep timers and kitchen notes, on screens or thermal printers. No lost tickets.",
  },
  {
    id: "insights",
    index: "04",
    eyebrow: "BUSINESS INSIGHTS",
    navTitle: "Business insights",
    navDescription: "Live revenue, food cost and reconciliation.",
    name: "Know your numbers without end-of-day tallying.",
    tagline: "Live revenue, food cost and performance data on your phone.",
    heroDescription:
      "Sales, food cost and reconciliation update while service is still running. When the last table pays, the day's numbers are already done.",
    problemTitle: "By the time you see the numbers, the week is over",
    problemParagraphs: [
      "In most restaurants, an owner's picture of the business is stitched together after the fact. There's a cash count at night, a stack of UPI screenshots, a cashier's summary and eventually a monthly report. Each is accurate enough. But none of them arrive while there's still a chance to change what's happening.",
      "That's a real cost. If a Tuesday lunch is slow, you find out next month. If one dish is quietly losing money, it stays on the menu. If your peak hour is really an hour earlier than you thought, you'll have been understaffed for it all year.",
    ],
    approachTitle: "Every settled bill goes straight into the picture",
    approachParagraphs: [
      "Jamanvar feeds every settled bill into live reporting. Revenue, orders and occupancy update on your phone as the day goes on. Cash, UPI and card are reconciled automatically, so the end-of-day summary is waiting when service ends, with no counting-up required.",
      "Because your dishes are linked to their recipes, you're not just looking at what sold. You see food-cost ratio and margin per dish, your true peak hours, and which of your best sellers earn their menu space. Guest loyalty and repeat visits sit in the same view. Reports export cleanly for your accountant and for GST filing.",
    ],
    approachPhoto: { visual: "dashboard" },
    outcomes: [
      { term: "Live, not retrospective", description: "Revenue, orders and occupancy on mobile, tablet or desktop, updated as bills settle." },
      { term: "Reconciled by default", description: "Cash, UPI and card settlements are matched automatically, so closing the day is a check, not a chore." },
      { term: "Profit, not just sales", description: "Food-cost ratio and margin for each dish, so a popular dish isn't mistaken for a profitable one." },
      { term: "Accountant-ready", description: "Reports export for accounting and GST filing, without a rebuild from raw bills." },
    ],
    walkthroughLabel: "AN OWNER'S EVENING, WITHOUT THE TALLY",
    walkthrough: [
      { title: "Service is in full swing", description: "You're not at the restaurant. On your phone, you can see revenue, open tables and how the evening compares." },
      { title: "The pattern shows itself", description: "Peak-hour sales speed and occupancy build up hour by hour, showing you when the room is really busiest." },
      { title: "The last bill settles", description: "Cash, UPI and card totals are already matched. There's nothing to count and nothing to chase." },
      { title: "The summary is waiting", description: "The end-of-day summary is generated automatically, ready to read rather than ready to be built." },
      { title: "The month gets easier", description: "When it's time to file, the reports export cleanly for your accountant, because the underlying numbers have been right all along." },
    ],
    showcase: [
      { label: "LIVE REVENUE", caption: "Sales, orders and occupancy update on screen while the restaurant is still full.", mockup: "owner" },
      { label: "RECONCILIATION", caption: "Cash, UPI and card settlements are matched to the bills automatically, so closing the day is a check, not a chore.", mockup: "analytics" },
    ],
    bestFor: "Owners who want to see how the restaurant is doing without standing at the register, and anyone who wants to make menu and staffing decisions from real numbers.",
    connectedModules: [
      { name: "Analytics & Insights", href: "/products/analytics" },
      { name: "Recipe-Level Inventory", href: "/products/inventory" },
    ],
    faqs: [
      {
        question: "Can I check on the restaurant from home?",
        answer:
          "Yes. The dashboard works on mobile, tablet and desktop, and it updates from every settled bill, so you can see the day as it unfolds.",
      },
      {
        question: "Where does food cost come from?",
        answer:
          "From your recipes. Every dish is mapped to its ingredients, so the cost and margin of each dish can be calculated live as it sells.",
      },
      {
        question: "Does this help with GST filing?",
        answer:
          "Reports are exportable for accounting and GST filing, and CGST and SGST are already calculated on each invoice. Your accountant gets clean data instead of a shoebox of bills.",
      },
    ],
    metaTitle: "Restaurant Analytics & Business Insights | Jamanvar Solutions",
    metaDescription:
      "Live restaurant revenue, food cost, peak hours and automatic cash, UPI and card reconciliation on your phone. No end-of-day tallying.",
  },
  {
    id: "reliability",
    index: "05",
    eyebrow: "RELIABILITY & HARDWARE",
    navTitle: "Reliability & hardware",
    navDescription: "Offline-first billing on hardware you already own.",
    name: "Service doesn't stop when the internet does.",
    tagline: "Offline-first software, paired with tested restaurant hardware.",
    heroDescription:
      "Connections drop. Jamanvar keeps billing, KOT printing and kitchen routing running locally, then syncs to the cloud when the internet returns.",
    problemTitle: "Cloud software has a very bad habit of failing at 9pm",
    problemParagraphs: [
      "A restaurant's busiest hour tends to overlap with everyone else's, so mobile networks slow down, broadband misbehaves and routers get hot. A system that can't take an order without a live connection turns a small outage into a stalled dining room: guests waiting, cashiers improvising, and the kitchen with no tickets.",
      "Then there's the hardware question. Plenty of owners have working terminals and printers that they'd happily keep. Being told to replace all of it just to change software is a big cost, and a big reason many restaurants stay with a system they've outgrown.",
    ],
    approachTitle: "Local first, cloud when it's available",
    approachParagraphs: [
      "Jamanvar works on the device in front of you. Orders, KOTs and bills are handled locally, so the kitchen keeps receiving tickets and the counter keeps closing bills, even with no connection at all. When the internet returns, data syncs to the cloud in both directions automatically, and nobody has to re-enter or reconcile anything by hand.",
      "It also runs on the hardware you're likely to have: standard ESC/POS thermal printers, and Windows, Android and iPad devices. If you'd rather start clean, there are pre-tested kits with POS terminals, thermal printers, KDS tablets and captain handhelds, chosen to work together out of the box.",
    ],
    approachPhoto: { visual: "hardware-kit" },
    outcomes: [
      { term: "Billing that doesn't blink", description: "Orders, KOTs and bills carry on without a connection, so an outage isn't a service failure." },
      { term: "Automatic catch-up", description: "Everything syncs to the cloud on its own when connectivity returns, in both directions." },
      { term: "Keep what you own", description: "Standard ESC/POS printers and Windows, Android and iPad devices are supported." },
      { term: "Or start with a tested kit", description: "POS terminals, thermal printers, KDS tablets and captain handhelds that have been tested together." },
    ],
    walkthroughLabel: "WHEN THE ROUTER GOES QUIET",
    walkthrough: [
      { title: "The connection drops", description: "It's a full house on a Friday and the internet stops. The cashier's screen doesn't change." },
      { title: "Orders keep flowing", description: "Captains keep punching orders, and KOTs still reach the kitchen printers and screens over the local network." },
      { title: "Bills still close", description: "Guests pay and receipts print as normal on the thermal printer, over USB, LAN or Bluetooth." },
      { title: "The connection returns", description: "Nobody has to do anything. The day's data syncs to the cloud on its own." },
      { title: "The owner's view catches up", description: "Live reporting on your phone fills in with everything that happened while the connection was down." },
    ],
    showcase: [
      { label: "OFFLINE MODE", caption: "Billing and KOTs continue locally, and everything syncs when you're back online.", mockup: "hardware" },
      { label: "KITCHEN SCREENS", caption: "Tested KDS tablets and printers that work together without a lot of setup.", mockup: "kds" },
    ],
    bestFor: "Restaurants where the internet can't be relied on, and owners who don't want to replace working terminals and printers just to change software.",
    connectedModules: [
      { name: "Offline & Hardware", href: "/products/hardware" },
      { name: "Jamanvar POS", href: "/products/pos" },
    ],
    faqs: [
      {
        question: "What exactly works without internet?",
        answer:
          "Billing, KOT printing and kitchen routing all continue locally. Anything that relies on the cloud, such as your live dashboard on your phone, catches up once you're back online.",
      },
      {
        question: "Will our existing printer work?",
        answer:
          "Standard 58mm and 80mm ESC/POS thermal printers are supported over USB, LAN or Bluetooth. Share your printer model when you book a demo and we'll confirm it.",
      },
      {
        question: "Do we have to buy hardware from Jamanvar?",
        answer:
          "No. The software runs on standard devices. The hardware kits are for owners who want tested, ready-to-use equipment.",
      },
    ],
    metaTitle: "Offline Restaurant Billing & Hardware | Jamanvar Solutions",
    metaDescription:
      "Offline-first restaurant software that keeps billing, KOT printing and kitchen routing running without internet, on hardware you already own or tested kits.",
  },
];

export function getSolution(id: string): Solution | undefined {
  return SOLUTIONS.find((s) => s.id === id);
}
