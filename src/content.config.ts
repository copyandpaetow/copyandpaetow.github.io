import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const tvContent = defineCollection({
  loader: glob({ pattern: ["*/*.md"], base: "./src/articles" }),
  schema: z.object({
    date: z.coerce.date(),
    description: z.string(),
    file: z.string(),
    id: z.string(),
    tags: z.array(z.string()),
    title: z.string(),
    type: z.enum(["text", "project", "gimmick"]),
  }),
});

export const collections = { tvContent };
