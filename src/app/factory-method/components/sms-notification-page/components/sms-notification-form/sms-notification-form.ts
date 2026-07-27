import { Component, signal } from '@angular/core';
import { FieldTree, FormField, form } from '@angular/forms/signals';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { SmsNotificationForm } from './sms-notification-form.models';

@Component({
  selector: 'app-sms-notification-form',
  imports: [MatFormField, MatLabel, MatInput, MatButton, FormField],
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
}
