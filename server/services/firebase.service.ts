import { FirebaseSingleton } from "~/server/singletons/firebase.singleton";

export class FirebaseService {
  public static async getResumeFilepath(): Promise<string | null> {
    try {
      return await FirebaseSingleton.getResumeFilepath();
    } catch (error) {
      console.error(error);
    }
  }
}
