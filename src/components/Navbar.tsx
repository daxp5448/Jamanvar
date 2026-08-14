"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenDemo: () => void;
}

export function Navbar({ onOpenDemo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Product", href: "#product" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Analytics", href: "#analytics" },
    { name: "Hardware", href: "#hardware" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-6 lg:px-8",
          isScrolled
            ? "py-2 bg-jamanvar-cream-100/95 backdrop-blur-md border-b border-jamanvar-navy-900/10 shadow-subtle"
            : "py-3.5 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* LEFT: Permanent Official Jamanvar Brandmark in Navbar */}
          <Link
            href="/"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-jamanvar-saffron-500 rounded-2xl"
          >
            <div className="relative h-12 sm:h-14 lg:h-16 w-auto flex items-center py-1">
              <Image
                src="/images/jamanvar/brand-logo-transparent.png"
                alt="Jamanvar by Kelviontech"
                width={260}
                height={84}
                priority
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-all duration-200 group-hover:scale-105 drop-shadow-sm"
              />
            </div>
          </Link>

          {/* CENTER: Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-jamanvar-navy-900/8 shadow-subtle">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-semibold text-jamanvar-navy-900/80 hover:text-jamanvar-navy-950 hover:bg-jamanvar-cream-200/80 rounded-full transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* RIGHT: Login & Book a Demo */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenDemo}
              className="text-xs lg:text-sm font-semibold text-jamanvar-navy-900/80 hover:text-jamanvar-navy-950 px-3 py-2 transition-colors cursor-pointer"
            >
              Partner Login
            </button>

            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-jamanvar-navy-900 hover:bg-jamanvar-navy-800 text-white text-xs lg:text-sm font-bold shadow-sm transition-all duration-200 hover:shadow hover:scale-[1.02] active:scale-[0.98] cursor-pointer border border-jamanvar-saffron-500/30"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-3.5 h-3.5 text-jamanvar-saffron-400" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-jamanvar-navy-900 hover:bg-jamanvar-cream-200/80 rounded-xl transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-jamanvar-navy-950/70 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-3/4 max-w-xs bg-jamanvar-cream-50 p-6 shadow-2xl flex flex-col justify-between border-l border-jamanvar-navy-900/10">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-jamanvar-navy-900/10">
                <div className="relative h-11 w-auto">
                  <Image
                    src="/images/jamanvar/brand-logo-transparent.png"
                    alt="Jamanvar by Kelviontech"
                    width={180}
                    height={58}
                    className="h-11 w-auto object-contain"
                  />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-jamanvar-navy-900/60 hover:text-jamanvar-navy-900 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-2 py-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 text-sm font-semibold text-jamanvar-navy-900 hover:bg-jamanvar-cream-200 rounded-lg transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-jamanvar-navy-900/10 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full py-3 px-4 rounded-xl bg-jamanvar-saffron-500 hover:bg-jamanvar-saffron-600 text-white font-bold text-sm shadow-saffron flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book a Free Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-white border border-jamanvar-navy-900/15 text-jamanvar-navy-900 font-semibold text-sm text-center"
              >
                Partner Login
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
