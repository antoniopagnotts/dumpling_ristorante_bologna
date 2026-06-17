import Link from "next/link";

/**
 * @param {{ t: object }} props
 */
export default function Footer({ t }) {
  return (
    <footer className="bg-surface-container-highest rounded-t-xl border-t-2 border-primary/10 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16 py-12 max-w-7xl mx-auto items-start">
        {/* Brand + social icons */}
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
          <div className="flex gap-3 mt-1">
            <a
              href="https://www.instagram.com/dumplingbologna/"
              aria-label={t.footer.instagram}
              className="w-10 h-10 rounded-full bg-surface-container border-2 border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-200 hover:-translate-y-1"
            >
              <span className="material-symbols-outlined text-[18px]">photo_camera</span>
            </a>
            <a
              href="https://www.facebook.com/DumplingBologna/"
              aria-label={t.footer.facebook}
              className="w-10 h-10 rounded-full bg-surface-container border-2 border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-200 hover:-translate-y-1"
            >
              <span className="material-symbols-outlined text-[18px]">thumb_up</span>
            </a>
          </div>
        </div>

        {/* Legal + contact links */}
        <nav className="flex flex-col gap-3">
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

        {/* Social text links */}
        <nav className="flex flex-col gap-3">
          <a
            href="https://www.instagram.com/dumplingbologna/"
            className="text-[12px] tracking-[0.1em] font-bold uppercase font-label-caps text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">photo_camera</span>
            {t.footer.instagram}
          </a>
          <a
            href="https://www.facebook.com/DumplingBologna/"
            className="text-[12px] tracking-[0.1em] font-bold uppercase font-label-caps text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">thumb_up</span>
            {t.footer.facebook}
          </a>
        </nav>
      </div>
    </footer>
  );
}
