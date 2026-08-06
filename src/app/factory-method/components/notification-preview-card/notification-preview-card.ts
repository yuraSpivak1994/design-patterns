import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NotificationPreviewItem } from './notification-preview-card.models';

@Component({
  selector: 'app-notification-preview-card',
  imports: [MatCardModule],
  templateUrl: './notification-preview-card.html',
  styleUrl: './notification-preview-card.scss',
})
export class NotificationPreviewCardComponent {
  readonly title = input.required<string>();
  readonly items = input.required<readonly NotificationPreviewItem[]>();
}
