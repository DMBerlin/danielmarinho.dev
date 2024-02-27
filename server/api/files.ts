import { defineEventHandler } from "h3";
import { FirebaseService } from "~/server/services/firebase.service";
import { MailService } from "~/server/services/mail.service";

export default defineEventHandler(() =>
  FirebaseService.getResumeFilepath().then(async (filepath: string) => {
    await MailService.sendDownloadNotification(
      "Resumé downloaded!",
      `<p>Congrats! Someone just downloaded your resumé at <strong>${new Date()}</strong>!</p>.`,
    );
    return filepath;
  }),
);
