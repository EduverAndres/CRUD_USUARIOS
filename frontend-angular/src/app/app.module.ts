import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { CreateUserComponent } from './components/CreateUserComponent/create-user.component';
import { ConfirmDialogComponent } from './components/Comfdelete/confirm-dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    AppComponent, // Importar el componente independiente
    UserListComponent, // Importar el componente independiente
    UpdateUserComponent, // Importar el componente independiente
    CreateUserComponent, // Importar el componente independiente
    ConfirmDialogComponent // Importar el componente independiente
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
