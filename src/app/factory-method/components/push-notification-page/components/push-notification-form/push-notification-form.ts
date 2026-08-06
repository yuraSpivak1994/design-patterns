import { Component, computed, signal } from '@angular/core';
import { FieldTree, FormField, form } from '@angular/forms/signals';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { PushNotificationForm } from './push-notification-form.models';
import { PushNotificationPayloadCreator } from '../../../../domain/creators/push-notification-payload.creator';
import { PushNotificationPayloadParams } from '../../../../domain/models/push-notification-payload-params.models';
import { NotificationPreviewCardComponent } from '../../../notification-preview-card/notification-preview-card';

@Component({
  selector: 'app-push-notification-form',
  imports: [NotificationPreviewCardComponent, MatFormField, MatLabel, MatInput, MatButton, FormField],
  templateUrl: './push-notification-form.html',
  styleUrl: './push-notification-form.scss',
})
export class PushNotificationFormComponent {
  protected pushNotificationForm: FieldTree<PushNotificationForm> = form<PushNotificationForm>(
    signal({
      firstName: '',
      lastName: '',
      deviceToken: '',
      title: '',
      message: '',
    })
  );

  private readonly creator = new PushNotificationPayloadCreator();
  protected readonly preview = signal<PushNotificationPayloadParams | null>(null);
  protected readonly previewItems = computed(() => {
    const preview = this.preview();

    return preview
      ? [
          { label: 'Name', value: `${preview.firstName} ${preview.lastName}`.trim() },
          { label: 'Device token', value: preview.deviceToken },
          { label: 'Title', value: preview.title },
          { label: 'Message', value: preview.message },
        ]
      : null;
  });

  public submit(event: SubmitEvent): void {
    event.preventDefault();

    this.preview.set(this.creator.createPreview(this.pushNotificationForm().value()));
  }
}
