import { LogEvent, UseLogEvent } from '~/types/useLogEvent';

export const useLogEvent = (): UseLogEvent => ({
    emit: (eventName: LogEvent, eventParams?: unknown): void => {},
  });
