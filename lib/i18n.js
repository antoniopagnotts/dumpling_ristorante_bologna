export const translations = {
  en: {
    meta: {
      title: "Dumpling Bologna — Bologna's Cutest Dumplings",
      description:
        "Experience the whimsical blend of traditional Chinese craftsmanship and modern culinary delight. Handmade daily with love.",
    },
    nav: {
      menu: "Menu",
      story: "Our Story",
      gallery: "Gallery",
      location: "Location",
      orderNow: "Order Now",
    },
    hero: {
      badge: "Oishii Joy! ✨",
      titleLine1: "Bologna's",
      titleAccent: "Cutest",
      titleLine2: "Dumplings",
      description:
        "Experience the whimsical blend of traditional Chinese craftsmanship and modern culinary delight. Handmade daily with love and a sprinkle of magic.",
      ctaPrimary: "Order Now",
      ctaSecondary: "View Menu",
    },
    menu: {
      heading: "Signature Bites",
      subheading: "Hand-folded perfection",
      chefChoice: "Chef's Choice",
      items: [
        {
          name: "The Classic Baozi",
          description:
            "Fluffy, cloud-like buns filled with savory goodness. A staple of comfort.",
          price: "€8.50",
        },
        {
          name: "Crispy Potstickers",
          description: "Golden bottom, juicy center.",
          price: "€7.00",
        },
        {
          name: "Crystal Shrimp",
          description: "Delicate and translucent.",
          price: "€9.50",
        },
        {
          name: "Wonton Soup",
          description:
            "Silky wonton parcels in a rich, aromatic broth. A warming classic straight from the streets of Hong Kong.",
          price: "€9.00",
        },
      ],
      addToCart: "Add",
      seeFullMenu: "See Full Menu",
    },
    story: {
      titleLine1: "Our Story is",
      titleAccent: "Hand-Drawn",
      p1: "Born from a love of traditional Chinese recipes and the vibrant energy of Bologna, our restaurant is a canvas where culinary art meets manga charm. Every dumpling is a character in our delicious narrative.",
      p2: "We believe food should not only taste incredible but also bring a smile to your face. That's why we fold joy into every bite.",
      madeWithLove: "Made with love daily",
    },
    footer: {
      tagline: "© 2024 Dumpling Bologna. Made with Oishii joy.",
      legal: "Legal",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      connect: "Connect",
      contactUs: "Contact Us",
      instagram: "Instagram",
      facebook: "Facebook",
    },
  },

  it: {
    meta: {
      title: "Dumpling Bologna — I Migliori Dumpling di Bologna",
      description:
        "Vivi il magico connubio tra la tradizione artigianale cinese e la modernità culinaria. Preparati a mano ogni giorno con amore.",
    },
    nav: {
      menu: "Menu",
      story: "La Nostra Storia",
      gallery: "Galleria",
      location: "Dove Siamo",
      orderNow: "Ordina Ora",
    },
    hero: {
      badge: "Oishii Joy! ✨",
      titleLine1: "I Migliori",
      titleAccent: "Dumpling",
      titleLine2: "di Bologna",
      description:
        "Vivi il magico connubio tra la tradizione artigianale cinese e la modernità culinaria. Preparati a mano ogni giorno con amore e un pizzico di magia.",
      ctaPrimary: "Ordina Ora",
      ctaSecondary: "Vedi il Menu",
    },
    menu: {
      heading: "I Nostri Piatti Famosi",
      subheading: "Piegati a mano, con perfezione",
      chefChoice: "Scelta dello Chef",
      items: [
        {
          name: "Il Classico Baozi",
          description:
            "Panini soffici come nuvole, ripieni di bontà saporita. Un classico della tradizione.",
          price: "€8.50",
        },
        {
          name: "Gyoza Croccanti",
          description: "Base dorata, cuore succoso.",
          price: "€7.00",
        },
        {
          name: "Gamberi di Cristallo",
          description: "Delicati e trasparenti.",
          price: "€9.50",
        },
        {
          name: "Zuppa di Wonton",
          description:
            "Delicati involucri di wonton in un brodo aromatico e avvolgente. Un classico riscaldante direttamente dalle strade di Hong Kong.",
          price: "€9.00",
        },
      ],
      addToCart: "Aggiungi",
      seeFullMenu: "Vedi il Menu Completo",
    },
    story: {
      titleLine1: "La Nostra Storia è",
      titleAccent: "Disegnata a Mano",
      p1: "Nata dall'amore per le ricette tradizionali cinesi e dall'energia vibrante di Bologna, il nostro ristorante è una tela dove l'arte culinaria incontra il fascino del manga. Ogni dumpling è un personaggio nella nostra gustosa narrazione.",
      p2: "Crediamo che il cibo non debba solo essere incredibilmente buono, ma portare anche un sorriso sul volto. Per questo pieghiamo la gioia in ogni morso.",
      madeWithLove: "Preparato con amore ogni giorno",
    },
    footer: {
      tagline: "© 2024 Dumpling Bologna. Fatto con gioia Oishii.",
      legal: "Legale",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Termini di Servizio",
      connect: "Contattaci",
      contactUs: "Scrivici",
      instagram: "Instagram",
      facebook: "Facebook",
    },
  },
};

/**
 * Returns the translation object for the given locale.
 * Falls back to Italian if the locale is not found.
 * @param {"it" | "en"} locale
 */
export function getTranslations(locale = "it") {
  return translations[locale] ?? translations.it;
}

export const defaultLocale = "it";
export const locales = ["it", "en"];
export const localeLabels = { it: "🇮🇹 IT", en: "🇬🇧 EN" };
