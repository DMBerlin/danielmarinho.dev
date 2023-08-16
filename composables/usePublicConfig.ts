import { PublicRuntimeConfig, RuntimeConfig } from "~/types/useAppState";
import { useRuntimeConfig } from 'nuxt/app';
export const usePublicConfig = (): PublicRuntimeConfig => {
  const config: RuntimeConfig = useRuntimeConfig();
  return config.public;
};
