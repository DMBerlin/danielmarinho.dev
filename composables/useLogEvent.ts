import { logEvent, getAnalytics } from "@firebase/analytics";
import { LogEvent, UseLogEvent } from "~/types/useLogEvent";

export const useLogEvent = (): UseLogEvent => ({
  emit: (eventName: LogEvent, eventParams?: unknown): void => {
    logEvent(
      getAnalytics(),
      eventName,
      { value: eventParams },
      { global: true },
    );
  },
});
