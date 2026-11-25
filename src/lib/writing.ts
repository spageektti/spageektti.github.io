import { getCollection, type CollectionEntry } from "astro:content";

import type { Locale } from "@/i18n/ui";

export type Post = CollectionEntry<"writing">;

export function writingPath(locale: Locale): string {
  return locale === "en" ? "/writing/" : "/pl/teksty/";
}

export function postPath(key: string, locale: Locale): string {
  return `${writingPath(locale)}${key}/`;
}

export function feedPath(locale: Locale): string {
  return locale === "en" ? "/rss.xml" : "/pl/rss.xml";
}

export async function getPosts(locale?: Locale): Promise<Post[]> {
  const posts = await getCollection("writing", ({ data }) => !data.draft);

  const entries = new Map<string, string>();

  for (const post of posts) {
    const { data } = post;
    const id = `${data.locale}/${data.key}`;
    const existing = entries.get(id);

    if (existing !== undefined) {
      throw new Error(
        `Duplicate article "${id}": ` + `"${existing}" and "${post.id}"`,
      );
    }

    entries.set(id, post.id);
  }

  return posts
    .filter(({ data }) => !locale || data.locale === locale)
    .sort(
      (a, b) =>
        b.data.published.getTime() - a.data.published.getTime() ||
        a.data.key.localeCompare(b.data.key),
    );
}

export async function getPostPaths(locale: Locale) {
  const posts = await getPosts(locale);

  return posts.map((post) => ({
    params: {
      id: post.data.key,
    },
    props: {
      post,
    },
  }));
}

export async function getTranslation(post: Post): Promise<Post | undefined> {
  const alternateLocale = post.data.locale === "en" ? "pl" : "en";

  const posts = await getPosts(alternateLocale);

  return posts.find(({ data }) => data.key === post.data.key);
}

export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
}
