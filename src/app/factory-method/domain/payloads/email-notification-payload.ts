import { EmailNotificationPayloadParams } from '../models/email-notification-payload-params.models';
import { NotificationChannel, NotificationPayload, NotificationPreview } from './notification-payload';

export class EmailNotificationPayload implements NotificationPayload<NotificationPreview<EmailNotificationPayloadParams>> {
  constructor(readonly payload: EmailNotificationPayloadParams) {}

  public toPreview(): NotificationPreview<EmailNotificationPayloadParams> {
    return {
      channel: NotificationChannel.EMAIL,
      previewPayload: this.payload,
    };
  }
}
