import { site, socialProfiles } from "@/config/site";
import type { Locale } from "@/i18n/ui";

export interface ArticleMetadata {
  published: Date;
  updated?: Date;
  tags?: readonly string[];
}

interface StructuredDataOptions {
  title: string;
  description: string;
  locale: Locale;
  canonicalURL: URL;
  article?: ArticleMetadata;
  profile?: boolean;
}

export function createStructuredData({
  title,
  description,
  locale,
  canonicalURL,
  article,
  profile = false,
}: StructuredDataOptions) {
  const root = new URL("/", site.url).href;

  const personId = `${root}#person`;
  const websiteId = `${root}#website`;
  const pageId = `${canonicalURL.href}#webpage`;

  const person = {
    "@type": "Person",
    "@id": personId,
    name: site.name,
    alternateName: site.username,
    url: root,
    sameAs: socialProfiles.map(({ url }) => url),
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    name: "perskawiec.cc",
    url: root,
    inLanguage: ["en", "pl"],
    publisher: {
      "@id": personId,
    },
  };

  const webpage = {
    "@type": profile ? "ProfilePage" : "WebPage",
    "@id": pageId,
    url: canonicalURL.href,
    name: title,
    description,
    inLanguage: locale,

    isPartOf: {
      "@id": websiteId,
    },

    about: {
      "@id": personId,
    },

    ...(profile && {
      mainEntity: {
        "@id": personId,
      },
    }),
  };

  const blogPosting = article
    ? {
        "@type": "BlogPosting",
        "@id": `${canonicalURL.href}#article`,
        headline: title,
        description,
        inLanguage: locale,

        datePublished: article.published.toISOString(),

        dateModified: (article.updated ?? article.published).toISOString(),

        keywords: article.tags?.join(", "),

        author: {
          "@id": personId,
        },

        publisher: {
          "@id": personId,
        },

        mainEntityOfPage: {
          "@id": pageId,
        },
      }
    : undefined;

  return {
    "@context": "https://schema.org",
    "@graph": [person, website, webpage, ...(blogPosting ? [blogPosting] : [])],
  };
}

export function serializeStructuredData(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
