import { FirebaseSingleton } from "~/server/singletons/firebase.singleton";

export class FirebaseService {
  public static async getResumeFilepath(): Promise<string | null> {
    return await FirebaseSingleton.getResumeFilepath();
  }
}
