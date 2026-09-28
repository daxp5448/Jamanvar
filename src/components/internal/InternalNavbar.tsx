"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { groupProductsByCategory } from "@/content/products";
import { SOLUTIONS } from "@/content/solutions";
import { ProductsMenuPanel, SolutionsMenuPanel } from "./NavMenus";

type DropdownKey = "products" | "solutions" | null;

const PLAIN_LINKS = [
  { name: "Features", href: "/features" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const PRODUCT_GROUPS = groupProductsByCategory();

export function InternalNavbar() {
  const [open, setOpen] = useState<DropdownKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
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
    setOpen(null);
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  const groupProps = (key: DropdownKey) => ({
    onMouseEnter: () => {
      clearCloseTimer();
      setOpen(key);
    },
    onMouseLeave: scheduleClose,
  });

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-jamanvar-cream-50/95 backdrop-blur-md border-b border-jamanvar-navy-900/10">
        <div ref={navRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-jamanvar-saffron-500 rounded-lg">
            <Image
              src="/images/jamanvar/brand-logo-transparent.png"
              alt="Jamanvar by Kelviontech"
              width={180}
              height={58}
              priority
              className="h-10 sm:h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            <Link
              href="/"
              className="px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors text-jamanvar-navy-900/80 hover:text-jamanvar-navy-950"
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
                  "flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-jamanvar-saffron-500",
                  pathname.startsWith("/products") || open === "products"
                    ? "text-jamanvar-saffron-700"
                    : "text-jamanvar-navy-900/80 hover:text-jamanvar-navy-950"
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
                  "flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-jamanvar-saffron-500",
                  pathname.startsWith("/solutions") || open === "solutions"
                    ? "text-jamanvar-saffron-700"
                    : "text-jamanvar-navy-900/80 hover:text-jamanvar-navy-950"
                )}
              >
                <span>Solutions</span>
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", open === "solutions" && "rotate-180")} />
              </button>
            </div>

            {PLAIN_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors",
                  isActive(link.href)
                    ? "text-jamanvar-saffron-700"
                    : "text-jamanvar-navy-900/80 hover:text-jamanvar-navy-950"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {open && (
            <div
              className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full -mt-3 pt-5 z-50"
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

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="text-sm font-semibold text-jamanvar-navy-900/80 hover:text-jamanvar-navy-950 px-2 py-2 transition-colors"
            >
              Partner Login
            </Link>
            <Link
              href="/book-a-demo"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-jamanvar-navy-900 hover:bg-jamanvar-navy-800 text-white text-xs lg:text-sm font-bold shadow-sm transition-all border border-jamanvar-saffron-500/30"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-3.5 h-3.5 text-jamanvar-saffron-400" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-jamanvar-navy-900 hover:bg-jamanvar-cream-200/80 rounded-xl transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-jamanvar-navy-950/70 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-jamanvar-cream-50 shadow-2xl flex flex-col border-l border-jamanvar-navy-900/10 overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-jamanvar-navy-900/10">
              <Image
                src="/images/jamanvar/brand-logo-transparent.png"
                alt="Jamanvar by Kelviontech"
                width={150}
                height={48}
                className="h-9 w-auto object-contain"
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 text-jamanvar-navy-900/60 hover:text-jamanvar-navy-900 rounded-lg"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-1 p-4">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors text-jamanvar-navy-900 hover:bg-jamanvar-cream-200"
              >
                Home
              </Link>

              <MobileAccordion
                label="Products"
                isOpen={mobileProductsOpen}
                onToggle={() => setMobileProductsOpen((v) => !v)}
              >
                {PRODUCT_GROUPS.filter((g) => g.products.length > 0).map((group) => (
                  <div key={group.category} className="mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-jamanvar-navy-900/40 block mb-1.5 px-3">
                      {group.category}
                    </span>
                    {group.products.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/products/${p.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm font-semibold text-jamanvar-navy-900 rounded-lg hover:bg-jamanvar-cream-200"
                      >
                        {p.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </MobileAccordion>

              <MobileAccordion
                label="Solutions"
                isOpen={mobileSolutionsOpen}
                onToggle={() => setMobileSolutionsOpen((v) => !v)}
              >
                {SOLUTIONS.map((s) => (
                  <Link
                    key={s.id}
                    href={`/solutions/${s.id}`}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-sm font-semibold text-jamanvar-navy-900 rounded-lg hover:bg-jamanvar-cream-200"
                  >
                    {s.navTitle}
                  </Link>
                ))}
              </MobileAccordion>

              {PLAIN_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors",
                    isActive(link.href)
                      ? "text-jamanvar-saffron-700 bg-jamanvar-saffron-50"
                      : "text-jamanvar-navy-900 hover:bg-jamanvar-cream-200"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto p-4 pt-4 border-t border-jamanvar-navy-900/10 space-y-3">
              <Link
                href="/book-a-demo"
                onClick={() => setMobileOpen(false)}
                className="w-full py-3 px-4 rounded-xl bg-jamanvar-saffron-500 hover:bg-jamanvar-saffron-600 text-white font-bold text-sm shadow-saffron flex items-center justify-center gap-2"
              >
                <span>Book a Free Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full block py-2.5 px-4 rounded-xl bg-white border border-jamanvar-navy-900/15 text-jamanvar-navy-900 font-semibold text-sm text-center"
              >
                Partner Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function MobileAccordion({
  label,
  isOpen,
  onToggle,
  children,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-jamanvar-navy-900/10 pb-2 mb-2">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-jamanvar-navy-900"
      >
        <span>{label}</span>
        <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>
      {isOpen && <div className="pt-1 pb-1">{children}</div>}
    </div>
  );
}
