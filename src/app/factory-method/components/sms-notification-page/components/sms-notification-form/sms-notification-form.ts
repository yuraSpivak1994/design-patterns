import { Component, computed, signal } from '@angular/core';
import { FieldTree, FormField, form } from '@angular/forms/signals';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { SmsNotificationForm } from './sms-notification-form.models';
import { SmsNotificationPayloadCreator } from '../../../../domain/creators/sms-notification-payload.creator';
import { SmsNotificationPayloadParams } from '../../../../domain/models/sms-notification-payload-params.models';
import { NotificationPreviewCardComponent } from '../../../notification-preview-card/notification-preview-card';

@Component({
  selector: 'app-sms-notification-form',
  imports: [NotificationPreviewCardComponent, MatFormField, MatLabel, MatInput, MatButton, FormField],
  templateUrl: './sms-notification-form.html',
  styleUrl: './sms-notification-form.scss',
})
export class SmsNotificationFormComponent {
  protected smsNotificationForm: FieldTree<SmsNotificationForm> = form<SmsNotificationForm>(
    signal({
      firstName: '',
      lastName: '',
      phone: '',
      message: '',
      senderName: '',
    })
  );

  private readonly creator = new SmsNotificationPayloadCreator();
  protected readonly preview = signal<SmsNotificationPayloadParams | null>(null);
  protected readonly previewItems = computed(() => {
    const preview = this.preview();

    return preview
      ? [
          { label: 'Name', value: `${preview.firstName} ${preview.lastName}`.trim() },
          { label: 'Phone', value: preview.phone },
          { label: 'Sender name', value: preview.senderName },
          { label: 'Message', value: preview.message },
        ]
      : null;
  });

  public submit(event: SubmitEvent): void {
    event.preventDefault();

    this.preview.set(this.creator.createPreview(this.smsNotificationForm().value()));
  }
}
