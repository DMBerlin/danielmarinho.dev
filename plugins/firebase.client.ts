import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { Analytics, getAnalytics } from "firebase/analytics";
import { defineNuxtPlugin, useRuntimeConfig } from "#app";
import { RuntimeConfig } from "nuxt/schema";
import { getRemoteConfig, RemoteConfig } from "firebase/remote-config";

export default defineNuxtPlugin({
  name: "firebase",
  setup(nuxtApp) {
    const config: RuntimeConfig = useRuntimeConfig();

    const app: FirebaseApp = initializeApp({
      apiKey: config.public.firebaseApiKey,
      authDomain: config.public.firebaseAuthDomain,
      projectId: config.public.firebaseProjectId,
      storageBucket: config.public.firebaseStorageBucket,
      messagingSenderId: config.public.firebaseMessagingSenderId,
      appId: config.public.firebaseAppId,
      measurementId: config.public.firebaseMeasurementId,
    } as FirebaseOptions);

    const analytics: Analytics = getAnalytics(app);
    const firestore: Firestore = getFirestore(app);
    const remoteConfig: RemoteConfig = getRemoteConfig(app);

    nuxtApp.vueApp.provide("firestore", firestore);
    nuxtApp.provide("firestore", firestore);

    nuxtApp.vueApp.provide("analytics", analytics);
    nuxtApp.provide("analytics", analytics);

    nuxtApp.vueApp.provide("remoteConfig", remoteConfig);
    nuxtApp.provide("remoteConfig", remoteConfig);
  },
});
