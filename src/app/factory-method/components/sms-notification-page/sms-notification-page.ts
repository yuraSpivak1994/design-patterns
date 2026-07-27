import { Component } from '@angular/core';
import { SmsNotificationFormComponent } from './components/sms-notification-form/sms-notification-form';

@Component({
  selector: 'app-sms-notification-page',
  imports: [SmsNotificationFormComponent],
  templateUrl: './sms-notification-page.html',
  styleUrl: './sms-notification-page.scss',
})
export class SmsNotificationPage {}
