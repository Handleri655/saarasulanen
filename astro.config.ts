import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { site } from "./src/data/site";

export default defineConfig({
  site: site.url,
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  redirects: {
    "/meista": "/yritys/",
    "/keraaminen-pinnoitus": "/palvelut/",
    "/referenssit": "/palvelut/",
    "/palvelut/tyokoneet": "/palvelut/",
    "/palvelut/maatalouskoneet": "/palvelut/",
    "/palvelut/kuorma-autot": "/palvelut/",
    "/palvelut/oheislaitteet": "/palvelut/",
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
