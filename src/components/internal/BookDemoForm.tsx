"use client";

import React, { useState } from "react";
import { Send, MessageSquare, Mail, CheckCircle2 } from "lucide-react";

export function BookDemoForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    restaurantName: "",
    phone: "",
    email: "",
    city: "",
    outletType: "Casual Dine-in",
    outletCount: "Single Outlet",
    currentSystem: "",
    requirements: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Jamanvar Team, I'm ${formData.fullName || "a restaurant owner"} from ${
        formData.restaurantName || "my restaurant"
      } in ${formData.city || "India"}. I would like to book a demo of Jamanvar POS software.`
    );
    window.open(`https://wa.me/918140267475?text=${text}`, "_blank");
  };

  const handleMailRedirect = () => {
    const subject = encodeURIComponent(
      `Jamanvar Demo Request - ${formData.restaurantName || formData.fullName}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\nRestaurant: ${formData.restaurantName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nCity: ${formData.city}\nOutlet Type: ${formData.outletType}\nOutlets: ${formData.outletCount}\nCurrent System: ${formData.currentSystem}\n\nRequirements:\n${formData.requirements}`
    );
    window.location.href = `mailto:kelviontech@gmail.com?subject=${subject}&body=${body}`;
  };

  if (submitted) {
    return (
      <div className="p-6 sm:p-8 rounded-2xl bg-jamanvar-cream-50 border border-jamanvar-saffron-500/40 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="text-xl font-extrabold text-jamanvar-navy-950">
          Thank You, {formData.fullName || "Restaurateur"}!
        </h4>
        <p className="text-xs sm:text-sm text-jamanvar-navy-900/75 max-w-md mx-auto">
          To connect immediately, click below to open your email client or WhatsApp chat with your details pre-filled.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={handleMailRedirect}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-jamanvar-navy-900 hover:bg-jamanvar-navy-800 text-white font-bold text-xs flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4 text-jamanvar-saffron-400" />
            <span>Send via Email Client</span>
          </button>
          <button
            onClick={handleWhatsAppRedirect}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs text-jamanvar-navy-900/60 hover:text-jamanvar-navy-950 underline pt-2 block mx-auto"
        >
          Edit form details
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-jamanvar-navy-950 mb-1.5">Your Full Name *</label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Rajesh Patel"
            className="w-full px-4 py-3 rounded-xl bg-jamanvar-cream-50 border border-jamanvar-navy-900/15 focus:border-jamanvar-saffron-500 focus:outline-none text-xs sm:text-sm font-medium"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-jamanvar-navy-950 mb-1.5">Restaurant Name *</label>
          <input
            type="text"
            required
            value={formData.restaurantName}
            onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
            placeholder="e.g. Swad Sagar Restaurant"
            className="w-full px-4 py-3 rounded-xl bg-jamanvar-cream-50 border border-jamanvar-navy-900/15 focus:border-jamanvar-saffron-500 focus:outline-none text-xs sm:text-sm font-medium"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-jamanvar-navy-950 mb-1.5">Phone / WhatsApp *</label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. +91 98765 43210"
            className="w-full px-4 py-3 rounded-xl bg-jamanvar-cream-50 border border-jamanvar-navy-900/15 focus:border-jamanvar-saffron-500 focus:outline-none text-xs sm:text-sm font-medium"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-jamanvar-navy-950 mb-1.5">Email Address *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. owner@restaurant.com"
            className="w-full px-4 py-3 rounded-xl bg-jamanvar-cream-50 border border-jamanvar-navy-900/15 focus:border-jamanvar-saffron-500 focus:outline-none text-xs sm:text-sm font-medium"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-jamanvar-navy-950 mb-1.5">City / Location *</label>
          <input
            type="text"
            required
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            placeholder="e.g. Ahmedabad / Surat / Mumbai"
            className="w-full px-4 py-3 rounded-xl bg-jamanvar-cream-50 border border-jamanvar-navy-900/15 focus:border-jamanvar-saffron-500 focus:outline-none text-xs sm:text-sm font-medium"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-jamanvar-navy-950 mb-1.5">Format / Concept</label>
          <select
            value={formData.outletType}
            onChange={(e) => setFormData({ ...formData, outletType: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-jamanvar-cream-50 border border-jamanvar-navy-900/15 focus:border-jamanvar-saffron-500 focus:outline-none text-xs sm:text-sm font-medium"
          >
            <option value="Casual Dine-in">Casual Dine-in Restaurant</option>
            <option value="Fine Dine">Fine Dining &amp; Family Hall</option>
            <option value="Café / Bakery">Café &amp; Bakery</option>
            <option value="Quick Service / Food Court">Quick Service (QSR) / Food Court</option>
            <option value="Bar / Restro-Bar">Restro-Bar / Pub</option>
            <option value="Multi-Outlet Chain">Multi-Outlet Chain / Franchise</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-jamanvar-navy-950 mb-1.5">Number of Outlets</label>
          <select
            value={formData.outletCount}
            onChange={(e) => setFormData({ ...formData, outletCount: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-jamanvar-cream-50 border border-jamanvar-navy-900/15 focus:border-jamanvar-saffron-500 focus:outline-none text-xs sm:text-sm font-medium"
          >
            <option value="Single Outlet">Single Outlet</option>
            <option value="2-3 Outlets">2-3 Outlets</option>
            <option value="4-10 Outlets">4-10 Outlets</option>
            <option value="10+ Outlets">10+ Outlets</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-jamanvar-navy-950 mb-1.5">Current Billing System</label>
          <input
            type="text"
            value={formData.currentSystem}
            onChange={(e) => setFormData({ ...formData, currentSystem: e.target.value })}
            placeholder="e.g. Paper registers, another POS, none"
            className="w-full px-4 py-3 rounded-xl bg-jamanvar-cream-50 border border-jamanvar-navy-900/15 focus:border-jamanvar-saffron-500 focus:outline-none text-xs sm:text-sm font-medium"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-jamanvar-navy-950 mb-1.5">Requirements (Optional)</label>
        <textarea
          rows={3}
          value={formData.requirements}
          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
          placeholder="Tell us about your table count, hardware, or specific needs..."
          className="w-full px-4 py-3 rounded-xl bg-jamanvar-cream-50 border border-jamanvar-navy-900/15 focus:border-jamanvar-saffron-500 focus:outline-none text-xs sm:text-sm font-medium resize-none"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="w-full py-3.5 sm:py-4 px-6 rounded-xl bg-jamanvar-saffron-500 hover:bg-jamanvar-saffron-600 text-white font-extrabold text-sm shadow-saffron flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>Book My Free Demo</span>
        </button>
      </div>

      <p className="text-[11px] text-center text-jamanvar-navy-900/50">
        We respect your privacy. No spam. You will receive a direct response from our Ahmedabad team.
      </p>
    </form>
  );
}
