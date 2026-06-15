"use client";
import Link from "next/link";
import { locales, localeLabels } from "@/lib/i18n";

const navLinks = [
  { key: "home", href: "/" },
  { key: "menu", href: "/menu" },
  { key: "contacts", href: "/contacts" },
];

/**
 * @param {{ t: object, locale: string, setLocale: (l: string) => void, activePage: "home"|"menu"|"contacts" }} props
 */
export default function Navbar({ t, locale, setLocale, activePage }) {
  return (
    <header className="bg-surface/90 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant">
      <div className="flex justify-between items-center w-full px-4 md:px-16 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="font-script-accent text-[28px] text-primary leading-none hover:opacity-80 transition-opacity flex items-center gap-2"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
            aria-hidden="true"
          >
            restaurant
          </span>
          Dumpling Bologna
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(({ key, href }) => {
            const isActive = activePage === key;
            return (
              <Link
                key={key}
                href={href}
                className={
                  isActive
                    ? "text-primary font-bold border-b-2 border-primary hover:scale-105 transition-transform"
                    : "text-on-surface-variant hover:text-primary hover:scale-105 transition-transform"
                }
              >
                {t.nav[key]}
              </Link>
            );
          })}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <select
            value={locale}
            onChange={(e) => setLocale(e.target.value)}
            className="bg-surface-container border border-outline-variant text-on-surface text-[12px] font-bold rounded-full px-3 py-2 cursor-pointer hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30"
            aria-label="Language"
          >
            {locales.map((l) => (
              <option key={l} value={l}>
                {localeLabels[l]}
              </option>
            ))}
          </select>

          <Link
            href="/prenota"
            className="bg-primary text-on-primary rounded-full px-6 py-2 text-[12px] tracking-[0.1em] font-bold uppercase hover:scale-105 transition-transform duration-200"
          >
            {t.nav.orderNow}
          </Link>
        </div>
      </div>
    </header>
  );
}
