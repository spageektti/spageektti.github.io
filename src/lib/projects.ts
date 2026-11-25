import { getCollection, type CollectionEntry } from "astro:content";

import type { Locale } from "@/i18n/ui";

export type Project = CollectionEntry<"projects">;

export function projectsPath(locale: Locale): string {
  return locale === "en" ? "/projects/" : "/pl/projekty/";
}

export function projectPath(key: string, locale: Locale): string {
  return `${projectsPath(locale)}${key}/`;
}

export async function getProjects(locale: Locale): Promise<Project[]> {
  const projects = await getCollection("projects", ({ data }) => !data.draft);

  const entries = new Map<string, string>();

  for (const project of projects) {
    const { data } = project;
    const id = `${data.locale}/${data.key}`;

    const existing = entries.get(id);

    if (existing !== undefined) {
      throw new Error(
        `Duplicate project "${id}": ` + `"${existing}" and "${project.id}"`,
      );
    }

    entries.set(id, project.id);
  }

  for (const { data } of projects) {
    const alternate = data.locale === "en" ? "pl" : "en";

    if (!entries.has(`${alternate}/${data.key}`)) {
      throw new Error(`Missing ${alternate} translation for ${data.key}`);
    }
  }

  return projects
    .filter(({ data }) => data.locale === locale)
    .sort(
      (a, b) =>
        a.data.order - b.data.order ||
        a.data.title.localeCompare(b.data.title, locale),
    );
}

export async function getProjectPaths(locale: Locale) {
  const projects = await getProjects(locale);

  return projects.map((project) => ({
    params: {
      id: project.data.key,
    },
    props: {
      project,
    },
  }));
}
