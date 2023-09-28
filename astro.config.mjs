import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://Imvert.github.io",
  base: "/Astro-web-site-harry-potter",
});
