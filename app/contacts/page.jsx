"use client";
import { useState } from "react";
import { getTranslations } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contacts() {
  const [locale, setLocale] = useState("it");
  const [formState, setFormState] = useState("idle"); // "idle" | "sending" | "sent"
  const t = getTranslations(locale);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    setFormState("sending");
    setTimeout(() => {
      setFormState("sent");
      setTimeout(() => {
        setFormState("idle");
        form.reset();
      }, 3000);
    }, 1500);
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      <Navbar t={t} locale={locale} setLocale={setLocale} activePage="contacts" />

      {/* ── Main Content ── */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-16 py-12 md:py-24 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl -z-10" />

        <div className="text-center mb-16 relative">
          <h1 className="font-display-lg-mobile md:font-display-lg text-[40px] md:text-[64px] font-extrabold leading-[1.1] text-primary mb-4 relative inline-block">
            {t.contacts.title}
            <span
              className="absolute -top-6 -right-8 text-secondary text-4xl rotate-12 select-none"
              aria-hidden="true"
            >
              ✧
            </span>
          </h1>
          <p className="font-body-lg text-[18px] leading-[1.6] text-on-surface-variant max-w-2xl mx-auto">
            {t.contacts.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* ── Info Side ── */}
          <div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1">
            {/* Address card */}
            <div className="manga-panel bg-surface-container-lowest p-8 rounded-xl relative overflow-hidden">
              <h2 className="font-headline-md text-[32px] font-bold text-tertiary mb-6 flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-primary text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  location_on
                </span>
                {t.contacts.findUs}
              </h2>
              <address className="not-italic font-body-lg text-[18px] text-on-surface mb-8 space-y-2">
                <p className="font-bold">{t.contacts.addressName}</p>
                <p>{t.contacts.addressLine1}</p>
                <p>{t.contacts.addressLine2}</p>
              </address>
              <div className="space-y-4">
                <a
                  href={`tel:${t.contacts.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors font-body-lg text-[18px] group"
                >
                  <span className="material-symbols-outlined text-secondary group-hover:text-primary transition-colors">
                    call
                  </span>
                  {t.contacts.phone}
                </a>
                <a
                  href={`mailto:${t.contacts.email}`}
                  className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors font-body-lg text-[18px] group"
                >
                  <span className="material-symbols-outlined text-secondary group-hover:text-primary transition-colors">
                    mail
                  </span>
                  {t.contacts.email}
                </a>
              </div>
            </div>

            {/* Social card */}
            <div className="manga-panel bg-surface-container p-8 rounded-xl text-center">
              <h3 className="font-script-accent text-[28px] text-tertiary italic mb-4">
                {t.contacts.followFlavor}
              </h3>
              <div className="flex justify-center gap-6">
                <a
                  href="https://www.instagram.com/dumplingbologna/"
                  className="w-12 h-12 rounded-full bg-surface-container-lowest border-2 border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-200 hover:-translate-y-1 shadow-sm"
                  aria-label="Instagram"
                >
                  <span className="material-symbols-outlined">photo_camera</span>
                </a>
                <a
                  href="https://www.facebook.com/DumplingBologna/"
                  className="w-12 h-12 rounded-full bg-surface-container-lowest border-2 border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-200 hover:-translate-y-1 shadow-sm"
                  aria-label="Facebook"
                >
                  <span className="material-symbols-outlined">thumb_up</span>
                </a>
              </div>
            </div>

            {/* Kitchen image */}
            <div
              className="w-full h-48 bg-surface-variant rounded-xl border border-outline-variant overflow-hidden group"
              id="map"
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAWmkg_c_He1lkb6nQP_lEkxsSVrKspnRlZMjWXhlBM51ShERtnYsKyge_KXBkreSgFP3F2JLiy-hNVOHHu-Ks2fwhMDag-7GMB_D1wDGEZsOIas5h93_5VqOdRLBVFPGHQgp8OGO2HBjiAp3TZHyfpAPcoG4hGllYsuo1tHuES7ta1J2GBZ9rhhjH4uTmQrgp0K-cgto7oNEJCS-Y5xZpnaVvzLv8ZYlF2c_V5_5mJ7BZFKlnA8HNoua5ZMQ_lsxF_FMwgvaT0Yw')",
                }}
                role="img"
                aria-label="Dumpling Bologna kitchen"
              />
            </div>
          </div>

          {/* ── Form Side ── */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-surface-container-lowest p-8 md:p-12 rounded-2xl border border-outline-variant/50 shadow-sm relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-[12px] tracking-[0.1em] font-bold uppercase font-label-caps text-on-surface-variant"
                    >
                      {t.contacts.form.name}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder={t.contacts.form.namePlaceholder}
                      className="form-input w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 text-on-surface font-body-lg text-[18px] placeholder:text-outline focus:ring-0"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-[12px] tracking-[0.1em] font-bold uppercase font-label-caps text-on-surface-variant"
                    >
                      {t.contacts.form.email}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder={t.contacts.form.emailPlaceholder}
                      className="form-input w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 text-on-surface font-body-lg text-[18px] placeholder:text-outline focus:ring-0"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-[12px] tracking-[0.1em] font-bold uppercase font-label-caps text-on-surface-variant"
                  >
                    {t.contacts.form.subject}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="form-input w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 text-on-surface font-body-lg text-[18px] focus:ring-0 appearance-none"
                  >
                    {t.contacts.form.subjectOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-[12px] tracking-[0.1em] font-bold uppercase font-label-caps text-on-surface-variant"
                  >
                    {t.contacts.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder={t.contacts.form.messagePlaceholder}
                    className="form-input w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 text-on-surface font-body-lg text-[18px] placeholder:text-outline focus:ring-0 resize-y"
                  />
                </div>

                <div className="pt-4 flex items-center justify-between gap-4 flex-wrap">
                  <p className="font-body-sm text-[14px] text-on-surface-variant/70 italic">
                    {t.contacts.form.replyTime}
                  </p>
                  <button
                    type="submit"
                    disabled={formState !== "idle"}
                    className={`btn-primary px-8 py-4 rounded-full text-[12px] tracking-[0.1em] font-bold uppercase flex items-center gap-2 shadow-md transition-colors disabled:opacity-80 ${
                      formState === "sent"
                        ? "bg-secondary text-on-secondary"
                        : "bg-primary text-on-primary"
                    }`}
                  >
                    {formState === "idle" && (
                      <>
                        {t.contacts.form.send}
                        <span className="material-symbols-outlined text-sm">send</span>
                      </>
                    )}
                    {formState === "sending" && (
                      <>
                        {t.contacts.form.sending}
                        <span className="material-symbols-outlined text-sm animate-spin">sync</span>
                      </>
                    )}
                    {formState === "sent" && (
                      <>
                        {t.contacts.form.sent}
                        <span className="material-symbols-outlined text-sm">check_circle</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer t={t} />
    </div>
  );
}
