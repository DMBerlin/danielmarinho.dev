export enum ItemType {
  GENERAL = "general",
  GO_TO = "goTo",
}

export interface UseMenu {
  type: ItemType;
  label: MenuItemEnums;
  icon: JSON;
  shortcut: string[];
  callback: Function;
}

export enum MenuItemEnums {
  COPY_LINK = "Copy Link",
  SEND_MAIL = "Send Email",
  SOURCE_CODE = "Source Code",
  HOME = "Home",
  CAREER = "Career",
  PROJECTS = "Projects",
  ABOUT = "About",
}