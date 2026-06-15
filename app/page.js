"use client";
import { useState } from "react";
import Link from "next/link";
import { getTranslations, locales, localeLabels } from "@/lib/i18n";

export default function Home() {
  const [locale, setLocale] = useState("it");
  const t = getTranslations(locale);

  return (
    <div className="flex flex-col min-h-screen">
      {/* ── TopAppBar ── */}
      <header className="bg-surface/90 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant">
        <div className="flex justify-between items-center w-full px-4 md:px-16 py-4 max-w-7xl mx-auto">
          <div className="font-script-accent text-[28px] text-primary leading-none">
            Dumpling Bologna
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link
              href="/menu"
              className="text-primary font-bold border-b-2 border-primary hover:scale-105 transition-transform"
            >
              {t.nav.menu}
            </Link>
            <a
              href="#story"
              className="text-on-surface-variant hover:text-primary hover:scale-105 transition-transform"
            >
              {t.nav.story}
            </a>
            <a
              href="#gallery"
              className="text-on-surface-variant hover:text-primary hover:scale-105 transition-transform"
            >
              {t.nav.gallery}
            </a>
            <Link
              href="/contatti"
              className="text-on-surface-variant hover:text-primary hover:scale-105 transition-transform"
            >
              {t.nav.location}
            </Link>
          </nav>

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

      <main>
        {/* ── Hero ── */}
        <section className="px-4 md:px-16 py-16 md:py-24 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 relative overflow-hidden">
          <div className="flex-1 z-10">
            <span className="inline-block px-4 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[12px] tracking-[0.1em] font-bold uppercase mb-4 shadow-[2px_2px_0px_#735c00]">
              {t.hero.badge}
            </span>

            <h1 className="font-display-lg-mobile md:font-display-lg text-[40px] md:text-[64px] font-extrabold leading-[1.1] tracking-tight text-on-surface mb-6">
              {t.hero.titleLine1}{" "}
              <span className="text-primary font-script-accent text-5xl md:text-7xl font-normal">
                {t.hero.titleAccent}
              </span>{" "}
              {t.hero.titleLine2}
            </h1>

            <p className="font-body-lg text-[18px] leading-[1.6] text-on-surface-variant mb-8 max-w-lg">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/prenota"
                className="bg-primary text-on-primary rounded-full px-8 py-4 text-xl font-bold font-headline-md hover:scale-105 transition-transform duration-200 shadow-[2px_2px_0px_#930018] text-center"
              >
                {t.hero.ctaPrimary}
              </Link>
              <Link
                href="/menu"
                className="border-2 border-primary text-primary rounded-full px-8 py-4 text-xl font-bold font-headline-md hover:bg-primary-fixed transition-colors duration-200 text-center"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>

          <div className="flex-1 relative z-10">
            {/* TODO: Replace with a local /public/hero.jpg once you have the final asset */}
            <img
              alt="A playful manga-style illustration of a happy steaming dumpling mascot being picked up by chopsticks"
              className="w-full h-auto rounded-xl shadow-[8px_8px_0px_#e3bebb] border-4 border-white object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuChIjRzv-HYbnpC8_WdOm4H7VVfrx5ZN686pUCzDVatUBsreSP65XvQnPTdLs5-P7xeUTSizkXQROqmuVSD9ymO1XaM5wQnXs-S_4Lclk5vrsy9HMKWnNKKw6_qCqeOuE8uIF-bTg98QYBajL2Echmy9ZQ4E536L0zrAavROXcW8yuyPuNAut8hZCXg5WxzRwOferdbtLuwt4Cv0g_BynBgcOdRSCp6ipXJavajOqh-hrn9XjnXHR3L2a7VnH3COGO4fYwVu3iWNA"
            />
          </div>

          {/* Decorative sparkles */}
          <span
            className="material-symbols-outlined text-secondary absolute top-10 right-20 text-4xl select-none pointer-events-none"
            style={{ fontVariationSettings: "'FILL' 1" }}
            aria-hidden="true"
          >
            star
          </span>
          <span
            className="material-symbols-outlined text-primary absolute bottom-20 left-10 text-3xl select-none pointer-events-none"
            style={{ fontVariationSettings: "'FILL' 1" }}
            aria-hidden="true"
          >
            favorite
          </span>
        </section>

        {/* ── Menu Highlights (Bento Grid) ── */}
        <section className="bg-surface-container-low py-16 md:py-24" id="menu">
          <div className="px-4 md:px-16 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-headline-md text-[32px] font-bold text-on-surface mb-2">
                {t.menu.heading}
              </h2>
              <p className="font-script-accent text-2xl text-on-surface-variant italic">
                {t.menu.subheading}
              </p>
            </div>

            <div className="bento-grid">
              {/* Large featured item */}
              <div className="bg-surface rounded-xl p-6 border border-outline-variant flex flex-col md:flex-row gap-6 items-center bento-item-large hover:-translate-y-1 transition-transform duration-300">
                <img
                  alt="Steaming bamboo baskets filled with perfectly plump round dumplings"
                  className="w-full md:w-1/2 h-64 object-cover rounded-lg"
                  src="/image1.png"
                />
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[10px] tracking-[0.1em] font-bold uppercase mb-2">
                    {t.menu.chefChoice}
                  </span>
                  <h3 className="font-headline-md text-xl font-bold mb-2">
                    {t.menu.items[0].name}
                  </h3>
                  <p className="font-body-sm text-[14px] text-on-surface-variant mb-4">
                    {t.menu.items[0].description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-headline-md text-primary font-bold text-xl">
                      {t.menu.items[0].price}
                    </span>
                    <button
                      className="bg-primary-container text-on-primary-container rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform"
                      aria-label={t.menu.addToCart}
                    >
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Small item 2 */}
              <div className="bg-surface rounded-xl p-6 border border-outline-variant flex flex-col hover:-translate-y-1 transition-transform duration-300">
                <div className="h-40 bg-surface-container-high rounded-lg mb-4 relative overflow-hidden">
                  <img
                    alt="Crispy gyoza dumplings with golden brown bottoms served on a plate with dipping sauce"
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/image2.png"
                  />
                </div>
                <h3 className="font-headline-md text-lg font-bold mb-1">
                  {t.menu.items[1].name}
                </h3>
                <p className="font-body-sm text-[14px] text-on-surface-variant mb-4 flex-1">
                  {t.menu.items[1].description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-headline-md text-primary font-bold">
                    {t.menu.items[1].price}
                  </span>
                  <button className="border border-primary text-primary rounded-full px-4 py-1 text-[12px] tracking-[0.1em] font-bold uppercase hover:bg-primary-fixed transition-colors">
                    {t.menu.addToCart}
                  </button>
                </div>
              </div>

              {/* Small item 3 */}
              <div className="bg-surface rounded-xl p-6 border border-outline-variant flex flex-col hover:-translate-y-1 transition-transform duration-300">
                <div className="h-40 bg-surface-container-high rounded-lg mb-4 relative overflow-hidden">
                  <img
                    alt="Delicate translucent har gow shrimp dumplings in a bamboo steamer"
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/image3.png"
                  />
                </div>
                <h3 className="font-headline-md text-lg font-bold mb-1">
                  {t.menu.items[2].name}
                </h3>
                <p className="font-body-sm text-[14px] text-on-surface-variant mb-4 flex-1">
                  {t.menu.items[2].description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-headline-md text-primary font-bold">
                    {t.menu.items[2].price}
                  </span>
                  <button className="border border-primary text-primary rounded-full px-4 py-1 text-[12px] tracking-[0.1em] font-bold uppercase hover:bg-primary-fixed transition-colors">
                    {t.menu.addToCart}
                  </button>
                </div>
              </div>

              {/* Large item 4 — Wonton */}
              <div className="bg-surface rounded-xl p-6 border border-outline-variant flex flex-col md:flex-row gap-6 items-center bento-item-large hover:-translate-y-1 transition-transform duration-300">
                <img
                  alt="Silky wonton parcels in a rich aromatic broth"
                  className="w-full md:w-1/2 h-64 object-cover rounded-lg"
                  src="/image4.png"
                />
                <div className="flex-1">
                  <h3 className="font-headline-md text-xl font-bold mb-2">
                    {t.menu.items[3].name}
                  </h3>
                  <p className="font-body-sm text-[14px] text-on-surface-variant mb-4">
                    {t.menu.items[3].description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-headline-md text-primary font-bold text-xl">
                      {t.menu.items[3].price}
                    </span>
                    <button
                      className="bg-primary-container text-on-primary-container rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform"
                      aria-label={t.menu.addToCart}
                    >
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/menu"
                className="inline-block bg-surface border-2 border-outline text-on-surface rounded-full px-8 py-3 text-lg font-bold font-headline-md hover:bg-surface-variant transition-colors shadow-[4px_4px_0px_#e3bebb]"
              >
                {t.menu.seeFullMenu}
              </Link>
            </div>
          </div>
        </section>

        {/* ── Our Story (Manga Panel Layout) ── */}
        <section className="py-16 md:py-24 px-4 md:px-16 max-w-7xl mx-auto" id="story">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 pr-0 md:pr-12">
              <h2 className="font-display-lg-mobile md:font-display-lg text-[40px] md:text-[64px] font-extrabold leading-[1.2] text-on-surface">
                {t.story.titleLine1}
                <br />
                <span className="text-primary font-script-accent text-5xl md:text-7xl font-normal">
                  {t.story.titleAccent}
                </span>
              </h2>
              <p className="font-body-lg text-[18px] leading-[1.6] text-on-surface-variant">
                {t.story.p1}
              </p>
              <p className="font-body-lg text-[18px] leading-[1.6] text-on-surface-variant">
                {t.story.p2}
              </p>
            </div>

            {/* Manga-style panels */}
            <div className="grid grid-cols-2 gap-4">
              <div className="comic-panel col-span-2 h-48 relative">
                <img
                  alt="Hands skillfully folding dough to make dumplings with flour dusted on a wooden table"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiCHRzeXXDfooR1WRgaQwFlWgoJ79rYcePZqsdwD1E-eo38QzPn2z9trG9idSOaEZAvqMLnUgPfHQOJQBy3D2t-v9gDYMlaKiUInQbS64V_HTmvqJYxwW7jHh7PvSsRFliTSKR7EF9jN6OEeHz6WcYeYl3zlXorn0pleqwgTtE9BIKG_UrBJqWDyWR50BWjpaSNSjFOWTm5_2EMSAwe9KwgYxNrnaHQgfVL_1ZeYR0rvDY7Pi5wKLs0lo52qqXoWCWZ7iKRUEdjQ"
                />
              </div>
              <div className="comic-panel h-40 relative overflow-hidden">
                <div className="absolute inset-0 bg-secondary-container/20 mix-blend-multiply" />
                <img
                  alt="People laughing and sharing food around a table in a warm restaurant"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVufTCg1tSeQpmky_NnXyhAo0pmRkhQXX8NbxzLpA84pq00C3HyLhFXKKIc7g6yrJKDN6liWH7AeJ71PLEdnfOCmynQ7p19FQacbraS4nf5-zACiE62fMfZH2c1ZBGtGYc7SXxVRVNBsRdDWUo2CI8RY1WCI4nOgiP9y_iqnE0aWJ3NuATjxf5hevfObw0tRaos_K2jfho34XBZvKqXS1BtSria8AjS3u9mf4i7ohx4BoFF0IuT3Xum4ojkOH8CWV5hLMQvxah-Q"
                />
              </div>
              <div className="comic-panel h-40 bg-surface-container flex items-center justify-center p-4 text-center">
                <div>
                  <span
                    className="material-symbols-outlined text-primary text-4xl mb-2 block"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                    aria-hidden="true"
                  >
                    restaurant_menu
                  </span>
                  <p className="font-script-accent text-xl text-on-surface-variant italic">
                    {t.story.madeWithLove}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-surface-container-highest rounded-t-xl border-t-2 border-primary/10 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16 py-12 max-w-7xl mx-auto">
          <div className="flex flex-col gap-4">
            <div className="font-script-accent text-[28px] text-primary leading-none">
              Dumpling Bologna
            </div>
            <p className="text-[14px] text-on-surface">{t.footer.tagline}</p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-label-caps text-[12px] tracking-[0.1em] font-bold uppercase text-on-surface mb-2">
              {t.footer.legal}
            </h4>
            <a
              href="#"
              className="text-[14px] text-on-surface-variant hover:text-primary transition-colors"
            >
              {t.footer.privacyPolicy}
            </a>
            <a
              href="#"
              className="text-[14px] text-on-surface-variant hover:text-primary transition-colors"
            >
              {t.footer.termsOfService}
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-label-caps text-[12px] tracking-[0.1em] font-bold uppercase text-on-surface mb-2">
              {t.footer.connect}
            </h4>
            <Link
              href="/contatti"
              className="text-[14px] text-on-surface-variant hover:text-primary transition-colors"
            >
              {t.footer.contactUs}
            </Link>
            <a
              href="https://www.instagram.com/dumplingbologna/"
              className="text-[14px] text-on-surface-variant hover:text-primary transition-colors"
            >
              {t.footer.instagram}
            </a>
            <a
              href="https://www.facebook.com/DumplingBologna/"
              className="text-[14px] text-on-surface-variant hover:text-primary transition-colors"
            >
              {t.footer.facebook}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

