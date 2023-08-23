// https://nuxt.com/docs/api/configuration/nuxt-config
import { ConfigLayerMeta, InputConfig } from "c12";
import { NuxtConfig } from "@nuxt/schema";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: { autoImport: true },
  css: ["~/assets/css/styles.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import '~/assets/scss/global.scss';",
        },
      },
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/device"],
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
    },
  },
}) as InputConfig<NuxtConfig, ConfigLayerMeta>;
