import { ConfigLayerMeta, InputConfig } from "c12";
import { NuxtConfig } from "@nuxt/schema";
import { defineNuxtConfig } from "nuxt/config";
import eslintPlugin from "vite-plugin-eslint";

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { property: "og:type", content: "website" },
        { name: "next-head-count", content: "8" },
      ],
    },
  },
  typescript: {
    strict: true,
  },
  devtools: { enabled: true },
  imports: { autoImport: true },
  css: ["~/assets/css/styles.css"],
  vite: {
    plugins: [eslintPlugin()],
    optimizeDeps: {
      exclude: ["class-validator"],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import '~/assets/scss/global.scss';",
        },
      },
    },
  },
  build: {
    transpile: ["class-validator"],
  },
  modules: ["@nuxtjs/device", "@nuxtjs/tailwindcss", "@nuxtjs/eslint-module"],
  runtimeConfig: {
    public: {
      root: process.env.BASE_URL || "localhost:3000",
      code: process.env.REPOSITORY_URL || "#",
      email: process.env.EMAIL_PROFILE_URL || "#",
      github: process.env.GITHUB_PROFILE_URL || "#",
      twitter: process.env.TWITTER_PROFILE_URL || "#",
      linkedIn: process.env.LINKEDIN_PROFILE_URL || "#",
      instagram: process.env.INSTAGRAM_PROFILE_URL || "#",
      cvFileUrl: process.env.CV_FILE_URL || "#",
      siteAuthor: process.env.SITE_AUTHOR || "Author",
      marriageIn: process.env.MARRIAGE_IN || Date.now().toString,
    },
  },
}) as InputConfig<NuxtConfig, ConfigLayerMeta>;
