import type { Locale } from "./ui";

export const routes = {
  home: {
    en: {
      label: "Home",
      path: "/",
    },
    pl: {
      label: "Strona główna",
      path: "/pl/",
    },
  },

  about: {
    en: {
      label: "About",
      path: "/about/",
    },
    pl: {
      label: "O mnie",
      path: "/pl/o-mnie/",
    },
  },

  projects: {
    en: {
      label: "Projects",
      path: "/projects/",
    },
    pl: {
      label: "Projekty",
      path: "/pl/projekty/",
    },
  },

  writing: {
    en: {
      label: "Writing",
      path: "/writing/",
    },
    pl: {
      label: "Teksty",
      path: "/pl/teksty/",
    },
  },

  bookshelf: {
    en: {
      label: "Bookshelf",
      path: "/bookshelf/",
    },
    pl: {
      label: "Książki",
      path: "/pl/ksiazki/",
    },
  },

  now: {
    en: {
      label: "Now",
      path: "/now/",
    },
    pl: {
      label: "Teraz",
      path: "/pl/teraz/",
    },
  },

  achievements: {
    en: {
      label: "Achievements",
      path: "/about/achievements/",
    },
    pl: {
      label: "Osiągnięcia",
      path: "/pl/o-mnie/osiagniecia/",
    },
  },
} as const;

export type RouteName = keyof typeof routes;

export const navigation: RouteName[] = [
  "home",
  "about",
  "projects",
  "writing",
  "bookshelf",
  "now",
];

export function getRoute(name: RouteName, locale: Locale) {
  return routes[name][locale];
}

export function normalizePath(path: string): string {
  return path.replace(/\/+$/, "") || "/";
}
