"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { mainNav, services, site } from "@/lib/site";
import { Logo } from "./logo";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors duration-[var(--duration-fast)]",
        scrolled
          ? "border-line bg-surface/85 backdrop-blur"
          : "bg-surface border-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-[1180px] items-center gap-8 px-6 py-4">
        <Logo />

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.children ? (
              <ServicesDropdown key={item.href} active={pathname.startsWith(item.href)} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={cn(
                  "text-body hover:text-primary rounded-md px-3 py-2 text-[0.95rem] font-medium transition-colors",
                  pathname === item.href && "text-primary",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <a
            href={`tel:${site.contact.phonePrimary.replace(/\s/g, "")}`}
            className="text-muted hover:text-primary hidden items-center gap-1.5 text-sm font-semibold transition-colors xl:flex"
          >
            <Phone className="size-4" aria-hidden />
            {site.contact.phonePrimary}
          </a>
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "sm" }), "hidden sm:inline-flex")}
          >
            Book a Consultation
          </Link>
          <button
            type="button"
            className="text-ink inline-flex size-10 items-center justify-center rounded-md lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="border-line bg-surface border-t lg:hidden">
          <nav aria-label="Mobile" className="mx-auto max-w-[1180px] px-6 py-4">
            <ul className="flex flex-col gap-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMobile}
                    className="text-ink hover:bg-surface-soft block rounded-md px-2 py-2.5 font-medium"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="border-line ml-3 border-l pl-3">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            onClick={closeMobile}
                            className="text-body hover:text-primary block rounded-md px-2 py-2 text-sm"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              onClick={closeMobile}
              className={cn(buttonVariants({ size: "md" }), "mt-3 w-full")}
            >
              Book a Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

/** Accessible hover/focus services dropdown. */
function ServicesDropdown({ active }: { active: boolean }) {
  const [open, setOpen] = React.useState(false);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hide = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <Link
        href="/services"
        aria-expanded={open}
        className={cn(
          "text-body hover:text-primary flex items-center gap-1 rounded-md px-3 py-2 text-[0.95rem] font-medium transition-colors",
          active && "text-primary",
        )}
      >
        Services
        <ChevronDown
          className={cn(
            "size-4 transition-transform duration-[var(--duration-fast)]",
            open && "rotate-180",
          )}
          aria-hidden
        />
      </Link>
      {open && (
        <div className="absolute top-full left-0 pt-2">
          <ul className="border-line bg-surface w-72 rounded-[var(--radius-lg)] border p-2 shadow-md">
            {services.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="text-body hover:bg-surface-soft hover:text-primary block rounded-md px-3 py-2.5 text-sm transition-colors"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
