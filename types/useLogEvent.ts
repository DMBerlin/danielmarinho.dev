export enum EventNames {
  RESUME_DOWNLOADED = "resume_downloaded",
  BIO_COPIED = "bio_copied",
}

export type LogEvent = EventNames;

export interface UseLogEvent {
  emit: (eventName: LogEvent, eventParams?: unknown) => void;
}

export type LogEventReturn = {
  eventName: LogEvent;
  eventParams: unknown;
};
