export interface PublicRuntimeConfig {
  root: string;
  code: string;
  email: string;
  github: string;
  twitter: string;
  linkedIn: string;
  instagram: string;
  cvFileUrl: string;
  siteAuthor: string;
}

export interface RuntimeConfig {
  app: {
    baseURL: string;
    buildAssetsDir: string;
    cdnURL: string;
  };
  nitro: {
    envPrefix: string;
    routeRules: {
      "/__nuxt_error": {
        cache: boolean;
      };
    };
  };
  public: PublicRuntimeConfig;
}

export interface UseAppStateInterface {
  appMenu: {
    currentRoute: string | null;
  };
  navigation: {
    enabled: boolean;
  };
  hotkeys: {
    enabled: boolean;
  };
  projects: {
    stackFilter: Array<number>;
  };
}
