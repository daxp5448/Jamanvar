import sharp from "sharp";
import fs from "fs";
import path from "path";

async function createBrandedAssets() {
  const logoPath = path.resolve("public/images/jamanvar/logo.jpg");
  const logoBuffer = fs.readFileSync(logoPath);
  
  // Resize logo for badges
  const logoSmall = await sharp(logoBuffer)
    .resize(160, 160, { fit: "contain", background: { r: 250, g: 247, b: 240, alpha: 1 } })
    .png()
    .toBuffer();

  const logoSmallBase64 = `data:image/png;base64,${logoSmall.toString("base64")}`;

  // 1. Create Branded POS Screen (public/images/jamanvar/trail/pos.jpg)
  const posSvg = `
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#050B16"/>
          <stop offset="100%" stop-color="#091528"/>
        </linearGradient>
        <linearGradient id="saffronGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#E88515"/>
          <stop offset="100%" stop-color="#F5A723"/>
        </linearGradient>
      </defs>

      <!-- Main Background -->
      <rect width="800" height="600" fill="url(#bgGrad)"/>
      
      <!-- Top Titlebar -->
      <rect width="800" height="70" fill="#0D1C30"/>
      <line x1="0" y1="70" x2="800" y2="70" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
      
      <!-- Logo image in header -->
      <image href="${logoSmallBase64}" x="25" y="10" width="50" height="50"/>

      <text x="88" y="38" font-family="Arial, sans-serif" font-size="20" font-weight="900" fill="#FFFFFF" letter-spacing="1">JAMANVAR POS</text>
      <text x="88" y="55" font-family="Arial, sans-serif" font-size="11" font-weight="600" fill="#E88515" letter-spacing="2">BY KELVIONTECH • TERMINAL 01</text>

      <!-- Status Pill -->
      <rect x="620" y="20" width="155" height="30" rx="8" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.3)" stroke-width="1"/>
      <circle cx="638" cy="35" r="5" fill="#22C55E"/>
      <text x="652" y="40" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="#4ADE80">CLOUD SYNC LIVE</text>

      <!-- Metrics Row -->
      <rect x="25" y="90" width="175" height="75" rx="12" fill="#0D1C30" stroke="rgba(255,255,255,0.08)"/>
      <text x="40" y="112" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="rgba(255,255,255,0.5)">TODAY'S REVENUE</text>
      <text x="40" y="145" font-family="Arial, sans-serif" font-size="22" font-weight="900" fill="#FFFFFF">₹48,250</text>
      <text x="145" y="145" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="#4ADE80">+18%</text>

      <rect x="215" y="90" width="175" height="75" rx="12" fill="#0D1C30" stroke="rgba(255,255,255,0.08)"/>
      <text x="230" y="112" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="rgba(255,255,255,0.5)">ORDERS SETTLED</text>
      <text x="230" y="145" font-family="Arial, sans-serif" font-size="22" font-weight="900" fill="#FFFFFF">127</text>

      <rect x="405" y="90" width="175" height="75" rx="12" fill="#0D1C30" stroke="rgba(255,255,255,0.08)"/>
      <text x="420" y="112" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="rgba(255,255,255,0.5)">TABLE OCCUPANCY</text>
      <text x="420" y="145" font-family="Arial, sans-serif" font-size="22" font-weight="900" fill="#F5A723">34 / 42</text>
      <text x="510" y="145" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="#F5A723">81%</text>

      <rect x="595" y="90" width="180" height="75" rx="12" fill="#0D1C30" stroke="rgba(255,255,255,0.08)"/>
      <text x="610" y="112" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="rgba(255,255,255,0.5)">AVERAGE TICKET</text>
      <text x="610" y="145" font-family="Arial, sans-serif" font-size="22" font-weight="900" fill="#FFFFFF">₹842</text>

      <!-- Left Touch Menu Area -->
      <rect x="25" y="180" width="460" height="395" rx="16" fill="#091528" stroke="rgba(255,255,255,0.08)"/>
      <text x="45" y="212" font-family="Arial, sans-serif" font-size="14" font-weight="800" fill="#FFFFFF">TOUCH MENU ITEMS</text>
      <text x="45" y="228" font-family="Arial, sans-serif" font-size="11" fill="rgba(255,255,255,0.5)">Fast billing grid for high dining rush</text>

      <!-- Menu Item Grid -->
      <rect x="45" y="245" width="135" height="95" rx="10" fill="#0D1C30" stroke="#E88515"/>
      <circle cx="62" cy="265" r="4" fill="#22C55E"/>
      <text x="75" y="268" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#4ADE80">VEG</text>
      <text x="60" y="295" font-family="Arial, sans-serif" font-size="12" font-weight="800" fill="#FFFFFF">Paneer Tikka</text>
      <text x="60" y="325" font-family="Arial, sans-serif" font-size="14" font-weight="900" fill="#F5A723">₹340</text>

      <rect x="190" y="245" width="135" height="95" rx="10" fill="#0D1C30" stroke="rgba(255,255,255,0.1)"/>
      <circle cx="207" cy="265" r="4" fill="#22C55E"/>
      <text x="220" y="268" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#4ADE80">VEG</text>
      <text x="205" y="295" font-family="Arial, sans-serif" font-size="12" font-weight="800" fill="#FFFFFF">Butter Naan</text>
      <text x="205" y="325" font-family="Arial, sans-serif" font-size="14" font-weight="900" fill="#F5A723">₹80</text>

      <rect x="335" y="245" width="135" height="95" rx="10" fill="#0D1C30" stroke="rgba(255,255,255,0.1)"/>
      <circle cx="352" cy="265" r="4" fill="#22C55E"/>
      <text x="365" y="268" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#4ADE80">VEG</text>
      <text x="350" y="295" font-family="Arial, sans-serif" font-size="12" font-weight="800" fill="#FFFFFF">Dal Makhani</text>
      <text x="350" y="325" font-family="Arial, sans-serif" font-size="14" font-weight="900" fill="#F5A723">₹300</text>

      <rect x="45" y="355" width="135" height="95" rx="10" fill="#0D1C30" stroke="rgba(255,255,255,0.1)"/>
      <circle cx="62" cy="375" r="4" fill="#22C55E"/>
      <text x="75" y="378" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#4ADE80">VEG</text>
      <text x="60" y="405" font-family="Arial, sans-serif" font-size="12" font-weight="800" fill="#FFFFFF">Masala Chaas</text>
      <text x="60" y="435" font-family="Arial, sans-serif" font-size="14" font-weight="900" fill="#F5A723">₹90</text>

      <rect x="190" y="355" width="135" height="95" rx="10" fill="#0D1C30" stroke="rgba(255,255,255,0.1)"/>
      <circle cx="207" cy="375" r="4" fill="#22C55E"/>
      <text x="220" y="378" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#4ADE80">VEG</text>
      <text x="205" y="405" font-family="Arial, sans-serif" font-size="12" font-weight="800" fill="#FFFFFF">Veg Biryani</text>
      <text x="205" y="435" font-family="Arial, sans-serif" font-size="14" font-weight="900" fill="#F5A723">₹390</text>

      <rect x="335" y="355" width="135" height="95" rx="10" fill="#0D1C30" stroke="rgba(255,255,255,0.1)"/>
      <circle cx="352" cy="375" r="4" fill="#22C55E"/>
      <text x="365" y="378" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#4ADE80">VEG</text>
      <text x="350" y="405" font-family="Arial, sans-serif" font-size="12" font-weight="800" fill="#FFFFFF">Gulab Jamun</text>
      <text x="350" y="435" font-family="Arial, sans-serif" font-size="14" font-weight="900" fill="#F5A723">₹180</text>

      <rect x="45" y="465" width="425" height="90" rx="10" fill="#0D1C30" stroke="rgba(255,255,255,0.06)"/>
      <text x="65" y="495" font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF">⚡ KDS Kitchen Station Active</text>
      <text x="65" y="520" font-family="Arial, sans-serif" font-size="11" fill="rgba(255,255,255,0.6)">KOT #148 • 3 items routing to Tandoor &amp; Curry Pass</text>
      <text x="65" y="540" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="#4ADE80">Average cook turnaround: 8.4 mins</text>

      <!-- Right Active Bill Panel -->
      <rect x="500" y="180" width="275" height="395" rx="16" fill="#0D1C30" stroke="rgba(255,255,255,0.1)"/>
      
      <rect x="520" y="200" width="36" height="36" rx="8" fill="#E88515"/>
      <text x="530" y="224" font-family="Arial, sans-serif" font-size="14" font-weight="900" fill="#FFFFFF">07</text>
      
      <text x="568" y="216" font-family="Arial, sans-serif" font-size="14" font-weight="800" fill="#FFFFFF">Table 07 (Terrace)</text>
      <text x="568" y="232" font-family="Arial, sans-serif" font-size="10" fill="rgba(255,255,255,0.5)">Captain: Amit P. • 4 Guests</text>

      <line x1="520" y1="248" x2="755" y2="248" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>

      <!-- Bill Items -->
      <text x="520" y="275" font-family="Arial, sans-serif" font-size="11" font-weight="600" fill="#FFFFFF">2 × Paneer Tikka</text>
      <text x="710" y="275" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="#FFFFFF">₹680</text>

      <text x="520" y="302" font-family="Arial, sans-serif" font-size="11" font-weight="600" fill="#FFFFFF">1 × Butter Naan</text>
      <text x="718" y="302" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="#FFFFFF">₹80</text>

      <text x="520" y="329" font-family="Arial, sans-serif" font-size="11" font-weight="600" fill="#FFFFFF">1 × Dal Makhani</text>
      <text x="710" y="329" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="#FFFFFF">₹300</text>

      <text x="520" y="356" font-family="Arial, sans-serif" font-size="11" font-weight="600" fill="#FFFFFF">2 × Masala Chaas</text>
      <text x="710" y="356" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="#FFFFFF">₹180</text>

      <line x1="520" y1="375" x2="755" y2="375" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>

      <text x="520" y="398" font-family="Arial, sans-serif" font-size="11" fill="rgba(255,255,255,0.6)">Subtotal</text>
      <text x="705" y="398" font-family="Arial, sans-serif" font-size="11" fill="rgba(255,255,255,0.6)">₹1,240</text>

      <text x="520" y="420" font-family="Arial, sans-serif" font-size="11" fill="rgba(255,255,255,0.6)">GST (5.0%)</text>
      <text x="725" y="420" font-family="Arial, sans-serif" font-size="11" fill="rgba(255,255,255,0.6)">₹62</text>

      <line x1="520" y1="435" x2="755" y2="435" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>

      <text x="520" y="465" font-family="Arial, sans-serif" font-size="14" font-weight="800" fill="#FFFFFF">Total Bill</text>
      <text x="675" y="465" font-family="Arial, sans-serif" font-size="20" font-weight="900" fill="#F5A723">₹1,302</text>

      <!-- Pay Button -->
      <rect x="520" y="495" width="235" height="48" rx="12" fill="url(#saffronGrad)"/>
      <text x="585" y="525" font-family="Arial, sans-serif" font-size="14" font-weight="800" fill="#FFFFFF">SETTLE &amp; PAY ₹1,302</text>
    </svg>
  `;

  await sharp(Buffer.from(posSvg)).jpeg({ quality: 95 }).toFile("public/images/jamanvar/trail/pos.jpg");

  // 2. Create Branded Receipt (public/images/jamanvar/trail/receipt.jpg)
  const receiptSvg = `
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="slateBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0B1523"/>
          <stop offset="100%" stop-color="#14243B"/>
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="800" height="600" fill="url(#slateBg)"/>

      <!-- Receipt Paper -->
      <rect x="220" y="25" width="360" height="550" rx="12" fill="#FAF7F0" filter="drop-shadow(0 15px 35px rgba(0,0,0,0.6))"/>
      
      <!-- Top Receipt Header with Jamanvar Logo -->
      <image href="${logoSmallBase64}" x="345" y="45" width="110" height="80"/>

      <text x="400" y="145" font-family="'Courier New', monospace" font-size="16" font-weight="900" fill="#091528" text-anchor="middle" letter-spacing="1">JAMANVAR RESTAURANT</text>
      <text x="400" y="162" font-family="'Courier New', monospace" font-size="10" font-weight="600" fill="#666" text-anchor="middle">S.G. HIGHWAY, AHMEDABAD • GSTIN: 24AAACJ1234F1Z5</text>
      <text x="400" y="177" font-family="'Courier New', monospace" font-size="10" fill="#777" text-anchor="middle">---------------------------------------------</text>

      <text x="250" y="195" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="#091528">TABLE: T-07 (TERRACE)</text>
      <text x="450" y="195" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="#091528">BILL: #JAM-8942</text>
      <text x="250" y="210" font-family="'Courier New', monospace" font-size="10" fill="#555">CAPTAIN: AMIT P.</text>
      <text x="450" y="210" font-family="'Courier New', monospace" font-size="10" fill="#555">TIME: 20:18:44 IST</text>

      <text x="400" y="225" font-family="'Courier New', monospace" font-size="10" fill="#777" text-anchor="middle">---------------------------------------------</text>

      <!-- Items List -->
      <text x="250" y="245" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="#091528">2 x PANEER TIKKA ANGARA</text>
      <text x="515" y="245" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="#091528">₹680.00</text>

      <text x="250" y="270" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="#091528">1 x BUTTER NAAN</text>
      <text x="515" y="270" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="#091528">₹80.00</text>

      <text x="250" y="295" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="#091528">1 x DAL MAKHANI HANDI</text>
      <text x="515" y="295" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="#091528">₹300.00</text>

      <text x="250" y="320" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="#091528">2 x MASALA CHAAS (SMOKED)</text>
      <text x="515" y="320" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="#091528">₹180.00</text>

      <text x="400" y="340" font-family="'Courier New', monospace" font-size="10" fill="#777" text-anchor="middle">---------------------------------------------</text>

      <text x="250" y="360" font-family="'Courier New', monospace" font-size="11" fill="#444">SUBTOTAL (ITEMS)</text>
      <text x="500" y="360" font-family="'Courier New', monospace" font-size="11" fill="#444">₹1,240.00</text>

      <text x="250" y="380" font-family="'Courier New', monospace" font-size="11" fill="#444">CGST @ 2.5%</text>
      <text x="515" y="380" font-family="'Courier New', monospace" font-size="11" fill="#444">₹31.00</text>

      <text x="250" y="400" font-family="'Courier New', monospace" font-size="11" fill="#444">SGST @ 2.5%</text>
      <text x="515" y="400" font-family="'Courier New', monospace" font-size="11" fill="#444">₹31.00</text>

      <text x="400" y="420" font-family="'Courier New', monospace" font-size="10" fill="#777" text-anchor="middle">=============================================</text>

      <text x="250" y="445" font-family="'Courier New', monospace" font-size="15" font-weight="900" fill="#091528">GRAND TOTAL</text>
      <text x="475" y="445" font-family="'Courier New', monospace" font-size="16" font-weight="900" fill="#E88515">₹1,302.00</text>

      <text x="400" y="465" font-family="'Courier New', monospace" font-size="10" fill="#777" text-anchor="middle">=============================================</text>

      <!-- UPI QR Code placeholder box -->
      <rect x="360" y="475" width="80" height="50" rx="4" fill="#091528"/>
      <text x="400" y="495" font-family="'Courier New', monospace" font-size="8" font-weight="700" fill="#F5A723" text-anchor="middle">SCAN UPI QR</text>
      <text x="400" y="510" font-family="'Courier New', monospace" font-size="8" fill="#FFF" text-anchor="middle">GPay • PhonePe • Paytm</text>

      <text x="400" y="545" font-family="'Courier New', monospace" font-size="9" font-weight="700" fill="#091528" text-anchor="middle">POWERED BY JAMANVAR POS • KELVIONTECH</text>
      <text x="400" y="560" font-family="'Courier New', monospace" font-size="8" fill="#666" text-anchor="middle">“સુવિધા સાથે, સ્વાદિષ્ટ વ્યવસાય.”</text>
    </svg>
  `;

  await sharp(Buffer.from(receiptSvg)).jpeg({ quality: 95 }).toFile("public/images/jamanvar/trail/receipt.jpg");

  // 3. Create Branded Analytics Tablet (public/images/jamanvar/trail/analytics.jpg)
  const analyticsSvg = `
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="anGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#050B16"/>
          <stop offset="100%" stop-color="#0E1E34"/>
        </linearGradient>
      </defs>

      <rect width="800" height="600" fill="url(#anGrad)"/>

      <!-- Tablet Frame Header -->
      <rect x="30" y="25" width="740" height="550" rx="20" fill="#091528" stroke="rgba(255,255,255,0.12)"/>
      
      <!-- Top Titlebar -->
      <rect x="30" y="25" width="740" height="65" rx="20" fill="#0D1C30"/>
      <image href="${logoSmallBase64}" x="50" y="35" width="45" height="45"/>
      <text x="105" y="58" font-family="Arial, sans-serif" font-size="18" font-weight="900" fill="#FFFFFF">JAMANVAR LIVE ANALYTICS</text>
      <text x="105" y="75" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#E88515" letter-spacing="1">OWNER MOBILE &amp; TABLET SUITE</text>

      <rect x="620" y="42" width="130" height="30" rx="8" fill="rgba(232,133,21,0.2)"/>
      <text x="640" y="62" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="#F5A723">TODAY: LIVE</text>

      <!-- KPI 1 -->
      <rect x="55" y="110" width="210" height="110" rx="14" fill="#0D1C30" stroke="rgba(255,255,255,0.08)"/>
      <text x="75" y="138" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="rgba(255,255,255,0.5)">TODAY'S REVENUE</text>
      <text x="75" y="175" font-family="Arial, sans-serif" font-size="28" font-weight="900" fill="#FFFFFF">₹48,250</text>
      <text x="75" y="202" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="#4ADE80">+18.4% vs last week</text>

      <!-- KPI 2 -->
      <rect x="295" y="110" width="210" height="110" rx="14" fill="#0D1C30" stroke="rgba(255,255,255,0.08)"/>
      <text x="315" y="138" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="rgba(255,255,255,0.5)">ORDERS SETTLED</text>
      <text x="315" y="175" font-family="Arial, sans-serif" font-size="28" font-weight="900" fill="#FFFFFF">127</text>
      <text x="315" y="202" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="rgba(255,255,255,0.7)">98 Dine-in • 29 Takeaway</text>

      <!-- KPI 3 -->
      <rect x="535" y="110" width="210" height="110" rx="14" fill="#0D1C30" stroke="rgba(255,255,255,0.08)"/>
      <text x="555" y="138" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="rgba(255,255,255,0.5)">PEAK DINING HOUR</text>
      <text x="555" y="175" font-family="Arial, sans-serif" font-size="26" font-weight="900" fill="#F5A723">8:00 PM</text>
      <text x="555" y="202" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="#F5A723">38 tickets in 60 mins</text>

      <!-- Chart area -->
      <rect x="55" y="240" width="690" height="310" rx="16" fill="#0D1C30" stroke="rgba(255,255,255,0.08)"/>
      <text x="80" y="275" font-family="Arial, sans-serif" font-size="14" font-weight="800" fill="#FFFFFF">Hourly Restaurant Sales Curve (INR)</text>
      
      <!-- Graph Bars -->
      <rect x="90" y="440" width="35" height="50" rx="4" fill="rgba(255,255,255,0.2)"/>
      <text x="96" y="510" font-family="Arial, sans-serif" font-size="9" fill="rgba(255,255,255,0.5)">12 PM</text>

      <rect x="145" y="380" width="35" height="110" rx="4" fill="rgba(255,255,255,0.2)"/>
      <text x="153" y="510" font-family="Arial, sans-serif" font-size="9" fill="rgba(255,255,255,0.5)">1 PM</text>

      <rect x="200" y="330" width="35" height="160" rx="4" fill="#E88515"/>
      <text x="204" y="510" font-family="Arial, sans-serif" font-size="9" font-weight="700" fill="#F5A723">2 PM</text>

      <rect x="255" y="410" width="35" height="80" rx="4" fill="rgba(255,255,255,0.2)"/>
      <text x="263" y="510" font-family="Arial, sans-serif" font-size="9" fill="rgba(255,255,255,0.5)">4 PM</text>

      <rect x="310" y="430" width="35" height="60" rx="4" fill="rgba(255,255,255,0.2)"/>
      <text x="318" y="510" font-family="Arial, sans-serif" font-size="9" fill="rgba(255,255,255,0.5)">5 PM</text>

      <rect x="365" y="370" width="35" height="120" rx="4" fill="rgba(255,255,255,0.2)"/>
      <text x="373" y="510" font-family="Arial, sans-serif" font-size="9" fill="rgba(255,255,255,0.5)">6 PM</text>

      <rect x="420" y="320" width="35" height="170" rx="4" fill="rgba(255,255,255,0.2)"/>
      <text x="428" y="510" font-family="Arial, sans-serif" font-size="9" fill="rgba(255,255,255,0.5)">7 PM</text>

      <rect x="475" y="290" width="35" height="200" rx="4" fill="#E88515"/>
      <text x="478" y="510" font-family="Arial, sans-serif" font-size="9" font-weight="700" fill="#F5A723">8 PM</text>

      <rect x="530" y="300" width="35" height="190" rx="4" fill="#E88515"/>
      <text x="533" y="510" font-family="Arial, sans-serif" font-size="9" font-weight="700" fill="#F5A723">9 PM</text>

      <rect x="585" y="340" width="35" height="150" rx="4" fill="rgba(255,255,255,0.2)"/>
      <text x="591" y="510" font-family="Arial, sans-serif" font-size="9" fill="rgba(255,255,255,0.5)">10 PM</text>

      <rect x="640" y="420" width="35" height="70" rx="4" fill="rgba(255,255,255,0.2)"/>
      <text x="648" y="510" font-family="Arial, sans-serif" font-size="9" fill="rgba(255,255,255,0.5)">11 PM</text>
    </svg>
  `;

  await sharp(Buffer.from(analyticsSvg)).jpeg({ quality: 95 }).toFile("public/images/jamanvar/trail/analytics.jpg");

  // 4. Create Branded Hardware Counter Setup (public/images/jamanvar/hardware-counter.jpg)
  const hardwareSvg = `
    <svg width="1000" height="750" viewBox="0 0 1000 750" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="woodGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#221A15"/>
          <stop offset="100%" stop-color="#140E0A"/>
        </linearGradient>
        <linearGradient id="screenBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#050B16"/>
          <stop offset="100%" stop-color="#0B1728"/>
        </linearGradient>
      </defs>

      <!-- Warm ambient restaurant background -->
      <rect width="1000" height="750" fill="#0B1422"/>
      <circle cx="500" cy="200" r="400" fill="#E88515" opacity="0.08"/>

      <!-- Wooden Counter Surface -->
      <rect x="0" y="520" width="1000" height="230" fill="url(#woodGrad)"/>
      <line x1="0" y1="520" x2="1000" y2="520" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>

      <!-- POS Terminal Stand & Base -->
      <path d="M 330 550 L 410 400 L 450 400 L 530 550 Z" fill="#1C2330"/>
      <ellipse cx="430" cy="550" rx="90" ry="18" fill="#111620"/>

      <!-- Main POS Touch Screen Monitor (15.6 inch) -->
      <rect x="180" y="100" width="500" height="340" rx="16" fill="#111827" stroke="#374151" stroke-width="8" filter="drop-shadow(0 25px 40px rgba(0,0,0,0.8))"/>
      <rect x="192" y="112" width="476" height="316" rx="8" fill="url(#screenBg)"/>

      <!-- Screen Header with Official Logo -->
      <rect x="192" y="112" width="476" height="50" fill="#0D1C30"/>
      <image href="${logoSmallBase64}" x="205" y="118" width="38" height="38"/>
      <text x="250" y="136" font-family="Arial, sans-serif" font-size="14" font-weight="900" fill="#FFFFFF" letter-spacing="1">JAMANVAR POS</text>
      <text x="250" y="150" font-family="Arial, sans-serif" font-size="9" font-weight="700" fill="#E88515" letter-spacing="1.5">BY KELVIONTECH</text>

      <rect x="575" y="123" width="80" height="24" rx="6" fill="#22C55E" opacity="0.2"/>
      <text x="590" y="139" font-family="Arial, sans-serif" font-size="9" font-weight="800" fill="#4ADE80">ONLINE</text>

      <!-- Screen Content (Active Table 07) -->
      <rect x="205" y="175" width="220" height="235" rx="8" fill="#091528" stroke="rgba(255,255,255,0.06)"/>
      <text x="218" y="198" font-family="Arial, sans-serif" font-size="11" font-weight="800" fill="#FFFFFF">TABLE 07 • DINE-IN</text>
      
      <text x="218" y="222" font-family="Arial, sans-serif" font-size="10" fill="#FFF">2x Paneer Tikka</text>
      <text x="380" y="222" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#FFF">₹680</text>

      <text x="218" y="242" font-family="Arial, sans-serif" font-size="10" fill="#FFF">1x Butter Naan</text>
      <text x="385" y="242" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#FFF">₹80</text>

      <text x="218" y="262" font-family="Arial, sans-serif" font-size="10" fill="#FFF">1x Dal Makhani</text>
      <text x="380" y="262" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#FFF">₹300</text>

      <text x="218" y="282" font-family="Arial, sans-serif" font-size="10" fill="#FFF">2x Masala Chaas</text>
      <text x="380" y="282" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#FFF">₹180</text>

      <line x1="218" y1="298" x2="410" y2="298" stroke="rgba(255,255,255,0.1)"/>
      <text x="218" y="318" font-family="Arial, sans-serif" font-size="10" fill="rgba(255,255,255,0.6)">GST (5%)</text>
      <text x="390" y="318" font-family="Arial, sans-serif" font-size="10" fill="rgba(255,255,255,0.6)">₹62</text>

      <text x="218" y="342" font-family="Arial, sans-serif" font-size="13" font-weight="900" fill="#FFFFFF">Total</text>
      <text x="365" y="342" font-family="Arial, sans-serif" font-size="14" font-weight="900" fill="#F5A723">₹1,302</text>

      <rect x="218" y="360" width="195" height="36" rx="8" fill="#E88515"/>
      <text x="280" y="383" font-family="Arial, sans-serif" font-size="11" font-weight="900" fill="#FFFFFF">SETTLE &amp; PAY</text>

      <!-- Right Touch Tiles on Screen -->
      <rect x="435" y="175" width="220" height="235" rx="8" fill="#091528" stroke="rgba(255,255,255,0.06)"/>
      <text x="448" y="198" font-family="Arial, sans-serif" font-size="11" font-weight="800" fill="#FFFFFF">QUICK TOUCH KEYS</text>
      
      <rect x="448" y="212" width="95" height="55" rx="6" fill="#0D1C30" stroke="#E88515"/>
      <text x="458" y="235" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#FFF">Paneer Tikka</text>
      <text x="458" y="255" font-family="Arial, sans-serif" font-size="10" font-weight="900" fill="#F5A723">₹340</text>

      <rect x="553" y="212" width="95" height="55" rx="6" fill="#0D1C30"/>
      <text x="563" y="235" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#FFF">Butter Naan</text>
      <text x="563" y="255" font-family="Arial, sans-serif" font-size="10" font-weight="900" fill="#F5A723">₹80</text>

      <rect x="448" y="277" width="95" height="55" rx="6" fill="#0D1C30"/>
      <text x="458" y="300" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#FFF">Dal Makhani</text>
      <text x="458" y="320" font-family="Arial, sans-serif" font-size="10" font-weight="900" fill="#F5A723">₹300</text>

      <rect x="553" y="277" width="95" height="55" rx="6" fill="#0D1C30"/>
      <text x="563" y="300" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#FFF">Masala Chaas</text>
      <text x="563" y="320" font-family="Arial, sans-serif" font-size="10" font-weight="900" fill="#F5A723">₹90</text>

      <rect x="448" y="342" width="200" height="55" rx="6" fill="#0D1C30"/>
      <text x="460" y="365" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#4ADE80">KDS Connected (Station 1)</text>
      <text x="460" y="383" font-family="Arial, sans-serif" font-size="9" fill="rgba(255,255,255,0.6)">EPSON TM-T82 Thermal Ready</text>

      <!-- Thermal Printer (Right side of counter) -->
      <rect x="730" y="390" width="160" height="150" rx="10" fill="#1F2937" stroke="#374151" stroke-width="4"/>
      <rect x="745" y="405" width="130" height="15" rx="4" fill="#111827"/>
      <!-- Printing Paper Receipt coming out -->
      <rect x="750" y="330" width="120" height="90" rx="4" fill="#FAF7F0"/>
      <text x="760" y="350" font-family="'Courier New', monospace" font-size="8" font-weight="900" fill="#091528">JAMANVAR POS</text>
      <text x="760" y="365" font-family="'Courier New', monospace" font-size="7" fill="#091528">Table: 07 | ₹1,302</text>
      <text x="760" y="380" font-family="'Courier New', monospace" font-size="7" font-weight="700" fill="#22C55E">PAID VIA UPI</text>

      <!-- Card / UPI Terminal (Left side) -->
      <rect x="80" y="440" width="80" height="110" rx="10" fill="#1E293B" stroke="#334155" stroke-width="3"/>
      <rect x="90" y="450" width="60" height="40" rx="4" fill="#0F172A"/>
      <text x="96" y="470" font-family="Arial, sans-serif" font-size="8" font-weight="800" fill="#F5A723">₹1,302</text>
      <text x="96" y="482" font-family="Arial, sans-serif" font-size="7" fill="#4ADE80">TAP / UPI</text>
    </svg>
  `;

  await sharp(Buffer.from(hardwareSvg)).jpeg({ quality: 95 }).toFile("public/images/jamanvar/hardware-counter.jpg");

  console.log("All Jamanvar branded assets created successfully!");
}

createBrandedAssets().catch(console.error);
