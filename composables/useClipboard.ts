import { getAnalytics, logEvent } from "@firebase/analytics";
import clipboard from "clipboardy";
import { closeWidgetState } from "~/composables/useMenu";
import { EventName } from "~/types/useLogEvent";

export const useClipboard = async (): Promise<void> => {
  logEvent(getAnalytics(), EventName.BIO_COPIED);
  await clipboard.write(window.location.href).then(() => closeWidgetState());
};
