import { FetchError } from "ofetch";
import { _AsyncData } from "#app/composables/asyncData";
import { useFetch } from "#app";

export const useFiles = async (): Promise<string | null> => {
  try {
    const response: _AsyncData<string, FetchError<any>> = await useFetch(
      "/api/files",
    );
    return response.data?.value || null;
  } catch (error) {
    console.error({ error });
  }
};
