import { defineConfig } from "astro/config";

export default defineConfig({
  server: { host: true },
  site: "https://copyandpaetow.github.io",
  devToolbar: { enabled: false },
  experimental: { svg: true },
  scopedStyleStrategy: "where",
});
