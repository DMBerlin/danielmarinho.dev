import { NavigationFailure, Router, useRouter } from "vue-router";
import { Ref } from "vue";
import clipboard from "clipboardy";
import { useNewTab } from "~/composables/useNewTab";
import { ItemType, UseMenu } from "~/types/useMenu";
import { usePublicConfig } from "~/composables/usePublicConfig";
import { PublicRuntimeConfig, UseAppStateInterface } from "~/types/useAppState";
import { StringCommandBuffer } from "~/utils/stringCommandBuffer";
import { useAppState } from "~/composables/useAppState";
import copyLinkJsonIcon from "public/static/lotties/copy-link.json";
import sendMailJsonIcon from "public/static/lotties/email.json";
import sourceCodeJsonIcon from "public/static/lotties/source-code.json";
import homeJsonIcon from "public/static/lotties/home.json";
import articleJsonIcon from "public/static/lotties/articles.json";
import projectJsonIcon from "public/static/lotties/projects.json";
import aboutJsonIcon from "public/static/lotties/about.json";
import { jsonfy } from "~/utils/jsonUtils";

function openWidgetState(
  state: Ref<UseAppStateInterface> = useAppState(),
): void {
  state.value.navigation.enabled = true;
  state.value.hotkeys.enabled = false;
}

function closeWidgetState(
  state: Ref<UseAppStateInterface> = useAppState(),
): void {
  state.value.navigation.enabled = false;
  state.value.hotkeys.enabled = true;
}

export function useMenu(
  state: Ref<UseAppStateInterface> = useAppState(),
): Function {
  const stringCommandBuffer: StringCommandBuffer = new StringCommandBuffer();
  const menuOptions: UseMenu[] = menuItems();
  const commands: Map<string, Function> = new Map<string, Function>();

  for (const option of menuOptions) {
    commands.set(option.shortcut.join("").toLowerCase(), option.callback);
  }

  function commandBusHandler(key: string): void {
    if (stringCommandBuffer.isEmpty() && commands.has(key)) {
      commands.get(key)();
      closeWidgetState();
    } else {
      stringCommandBuffer.append(key);
      const hotkey: string = stringCommandBuffer.get();
      if (commands.has(hotkey)) {
        commands.get(hotkey)();
        closeWidgetState();
      }
    }
  }

  function handler(event: KeyboardEvent): void {
    if (
      state.value.navigation.enabled === false &&
      event.ctrlKey &&
      event.key === "m"
    ) {
      openWidgetState();
    } else if (
      state.value.navigation.enabled === true &&
      (event.key === "Escape" || event.key === "Esc")
    ) {
      closeWidgetState();
    } else if (event.key?.length === 1) {
      if (state.value.hotkeys.enabled) commandBusHandler(event.key);
    }
  }

  return handler;
}

export const menuItems = (): Array<UseMenu> => {
  const config: PublicRuntimeConfig = usePublicConfig();
  const router: Router = useRouter();
  return [
    {
      type: ItemType.GENERAL,
      label: "Copy Link",
      icon: jsonfy(copyLinkJsonIcon),
      shortcut: ["C"],
      callback: () =>
        clipboard.write(window.location.href).then(() => closeWidgetState()),
    },
    {
      type: ItemType.GENERAL,
      label: "Send Email",
      icon: jsonfy(sendMailJsonIcon),
      shortcut: ["E"],
      callback: (): Promise<Window | void> =>
        useNewTab("mailto:" + config.email).then(() => closeWidgetState()),
    },
    {
      type: ItemType.GENERAL,
      label: "Source Code",
      icon: jsonfy(sourceCodeJsonIcon),
      shortcut: ["S"],
      callback: (): Promise<Window | void> =>
        useNewTab(config.code).then(() => closeWidgetState()),
    },
    {
      type: ItemType.GO_TO,
      label: "Home",
      icon: jsonfy(homeJsonIcon),
      shortcut: ["G", "H"],
      callback: (): Promise<NavigationFailure | void> =>
        router.push("/").then(() => closeWidgetState()),
    },
    {
      type: ItemType.GO_TO,
      label: "Career",
      icon: jsonfy(articleJsonIcon),
      shortcut: ["G", "C"],
      callback: (): Promise<NavigationFailure | void> =>
        router.push("/career").then(() => closeWidgetState()),
    },
    {
      type: ItemType.GO_TO,
      label: "Projects",
      icon: jsonfy(projectJsonIcon),
      shortcut: ["G", "P"],
      callback: (): Promise<NavigationFailure | void> =>
        router.push("/projects").then(() => closeWidgetState()),
    },
    {
      type: ItemType.GO_TO,
      label: "About",
      icon: jsonfy(aboutJsonIcon),
      shortcut: ["G", "A"],
      callback: (): Promise<NavigationFailure | void> =>
        router.push("/about").then(() => closeWidgetState()),
    },
  ];
};
