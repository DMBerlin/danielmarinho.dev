import { Resend } from "resend";
export class ResendSingleton {
  private static instance: Resend;

  private static getInstance(): Resend {
    if (!this.instance) {
      this.instance = new Resend(process.env.RESEND_API_KEY);
      return this.instance;
    }
    return this.instance;
  }

  public static sendEmail(subject: string, html: string): Promise<unknown> {
    return this.getInstance().emails.send({
      from: process.env.RESEND_SEND_FROM_EMAIL,
      to: process.env.RESEND_SEND_TO_EMAIL,
      subject,
      html,
    });
  }
}
