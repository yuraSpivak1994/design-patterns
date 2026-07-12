import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'factory-method',
    pathMatch: 'full',
  },
  {
    path: 'factory-method',
    loadComponent: () => import('./factory-method/factory-method').then((m) => m.FactoryMethod),
  },
];
