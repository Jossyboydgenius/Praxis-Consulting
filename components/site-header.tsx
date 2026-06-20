"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Values", href: "/#values" },
  { label: "Founder", href: "/#founder" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const closeOnScroll = () => setOpen(false);
    window.addEventListener("scroll", closeOnScroll, { passive: true });

    return () => window.removeEventListener("scroll", closeOnScroll);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy/95 backdrop-blur-lg shadow-lg shadow-navy/20"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link
            href="/"
            aria-label="Praxis Consulting, go to homepage"
            className="flex items-center gap-2 group"
          >
            <Image
              src="/images/logo.png"
              alt="Praxis Consulting"
              width={248}
              height={60}
              className="h-9 md:h-11 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-navy hover:bg-gold-soft transition-colors"
            >
              Get in touch
            </Link>
          </div>

          <button
            className="lg:hidden relative h-10 w-10 text-white"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span
              className={cn(
                "absolute inset-0 flex items-center justify-center transition-all duration-300",
                open
                  ? "opacity-0 rotate-90 scale-75"
                  : "opacity-100 rotate-0 scale-100",
              )}
              aria-hidden={open}
            >
              <Menu className="h-6 w-6" />
            </span>
            <span
              className={cn(
                "absolute inset-0 flex items-center justify-center transition-all duration-300",
                open
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-75",
              )}
              aria-hidden={!open}
            >
              <X className="h-6 w-6" />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 bg-navy/95 backdrop-blur-lg",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "text-white/80 hover:text-gold py-2.5 text-sm transition-all duration-300",
                open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3",
              )}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className={cn(
              "mt-2 inline-flex justify-center items-center rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-navy transition-all duration-300",
              open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3",
            )}
            style={{ transitionDelay: `${navLinks.length * 70}ms` }}
          >
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
}
