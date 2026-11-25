import type { APIRoute } from "astro";
import { createFeed } from "@/lib/rss";

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error("Missing site configuration.");
  }

  return createFeed("en", site);
};
