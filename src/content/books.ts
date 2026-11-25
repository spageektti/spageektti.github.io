import type { Locale } from "@/i18n/ui";

interface Book {
  author: string;
  title: Record<Locale, string>;
  note?: Record<Locale, string>;
}

export const books: Book[] = [
  {
    author: "Alexandre Dumas",

    title: {
      en: "The Count of Monte Cristo",
      pl: "Hrabia Monte Christo",
    },

    note: {
      en: "One of those stories that makes a thousand pages feel surprisingly short.",
      pl: "Jedna z tych historii, przy których tysiąc stron wydaje się zaskakująco krótkie.",
    },
  },
];
