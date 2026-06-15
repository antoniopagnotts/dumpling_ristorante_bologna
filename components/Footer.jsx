import Link from "next/link";

/**
 * @param {{ t: object }} props
 */
export default function Footer({ t }) {
  return (
    <footer className="bg-surface-container-highest rounded-t-xl border-t-2 border-primary/10 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16 py-12 max-w-7xl mx-auto items-center">
        {/* Brand */}
        <div className="flex flex-col gap-4">
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
          <p className="text-[14px] text-on-surface-variant">{t.footer.tagline}</p>
        </div>

        {/* Legal links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          <a
            href="#"
            className="text-[12px] tracking-[0.1em] font-bold uppercase font-label-caps text-on-surface-variant hover:text-primary transition-colors"
          >
            {t.footer.privacyPolicy}
          </a>
          <a
            href="#"
            className="text-[12px] tracking-[0.1em] font-bold uppercase font-label-caps text-on-surface-variant hover:text-primary transition-colors"
          >
            {t.footer.termsOfService}
          </a>
          <Link
            href="/contacts"
            className="text-[12px] tracking-[0.1em] font-bold uppercase font-label-caps text-primary opacity-80 hover:opacity-100 transition-opacity"
          >
            {t.footer.contactUs}
          </Link>
        </nav>

        {/* Social links */}
        <div className="flex justify-start md:justify-end gap-4">
          <a
            href="https://www.instagram.com/dumplingbologna/"
            className="text-[12px] tracking-[0.1em] font-bold uppercase font-label-caps text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
          >
            {t.footer.instagram}
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </a>
          <a
            href="https://www.facebook.com/DumplingBologna/"
            className="text-[12px] tracking-[0.1em] font-bold uppercase font-label-caps text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
          >
            {t.footer.facebook}
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
