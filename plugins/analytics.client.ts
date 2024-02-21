import { inject } from "@vercel/analytics";
import { defineNuxtPlugin } from "#app";
export default defineNuxtPlugin({
  name: "vercel-analytics",
  parallel: true,
  setup: () => inject(),
});
