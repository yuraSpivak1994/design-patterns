import { NotificationPayload } from '../payloads/notification-payload';

export abstract class NotificationPayloadCreator<TParams, TPayload extends NotificationPayload<TParams>>{
  abstract createPayload(params: TParams): TPayload;

  public createPreview(params: TParams): TParams {
    const payload: TPayload = this.createPayload(params);

    return payload.toPreview();
  }
}
