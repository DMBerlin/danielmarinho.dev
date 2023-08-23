export const useNewTab = async (url: string): Promise<Window> =>
  await window.open(url, "_blank");
