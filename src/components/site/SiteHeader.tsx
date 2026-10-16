"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, NAV_PRODUCT_GROUPS, NAV_SOLUTIONS } from "@/content/navigation";
import { Logo } from "./Logo";

type MenuKey = "products" | "solutions";

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  // A mouse user's click usually follows the hover that already opened the
  // menu, so that click should keep it open rather than toggle it shut.
  const openedByHover = useRef(false);
  const [open, setOpenState] = useState<MenuKey | null>(null);
  // Mirrors `open` synchronously, so hover and click handlers in the same
  // gesture agree on the current state before React re-renders.
  const openRef = useRef<MenuKey | null>(null);
  const setOpen = useCallback((next: MenuKey | null) => {
    openRef.current = next;
    if (next === null) openedByHover.current = false;
    setOpenState(next);
  }, []);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<Record<MenuKey, HTMLButtonElement | null>>({ products: null, solutions: null });
  const baseId = useId();

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(null), 160);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
  }, [pathname, setOpen]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        triggerRefs.current[open]?.focus();
        setOpen(null);
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    };
    const onFocusOut = (e: FocusEvent) => {
      const next = e.relatedTarget as Node | null;
      if (next && navRef.current && !navRef.current.contains(next)) setOpen(null);
    };
    const nav = navRef.current;
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    nav?.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      nav?.removeEventListener("focusout", onFocusOut);
    };
  }, [open, setOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  const hoverProps = (key: MenuKey) => ({
    onPointerEnter: (e: React.PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      cancelClose();
      if (openRef.current !== key) openedByHover.current = true;
      setOpen(key);
    },
    onPointerLeave: (e: React.PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      scheduleClose();
    },
  });

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-btn bg-ink px-4 py-3 font-bold text-ivory focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-200",
          scrolled || open
            ? "border-line bg-ivory/95 shadow-[0_1px_0_rgba(41,35,31,0.02),0_12px_28px_-24px_rgba(41,35,31,0.35)] backdrop-blur-md"
            : "border-transparent bg-ivory"
        )}
      >
        <div ref={navRef} className="shell relative flex h-[var(--header-height)] items-center gap-6">
          <Link href="/" className="shrink-0 rounded-md" aria-label="Jamanvar home">
            <Logo priority className="h-12 w-auto sm:h-[3.4rem]" />
          </Link>

          <nav aria-label="Main" className="hidden flex-1 items-center gap-1 lg:flex">
            {(["products", "solutions"] as MenuKey[]).map((key) => {
              const active = open === key || pathname.startsWith(key === "products" ? "/products" : "/solutions");
              return (
                <div key={key} {...hoverProps(key)}>
                  <button
                    ref={(el) => {
                      triggerRefs.current[key] = el;
                    }}
                    type="button"
                    aria-expanded={open === key}
                    aria-controls={`${baseId}-${key}`}
                    onClick={() => {
                      if (openedByHover.current) {
                        openedByHover.current = false;
                        setOpen(key);
                        return;
                      }
                      setOpen(openRef.current === key ? null : key);
                    }}
                    className={cn(
                      "flex h-10 items-center gap-1 rounded-btn px-3 text-[0.9375rem] font-semibold transition-colors",
                      active ? "text-brand-text" : "text-ink-soft hover:text-ink"
                    )}
                  >
                    {key === "products" ? "Products" : "Solutions"}
                    <ChevronDown
                      className={cn("h-4 w-4 transition-transform duration-200", open === key && "rotate-180")}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              );
            })}
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "flex h-10 items-center rounded-btn px-3 text-[0.9375rem] font-semibold transition-colors",
                  isActive(link.href) ? "text-brand-text" : "text-ink-soft hover:text-ink"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="ml-auto hidden items-center gap-2 lg:flex">
            <Link
              href="/contact"
              aria-current={isActive("/contact") ? "page" : undefined}
              className="flex h-10 items-center rounded-btn px-3 text-[0.9375rem] font-semibold text-ink-soft transition-colors hover:text-ink"
            >
              Contact
            </Link>
            <Link href="/book-a-demo" className="btn btn-primary btn-sm">
              Book a demo
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-expanded={mobileOpen}
            aria-controls={`${baseId}-mobile`}
            className="ml-auto flex h-11 w-11 items-center justify-center rounded-btn text-ink hover:bg-ivory-deep lg:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
            <span className="sr-only">Open menu</span>
          </button>

          {/* Desktop dropdown panel */}
          {open && (
            <div
              id={`${baseId}-${open}`}
              {...hoverProps(open)}
              className="absolute inset-x-8 top-full hidden pt-2 lg:block"
            >
              {open === "products" ? <ProductsPanel onNavigate={() => setOpen(null)} /> : <SolutionsPanel onNavigate={() => setOpen(null)} />}
            </div>
          )}
        </div>
      </header>

      <MobileMenu id={`${baseId}-mobile`} open={mobileOpen} onClose={() => setMobileOpen(false)} isActive={isActive} />
    </>
  );
}

function PanelLink({ href, name, description, onNavigate }: { href: string; name: string; description: string; onNavigate: () => void }) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="group block rounded-xl px-3 py-2.5 transition-colors hover:bg-ivory focus-visible:bg-ivory"
    >
      <span className="flex items-center gap-1.5 text-[0.9375rem] font-bold text-ink group-hover:text-brand-text">
        {name}
        <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true" />
      </span>
      <span className="mt-0.5 block text-sm leading-5 text-ink-muted">{description}</span>
    </Link>
  );
}

function ProductsPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="mx-auto max-w-5xl animate-fade-down overflow-hidden rounded-panel border border-line bg-surface shadow-lift">
      <div className="grid grid-cols-4 gap-2 p-4">
        {NAV_PRODUCT_GROUPS.map((group) => (
          <div key={group.label}>
            <p className="px-3 pb-1 pt-2 text-xs font-bold uppercase tracking-[0.08em] text-brand-text">{group.label}</p>
            {group.items.map((item) => (
              <PanelLink key={item.href} {...item} onNavigate={onNavigate} />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-4 border-t border-line bg-ivory px-7 py-4 text-sm">
        <span className="text-ink-muted">Every module shares one live order, so nothing is entered twice.</span>
        <div className="flex items-center gap-5">
          <Link href="/features" onClick={onNavigate} className="font-bold text-ink hover:text-brand-text">All capabilities</Link>
          <Link href="/how-it-works" onClick={onNavigate} className="font-bold text-ink hover:text-brand-text">How an order moves</Link>
        </div>
      </div>
    </div>
  );
}

function SolutionsPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="mx-auto grid max-w-4xl animate-fade-down grid-cols-[1fr_15rem] overflow-hidden rounded-panel border border-line bg-surface shadow-lift">
      <div className="grid grid-cols-2 gap-1 p-4">
        {NAV_SOLUTIONS.map((item) => (
          <PanelLink key={item.href} {...item} onNavigate={onNavigate} />
        ))}
      </div>
      <div className="flex flex-col justify-between border-l border-brand-200 bg-brand-50 p-6 text-ink">
        <div>
          <p className="text-base font-bold leading-snug">Not sure where to start?</p>
          <p className="mt-2 text-sm leading-6 text-ink-soft">
            Tell us what slows your service down. We&apos;ll show you which modules help, and which you can leave out.
          </p>
        </div>
        <Link href="/book-a-demo" onClick={onNavigate} className="link-arrow mt-6 text-sm">
          Book a demo <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

function MobileMenu({
  id,
  open,
  onClose,
  isActive,
}: {
  id: string;
  open: boolean;
  onClose: () => void;
  isActive: (href: string) => boolean;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [section, setSection] = useState<MenuKey | null>(null);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKey);
    panelRef.current?.querySelector<HTMLElement>("button")?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", handleKey);
      previous?.focus();
    };
  }, [open, handleKey]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 animate-fade-in bg-night-deep/60" onClick={onClose} aria-hidden="true" />
      <div
        id={id}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className="absolute inset-y-0 right-0 flex w-full max-w-sm animate-slide-in-right flex-col bg-ivory shadow-lift"
      >
        <div className="flex h-[var(--header-height)] shrink-0 items-center justify-between border-b border-line px-4">
          <span className="text-sm font-bold uppercase tracking-[0.08em] text-ink-muted">Menu</span>
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-btn text-ink hover:bg-ivory-deep"
          >
            <X className="h-6 w-6" aria-hidden="true" />
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        <nav aria-label="Main" className="flex-1 overflow-y-auto px-4 py-3">
          {(["products", "solutions"] as MenuKey[]).map((key) => (
            <div key={key} className="border-b border-line">
              <button
                type="button"
                aria-expanded={section === key}
                onClick={() => setSection((v) => (v === key ? null : key))}
                className="flex min-h-[3.25rem] w-full items-center justify-between text-left text-base font-bold text-ink"
              >
                {key === "products" ? "Products" : "Solutions"}
                <ChevronDown className={cn("h-5 w-5 transition-transform", section === key && "rotate-180")} aria-hidden="true" />
              </button>
              {section === key && (
                <div className="animate-fade-down pb-3">
                  {key === "products"
                    ? NAV_PRODUCT_GROUPS.map((group) => (
                        <div key={group.label} className="mb-2">
                          <p className="pb-1 pt-2 text-xs font-bold uppercase tracking-[0.08em] text-brand-text">{group.label}</p>
                          {group.items.map((item) => (
                            <MobileLink key={item.href} href={item.href} active={isActive(item.href)} onNavigate={onClose}>
                              {item.name}
                            </MobileLink>
                          ))}
                        </div>
                      ))
                    : NAV_SOLUTIONS.map((item) => (
                        <MobileLink key={item.href} href={item.href} active={isActive(item.href)} onNavigate={onClose}>
                          {item.name}
                        </MobileLink>
                      ))}
                  {key === "products" && (
                    <MobileLink href="/features" active={isActive("/features")} onNavigate={onClose}>
                      All capabilities
                    </MobileLink>
                  )}
                </div>
              )}
            </div>
          ))}
          {[...NAV_LINKS, { name: "Contact", href: "/contact" }].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "flex min-h-[3.25rem] items-center border-b border-line text-base font-bold",
                isActive(link.href) ? "text-brand-text" : "text-ink"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="shrink-0 border-t border-line bg-surface p-4">
          <Link href="/book-a-demo" onClick={onClose} className="btn btn-primary btn-block">
            Book a demo <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function MobileLink({ href, active, onNavigate, children }: { href: string; active: boolean; onNavigate: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex min-h-11 items-center rounded-btn px-3 text-[0.9375rem] font-semibold",
        active ? "bg-brand-50 text-brand-text" : "text-ink-soft hover:bg-ivory-deep"
      )}
    >
      {children}
    </Link>
  );
}
