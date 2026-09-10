"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WatermarkOverlay } from "@/components/WatermarkOverlay";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  Building2,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    restaurantName: "",
    phone: "",
    email: "",
    city: "",
    outletType: "Casual Dine-in",
    message: "",
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
      } in ${formData.city || "India"}. I would like to inquire about Jamanvar POS software.`
    );
    window.open(`https://wa.me/918140267475?text=${text}`, "_blank");
  };

  const handleMailRedirect = () => {
    const subject = encodeURIComponent(
      `Jamanvar POS Inquiry - ${formData.restaurantName || formData.fullName}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\nRestaurant: ${formData.restaurantName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nCity: ${formData.city}\nOutlet Type: ${formData.outletType}\n\nRequirements / Notes:\n${formData.message}`
    );
    window.location.href = `mailto:kelviontech@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-jamanvar-cream-100 text-jamanvar-navy-950 selection:bg-jamanvar-saffron-200 selection:text-jamanvar-navy-900 relative">
      <WatermarkOverlay />
      <Navbar />

      {/* Hero / Header */}
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 bg-jamanvar-navy-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-jamanvar-saffron-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-jamanvar-saffron-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DIRECT BUSINESS SUPPORT &amp; DEMOS</span>
            </div>
            <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-4">
              Get in touch with the{" "}
              <span className="font-serif italic font-normal text-jamanvar-saffron-400">
                Jamanvar team.
              </span>
            </h1>
            <p className="text-sm sm:text-lg text-white/75 leading-relaxed font-normal">
              Whether you are looking for a live product demo, software consultation, onboarding training, or hardware setup guidance, our dedicated team is here to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Business & Legal Identity Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Legal Registration Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-jamanvar-saffron-500/30 shadow-card">
              <div className="flex items-center gap-2.5 text-jamanvar-saffron-700 font-bold text-xs uppercase tracking-wider mb-4">
                <ShieldCheck className="w-4 h-4 text-jamanvar-saffron-600" />
                <span>Business &amp; Legal Information</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-jamanvar-navy-950 mb-2">
                Jamanvar
              </h2>
              <p className="text-xs text-jamanvar-navy-900/70 mb-4 leading-relaxed">
                A proprietary restaurant technology product &amp; service developed and operated by <strong className="text-jamanvar-navy-950">KELVION TECH (Kelviontech)</strong>.
              </p>

              <div className="space-y-3 pt-3 border-t border-jamanvar-navy-900/10 text-xs">
                <div className="flex justify-between items-start py-1">
                  <span className="text-jamanvar-navy-900/60">Proprietor:</span>
                  <span className="font-bold text-jamanvar-navy-950 text-right">Mihir Manishbhai Darji</span>
                </div>
                <div className="flex justify-between items-start py-1">
                  <span className="text-jamanvar-navy-900/60">Enterprise Type:</span>
                  <span className="font-semibold text-jamanvar-navy-950 text-right">Proprietorship</span>
                </div>
                <div className="flex justify-between items-start py-1">
                  <span className="text-jamanvar-navy-900/60">Registered Location:</span>
                  <span className="font-semibold text-jamanvar-navy-950 text-right">Ahmedabad, Gujarat, India</span>
                </div>
              </div>
            </div>

            {/* Official Contact Info Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-jamanvar-navy-950 text-white border border-white/10 shadow-card space-y-5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Building2 className="w-4 h-4 text-jamanvar-saffron-400" />
                <span>Office &amp; Support Coordinates</span>
              </h3>

              <div className="space-y-4 text-xs text-white/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-jamanvar-saffron-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Location:</strong>
                    <span>Ahmedabad, Gujarat, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-jamanvar-saffron-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Official Email:</strong>
                    <a href="mailto:kelviontech@gmail.com" className="hover:text-jamanvar-saffron-300 underline underline-offset-2">
                      kelviontech@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-jamanvar-saffron-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Phone &amp; WhatsApp:</strong>
                    <div className="space-y-0.5 mt-0.5">
                      <a href="tel:+918140267475" className="hover:text-jamanvar-saffron-300 block font-medium">
                        +91 81402 67475
                      </a>
                      <a href="tel:+919327895570" className="hover:text-jamanvar-saffron-300 block font-medium">
                        +91 93278 95570
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-jamanvar-saffron-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Business Hours:</strong>
                    <span>Monday to Saturday: 9:30 AM – 7:00 PM IST</span>
                    <span className="block text-white/50 text-[11px]">Sunday: Emergency restaurant support on-call</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Demo / Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-jamanvar-navy-900/10 shadow-card">
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-jamanvar-navy-950 mb-2">
                  Request a Demo or Send an Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-jamanvar-navy-900/70 leading-relaxed">
                  Fill in your restaurant details below. You can send your inquiry directly via email or connect with us on WhatsApp.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-jamanvar-cream-50 border border-jamanvar-saffron-500/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-extrabold text-jamanvar-navy-950">
                    Thank You, {formData.fullName || "Restaurateur"}!
                  </h4>
                  <p className="text-xs sm:text-sm text-jamanvar-navy-900/75 max-w-md mx-auto">
                    To connect immediately, click below to open your email client or WhatsApp chat with pre-filled details.
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
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-jamanvar-navy-950 mb-1.5">
                        Your Full Name *
                      </label>
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
                      <label className="block text-xs font-bold text-jamanvar-navy-950 mb-1.5">
                        Restaurant / Outlet Name *
                      </label>
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
                      <label className="block text-xs font-bold text-jamanvar-navy-950 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
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
                      <label className="block text-xs font-bold text-jamanvar-navy-950 mb-1.5">
                        Email Address *
                      </label>
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
                      <label className="block text-xs font-bold text-jamanvar-navy-950 mb-1.5">
                        City / Location *
                      </label>
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
                      <label className="block text-xs font-bold text-jamanvar-navy-950 mb-1.5">
                        Format / Concept
                      </label>
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

                  <div>
                    <label className="block text-xs font-bold text-jamanvar-navy-950 mb-1.5">
                      Requirements or Questions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your table count, hardware requirements, or specific POS needs..."
                      className="w-full px-4 py-3 rounded-xl bg-jamanvar-cream-50 border border-jamanvar-navy-900/15 focus:border-jamanvar-saffron-500 focus:outline-none text-xs sm:text-sm font-medium resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 sm:py-4 px-6 rounded-xl bg-jamanvar-saffron-500 hover:bg-jamanvar-saffron-600 text-white font-extrabold text-sm shadow-saffron flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit &amp; Connect with Jamanvar Team</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-jamanvar-navy-900/50">
                    We respect your privacy. No spam. You will receive a direct response from our Ahmedabad team.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
