import { Component, signal } from '@angular/core';
import { FieldTree, FormField, form } from '@angular/forms/signals';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { PushNotificationForm } from './push-notification-form.models';
import { PushNotificationPayloadCreator } from '../../../../domain/creators/push-notification-payload.creator';
import { PushNotificationPayloadParams } from '../../../../domain/models/push-notification-payload-params.models';

@Component({
  selector: 'app-push-notification-form',
  imports: [MatCardModule, MatFormField, MatLabel, MatInput, MatButton, FormField],
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

  private pushNotificationPayloadCreator = new PushNotificationPayloadCreator();
  protected readonly preview = signal<PushNotificationPayloadParams | null>(null);

  public submit($event: SubmitEvent) {
    $event.preventDefault();

    const formValue = this.pushNotificationForm().value;
    this.preview.set(this.pushNotificationPayloadCreator.createPreview(formValue()));
  }
}
