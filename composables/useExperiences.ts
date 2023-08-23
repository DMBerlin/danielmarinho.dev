import { _AsyncData } from "#app/composables/asyncData";
import { useFetch } from "#app";
import { FetchError } from "ofetch";
import { UserExperience } from "~/types/useExperiences";

export const useExperiences = async (): Promise<UserExperience[]> => {
  const response: _AsyncData<
    UserExperience[],
    FetchError<any>
  > = await useFetch("/api/experiences");
  if (response.error.value) throw new Error(response.error.value.message);
  return response.data?.value || [];
};
