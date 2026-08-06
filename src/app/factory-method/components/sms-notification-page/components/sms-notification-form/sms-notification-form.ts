import { Component, signal } from '@angular/core';
import { FieldTree, FormField, form } from '@angular/forms/signals';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { SmsNotificationForm } from './sms-notification-form.models';
import { SmsNotificationPayloadCreator } from '../../../../domain/creators/sms-notification-payload.creator';
import { SmsNotificationPayloadParams } from '../../../../domain/models/sms-notification-payload-params.models';

@Component({
  selector: 'app-sms-notification-form',
  imports: [MatCardModule, MatFormField, MatLabel, MatInput, MatButton, FormField],
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

  public submit(event: SubmitEvent): void {
    event.preventDefault();

    this.preview.set(this.creator.createPreview(this.smsNotificationForm().value()));
  }
}
