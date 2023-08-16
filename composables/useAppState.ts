import { Ref } from "vue";
import { useState } from "nuxt/app";
import { UseAppStateInterface } from "~/types/useAppState";

export const useAppState = (): Ref<UseAppStateInterface> =>
  useState<UseAppStateInterface>("useAppState", () => ({
    appMenu: {
      currentRoute: null,
    },
    navigation: {
      enabled: false,
    },
    hotkeys: {
      enabled: true,
    },
    projects: {
      stackFilter: [],
    },
  }));
