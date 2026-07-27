export enum NotificationChannel {
  EMAIL = 'email',
  SMS = 'sms',
  PUSH = 'push'
}
export interface NotificationPreview<TPreviewPayload> {
  channel: NotificationChannel;
  previewPayload: TPreviewPayload;
}

export interface NotificationPayload<TToPreview> {
   toPreview(): TToPreview;
}
