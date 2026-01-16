import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://skyline-9.github.io",
  integrations: [tailwind(), react()],
});
