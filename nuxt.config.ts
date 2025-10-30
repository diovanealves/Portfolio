// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-02-06",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@nuxt/icon"],
  i18n: {
    locales: [
      {
        code: "en",
        file: "en.json",
      },
      {
        code: "pt-br",
        file: "pt-br.json",
      },
    ],
    defaultLocale: "en",
    langDir: "locales",
    strategy: "prefix",
    customRoutes: "config",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    pages: {
      "about-me": {
        en: "/about-me",
        "pt-br": "/sobre-mim",
      },
    },
  },
});
