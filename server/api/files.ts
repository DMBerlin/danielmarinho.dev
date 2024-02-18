import {
  ref,
  getStorage,
  getDownloadURL,
  FirebaseStorage,
  StorageReference,
} from "firebase/storage";
import { initializeApp, FirebaseApp } from "firebase/app";
import { defineEventHandler } from "h3";

export default defineEventHandler(() => {
  const firebaseApp: FirebaseApp = initializeApp({
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECT_ID,
    storageBucket: process.env.FB_STORAGE_BUCKET,
    messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
    appId: process.env.FB_APP_ID,
    measurementId: process.env.FB_MEASUREMENT_ID,
  });

  const firebaseStorage: FirebaseStorage = getStorage(
    firebaseApp,
    process.env.FB_BUCKET_URL,
  );

  const storageReference: StorageReference = ref(
    firebaseStorage,
    process.env.FB_FILE_PATH,
  );

  return getDownloadURL(storageReference)
    .then((filePath: string) => filePath)
    .catch((error) => console.error({ error }));
});
