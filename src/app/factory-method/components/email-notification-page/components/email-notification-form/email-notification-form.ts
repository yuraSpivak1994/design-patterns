import { Component, signal, Signal } from '@angular/core';
import { EmailNotificationForm } from './email-notification-form.models';
import { FieldTree, FormField, form } from '@angular/forms/signals';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-email-notification-form',
  imports: [
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
    phone: ''
  })
  );
}
