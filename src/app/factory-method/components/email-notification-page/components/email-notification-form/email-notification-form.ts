import { Component, computed, signal } from '@angular/core';
import { EmailNotificationForm } from './email-notification-form.models';
import { FieldTree, FormField, form } from '@angular/forms/signals';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { EmailNotificationPayloadCreator } from '../../../../domain/creators/email-notification-payload.creator';
import { EmailNotificationPayloadParams } from '../../../../domain/models/email-notification-payload-params.models';
import { NotificationPreviewCardComponent } from '../../../notification-preview-card/notification-preview-card';

@Component({
  selector: 'app-email-notification-form',
  imports: [
    NotificationPreviewCardComponent,
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
    FormField
  ],
  templateUrl: './email-notification-form.html',
  styleUrl: './email-notification-form.scss',
})
export class EmailNotificationFormComponent {
  protected emailNotificationForm: FieldTree<EmailNotificationForm> = form<EmailNotificationForm>(
    signal({
      email: '',
      message: '',
      subject: '',
      firstName: '',
      lastName: '',
      phone: '',
    })
  );

  protected readonly preview = signal<EmailNotificationPayloadParams | null>(null);
  protected readonly previewItems = computed(() => {
    const preview = this.preview();

    return preview
      ? [
          { label: 'Name', value: `${preview.firstName} ${preview.lastName}`.trim() },
          { label: 'Email', value: preview.email },
          { label: 'Phone', value: preview.phone },
          { label: 'Subject', value: preview.subject },
          { label: 'Message', value: preview.message },
        ]
      : null;
  });
  private readonly creator = new EmailNotificationPayloadCreator();

  public submit(event: SubmitEvent): void {
    event.preventDefault();

    this.preview.set(this.creator.createPreview(this.emailNotificationForm().value()));
  }
}
