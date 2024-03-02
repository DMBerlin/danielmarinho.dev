import { defineEventHandler, readBody, H3Event, EventHandlerRequest } from "h3";
import { MailService } from "~/server/services/mail.service";

export default defineEventHandler(
  async (event: H3Event<EventHandlerRequest>) => {
    const body = await readBody(event);
    if (!body.subject || !body.message) return { statusCode: 404, status: "BAD_REQUEST" };
    await MailService.sendDownloadNotification(body.subject, body.message);
    return { statusCode: 200, status: "OK" };
  },
);
