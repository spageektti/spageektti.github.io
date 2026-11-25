export const locales = ["en", "pl"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const ui = {
  en: {
    skipToContent: "Skip to content",
    home: "Home",
    navigation: "Main navigation",
    lightMode: "Light mode",
    darkMode: "Dark mode",
    changeLanguage: "Polski",
    footer: "Personal website of Wiktor Perskawiec",
  },
  pl: {
    skipToContent: "Przejdź do treści",
    home: "Strona główna",
    navigation: "Menu główne",
    lightMode: "Tryb jasny",
    darkMode: "Tryb ciemny",
    changeLanguage: "English",
    footer: "Strona osobista Wiktora Perskawca",
  },
} as const;

export function getTranslations(locale: Locale) {
  return ui[locale];
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "en" ? "pl" : "en";
}
