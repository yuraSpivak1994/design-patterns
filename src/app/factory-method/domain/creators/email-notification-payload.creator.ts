import { EmailNotificationPayloadParams } from '../models/email-notification-payload-params.models';
import { NotificationPayloadCreator } from './notification-payload.creator';
import { EmailNotificationPayload } from '../payloads/email-notification-payload';

export class EmailNotificationPayloadCreator
  extends NotificationPayloadCreator<EmailNotificationPayloadParams, EmailNotificationPayload> {

  public createPayload(params: EmailNotificationPayloadParams): EmailNotificationPayload {
    const payload = new EmailNotificationPayload(params);

    return payload;
  }
}
