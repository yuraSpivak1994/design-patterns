import { Routes } from '@angular/router';

export const factoryMethodRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/factory-method-page/factory-method-page').then((m) => m.FactoryMethodPage),
    children: [
      {
        path: '',
        redirectTo: 'email-notification',
        pathMatch: 'full',
      },
      {
        path: 'email-notification',
        loadComponent: () =>
          import('./components/email-notification-page/email-notification-page').then((m) => m.EmailNotificationPage),
      },
      {
        path: 'sms-notification',
        loadComponent: () =>
          import('./components/sms-notification-page/sms-notification-page').then((m) => m.SmsNotificationPage),
      },
      {
        path: 'push-notification',
        loadComponent: () =>
          import('./components/push-notification-page/push-notification-page').then((m) => m.PushNotificationPage),
      },
    ],
  },
];
