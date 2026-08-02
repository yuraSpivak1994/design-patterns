import { SmsNotificationPayloadParams } from '../models/sms-notification-payload-params.models';
import { NotificationChannel, NotificationPayload } from './notification-payload';

export class SmsNotificationPayload implements NotificationPayload<SmsNotificationPayloadParams> {
  readonly channel = NotificationChannel.SMS;

  constructor(public payload: SmsNotificationPayloadParams) {}

  public toPreview(): SmsNotificationPayloadParams {
    return this.payload;
  }
}
