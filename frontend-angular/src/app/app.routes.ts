import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

export const routes: Routes = [
  { path: '', component: UserListComponent }, // Lista de usuarios
  { path: 'user/:id', component: UserDetailComponent } // Detalles del usuario
];
