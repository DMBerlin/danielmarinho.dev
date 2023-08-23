import { useFetch } from "#app";
import { _AsyncData } from "#app/composables/asyncData";
import { FetchError } from "ofetch/dist/node";
import { useTechIndexation } from "~/composables/useTechStack";
import { ProjectTechStack } from "~/types/useProjects";

export const useProjects = async (): Promise<ProjectTechStack> => {
  const response: _AsyncData<
    ProjectTechStack,
    FetchError<any>
  > = await useFetch("/api/projects");
  if (response.error.value) throw new Error(response.error.value.message);
  return response.data?.value || [];
};

export const useIntersects = (arr1: number[], arr2: number[]): boolean => {
  const left: number[] = [...new Set(useTechIndexation(arr1))];
  const right: number[] = [...new Set(arr2)];
  for (const num of left) {
    if (right.includes(num)) {
      return true;
    }
  }
  return false;
};
