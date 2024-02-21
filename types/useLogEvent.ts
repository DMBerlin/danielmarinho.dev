export enum EventName {
  RESUME_DOWNLOADED = "resume_downloaded",
  BIO_COPIED = "bio_copied",
  OPEN_URL = "open_url",
  OPEN_MENU = "open_menu",
}

export type LogEvent = EventName;

export interface UseLogEvent {
  emit: (eventName: LogEvent, eventParams?: unknown) => void;
}

export type LogEventReturn = {
  eventName: LogEvent;
  eventParams: unknown;
};
