import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://perskawiec.cc",

  output: "static",
  trailingSlash: "always",

  integrations: [
    sitemap({
      filter: (url) => {
        const { pathname } = new URL(url);

        return !/\/404(?:\.html)?\/?$/.test(pathname);
      },
    }),
  ],

  i18n: {
    defaultLocale: "en",
    locales: ["en", "pl"],

    routing: {
      prefixDefaultLocale: false,
    },
  },
});
