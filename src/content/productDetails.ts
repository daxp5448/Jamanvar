// Extended content for each product page: photo + text detail rows, a
// before/after comparison, use cases, setup notes, extra FAQs, and the
// position of the product in the restaurant flow.
//
// Same rule as products.ts: describe only what the product really does.
// Names, tables and amounts that appear here (T-07, ₹1,302, Paneer Tikka
// Angara and so on) come from the sample restaurant used across the site.
//
// Every product has its own images. The device scenes in
// /images/jamanvar/products show Jamanvar running on real hardware; the
// photos in /images/jamanvar/trail are used once each.

import type { FaqItem } from "./products";

export interface DetailPhoto {
  src: string;
  alt: string;
}

export interface ProductDetail {
  title: string;
  paragraphs: string[];
  photo: DetailPhoto;
}

export interface BeforeAfterRow {
  topic: string;
  without: string;
  with: string;
}

export interface UseCase {
  title: string;
  body: string;
}

export interface ProductFlow {
  title: string;
  intro: string;
  // stage id (from workflow.ts) → what this product does at that stage
  stageNotes: Record<string, string>;
}

export interface ProductExtras {
  beforeAfter: BeforeAfterRow[];
  useCases: UseCase[];
  setupNote: string;
  moreFaqs: FaqItem[];
}

const IMG = "/images/jamanvar";
const SCENE = `${IMG}/products`;

export const PRODUCT_DETAILS: Record<string, ProductDetail[]> = {
  pos: [
    {
      title: "The counter, laid out for speed",
      paragraphs: [
        "The billing screen has two halves. On one side, a touch grid of your most-ordered dishes with their prices. On the other, the table's running bill with the settle button always in the same place. A cashier finds a dish by typing its numeric short code or tapping a category, so the hands never leave the screen.",
        "Prices, GST and totals come up as the order builds, which means the guest and the cashier are looking at the same number the whole way through. There's no surprise at the end of the meal.",
        "Behind the grid is your real menu: every dish with its code, price, veg or non-veg mark and category, set up from the menu you already have.",
      ],
      photo: { src: `${IMG}/trail/pos.jpg`, alt: "Jamanvar POS showing Table 07's running bill beside a grid of quick-touch menu items, next to a receipt printer" },
    },
    {
      title: "A GST invoice with your name on it",
      paragraphs: [
        "Every settled bill prints an invoice with CGST and SGST shown separately, your restaurant's details in the header, and the table, captain and bill number underneath. It prints on 58mm or 80mm thermal paper over USB, LAN or Bluetooth.",
        "The header carries your own branding, so the slip that leaves the counter looks like it came from your restaurant and not from a software vendor.",
        "Reports are built from these same invoices and export for your accountant and for GST filing, so the numbers on paper and the numbers in the books don't drift apart.",
      ],
      photo: { src: `${IMG}/trail/receipt.jpg`, alt: "A printed Jamanvar receipt with itemised dishes, CGST and SGST lines and a UPI QR" },
    },
    {
      title: "Settle it however the guest wants to pay",
      paragraphs: [
        "At settlement the cashier picks the mode: UPI QR, card, cash or customer credit (Khaata). A table-specific UPI QR can be shown on screen or on the receipt, and the payment is verified instantly, with confirmation on the cashier's screen and on a UPI soundbox if you use one.",
        "Each payment is reconciled as it happens, so at closing there's nothing left to match by hand. Discounts are applied at the point of settlement and can be protected with OTP authorisation, so staff can't quietly adjust a bill.",
      ],
      photo: { src: `${SCENE}/pos-payment.png`, alt: "Jamanvar POS payment screen with UPI QR, card, cash and Khaata options beside a UPI soundbox confirming ₹1,302 received" },
    },
  ],

  kds: [
    {
      title: "A screen at the pass, not a wall of paper",
      paragraphs: [
        "Mount a screen above the pass and the tickets are simply there: the table number, every item, the notes, and how long each order has been waiting. Chefs read the ticket at a glance rather than decoding handwriting or asking a captain to repeat themselves.",
        "Each station sees only its own items, so the person at the tandoor isn't scanning past bar orders to find their naans.",
        "The kitchen stops being a place where information arrives by shouting. It arrives once, in order, and stays visible until the dish goes out.",
      ],
      photo: { src: `${IMG}/trail/kitchen.jpg`, alt: "A chef plating a curry at the pass beneath a kitchen display showing live order tickets" },
    },
    {
      title: "Three tickets, three colours",
      paragraphs: [
        "Every ticket header carries the KOT number, the table and a live timer, and the colour tells you the story before you read a word. Green means the order is fresh, amber means it's approaching the limit, and red means it's overdue.",
        "Inside each ticket, every item has its own status: cooking, done or dispatched. Chefs tap as they finish, and the pass can see which parts of a table's order are ready and which are still on the fire. That's how a big order goes out together instead of in dribs and drabs.",
      ],
      photo: { src: `${SCENE}/kds-wall.png`, alt: "A wall-mounted Jamanvar kitchen display showing three colour-coded order tickets with cooking and done statuses" },
    },
    {
      title: "Prefer paper? Print it at the station",
      paragraphs: [
        "Not every kitchen is ready for screens on day one, and that's fine. Jamanvar can print each KOT on a thermal printer at the station that needs it: the ticket shows the KOT number, table, captain, station, every item and any note.",
        "You get the same routing, the same notes and the same speed. When you're ready to move a station to a screen, nothing about how orders are entered has to change.",
      ],
      photo: { src: `${SCENE}/kds-printer.png`, alt: "A thermal kitchen printer printing a Jamanvar kitchen order ticket for table T-07 beside a phone showing KOT routing to Tandoor and Bar" },
    },
  ],

  tables: [
    {
      title: "Every section on one plan",
      paragraphs: [
        "Main Dining, Terrace, Family Hall and Bar Area appear together on a single floor plan, and every table is coloured by its state. The host looks at the screen instead of walking the room.",
        "Because tables change state as orders are punched and bills are settled, the plan is always as current as the restaurant is.",
        "It means the person at the door can answer \"how long for a table?\" from facts, not from a guess made while glancing across a crowded room.",
      ],
      photo: { src: `${IMG}/trail/table.jpg`, alt: "A busy restaurant table with guests dining under warm lantern light" },
    },
    {
      title: "Free, seated, billing, reserved",
      paragraphs: [
        "Four states cover everything the floor needs to know: available, occupied, billing and reserved, each with its own colour. A table whose guests have asked for the bill changes state, so the captain knows it's time to close, and a reserved table is held for its booking.",
        "Every tile also shows its capacity, so you can tell at once whether a party of six fits at T-03, or whether you need to join two tables.",
      ],
      photo: { src: `${SCENE}/tables-tablet.png`, alt: "Jamanvar floor plan on a tablet showing Main Dining, Terrace, Family Hall and Bar Area with colour-coded table tiles" },
    },
    {
      title: "Tap a table, see the whole story",
      paragraphs: [
        "Open any occupied table and you see what matters: how long the guests have been seated, how many orders are active, the running bill so far and which captain owns the table.",
        "From the same screen you can merge tables for a big group or transfer a running order to another table. The items and total move together, so a family that decides to sit outside doesn't mean starting the bill again.",
      ],
      photo: { src: `${SCENE}/tables-host.png`, alt: "Jamanvar table detail on a phone showing T-08 in Family Hall with seated time, bill amount and merge and transfer options" },
    },
  ],

  inventory: [
    {
      title: "Spices by the gram, not by feel",
      paragraphs: [
        "Every dish is mapped to its ingredients in real quantities. Saffron is counted in grams, paneer and butter in kilograms, cream in litres. That precision is what makes the numbers worth trusting.",
        "You don't have to map the whole menu on day one. Starting with the dishes that sell most gets you meaningful stock figures quickly, and you add the rest as you go.",
        "Once a recipe is in, it works quietly in the background. Every sale of that dish takes exactly its ingredients out of stock, and nobody has to remember to do it.",
      ],
      photo: { src: `${IMG}/trail/inventory.jpg`, alt: "Bowls of whole spices on a wooden board: star anise, cardamom, saffron, cinnamon, turmeric and black pepper" },
    },
    {
      title: "A pantry that tells you what needs attention",
      paragraphs: [
        "Each ingredient shows how much you have against how much you should keep, and it's marked optimal, low or critical. The fresh mint and coriander at 0.8 kg show up in red long before a chef discovers the tub is empty.",
        "The stock screen sits next to the recipe it feeds, so you can see at a glance which dishes an ingredient affects, and the deduction from every KOT is visible as it happens.",
      ],
      photo: { src: `${SCENE}/inventory-tablet.png`, alt: "Jamanvar recipe inventory on a tablet with stock bars marked optimal, low and critical for paneer, butter, chilli, mint and saffron" },
    },
    {
      title: "From low stock to goods received",
      paragraphs: [
        "When something runs low, you raise a purchase order to your vendor from the same screen, and when the delivery arrives you log goods received against it, item by item. Anything that hasn't arrived yet stays visible as an open item.",
        "It closes the loop: the system that tells you paneer is low is the same one that records that ten kilos have arrived, so the stock figure updates without a separate spreadsheet.",
      ],
      photo: { src: `${SCENE}/inventory-po.png`, alt: "Jamanvar purchase order on a laptop listing butter, paneer, mint and cream with a received tick beside each delivered item" },
    },
  ],

  analytics: [
    {
      title: "Your day as a curve",
      paragraphs: [
        "An hourly sales chart shows exactly when the restaurant fills up and empties out, with your peak dining hour highlighted. Revenue, orders settled and the split between dine-in and takeaway sit above it.",
        "That's how you notice that Thursday's rush starts an hour earlier than you'd assumed, while there's still time to change the roster.",
        "It's the same picture your best manager builds in their head after years on the floor, drawn for you automatically from every bill.",
      ],
      photo: { src: `${IMG}/trail/analytics.jpg`, alt: "Jamanvar live analytics with revenue, orders settled, peak dining hour and an hourly sales chart" },
    },
    {
      title: "The owner's view, in your pocket",
      paragraphs: [
        "On your phone you see today's revenue, the number of orders, table occupancy and the hourly chart, updating as bills are settled. You don't need to be in the building, or even in the city.",
        "When service ends, an automated end-of-day summary is ready, with net sales, peak hour, reconciliation status and best sellers. Owners can have it sent as a WhatsApp summary, so the day's result is waiting where you already read your messages.",
      ],
      photo: { src: `${SCENE}/analytics-phone.png`, alt: "Two phones showing Jamanvar live revenue with an hourly chart and an end-of-day summary with net sales and reconciliation" },
    },
    {
      title: "Reports that match the bills",
      paragraphs: [
        "Cash, UPI and card settlements are matched to the bills as they're settled, and each line shows a tick when it reconciles. If a figure doesn't match, you see it that evening, not three weeks later.",
        "Beside it, a best-sellers view shows what's actually moving, and reports export for your accountant and for GST filing. They're built from the same invoices your guests were handed at the table.",
      ],
      photo: { src: `${SCENE}/analytics-laptop.png`, alt: "Jamanvar reports on a laptop showing cash, UPI and card reconciliation, best sellers and a GST report export" },
    },
  ],

  hardware: [
    {
      title: "A counter where everything talks to each other",
      paragraphs: [
        "A working counter is a terminal, a receipt printer and a payment device that all need to agree with each other. Jamanvar's hardware kits are tested as a set, so the terminal prints to the printer and the bill matches the payment without an afternoon of settings.",
        "If you already own the equipment, there's no need to buy it again. Standard ESC/POS printers and Windows, Android and iPad devices are supported.",
        "We also help with the fiddly parts: pairing thermal printers over USB or LAN, connecting cash drawers and getting kitchen tablets talking to the counter.",
      ],
      photo: { src: `${IMG}/hardware-counter.jpg`, alt: "A Jamanvar POS terminal on a restaurant counter beside a receipt printer and a card reader" },
    },
    {
      title: "The whole kit, tested as a set",
      paragraphs: [
        "A full kit covers every role in the restaurant: a POS terminal for the counter, a thermal printer for receipts and KOTs, a KDS tablet for the pass, and a captain handheld for the floor. Each one shows the Jamanvar interface it's meant for.",
        "Because they've been tested together, a KOT fired from the handheld arrives on the kitchen tablet, and the bill on the terminal prints on the counter printer, on the first day.",
      ],
      photo: { src: `${SCENE}/hardware-kit.png`, alt: "A Jamanvar hardware kit on a counter: POS terminal, kitchen display tablet, receipt printer and captain handheld, each showing the Jamanvar interface" },
    },
    {
      title: "When the router goes quiet, the counter doesn't",
      paragraphs: [
        "If the internet drops, the POS shows that it's offline and carries on. Orders, KOTs and bills are handled locally, and a small counter shows how many orders and bills are waiting to sync.",
        "When the connection returns, everything goes up to the cloud automatically, in both directions. The owner's dashboard fills in, nothing is re-entered, and the cashier never has to do anything.",
      ],
      photo: { src: `${SCENE}/hardware-offline.png`, alt: "A Jamanvar POS showing an offline banner with 14 orders waiting to sync, next to a phone confirming everything has synced" },
    },
  ],

  captain: [
    {
      title: "Standing at the table, not walking away from it",
      paragraphs: [
        "The captain takes the order on a handheld while still facing the guests. They can answer questions about the menu, suggest a dish and read the order back, all while entering it. There's no going away to write it up.",
        "One tap fires the KOT, so the kitchen has the ticket before the captain has finished saying \"thank you\".",
        "The guests notice the difference even if they can't name it: the captain is attentive because they're not busy relaying paper.",
      ],
      photo: { src: `${IMG}/trail/customer.jpg`, alt: "A group of friends laughing over dinner at a restaurant table, served by a captain taking orders at the table" },
    },
    {
      title: "Everything for the table on one screen",
      paragraphs: [
        "The handheld shows the tables you're working as tabs along the top, so switching between T-05 and T-07 is a single tap, and a half-entered order is still there when you come back.",
        "A search field takes a short code or a dish name, the running list shows quantities and prices, and the total updates as you add. When the guests are happy, one large button fires the KOT.",
      ],
      photo: { src: `${SCENE}/captain-handheld.png`, alt: "A rugged Jamanvar captain handheld showing Table T-07 with a short-code search, order lines, running total and a Fire KOT button" },
    },
    {
      title: "Notes that reach the person cooking",
      paragraphs: [
        "Kitchen notes are captured live, at the moment the guest says them, as quick chips or free text: spicy, extra mint dip, less oil, no onion or garlic (Jain). They're attached to that item, not to the order as a whole.",
        "On the kitchen screen, the note appears right beside the dish it belongs to. The person plating a paneer tikka reads \"spicy, extra mint dip\" without anybody having to repeat it.",
      ],
      photo: { src: `${SCENE}/captain-notes.png`, alt: "A Jamanvar captain handheld showing kitchen note options for Paneer Tikka Angara beside the matching ticket on the kitchen screen" },
    },
  ],

  "qr-ordering": [
    {
      title: "For guests who already know what they want",
      paragraphs: [
        "Some guests have decided before they sit down. With QR Ordering, they scan the code on the table, browse the menu on their phone and order without waiting to catch anyone's eye.",
        "Others want a recommendation, and for them the captain is still right there. The two aren't in competition.",
        "It's a small courtesy that adds up: nobody waits to be noticed, and the captain's attention goes to the guests who want it.",
      ],
      photo: { src: `${IMG}/trail/dish.jpg`, alt: "Paneer tikka skewers with mint chutney on a copper plate, the kind of dish a guest orders from their phone" },
    },
    {
      title: "Every table has its own code",
      paragraphs: [
        "A QR code belongs to a specific table, and it sits on the table where the guests can see it, with your Jamanvar branding and the table number. An order placed through it lands on that table's tab automatically.",
        "Nobody has to ask \"which table was that?\" and nobody has to move items from one bill to another. The floor plan updates as soon as the order arrives, the same way it would for a captain's order.",
      ],
      photo: { src: `${SCENE}/qr-stand.png`, alt: "A table tent card with the Jamanvar logo, the words Scan to order, a QR code and the table number 07 standing on a restaurant table" },
    },
    {
      title: "Menu in, order out",
      paragraphs: [
        "On the guest's phone, the menu is organised by category with each dish's name, veg mark and price. Adding a dish is one tap, and a running total shows before the order goes.",
        "Once it's sent, the guest sees confirmation and the order joins exactly the same live queue as a captain's: split by station, shown on the kitchen screen or thermal printer, with its notes attached. The kitchen never has to think about where it came from.",
      ],
      photo: { src: `${SCENE}/qr-phone.png`, alt: "Two phones showing the Jamanvar guest menu with categories and prices, and an order-sent confirmation for Table 07" },
    },
  ],
};

export const PRODUCT_EXTRAS: Record<string, ProductExtras> = {
  pos: {
    beforeAfter: [
      { topic: "The billing queue", without: "The cashier scrolls the menu while the line grows.", with: "Short codes and one-tap categories keep the line moving." },
      { topic: "Table bills", without: "Bills are rebuilt from paper slips at the counter.", with: "Every table's running tab is already there, item for item." },
      { topic: "GST", without: "CGST and SGST are worked out on a calculator.", with: "Calculated on every invoice automatically." },
      { topic: "Payments", without: "Cash, UPI screenshots and card slips are matched at night.", with: "Cash, UPI, card and Khaata are reconciled as each bill settles." },
    ],
    useCases: [
      { title: "Casual dine-in restaurants", body: "Friends split bills by item or seat, tables turn quickly, and the cashier needs to keep up. Split billing and a running tab per table were made for this." },
      { title: "Cafés and quick-service counters", body: "When the queue is the business, three seconds per bill matters. Short-code search and category filters keep the line moving at peak hours." },
      { title: "Restaurants with more than one counter", body: "Multi-terminal billing lets several cashiers bill at the same time, each with their own cash drawer tally and login, so everyone's accountable for their own till." },
    ],
    setupNote: "Your menu, prices, tax settings and receipt header are set up before you go live, so the first bill you print already has your name on it.",
    moreFaqs: [
      { question: "Can several cashiers bill at the same time?", answer: "Yes. Jamanvar supports multi-terminal billing, with separate cash drawer tallies and cashier logins, so it's clear who took what." },
      { question: "How do I change a price or mark a dish as unavailable?", answer: "From the Manager menu in POS, in a couple of clicks. Prices and out-of-stock status update straight away across every waiter and cashier screen." },
      { question: "Can staff give discounts freely?", answer: "Discounts are applied at settlement and can be authorised with an OTP, so you keep control of who can adjust a bill." },
    ],
  },
  kds: {
    beforeAfter: [
      { topic: "Order tickets", without: "Paper KOTs slide behind the counter or get out of order.", with: "Tickets sit on screen in the order they were fired." },
      { topic: "Table numbers", without: "Captains shout table numbers over the exhaust fan.", with: "The table is printed on every ticket, so nothing needs to be shouted." },
      { topic: "Late orders", without: "Nobody knows what's overdue until a guest asks.", with: "Timers change colour as a ticket ages, so it's flagged in time." },
      { topic: "Special requests", without: "Notes get lost between the pad and the pass.", with: "Notes travel with the item and appear next to it." },
    ],
    useCases: [
      { title: "Multi-station kitchens", body: "When the tandoor, the curry section and the bar each make part of the same order, automatic routing means nobody has to split it by voice." },
      { title: "Restaurants still on handwritten KOTs", body: "Start with thermal-printed tickets at each station. You get routing and notes on day one, and can add screens whenever you like." },
      { title: "Busy dine-in with a separate bar or dessert section", body: "Drinks and desserts go to their own stations, so a long food ticket doesn't hold up the round of beverages." },
    ],
    setupNote: "We help pair the kitchen tablets or thermal printers and set up your stations, then run a test billing cycle before you open to guests.",
    moreFaqs: [
      { question: "Can chefs mark items as they finish them?", answer: "Yes. Each item can be marked cooking, done or dispatched, and the rest of the house can see the status." },
      { question: "Does the kitchen keep getting tickets if the internet is down?", answer: "Yes. Kitchen routing runs on the local network, so KOTs keep reaching your stations even without a connection." },
    ],
  },
  tables: {
    beforeAfter: [
      { topic: "Seating decisions", without: "The host walks the floor to find a free table.", with: "The floor plan shows every table's state at a glance." },
      { topic: "Large parties", without: "Joining tables is tracked on paper or by memory.", with: "Merge tables in one tap and run a single tab." },
      { topic: "Seating time", without: "Nobody's sure how long a table has been dining.", with: "Seated time is tracked live for every table." },
      { topic: "Ownership", without: "\"Who has table 8?\" is answered by shouting.", with: "Each table shows its captain." },
    ],
    useCases: [
      { title: "Family dining halls", body: "Big tables, big parties and long meals. Capacity per table, merges and seated time help you use a large room well." },
      { title: "Restaurants with sections or a terrace", body: "Each section shows on the same plan, so the host can place guests in the right area without leaving the door." },
      { title: "Places that take reservations", body: "Reserved tables show up in their own colour, so a booking is never given away by accident." },
    ],
    setupNote: "Give us your table count and sections and we'll build your floor plan for you, so it matches your restaurant on the first day.",
    moreFaqs: [
      { question: "Can reservations be shown on the floor plan?", answer: "Yes. Tables can be marked reserved, and they appear in their own colour so nobody seats a party there by mistake." },
      { question: "Who sets up the sections and tables?", answer: "We do, with you. Share your table count and layout and we configure your floor plan before you open." },
    ],
  },
  inventory: {
    beforeAfter: [
      { topic: "Stock counts", without: "The month-end count is a surprise.", with: "Stock is deducted on every KOT, so you know where you stand daily." },
      { topic: "Running out", without: "The chef finds out mid-service that an ingredient is gone.", with: "Low-stock alerts arrive while there's time to reorder." },
      { topic: "Wastage", without: "Spoilage and sampling are lumped into usage.", with: "Wastage is logged separately, so you can see it." },
      { topic: "Dish margins", without: "Margins are guessed from old prices.", with: "Food cost and margin are calculated per dish from your recipes." },
    ],
    useCases: [
      { title: "Kitchens with recipe costing", body: "If you already know what goes into each dish, Jamanvar puts that knowledge to work, deducting exact quantities on every sale." },
      { title: "Restaurants tightening food cost", body: "When margins are slipping, per-dish cost and a separate wastage log show where the money's going." },
      { title: "Menus built on fresh, fast-moving ingredients", body: "Paneer, dairy, mint and coriander don't wait. Status levels and low-stock alerts keep the perishables on your radar." },
    ],
    setupNote: "Start by mapping the recipes for your top-selling dishes, then add the rest over time. You get useful stock figures without having to finish everything first.",
    moreFaqs: [
      { question: "How do I know when to reorder?", answer: "Each ingredient has a threshold and shows as optimal, low or critical. Low-stock alerts warn you before it runs out." },
      { question: "Can I raise purchase orders from Jamanvar?", answer: "Yes. You can generate vendor purchase orders and log goods received against them." },
    ],
  },
  analytics: {
    beforeAfter: [
      { topic: "The end of the day", without: "Cash is counted and bills are tallied by hand.", with: "The end-of-day summary is generated automatically." },
      { topic: "UPI and cards", without: "Screenshots are matched against the register.", with: "Cash, UPI and card are reconciled as bills settle." },
      { topic: "Peak hours", without: "Rush hours are a feeling.", with: "An hourly curve shows when the room really fills." },
      { topic: "Best sellers", without: "You know what sold, not what made money.", with: "Food cost and margin sit beside every dish's sales." },
    ],
    useCases: [
      { title: "Owners who aren't on site every day", body: "Check revenue, orders and occupancy from your phone, and get the day's summary without calling the manager." },
      { title: "Restaurants planning staffing or menus", body: "Peak-hour data and item profitability turn rosters and menu changes into decisions you can back with numbers." },
      { title: "Owners preparing for GST filing", body: "Reports export cleanly for your accountant, and they come from the same invoices printed at the table." },
    ],
    setupNote: "Analytics needs no separate setup. It starts filling in from your first settled bill, and gets more useful as your recipes are added.",
    moreFaqs: [
      { question: "Do I get a daily summary without asking for it?", answer: "Yes. An end-of-day summary is generated automatically, and owners can receive it as a WhatsApp summary." },
      { question: "Can I see dine-in and takeaway separately?", answer: "Yes. The dashboard shows orders settled with the split between dine-in and takeaway." },
    ],
  },
  hardware: {
    beforeAfter: [
      { topic: "Changing software", without: "You replace working terminals and printers just to switch.", with: "Standard ESC/POS printers and Windows, Android and iPad devices are supported." },
      { topic: "Internet outages", without: "Billing stalls and guests queue.", with: "Billing, KOT printing and kitchen routing carry on locally." },
      { topic: "Getting equipment", without: "You source parts one by one and hope they work together.", with: "Pre-tested kits arrive ready for the counter, the pass and the floor." },
      { topic: "After the outage", without: "Someone re-enters the paper bills.", with: "Everything syncs to the cloud automatically." },
    ],
    useCases: [
      { title: "Restaurants with patchy internet", body: "Offline-first means an outage is an inconvenience for the router, not for your dining room." },
      { title: "Owners reusing existing equipment", body: "Bring your printers and terminals. Standard ESC/POS printers and common devices are supported." },
      { title: "New outlets setting up from scratch", body: "A tested kit means the counter, printer, kitchen tablet and captain handheld are chosen to work together from the start." },
    ],
    setupNote: "We help pair and test your ESC/POS printers, USB and LAN connections, cash drawers and kitchen tablets, so it all works before the first guest walks in.",
    moreFaqs: [
      { question: "Who sets up the printers and the cash drawer?", answer: "We help with that. Support includes configuring ESC/POS thermal printers, USB and LAN connections, cash drawers and kitchen display tablets." },
      { question: "How quickly can we go live?", answer: "Most restaurants are live within 24 to 48 hours. Once we have your menu and table count, we configure the system, train your team and run a test billing cycle before you open." },
    ],
  },
  captain: {
    beforeAfter: [
      { topic: "Taking the order", without: "A paper pad, scribbled at the table.", with: "A handheld, entered in front of the guest." },
      { topic: "Reaching the kitchen", without: "Walk to a terminal, hand over the slip.", with: "One tap fires the KOT to the right station." },
      { topic: "Interruptions", without: "Being called away means a half-written order is lost.", with: "Switch tables and come back to the order as you left it." },
      { topic: "Special requests", without: "\"No chilli\" gets lost on the way.", with: "The note is attached to the item and shown in the kitchen." },
    ],
    useCases: [
      { title: "Full-service dine-in", body: "Where a captain owns a section of tables, a handheld keeps their attention on the guests and their orders accurate." },
      { title: "Fine dining and accountable service", body: "Every order is tied to a captain and a table, so it's clear who took it and when it was fired." },
      { title: "Large halls with many tables per captain", body: "Server assignment shows who owns which table, and quick switching keeps captains moving without losing orders." },
    ],
    setupNote: "We set up your menu, notes and tables on the handhelds, and train captains through video sessions or on-site until they're confident.",
    moreFaqs: [
      { question: "Does it still work if the internet drops?", answer: "Yes. Jamanvar is offline-first, so orders and KOTs keep working on local devices during an outage and sync afterwards." },
      { question: "Can a captain see which tables are theirs?", answer: "Yes. Each table shows its assigned captain, so it's clear who owns what." },
    ],
  },
  "qr-ordering": {
    beforeAfter: [
      { topic: "Getting an order in", without: "Guests wave and wait for a captain.", with: "They scan the table's code and order when ready." },
      { topic: "Accuracy", without: "The order is misheard in a noisy room.", with: "The guest enters exactly what they want." },
      { topic: "Systems", without: "Digital and staff orders live in separate places.", with: "Both go into the same live queue." },
      { topic: "The bill", without: "Items are moved between tables by hand.", with: "Each code belongs to a table, so the order lands on its tab." },
    ],
    useCases: [
      { title: "Cafés and casual dine-in", body: "Guests who know what they want order at their own pace, and captains' time goes further." },
      { title: "High-turnover quick-service tables", body: "When speed is the whole point, scan-and-order removes the wait to catch someone's eye." },
      { title: "Busy evenings when captains are stretched", body: "A guest doesn't have to wait for a free captain to place an order. It goes straight into the kitchen queue." },
    ],
    setupNote: "We set up a QR code for every table from your table count, matched to your menu, so each scan lands on the right tab.",
    moreFaqs: [
      { question: "Can guests pay from their phone?", answer: "QR Ordering is about placing the order. The table's tab is still settled through POS, in cash, UPI, card or customer credit." },
      { question: "Will guests see the same menu as our POS?", answer: "The menu comes from your Jamanvar menu, so what guests order matches what your kitchen and cashier see." },
    ],
  },
};

// Where each product sits in the restaurant flow (stage ids come from
// workflow.ts, the same six stages shown on the Home and How It Works pages).
export const PRODUCT_FLOW: Record<string, ProductFlow> = {
  pos: {
    title: "Where POS sits in the flow",
    intro: "From the first order to the final report, Jamanvar keeps your restaurant moving together. POS is the middle of that line: the order becomes a bill, and the bill becomes a settled payment.",
    stageNotes: {
      pos: "This is the step POS owns. Whatever a captain or guest sent becomes one live tab per table, so the counter never has to rebuild a bill from paper.",
      bill: "Pick the payment mode and settle: cash, UPI QR, card or Khaata. The GST invoice prints on the spot and the payment is reconciled as it lands.",
    },
  },
  kds: {
    title: "Where the KDS sits in the flow",
    intro: "Every order that's punched, by a captain, a guest or a cashier, ends up in the kitchen. The KDS is where it's turned into food.",
    stageNotes: {
      kitchen: "Everything here happens on your kitchen screens or station printers: routing by station, item status from cooking to dispatched, and timers that warn before a ticket is late.",
    },
  },
  tables: {
    title: "Where the floor plan sits in the flow",
    intro: "The floor plan isn't a separate chore. It's a live view built from the orders and bills already moving through the restaurant.",
    stageNotes: {
      table: "Every table shows available, occupied, billing or reserved, with seated time and the captain who owns it. Merge tables or transfer orders in one tap.",
    },
  },
  inventory: {
    title: "Where inventory sits in the flow",
    intro: "Inventory doesn't ask anyone to do extra work. It follows the order through the kitchen and then feeds what it learns into your reports.",
    stageNotes: {
      kitchen: "As each KOT fires, the recipe quantities for those dishes are deducted from your pantry, so stock is up to date without anyone counting.",
      insight: "Ingredient movements and recipe costs feed your food-cost figures and margin per dish, next to the day's sales.",
    },
  },
  analytics: {
    title: "Where analytics sits in the flow",
    intro: "Every earlier step leaves a trail of facts behind. Analytics is where those facts become something an owner can act on.",
    stageNotes: {
      insight: "Every settlement feeds live into your phone: net sales, top sellers, category margins and raw-material deductions as they happen, with an automated end-of-day summary.",
    },
  },
  hardware: {
    title: "Where hardware and offline mode sit in the flow",
    intro: "Hardware and offline mode aren't a step in the flow. They're what the whole flow runs on, at every stage from the first order to the last report.",
    stageNotes: {
      order: "Captain handhelds keep taking orders, on durable devices, even if the internet has gone.",
      pos: "The POS terminal handles orders and bills locally, and syncs to the cloud when the connection returns.",
      kitchen: "KDS tablets and thermal printers keep receiving tickets over the local network.",
      table: "The floor plan keeps updating from local orders and bills.",
      bill: "Receipts print on standard 58mm and 80mm thermal printers, over USB, LAN or Bluetooth.",
      insight: "When connectivity returns, everything syncs and your dashboard catches up automatically.",
    },
  },
  captain: {
    title: "Where Captain Ordering sits in the flow",
    intro: "Everything in the restaurant starts with an order, and Captain Ordering is the first step: the moment a guest's words become a ticket.",
    stageNotes: {
      order: "Captains punch orders table-side on Android handhelds, with items, seat numbers and kitchen notes captured instantly and fired to the kitchen in one tap.",
    },
  },
  "qr-ordering": {
    title: "Where QR Ordering sits in the flow",
    intro: "QR Ordering is another way into the very first step of the flow, and from there an order behaves exactly like any other.",
    stageNotes: {
      order: "Guests scan the table's QR code and order from their phone. Items and notes join the same live queue as captain orders, straight into POS and the kitchen.",
    },
  },
};
