import { NotificationPayloadCreator } from './notification-payload.creator';
import { SmsNotificationPayloadParams } from '../models/sms-notification-payload-params.models';
import { SmsNotificationPayload } from '../payloads/sms-notification-payload';

export class SmsNotificationPayloadCreator
  extends NotificationPayloadCreator<SmsNotificationPayloadParams, SmsNotificationPayload> {
  public createPayload(params: SmsNotificationPayloadParams): SmsNotificationPayload {
    const payload = new SmsNotificationPayload(params);

    return payload;
  }
}
