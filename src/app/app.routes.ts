import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'empresa/add-or-update',
    loadComponent: () => import('./empresa/add-or-update-empresa/add-or-update-empresa.component').then((m) => m.AddOrUpdateEmpresaComponent),
  },
  {
    path: 'empresa',
    loadComponent: () => import('./empresa/empresa.component').then((m) => m.EmpresaComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
