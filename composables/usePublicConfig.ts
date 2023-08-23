import { useRuntimeConfig } from "nuxt/app";
import { PublicRuntimeConfig, RuntimeConfig } from "~/types/useAppState";
export const usePublicConfig = (): PublicRuntimeConfig => {
  const config: RuntimeConfig = useRuntimeConfig();
  return config.public;
};
