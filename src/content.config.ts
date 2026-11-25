import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/projects",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),

    key: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    locale: z.enum(["en", "pl"]),

    order: z.number().int().default(100),
    featured: z.boolean().default(false),

    repository: z.url().optional(),
    website: z.url().optional(),

    draft: z.boolean().default(false),
  }),
});

const writing = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/writing",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),

    key: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    locale: z.enum(["en", "pl"]),

    published: z.coerce.date(),
    updated: z.coerce.date().optional(),

    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  projects,
  writing,
};
