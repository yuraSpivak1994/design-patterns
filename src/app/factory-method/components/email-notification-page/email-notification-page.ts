import { Component } from '@angular/core';
import { EmailNotificationFormComponent } from './components/email-notification-form/email-notification-form';

@Component({
  selector: 'app-email-notification-page',
  imports: [
    EmailNotificationFormComponent
  ],
  templateUrl: './email-notification-page.html',
  styleUrl: './email-notification-page.scss',
})
export class EmailNotificationPage {}
