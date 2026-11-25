import rss from "@astrojs/rss";

import { getPosts, postPath } from "@/lib/writing";
import type { Locale } from "@/i18n/ui";

export async function createFeed(locale: Locale, site: URL): Promise<Response> {
  const posts = await getPosts(locale);

  const t = {
    en: {
      title: "Wiktor Perskawiec — Writing",
      description: "Articles and notes by Wiktor Perskawiec.",
    },
    pl: {
      title: "Wiktor Perskawiec — Teksty",
      description: "Artykuły i notatki Wiktora Perskawca.",
    },
  }[locale];

  return rss({
    title: t.title,
    description: t.description,
    site,

    items: posts.map(({ data }) => ({
      title: data.title,
      description: data.description,
      pubDate: data.published,
      link: postPath(data.key, locale),
      categories: [...data.tags],
    })),

    customData: `<language>${locale}</language>`,
  });
}
