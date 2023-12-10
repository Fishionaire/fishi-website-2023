// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/styles/general/main.sass"],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "@/assets/styles/global/main.sass" as *\n',
        },
      },
    },
  },
  modules: ["@nuxt/image", "nuxt-gtag", "@nuxtjs/google-fonts", "nuxt-svgo"],
  gtag: {
    id: "G-8CS67Z4GET",
  },
  googleFonts: {
    families: {
      Onest: [100, 400, 600, 700],
    },
  },
  svgo: {
    autoImportPath: "./assets/images/svg",
  },
});
