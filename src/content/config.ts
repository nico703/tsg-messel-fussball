import { z, defineCollection } from "astro:content";

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(),
    teaser: z.string(),
    image: z.string(),
  }),
});

export const collections = { news };
