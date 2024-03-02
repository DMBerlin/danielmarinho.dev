import { useRuntimeConfig } from "nuxt/app";
import { PublicRuntimeConfig, RuntimeConfig } from "nuxt/schema";

export const usePublicConfig = (): PublicRuntimeConfig => {
  const config: RuntimeConfig = useRuntimeConfig();
  return config.public;
};
