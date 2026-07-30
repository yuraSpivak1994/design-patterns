import { PushNotificationPayloadParams } from '../models/push-notification-payload-params.models';
import { NotificationChannel, NotificationPreview } from './notification-payload';

export class PushNotificationPayload {
  readonly channel = NotificationChannel.PUSH;
  constructor(public payload: PushNotificationPayloadParams) {
  }
  public toPreview(): NotificationPreview<PushNotificationPayloadParams> {
    return {
      channel: this.channel,
      previewPayload: this.payload
    };
  }
}
