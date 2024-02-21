import { getAnalytics, logEvent } from "@firebase/analytics";
import { EventName } from "~/types/useLogEvent";

export const useNewTab = async (url: string): Promise<void> => {
  logEvent(getAnalytics(), EventName.OPEN_URL, { value: { url } });
  await window.open(url, "_blank");
};
