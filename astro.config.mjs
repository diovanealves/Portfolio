import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    (await import("astro-compress")).default(),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-br"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
