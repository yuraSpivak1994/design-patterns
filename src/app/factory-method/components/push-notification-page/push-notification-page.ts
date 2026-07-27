import { Component } from '@angular/core';
import { PushNotificationFormComponent } from './components/push-notification-form/push-notification-form';

@Component({
  selector: 'app-push-notification-page',
  imports: [PushNotificationFormComponent],
  templateUrl: './push-notification-page.html',
  styleUrl: './push-notification-page.scss',
})
export class PushNotificationPage {}
