export enum NotificationChannel {
  EMAIL = 'email',
  SMS = 'sms',
  PUSH = 'push'
}

export interface NotificationPayload<TPreviewPayload> {
  channel: NotificationChannel;
  toPreview(): TPreviewPayload;
}
