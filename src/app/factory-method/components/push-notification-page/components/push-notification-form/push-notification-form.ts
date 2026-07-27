import { Component, signal } from '@angular/core';
import { FieldTree, FormField, form } from '@angular/forms/signals';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { PushNotificationForm } from './push-notification-form.models';

@Component({
  selector: 'app-push-notification-form',
  imports: [MatFormField, MatLabel, MatInput, MatButton, FormField],
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
}
