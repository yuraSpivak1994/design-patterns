import { EmailNotificationPayloadParams } from '../models/email-notification-payload-params.models';
import { NotificationChannel, NotificationPayload } from './notification-payload';

export class EmailNotificationPayload implements NotificationPayload<EmailNotificationPayloadParams> {
  readonly channel = NotificationChannel.EMAIL;

  constructor(readonly payload: EmailNotificationPayloadParams) {}

  public toPreview(): EmailNotificationPayloadParams {
    return this.payload;
  }
}
