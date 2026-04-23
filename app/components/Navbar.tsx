"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/features", label: "المميزات" },
  { href: "/about", label: "عن النظام" },
  { href: "/contact", label: "تواصل معنا" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-[0_4px_20px_-12px_rgba(139,26,31,0.25)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-12 overflow-hidden rounded-xl ring-1 ring-black/5 bg-white">
            <Image
              src="/logo.png"
              alt="شعار برنامج المحتسب"
              fill
              sizes="48px"
              className="object-contain p-1"
              priority
            />
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-lg font-extrabold text-ink-900">
              برنامج المحتسب
            </span>
            <span className="text-[11px] text-ink-500">
              إدارة شؤون الموظفين
            </span>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  data-active={active}
                  className="nav-link text-[15px] font-medium text-ink-700 hover:text-brand-700 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-brand-700 hover:bg-brand-800 text-white px-5 py-2.5 text-sm font-semibold shadow-lg shadow-brand-700/20 transition-colors"
          >
            اطلب عرضاً تجريبياً
            <span aria-hidden>←</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 text-ink-700 hover:bg-white"
            aria-label="فتح القائمة"
            aria-expanded={open}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-ink-100 bg-white/95 backdrop-blur">
          <ul className="mx-auto max-w-7xl px-5 py-4 flex flex-col gap-1">
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors ${
                      active
                        ? "bg-brand-50 text-brand-700"
                        : "text-ink-700 hover:bg-ink-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2">
              <Link
                href="/contact"
                className="block rounded-lg bg-brand-700 hover:bg-brand-800 text-white px-3 py-2.5 text-center text-sm font-semibold transition-colors"
              >
                اطلب عرضاً تجريبياً
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
