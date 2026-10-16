// Content for every dedicated Jamanvar product page.
//
// Every fact here (short-code billing, timer bands, printer sizes, station
// names, offline sync and so on) already exists in the product and on the
// Home, /features and /how-it-works pages. The copy is written to read like
// a person who has stood behind a restaurant counter wrote it, but it never
// promises a feature or a number the product doesn't have. If you add a
// claim, check it against the product first.
//
// This file is the single source of truth for the Products dropdown and every
// /products/[slug] page, plus the module links on the /solutions pages.
//
// Content model: one H1 (hero), then a small, fixed set of H2 sections per
// page (positioning, connected ecosystem, questions, closing CTA).
// Capabilities are term + description rows under one heading, not one
// heading per capability.

export type MockupVariant =
  | "ordering"
  | "captainOrdering"
  | "qrOrdering"
  | "pos"
  | "payment"
  | "kds"
  | "kdsQueue"
  | "tables"
  | "tableSections"
  | "inventory"
  | "customers"
  | "analytics"
  | "owner"
  | "hardware"
  | "kiosk"
  | "whatsapp";

export type ProductCategory =
  | "POINT OF SALE"
  | "KITCHEN"
  | "FLOOR"
  | "ORDERING"
  | "OPERATIONS"
  | "RELIABILITY";

export interface CapabilityRow {
  term: string;
  description: string;
}

export interface DeepDiveSection {
  index: string;
  label: string;
  caption: string;
  mockup: MockupVariant;
}

export interface WorkflowStep {
  label: string;
  href?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Product {
  slug: string;
  index: string;
  category: ProductCategory;
  name: string;
  shortDescription: string;
  heroLabel: string;
  heroTitle: string;
  heroDescription: string;
  heroMockup: MockupVariant;
  positioningTitle: string;
  positioningParagraphs: string[];
  capabilityRows: CapabilityRow[];
  bestFor: string;
  deepDive: DeepDiveSection[];
  connectedTitle: string;
  connected: string[]; // slugs
  workflow: WorkflowStep[];
  faqs: FaqItem[];
  metaTitle: string;
  metaDescription: string;
}

export const PRODUCTS: Product[] = [
  {
    slug: "pos",
    index: "01",
    category: "POINT OF SALE",
    name: "Jamanvar POS",
    shortDescription: "Billing that keeps up with your busiest hour.",
    heroLabel: "01 / POINT OF SALE",
    heroTitle: "Jamanvar POS",
    heroDescription:
      "Billing that keeps up with your busiest hour. Punch items by short code, keep a live tab on every table, and close the bill in cash, UPI, card or credit, with the GST already worked out.",
    heroMockup: "pos",
    positioningTitle: "Built for the counter, not the brochure",
    positioningParagraphs: [
      "Every restaurant has a moment, usually a Saturday around nine, when the billing counter becomes the bottleneck. A guest is standing there with a card in hand, the cashier is scrolling for \"butter naan\", and someone is working out CGST and SGST on a calculator. Jamanvar POS is designed around that exact moment.",
      "Items go on the bill by short code, with one-tap category filters for everything else. Each table carries a live tab from its very first order, so whoever is at the counter can open any table's running bill without typing a single item again. Split it by item, by seat or into equal shares, apply a discount, and settle in cash, UPI QR, card or customer credit (Khaata).",
      "The invoice is GST-compliant the second the bill is settled, with CGST and SGST calculated for you and your own brand on the receipt header. It prints on 58mm or 80mm thermal printers over USB, LAN or Bluetooth. And if the internet drops halfway through dinner service, billing carries on locally and catches up afterwards.",
    ],
    capabilityRows: [
      { term: "Billing", description: "Around three seconds to bill a table. Search by numeric short code, or filter by category with one tap when you don't remember the code." },
      { term: "Orders", description: "The moment an order is punched it becomes a live tab on that table, and anyone at any terminal can pick it up." },
      { term: "Tables", description: "Open any table's running bill and add to it or settle it, without re-entering what's already been ordered." },
      { term: "Payments", description: "Cash, UPI QR, card and customer credit (Khaata). Every payment is reconciled as it happens, not at closing time." },
      { term: "Split & Discounts", description: "Split by item, by seat or equally. Apply discounts at settlement, on the bill they belong to." },
      { term: "Taxes", description: "CGST and SGST are calculated automatically on every invoice. No calculator, no correction slips." },
      { term: "Receipt Printing", description: "58mm and 80mm ESC/POS thermal printing over USB, LAN or Bluetooth, with your brand on the header." },
      { term: "Offline Operation", description: "If the connection goes, billing doesn't. Everything syncs back once you're online again." },
    ],
    bestFor: "A good fit for casual dine-in restaurants, cafés and quick-service counters where a long bill queue costs you real money.",
    deepDive: [
      {
        index: "01",
        label: "BILLING",
        caption: "Short codes and one-tap categories mean the cashier's hands never leave the screen, even when the line is out the door.",
        mockup: "pos",
      },
      {
        index: "02",
        label: "TABLES & PAYMENTS",
        caption: "Each table is a running tab. When the guest asks for the bill, it's already there, and it settles in whatever way they want to pay.",
        mockup: "payment",
      },
    ],
    connectedTitle: "Works alongside your kitchen and floor",
    connected: ["kds", "tables", "captain", "qr-ordering", "analytics", "hardware"],
    workflow: [
      { label: "ORDER", href: "/products/captain" },
      { label: "POS" },
      { label: "KITCHEN (KDS)", href: "/products/kds" },
      { label: "PAYMENT" },
      { label: "INSIGHT", href: "/products/analytics" },
    ],
    faqs: [
      {
        question: "Can we split a bill between guests?",
        answer:
          "Yes. A bill can be split by item, by seat, or into equal amounts, and discounts are applied at the point of settlement.",
      },
      {
        question: "What happens to billing if the internet goes down?",
        answer:
          "Nothing changes at the counter. Orders, KOTs and bills keep working on the device, and they sync to the cloud automatically when the connection comes back.",
      },
      {
        question: "Will it work with the thermal printer we already have?",
        answer:
          "Standard 58mm and 80mm ESC/POS thermal printers work over USB, LAN or Bluetooth. Tell us your printer model when you book a demo and we'll confirm it before you commit to anything.",
      },
      {
        question: "Does it handle GST for us?",
        answer:
          "CGST and SGST are calculated on every invoice automatically, and reports can be exported for accounting and GST filing. Your accountant still files, but they stop chasing you for the numbers.",
      },
    ],
    metaTitle: "Jamanvar POS | Restaurant Billing & Order Management",
    metaDescription:
      "Jamanvar POS is fast restaurant billing software: 3-second checkouts, split billing, multi-tender payments and GST-compliant invoicing that works even offline.",
  },
  {
    slug: "kds",
    index: "02",
    category: "KITCHEN",
    name: "Jamanvar KDS",
    shortDescription: "Every ticket on the right station, the second it's punched.",
    heroLabel: "02 / KITCHEN",
    heroTitle: "KDS",
    heroDescription:
      "Every order lands on the right station the moment it's punched, with a timer that tells the chef what's about to run late, before the guest does.",
    heroMockup: "kds",
    positioningTitle: "A kitchen that always knows what's next",
    positioningParagraphs: [
      "Anyone who has worked a pass knows the sound of a kitchen losing control: a paper KOT that slid behind the counter, a captain shouting a table number over the exhaust, a chef asking \"which naan is that for?\" for the third time. Nobody is being careless. The system, paper and voices, just doesn't scale past a certain number of tables.",
      "Jamanvar KDS replaces that with a live screen. Each order is split automatically across your stations, Tandoor, Curry and Mains, Bar, and appears exactly where that food is made, in KOT order, with the table, the items and any note attached. Chefs tap an item to move it from cooking to done to dispatched, and the rest of the house can see that status too.",
      "Every ticket carries a timer that changes colour as it ages: fresh for the first ten minutes, a warning through eighteen, and an overdue flag after that. It means the person running the pass spots the slow ticket while there's still time to save it. No screen in the kitchen yet? Tickets can print on thermal printers instead, so you can start with what you have.",
    ],
    capabilityRows: [
      { term: "Live Orders", description: "A new ticket shows up on the screen the instant it's punched, with the table number and every item." },
      { term: "Queue", description: "All of a station's orders in one list, in the order they were fired, so the oldest ticket is always the one at the top." },
      { term: "Preparation Status", description: "Mark each item cooking, done or dispatched. The floor sees what's ready without asking." },
      { term: "Timers", description: "Colour-coded by age: 0 to 10 minutes, 10 to 18 minutes, and overdue beyond 18." },
      { term: "Station Routing", description: "Orders split by station on their own, so the tandoor never sees a bar ticket." },
      { term: "Kitchen Notes", description: "\"No onion or garlic (Jain)\", \"extra spicy\": notes travel with the order and can't get lost in the shouting." },
    ],
    bestFor: "A good fit for multi-station kitchens, and for any restaurant still running on handwritten KOTs.",
    deepDive: [
      {
        index: "01",
        label: "LIVE ORDERS",
        caption: "Table, items, notes and elapsed time on one card. The chef reads the ticket instead of decoding it.",
        mockup: "kds",
      },
      {
        index: "02",
        label: "QUEUE & STATUS",
        caption: "What's cooking, what's overdue and what's ready to go out, across every station, without anyone leaving the pass.",
        mockup: "kdsQueue",
      },
    ],
    connectedTitle: "Fed directly by POS and the ordering floor",
    connected: ["pos", "captain", "qr-ordering", "inventory"],
    workflow: [
      { label: "POS", href: "/products/pos" },
      { label: "KDS" },
      { label: "KITCHEN" },
    ],
    faqs: [
      {
        question: "Do we need to buy screens for the kitchen?",
        answer:
          "Not to begin with. Orders can appear on kitchen screens or print as KOTs on thermal printers. Many kitchens start with printers and move to screens when they're ready. Jamanvar also offers pre-tested KDS tablets.",
      },
      {
        question: "Can different stations see only their own items?",
        answer:
          "Yes. Orders are split automatically by station, for example Tandoor, Curry and Mains, and Bar, so each station sees only what it has to make.",
      },
      {
        question: "How do the timers work?",
        answer:
          "Each ticket is colour-coded by how long it has been open: 0 to 10 minutes, 10 to 18 minutes, and overdue past 18. The colour shifts on its own, so nobody has to watch a clock.",
      },
    ],
    metaTitle: "Jamanvar KDS | Kitchen Display System",
    metaDescription:
      "Jamanvar KDS routes every order to the right kitchen station instantly, with colour-coded prep timers so no ticket gets lost or goes overdue.",
  },
  {
    slug: "tables",
    index: "03",
    category: "FLOOR",
    name: "Table & Floor Management",
    shortDescription: "The whole floor, live, without walking it.",
    heroLabel: "03 / FLOOR",
    heroTitle: "Table & Floor Management",
    heroDescription:
      "See every table, every section and every running order in one live view, so your team stops guessing which tables are free.",
    heroMockup: "tables",
    positioningTitle: "See the whole floor without walking it",
    positioningParagraphs: [
      "On a full night, the person at the door is making a decision that depends on information they don't have. Which table is about to leave? Is the terrace table actually free, or has the previous party just not been cleared? Is a family of eight going to wait forty minutes when the tables next to each other could be joined? So the host walks the floor, and while they're walking, the door is unattended.",
      "Jamanvar puts the floor plan on a screen. Main Dining, Terrace, Family Hall and Bar Area appear together, each table coloured by its state: available, occupied, billing or reserved. Tap a table and you see its running order, how long the guests have been seated and which captain owns it.",
      "Big party? Merge tables in one tap. Guests want to move to the terrace? Transfer the running order across without re-punching a single item. The floor plan is never a separate thing to maintain. It updates from the orders and bills that are already flowing through the system.",
    ],
    capabilityRows: [
      { term: "Floor Plan", description: "Main Dining, Terrace, Family Hall and Bar Area, all in one live view." },
      { term: "Occupancy", description: "Colour-coded at a glance: available, occupied, billing, reserved." },
      { term: "Table Merge", description: "Join tables for a large party in one tap." },
      { term: "Order Transfer", description: "Move a running order between tables without re-punching or losing the tab." },
      { term: "Seated Time", description: "See exactly how long each table has been dining, so turns are managed, not guessed." },
      { term: "Server Assignment", description: "Every table shows which captain owns it, so nothing waits because everyone assumed someone else had it." },
    ],
    bestFor: "A good fit for full-service family dining, and for any restaurant with more than one section or a terrace.",
    deepDive: [
      {
        index: "01",
        label: "FLOOR PLAN",
        caption: "Every section on one screen. A glance tells you where to seat the next party.",
        mockup: "tables",
      },
      {
        index: "02",
        label: "SECTIONS",
        caption: "Capacity and status section by section, so you can see the Family Hall filling up before it fills up.",
        mockup: "tableSections",
      },
    ],
    connectedTitle: "Updated by every order and every bill",
    connected: ["pos", "captain", "kds"],
    workflow: [
      { label: "ORDER", href: "/products/captain" },
      { label: "TABLE" },
      { label: "POS", href: "/products/pos" },
    ],
    faqs: [
      {
        question: "Do we have to update the table status by hand?",
        answer:
          "Mostly no. Tables change state on their own as orders are punched and bills are settled. Reservations are the one thing you set yourself.",
      },
      {
        question: "Can we move a table's order if guests change seats?",
        answer:
          "Yes. Order Transfer moves a running order from one table to another, with every item and the running total intact.",
      },
      {
        question: "Does it handle large parties?",
        answer:
          "Tables can be merged in one tap to seat a large group under a single tab, which matters most in family dining halls and on the terrace.",
      },
    ],
    metaTitle: "Table & Floor Management | Jamanvar",
    metaDescription:
      "Live, colour-coded table and floor management for restaurants: occupancy, table merges, order transfers and seated-time tracking across every section.",
  },
  {
    slug: "inventory",
    index: "04",
    category: "OPERATIONS",
    name: "Recipe-Level Inventory",
    shortDescription: "Every plate sold takes its ingredients out of stock.",
    heroLabel: "04 / STOCK & RECIPES",
    heroTitle: "Recipe-Level Inventory",
    heroDescription:
      "Every plate you sell takes its exact ingredients out of stock. You see what's low before the kitchen runs out, and what each dish really costs to make.",
    heroMockup: "inventory",
    positioningTitle: "Catch the leak before it becomes a habit",
    positioningParagraphs: [
      "Most restaurant owners have had the same quiet suspicion: sales are good, but the margin isn't what it should be. Somewhere between the grocery invoice and the guest's plate, paneer is disappearing. It could be over-portioning, sampling, spoilage or something worse. Without a record of what should have been used, there's no way to tell.",
      "Jamanvar starts with the recipe. Each dish on your menu is mapped to its ingredients, down to the gram: so much paneer, so much butter, a pinch of kasuri methi. Every time that dish is punched, those quantities come out of your digital pantry automatically. Stock on hand is always what the system says it should be, which makes anything that doesn't add up stand out.",
      "That gives you the simple, useful things owners actually want. A warning when the mint and coriander are almost gone, well before the kitchen finds out mid-service. A place to log wastage so it stops hiding inside \"usage\". Purchase orders that go to vendors and get checked off when the goods arrive. And a food-cost percentage for each dish that stays current as your recipes and sales change.",
    ],
    capabilityRows: [
      { term: "Recipe Mapping", description: "A bill of materials for every dish, in real quantities, down to the gram." },
      { term: "Auto Deduction", description: "Stock is deducted automatically each time a KOT is punched. Nobody counts by hand." },
      { term: "Low-Stock Alerts", description: "You're warned while there's still time to reorder, not when the chef says \"we're out\"." },
      { term: "Wastage Logging", description: "Record spoilage, sampling and returns daily, so wastage is a number rather than a mystery." },
      { term: "Purchase Orders", description: "Raise vendor purchase orders and log goods received against them." },
      { term: "Food Cost", description: "The cost and margin percentage of each dish, calculated live from your recipes." },
    ],
    bestFor: "A good fit for kitchens that already cost their recipes, and for owners whose food-cost margin has been creeping up.",
    deepDive: [
      {
        index: "01",
        label: "STOCK LEVELS",
        caption: "Each punched KOT draws its recipe quantities out of the pantry, so the numbers on screen match what's on the shelf.",
        mockup: "inventory",
      },
      {
        index: "02",
        label: "FOOD COST",
        caption: "Margin is tracked continuously instead of being worked out once a month, when it's too late to change the menu.",
        mockup: "analytics",
      },
    ],
    connectedTitle: "Deducted automatically from every POS sale",
    connected: ["pos", "analytics"],
    workflow: [
      { label: "POS", href: "/products/pos" },
      { label: "RECIPE DEDUCTION" },
      { label: "STOCK ALERTS" },
    ],
    faqs: [
      {
        question: "Do we have to enter every recipe before we can use it?",
        answer:
          "Recipe-level tracking works from your recipes, so the more complete they are, the more precise your numbers. Starting with your top-selling dishes is a sensible way to get value early, and you can add the rest as you go.",
      },
      {
        question: "How does stock get deducted?",
        answer:
          "Each time a KOT is punched, the recipe quantities for those dishes are deducted from your stock. You don't count anything by hand for day-to-day tracking.",
      },
      {
        question: "Can we track wastage separately from sales?",
        answer:
          "Yes. Spoilage, sampling and returns are logged as wastage, separate from what was sold, so you can see how much is going to waste rather than folding it into usage.",
      },
    ],
    metaTitle: "Recipe-Level Inventory | Jamanvar",
    metaDescription:
      "Recipe-level inventory for restaurants: automatic stock deduction on every sale, low-stock alerts, wastage logging, purchase orders and live food cost.",
  },
  {
    slug: "analytics",
    index: "05",
    category: "OPERATIONS",
    name: "Analytics & Insights",
    shortDescription: "Every order tells you something.",
    heroLabel: "05 / OWNER INTELLIGENCE",
    heroTitle: "Analytics & Insights",
    heroDescription:
      "Every order tells you something. See revenue, best sellers, food cost and settlement on your phone as service happens, not after the accountant's monthly review.",
    heroMockup: "analytics",
    positioningTitle: "Close the day without opening a spreadsheet",
    positioningParagraphs: [
      "For most owners, the end of the day is its own shift. Cash gets counted, UPI screenshots get matched against the register, the day's bills get tallied against what the cashier says, and by the time it's all done you're too tired to actually look at what the numbers mean. The real picture arrives a month later, from the accountant, when nothing can be changed.",
      "Jamanvar treats every settled bill as data and shows it to you as it happens. Revenue, orders and table occupancy update live on your phone, tablet or laptop. Cash, UPI and card settlements are reconciled automatically, so the end-of-day summary is already there when service ends.",
      "Then it goes further than the total. Which hours are truly your peak, and are you staffed for them? Which dishes sell the most, and which of those make you the most money once food cost is counted? Which guests keep coming back? These are the questions that change how you run a restaurant, and here the answers are on the same screen as the sales.",
    ],
    capabilityRows: [
      { term: "Live Revenue", description: "Net sales, orders and occupancy on mobile, tablet or desktop, updated as bills settle." },
      { term: "Peak Hours", description: "Sales speed and table occupancy by the hour, so you can staff for the rush you actually have." },
      { term: "Item Profitability", description: "Food-cost ratio and margin for every dish, not just how many sold." },
      { term: "Reconciliation", description: "Cash, UPI and card settlements matched automatically at the end of service." },
      { term: "Reports", description: "Exportable for your accountant and for GST filing." },
      { term: "Guest Insight", description: "Loyalty and repeat-visit data in the same view, so you know who your regulars are." },
    ],
    bestFor: "A good fit for owners who want to know how the day went without being in the building, or standing at the register when it ends.",
    deepDive: [
      {
        index: "01",
        label: "REVENUE",
        caption: "Sales, orders and occupancy move on screen while the restaurant is still full.",
        mockup: "analytics",
      },
      {
        index: "02",
        label: "GUEST INSIGHT",
        caption: "Loyalty and repeat visits sit beside revenue, so you can see which regulars are worth a thank-you.",
        mockup: "customers",
      },
    ],
    connectedTitle: "Built from every POS sale and stock movement",
    connected: ["pos", "inventory"],
    workflow: [
      { label: "POS", href: "/products/pos" },
      { label: "SETTLEMENT" },
      { label: "LIVE DASHBOARD" },
    ],
    faqs: [
      {
        question: "Can I check the numbers from my phone?",
        answer:
          "Yes. The dashboard works on mobile, tablet and desktop, and it updates live from every settled bill, so you can check in from anywhere.",
      },
      {
        question: "Does it replace my accountant's reports?",
        answer:
          "No, it makes their job easier. Reports export cleanly for accounting and GST filing, and cash, UPI and card are already reconciled, so there's much less to untangle.",
      },
      {
        question: "Will I see profit or just sales?",
        answer:
          "Both. Because Jamanvar links dishes to recipes, food-cost ratio and margin appear per dish next to the sales figures, so you can see which best sellers actually earn their place.",
      },
    ],
    metaTitle: "Analytics & Insights | Jamanvar",
    metaDescription:
      "Live restaurant analytics: revenue dashboards, peak-hour tracking, item profitability and automatic end-of-day reconciliation, without manual spreadsheets.",
  },
  {
    slug: "hardware",
    index: "06",
    category: "RELIABILITY",
    name: "Offline & Hardware",
    shortDescription: "Keeps running when the internet doesn't.",
    heroLabel: "06 / RESILIENCE",
    heroTitle: "Offline & Hardware",
    heroDescription:
      "Your internet will drop at some point, probably on a Friday night. Jamanvar keeps billing, printing and kitchen routing going, and works with hardware you already own.",
    heroMockup: "hardware",
    positioningTitle: "Service doesn't stop when the internet does",
    positioningParagraphs: [
      "If you've run a restaurant in India, you know the feeling: the router blinks, the cloud billing screen spins, and you have a full house and a queue of guests holding their cards. Software that needs a perfect connection to take an order is software that will fail you at exactly the wrong time.",
      "Jamanvar is built to work offline first. Orders, KOTs and bills are handled on the device in front of you, and kitchen routing carries on locally. When the connection comes back, everything syncs to the cloud in both directions on its own. Nobody has to re-enter anything, and no bill goes missing.",
      "The other worry is hardware. Nobody wants to replace working terminals just to change software. Jamanvar runs on standard ESC/POS printers and on Windows, Android and iPad devices, so what you own probably works. If you'd rather start fresh, there are pre-tested kits with POS terminals, thermal printers, KDS tablets and captain handhelds that come ready to plug in.",
    ],
    capabilityRows: [
      { term: "Offline Billing", description: "Orders, KOTs and bills keep working with no internet connection at all." },
      { term: "Auto Sync", description: "When connectivity returns, data syncs to the cloud in both directions without anyone touching it." },
      { term: "Broad Compatibility", description: "Standard ESC/POS printers, and Windows, Android and iPad devices." },
      { term: "Hardware Kits", description: "Pre-tested POS terminals, thermal printers, KDS tablets and captain handhelds, ready to use." },
    ],
    bestFor: "A good fit for restaurants where the connection is unreliable, and for owners who'd rather keep the terminals and printers they already have.",
    deepDive: [
      {
        index: "01",
        label: "OFFLINE MODE",
        caption: "Billing and KOTs carry on locally, and everything syncs back once the connection returns.",
        mockup: "hardware",
      },
      {
        index: "02",
        label: "HARDWARE KITS",
        caption: "Tested terminals, printers and tablets that come ready to use, for owners who'd rather not source parts one by one.",
        mockup: "kds",
      },
    ],
    connectedTitle: "Runs underneath POS and KDS",
    connected: ["pos", "kds"],
    workflow: [
      { label: "LOCAL DEVICE" },
      { label: "OFFLINE OPERATION" },
      { label: "CLOUD SYNC" },
    ],
    faqs: [
      {
        question: "Can we use the printers and devices we already have?",
        answer:
          "In most cases, yes. Jamanvar supports standard ESC/POS printers and runs on Windows, Android and iPad. Share your device list when you book a demo and we'll confirm what works.",
      },
      {
        question: "What exactly keeps working when the internet goes down?",
        answer:
          "Billing, KOT printing and kitchen routing all continue locally. Cloud-only features, like the owner's live dashboard on your phone, catch up as soon as you're back online.",
      },
      {
        question: "Do we have to buy hardware from you?",
        answer:
          "No. Hardware kits are there for owners who want tested, ready-to-run equipment, but the software works on standard devices you may already own.",
      },
    ],
    metaTitle: "Offline & Hardware | Jamanvar",
    metaDescription:
      "Offline-first restaurant software that keeps billing and kitchen routing running without internet, plus tested POS hardware kits and broad printer compatibility.",
  },
  {
    slug: "captain",
    index: "07",
    category: "ORDERING",
    name: "Captain Ordering",
    shortDescription: "Orders taken at the table, fired to the kitchen in a tap.",
    heroLabel: "07 / STAFF ORDERING",
    heroTitle: "Captain Ordering",
    heroDescription:
      "Your captains take the order at the table on a handheld and fire it to the kitchen in one tap. No paper slips, and no walk back to the terminal.",
    heroMockup: "captainOrdering",
    positioningTitle: "The order goes to the kitchen, not into a pocket",
    positioningParagraphs: [
      "The old way has a lot of steps where things can go wrong. A captain scribbles an order, walks it to the counter, someone punches it in, and someone else carries the slip to the kitchen. Between the guest's words and the chef's ticket, a \"no chilli\" can get lost or an extra naan can be forgotten. The guest waits, and never knows why.",
      "With Captain Ordering, the captain has an Android handheld and takes the order right at the table. Items, seat numbers and kitchen notes go in on the spot. One tap on confirm, and the KOT fires: straight to the right station, straight into the live bill. The whole order takes under fifteen seconds to punch.",
      "It suits a busy floor, too. Captains can move from table to table without losing an order that's half-entered, so a summons from another guest doesn't mean starting over. The handhelds are built for the job, with all-day battery and a drop-proof casing, because a device that dies at eight o'clock helps nobody.",
    ],
    capabilityRows: [
      { term: "Table-Side Handheld", description: "The full order is punched on an Android handheld without leaving the guest's table." },
      { term: "1-Tap KOT Firing", description: "Confirm the order and it goes straight to the kitchen, with no trip to a terminal." },
      { term: "Modifier Notes", description: "Kitchen notes like \"less spicy\" or \"no onion\" are captured live and travel with the order." },
      { term: "Instant Switching", description: "Jump between tables without losing an order that's still being entered." },
      { term: "Durable Hardware", description: "All-day battery and a drop-proof casing, made for a busy floor." },
    ],
    bestFor: "A good fit for full-service dine-in and fine dining, where attentive table service matters and every order needs an owner.",
    deepDive: [
      {
        index: "01",
        label: "TABLE-SIDE HANDHELD",
        caption: "The captain takes the whole order and fires the KOT with one tap, standing next to the guest instead of walking away from them.",
        mockup: "captainOrdering",
      },
    ],
    connectedTitle: "Feeds straight into POS and the kitchen",
    connected: ["pos", "kds", "tables"],
    workflow: [
      { label: "TABLE" },
      { label: "CAPTAIN" },
      { label: "ORDER" },
      { label: "POS", href: "/products/pos" },
      { label: "KITCHEN", href: "/products/kds" },
    ],
    faqs: [
      {
        question: "What devices do captains use?",
        answer:
          "Android handhelds. Jamanvar offers durable ones with all-day battery and drop-proof casing, and they're included in the hardware kits. Ask us in the demo about using devices you already have.",
      },
      {
        question: "What happens between the captain's tap and the kitchen?",
        answer:
          "Nothing waits. The KOT goes to the right station on screen or thermal printer, and the items land on the table's live bill in POS at the same moment.",
      },
      {
        question: "Can guests still order from their phones too?",
        answer:
          "Yes. QR Ordering feeds into the same live order flow, so captains and guests can both order at the same table and the kitchen sees one queue.",
      },
    ],
    metaTitle: "Captain Ordering | Jamanvar",
    metaDescription:
      "Table-side captain ordering for restaurants: Android handhelds that fire orders straight to the kitchen in under 15 seconds, with no paper slips.",
  },
  {
    slug: "qr-ordering",
    index: "08",
    category: "ORDERING",
    name: "QR Ordering",
    shortDescription: "Guests scan, browse and order from their own phone.",
    heroLabel: "08 / DIGITAL ORDERING",
    heroTitle: "QR Ordering",
    heroDescription:
      "Guests scan the QR code on their table and order from their own phone. The order lands in the same live queue as your captains' orders.",
    heroMockup: "qrOrdering",
    positioningTitle: "Turn every table into an ordering point",
    positioningParagraphs: [
      "There's a moment in every restaurant when the guests are ready to order and the captain is on the other side of the room. They wave, they wait, they catch someone's eye, and by the time the order is taken, the mood has cooled a little. That gap, between being ready and being served, is where guests get impatient.",
      "QR Ordering closes it. Each table has a QR code. A guest scans it, browses the menu on their phone at their own pace, and places the order themselves. It doesn't go to a separate system that someone has to check. It joins the same live queue that captain orders use, reaching the kitchen and the table's bill at the same moment.",
      "It doesn't replace your captains. It lets them spend their time on the guests who want service, and lets the ones who'd rather order in peace do exactly that. Whether an order comes from a captain's handheld or a guest's phone, the kitchen sees one queue and there's no lag between the table and the pass.",
    ],
    capabilityRows: [
      { term: "Guest Self-Order", description: "Scan the table's QR code and order without waiting for a captain to come over." },
      { term: "Same Order Flow", description: "Items and notes enter the same live queue as captain orders. Nothing extra to monitor." },
      { term: "Zero Lag", description: "The order reaches the kitchen the moment it's placed. No communication gap between the table and the pass." },
    ],
    bestFor: "A good fit for casual dine-in restaurants and cafés, and for high-turnover quick-service tables where speed is the whole point.",
    deepDive: [
      {
        index: "01",
        label: "GUEST SELF-ORDER",
        caption: "The guest orders on their own phone, and it shows up on your floor and in the kitchen straight away.",
        mockup: "qrOrdering",
      },
    ],
    connectedTitle: "Guest-initiated, same kitchen pipeline",
    connected: ["pos", "kds", "tables"],
    workflow: [
      { label: "SCAN" },
      { label: "BROWSE" },
      { label: "ORDER" },
      { label: "POS", href: "/products/pos" },
      { label: "KDS", href: "/products/kds" },
    ],
    faqs: [
      {
        question: "Does this mean we need fewer captains?",
        answer:
          "It changes what captains spend their time on. Guests who want to order quickly can, and the captains you have get to focus on service. How you staff around that is your call.",
      },
      {
        question: "Where do QR orders show up in the kitchen?",
        answer:
          "In the same queue as every other order. The kitchen doesn't have to watch a separate screen or learn a different flow.",
      },
      {
        question: "Can captains and guests order at the same table?",
        answer:
          "Yes. Both feed the same live order for that table, so the running bill and the kitchen queue stay accurate.",
      },
    ],
    metaTitle: "QR Ordering | Jamanvar",
    metaDescription:
      "QR table ordering for restaurants: guests scan a table's QR code and order from their phone, straight into the same kitchen queue as captain orders.",
  },
  {
    slug: "kiosk",
    index: "09",
    category: "ORDERING",
    name: "Self-Ordering Kiosk",
    shortDescription: "Guests order and pay at a touchscreen.",
    heroLabel: "09 / SELF-ORDERING",
    heroTitle: "Self-Ordering Kiosk",
    heroDescription:
      "A touchscreen where guests choose dine-in or takeaway, browse your menu, customise dishes and pick a combo, then pay by UPI or at the counter. The order goes to the kitchen and the guest gets a token number.",
    heroMockup: "kiosk",
    positioningTitle: "Let the queue order itself",
    positioningParagraphs: [
      "At lunchtime in a busy café or food court, the queue is made of people who already know what they want. They wait to say it to the one person at the counter, who is also taking payments, answering questions and calling out ready orders.",
      "The Jamanvar kiosk gives those guests their own screen. They pick a language, choose dine-in or takeaway, browse the menu by category or search it, add options to a dish, and see the combo deals you've set up. They pay by scanning a UPI QR on the screen, or choose to pay at the counter.",
      "Every order gets a token number and goes to the kitchen, and the receipt can be printed or sent to the guest by email or WhatsApp. If the internet drops, the kiosk keeps taking orders, switches payment to the counter, and syncs once the connection is back.",
    ],
    capabilityRows: [
      { term: "Order type", description: "Guests choose dine-in or takeaway. Each kiosk can offer both or just one." },
      { term: "Languages", description: "Offer more than one display language and let the guest pick at the start." },
      { term: "Tables", description: "Dine-in guests can pick their table, or a kiosk can be tied to a default table." },
      { term: "Menu & search", description: "Browse by category with photos, or search with the on-screen keyboard." },
      { term: "Customisation", description: "Dish options and modifiers, chosen on screen before the item goes in the cart." },
      { term: "Combos", description: "Combo deals you've set up are suggested while the guest orders." },
      { term: "Payment", description: "Pay by UPI QR on the kiosk, or choose to pay at the counter." },
      { term: "Token & receipt", description: "Each order gets a token number. Receipts print, or go to the guest by email or WhatsApp." },
      { term: "Offline", description: "Orders are still taken and saved without internet, with payment at the counter, and sync when you're back online." },
    ],
    bestFor: "A good fit for cafés, quick-service counters and food courts, where most guests already know what they want.",
    deepDive: [],
    connectedTitle: "Orders go straight to your kitchen",
    connected: ["kds", "pos", "hardware"],
    workflow: [
      { label: "KIOSK" },
      { label: "PAYMENT" },
      { label: "KITCHEN (KDS)", href: "/products/kds" },
      { label: "TOKEN" },
    ],
    faqs: [
      {
        question: "Can guests pay at the kiosk?",
        answer:
          "Yes, by scanning a UPI QR shown on the kiosk screen. Guests can also choose to pay at the counter instead, and payment switches to the counter automatically if the kiosk is offline.",
      },
      {
        question: "Does the kiosk work for both dine-in and takeaway?",
        answer:
          "Yes. Each kiosk can offer dine-in, takeaway or both. Dine-in guests can pick their table, or you can tie a kiosk to a default table.",
      },
      {
        question: "What happens if the internet goes down?",
        answer:
          "The kiosk keeps taking orders and saves them, with payment at the counter, then syncs once the connection is back.",
      },
      {
        question: "What hardware does it run on?",
        answer:
          "The kiosk is a Windows desktop app that runs full-screen on a touchscreen. Tell us about your screen and receipt printer when you book a demo and we'll confirm what works.",
      },
    ],
    metaTitle: "Self-Ordering Kiosk | Jamanvar",
    metaDescription:
      "A self-ordering touchscreen kiosk for restaurants: dine-in or takeaway, modifiers and combos, UPI QR or pay-at-counter, token numbers and receipts by print, email or WhatsApp.",
  },
  {
    slug: "whatsapp-ordering",
    index: "10",
    category: "ORDERING",
    name: "WhatsApp Ordering",
    shortDescription: "Takeaway and delivery orders, right inside WhatsApp.",
    heroLabel: "10 / WHATSAPP ORDERING",
    heroTitle: "WhatsApp Ordering",
    heroDescription:
      "Customers message your restaurant's WhatsApp number, browse your menu, build a cart and choose pickup or home delivery, then pay with a secure link. No app to install and no website to visit.",
    heroMockup: "whatsapp",
    positioningTitle: "Take orders where your customers already are",
    positioningParagraphs: [
      "Customers already message restaurants on WhatsApp to ask what's on the menu or place a takeaway order. Jamanvar turns that chat into a proper ordering journey with a menu, a cart and an online payment.",
    ],
    capabilityRows: [
      { term: "Menu in chat", description: "Product cards with photo, price and an Add to cart button, or a swipe-able carousel once Meta approves it." },
      { term: "Cart", description: "Change quantities, edit the cart, and see the total before checkout." },
      { term: "Pickup or delivery", description: "Share a delivery address or WhatsApp location, or skip it to collect the order." },
      { term: "Payment", description: "An online payment link in the chat. The kitchen sees the order once payment is confirmed." },
      { term: "Status updates", description: "Customers are told when the order is accepted, being prepared and ready." },
    ],
    bestFor: "A good fit for restaurants with regular takeaway and delivery customers who already reach them on WhatsApp.",
    deepDive: [],
    connectedTitle: "Connected to the rest of Jamanvar",
    connected: ["pos", "kds", "qr-ordering"],
    workflow: [
      { label: "WHATSAPP" },
      { label: "PAYMENT" },
      { label: "POS", href: "/products/pos" },
      { label: "KDS", href: "/products/kds" },
    ],
    faqs: [],
    metaTitle: "WhatsApp Ordering for Restaurants | Jamanvar",
    metaDescription:
      "Let customers order takeaway and home delivery on WhatsApp: menu cards, a cart, delivery address or pickup, an online payment link and status updates, connected to Jamanvar POS and KDS.",
  },
];

export const PRODUCT_ORDER = [
  "captain",
  "qr-ordering",
  "kiosk",
  "whatsapp-ordering",
  "pos",
  "kds",
  "tables",
  "inventory",
  "analytics",
  "hardware",
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
