import { logEvent, getAnalytics } from "@firebase/analytics";
import { LogEvent, UseLogEvent } from "~/types/useLogEvent";
import { AppEnvironment } from "~/types/appEnvironment";

export const useLogEvent = (): UseLogEvent => ({
  emit: (eventName: LogEvent, eventParams?: unknown): void => {
    if (process.env.NODE_ENV === AppEnvironment.DEV) return;
    logEvent(
      getAnalytics(),
      eventName,
      { value: eventParams },
      { global: true },
    );
  },
});
