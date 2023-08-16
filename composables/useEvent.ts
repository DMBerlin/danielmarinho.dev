import { KeyboardEvents } from "~/types/useEvent";
export const createEventListener = (
  eventName: KeyboardEvents,
  callback: Function,
): void =>
  window.addEventListener(
    eventName,
    callback as EventListenerOrEventListenerObject,
  );
