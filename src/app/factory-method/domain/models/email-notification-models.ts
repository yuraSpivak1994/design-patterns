import { NotificationChannel, NotificationPayload, NotificationPreview } from '../payloads/notification-payload';
import { EmailNotificationPayloadParams } from './email-notification-payload-params.models';
export class EmailNotificationModels implements NotificationPayload<NotificationPreview<EmailNotificationPayloadParams>> {
  constructor(readonly payload: EmailNotificationPayloadParams) {}

  public toPreview(): NotificationPreview<EmailNotificationPayloadParams> {
    return {
      channel: NotificationChannel.EMAIL,
      previewPayload: this.payload
    };
  }
}
