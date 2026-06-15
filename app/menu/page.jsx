"use client";
import { useState, useEffect } from "react";
import { getTranslations } from "@/lib/i18n";
import { client } from "@/sanity/lib/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuCategory from "@/components/MenuCategory";

const MENU_QUERY = `*[_type == "menuCategory"] | order(order asc) {
  _id,
  category,
  order,
  items[] {
    _key,
    name,
    description,
    price,
    allergens,
    photo,
    available
  }
}`;

function SkeletonCard() {
  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant animate-pulse">
      <div className="h-44 bg-surface-container" />
      <div className="p-5 space-y-3">
        <div className="flex justify-between">
          <div className="h-5 bg-surface-container rounded w-1/2" />
          <div className="h-5 bg-surface-container rounded w-12" />
        </div>
        <div className="h-4 bg-surface-container rounded w-3/4" />
        <div className="h-4 bg-surface-container rounded w-1/2" />
      </div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="space-y-16">
      {[1, 2].map((s) => (
        <div key={s}>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-8 bg-surface-container rounded animate-pulse w-48" />
            <div className="flex-1 h-px bg-outline-variant" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((c) => (
              <SkeletonCard key={c} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function MenuPage() {
  const [locale, setLocale] = useState("it");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);
  const t = getTranslations(locale);

  useEffect(() => {
    client
      .fetch(MENU_QUERY)
      .then((data) => {
        setCategories(data ?? []);
      })
      .finally(() => setLoading(false));
  }, []);

  const visibleCategories = categories.filter((cat) =>
    cat.items?.some((d) => d.available !== false)
  );

  function scrollTo(catId) {
    setActiveCategory(catId);
    const el = document.getElementById(`cat-${catId}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      <Navbar t={t} locale={locale} setLocale={setLocale} activePage="menu" />

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-16 py-12 md:py-24 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl -z-10" />

        {/* Header */}
        <div className="text-center mb-16 relative">
          <h1 className="font-display-lg-mobile md:font-display-lg text-[40px] md:text-[64px] font-extrabold leading-[1.1] text-primary mb-4 relative inline-block">
            {t.menuPage.title}
            <span
              className="absolute -top-6 -right-8 text-secondary text-4xl rotate-12 select-none"
              aria-hidden="true"
            >
              ✧
            </span>
          </h1>
          <p className="font-body-lg text-[18px] leading-[1.6] text-on-surface-variant max-w-2xl mx-auto">
            {t.menuPage.subtitle}
          </p>
        </div>

        {/* Category nav pills */}
        {!loading && visibleCategories.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {visibleCategories.map((cat) => (
              <button
                key={cat._id}
                onClick={() => scrollTo(cat._id)}
                className={`px-5 py-2 rounded-full text-[12px] tracking-[0.08em] font-bold uppercase transition-colors duration-200 border ${
                  activeCategory === cat._id
                    ? "bg-primary text-on-primary border-primary"
                    : "bg-surface-container border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        )}

        {/* Content */}
        {loading ? (
          <LoadingSkeleton />
        ) : visibleCategories.length === 0 ? (
          <div className="text-center py-24 text-on-surface-variant">
            <span
              className="material-symbols-outlined text-6xl mb-4 block"
              style={{ fontVariationSettings: "'FILL' 0" }}
              aria-hidden="true"
            >
              restaurant_menu
            </span>
            <p className="font-body-lg text-[18px]">{t.menuPage.noItems}</p>
          </div>
        ) : (
          visibleCategories.map((cat) => (
            <div key={cat._id} id={`cat-${cat._id}`} className="scroll-mt-24">
              <MenuCategory
                category={cat.category}
                items={cat.items ?? []}
                allergensLabel={t.menuPage.allergensLabel}
              />
            </div>
          ))
        )}
      </main>

      <Footer t={t} />
    </div>
  );
}
