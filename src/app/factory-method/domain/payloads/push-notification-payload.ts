import { PushNotificationPayloadParams } from '../models/push-notification-payload-params.models';
import { NotificationChannel, NotificationPayload } from './notification-payload';

export class PushNotificationPayload implements NotificationPayload<PushNotificationPayloadParams> {
  readonly channel = NotificationChannel.PUSH;

  constructor(public payload: PushNotificationPayloadParams) {}

  public toPreview(): PushNotificationPayloadParams {
    return this.payload;
  }
}
