import { ResendSingleton } from "~/server/singletons/resend.singleton";

export class MailService {
  public static async sendDownloadNotification(
    subject: string,
    message: string,
  ) {
    await ResendSingleton.sendEmail(subject, message).catch((error) => {
      console.error(error);
    });
  }
}
