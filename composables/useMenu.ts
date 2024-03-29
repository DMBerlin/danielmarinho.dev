import { NavigationFailure, Router, useRouter } from "vue-router";
import { Ref } from "vue";
import { useNewTab } from "~/composables/useNewTab";
import { ItemType, MenuItemEnums, UseMenu } from "~/types/useMenu";
import { usePublicConfig } from "~/composables/usePublicConfig";
import { PublicRuntimeConfig, UseAppStateInterface } from "~/types/useAppState";
import { StringCommandBuffer } from "~/utils/stringCommandBuffer";
import { useAppState } from "~/composables/useAppState";
import { jsonfy } from "~/utils/jsonUtils";
import homeJsonIcon from "~/assets/icons/home.json";
import aboutJsonIcon from "~/assets/icons/about.json";
import sendMailJsonIcon from "~/assets/icons/email.json";
import projectJsonIcon from "~/assets/icons/projects.json";
import articleJsonIcon from "~/assets/icons/articles.json";
import copyLinkJsonIcon from "~/assets/icons/copy-link.json";
import sourceCodeJsonIcon from "~/assets/icons/source-code.json";
import { useClipboard } from "~/composables/useClipboard";

function openWidgetState(
  state: Ref<UseAppStateInterface> = useAppState(),
): void {
  state.value.navigation.enabled = true;
  state.value.hotkeys.enabled = false;
}

export function closeWidgetState(
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
      label: MenuItemEnums.COPY_LINK,
      icon: jsonfy(copyLinkJsonIcon),
      shortcut: ["C"],
      callback: () => useClipboard(),
    },
    {
      type: ItemType.GENERAL,
      label: MenuItemEnums.SEND_MAIL,
      icon: jsonfy(sendMailJsonIcon),
      shortcut: ["E"],
      callback: (): Promise<Window | void> =>
        useNewTab("mailto:" + config.email).then(() => closeWidgetState()),
    },
    {
      type: ItemType.GENERAL,
      label: MenuItemEnums.SOURCE_CODE,
      icon: jsonfy(sourceCodeJsonIcon),
      shortcut: ["S"],
      callback: (): Promise<Window | void> =>
        useNewTab(config.code).then(() => closeWidgetState()),
    },
    {
      type: ItemType.GO_TO,
      label: MenuItemEnums.HOME,
      icon: jsonfy(homeJsonIcon),
      shortcut: ["G", "H"],
      callback: (): Promise<NavigationFailure | void> =>
        router.push("/").then(() => closeWidgetState()),
    },
    {
      type: ItemType.GO_TO,
      label: MenuItemEnums.CAREER,
      icon: jsonfy(articleJsonIcon),
      shortcut: ["G", "C"],
      callback: (): Promise<NavigationFailure | void> =>
        router.push("/career").then(() => closeWidgetState()),
    },
    {
      type: ItemType.GO_TO,
      label: MenuItemEnums.PROJECTS,
      icon: jsonfy(projectJsonIcon),
      shortcut: ["G", "P"],
      callback: (): Promise<NavigationFailure | void> =>
        router.push("/projects").then(() => closeWidgetState()),
    },
    {
      type: ItemType.GO_TO,
      label: MenuItemEnums.ABOUT,
      icon: jsonfy(aboutJsonIcon),
      shortcut: ["G", "A"],
      callback: (): Promise<NavigationFailure | void> =>
        router.push("/about").then(() => closeWidgetState()),
    },
  ];
};
