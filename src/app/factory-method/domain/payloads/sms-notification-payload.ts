import { NotificationChannel, NotificationPreview } from './notification-payload';
import { SmsNotificationPayloadParams } from '../models/sms-notification-payload-params.models';

export class SmsNotificationPayload {
  readonly channel = NotificationChannel.SMS;
  constructor(public payload: SmsNotificationPayloadParams) {
  }
  public toPreview(): NotificationPreview<SmsNotificationPayloadParams> {
    return {
      channel: this.channel,
      previewPayload: this.payload
    };
  }
}
