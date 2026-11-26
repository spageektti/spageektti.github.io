import type { ImageMetadata } from "astro";
import type { Locale } from "@/i18n/ui";

import olympiadPhoto from "@/assets/images/olympiad.jpg";

type LocalizedText = Record<Locale, string>;

export interface AchievementPhoto {
  src: ImageMetadata;
  alt: LocalizedText;
  caption?: LocalizedText;
  credit?: string;
}

export interface AchievementSource {
  title: string;
  url: string;
  publisher?: string;
  type: "results" | "press" | "certificate" | "other";
}

export interface Achievement {
  year: number;
  title: LocalizedText;
  result: LocalizedText;
  description?: LocalizedText;
  photo?: AchievementPhoto;
  sources?: readonly AchievementSource[];
}

export const achievements: readonly Achievement[] = [
  {
    year: 2025,

    title: {
      en: "Regional Thematic Informatics Competition",
      pl: "Wojewódzki Tematyczny Konkurs Informatyczny",
    },

    result: {
      en: "Laureate — highest score in Wielkopolska",
      pl: "Laureat — najwyższy wynik w Wielkopolsce",
    },

    description: {
      en: "Competition organized by the regional education authority. Six laureates were selected from 529 participants.",
      pl: "Konkurs organizowany przez kuratorium oświaty. Spośród 529 uczestników wyłoniono sześciu laureatów.",
    },

    sources: [
      {
        title: "Wiktor Perskawiec znowu najlepszy w Wielkopolsce",
        publisher: "Życie Kalisza",
        url: "https://zyciekalisza.pl/artykul/wiktor-perskawiec-znowu-n1700416",
        type: "press",
      },
    ],
  },

  {
    year: 2025,

    title: {
      en: "Best Programmer of the City of Poznań",
      pl: "Najlepszy Programista Miasta Poznania",
    },

    result: {
      en: "First place",
      pl: "I miejsce",
    },

    description: {
      en: "Winner of the seventh edition of the competition. The final involved programming, web development and spreadsheet-based data analysis.",
      pl: "Zwycięzca siódmej edycji konkursu. Zadania finałowe obejmowały programowanie, tworzenie stron internetowych i analizę danych w arkuszu kalkulacyjnym.",
    },

    sources: [
      {
        title: "Rozstrzygnięcie konkursu",
        publisher: "Zespół Szkół Łączności w Poznaniu",
        url: "https://zsl.poznan.pl/rozstrzygniecie-konkursu/",
        type: "results",
      },
      {
        title:
          "VML Enterprise Solutions supports the Best Programmer competition",
        publisher: "VML",
        url: "https://www.vml.com/news/vml-enterprise-solutions-supports-the-best-programmer-competition",
        type: "other",
      },
      {
        title: "Poznaliśmy najlepszego programistę w Poznaniu!",
        publisher: "BiznesPoznan.pl",
        url: "https://biznespoznan.pl/2025/04/15/poznalismy-najlepszego-programiste-w-poznaniu/",
        type: "press",
      },
      {
        title: "To najlepszy młody programista Wielkopolski",
        publisher: "wPoznaniu.pl",
        url: "https://wpoznaniu.pl/to-najlepszy-mlody-programista-wielkopolski/",
        type: "press",
      },
      {
        title: "Poznaliśmy najlepszego młodego programistę w Wielkopolsce",
        publisher: "Calisia.pl",
        url: "https://calisia.pl/poznalismy-najlepszego-mlodego-programiste-w-wielkopolsce-to-mieszkaniec-powiatu-kaliskiego,71688",
        type: "press",
      },
    ],
  },

  {
    year: 2025,

    title: {
      en: "Mathematics — the Queen of Sciences",
      pl: "Matematyka Królową Nauk",
    },

    result: {
      en: "First place",
      pl: "I miejsce",
    },

    description: {
      en: "Fifth edition of the mathematics competition, with 32 participants representing 13 schools.",
      pl: "Piąta edycja konkursu matematycznego, w której udział wzięło 32 uczestników reprezentujących 13 szkół.",
    },

    sources: [
      {
        title: "Konkurs Matematyczny „Matematyka Królową Nauk”",
        publisher: "Zespół Szkół nr 1 w Liskowie",
        url: "https://zs1liskow.pl/konkurs-matematyczny-matematyka-krolowa-nauk-pod-patronatem-starosty-kaliskiego-pana-jana-adama-klysza/",
        type: "results",
      },
      {
        title: "Za nami 5. edycja konkursu „Matematyka Królową Nauk”",
        publisher: "Powiat Kaliski",
        url: "https://powiat.kalisz.pl/a,4017,za-nami-5-edycja-konkursu-matematyka-krolowa-nauk",
        type: "other",
      },
      {
        title: "Za nami 5. edycja konkursu „Matematyka Królową Nauk”",
        publisher: "Calisia.pl",
        url: "https://calisia.pl/za-nami-5-edycja-konkursu-matematyka-krolowa-nauk,71202",
        type: "press",
      },
    ],
  },

  {
    year: 2024,

    title: {
      en: "32nd Kalisz Informatics Competition",
      pl: "XXXII Kaliski Konkurs Informatyczny",
    },

    result: {
      en: "First place — primary school category",
      pl: "I miejsce — kategoria szkół podstawowych",
    },

    description: {
      en: "A competition assessing independently developed software, its technical complexity and presentation.",
      pl: "Konkurs obejmujący ocenę samodzielnie opracowanego oprogramowania, jego zaawansowania technicznego i prezentacji.",
    },

    sources: [
      {
        title: "Rozdano nagrody w XXXII Kaliskim Konkursie Informatycznym",
        publisher: "Uniwersytet Kaliski",
        url: "https://uniwersytetkaliski.edu.pl/rozdano-nagrody-w-xxxii-kaliskim-konkursie-informatycznym/",
        type: "results",
      },
    ],
  },

  {
    year: 2024,

    title: {
      en: "18th Junior Olympiad in Informatics",
      pl: "XVIII Olimpiada Informatyczna Juniorów",
    },

    result: {
      en: "Third-degree laureate — joint 26th place nationally",
      pl: "Laureat III stopnia — ex aequo 26. miejsce w Polsce",
    },

    description: {
      en: "National algorithmic programming competition. Final score: 358 points.",
      pl: "Ogólnopolska olimpiada z programowania algorytmicznego. Wynik w finale: 358 punktów.",
    },

    photo: {
      src: olympiadPhoto,

      alt: {
        en: "Wearing a medal from the Junior Olympiad in Informatics.",
        pl: "Z medalem Olimpiady Informatycznej Juniorów.",
      },

      caption: {
        en: "18th Junior Olympiad in Informatics, 2024.",
        pl: "XVIII Olimpiada Informatyczna Juniorów, 2024.",
      },
    },

    sources: [
      {
        title: "Wyniki zawodów III stopnia (PDF)",
        publisher: "Olimpiada Informatyczna Juniorów",
        url: "https://oij.edu.pl/oij18/etap3/wyniki.pdf",
        type: "results",
      },
      {
        title: "Zakończenie XVIII OIJ",
        publisher: "Olimpiada Informatyczna Juniorów",
        url: "https://oij.edu.pl/news/oij18/oij18-3etap-zakonczenie/",
        type: "other",
      },
      {
        title: "Wielki sukces ucznia",
        publisher: "Życie Kalisza",
        url: "https://zyciekalisza.pl/artykul/wielki-sukces-ucznia-n1553410",
        type: "press",
      },
    ],
  },
];
