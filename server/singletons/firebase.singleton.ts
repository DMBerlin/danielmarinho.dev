import { initializeApp } from "firebase/app";
import { FirebaseApp } from "@firebase/app";
import {
  FirebaseStorage,
  getDownloadURL,
  getStorage,
  ref,
  StorageReference,
} from "firebase/storage";

export class FirebaseSingleton {
  private static instance: FirebaseApp;
  private static storage: FirebaseStorage;
  private static reference: StorageReference;

  public static getInstance(): FirebaseApp {
    if (!this.instance) {
      this.instance = initializeApp({
        apiKey: process.env.FB_API_KEY,
        authDomain: process.env.FB_AUTH_DOMAIN,
        projectId: process.env.FB_PROJECT_ID,
        storageBucket: process.env.FB_STORAGE_BUCKET,
        messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
        appId: process.env.FB_APP_ID,
        measurementId: process.env.FB_MEASUREMENT_ID,
      });
    }
    return this.instance;
  }

  public static getStorage(): FirebaseStorage {
    if (!this.storage) {
      this.storage = getStorage(
        FirebaseSingleton.getInstance(),
        process.env.FB_BUCKET_URL,
      );
    }
    return this.storage;
  }

  public static getResumeReference(): StorageReference {
    if (!this.reference) {
      this.reference = ref(
        FirebaseSingleton.getStorage(),
        process.env.FB_FILE_PATH,
      );
    }
    return this.reference;
  }

  public static async getResumeFilepath(): Promise<string | null> {
    return await getDownloadURL(FirebaseSingleton.getResumeReference())
      .then((filePath: string) => filePath)
      .catch((error) => {
        console.error({ error });
        return null;
      });
  }
}
