import type { AstroInstance } from "astro";
import { getCollection } from "astro:content";

const previewComponents = import.meta.glob("/src/articles/*/preview.astro");

const content = await getCollection("tvContent");
const data = await Promise.all(
  content.map(async (article) => {
    const filePath = `/${article.filePath?.split("data.md")[0]}${article.data.file}`;
    const component = previewComponents[filePath];

    return {
      ...article.data,
      component: (await component()) as AstroInstance,
    };
  })
);

export const tvContent = data.filter((entry) => entry.component);
