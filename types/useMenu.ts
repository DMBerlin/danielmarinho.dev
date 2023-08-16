export enum ItemType {
  GENERAL = "general",
  GO_TO = "goTo",
}

export interface UseMenu {
  type: ItemType;
  label: string;
  icon: string;
  shortcut: string[];
  callback: Function;
}
