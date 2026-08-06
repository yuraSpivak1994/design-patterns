import { Component, signal } from '@angular/core';
import { EmailNotificationForm } from './email-notification-form.models';
import { FieldTree, FormField, form } from '@angular/forms/signals';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { EmailNotificationPayloadCreator } from '../../../../domain/creators/email-notification-payload.creator';
import { EmailNotificationPayloadParams } from '../../../../domain/models/email-notification-payload-params.models';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-email-notification-form',
  imports: [
    MatCardModule,
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
  private readonly formValue = signal<EmailNotificationForm>({
    email: '',
    message: '',
    subject: '',
    firstName: '',
    lastName: '',
    phone: '',
  });
  protected emailNotificationForm: FieldTree<EmailNotificationForm> = form<EmailNotificationForm>(
    this.formValue
  );

  protected readonly preview = signal<EmailNotificationPayloadParams | null>(null);
  private readonly creator = new EmailNotificationPayloadCreator();

  public submit(event: SubmitEvent): void {
    event.preventDefault();

    const formValue = this.formValue();
    this.preview.set(this.creator.createPreview(formValue));
  }
}
