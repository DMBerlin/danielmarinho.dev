import { RouteLocationNormalizedLoaded, useRoute } from "vue-router";
import { Ref } from "vue";
import { UseNavigationList } from "~/types/useNavigation";
import { useAppState } from "~/composables/useAppState";
import { UseAppStateInterface } from "~/types/useAppState";

export const useNavigation = (): UseNavigationList => {
  return [
    {
      label: "HOME",
      path: "/",
    },
    {
      label: "CAREER",
      path: "/career",
    },
    {
      label: "PROJECTS",
      path: "/projects",
    },
    {
      label: "ABOUT",
      path: "/about",
    },
  ];
};

export const useNavigationStateHandler = (): void => {
  const route: RouteLocationNormalizedLoaded = useRoute();
  const appState: Ref<UseAppStateInterface> = useAppState();
  appState.value.appMenu.currentRoute = route.path;
};
