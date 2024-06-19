import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./modules/dashboard/dashboard.component').then((c) => c.DashboardComponent),
  },
  {
    path: 'info',
    loadComponent: () =>
      import('./modules/info/info.component').then((c) => c.InfoComponent),
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('./modules/favorites/favorites.component').then((c) => c.FavoritesComponent),
  },
  {
    path: 'config',
    loadComponent: () =>
      import('./modules/config/config.component').then((c) => c.ConfigComponent),
  },
];
