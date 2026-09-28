"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { groupProductsByCategory } from "@/content/products";
import { SOLUTIONS } from "@/content/solutions";
import { ProductsMenuPanel, SolutionsMenuPanel } from "@/components/internal/NavMenus";

interface NavbarProps {
  onOpenDemo?: () => void;
}

const PRODUCT_GROUPS = groupProductsByCategory().filter((g) => g.products.length > 0);

export function Navbar({ onOpenDemo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState<"products" | "solutions" | null>(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const menuRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpen(null), 200);
  };

  const groupProps = (key: "products" | "solutions") => ({
    onMouseEnter: () => {
      clearCloseTimer();
      setOpen(key);
    },
    onMouseLeave: scheduleClose,
  });

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(null);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

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
    { name: "Features", href: "/features" },
    { name: "About", href: "/about" },
    { name: "Support", href: "/support" },
    { name: "Contact", href: "/contact" },
  ];

  const handleDemoClick = () => {
    if (onOpenDemo) {
      onOpenDemo();
    } else {
      window.location.href = "/book-a-demo";
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-6 lg:px-8",
          isScrolled || !isHomePage
            ? "py-2 bg-jamanvar-cream-100/95 backdrop-blur-md border-b border-jamanvar-navy-900/10 shadow-subtle"
            : "py-3.5 bg-transparent"
        )}
      >
        <div ref={menuRef} className="relative max-w-7xl mx-auto flex items-center justify-between">
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
          <nav className="hidden md:flex items-center gap-0.5 lg:gap-2 px-2 lg:px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-jamanvar-navy-900/8 shadow-subtle">
            <Link
              href="/"
              className={cn(
                "px-2.5 lg:px-3.5 py-1.5 whitespace-nowrap text-xs lg:text-sm font-semibold rounded-full transition-all duration-150",
                pathname === "/"
                  ? "text-jamanvar-saffron-700 bg-jamanvar-saffron-50 font-bold"
                  : "text-jamanvar-navy-900/80 hover:text-jamanvar-navy-950 hover:bg-jamanvar-cream-200/80"
              )}
            >
              Home
            </Link>

            <div {...groupProps("products")}>
              <button
                onClick={() => setOpen("products")}
                aria-haspopup="menu"
                aria-expanded={open === "products"}
                aria-controls="products-menu"
                className={cn(
                  "flex items-center gap-1 px-2.5 lg:px-3.5 py-1.5 whitespace-nowrap text-xs lg:text-sm font-semibold rounded-full transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-jamanvar-saffron-500",
                  open === "products"
                    ? "text-jamanvar-saffron-700 bg-jamanvar-saffron-50 font-bold"
                    : "text-jamanvar-navy-900/80 hover:text-jamanvar-navy-950 hover:bg-jamanvar-cream-200/80"
                )}
              >
                <span>Products</span>
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", open === "products" && "rotate-180")} />
              </button>
            </div>

            <div {...groupProps("solutions")}>
              <button
                onClick={() => setOpen("solutions")}
                aria-haspopup="menu"
                aria-expanded={open === "solutions"}
                aria-controls="solutions-menu"
                className={cn(
                  "flex items-center gap-1 px-2.5 lg:px-3.5 py-1.5 whitespace-nowrap text-xs lg:text-sm font-semibold rounded-full transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-jamanvar-saffron-500",
                  open === "solutions"
                    ? "text-jamanvar-saffron-700 bg-jamanvar-saffron-50 font-bold"
                    : "text-jamanvar-navy-900/80 hover:text-jamanvar-navy-950 hover:bg-jamanvar-cream-200/80"
                )}
              >
                <span>Solutions</span>
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", open === "solutions" && "rotate-180")} />
              </button>
            </div>

            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-2.5 lg:px-3.5 py-1.5 whitespace-nowrap text-xs lg:text-sm font-semibold rounded-full transition-all duration-150",
                    isActive
                      ? "text-jamanvar-saffron-700 bg-jamanvar-saffron-50 font-bold"
                      : "text-jamanvar-navy-900/80 hover:text-jamanvar-navy-950 hover:bg-jamanvar-cream-200/80"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {open && (
            <div
              className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full -mt-2 pt-4 z-50"
              onMouseEnter={clearCloseTimer}
              onMouseLeave={scheduleClose}
            >
              <div id={`${open}-menu`} role="menu" aria-label={open === "products" ? "Products" : "Solutions"}>
                {open === "products" ? (
                  <ProductsMenuPanel onNavigate={() => setOpen(null)} />
                ) : (
                  <SolutionsMenuPanel onNavigate={() => setOpen(null)} />
                )}
              </div>
            </div>
          )}

          {/* RIGHT: Login & Book a Demo */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:block whitespace-nowrap text-xs lg:text-sm font-semibold text-jamanvar-navy-900/80 hover:text-jamanvar-navy-950 px-3 py-2 transition-colors cursor-pointer"
            >
              Partner Login
            </Link>

            <button
              onClick={handleDemoClick}
              className="inline-flex items-center gap-2 px-4 lg:px-5 py-2.5 whitespace-nowrap rounded-xl bg-jamanvar-navy-900 hover:bg-jamanvar-navy-800 text-white text-xs lg:text-sm font-bold shadow-sm transition-all duration-200 hover:shadow hover:scale-[1.02] active:scale-[0.98] cursor-pointer border border-jamanvar-saffron-500/30"
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

              <div className="flex flex-col gap-2 py-6 overflow-y-auto">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors",
                    pathname === "/"
                      ? "text-jamanvar-saffron-700 bg-jamanvar-saffron-50 font-bold"
                      : "text-jamanvar-navy-900 hover:bg-jamanvar-cream-200"
                  )}
                >
                  Home
                </Link>

                <div className="border-b border-jamanvar-navy-900/10 pb-2">
                  <button
                    onClick={() => setMobileProductsOpen((v) => !v)}
                    aria-expanded={mobileProductsOpen}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-jamanvar-navy-900"
                  >
                    <span>Products</span>
                    <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", mobileProductsOpen && "rotate-180")} />
                  </button>
                  {mobileProductsOpen && (
                    <div className="pt-1">
                      {PRODUCT_GROUPS.map((group) => (
                        <div key={group.category} className="mb-3">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-jamanvar-navy-900/40 block mb-1.5 px-3">
                            {group.category}
                          </span>
                          {group.products.map((p) => (
                            <Link
                              key={p.slug}
                              href={`/products/${p.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-3 py-2 text-sm font-semibold text-jamanvar-navy-900 rounded-lg hover:bg-jamanvar-cream-200"
                            >
                              {p.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="border-b border-jamanvar-navy-900/10 pb-2">
                  <button
                    onClick={() => setMobileSolutionsOpen((v) => !v)}
                    aria-expanded={mobileSolutionsOpen}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-jamanvar-navy-900"
                  >
                    <span>Solutions</span>
                    <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", mobileSolutionsOpen && "rotate-180")} />
                  </button>
                  {mobileSolutionsOpen && (
                    <div className="pt-1">
                      {SOLUTIONS.map((s) => (
                        <Link
                          key={s.id}
                          href={`/solutions/${s.id}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 text-sm font-semibold text-jamanvar-navy-900 rounded-lg hover:bg-jamanvar-cream-200"
                        >
                          {s.navTitle}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors",
                      pathname === link.href
                        ? "text-jamanvar-saffron-700 bg-jamanvar-saffron-50 font-bold"
                        : "text-jamanvar-navy-900 hover:bg-jamanvar-cream-200"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-jamanvar-navy-900/10 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleDemoClick();
                }}
                className="w-full py-3 px-4 rounded-xl bg-jamanvar-saffron-500 hover:bg-jamanvar-saffron-600 text-white font-bold text-sm shadow-saffron flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book a Free Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block py-2.5 px-4 rounded-xl bg-white border border-jamanvar-navy-900/15 text-jamanvar-navy-900 font-semibold text-sm text-center"
              >
                Partner Login / Support
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
