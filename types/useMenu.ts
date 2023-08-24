export enum ItemType {
  GENERAL = "general",
  GO_TO = "goTo",
}

export interface UseMenu {
  type: ItemType;
  label: string;
  icon: JSON;
  shortcut: string[];
  callback: Function;
}
