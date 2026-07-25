import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'factory-method',
    pathMatch: 'full',
  },
  {
    path: 'factory-method',
    loadChildren: () => import('./factory-method/factory-method-routes').then((m) => m.factoryMethodRoutes),
  },
];
