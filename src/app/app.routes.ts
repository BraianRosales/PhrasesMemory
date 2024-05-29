import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'decks',
    pathMatch: 'full',
  },
  {
    path: 'decks',
    loadComponent: () =>
      import('./modules/decks/decks.component').then((c) => c.DecksComponent),
  },
  {
    path: 'config',
    loadComponent: () =>
      import('./modules/config/config.component').then((c) => c.ConfigComponent),
  },
];
