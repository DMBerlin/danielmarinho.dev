export interface UseLogEvent {
  emit: (eventName: LogEvent, eventParams?: unknown) => void;
}

export enum EventNames {
  RESUME_DOWNLOADED = "resume_downloaded",
  BIO_COPIED = "bio_copied",
}

export type LogEvent = EventNames;
