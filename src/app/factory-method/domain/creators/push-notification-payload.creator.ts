import { PushNotificationPayloadParams } from '../models/push-notification-payload-params.models';
import { NotificationPayloadCreator } from './notification-payload.creator';
import { PushNotificationPayload } from '../payloads/push-notification-payload';

export class PushNotificationPayloadCreator
  extends NotificationPayloadCreator<PushNotificationPayloadParams, PushNotificationPayload> {
  public createPayload(params: PushNotificationPayloadParams): PushNotificationPayload {
    const payload = new PushNotificationPayload(params);

    return payload;
  }
}
