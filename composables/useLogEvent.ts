import { LogEvent, LogEventReturn, UseLogEvent } from "~/types/useLogEvent";
export const useLogEvent = (): UseLogEvent => ({
  emit: (eventName: LogEvent, eventParams?: unknown): LogEventReturn => ({
    eventName,
    eventParams,
  }),
});
