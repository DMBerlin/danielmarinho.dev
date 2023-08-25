import { inject } from '@vercel/analytics';
import { defineNuxtPlugin, NuxtApp } from '#app';

export default defineNuxtPlugin((nuxtApp: NuxtApp) => inject());