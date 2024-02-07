import { inject } from "@vercel/analytics";
import { defineNuxtPlugin } from "#app";
export default defineNuxtPlugin({
  name: "vercel-plugin",
  parallel: true,
  setup() {
    inject();
  },
});
